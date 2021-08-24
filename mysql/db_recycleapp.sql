-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2021 at 09:38 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_recycleapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(4) NOT NULL,
  `admin_name` varchar(200) NOT NULL,
  `admin_sname` varchar(200) NOT NULL,
  `admin_img` varchar(200) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `admin_name`, `admin_sname`, `admin_img`, `username`, `password`) VALUES
(1, 'harman', 'nawae', 'adminlogo.png', 'admin1', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `lat` varchar(50) NOT NULL,
  `lng` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`lat`, `lng`) VALUES
('6.5320113413805', '101.28550644509'),
('6.5320070133829', '101.28548331981'),
('6.5320070133829', '101.28548331981'),
('6.5320070133829', '101.28548331981'),
('6.5319617452175', '101.28545552379'),
('6.5319643590052', '101.28544962511'),
('6.5319643590052', '101.28544962511');

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `member_id` int(4) NOT NULL,
  `member_name` varchar(200) NOT NULL,
  `member_sname` varchar(200) NOT NULL,
  `member_phone` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`member_id`, `member_name`, `member_sname`, `member_phone`, `username`, `password`) VALUES
(1, 'harman', 'nawae', '0936373661', 'harman', '1234'),
(2, 'sunhagee', 'thuion', '0937849273', 'sunhagee', '1234'),
(3, 'อิลฮัม', 'มอลอ', '0987072703', 'ilham', 'molo'),
(4, 'dulmanah', 'hama', '0808745932', '1111', '1111');

-- --------------------------------------------------------

--
-- Table structure for table `member_sell`
--

CREATE TABLE `member_sell` (
  `id` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `weight` varchar(20) NOT NULL,
  `p_id` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `member_sell`
--

INSERT INTO `member_sell` (`id`, `type`, `weight`, `p_id`, `user_id`) VALUES
(1, '4 ', '99', '', 1),
(3, '1 ', '992', '', 1),
(4, '4', '555756', '', 1),
(5, '4', '30', '', 1),
(6, '2', '555', '3', 1),
(7, '3', '77', '4', 1),
(8, '4', '555', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `newspaper`
--

CREATE TABLE `newspaper` (
  `n_title` varchar(255) NOT NULL,
  `n_name` varchar(255) NOT NULL,
  `n_content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newspaper`
--

INSERT INTO `newspaper` (`n_title`, `n_name`, `n_content`) VALUES
('fsfefsf', 'esfesfsefse', 'fefsfefesfsefesf'),
('dawdawdwadawd', 'wadawdwad', 'wadawdwadwadawd');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `p_id` int(200) NOT NULL,
  `p_name` varchar(200) NOT NULL,
  `p_price` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`p_id`, `p_name`, `p_price`) VALUES
(1, 'เหล็ก', '25'),
(2, 'ขวด', '20'),
(3, 'ขวดพลาสติก', '7'),
(4, 'ขวดแก้ว', '15');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_lastname` varchar(100) NOT NULL,
  `user_phone` varchar(100) NOT NULL,
  `user_address` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `user_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_lastname`, `user_phone`, `user_address`, `username`, `password`, `user_type`) VALUES
(0, 'ซุนฮาจีย์', 'ทุ้ยอ้น', '0807012878', ' ไม้แก่ง อ.รามัน จ.สุโบทัย', 'admin', '1111', 'admin'),
(1, 'ฮารมัน', 'นาแว', '0936373661', 'ม.6 ต.อาซ่อง อ.รามัน จ.ยะลา', 'member', '1111', 'member'),
(2, 'ดุลมานะ', 'หะมะ', '0936373661', '161/5 ม.6  ต.อาซ่อง อ.รามัน จ.ยะลา', 'rider', '1111', 'rider');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `member_sell`
--
ALTER TABLE `member_sell`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `member_sell`
--
ALTER TABLE `member_sell`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `p_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
