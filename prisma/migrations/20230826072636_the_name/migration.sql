-- AlterTable
ALTER TABLE `task` ADD COLUMN `allChildrenDone` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `color` VARCHAR(191) NULL,
    ADD COLUMN `end_date` DATETIME(3) NULL,
    ADD COLUMN `label` VARCHAR(191) NULL;
