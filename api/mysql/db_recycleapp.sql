-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2021 at 03:51 PM
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
(0, 'ฮารมัน', 'นาแว', '0936373661', 'admin2', '1234'),
(1, 'harman', 'nawae', '0936373661', 'harman', '1234'),
(2, 'sunhagee', 'thuion', '0937849273', 'sunhagee', '1234'),
(3, 'อิลฮัม', 'มอลอ', '0987072703', 'ilham', 'molo'),
(4, 'dulmanah', 'hama', '0808745932', '1111', '1111'),
(5, 'อารีมี', 'จะปะกียา', '0937849273', 'arimee', '1234'),
(6, 'solahudin', 'kaji', '00200000', 'solahudding', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `newspaper`
--

CREATE TABLE `newspaper` (
  `n_id` int(4) NOT NULL,
  `n_title` varchar(255) NOT NULL,
  `n_name` varchar(255) NOT NULL,
  `n_content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `newspaper`
--

INSERT INTO `newspaper` (`n_id`, `n_title`, `n_name`, `n_content`) VALUES
(1, 'คู่มื่อ', 'วิธีแยกขยะแต่ละประเภท', '1.ถังขยะสำหรับขยะอินทรีย์ ขยะเปียก (สีเขียว) ขยะอินทรีย์ คือ ขยะที่เน่าเสียและย่อยสลายได้เร็ว เช่น เศษอาหาร เปลือกผลไม้ เศษผัก เนื้อสัตว์ เศษใบไม้แห้ง\r\n2.ถังขยะสำหรับขยะทั่วไป (สีน้ำเงิน)\r\n3.ถังขยะสำหรับขยะรีไซเคิล (สีเหลือง)\r\n4.ถังขยะสำหรับ'),
(2, 'คู่มือ', 'วิธีการขายขยะภายในแอพ', '1.สมัคสมาชิกและเข้าสู่ระบบ 2.ไปหน้าหลักกดเมนูราคาขยะเพื่อดูราคาแต่ละประเภท 3.ดูตารางรับซื้อขยะแต่วันของรถรับซื้อขยะ 4.ไปเมนูขายเพื่อกรอกข้อมูลขายขยะ 5.รอรถมารับขยะตามวันเวลาในตาราง');

-- --------------------------------------------------------

--
-- Table structure for table `product_price`
--

CREATE TABLE `product_price` (
  `p_id` int(200) NOT NULL,
  `p_name` varchar(200) NOT NULL,
  `p_price` varchar(200) NOT NULL,
  `p_code` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_price`
--

INSERT INTO `product_price` (`p_id`, `p_name`, `p_price`, `p_code`) VALUES
(1, 'เหล็ก', '25บาท', 'p0001'),
(2, 'ขวด', '20 บาท', 'p0002');

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
-- Indexes for table `newspaper`
--
ALTER TABLE `newspaper`
  ADD PRIMARY KEY (`n_id`);

--
-- Indexes for table `product_price`
--
ALTER TABLE `product_price`
  ADD PRIMARY KEY (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `newspaper`
--
ALTER TABLE `newspaper`
  MODIFY `n_id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product_price`
--
ALTER TABLE `product_price`
  MODIFY `p_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
