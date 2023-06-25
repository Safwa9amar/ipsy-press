/*
  Warnings:

  - You are about to drop the column `job` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `job`,
    ADD COLUMN `jobsID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_jobsID_fkey` FOREIGN KEY (`jobsID`) REFERENCES `Jobs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
