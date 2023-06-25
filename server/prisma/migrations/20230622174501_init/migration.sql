/*
  Warnings:

  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `name`,
    ADD COLUMN `adress` VARCHAR(191) NULL,
    ADD COLUMN `age` INTEGER NULL,
    ADD COLUMN `birthDate` DATETIME(3) NULL,
    ADD COLUMN `disability` BOOLEAN NULL,
    ADD COLUMN `firstName` VARCHAR(191) NULL,
    ADD COLUMN `job` VARCHAR(191) NULL,
    ADD COLUMN `lastName` VARCHAR(191) NULL,
    ADD COLUMN `maritalStatus` VARCHAR(191) NULL,
    ADD COLUMN `other` VARCHAR(191) NULL,
    ADD COLUMN `sex` VARCHAR(191) NULL,
    ADD COLUMN `workPlace` VARCHAR(191) NULL,
    ADD COLUMN `workSeniority` VARCHAR(191) NULL;
