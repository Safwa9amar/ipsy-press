/*
  Warnings:

  - You are about to drop the column `diseaseId` on the `food` table. All the data in the column will be lost.
  - Added the required column `diseaseID` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `food` DROP FOREIGN KEY `Food_diseaseId_fkey`;

-- AlterTable
ALTER TABLE `food` DROP COLUMN `diseaseId`,
    ADD COLUMN `diseaseID` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Food` ADD CONSTRAINT `Food_diseaseID_fkey` FOREIGN KEY (`diseaseID`) REFERENCES `Disease`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
