/*
  Warnings:

  - You are about to drop the `alarmclock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `alarmclock` DROP FOREIGN KEY `AlarmClock_userId_fkey`;

-- DropTable
DROP TABLE `alarmclock`;

-- CreateTable
CREATE TABLE `Alarm` (
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
ALTER TABLE `Alarm` ADD CONSTRAINT `Alarm_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
