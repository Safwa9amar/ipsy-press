-- AlterTable
ALTER TABLE `user` ADD COLUMN `jobsID` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_jobsID_fkey` FOREIGN KEY (`jobsID`) REFERENCES `Jobs`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;