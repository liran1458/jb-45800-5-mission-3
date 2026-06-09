CREATE DATABASE IF NOT EXISTS `development_meetings`
DEFAULT CHARACTER SET utf8mb4
COLLATE utf8mb4_0900_ai_ci;

USE `development_meetings`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `meetings`;
DROP TABLE IF EXISTS `development_groups`;

CREATE TABLE `development_groups` (
  `id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `meetings` (
  `id` char(36) NOT NULL,
  `developmentGroupId` char(36) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `endDateTime` datetime NOT NULL,
  `description` text NOT NULL,
  `room` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `developmentGroupId` (`developmentGroupId`),
  CONSTRAINT `meetings_ibfk_1`
    FOREIGN KEY (`developmentGroupId`)
    REFERENCES `development_groups` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `development_groups` (`id`, `name`) VALUES
('11111111-1111-1111-1111-111111111111', 'Team UI'),
('22222222-2222-2222-2222-222222222222', 'Team Mobile'),
('33333333-3333-3333-3333-333333333333', 'Team React');

INSERT INTO `meetings` (`id`, `developmentGroupId`, `startDateTime`, `endDateTime`, `description`, `room`) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', '2026-06-10 10:00:00', '2026-06-10 11:00:00', 'UI planning meeting', 'Blue Room'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '22222222-2222-2222-2222-222222222222', '2026-06-11 12:00:00', '2026-06-11 13:30:00', 'Mobile sprint review', 'New York Room'),
('cccccccc-cccc-cccc-cccc-cccccccccccc', '22222222-2222-2222-2222-222222222222', '2026-06-12 09:00:00', '2026-06-12 10:00:00', 'Mobile architecture discussion', 'Large Board Room');

COMMIT;