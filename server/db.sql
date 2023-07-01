-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 01 juil. 2023 à 17:42
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ipsy_press`
--

-- --------------------------------------------------------

--
-- Structure de la table `advice`
--

CREATE TABLE `advice` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `alarmclock`
--

CREATE TABLE `alarmclock` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL DEFAULT 'Alarm',
  `time` datetime(3) NOT NULL,
  `days` varchar(191) NOT NULL,
  `isOn` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `alarmclock`
--

INSERT INTO `alarmclock` (`id`, `title`, `time`, `days`, `isOn`, `createdAt`, `updatedAt`, `userId`) VALUES
(14, 'Alarm', '2023-07-01 17:33:57.949', '[1,2,3,4,5,6,7]', 1, '2023-06-28 22:31:40.053', '2023-07-01 15:39:53.115', 5);

-- --------------------------------------------------------

--
-- Structure de la table `answeroptions`
--

CREATE TABLE `answeroptions` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `answeroptions`
--

INSERT INTO `answeroptions` (`id`, `title`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Je suis entièrement d\'accord\r\n', '', '2023-06-30 16:01:21.000', '2023-06-30 13:01:21.000'),
(2, 'Je suis d\'accord', '', '2023-06-30 18:01:21.000', '2023-06-30 18:01:21.000'),
(3, 'Pas du tout d\'accord', '', '2023-06-30 18:02:09.000', '2023-06-30 18:02:09.000'),
(4, 'Je ne suis pas d\'accord', '', '2023-06-30 18:02:22.000', '2023-06-30 18:02:22.000');

-- --------------------------------------------------------

--
-- Structure de la table `disease`
--

CREATE TABLE `disease` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `disease`
--

INSERT INTO `disease` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'saines', '2023-06-23 00:12:52.000', '2023-06-16 01:18:22.000'),
(2, 'diabétiques', '2023-06-23 00:28:22.000', '2023-06-23 08:53:04.000'),
(3, 'Hypertension', '2023-06-23 11:53:58.000', '2023-06-23 11:53:58.000'),
(4, 'enceintes', '2023-06-23 11:53:58.000', '2023-06-23 11:53:58.000');

-- --------------------------------------------------------

--
-- Structure de la table `exercise`
--

CREATE TABLE `exercise` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `video` varchar(191) NOT NULL,
  `instructions` text NOT NULL,
  `status` tinyint(1) NOT NULL,
  `levelId` int(11) NOT NULL,
  `subLevelId` int(11) NOT NULL,
  `subSubLevel` int(11) NOT NULL,
  `finalLevelId` int(11) NOT NULL,
  `stepID` int(11) NOT NULL,
  `questionsID` int(11) NOT NULL,
  `adviceID` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `exercise`
--

INSERT INTO `exercise` (`id`, `title`, `description`, `image`, `video`, `instructions`, `status`, `levelId`, `subLevelId`, `subSubLevel`, `finalLevelId`, `stepID`, `questionsID`, `adviceID`, `createdAt`, `updatedAt`) VALUES
(6, 'Exercice 1', 'Démarre cette exercice', '', 'breath.mp4', '', 1, 0, 1, 0, 0, 0, 0, 0, '2023-06-30 14:51:54.000', '2023-06-30 14:51:54.000'),
(7, 'Exercice 2', 'Démarre cette exercice', 'Picture7.png', 'relaxion01.mp4', '', 1, 0, 1, 0, 0, 0, 0, 0, '2023-06-30 14:51:54.000', '2023-06-30 14:51:54.000'),
(9, 'Exercice 3', '', '', 'relaxion02.mp4', '', 0, 0, 1, 0, 0, 0, 0, 0, '2023-06-30 16:19:44.000', '2023-06-30 16:19:44.000'),
(101, 'Question 1', '', '', '', '', 0, 0, 5, 0, 0, 0, 1, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(102, 'Question 2', '', '', '', '', 0, 0, 5, 0, 0, 0, 2, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(103, 'Question 3', '', '', '', '', 0, 0, 5, 0, 0, 0, 3, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(104, 'Question 4', '', '', '', '', 0, 0, 5, 0, 0, 0, 4, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(105, 'Question 5', '', '', '', '', 0, 0, 5, 0, 0, 0, 5, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(106, 'Question 6', '', '', '', '', 0, 0, 5, 0, 0, 0, 6, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(107, 'Question 7', '', '', '', '', 0, 0, 5, 0, 0, 0, 7, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(108, 'Question 8', '', '', '', '', 0, 0, 5, 0, 0, 0, 8, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(109, 'Question 9', '', '', '', '', 0, 0, 5, 0, 0, 0, 9, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(110, 'Question 10', '', '', '', '', 0, 0, 5, 0, 0, 0, 10, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(111, 'Question 11', '', '', '', '', 0, 0, 5, 0, 0, 0, 11, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(112, 'Question 12', '', '', '', '', 0, 0, 5, 0, 0, 0, 12, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(113, 'Question 13', '', '', '', '', 0, 0, 5, 0, 0, 0, 13, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(114, 'Question 14', '', '', '', '', 0, 0, 5, 0, 0, 0, 14, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(115, 'Question 15', '', '', '', '', 0, 0, 5, 0, 0, 0, 15, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(116, 'Question 16', '', '', '', '', 0, 0, 5, 0, 0, 0, 16, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(117, 'Question 17', '', '', '', '', 0, 0, 5, 0, 0, 0, 17, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(118, 'Question 18', '', '', '', '', 0, 0, 5, 0, 0, 0, 18, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(119, 'Question 19', '', '', '', '', 0, 0, 5, 0, 0, 0, 19, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(120, 'Question 20', '', '', '', '', 0, 0, 5, 0, 0, 0, 20, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(121, 'Question 21', '', '', '', '', 0, 0, 5, 0, 0, 0, 21, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(122, 'Question 22', '', '', '', '', 0, 0, 5, 0, 0, 0, 22, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(123, 'Question 23', '', '', '', '', 0, 0, 5, 0, 0, 0, 23, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(124, 'Question 24', '', '', '', '', 0, 0, 5, 0, 0, 0, 24, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(125, 'Question 25', '', '', '', '', 0, 0, 5, 0, 0, 0, 25, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(126, 'Question 26', '', '', '', '', 0, 0, 5, 0, 0, 0, 26, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(127, 'Question 27', '', '', '', '', 0, 0, 5, 0, 0, 0, 27, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(128, 'Question 28', '', '', '', '', 0, 0, 5, 0, 0, 0, 28, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(129, 'Question 29', '', '', '', '', 0, 0, 5, 0, 0, 0, 29, 0, '2023-06-23 09:03:14.000', '2023-06-23 09:03:14.000'),
(134, 'Bonne appréciation du travail', '', 'Picture1.jpg,Picture2.jpg', '', 'moralement : comme la remise d\'un certificat par exemple,Financièrement : comme faire un cadeau par exemple', 0, 0, 3, 0, 0, 0, 0, 0, '0000-00-00 00:00:00.000', '0000-00-00 00:00:00.000'),
(145, 'récompenser les employés', '', 'Picture3.jpg,Picture4.jpg', '', 'Par un Système de récompense équitable', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(146, 'compétition amicale', '', 'Picture4.jpg,Picture6.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(147, 'fixez-vous des objectifs à court terme', '', 'Picture6.jpg,Picture7.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(148, 'compétition amicale', '', 'Picture4.jpg,Picture6.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(149, 'partagez la vue d’ensemble', '', 'Picture8.jpg,Picture9.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(150, 'être transparent et objectif', '', 'Picture10.jpg,Picture11.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(151, 'intérêt pour le cheminement de carrière', '', 'Picture12.jpg,Picture13.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(152, 'encourager le travail d\'équipe', '', 'Picture14.jpg,Picture15.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(153, 'sentiment de sécurité d\'emploi', '', 'Picture16.jpg,Picture17.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(154, 'se débarrasser de l\'ennui', '', 'Picture18.jpg,Picture19.jpg', '', '', 0, 0, 3, 0, 0, 0, 0, 0, '2023-06-30 20:12:23.000', '2023-06-30 20:12:23.000'),
(155, 'Stratégies de gestion du stress au travail', 'Fatigué d\'essayer de faire face à vos contraintes professionnelles et de ne pas savoir comment y faire face, vous avez des compétences pour les gérer positivement.', '', '', 'Identifier les sources de stress,Fixer des limites,Recherchez le soutien de votre famille et de vos amis,Pratiquer et maintenir de saines habitudes alimentaires,Dormez suffisamment,Établissez des priorités et planifiez votre temps,Évitez le multitâche,Aimez votre travail,Ne cherchez pas la perfection,Éloignez-vous des problèmes et des conflits sur le lieu de travail,Parlez à vos pairs qui sont tout aussi stressés que vous soyez avec votre employeur,Apprenez à dire non aux tâches que vous ne pouvez pas gérer honnête,Ne commencez pas par des tâches urgentes au détriment des plus importantes,Commencez par les choses qui sont plus importantes que les autres,Utiliser la compétence de délégation,Choisissez vos missions avant qu\\\'ils ne vous choisissent', 0, 0, 6, 0, 0, 0, 0, 0, '2023-06-30 20:44:50.000', '2023-06-30 20:44:50.000'),
(156, 'Libéré de la douleur', '', '', 'libere_douleur.mov', '', 0, 0, 4, 0, 0, 0, 0, 0, '2023-06-30 21:17:18.000', '2023-06-30 21:17:18.000'),
(190, 'Question 1', '', '', '', '', 0, 0, 2, 0, 0, 0, 30, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(191, 'Question 2', '', '', '', '', 0, 0, 2, 0, 0, 0, 31, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(192, 'Question 3', '', '', '', '', 0, 0, 2, 0, 0, 0, 32, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(193, 'Question 4', '', '', '', '', 0, 0, 2, 0, 0, 0, 33, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(194, 'Question 5', '', '', '', '', 0, 0, 2, 0, 0, 0, 34, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(195, 'Question 6', '', '', '', '', 0, 0, 2, 0, 0, 0, 35, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(196, 'Question 7', '', '', '', '', 0, 0, 2, 0, 0, 0, 36, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(197, 'Question 8', '', '', '', '', 0, 0, 2, 0, 0, 0, 37, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(198, 'Question 9', '', '', '', '', 0, 0, 2, 0, 0, 0, 38, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(199, 'Question 10', '', '', '', '', 0, 0, 2, 0, 0, 0, 39, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(200, 'Question 11', '', '', '', '', 0, 0, 2, 0, 0, 0, 40, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(201, 'Question 12', '', '', '', '', 0, 0, 2, 0, 0, 0, 41, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(202, 'Question 13', '', '', '', '', 0, 0, 2, 0, 0, 0, 42, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(203, 'Question 14', '', '', '', '', 0, 0, 2, 0, 0, 0, 43, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(204, 'Question 15', '', '', '', '', 0, 0, 2, 0, 0, 0, 44, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(205, 'Question 16', '', '', '', '', 0, 0, 2, 0, 0, 0, 45, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(206, 'Question 17', '', '', '', '', 0, 0, 2, 0, 0, 0, 46, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(207, 'Question 18', '', '', '', '', 0, 0, 2, 0, 0, 0, 47, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(208, 'Question 19', '', '', '', '', 0, 0, 2, 0, 0, 0, 48, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(209, 'Question 20', '', '', '', '', 0, 0, 2, 0, 0, 0, 49, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(210, 'Question 21', '', '', '', '', 0, 0, 2, 0, 0, 0, 50, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(211, 'Question 22', '', '', '', '', 0, 0, 2, 0, 0, 0, 51, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(212, 'Question 23', '', '', '', '', 0, 0, 2, 0, 0, 0, 52, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(213, 'Question 24', '', '', '', '', 0, 0, 2, 0, 0, 0, 53, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(214, 'Question 25', '', '', '', '', 0, 0, 2, 0, 0, 0, 54, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(215, 'Question 26', '', '', '', '', 0, 0, 2, 0, 0, 0, 55, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(216, 'Question 27', '', '', '', '', 0, 0, 2, 0, 0, 0, 56, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(217, 'Question 28', '', '', '', '', 0, 0, 2, 0, 0, 0, 57, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(218, 'Question 29', '', '', '', '', 0, 0, 2, 0, 0, 0, 58, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(219, 'Question 30', '', '', '', '', 0, 0, 2, 0, 0, 0, 59, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(220, 'Question 31', '', '', '', '', 0, 0, 2, 0, 0, 0, 60, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(221, 'Question 32', '', '', '', '', 0, 0, 2, 0, 0, 0, 61, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(222, 'Question 33', '', '', '', '', 0, 0, 2, 0, 0, 0, 62, 0, '2023-06-30 22:00:49.000', '2023-06-30 22:00:49.000'),
(226, 'Programme de sports de matin', 'Votre entrainement commancera dans 3.. 2... 1', '', 'matin_sport.mp4', '', 0, 0, 0, 0, 6, 0, 0, 0, '2023-07-28 15:31:01.000', '2023-07-27 00:00:00.000');

-- --------------------------------------------------------

--
-- Structure de la table `finallevel`
--

CREATE TABLE `finallevel` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `requiredScore` int(11) NOT NULL DEFAULT 20,
  `subSubLevelId` int(11) NOT NULL,
  `description` varchar(191) NOT NULL DEFAULT '',
  `image` varchar(191) NOT NULL DEFAULT '',
  `subTitlte` varchar(191) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `finallevel`
--

INSERT INTO `finallevel` (`id`, `name`, `status`, `createdAt`, `updatedAt`, `requiredScore`, `subSubLevelId`, `description`, `image`, `subTitlte`) VALUES
(2, 'Personne saines', 0, '2023-07-29 12:47:09.000', '2023-07-29 12:47:09.000', 20, 1, '', 'sains.jpg', ''),
(3, 'Personnes diabétiques ', 0, '2023-07-28 12:47:09.000', '2023-07-28 12:47:09.000', 20, 1, '', 'personne_diabetique.png', ''),
(4, 'Personnes Hypertension ', 0, '2023-07-29 12:47:54.000', '2023-07-29 12:47:54.000', 20, 1, '', 'Personnes_Hypertension.png', ''),
(5, 'Les enceintes', 0, '2023-07-29 12:48:13.000', '2023-07-29 12:48:13.000', 20, 1, '', 'enceintes.jpg', ''),
(6, 'Matin', 0, '2023-07-29 12:48:49.000', '2023-07-29 12:48:49.000', 20, 2, '', 'Matin.png', ''),
(7, 'Au travail', 0, '2023-07-29 12:48:49.000', '2023-07-29 12:48:49.000', 20, 2, '', 'Au_travail.png', ''),
(8, 'Avant dormir', 0, '2023-07-29 12:49:27.000', '2023-07-29 12:49:27.000', 20, 2, '', 'Avant_dormir.png', '');

-- --------------------------------------------------------

--
-- Structure de la table `food`
--

CREATE TABLE `food` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `finalLevelId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `food`
--

INSERT INTO `food` (`id`, `title`, `image`, `description`, `createdAt`, `updatedAt`, `finalLevelId`) VALUES
(2, 'Pomme', 'pomme.png', 'Pomme contient des fibres et vitamin c', '2023-07-22 13:55:52.000', '2023-07-28 13:55:52.000', 3),
(3, 'Poisson (saumon)', 'poisson.jpg', 'Contient des protéines et sélénium, des acides aminés', '2023-07-28 13:55:52.000', '2023-07-28 13:55:52.000', 3),
(4, 'Graines de chia', 'graines_de_chia.jpg', 'Graines de chia contient des fibres et des glucides', '2023-07-28 13:55:52.000', '2023-07-28 13:55:52.000', 3),
(5, 'Cannelle', 'cannelle.jpg', 'Vitamin K calcium et protéines, fibre et fer', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 3),
(6, 'Huile D’olive', 'huile_olive.jpg', 'Vitamin E et K', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 3),
(7, 'Yaourt', 'yaourt.jpg', 'Contient phosphore et calcium, magnésium', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 3),
(8, 'Haricots rouge', 'haricots_rouge.jpg', 'Il contient des protéines et magnésium et fibres', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 3),
(9, 'Les noisettes', 'noisettes.jpg', '', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 3),
(10, 'Avocat', 'avocat.jpg', 'Vitamin B6, c, E et acide folique', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(11, 'Légume vert(épinard)', 'legume_vert.jpg', 'Eau et fibre', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(12, 'L’ail', 'ail.jpg', 'Il contient de vitamin b6 et v c et des minéraux et du sélénium', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(13, 'Banane', 'banane.jpg', 'Ils contiennent de vitamin c et protéines', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(14, 'Bettrave', 'bettrave.jpg', 'Contient du potassium et calcium', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(15, 'Chocolat', 'chocolat.jpg', 'Noir Vitamin d2 et le fer et phosphor', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(16, 'Pastéque', 'pasteque.jpg', '', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(17, 'Avoin', 'avoin.jpg', 'Fer et fibres alimentaires', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(18, 'Ligéume vert', 'ligeume_vert.jpg', 'Eau et fibres alimentaires', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(19, 'Haricots', 'haricots.jpg', 'Vitamin c et fibres', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(20, 'Lentilles', 'lentilles.jpg', 'Vitamin c et fibres', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 4),
(21, 'Jus de grenade', 'jus_de_grenade.jpg', 'Acid folique et potassium et vitamin C et E', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(22, 'Protéines saines', 'proteines_saines.jpg', 'Il contient des protéines et acides aminés', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(23, 'Des fruits sans sucre', 'fruits_sans_sucre.jpg', 'Il contient vitamine C et glucides, protéines', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(24, 'Protéines végétales', 'proteines_vegetales.jpg', 'Il contient des protéines et magnésium et fibres', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(25, 'Légumes non féculents', 'legumes_non_feculents.jpg', 'Riche en fibre, vitamines et minéraux', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(26, 'Graisses saines', 'graisses_saines.jpg', 'Riche en omiga 3', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(27, 'Céréales sans gluten', 'cereales_sans_gluten.jpg', 'Riche en fibre et le fer, protéine', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 2),
(28, 'Patates', 'patates.jpg', 'Il contient du sodium et potassium, protéines et des vitamines', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(29, 'Le poisson (le saumon)', 'poisson_saumon.jpg', 'Il contient calcium et magnésium, vitamines B6 et le fer', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(30, 'Œuf', 'oeuf.jpg', 'Il contient vitamines D et vitamin C, calcium et protéines', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(31, 'Des noisettes amandes et noix de cajou', 'noisettes_amandes_noix_cajou.jpg', '', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(32, 'Grains entiers. orge et mais', 'grains_entiers.jpg', 'Il contient Lipides et Calories', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(33, 'Viande rouge', 'viande_rouge.jpg', 'Il contient des vitamines comme v B12 et protéines, phosphore et zinc', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(34, 'Lait et produits laitiers', 'lait_produits_laitiers.jpg', 'Il contient vitamine A et des fibres alimentaires, codium et calcium', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(35, 'Lentilles', 'lentilles.jpg', 'Ils contiennent des fibres et glucide', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(36, 'Petits pois', 'petits_pois.jpg', 'Ils contiennent des protéines et l’acid folique', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5),
(37, 'Légumes verts (épinard)', 'legumes_verts.jpg', 'Contient du fer et potassium, fibres alimentaires', '2023-07-01 00:00:00.000', '2023-07-01 00:00:00.000', 5);

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `jobs`
--

INSERT INTO `jobs` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Comptable', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(2, 'Directeur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(3, 'Avocat', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(4, 'Médecin', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(5, 'Infirmier', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(6, 'Un juge', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(7, 'Agent de sécurité', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(8, 'Enquêteur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(9, 'Ingénieur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(10, 'Fournisseur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(11, 'Pharmaceutique', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(12, 'Electricien', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(13, 'Soudeur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(14, 'Coiffeur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(15, 'Tailleur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(16, 'Agriculteur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(17, 'Pompier', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(18, 'Conducteur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(19, 'Un garde', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(20, 'Facteur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(21, 'Bijoutier', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(22, 'Agent d\'administration', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(23, 'Eboueur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(24, 'Confiseur', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(25, 'Boulanger', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(26, 'Photographe', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(27, 'Prestataire', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(28, 'Conseiller', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000'),
(29, 'Autre', '2023-06-24 21:19:39.000', '2023-06-24 21:19:39.000');

-- --------------------------------------------------------

--
-- Structure de la table `level`
--

CREATE TABLE `level` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `requiredScore` int(11) NOT NULL DEFAULT 0,
  `description` varchar(191) NOT NULL DEFAULT '',
  `image` varchar(191) NOT NULL DEFAULT '',
  `subTitlte` varchar(191) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `level`
--

INSERT INTO `level` (`id`, `name`, `status`, `createdAt`, `updatedAt`, `requiredScore`, `description`, `image`, `subTitlte`) VALUES
(1, 'Le premier niveau', 0, '2023-06-23 00:34:33.000', '2023-06-23 11:39:07.000', 10, 'Une dimension cognitivo-comportementale qui relie les pensées de l\'individu à sa performance', 'first_level.jpg', ''),
(2, 'Le deuxième niveau', 0, '2023-06-23 00:28:22.000', '2023-06-23 08:53:04.000', 100, 'Une dimension émotionnelle-cognitive qui combine les expériences de l\'individu avec la pensée positive', 'second_level.jpg', ''),
(3, 'Le troisième niveau', 0, '2023-06-23 11:53:58.000', '2023-06-23 11:53:58.000', 200, 'Vise à développer des capacités et des compétences de coordination', 'third_level.jpg', '');

-- --------------------------------------------------------

--
-- Structure de la table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `title` varchar(191) NOT NULL,
  `image` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `type` enum('Vocal','Written','Visual','Radio') NOT NULL DEFAULT 'Written'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `question`
--

INSERT INTO `question` (`id`, `title`, `image`, `createdAt`, `updatedAt`, `type`) VALUES
(1, 'Vous avez des connaissances approfondies et interconnectées sur votre mission ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(2, 'Cherchez-vous et lisez-vous tout ce qui est nouveau sur votre profession ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(3, 'Vous souhaitez utiliser un langage et des expressions appropriés à votre métier ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(4, 'Participez-vous à des promotions, des voyages ou d\'autres concours ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(5, 'Connaissez-vous les caractéristiques de votre métier ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(6, 'respectez-vous les règles et règlements internes de votre organisation ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(7, 'Fixez-vous des plans et des objectifs pour votre flux de travail professionnel ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(8, 'Utilisez-vous votre expertise scientifique dans l\'exécution de vos travaux?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(9, 'vous préparez-vous à aller travailler avec énergie et activité ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(10, 'Aimez-vous faire votre travail et l\'appliquer correctement?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(11, 'Collaborez-vous ou êtes-vous en concurrence avec vos collègues ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(12, 'Utilisez-vous des technologies appropriées pour effectuer votre travail et cherchez-vous à les développer?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(13, 'Prenez-vous l\'initiative de présenter des idées nouvelles et modernes à vos collègues ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(14, 'Êtes-vous caractérisé par un jugement objectif sur votre performance professionnelle?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(15, 'Prenez-vous l\'initiative de présenter des idées nouvelles et modernes à vos collègues ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(16, 'Avez-vous tendance à vous absenter ou à faire la grève et respectez-vous les rendez-vous ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(17, 'Comprenez-vous ce que les autres veulent dire lorsqu\'ils parlent de la tâche ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(18, 'Vous avez des talents multiples et diversifiés ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(19, 'Pratiquez-vous l\'étiquette de fitness?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(20, 'Êtes-vous caractérisé par la jovialité et la capacité de poitrine ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(21, 'Respectez-vous et acceptez-vous les instructions ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(22, 'Vous vous souciez de votre apparence au travail et vous vous efforcez d\'être approprié ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(23, 'Agissez-vous avec sagesse et bon sens lors de situations d\'urgence ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(24, 'Donnez-vous le bon exemple à vos collègues ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(25, 'Acceptez-vous les critiques et en tirez-vous profit ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(26, 'Vous êtes attaché au secret et à la confidentialité des affaires de vos collègues ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(27, 'Suivez-vous le développement d\'événements et d\'enjeux internationaux importants?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(28, 'Êtes-vous d\'accord pour dire que le succès n\'arrive qu\'à certaines personnes ?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(29, 'Pensez-vous que l\'échec est un destin inévitable qui doit arriver?', '', '2023-06-30 12:41:26.000', '2023-06-30 12:41:26.000', 'Vocal'),
(30, 'Je suis convaincu que ce qui se passe autour de moi est positif et continuera', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(31, 'La vie a beaucoup de choses qui valent la peine d\'être vécues', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(32, 'Je suis fier quand je pense à ce que j\'ai accompli', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(33, 'J\'assume la responsabilité de mes paroles et de mes actes', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(34, 'L\'autonomie est préférable pour atteindre les objectifs', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(35, 'A chaque persévérant sa part', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(36, 'Beaucoup de mes idées sont utilisées par d\'autres pour en tirer profit', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(37, 'Mes pensées sont impuissantes dans les actions collectives', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(38, 'Ma créativité est plus élevée que la plupart des gens autour de moi', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(39, 'Je peux facilement trouver des solutions alternatives même lorsque je suis dans des conditions de santé', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(40, 'Celui qui occupe son esprit réussit dans toutes les situations de sa vie', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(41, 'Je sais très bien ce qu\'il faut faire, mais je n\'ai pas la capacité de le faire', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(42, 'Peu de colère est contrôlée', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(43, 'Je souhaite laisser la précipitation et la hâte dans mes affaires quotidiennes', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(44, 'Je m\'inquiète facilement si des choses simples ou désagréables m\'arrivent', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(45, 'Je deviens très en colère s\'il se passe des choses autres que ce que je veux', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(46, 'Si je veux atteindre mes objectifs rapidement, je les atteindrai', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(47, 'Je peux réaliser mes ambitions quelles que soient les difficultés auxquelles je suis confronté', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(48, 'Mes principes sont constants, peu importe ce qui m\'arrive', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(49, 'J\'ai des hauts potentiels que j\'utilise pour servir les autres', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(50, 'Je prends mes propres décisions sans l\'interférence des autres', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(51, 'Les activités utiles dans ma vie quotidienne sont très rares', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(52, 'J\'ai le pouvoir de pousser les autres à réussir et je peux les influencer en toutes circonstances', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(53, 'Je défends mes opinions de toutes mes forces', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(54, 'J\'ai une grande capacité à juger les autres', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(55, 'Je vis des situations soudaines et inattendues et les considère comme des défis passionnants', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(56, 'J\'accepte les critiques qui ne sont pas d\'accord avec mon opinion', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(57, 'Je peux contenir la colère des autres', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(58, 'Je change ma façon de penser en fonction des exigences de la situation actuelle', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(59, 'Si je trébuche, je reviens rapidement à la normale et je recommence', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(60, 'Je vois que je suis une personne optimiste comme les autres me décrivent', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(61, 'Ma personnalité s\'améliore avec le temps, je crois que tous mes rêves se réaliseront', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio'),
(62, 'Ma vie va de mal en pis', '', '2023-06-30 21:53:11.000', '2023-06-30 21:53:11.000', 'Radio');

-- --------------------------------------------------------

--
-- Structure de la table `step`
--

CREATE TABLE `step` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `sublevel`
--

CREATE TABLE `sublevel` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `levelId` int(11) NOT NULL,
  `requiredScore` int(11) NOT NULL DEFAULT 10,
  `description` varchar(191) NOT NULL DEFAULT '',
  `image` varchar(191) NOT NULL DEFAULT '',
  `subTitlte` varchar(191) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sublevel`
--

INSERT INTO `sublevel` (`id`, `name`, `status`, `createdAt`, `updatedAt`, `levelId`, `requiredScore`, `description`, `image`, `subTitlte`) VALUES
(1, 'Relaxation ', 0, '2023-06-23 00:12:52.000', '2023-06-16 01:18:22.000', 1, 10, '', 'relaxion.jpg', ''),
(2, 'Immunité psychologique', 0, '2023-06-23 00:28:22.000', '2023-06-23 08:53:04.000', 1, 10, '', 'immunit_psyco.png', ''),
(3, 'Motivation pour la réalisation', 0, '2023-06-23 11:53:58.000', '2023-06-23 11:53:58.000', 1, 10, 'Voici dix moyens efficaces pour vous remonter le moral et vous motiver à réussir dans votre environnement professionnel.', 'motivation_par_real.jpg', ''),
(4, 'Libéré de la douleur', 0, '2023-06-23 11:53:58.000', '2023-06-23 11:53:58.000', 2, 10, '', 'douleur.png', ''),
(5, 'Intelligence émotionnelle', 0, '2023-06-30 18:50:26.000', '2023-06-30 18:50:26.000', 2, 10, '', 'Intelligence_emotionnelle.png', ''),
(6, 'Stratégies d\'adaptation', 0, '2023-06-30 18:50:26.000', '2023-06-30 18:50:26.000', 3, 10, '', 'strategies_adaptation.png', ''),
(7, 'Conscience mentale', 0, '2023-06-28 18:50:26.000', '2023-06-28 18:50:26.000', 3, 10, '', 'conscience_mentale.png', '');

-- --------------------------------------------------------

--
-- Structure de la table `subsublevel`
--

CREATE TABLE `subsublevel` (
  `id` int(11) NOT NULL,
  `name` varchar(191) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `subLevelId` int(11) NOT NULL,
  `requiredScore` int(11) NOT NULL DEFAULT 15,
  `description` varchar(191) NOT NULL DEFAULT '',
  `image` varchar(191) NOT NULL DEFAULT '',
  `subTitlte` varchar(191) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `subsublevel`
--

INSERT INTO `subsublevel` (`id`, `name`, `status`, `createdAt`, `updatedAt`, `subLevelId`, `requiredScore`, `description`, `image`, `subTitlte`) VALUES
(1, 'Programme diététique', 0, '2023-07-29 12:45:41.000', '2023-07-29 12:45:41.000', 7, 15, '', 'biabete.png', ''),
(2, 'Programme de sport', 0, '2023-07-29 12:45:41.000', '2023-07-29 12:45:41.000', 7, 15, '', 'sport.png', '');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `adress` varchar(191) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `birthDate` datetime(3) DEFAULT NULL,
  `disability` tinyint(1) DEFAULT NULL,
  `firstName` varchar(191) DEFAULT NULL,
  `lastName` varchar(191) DEFAULT NULL,
  `maritalStatus` varchar(191) DEFAULT NULL,
  `other` varchar(191) DEFAULT NULL,
  `sex` varchar(191) DEFAULT NULL,
  `workPlace` varchar(191) DEFAULT NULL,
  `workSeniority` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `diseaseID` int(11) NOT NULL DEFAULT 0,
  `jobsID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `createdAt`, `updatedAt`, `adress`, `age`, `birthDate`, `disability`, `firstName`, `lastName`, `maritalStatus`, `other`, `sex`, `workPlace`, `workSeniority`, `phone`, `score`, `diseaseID`, `jobsID`) VALUES
(5, 'test@gmail.com', '11111111', '2023-06-26 13:31:33.671', '2023-06-26 13:31:33.671', 'Keldmv', 2, '2020-08-21 23:15:30.000', 0, 'Pzkdhj', 'Mdjdvd9', 'Divorcé', '/', 'male', 'Bxlxlv', 'Mxmwwlxm', 'Nwlwl', 400, 1, 10);

-- --------------------------------------------------------

--
-- Structure de la table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('08fab99a-6cf5-4383-8720-16478b9ae666', 'b946e25e9c4367bcb83afa034ab272161b6739f8c608d17dab7947dba276fb6b', '2023-06-30 20:14:42.082', '20230623160901_init', NULL, NULL, '2023-06-30 20:14:41.923', 1),
('131222dd-9050-4fe4-baa6-41d74c08a3da', '8b907de40727da5670aa57fdd2f0f3ead31b71a8bcdbb35ab53b9be6b8fa8525', '2023-06-30 20:14:42.416', '20230623163602_init', NULL, NULL, '2023-06-30 20:14:42.241', 1),
('19a92f58-1be3-44d1-95cf-9459f57d1539', '9f2f45f0bbf59fb15d07f3cd4b0a8cf7e01ef24df34b28a8a23afda31c3dc0dc', '2023-06-30 20:14:39.628', '20230622174501_init', NULL, NULL, '2023-06-30 20:14:39.598', 1),
('1d5abf1f-87b0-4c1c-9517-f8b05357b683', '871ae1c4828470231f6c45cb59fe4b30478d84f86fe2cca8789cf2c0cf21b727', '2023-06-30 20:14:43.430', '20230627173005_init', NULL, NULL, '2023-06-30 20:14:43.403', 1),
('244e7c2e-7f72-499e-8e39-d9915650bab9', '9f4c180e2209e1f0db06e35084973654bf14165bb46e7196e5111e48b493a4f2', '2023-06-30 20:14:42.873', '20230624205654_init', NULL, NULL, '2023-06-30 20:14:42.711', 1),
('2ea55e74-6823-4221-a19a-dc7333f65f12', 'b946e25e9c4367bcb83afa034ab272161b6739f8c608d17dab7947dba276fb6b', '2023-06-23 16:44:55.319', '20230623160901_init', NULL, NULL, '2023-06-23 16:44:55.020', 1),
('32684f68-d091-4673-a3f0-b7240f170fe1', 'b601e8cace54f9f243822b7836d140cc82b0a86c163490b89007c3389b9d6dbb', '2023-06-23 16:44:51.671', '20230622163958_init', NULL, NULL, '2023-06-23 16:44:51.571', 1),
('36226eb3-8870-4c28-9fa8-ee724a332c83', '96440c3f852cbf72c04ff5784999caf22ff0c7ddbbe2e3d56ac407759e5d1929', '2023-06-30 20:14:43.062', '20230624234014_init', NULL, NULL, '2023-06-30 20:14:42.932', 1),
('3ef87bdd-0d64-4cf6-9a78-59933c5d6918', '12e1a96f9d30eee932afad8d6e010912c1d21d61a89742803ca744d9ded6c33b', '2023-07-01 11:41:57.427', '20230701114157_init', NULL, NULL, '2023-07-01 11:41:57.311', 1),
('3f144142-9a88-4c48-a76b-29d64af41684', 'd1312c75f35b70126c865614b0afa628f340a7d43c50c781473e40c6e71ad7f6', '2023-06-30 20:14:43.468', '20230629192026_init', NULL, NULL, '2023-06-30 20:14:43.435', 1),
('41860153-95a5-41ae-aed9-2cc16fa90864', '8b907de40727da5670aa57fdd2f0f3ead31b71a8bcdbb35ab53b9be6b8fa8525', '2023-06-23 16:44:55.998', '20230623163602_init', NULL, NULL, '2023-06-23 16:44:55.582', 1),
('4afe16b1-bff8-46bb-b6c5-568fd1eb89e4', '755ff25d1e820295d183a6e8880a46a39c7dd9a1cb4b7d3594b5bd4b73df032f', '2023-06-30 20:14:43.225', '20230627004902_init', NULL, NULL, '2023-06-30 20:14:43.066', 1),
('507888d3-e442-4593-b52e-a1ab02663277', '871ae1c4828470231f6c45cb59fe4b30478d84f86fe2cca8789cf2c0cf21b727', '2023-06-29 19:07:33.248', '20230627173005_init', NULL, NULL, '2023-06-29 19:07:33.220', 1),
('5fcee002-dc19-427e-95a4-2a18f48f7305', '6c21253be48907c189eea791591ad5ae21891b9a7c571de39fd2ce585af2c192', '2023-06-23 16:44:55.015', '20230623094031_init', NULL, NULL, '2023-06-23 16:44:54.856', 1),
('65ac7ae1-66a0-47df-acc9-44d05e096c98', '9f2f45f0bbf59fb15d07f3cd4b0a8cf7e01ef24df34b28a8a23afda31c3dc0dc', '2023-06-23 16:44:51.737', '20230622174501_init', NULL, NULL, '2023-06-23 16:44:51.676', 1),
('68115770-9d15-426a-b8d9-0b028c1a0266', '4983efce18b52c4927bb29ac293ff24ccadbef906e9faa73ef0fd8a5e491c397', '2023-06-23 16:44:55.577', '20230623163447_init', NULL, NULL, '2023-06-23 16:44:55.323', 1),
('69076ae3-569d-4a3f-b1c1-864d8fc2cbd1', 'b601e8cace54f9f243822b7836d140cc82b0a86c163490b89007c3389b9d6dbb', '2023-06-30 20:14:39.594', '20230622163958_init', NULL, NULL, '2023-06-30 20:14:39.543', 1),
('6eba761e-a212-4318-a998-302b388fbd79', 'f36ccea13a8de966aeb51777e059a3465754d8c1a932702ed8977124eba79529', '2023-06-27 01:01:14.610', '20230627010114_init', NULL, NULL, '2023-06-27 01:01:14.443', 1),
('6fe0e44d-a1fd-4e7a-b8e6-802e94680310', 'cf937dfd91fd40089a91eabbc1fd5461dedf5fe0b4d745b30049f44e7c9bff2e', '2023-06-23 16:44:56.325', '20230623164258_init', NULL, NULL, '2023-06-23 16:44:56.003', 1),
('71eba574-5964-4ed7-b1eb-a96f2723045c', '9c0a7f1b0d55605bfe5092865a3ef09e637cccf5ec96ada5796ad7646bdb2a90', '2023-06-24 23:39:20.236', '20230624233920_init', NULL, NULL, '2023-06-24 23:39:20.176', 1),
('7c923936-4019-4e16-9d67-a97178e088e6', 'e4a6ecbf6d98460fc5a7125f66a15541af16326b9e640d829dc280fde31723bf', '2023-06-30 20:14:41.703', '20230622221111_init', NULL, NULL, '2023-06-30 20:14:39.689', 1),
('7f094989-b89d-41e2-9623-257dab6eaf6f', '5c9161aa8ff9f4fb6609a8b6e0f180c196752d6c809161955b6a36cd50f44e36', '2023-06-30 20:14:51.816', '20230630201451_init', NULL, NULL, '2023-06-30 20:14:51.787', 1),
('8d8f1cf8-3d29-4719-9af1-e5f75203af4f', '2d9d7426b49a5befa89acfe24fa9ad156dd7ddf8fb838d4459645d4cbb31c951', '2023-06-30 20:14:39.684', '20230622181536_init', NULL, NULL, '2023-06-30 20:14:39.633', 1),
('8d97693f-8a9f-4800-955c-dbdc9c859ecc', 'cf937dfd91fd40089a91eabbc1fd5461dedf5fe0b4d745b30049f44e7c9bff2e', '2023-06-30 20:14:42.702', '20230623164258_init', NULL, NULL, '2023-06-30 20:14:42.424', 1),
('90b76d04-0ffe-4ac7-bc42-0167256c0874', '755ff25d1e820295d183a6e8880a46a39c7dd9a1cb4b7d3594b5bd4b73df032f', '2023-06-27 00:49:02.258', '20230627004902_init', NULL, NULL, '2023-06-27 00:49:02.088', 1),
('91438d2f-691e-4eeb-a41b-51a5579e6c9e', '2d9d7426b49a5befa89acfe24fa9ad156dd7ddf8fb838d4459645d4cbb31c951', '2023-06-23 16:44:51.826', '20230622181536_init', NULL, NULL, '2023-06-23 16:44:51.743', 1),
('96660acd-c035-4d62-aeba-a065717ed37a', 'a3b1c90f2c3c6c938010d1419fbaaf60b07d7b0e6c280c52644ba9146d646ec8', '2023-06-30 20:14:43.606', '20230630011729_init', NULL, NULL, '2023-06-30 20:14:43.472', 1),
('a850426e-2d61-4287-ba3c-f8bdd057c190', 'a3b1c90f2c3c6c938010d1419fbaaf60b07d7b0e6c280c52644ba9146d646ec8', '2023-06-30 01:17:29.315', '20230630011729_init', NULL, NULL, '2023-06-30 01:17:29.250', 1),
('aabbaa72-cd51-40bf-9f37-0f6196c54740', 'd1312c75f35b70126c865614b0afa628f340a7d43c50c781473e40c6e71ad7f6', '2023-06-29 19:20:26.524', '20230629192026_init', NULL, NULL, '2023-06-29 19:20:26.480', 1),
('aeff0a73-7a79-44de-9050-2512dba0048d', '428bb5b49fa0e2652a6e2344d623f23f70c0a5c8f7db5c945187c1389ea9de5c', '2023-06-30 20:14:41.795', '20230622235653_init', NULL, NULL, '2023-06-30 20:14:41.707', 1),
('b45bf5a9-542b-4b03-8ccb-9f4dcfcd8003', '48c21c006e85f4413c061f9eb6f6ef36f40af7516e8ab94bb33c7c6e8ad2e37e', '2023-06-30 20:14:41.827', '20230623091514_init', NULL, NULL, '2023-06-30 20:14:41.800', 1),
('bcfe1169-3959-4776-919d-c8bbbebae858', '9f4c180e2209e1f0db06e35084973654bf14165bb46e7196e5111e48b493a4f2', '2023-06-24 20:56:54.182', '20230624205654_init', NULL, NULL, '2023-06-24 20:56:54.044', 1),
('bd8d79ea-66cd-4779-bc03-8dc997bf9904', '4983efce18b52c4927bb29ac293ff24ccadbef906e9faa73ef0fd8a5e491c397', '2023-06-30 20:14:42.237', '20230623163447_init', NULL, NULL, '2023-06-30 20:14:42.086', 1),
('c65d43c5-20b5-4273-986c-f3c22996bbf0', 'f36ccea13a8de966aeb51777e059a3465754d8c1a932702ed8977124eba79529', '2023-06-30 20:14:43.399', '20230627010114_init', NULL, NULL, '2023-06-30 20:14:43.229', 1),
('d886f603-d841-4a7c-802d-99c7df830cbe', '428bb5b49fa0e2652a6e2344d623f23f70c0a5c8f7db5c945187c1389ea9de5c', '2023-06-23 16:44:54.804', '20230622235653_init', NULL, NULL, '2023-06-23 16:44:54.591', 1),
('e660c395-a217-4a4b-862c-0b51fa879b98', '96440c3f852cbf72c04ff5784999caf22ff0c7ddbbe2e3d56ac407759e5d1929', '2023-06-24 23:40:14.648', '20230624234014_init', NULL, NULL, '2023-06-24 23:40:14.500', 1),
('e9cc5035-3791-4b84-9b39-4fef6bd8de09', '48c21c006e85f4413c061f9eb6f6ef36f40af7516e8ab94bb33c7c6e8ad2e37e', '2023-06-23 16:44:54.851', '20230623091514_init', NULL, NULL, '2023-06-23 16:44:54.810', 1),
('ea56a4cd-2f13-4c27-90d9-98ce5aecc551', '9c0a7f1b0d55605bfe5092865a3ef09e637cccf5ec96ada5796ad7646bdb2a90', '2023-06-30 20:14:42.928', '20230624233920_init', NULL, NULL, '2023-06-30 20:14:42.877', 1),
('eca2446e-fa2c-4e79-bca2-441695480139', '6c21253be48907c189eea791591ad5ae21891b9a7c571de39fd2ce585af2c192', '2023-06-30 20:14:41.919', '20230623094031_init', NULL, NULL, '2023-06-30 20:14:41.831', 1),
('fc5ebce5-2bcb-4fdb-ac30-daf06a09c057', 'e4a6ecbf6d98460fc5a7125f66a15541af16326b9e640d829dc280fde31723bf', '2023-06-23 16:44:54.587', '20230622221111_init', NULL, NULL, '2023-06-23 16:44:51.832', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `advice`
--
ALTER TABLE `advice`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `alarmclock`
--
ALTER TABLE `alarmclock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AlarmClock_userId_fkey` (`userId`);

--
-- Index pour la table `answeroptions`
--
ALTER TABLE `answeroptions`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `disease`
--
ALTER TABLE `disease`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `exercise`
--
ALTER TABLE `exercise`
  ADD PRIMARY KEY (`id`),
  ADD KEY `exercise_levelId_fkey` (`levelId`),
  ADD KEY `exercise_subLevelId_fkey` (`subLevelId`),
  ADD KEY `exercise_subSubLevel_fkey` (`subSubLevel`),
  ADD KEY `exercise_finalLevelId_fkey` (`finalLevelId`),
  ADD KEY `exercise_stepID_fkey` (`stepID`),
  ADD KEY `exercise_questionsID_fkey` (`questionsID`),
  ADD KEY `exercise_adviceID_fkey` (`adviceID`);

--
-- Index pour la table `finallevel`
--
ALTER TABLE `finallevel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `finalLevel_subSubLevelId_fkey` (`subSubLevelId`);

--
-- Index pour la table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Food_finalLevelId_fkey` (`finalLevelId`);

--
-- Index pour la table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `level`
--
ALTER TABLE `level`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `step`
--
ALTER TABLE `step`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sublevel`
--
ALTER TABLE `sublevel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subLevel_levelId_fkey` (`levelId`);

--
-- Index pour la table `subsublevel`
--
ALTER TABLE `subsublevel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subSubLevel_subLevelId_fkey` (`subLevelId`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`),
  ADD UNIQUE KEY `User_phone_key` (`phone`),
  ADD KEY `User_diseaseID_fkey` (`diseaseID`),
  ADD KEY `User_jobsID_fkey` (`jobsID`);

--
-- Index pour la table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `advice`
--
ALTER TABLE `advice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `alarmclock`
--
ALTER TABLE `alarmclock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `answeroptions`
--
ALTER TABLE `answeroptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `disease`
--
ALTER TABLE `disease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `exercise`
--
ALTER TABLE `exercise`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=227;

--
-- AUTO_INCREMENT pour la table `finallevel`
--
ALTER TABLE `finallevel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `food`
--
ALTER TABLE `food`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `level`
--
ALTER TABLE `level`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT pour la table `step`
--
ALTER TABLE `step`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `sublevel`
--
ALTER TABLE `sublevel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `subsublevel`
--
ALTER TABLE `subsublevel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `alarmclock`
--
ALTER TABLE `alarmclock`
  ADD CONSTRAINT `AlarmClock_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `exercise`
--
ALTER TABLE `exercise`
  ADD CONSTRAINT `exercise_adviceID_fkey` FOREIGN KEY (`adviceID`) REFERENCES `advice` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exercise_finalLevelId_fkey` FOREIGN KEY (`finalLevelId`) REFERENCES `finallevel` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exercise_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `level` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exercise_questionsID_fkey` FOREIGN KEY (`questionsID`) REFERENCES `question` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exercise_stepID_fkey` FOREIGN KEY (`stepID`) REFERENCES `step` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exercise_subLevelId_fkey` FOREIGN KEY (`subLevelId`) REFERENCES `sublevel` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `exercise_subSubLevel_fkey` FOREIGN KEY (`subSubLevel`) REFERENCES `subsublevel` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `finallevel`
--
ALTER TABLE `finallevel`
  ADD CONSTRAINT `finalLevel_subSubLevelId_fkey` FOREIGN KEY (`subSubLevelId`) REFERENCES `subsublevel` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `food`
--
ALTER TABLE `food`
  ADD CONSTRAINT `Food_finalLevelId_fkey` FOREIGN KEY (`finalLevelId`) REFERENCES `finallevel` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `sublevel`
--
ALTER TABLE `sublevel`
  ADD CONSTRAINT `subLevel_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `level` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `subsublevel`
--
ALTER TABLE `subsublevel`
  ADD CONSTRAINT `subSubLevel_subLevelId_fkey` FOREIGN KEY (`subLevelId`) REFERENCES `sublevel` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `User_diseaseID_fkey` FOREIGN KEY (`diseaseID`) REFERENCES `disease` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `User_jobsID_fkey` FOREIGN KEY (`jobsID`) REFERENCES `jobs` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
