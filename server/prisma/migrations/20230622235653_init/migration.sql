-- AlterTable
ALTER TABLE `finallevel` ADD COLUMN `requiredScore` INTEGER NOT NULL DEFAULT 20,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `level` ADD COLUMN `requiredScore` INTEGER NOT NULL DEFAULT 0,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `sublevel` ADD COLUMN `requiredScore` INTEGER NOT NULL DEFAULT 10,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `subsublevel` ADD COLUMN `requiredScore` INTEGER NOT NULL DEFAULT 15,
    MODIFY `status` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `score` INTEGER NULL;
