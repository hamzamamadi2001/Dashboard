-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` TEXT NOT NULL,
    `provider` TEXT NOT NULL,
    `photo` VARCHAR(191) NOT NULL DEFAULT 'https://static.vecteezy.com/system/resources/previews/000/574/512/large_2x/vector-sign-of-user-icon.jpg',

    UNIQUE INDEX `User_id_key`(`id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `price` INTEGER NOT NULL,
    `unit` TEXT NOT NULL,
    `photo` VARCHAR(191) NOT NULL,
    `categoryId` INTEGER NOT NULL,

    UNIQUE INDEX `Product_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `photo` TEXT NOT NULL,

    UNIQUE INDEX `Category_id_key`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
