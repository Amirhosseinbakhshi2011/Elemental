export type Category =
  | "alkali"
  | "alkaline"
  | "transition"
  | "post-transition"
  | "metalloid"
  | "nonmetal"
  | "halogen"
  | "noble"
  | "lanthanide"
  | "actinide";

export interface ElementData {
  z: number;
  symbol: string;
  name: string;
  nameFa: string;
  category: Category;
  mass: number;
  electronConfig: string;
  shells: number[]; // electrons per shell
  col: number; // 1-18
  row: number; // 1-7 (+ lanth/actin)
}

export const CATEGORY_COLORS: Record<Category, string> = {
  alkali: "#ff6b6b",
  alkaline: "#feca57",
  transition: "#54a0ff",
  "post-transition": "#00d2d3",
  metalloid: "#5f27cd",
  nonmetal: "#1dd1a1",
  halogen: "#ff9ff3",
  noble: "#a29bfe",
  lanthanide: "#fd79a8",
  actinide: "#e17055",
};

export const CATEGORY_LABELS: Record<Category, string> = {
  alkali: "فلز قلیایی",
  alkaline: "قلیایی خاکی",
  transition: "فلز واسطه",
  "post-transition": "فلز پس‌واسطه",
  metalloid: "نیمه‌فلز",
  nonmetal: "نافلز",
  halogen: "هالوژن",
  noble: "گاز نجیب",
  lanthanide: "لانتانید",
  actinide: "اکتینید",
};

// Full enough set for a beautiful table (main group + selected)
export const ELEMENTS: ElementData[] = [
  { z: 1, symbol: "H", name: "Hydrogen", nameFa: "هیدروژن", category: "nonmetal", mass: 1.008, electronConfig: "1s¹", shells: [1], col: 1, row: 1 },
  { z: 2, symbol: "He", name: "Helium", nameFa: "هلیوم", category: "noble", mass: 4.003, electronConfig: "1s²", shells: [2], col: 18, row: 1 },

  { z: 3, symbol: "Li", name: "Lithium", nameFa: "لیتیوم", category: "alkali", mass: 6.941, electronConfig: "[He] 2s¹", shells: [2, 1], col: 1, row: 2 },
  { z: 4, symbol: "Be", name: "Beryllium", nameFa: "بریلیوم", category: "alkaline", mass: 9.012, electronConfig: "[He] 2s²", shells: [2, 2], col: 2, row: 2 },
  { z: 5, symbol: "B", name: "Boron", nameFa: "بور", category: "metalloid", mass: 10.81, electronConfig: "[He] 2s² 2p¹", shells: [2, 3], col: 13, row: 2 },
  { z: 6, symbol: "C", name: "Carbon", nameFa: "کربن", category: "nonmetal", mass: 12.01, electronConfig: "[He] 2s² 2p²", shells: [2, 4], col: 14, row: 2 },
  { z: 7, symbol: "N", name: "Nitrogen", nameFa: "نیتروژن", category: "nonmetal", mass: 14.01, electronConfig: "[He] 2s² 2p³", shells: [2, 5], col: 15, row: 2 },
  { z: 8, symbol: "O", name: "Oxygen", nameFa: "اکسیژن", category: "nonmetal", mass: 16.00, electronConfig: "[He] 2s² 2p⁴", shells: [2, 6], col: 16, row: 2 },
  { z: 9, symbol: "F", name: "Fluorine", nameFa: "فلوئور", category: "halogen", mass: 19.00, electronConfig: "[He] 2s² 2p⁵", shells: [2, 7], col: 17, row: 2 },
  { z: 10, symbol: "Ne", name: "Neon", nameFa: "نئون", category: "noble", mass: 20.18, electronConfig: "[He] 2s² 2p⁶", shells: [2, 8], col: 18, row: 2 },

  { z: 11, symbol: "Na", name: "Sodium", nameFa: "سدیم", category: "alkali", mass: 22.99, electronConfig: "[Ne] 3s¹", shells: [2, 8, 1], col: 1, row: 3 },
  { z: 12, symbol: "Mg", name: "Magnesium", nameFa: "منیزیم", category: "alkaline", mass: 24.31, electronConfig: "[Ne] 3s²", shells: [2, 8, 2], col: 2, row: 3 },
  { z: 13, symbol: "Al", name: "Aluminum", nameFa: "آلومینیوم", category: "post-transition", mass: 26.98, electronConfig: "[Ne] 3s² 3p¹", shells: [2, 8, 3], col: 13, row: 3 },
  { z: 14, symbol: "Si", name: "Silicon", nameFa: "سیلیسیم", category: "metalloid", mass: 28.09, electronConfig: "[Ne] 3s² 3p²", shells: [2, 8, 4], col: 14, row: 3 },
  { z: 15, symbol: "P", name: "Phosphorus", nameFa: "فسفر", category: "nonmetal", mass: 30.97, electronConfig: "[Ne] 3s² 3p³", shells: [2, 8, 5], col: 15, row: 3 },
  { z: 16, symbol: "S", name: "Sulfur", nameFa: "گوگرد", category: "nonmetal", mass: 32.07, electronConfig: "[Ne] 3s² 3p⁴", shells: [2, 8, 6], col: 16, row: 3 },
  { z: 17, symbol: "Cl", name: "Chlorine", nameFa: "کلر", category: "halogen", mass: 35.45, electronConfig: "[Ne] 3s² 3p⁵", shells: [2, 8, 7], col: 17, row: 3 },
  { z: 18, symbol: "Ar", name: "Argon", nameFa: "آرگون", category: "noble", mass: 39.95, electronConfig: "[Ne] 3s² 3p⁶", shells: [2, 8, 8], col: 18, row: 3 },

  { z: 19, symbol: "K", name: "Potassium", nameFa: "پتاسیم", category: "alkali", mass: 39.10, electronConfig: "[Ar] 4s¹", shells: [2, 8, 8, 1], col: 1, row: 4 },
  { z: 20, symbol: "Ca", name: "Calcium", nameFa: "کلسیم", category: "alkaline", mass: 40.08, electronConfig: "[Ar] 4s²", shells: [2, 8, 8, 2], col: 2, row: 4 },
  { z: 21, symbol: "Sc", name: "Scandium", nameFa: "اسکاندیم", category: "transition", mass: 44.96, electronConfig: "[Ar] 3d¹ 4s²", shells: [2, 8, 9, 2], col: 3, row: 4 },
  { z: 22, symbol: "Ti", name: "Titanium", nameFa: "تیتانیوم", category: "transition", mass: 47.87, electronConfig: "[Ar] 3d² 4s²", shells: [2, 8, 10, 2], col: 4, row: 4 },
  { z: 24, symbol: "Cr", name: "Chromium", nameFa: "کروم", category: "transition", mass: 52.00, electronConfig: "[Ar] 3d⁵ 4s¹", shells: [2, 8, 13, 1], col: 6, row: 4 },
  { z: 26, symbol: "Fe", name: "Iron", nameFa: "آهن", category: "transition", mass: 55.85, electronConfig: "[Ar] 3d⁶ 4s²", shells: [2, 8, 14, 2], col: 8, row: 4 },
  { z: 28, symbol: "Ni", name: "Nickel", nameFa: "نیکل", category: "transition", mass: 58.69, electronConfig: "[Ar] 3d⁸ 4s²", shells: [2, 8, 16, 2], col: 10, row: 4 },
  { z: 29, symbol: "Cu", name: "Copper", nameFa: "مس", category: "transition", mass: 63.55, electronConfig: "[Ar] 3d¹⁰ 4s¹", shells: [2, 8, 18, 1], col: 11, row: 4 },
  { z: 30, symbol: "Zn", name: "Zinc", nameFa: "روی", category: "transition", mass: 65.38, electronConfig: "[Ar] 3d¹⁰ 4s²", shells: [2, 8, 18, 2], col: 12, row: 4 },
  { z: 35, symbol: "Br", name: "Bromine", nameFa: "برم", category: "halogen", mass: 79.90, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵", shells: [2, 8, 18, 7], col: 17, row: 4 },
  { z: 36, symbol: "Kr", name: "Krypton", nameFa: "کریپتون", category: "noble", mass: 83.80, electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶", shells: [2, 8, 18, 8], col: 18, row: 4 },

  { z: 47, symbol: "Ag", name: "Silver", nameFa: "نقره", category: "transition", mass: 107.9, electronConfig: "[Kr] 4d¹⁰ 5s¹", shells: [2, 8, 18, 18, 1], col: 11, row: 5 },
  { z: 53, symbol: "I", name: "Iodine", nameFa: "ید", category: "halogen", mass: 126.9, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵", shells: [2, 8, 18, 18, 7], col: 17, row: 5 },
  { z: 54, symbol: "Xe", name: "Xenon", nameFa: "زنون", category: "noble", mass: 131.3, electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶", shells: [2, 8, 18, 18, 8], col: 18, row: 5 },

  { z: 79, symbol: "Au", name: "Gold", nameFa: "طلا", category: "transition", mass: 197.0, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", shells: [2, 8, 18, 32, 18, 1], col: 11, row: 6 },
  { z: 80, symbol: "Hg", name: "Mercury", nameFa: "جیوه", category: "transition", mass: 200.6, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", shells: [2, 8, 18, 32, 18, 2], col: 12, row: 6 },
  { z: 82, symbol: "Pb", name: "Lead", nameFa: "سرب", category: "post-transition", mass: 207.2, electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", shells: [2, 8, 18, 32, 18, 4], col: 14, row: 6 },
  { z: 92, symbol: "U", name: "Uranium", nameFa: "اورانیوم", category: "actinide", mass: 238.0, electronConfig: "[Rn] 5f³ 6d¹ 7s²", shells: [2, 8, 18, 32, 21, 9, 2], col: 3, row: 7 },
];