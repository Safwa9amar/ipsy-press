-- AlterTable
ALTER TABLE `question` MODIFY `type` ENUM('Vocal', 'Written', 'Visual', 'Radio') NOT NULL DEFAULT 'Written';
