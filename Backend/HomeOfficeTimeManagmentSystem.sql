-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 13. Jan 2024 um 01:41
-- Server-Version: 10.4.28-MariaDB
-- PHP-Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `HomeOfficeTimeManagmentSystem`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `timestamps`
--

CREATE TABLE `timestamps` (
  `id` int(11) NOT NULL,
  `worker_personalid` varchar(255) DEFAULT NULL,
  `start_timestamp` datetime DEFAULT NULL,
  `end_timestamp` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `timestamps`
--

INSERT INTO `timestamps` (`id`, `worker_personalid`, `start_timestamp`, `end_timestamp`) VALUES


-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `worker`
--

CREATE TABLE `worker` (
  `id` int(11) NOT NULL,
  `vorname` varchar(255) DEFAULT NULL,
  `nachname` varchar(255) DEFAULT NULL,
  `personalid` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Daten für Tabelle `worker`
--

INSERT INTO `worker` (`id`, `vorname`, `nachname`, `personalid`, `password`) VALUES
(1, 'Max', 'Mustermann', '12345', '$2b$10$jObWqfZk.IaAdr3NABBE0.TB5bhNUnVvNp.hrTPYvkAHRJKB4oaUq'),
(2, 'Max', 'Mustermann', '12346', '$2b$10$09QXW4g0Wvi0ayNzt6Ftmejylzez7KxiRETi7w2SDgoov4572MROa');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `timestamps`
--
ALTER TABLE `timestamps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `worker_personalid` (`worker_personalid`);

--
-- Indizes für die Tabelle `worker`
--
ALTER TABLE `worker`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personalid` (`personalid`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `timestamps`
--
ALTER TABLE `timestamps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT für Tabelle `worker`
--
ALTER TABLE `worker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `timestamps`
--
ALTER TABLE `timestamps`
  ADD CONSTRAINT `timestamps_ibfk_1` FOREIGN KEY (`worker_personalid`) REFERENCES `worker` (`personalid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
