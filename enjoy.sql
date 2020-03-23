-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 11, 2020 at 04:18 PM
-- Server version: 5.7.24
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `enjoy`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CategoryID` int(5) NOT NULL,
  `CategoryName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CategoryID`, `CategoryName`) VALUES
(1, 'Xbox'),
(2, 'PS4'),
(3, 'PC');

-- --------------------------------------------------------

--
-- Table structure for table `category_details`
--

CREATE TABLE `category_details` (
  `CategoryID` int(11) NOT NULL,
  `ProductID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category_details`
--

INSERT INTO `category_details` (`CategoryID`, `ProductID`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12);

-- --------------------------------------------------------

--
-- Table structure for table `newsletters`
--

CREATE TABLE `newsletters` (
  `NewsletterID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `FirstName` varchar(30) DEFAULT NULL,
  `LastName` varchar(30) DEFAULT NULL,
  `Email` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newsletters`
--

INSERT INTO `newsletters` (`NewsletterID`, `UserID`, `FirstName`, `LastName`, `Email`) VALUES
(1, NULL, 'Yanica', 'Svensson', 'sweets86y@gmail.com'),
(2, 2, NULL, NULL, NULL),
(3, NULL, 'Rasmus', 'Hansson', 'rasmus96@gmail.com'),
(4, NULL, 'Bara', 'Abdullatif', 'bara.abd@yahoo.com'),
(5, 3, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `OrderID` int(4) NOT NULL,
  `OrderDate` datetime NOT NULL,
  `UserID` int(5) DEFAULT NULL,
  `ShipperID` int(4) DEFAULT NULL,
  `Recieved` tinyint(1) NOT NULL,
  `Shipped` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`OrderID`, `OrderDate`, `UserID`, `ShipperID`, `Recieved`, `Shipped`) VALUES
(1, '2020-02-07 13:15:32', 2, 3, 0, 0),
(2, '2020-02-07 13:34:35', 3, 1, 0, 0),
(3, '2020-02-07 13:45:40', 4, 3, 0, 0),
(4, '2020-02-07 14:36:36', 2, 2, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `OrderID` int(4) NOT NULL,
  `ProductID` int(4) NOT NULL,
  `Quantity` int(3) NOT NULL,
  `UnitPrice` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`OrderID`, `ProductID`, `Quantity`, `UnitPrice`) VALUES
(1, 3, 1, 699),
(1, 5, 2, 699),
(2, 8, 1, 699),
(3, 12, 1, 699),
(4, 5, 1, 699);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(5) NOT NULL,
  `CategoryID` int(11) DEFAULT NULL,
  `ProductName` varchar(50) NOT NULL,
  `UnitInStock` int(11) NOT NULL,
  `Price` int(5) NOT NULL,
  `CoverPicture` varchar(50) NOT NULL,
  `PNGPicture` varchar(60) NOT NULL,
  `Description` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `CategoryID`, `ProductName`, `UnitInStock`, `Price`, `CoverPicture`, `PNGPicture`, `Description`) VALUES
(1, 1, 'PlayerUnknown’s Battlegrounds ', 8, 699, './images/coverpictures/xbox/pubg.jpg', './images/pngpictures/pubg.png', '”With PLAYERUNKNOWN\'S BATTLEGROUNDS Steam key, you will enter a 64 square kilometer island with a bunch of other players online! You\'ll have to scavenge the lands for weapons and supplies to be the one to survive. PUBG price is a small one to pay, for the emotional rollercoaster you‘ll experience with each match.”'),
(2, 1, 'Darksiders 1 War Edition', 8, 699, './images/coverpictures/xbox/darksiders1.jpg', './images/pngpictures/darksiders1.png', '”Darksiders is a hack and slash action-adventure video game developed by Vigil Games and published by THQ. The game takes its inspiration from the apocalypse and battle of armageddon described in the Bible\'s Book of Revelation, with the player taking the role of \"War\", one of the four horsemen of the apocalypse.”'),
(3, 1, 'Darksiders 2 Death Edition ', 8, 699, './images/coverpictures/xbox/darksiders2.jpg', './images/pngpictures/darksiders2.png', '”Darksiders 2 is a follow-up to Vigil Games\' Darksiders, which starred War, the first horseman of the Apocalypse. This second installment follows the second horseman of the Apocalypse, Death, as he seeks to redeem his brother\'s actions which precipitated the start of the End Times in the previous game.”'),
(4, 1, 'Grand Theft Auto V ', 8, 699, './images/coverpictures/xbox/gtav.jpg', './images/pngpictures/gtav.png', '”Grant Theft Auto V Rockstar Social Club key offers a game already known to most and loved by many. It’s the fifth action-adventure shooter game in the cultic series developed by Rockstar Games! Enter the vast open-world environment, visit different cities, hills, mountains, forests, and wastelands! GTA series was always known for their freedom of activity, and GTAV proves it once again!”'),
(5, 2, 'God Of War  ', 8, 699, './images/coverpictures/ps4/godofwar.jpg', './images/pngpictures/godofwar.png', 'God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment (SIE). Released on April 20, 2018, for the PlayStation 4 (PS4), it is the eighth installment in the God of War series, the eighth chronologically, and the sequel to 2010\'s God of War III.'),
(6, 2, 'Darksiders 1 War Edition ', 8, 699, './images/coverpictures/ps4/darksiders1.jpg', './images/pngpictures/darksiders1.png', '”Darksiders is a hack and slash action-adventure video game developed by Vigil Games and published by THQ. The game takes its inspiration from the apocalypse and battle of armageddon described in the Bible\'s Book of Revelation, with the player taking the role of \"War\", one of the four horsemen of the apocalypse.”'),
(7, 2, 'Darksiders 2 Death Edition ', 8, 699, './images/coverpictures/ps4/darksiders2.jpg', './images/pngpictures/darksiders2.png', '”Darksiders 2 is a follow-up to Vigil Games\' Darksiders, which starred War, the first horseman of the Apocalypse. This second installment follows the second horseman of the Apocalypse, Death, as he seeks to redeem his brother\'s actions which precipitated the start of the End Times in the previous game.”'),
(8, 2, 'Grand Theft Auto V ', 8, 699, './images/coverpictures/ps4/gtav.jpg', './images/pngpictures/gtav.png', '”Grant Theft Auto V Rockstar Social Club key offers a game already known to most and loved by many. It’s the fifth action-adventure shooter game in the cultic series developed by Rockstar Games! Enter the vast open-world environment, visit different cities, hills, mountains, forests, and wastelands! GTA series was always known for their freedom of activity, and GTAV proves it once again!”'),
(9, 3, 'PlayerUnknown’s Battlegrounds ', 8, 699, './images/coverpictures/pc/pubg.jpg', './images/pngpictures/pubg.png', '”With PLAYERUNKNOWN\'S BATTLEGROUNDS Steam key, you will enter a 64 square kilometer island with a bunch of other players online! You\'ll have to scavenge the lands for weapons and supplies to be the one to survive. PUBG price is a small one to pay, for the emotional rollercoaster you‘ll experience with each match.”'),
(10, 3, 'Darksiders 1 War Edition ', 8, 699, './images/coverpictures/pc/darksiders1.jpg', './images/pngpictures/darksiders1.png', '”Darksiders is a hack and slash action-adventure video game developed by Vigil Games and published by THQ. The game takes its inspiration from the apocalypse and battle of armageddon described in the Bible\'s Book of Revelation, with the player taking the role of \"War\", one of the four horsemen of the apocalypse.”'),
(11, 3, 'Darksiders 2 Death Edition ', 8, 699, './images/coverpictures/pc/darksiders2.jpg', './images/pngpictures/darksiders2.png', '”Darksiders 2 is a follow-up to Vigil Games\' Darksiders, which starred War, the first horseman of the Apocalypse. This second installment follows the second horseman of the Apocalypse, Death, as he seeks to redeem his brother\'s actions which precipitated the start of the End Times in the previous game.”'),
(12, 3, 'Grand Theft Auto V ', 8, 699, './images/coverpictures/pc/gtav.jpg', './images/pngpictures/gtav.png', '”Grant Theft Auto V Rockstar Social Club key offers a game already known to most and loved by many. It’s the fifth action-adventure shooter game in the cultic series developed by Rockstar Games! Enter the vast open-world environment, visit different cities, hills, mountains, forests, and wastelands! GTA series was always known for their freedom of activity, and GTAV proves it once again!”');

-- --------------------------------------------------------

--
-- Table structure for table `shippers`
--

CREATE TABLE `shippers` (
  `ShipperID` int(4) NOT NULL,
  `ShippersOption` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shippers`
--

INSERT INTO `shippers` (`ShipperID`, `ShippersOption`) VALUES
(1, 'DHL'),
(2, 'Post'),
(3, 'Online');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserID` int(5) NOT NULL,
  `FirstName` varchar(15) NOT NULL,
  `LastName` varchar(15) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserID`, `FirstName`, `LastName`, `Email`, `Password`, `Role`) VALUES
(1, 'Bara', 'Abdullatif', 'bara.abd@yahoo.com', '1234', 'Admin'),
(2, 'Essa', 'Barbar', 'essa992@gmail.com', '1234', 'Admin'),
(3, 'Anu', 'Chaudhary', 'anu.khatra@gmail.com', '1234', 'Customer'),
(4, 'Rasmus', 'Hansson', 'rasmus96@gmail.com', '1234', 'Customer'),
(5, 'Yanica', 'Svensson', 'sweets86y@gmail.com', '1234', 'Customer');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `category_details`
--
ALTER TABLE `category_details`
  ADD PRIMARY KEY (`CategoryID`,`ProductID`),
  ADD KEY `CategoryID` (`CategoryID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`NewsletterID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `ShipperID` (`ShipperID`),
  ADD KEY `UserID` (`UserID`) USING BTREE;

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`OrderID`,`ProductID`),
  ADD KEY `OrderID` (`OrderID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Indexes for table `shippers`
--
ALTER TABLE `shippers`
  ADD PRIMARY KEY (`ShipperID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CategoryID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `NewsletterID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `shippers`
--
ALTER TABLE `shippers`
  MODIFY `ShipperID` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category_details`
--
ALTER TABLE `category_details`
  ADD CONSTRAINT `category_details_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`CategoryID`),
  ADD CONSTRAINT `category_details_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ProductID`);

--
-- Constraints for table `newsletters`
--
ALTER TABLE `newsletters`
  ADD CONSTRAINT `newsletters_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`ShipperID`) REFERENCES `shippers` (`ShipperID`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserID`);

--
-- Constraints for table `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`),
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `products` (`ProductID`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `categories` (`CategoryID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
