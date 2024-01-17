/*
  Warnings:

  - Added the required column `icono` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `icono` VARCHAR(191) NOT NULL;
