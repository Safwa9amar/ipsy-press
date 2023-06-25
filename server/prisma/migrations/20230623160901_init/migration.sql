/*
  Warnings:

  - You are about to drop the `_finalleveltosubsublevel` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subSubLevelId` to the `finalLevel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_finalleveltosubsublevel` DROP FOREIGN KEY `_finalLevelTosubSubLevel_A_fkey`;

-- DropForeignKey
ALTER TABLE `_finalleveltosubsublevel` DROP FOREIGN KEY `_finalLevelTosubSubLevel_B_fkey`;

-- AlterTable
ALTER TABLE `finallevel` ADD COLUMN `subSubLevelId` INTEGER NOT NULL;

-- DropTable
DROP TABLE `_finalleveltosubsublevel`;

-- AddForeignKey
ALTER TABLE `finalLevel` ADD CONSTRAINT `finalLevel_subSubLevelId_fkey` FOREIGN KEY (`subSubLevelId`) REFERENCES `subSubLevel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
