-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:8889
-- Généré le :  Ven 08 Décembre 2017 à 15:08
-- Version du serveur :  5.6.35
-- Version de PHP :  7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Testdatabase`
--

-- --------------------------------------------------------

--
-- Structure de la table `ccard`
--

CREATE TABLE `ccard` (
  `IDCD` int(11) NOT NULL,
  `IDCM` int(11) NOT NULL,
  `NUMBERS` int(11) NOT NULL,
  `NAME` int(100) NOT NULL,
  `DATE` varchar(10) NOT NULL,
  `CODE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- --------------------------------------------------------

--
-- Structure de la table `Commande`
--

CREATE TABLE `Commande` (
  `IDCM` int(11) NOT NULL,
  `IDPR` int(11) NOT NULL,
  `IDUS` int(11) NOT NULL,
  `PRICE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `Formation`
--

CREATE TABLE `Formation` (
  `id` int(11) NOT NULL,
  `theme` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(3);

-- --------------------------------------------------------

--
-- Structure de la table `Produit`
--

CREATE TABLE `Produit` (
  `IDPR` int(11) NOT NULL,
  `IDUS` int(11) NOT NULL,
  `TITLE` varchar(200) NOT NULL,
  `DESCRIPTION` text NOT NULL,
  `LINKPICTURE` varchar(100) NOT NULL,
  `PRICEMIN` int(11) NOT NULL,
  `PRICEMAX` int(11) NOT NULL,
  `ZIPCODE` int(11) NOT NULL,
  `EXPIRATION_DATE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `Produit`
--

INSERT INTO `Produit` (`IDPR`, `IDUS`, `TITLE`, `DESCRIPTION`, `LINKPICTURE`, `PRICEMIN`, `PRICEMAX`, `ZIPCODE`, `EXPIRATION_DATE`) VALUES
(1, 1993, 'aa', 'aa', 'aa', 0, 0, 0, '2016-08-16'),
(2, 1993, 'Table X2', 'aa', 'aa', 0, 0, 0, '2016-08-16'),
(19, 1993, 'Table X2', 'aa', 'aa', 0, 0, 0, '2016-08-16'),
(23, 93, 'Iphone XEA', 'bla bla bla', 'macbook.jpeg', 0, 0, 38000, '2017-12-01');

-- --------------------------------------------------------

--
-- Structure de la table `Produit_SuiviCommande`
--

CREATE TABLE `Produit_SuiviCommande` (
  `Produit_IDPR` int(11) NOT NULL,
  `suivi_IDSC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `SuiviCommande`
--

CREATE TABLE `SuiviCommande` (
  `IDSC` int(11) NOT NULL,
  `IDCM` int(11) NOT NULL,
  `IDUS` int(11) NOT NULL,
  `IDPR` int(11) NOT NULL,
  `DATE` date NOT NULL,
  `PRICE` int(11) NOT NULL,
  `STATE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `SuiviCommande`
--

INSERT INTO `SuiviCommande` (`IDSC`, `IDCM`, `IDUS`, `IDPR`, `DATE`, `PRICE`, `STATE`) VALUES
(2, 1, 93, 23, '2017-12-04', 63, 2),
(3, 1, 93, 23, '2017-12-05', 33, 3),
(4, 1, 93, 23, '2017-12-05', 33, 3);

-- --------------------------------------------------------

--
-- Structure de la table `Utilisateur`
--

CREATE TABLE `Utilisateur` (
  `IDUS` int(11) NOT NULL,
  `EMAIL` varchar(255) NOT NULL DEFAULT '',
  `FNAME` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `PHONE` int(11) DEFAULT NULL,
  `SUSCRIBDATE` date DEFAULT NULL,
  `STATE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Utilisateur`
--

INSERT INTO `Utilisateur` (`IDUS`, `EMAIL`, `FNAME`, `NAME`, `PASSWORD`, `PHONE`, `SUSCRIBDATE`, `STATE`) VALUES
(93, 'amine@gmail.com', 'Amine', 'der', 'admin', 83784, '2017-11-22', 0);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `ccard`
--
ALTER TABLE `ccard`
  ADD PRIMARY KEY (`IDCD`,`IDCM`);

--
-- Index pour la table `Commande`
--
ALTER TABLE `Commande`
  ADD PRIMARY KEY (`IDCM`,`IDPR`,`IDUS`);

--
-- Index pour la table `Formation`
--
ALTER TABLE `Formation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `Produit`
--
ALTER TABLE `Produit`
  ADD PRIMARY KEY (`IDPR`);

--
-- Index pour la table `Produit_SuiviCommande`
--
ALTER TABLE `Produit_SuiviCommande`
  ADD UNIQUE KEY `UK_qdbeuqvoxidt1kphhws9msj1x` (`suivi_IDSC`),
  ADD KEY `FKoh1ab11q1iaq9qsm5p55xo1ll` (`Produit_IDPR`);

--
-- Index pour la table `SuiviCommande`
--
ALTER TABLE `SuiviCommande`
  ADD PRIMARY KEY (`IDSC`),
  ADD KEY `idproduit` (`IDPR`),
  ADD KEY `iduser` (`IDUS`);

--
-- Index pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  ADD PRIMARY KEY (`IDUS`,`EMAIL`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Produit`
--
ALTER TABLE `Produit`
  MODIFY `IDPR` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;
--
-- AUTO_INCREMENT pour la table `SuiviCommande`
--
ALTER TABLE `SuiviCommande`
  MODIFY `IDSC` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT pour la table `Utilisateur`
--
ALTER TABLE `Utilisateur`
  MODIFY `IDUS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1994;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Produit_SuiviCommande`
--
ALTER TABLE `Produit_SuiviCommande`
  ADD CONSTRAINT `FK6nadwqtuu0hu1y47p38dl4na4` FOREIGN KEY (`suivi_IDSC`) REFERENCES `SuiviCommande` (`IDSC`),
  ADD CONSTRAINT `FKoh1ab11q1iaq9qsm5p55xo1ll` FOREIGN KEY (`Produit_IDPR`) REFERENCES `Produit` (`IDPR`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
