/*
  Warnings:

  - You are about to drop the column `userID` on the `disease` table. All the data in the column will be lost.
  - You are about to drop the column `diseaseID` on the `food` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `disease` DROP FOREIGN KEY `Disease_userID_fkey`;

-- DropForeignKey
ALTER TABLE `food` DROP FOREIGN KEY `Food_diseaseID_fkey`;

-- AlterTable
ALTER TABLE `disease` DROP COLUMN `userID`;

-- AlterTable
ALTER TABLE `food` DROP COLUMN `diseaseID`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `diseaseID` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_diseaseID_fkey` FOREIGN KEY (`diseaseID`) REFERENCES `Disease`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
