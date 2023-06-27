/*
  Warnings:

  - You are about to drop the `alarm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `alarm` DROP FOREIGN KEY `Alarm_userId_fkey`;

-- DropTable
DROP TABLE `alarm`;

-- CreateTable
CREATE TABLE `AlarmClock` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL DEFAULT 'Alarm',
    `time` DATETIME(3) NOT NULL,
    `days` VARCHAR(191) NOT NULL,
    `isOn` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `AlarmClock` ADD CONSTRAINT `AlarmClock_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
