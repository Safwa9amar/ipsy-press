-- AlterTable
ALTER TABLE `question` ADD COLUMN `type` ENUM('isVocal', 'isWritten', 'isVisual') NOT NULL DEFAULT 'isWritten';
