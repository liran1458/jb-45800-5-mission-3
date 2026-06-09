-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: יוני 09, 2026 בזמן 07:13 AM
-- גרסת שרת: 9.6.0
-- PHP Version: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `development_meetings`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `development_groups`
--

CREATE TABLE `development_groups` (
  `id` char(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- הוצאת מידע עבור טבלה `development_groups`
--

INSERT INTO `development_groups` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
('11111111-1111-1111-1111-111111111111', 'Team UI', '2026-06-09 07:12:55', '2026-06-09 07:12:55'),
('22222222-2222-2222-2222-222222222222', 'Team Mobile', '2026-06-09 07:12:55', '2026-06-09 07:12:55'),
('33333333-3333-3333-3333-333333333333', 'Team React', '2026-06-09 07:12:55', '2026-06-09 07:12:55');

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) NOT NULL,
  `developmentGroupId` char(36) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `endDateTime` datetime NOT NULL,
  `description` text NOT NULL,
  `room` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- הוצאת מידע עבור טבלה `meetings`
--

INSERT INTO `meetings` (`id`, `developmentGroupId`, `startDateTime`, `endDateTime`, `description`, `room`, `createdAt`, `updatedAt`) VALUES
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', '11111111-1111-1111-1111-111111111111', '2026-06-10 10:00:00', '2026-06-10 11:00:00', 'UI planning meeting', 'Blue Room', '2026-06-09 07:12:55', '2026-06-09 07:12:55'),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', '22222222-2222-2222-2222-222222222222', '2026-06-11 12:00:00', '2026-06-11 13:30:00', 'Mobile sprint review', 'New York Room', '2026-06-09 07:12:55', '2026-06-09 07:12:55'),
('cccccccc-cccc-cccc-cccc-cccccccccccc', '22222222-2222-2222-2222-222222222222', '2026-06-12 09:00:00', '2026-06-12 10:00:00', 'Mobile architecture discussion', 'Large Board Room', '2026-06-09 07:12:55', '2026-06-09 07:12:55');

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `development_groups`
--
ALTER TABLE `development_groups`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `developmentGroupId` (`developmentGroupId`);

--
-- הגבלות לטבלאות שהוצאו
--

--
-- הגבלות לטבלה `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`developmentGroupId`) REFERENCES `development_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
