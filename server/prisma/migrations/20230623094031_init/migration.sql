/*
  Warnings:

  - You are about to alter the column `type` on the `question` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `question` MODIFY `type` ENUM('Vocal', 'Written', 'Visual') NOT NULL DEFAULT 'Written';
