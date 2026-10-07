-- CreateTable
CREATE TABLE "BrandLogo" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "svgContent" TEXT,
    "domain" TEXT,
    "category" TEXT DEFAULT 'ai',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BrandLogo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BrandLogo_slug_key" ON "BrandLogo"("slug");

-- CreateIndex
CREATE INDEX "BrandLogo_slug_idx" ON "BrandLogo"("slug");

-- CreateIndex
CREATE INDEX "BrandLogo_name_idx" ON "BrandLogo"("name");

-- AlterTable
ALTER TABLE "AIModel" ADD COLUMN "logoId" TEXT;

-- CreateIndex
CREATE INDEX "AIModel_logoId_idx" ON "AIModel"("logoId");

-- AddForeignKey
ALTER TABLE "AIModel" ADD CONSTRAINT "AIModel_logoId_fkey" FOREIGN KEY ("logoId") REFERENCES "BrandLogo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
