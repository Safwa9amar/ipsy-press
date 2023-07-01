/*
  Warnings:

  - Added the required column `finalLevelId` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `food` ADD COLUMN `finalLevelId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_finalLevelId_fkey` FOREIGN KEY (`finalLevelId`) REFERENCES `finalLevel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
