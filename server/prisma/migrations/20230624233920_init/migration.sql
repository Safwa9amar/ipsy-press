/*
  Warnings:

  - You are about to drop the column `jobsID` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_jobsID_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `jobsID`;
