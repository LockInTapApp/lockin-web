import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  /** Pixel size of the icon mark. */
  size?: number;
  /** Show the "Lockin" wordmark next to the mark. */
  withWordmark?: boolean;
  /** Extra classes on the wrapper. */
  className?: string;
  /** Classes on the wordmark text (e.g. color for dark vs light backgrounds). */
  wordmarkClassName?: string;
  /** Eager-load (use for the above-the-fold navbar logo). */
  priority?: boolean;
};

export function Logo({
  size = 28,
  withWordmark = true,
  className,
  wordmarkClassName,
  priority = false,
}: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/lockin-icon.png"
        alt={withWordmark ? "" : "Lockin"}
        width={size}
        height={size}
        priority={priority}
        className="rounded-[7px] ring-1 ring-white/10"
        style={{ width: size, height: size }}
      />
      {withWordmark && (
        <span className={cn("font-display font-semibold tracking-tight", wordmarkClassName)}>
          Lockin
        </span>
      )}
    </span>
  );
}
