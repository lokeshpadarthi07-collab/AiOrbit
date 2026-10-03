import { resolveRepositoryCompany } from "./repo-companies";

/**
 * Resolves repository company logo:
 * 1. Prioritizes explicit database logoUrl if provided.
 * 2. Uses repo-companies mapping.
 * 3. Falls back to GitHub organization avatar.
 */
export function resolveCompanyLogo(
  owner?: string | null,
  logoUrl?: string | null,
  isCompany?: boolean
): string | null {
  if (logoUrl && logoUrl.trim().length > 0) {
    return logoUrl.trim();
  }

  if (owner) {
    const resolved = resolveRepositoryCompany({ owner, logoUrl });
    if (resolved?.logoUrl && !resolved.logoUrl.endsWith(".svg")) {
      return resolved.logoUrl;
    }
    return `https://github.com/${owner}.png`;
  }

  return null;
}
