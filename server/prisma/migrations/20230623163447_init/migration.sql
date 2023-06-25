/*
  Warnings:

  - You are about to drop the column `foodID` on the `disease` table. All the data in the column will be lost.
  - Added the required column `diseaseId` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `disease` DROP FOREIGN KEY `Disease_foodID_fkey`;

-- AlterTable
ALTER TABLE `disease` DROP COLUMN `foodID`;

-- AlterTable
ALTER TABLE `food` ADD COLUMN `diseaseId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_diseaseId_fkey` FOREIGN KEY (`diseaseId`) REFERENCES `Disease`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
