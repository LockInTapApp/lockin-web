#!/usr/bin/env bash
# PostToolUse hook — auto-commit and push to staging after each Write/Edit.
# Only fires when the current branch is "staging".

set -u

file=$(node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const j=JSON.parse(s);process.stdout.write(j.tool_response?.filePath||j.tool_input?.file_path||"")}catch(e){}})' 2>/dev/null)

[ -z "$file" ] && exit 0

# Only run on staging branch
branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)
[ "$branch" = "staging" ] || exit 0

# Skip files outside the repo (git add will fail anyway, but exit cleanly)
git add -- "$file" 2>/dev/null || exit 0

# Nothing staged? (gitignored file, no actual change) — bail.
if git diff --cached --quiet; then
  exit 0
fi

name=$(basename "$file")
git commit -m "auto: update $name" >/dev/null 2>&1 || exit 0
git push origin staging >/dev/null 2>&1 || true

exit 0
