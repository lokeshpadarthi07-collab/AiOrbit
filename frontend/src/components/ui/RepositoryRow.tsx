'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Github from "lucide-react/dist/esm/icons/github";
import Star from "lucide-react/dist/esm/icons/star";
import GitFork from "lucide-react/dist/esm/icons/git-fork";
import { Repository } from "@/lib/types";

import { API_URL, prefetchUrl } from "@/lib/api";
import { resolveCompanyLogo } from "@/lib/companyLogos";

interface RepositoryRowProps {
  repo: Repository;
}

// Reusable subcomponents to reduce duplicated markup
function RepositoryTitle({ name, className = "" }: { name: string; className?: string }) {
  const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1) : name;
  return (
    <h3 className={`font-medium text-white text-[13px] truncate ${className}`}>
      {displayName}
      <span className="sr-only"> (opens in a new tab)</span>
    </h3>
  );
}

function GithubIconButton({ size, className = "" }: { size: number; className?: string }) {
  return (
    <div className={`h-[28px] w-[28px] rounded-full border border-[#444c5b] bg-[#2d2e39] flex items-center justify-center text-[#71717A] shrink-0 ${className}`}>
      <Github size={size} />
    </div>
  );
}

const getRelativeTime = (dateStr?: string | null) => {
  if (!dateStr) return null;
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return null;
    const diffMs = Date.now() - date.getTime();
    const diffMins = Math.floor(diffMs / (1000 * 60));
    if (diffMins < 60) return `${diffMins || 1}m`;
    const diffHrs = Math.floor(diffMins / 60);
    if (diffHrs < 24) return `${diffHrs}h`;
    const diffDays = Math.floor(diffHrs / 24);
    if (diffDays < 7) return `${diffDays}d`;
    const diffWeeks = Math.floor(diffDays / 7);
    return `${diffWeeks}w`;
  } catch {
    return null;
  }
};

export const RepositoryRow = React.memo(function RepositoryRow({ repo }: RepositoryRowProps) {
  const router = useRouter();
  
  const starCount = repo.stars;
  const forksCount = repo.forks !== undefined && repo.forks !== null ? repo.forks : 0;
  const sizeText = `${(repo.stars / 210 + 1.2).toFixed(1)} MB`;
  
  const licenseText = repo.license || null;
  const companyLogo = resolveCompanyLogo(repo.owner, repo.logoUrl || repo.ownerAvatarUrl, true);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    setLogoFailed(false);
  }, [companyLogo]);

  const updateHours = getRelativeTime(repo.syncedAt) || getRelativeTime(repo.githubCreatedAt) || "—";

  const repoSlug = repo.slug || repo.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const targetUrl = `/repositories/${repoSlug}`;

  const prefetchRow = () => {
    try { router.prefetch(targetUrl); } catch {}
    prefetchUrl(`${API_URL}/api/v1/repositories/${repoSlug}`);
  };

  const handleRowClick = () => {
    router.push(targetUrl);
  };

  return (
    <>
      {/* Desktop & Tablet Grid Row */}
      <div
        role="link"
        tabIndex={0}
        onClick={handleRowClick}
        onMouseEnter={prefetchRow}
        onTouchStart={prefetchRow}
        onFocus={prefetchRow}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleRowClick();
          }
        }}
        aria-label={`View details for ${repo.name} repository`}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
        className="hidden sm:grid grid-cols-[minmax(0,2.5fr)_minmax(0,1.8fr)_minmax(0,1.5fr)_60px] md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.8fr)_minmax(0,1.2fr)_minmax(0,1.5fr)_60px] lg:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,1.2fr)_minmax(0,1.5fr)_60px] xl:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.2fr)_60px] gap-[10px] items-center py-[7px] px-[9px] h-[65px] bg-transparent hover:bg-white/[0.02] transition-colors w-full focus-visible:bg-white/[0.02] focus-visible:outline-none group border-b border-white/[0.06] last:border-b-0 cursor-pointer"
      >

        {/* Column 1: Repository Name (Vertically Centered) */}
        <div className="min-w-0 flex items-center h-full text-left pl-5">
          <RepositoryTitle name={repo.name} className="group-hover:text-white transition-colors" />
        </div>

        {/* Column 2: Company / Owner */}
        <div className="min-w-0 flex items-center gap-2.5 text-[13px] text-[#A1A1AA] font-semibold hidden md:flex text-left">
          <div className="flex h-8 w-8 md:h-11 md:w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#232326]/60 bg-white group-hover:border-[#6E56CF] transition-colors">
            {companyLogo && !logoFailed ? (
              <img
                src={companyLogo}
                alt={`${repo.owner} logo`}
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 md:h-9 md:w-9 object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span
                aria-label={`${repo.owner} logo`}
                className="flex h-6 w-6 md:h-9 md:w-9 items-center justify-center rounded-md bg-neutral-100 text-xs md:text-sm font-bold text-neutral-900"
              >
                {repo.owner.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <span className="truncate text-white text-[13px] font-medium group-hover:text-white transition-colors">{repo.owner}</span>
        </div>

        {/* Column 4: Stars */}
        <div className="text-[13px] text-[#A1A1AA] font-mono flex items-center justify-center gap-[6px] whitespace-nowrap w-full">
          <Star size={16} className="text-[#71717A]/80 fill-[#71717A]/10 shrink-0" />
          <span>{starCount.toLocaleString("en-US")}</span>
        </div>

        {/* Column 5: Forks */}
        <div className="text-[13px] text-[#A1A1AA] font-mono flex items-center justify-center gap-[6px] hidden lg:flex whitespace-nowrap w-full">
          <GitFork size={16} className="text-[#71717A]/80 shrink-0" />
          <span>{forksCount.toLocaleString("en-US")}</span>
        </div>

        {/* Column 6: License Badge */}
        <div className="hidden md:flex justify-center items-center h-full w-full">
          {licenseText ? (
            <span className="text-[11px] font-semibold text-[#A1A1AA] px-[8px] py-[2px] h-[22px] leading-[16px] flex items-center rounded-full border border-[#444c5b] bg-[#292932] whitespace-nowrap">
              {licenseText}
            </span>
          ) : (
            <span className="text-[#71717A] text-[11px] font-mono">—</span>
          )}
        </div>

        {/* Column 7: Size */}
        <div className="text-[13px] text-[#A1A1AA] font-mono flex items-center justify-center hidden xl:flex whitespace-nowrap w-full">
          {sizeText}
        </div>

        {/* Column 8: Updated */}
        <div className="text-[13px] text-[#A1A1AA] font-mono flex items-center justify-center block md:hidden lg:flex whitespace-nowrap w-full">
          {updateHours}
        </div>

        {/* Column 9: Action Link */}
        <div className="flex justify-center items-center w-full">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Open ${repo.name} repository on GitHub`}
            className="z-10 cursor-pointer"
          >
            <GithubIconButton size={20} className="hover:text-white hover:bg-[#232329] transition-all" />
          </a>
        </div>
      </div>

      {/* Mobile Card List Row */}
      <div
        role="link"
        tabIndex={0}
        onClick={handleRowClick}
        onMouseEnter={prefetchRow}
        onTouchStart={prefetchRow}
        onFocus={prefetchRow}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleRowClick();
          }
        }}
        aria-label={`View details for ${repo.name} repository`}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
        className="flex sm:hidden p-[12px] bg-transparent hover:bg-white/[0.02] transition-colors w-full focus-visible:bg-white/[0.02] focus-visible:outline-none justify-between items-center gap-[10px] border-b border-white/[0.06] last:border-b-0 cursor-pointer overflow-hidden"
      >
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          {/* Company Logo: Strict MCP Container & Inner Size */}
          <div className="flex h-8 w-8 md:h-11 md:w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#232326]/60 bg-white">
            {companyLogo && !logoFailed ? (
              <img
                src={companyLogo}
                alt={`${repo.owner} logo`}
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="h-6 w-6 md:h-9 md:w-9 object-contain"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <span
                aria-label={`${repo.owner} logo`}
                className="flex h-6 w-6 md:h-9 md:w-9 items-center justify-center rounded-md bg-neutral-100 text-xs md:text-sm font-bold text-neutral-900"
              >
                {(repo.owner || "?").charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* Row 1: Title & Owner */}
            <div className="flex items-center min-w-0 gap-1.5 overflow-hidden">
              <h3 className="font-semibold text-white text-[13px] truncate min-w-0 flex-1">
                {repo.name ? repo.name.charAt(0).toUpperCase() + repo.name.slice(1) : repo.name}
              </h3>
              <span className="text-[11px] text-[#71717A] shrink-0 truncate max-w-[120px]">
                by {repo.owner}
              </span>
            </div>

            {/* Row 2: Stats Inline Bar with Crisp Icons */}
            <div className="flex items-center gap-2 text-[11px] text-[#71717A] font-mono mt-1 overflow-hidden whitespace-nowrap">
              <span className="inline-flex items-center gap-1 shrink-0 text-[#A1A1AA]">
                <Star size={12} className="text-amber-400 fill-amber-400/20 shrink-0" />
                {starCount.toLocaleString("en-US")}
              </span>
              <span className="text-[#3F3F46]">·</span>
              <span className="inline-flex items-center gap-1 shrink-0 text-[#A1A1AA]">
                <GitFork size={12} className="text-[#71717A] shrink-0" />
                {forksCount.toLocaleString("en-US")}
              </span>
              {licenseText && (
                <>
                  <span className="text-[#3F3F46]">·</span>
                  <span className="px-[6px] py-[1px] rounded-full border border-[#444c5b] bg-[#292932] text-[9px] text-[#A1A1AA] truncate max-w-[80px] shrink-0">
                    {licenseText}
                  </span>
                </>
              )}
              <span className="text-[#3F3F46]">·</span>
              <span className="shrink-0 text-[#71717A]">{sizeText}</span>
              {updateHours !== "—" && (
                <>
                  <span className="text-[#3F3F46]">·</span>
                  <span className="text-emerald-400 shrink-0">{updateHours}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Far Right Action Icon */}
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          aria-label={`Open ${repo.name} repository on GitHub`}
          className="z-10 shrink-0 cursor-pointer p-1 -mr-1"
        >
          <GithubIconButton size={16} className="hover:text-white hover:bg-[#232329] transition-all" />
        </a>
      </div>
    </>
  );
});
