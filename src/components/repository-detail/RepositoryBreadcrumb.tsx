import Link from "next/link";

interface RepositoryBreadcrumbProps {
  owner: string;
  name: string;
  companySlug?: string | null;
}

export function RepositoryBreadcrumb({ owner, name, companySlug }: RepositoryBreadcrumbProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="sticky top-navbar z-20 bg-black/95 backdrop-blur-md py-3 border-b border-white/[0.06] -mx-3 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8 text-sm text-white/60 transition-all duration-200 w-[calc(100%+1.5rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] max-w-none overflow-x-auto scrollbar-none"
    >
      <div className="flex items-center flex-nowrap sm:flex-wrap text-xs sm:text-sm whitespace-nowrap min-w-0">
        <Link href="/" className="hover:text-white transition-colors shrink-0">
          Home
        </Link>
        <span className="mx-1.5 sm:mx-2 text-white/40 shrink-0">&gt;</span>
        <Link href="/companies" className="hover:text-white transition-colors shrink-0">
          Companies
        </Link>
        <span className="mx-1.5 sm:mx-2 text-white/40 shrink-0">&gt;</span>
        {companySlug ? (
          <Link href={`/companies/${companySlug}`} className="hover:text-white transition-colors shrink-0 max-w-[110px] sm:max-w-none truncate">
            {owner}
          </Link>
        ) : (
          <span className="text-white/80 select-none shrink-0 max-w-[110px] sm:max-w-none truncate">{owner}</span>
        )}
        <span className="mx-1.5 sm:mx-2 text-white/40 shrink-0">&gt;</span>
        <Link href="/repositories" className="hover:text-white transition-colors shrink-0">
          Repositories
        </Link>
        <span className="mx-1.5 sm:mx-2 text-white/40 shrink-0">&gt;</span>
        <span className="text-white hover:text-white/90 truncate max-w-[130px] sm:max-w-xs shrink-0 sm:shrink">{name}</span>
      </div>
    </nav>
  );
}
