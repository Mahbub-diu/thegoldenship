-- AlterTable
ALTER TABLE `user` ADD COLUMN `provider` VARCHAR(191) NULL DEFAULT 'local',
    ADD COLUMN `providerId` VARCHAR(191) NULL;
