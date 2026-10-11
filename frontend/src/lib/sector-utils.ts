/**
 * Sector Normalization Utility
 *
 * Converts compound/dual-categorized sectors (e.g. "Artificial Intelligence / Developer Tools",
 * "Aerospace / Space Technology", "AI/ML") into a single, clean, suitable sector.
 */

export const SECTOR_NORMALIZATION_MAP: Record<string, string> = {
  // Dual AI sectors (dropping redundant "Artificial Intelligence / " prefix since platform is AI Orbit)
  "Artificial Intelligence / Developer Tools": "Developer Tools",
  "Artificial Intelligence / Conversational AI": "Conversational AI",
  "Artificial Intelligence / Product & Software": "Software",
  "Artificial Intelligence / Image & Video": "Image & Video",
  "Artificial Intelligence / Voice & Audio": "Voice & Audio",
  "Artificial Intelligence / Content & Copywriting": "Content & Copywriting",
  "Artificial Intelligence / Productivity & Search": "Productivity & Search",
  "Artificial Intelligence / Healthcare & Biotech": "Healthcare & Biotech",
  "Artificial Intelligence / Machine Learning Platforms": "Machine Learning Platforms",

  // Dual / compound industry sectors
  "Aerospace / Space Technology": "Aerospace Technology",
  "Transportation/Trucking/Railroad": "Transportation",
  "Materials Science / Deep Tech": "Materials Science",
  "Robotics / Data Engineering": "Robotics",
  "Fleet / Asset Management": "Fleet Management",
  "Defense / GovTech": "Defense Technology",
  "HR Tech / Recruiting": "HR Tech",
  "Financial Services / Compliance": "Financial Services",
  "Government / Public Sector": "Government Technology",
  "Architecture / Energy": "Energy Technology",
  "Productivity / Consumer Software": "Productivity Software",
  "Cybersecurity / Fintech": "Cybersecurity",
  "Chemicals / Life Sciences": "Biotechnology",

  // Common dual acronyms and variations
  "AI/ML": "Artificial Intelligence",
  "AI / ML": "Artificial Intelligence",
  "AI/ML Platforms": "Machine Learning Platforms",
  "AI / ML Platforms": "Machine Learning Platforms",
  "ML / AI": "Artificial Intelligence",
  "ML/AI": "Artificial Intelligence",
};

/**
 * Normalizes a company sector string into a single suitable sector.
 *
 * @param sector - Raw sector value from company data or database.
 * @returns Clean, single sector string (or empty string if none).
 */
export function normalizeSector(sector?: string | null): string {
  if (!sector) return "";
  const trimmed = sector.trim();
  if (!trimmed) return "";

  // 1. Direct match in dictionary
  if (SECTOR_NORMALIZATION_MAP[trimmed]) {
    return SECTOR_NORMALIZATION_MAP[trimmed];
  }

  // 2. Case-insensitive lookup in dictionary
  const lower = trimmed.toLowerCase();
  for (const [key, value] of Object.entries(SECTOR_NORMALIZATION_MAP)) {
    if (key.toLowerCase() === lower) {
      return value;
    }
  }

  // 3. Pattern: "Artificial Intelligence / <SubSector>" or "AI / <SubSector>"
  const aiPrefixMatch = trimmed.match(/^(?:Artificial Intelligence|AI)\s*\/\s*(.+)$/i);
  if (aiPrefixMatch && aiPrefixMatch[1]) {
    return aiPrefixMatch[1].trim();
  }

  // 4. Pattern: "<SubSector> / Artificial Intelligence" or "<SubSector> / AI"
  const aiSuffixMatch = trimmed.match(/^(.+?)\s*\/\s*(?:Artificial Intelligence|AI)$/i);
  if (aiSuffixMatch && aiSuffixMatch[1]) {
    return aiSuffixMatch[1].trim();
  }

  // 5. General slash-separated dual sectors: "A / B" or "A/B"
  if (trimmed.includes("/")) {
    const parts = trimmed.split("/").map((p) => p.trim()).filter(Boolean);
    // Prioritize non-generic domain name over generic AI/ML keywords
    const nonGeneric = parts.filter(
      (p) => !/^(?:Artificial Intelligence|AI|ML|Machine Learning)$/i.test(p)
    );
    if (nonGeneric.length > 0) {
      return nonGeneric[0];
    }
    return parts[0] || trimmed;
  }

  return trimmed;
}
