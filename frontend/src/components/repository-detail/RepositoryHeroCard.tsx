'use client';

import React from "react";
import Link from "next/link";
import Github from "lucide-react/dist/esm/icons/github";
import Star from "lucide-react/dist/esm/icons/star";
import GitFork from "lucide-react/dist/esm/icons/git-fork";
import Clock from "lucide-react/dist/esm/icons/clock";
import Globe from "lucide-react/dist/esm/icons/globe";
import FileText from "lucide-react/dist/esm/icons/file-text";
import ArrowUpRight from "lucide-react/dist/esm/icons/arrow-up-right";
import { RepositoryDetailResponse } from "@/lib/types";
import { resolveCompanyLogo } from "@/lib/companyLogos";

interface RepositoryHeroCardProps {
  repo: RepositoryDetailResponse;
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

export function RepositoryHeroCard({ repo }: RepositoryHeroCardProps) {
  const [imgFailed, setImgFailed] = React.useState(false);
  const avatarUrl = resolveCompanyLogo(repo.owner, repo.logoUrl || repo.ownerAvatarUrl, true);
  const updateHours = getRelativeTime(repo.syncedAt) || getRelativeTime(repo.githubCreatedAt) || "—";
  const forksCount = repo.forks !== undefined && repo.forks !== null ? repo.forks : 0;

  return (
    <div className="relative z-10 flex flex-col gap-5 sm:gap-6 rounded-xl border border-white/[0.08] bg-[#131316] p-4 sm:p-6 md:p-8 shadow-2xl w-full min-w-0 max-w-full overflow-hidden">
      {/* Top Section: Logo, Title, Owner, Description, Action Buttons */}
      <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-start md:justify-between w-full min-w-0">
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-start sm:gap-5 min-w-0 flex-1 w-full">
          {/* Logo Container */}
          <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-white p-2 shadow-xl self-start">
            {avatarUrl && !imgFailed ? (
              <img
                src={avatarUrl}
                alt={`${repo.owner} logo`}
                className="h-full w-full object-contain"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="text-xl sm:text-2xl font-bold text-neutral-900 select-none">
                {repo.owner.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          {/* Heading Information */}
          <div className="flex flex-col min-w-0 flex-1 w-full">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight break-words max-w-full">
              {repo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-white/50 mt-1 break-all">
              {repo.owner} / {repo.name}
            </p>
            <p className="mt-2.5 sm:mt-3 text-[13px] sm:text-[14px] text-white/70 max-w-2xl leading-relaxed line-clamp-3 break-words">
              {repo.description || "No description provided."}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 sm:gap-3 w-full md:w-auto shrink-0 md:self-start">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-[170px] justify-center items-center gap-2 rounded-lg bg-[#2d2e39] hover:bg-[#232329] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white border border-[#444c5b] hover:border-blue-500 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={16} />
            Repository Page
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-[170px] justify-center items-center gap-2 rounded-lg bg-[#2d2e39] hover:bg-[#232329] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white border border-[#444c5b] hover:border-blue-500 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Globe size={16} />
              Visit Website
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-white/[0.06] my-1 sm:my-2" />

      {/* Metadata Row */}
      <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2.5 text-[12px] sm:text-[13px] text-white/60 font-mono w-full min-w-0">
        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <Star size={15} className="text-[#71717A]/80 fill-[#71717A]/10 shrink-0" />
          <span className="font-semibold text-white/80">{repo.stars.toLocaleString("en-US")}</span>
          <span className="text-white/40">stars</span>
        </div>

        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <GitFork size={15} className="text-[#71717A]/80 shrink-0" />
          <span className="font-semibold text-white/80">{forksCount.toLocaleString("en-US")}</span>
          <span className="text-white/40">forks</span>
        </div>

        {repo.language && (
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shrink-0" />
            <span className="font-semibold text-white/80">{repo.language}</span>
          </div>
        )}

        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <FileText size={15} className="text-[#71717A]/80 shrink-0" />
          <span className="font-semibold text-white/80">{repo.license || "—"}</span>
        </div>

        <div className="flex items-center gap-1.5 whitespace-nowrap">
          <Clock size={15} className="text-[#71717A]/80 shrink-0" />
          <span className="text-white/40">Updated</span>
          <span className="font-semibold text-white/80">{updateHours}</span>
        </div>
      </div>

      {/* Topic Pills */}
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2 w-full min-w-0">
          {repo.topics.map((topic) => (
            <Link
              key={topic}
              href={`/repositories?topic=${topic}`}
              className="text-[11px] font-semibold text-white/80 px-[10px] py-[3px] rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/10 hover:text-white transition-all whitespace-nowrap cursor-pointer max-w-full truncate"
            >
              {topic}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
