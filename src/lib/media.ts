export const MEDIA = {
  heroBackground:
    "https://static.prod-images.emergentagent.com/jobs/478ab644-351e-4d71-bb59-c6b85ed59bc3/images/78c83c7abde0fe8e9becc9ec7fc0727e5d8920e723e27117427af745466a9f59.png",
  productHero:
    "https://static.prod-images.emergentagent.com/jobs/478ab644-351e-4d71-bb59-c6b85ed59bc3/images/90a84c2efdfede3178dd89cee142378112e08bc8604f1209ed5a743ac18637aa.png",
  productInteraction:
    "https://static.prod-images.emergentagent.com/jobs/478ab644-351e-4d71-bb59-c6b85ed59bc3/images/834d5d26299b61134653f8fb126d6d4bb2ec306e0f0e8b89231957f639416d04.png",
  productVariants:
    "https://static.prod-images.emergentagent.com/jobs/478ab644-351e-4d71-bb59-c6b85ed59bc3/images/2ce384487f0350077cf1bb7f5ea42029b07a314d8007f11f50e2e63cf6794b90.png",
  userFocus:
    "https://images.unsplash.com/photo-1555963153-11ff60182d08?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjBmb2N1c2luZyUyMG9uJTIwd29yayUyMGRhcmslMjBsaWdodGluZ3xlbnwwfHx8fDE3Nzk5NjQxNTJ8MA&ixlib=rb-4.1.0&q=85",
};

export type Colorway = {
  id: "obsidian" | "porcelain" | "cobalt";
  name: string;
  hex: string;
  ring: string;
};

export const COLORWAYS: Colorway[] = [
  { id: "obsidian", name: "Obsidian", hex: "#0a0a0a", ring: "ring-white/20" },
  { id: "porcelain", name: "Porcelain", hex: "#f5f5f4", ring: "ring-white/40" },
  { id: "cobalt", name: "Cobalt", hex: "#1e40af", ring: "ring-cyan-400/40" },
];
