-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2021 at 06:50 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drugstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `daroo`
--

CREATE TABLE `daroo` (
  `id` int(11) NOT NULL,
  `daroo_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_shekl` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_khatar` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_noskhe` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_bime` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_tolidkonande` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_gheimat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `daroo`
--

INSERT INTO `daroo` (`id`, `daroo_name`, `daroo_shekl`, `daroo_khatar`, `daroo_noskhe`, `daroo_bime`, `daroo_tolidkonande`, `daroo_gheimat`) VALUES
(59, 'Dopexamine', 'تزریقی', 'اضطراب-بی خوابی-ضعف', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 'داروسازی تهران شیمی', 65000),
(60, 'Acetaminophen 325 mg', 'قرص', 'سرگیجه-احساس خستگی', 'otc', 'ندارد', 'داروسازی عبیدی', 15000),
(61, 'Adult Cold', 'قرص', 'خواب آلودگی', 'otc', 'ندارد', 'داروسازی عبیدی', 6500),
(62, 'Moxifloxacin', 'کپسول', 'احساس مریضی-درد شکمی', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-نیروهای مسلح-تامین اجتماعی', 'داروسازی ابوریحان', 55000),
(63, 'Aluminium Hydroxide 320', 'قرص', 'کاهش منیزیم خون-کاهش فسفات خون', 'otc', 'ندارد', 'داروسازی رها', 23500),
(64, 'Azelastine eye drops', 'قطره', 'تاری دید-آزردگی چشم ( سوزش چشم )- سرخی و خارش', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-تامین اجتماعی', 'اکسیر گستر اسپادانا', 85000),
(65, 'Tetracycline', 'کپسول', 'سؤهاضمه-دل درد-مشکلات گوارشی', 'otc', 'ندارد', 'اکسیر گستر اسپادانا', 10500),
(66, 'Metronidazole', 'قرص', 'احساس خستگی-تهوع-استفراغ', 'تحت نسخه به فروش می رسد', 'تامین اجتماعی', 'داروسازی ایران دارو', 14500),
(67, 'Ranitidine', 'قرص', 'آسیستول-بلوک دهلیزی بطنی', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-نیروهای مسلح', 'داروسازی ایران دارو', 18700),
(68, 'INSULIN DETEMIR 100IU/ML PEN', 'قلم', 'واكنشهای موضعی و ديستروفی بافت چربی در محل تزريق', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 'داروسازی اکسیر', 43500),
(69, 'Ibuprofen', 'تزریقی', 'سوء هاضمه-سوزش سردل-معده درد', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-نیروهای مسلح-تامین اجتماعی', 'داروسازی اکسیر', 43500),
(70, 'Salicylic Acid Compound', 'کپسول', 'اسیدوز-کم آبی بدن-افزایش قندخون-افزایش پتاسیم خون', 'otc', 'ندارد', 'داروسازی امین', 16400),
(71, 'Famotidine', 'قرص', 'سردرد-سرگیجه', 'تحت نسخه به فروش می رسد', 'تامین اجتماعی', 'داروسازی ابوریحان', 155600),
(72, 'Nanosilver Particle Based Disinfectant Solution 5 L', 'محلول', 'ندارد', 'otc', 'ندارد', 'یوماسیل', 216000),
(73, 'Evihydra Hydrating Cream For Dry Skin', 'کرم', 'ندارد', 'otc', 'ندارد', 'کیمیا فراز زیبایی', 64500),
(74, 'مسواک اکسترا پرو ویتال متوسط دو تایی', 'مسواک', 'ندارد', 'otc', 'ندارد', 'تریزا', 104500),
(75, 'کرم دست و بدن اکسترا امولینت', 'کرم', 'ندارد', 'otc', 'ندارد', 'شرکت مانلی بهداشت پارس ایرانیان', 45000),
(76, 'Hypromellose', 'قطره', 'سوزش چشمی', 'otc', 'ندارد', 'اکسیر گستر اسپادانا', 25000),
(77, 'Loxym 20 MG', 'قرص', 'تشدید بیماری های قلبی-دیابت ملیتوس', 'تحت نسخه به فروش می رسد', 'بیمه سلامت-تامین اجتماعی', 'داروسازی فارماشیمی', 105500),
(78, 'DOXYCYCLINE', 'کپسول', 'احتیاط در بيماران مبتلا به نارسایی كليه وكبد', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 'ایران دارو', 10500);

--
-- Triggers `daroo`
--
DELIMITER $$
CREATE TRIGGER `insertNoskhe` AFTER INSERT ON `daroo` FOR EACH ROW BEGIN
INSERT INTO noskhe VALUES(NEW.id, NEW.daroo_name, NEW.daroo_noskhe);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `toKhatar` AFTER INSERT ON `daroo` FOR EACH ROW BEGIN
INSERT INTO khatar VALUES(NEW.id, NEW.daroo_name, NEW.daroo_khatar);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `toNoe` AFTER INSERT ON `daroo` FOR EACH ROW BEGIN
INSERT INTO noe VALUES(NEW.id, NEW.daroo_shekl, NEW.daroo_name);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `toTolidkonande` AFTER INSERT ON `daroo` FOR EACH ROW BEGIN
INSERT INTO tolidkonande VALUES(NEW.id, NEW.daroo_name, NEW.daroo_tolidkonande);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `factor`
--

CREATE TABLE `factor` (
  `id` int(11) NOT NULL,
  `name_sabt` varchar(250) COLLATE utf8_bin NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `factor`
--

INSERT INTO `factor` (`id`, `name_sabt`, `date`) VALUES
(150, 'همایون مفید', '2021-05-19 15:49:41'),
(151, 'ترانه ملکی', '2021-04-13 15:51:35'),
(152, 'جان همدانی', '2021-02-02 07:53:21'),
(153, 'مهدیه حسینی', '2020-12-10 11:55:28'),
(154, 'بهزاد چهارباغی', '2021-06-09 16:42:27'),
(155, 'بهناز مسکینی', '2021-06-11 20:09:02'),
(156, 'مهدیه حسینی', '2021-06-13 20:36:48'),
(157, 'بهزاد چهارباغی', '2021-06-14 13:08:31'),
(158, 'ترانه ملکی', '2021-06-14 01:07:31'),
(160, 'بهزاد چهارباغی', '2021-06-16 01:59:54'),
(161, 'ترانه ملکی', '2021-06-16 02:43:01'),
(162, 'ترانه ملکی', '2021-06-16 02:44:28'),
(163, 'بهزاد چهارباغی', '2021-06-16 16:45:45');

-- --------------------------------------------------------

--
-- Table structure for table `khatar`
--

CREATE TABLE `khatar` (
  `id` int(11) NOT NULL,
  `daroo_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_khatar` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `khatar`
--

INSERT INTO `khatar` (`id`, `daroo_name`, `daroo_khatar`) VALUES
(59, 'Dopexamine', 'اضطراب-بی خوابی-ضعف'),
(60, 'Acetaminophen 325 mg', 'سرگیجه-احساس خستگی'),
(61, 'Adult Cold', 'خواب آلودگی'),
(62, 'Moxifloxacin', 'احساس مریضی،-درد شکمی'),
(63, 'Aluminium Hydroxide 320', 'کاهش منیزیم خون-کاهش فسفات خون'),
(64, 'Azelastine eye drops', 'تاری دید-آزردگی چشم ( سوزش چشم )- سرخی و خارش'),
(65, 'Tetracycline', 'سؤهاضمه-دل درد-مشکلات گوارشی'),
(66, 'Metronidazole', 'احساس خستگی-تهوع-استفراغ'),
(67, 'Ranitidine', 'آسیستول-بلوک دهلیزی بطنی'),
(68, 'INSULIN DETEMIR 100IU/ML PEN', 'واكنشهای موضعی و ديستروفی بافت چربی در محل تزريق'),
(69, 'Ibuprofen', 'سوء هاضمه-سوزش سردل-معده درد'),
(70, 'Salicylic Acid Compound', 'اسیدوز-کم آبی بدن-افزایش قندخون-افزایش پتاسیم خون'),
(71, 'Famotidine', 'سردرد-سرگیجه'),
(72, 'Nanosilver Particle Based Disinfectant Solution 5 L', 'ندارد'),
(73, 'Evihydra Hydrating Cream For Dry Skin', 'ندارد'),
(74, 'مسواک اکسترا پرو ویتال متوسط دو تایی', 'ندارد'),
(75, 'کرم دست و بدن اکسترا امولینت', 'ندارد'),
(76, 'Hypromellose', 'سوزش چشمی'),
(77, 'Loxym 20 MG', 'تشدید بیماری های قلبی-دیابت ملیتوس'),
(78, 'DOXYCYCLINE', 'احتیاط در بيماران مبتلا به نارسایی كليه وكبد');

-- --------------------------------------------------------

--
-- Table structure for table `noe`
--

CREATE TABLE `noe` (
  `id` int(11) NOT NULL,
  `daroo_shekl` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_name` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `noe`
--

INSERT INTO `noe` (`id`, `daroo_shekl`, `daroo_name`) VALUES
(59, 'تزریقی ', 'Dopexamine'),
(60, 'قرص', 'Acetaminophen 325 mg'),
(61, 'قرص', 'Adult Cold'),
(62, 'کپسول', 'Moxifloxacin'),
(63, 'قرص', 'Aluminium Hydroxide 320'),
(64, 'قطره', 'Azelastine eye drops'),
(65, '', 'Tetracycline'),
(66, 'قرص', 'Metronidazole'),
(67, 'قرص', 'Ranitidine'),
(68, 'قلم', 'INSULIN DETEMIR 100IU/ML PEN'),
(69, 'تزريقی', 'Ibuprofen'),
(70, 'کپسول', 'Salicylic Acid Compound'),
(71, 'قرص', 'Famotidine'),
(72, 'محلول', 'Nanosilver Particle Based Disinfectant Solution 5 L'),
(73, 'کرم', 'Evihydra Hydrating Cream For Dry Skin'),
(74, 'مسواک', 'مسواک اکسترا پرو ویتال متوسط دو تایی'),
(75, 'کرم', 'کرم دست و بدن اکسترا امولینت'),
(76, 'قطره', 'Hypromellose'),
(77, 'قرص', 'Loxym 20 MG'),
(78, 'کپسول', 'DOXYCYCLINE');

-- --------------------------------------------------------

--
-- Table structure for table `noskhe`
--

CREATE TABLE `noskhe` (
  `id` int(11) NOT NULL,
  `daroo_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_noskhe` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `noskhe`
--

INSERT INTO `noskhe` (`id`, `daroo_name`, `daroo_noskhe`) VALUES
(59, 'Dopexamine', 'تحت نسخه به فروش می رسد'),
(60, 'Acetaminophen 325 mg', 'otc'),
(61, 'Adult Cold', 'otc'),
(62, 'Moxifloxacin', 'تحت نسخه به فروش می رسد'),
(63, 'Aluminium Hydroxide 320', 'otc'),
(64, 'Azelastine eye drops', 'تحت نسخه به فروش می رسد'),
(65, 'Tetracycline', 'otc'),
(66, 'Metronidazole', 'تحت نسخه به فروش می رسد'),
(67, 'Ranitidine', 'تحت نسخه به فروش می رسد'),
(68, 'INSULIN DETEMIR 100IU/ML PEN', 'تحت نسخه به فروش می رسد'),
(69, 'Ibuprofen', 'تحت نسخه به فروش می رسد'),
(70, 'Salicylic Acid Compound', 'otc'),
(71, 'Famotidine', 'تحت نسخه به فروش می رسد'),
(72, 'Nanosilver Particle Based Disinfectant Solution 5 L', 'otc'),
(73, 'Evihydra Hydrating Cream For Dry Skin', 'otc'),
(74, 'مسواک اکسترا پرو ویتال متوسط دو تایی', 'otc'),
(75, 'کرم دست و بدن اکسترا امولینت', 'otc'),
(76, 'Hypromellose', 'otc'),
(77, 'Loxym 20 MG', 'تحت نسخه به فروش می رسد'),
(78, 'DOXYCYCLINE', 'تحت نسخه به فروش می رسد');

-- --------------------------------------------------------

--
-- Table structure for table `rizfactor`
--

CREATE TABLE `rizfactor` (
  `daroo_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_noskhe` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_bime` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_gheimat` int(11) NOT NULL,
  `daroo_tedad` int(11) NOT NULL,
  `factor_id` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `name_sabt` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `rizfactor`
--

INSERT INTO `rizfactor` (`daroo_name`, `daroo_noskhe`, `daroo_bime`, `daroo_gheimat`, `daroo_tedad`, `factor_id`, `id`, `name_sabt`, `daroo_id`) VALUES
('Acetaminophen 325 mg', 'otc', 'ندارد', 15000, 12, 150, 138, 'همایون مفید', 60),
('Moxifloxacin', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-نیروهای مسلح-تامین اجتماعی', 55000, 13, 150, 139, 'همایون مفید', 62),
('Aluminium Hydroxide 320', 'otc', 'ندارد', 23500, 100, 150, 140, 'همایون مفید', 63),
('Metronidazole', 'تحت نسخه به فروش می رسد', 'تامین اجتماعی', 14500, 12, 151, 141, 'ترانه ملکی', 66),
('مسواک اکسترا پرو ویتال متوسط دو تایی', 'otc', 'ندارد', 104500, 44, 151, 142, 'ترانه ملکی', 74),
('Evihydra Hydrating Cream For Dry Skin', 'otc', 'ندارد', 64500, 18, 151, 143, 'ترانه ملکی', 73),
('Salicylic Acid Compound', 'otc', 'ندارد', 16400, 3, 151, 144, 'ترانه ملکی', 70),
('کرم دست و بدن اکسترا امولینت', 'otc', 'ندارد', 45000, 10, 152, 145, 'جان همدانی', 75),
('Evihydra Hydrating Cream For Dry Skin', 'otc', 'ندارد', 64500, 2, 152, 146, 'جان همدانی', 73),
('Adult Cold', 'otc', 'ندارد', 6500, 23, 152, 147, 'جان همدانی', 61),
('Dopexamine', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 65000, 34, 152, 148, 'جان همدانی', 59),
('Metronidazole', 'تحت نسخه به فروش می رسد', 'تامین اجتماعی', 14500, 10, 153, 149, 'مهدیه حسینی', 66),
('Tetracycline', 'otc', 'ندارد', 10500, 60, 153, 150, 'مهدیه حسینی', 65),
('Azelastine eye drops', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-تامین اجتماعی', 85000, 23, 153, 151, 'مهدیه حسینی', 64),
('Dopexamine', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 65000, 6, 153, 152, 'مهدیه حسینی', 59),
('Dopexamine', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 65000, 55, 155, 157, 'بهناز مسکینی', 59),
('Acetaminophen 325 mg', 'otc', 'ندارد', 15000, 2, 155, 158, 'بهناز مسکینی', 60),
('Moxifloxacin', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-نیروهای مسلح-تامین اجتماعی', 55000, 5, 156, 159, 'مهدیه حسینی', 62),
('Aluminium Hydroxide 320', 'otc', 'ندارد', 23500, 6, 156, 160, 'مهدیه حسینی', 63),
('Azelastine eye drops', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-تامین اجتماعی', 85000, 2, 156, 161, 'مهدیه حسینی', 64),
('Tetracycline', 'otc', 'ندارد', 10500, 10, 156, 162, 'مهدیه حسینی', 65),
('Acetaminophen 325 mg', 'otc', 'ندارد', 15000, 4, 158, 164, 'ترانه ملکی', 60),
('INSULIN DETEMIR 100IU/ML PEN', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 43500, 6, 158, 165, 'ترانه ملکی', 68),
('Loxym 20 MG', 'تحت نسخه به فروش می رسد', 'بیمه سلامت-تامین اجتماعی', 105500, 1, 158, 166, 'ترانه ملکی', 77),
('کرم دست و بدن اکسترا امولینت', 'otc', 'ندارد', 45000, 25, 158, 167, 'ترانه ملکی', 75),
('Evihydra Hydrating Cream For Dry Skin', 'otc', 'ندارد', 64500, 3, 158, 168, 'ترانه ملکی', 73),
('Moxifloxacin', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-نیروهای مسلح-تامین اجتماعی', 55000, 3, 154, 175, 'بهزاد چهارباغی', 62),
('Nanosilver Particle Based Disinfectant Solution 5 L', 'otc', 'ندارد', 216000, 8, 154, 176, 'بهزاد چهارباغی', 72),
('Hypromellose', 'تحت نسخه به فروش می رسد', 'بیمه سلامت-تامین اجتماعی', 105500, 11, 157, 177, 'بهزاد چهارباغی', 76),
('کرم دست و بدن اکسترا امولینت', 'otc', 'ندارد', 45000, 2, 157, 178, 'بهزاد چهارباغی', 75),
('Adult Cold', 'otc', 'ندارد', 6500, 5, 160, 179, 'بهزاد چهارباغی', 61),
('Tetracycline', 'otc', 'ندارد', 10500, 8, 160, 180, 'بهزاد چهارباغی', 65),
('Dopexamine', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 65000, 53, 161, 181, 'ترانه ملکی', 59),
('Acetaminophen 325 mg', 'otc', 'ندارد', 15000, 2, 161, 182, 'ترانه ملکی', 60),
('Azelastine eye drops', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی-تامین اجتماعی', 85000, 1, 161, 183, 'ترانه ملکی', 64),
('Metronidazole', 'تحت نسخه به فروش می رسد', 'تامین اجتماعی', 14500, 6, 161, 184, 'ترانه ملکی', 66),
('INSULIN DETEMIR 100IU/ML PEN', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 43500, 34, 162, 185, 'ترانه ملکی', 68),
('Evihydra Hydrating Cream For Dry Skin', 'otc', 'ندارد', 64500, 2, 162, 186, 'ترانه ملکی', 73),
('مسواک اکسترا پرو ویتال متوسط دو تایی', 'otc', 'ندارد', 104500, 5, 162, 187, 'ترانه ملکی', 74),
('کرم دست و بدن اکسترا امولینت', 'otc', 'ندارد', 45000, 10, 162, 188, 'ترانه ملکی', 75),
('Dopexamine', 'تحت نسخه به فروش می رسد', 'بیمه تکمیلی', 65000, 2, 163, 189, 'بهزاد چهارباغی', 59),
('Acetaminophen 325 mg', 'otc', 'ندارد', 15000, 5, 163, 190, 'بهزاد چهارباغی', 60),
('Adult Cold', 'otc', 'ندارد', 6500, 7, 163, 191, 'بهزاد چهارباغی', 61);

-- --------------------------------------------------------

--
-- Table structure for table `sabt`
--

CREATE TABLE `sabt` (
  `id` int(11) NOT NULL,
  `name_sabt` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sabt`
--

INSERT INTO `sabt` (`id`, `name_sabt`) VALUES
(1, 'بهزاد چهارباغی'),
(2, 'بهناز مسکینی'),
(5, 'بهنام زند'),
(7, 'ترانه ملکی'),
(6, 'جان همدانی'),
(4, 'مهدیه حسینی'),
(3, 'همایون مفید');

-- --------------------------------------------------------

--
-- Table structure for table `tolidkonande`
--

CREATE TABLE `tolidkonande` (
  `id` int(11) NOT NULL,
  `daroo_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `daroo_tolidkonande` varchar(250) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `tolidkonande`
--

INSERT INTO `tolidkonande` (`id`, `daroo_name`, `daroo_tolidkonande`) VALUES
(59, 'Dopexamine', 'داروسازی تهران شیمی'),
(60, 'Acetaminophen 325 mg', 'داروسازی عبیدی'),
(61, 'Adult Cold', 'داروسازی عبیدی'),
(62, 'Moxifloxacin', 'داروسازی ابوریحان'),
(63, 'Aluminium Hydroxide 320', 'داروسازی رها'),
(64, 'Azelastine eye drops', 'اکسیر گستر اسپادانا'),
(65, 'Tetracycline', 'اکسیر گستر اسپادانا'),
(66, 'Metronidazole', 'داروسازی ایران دارو'),
(67, 'Ranitidine', 'داروسازی ایران دارو'),
(68, 'INSULIN DETEMIR 100IU/ML PEN', 'داروسازی اکسیر'),
(69, 'Ibuprofen', 'داروسازی اکسیر'),
(70, 'Salicylic Acid Compound', 'داروسازی امین'),
(71, 'Famotidine', 'داروسازی ابوریحان'),
(72, 'Nanosilver Particle Based Disinfectant Solution 5 L', 'یوماسیل'),
(73, 'Evihydra Hydrating Cream For Dry Skin', 'کیمیا فراز زیبایی'),
(74, 'مسواک اکسترا پرو ویتال متوسط دو تایی', 'تریزا'),
(75, 'کرم دست و بدن اکسترا امولینت', 'شرکت مانلی بهداشت پارس ایرانیان'),
(76, 'Hypromellose', 'اکسیر گستر اسپادانا'),
(77, 'Loxym 20 MG', 'داروسازی فارماشیمی'),
(78, 'DOXYCYCLINE', 'ایران دارو');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daroo`
--
ALTER TABLE `daroo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `daroo_name` (`daroo_name`);

--
-- Indexes for table `factor`
--
ALTER TABLE `factor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `factor-name-staff-fk` (`name_sabt`);

--
-- Indexes for table `khatar`
--
ALTER TABLE `khatar`
  ADD KEY `khatar_ibfk_1` (`id`);

--
-- Indexes for table `noe`
--
ALTER TABLE `noe`
  ADD KEY `noe_ibfk_1` (`id`);

--
-- Indexes for table `noskhe`
--
ALTER TABLE `noskhe`
  ADD KEY `noskhe_ibfk_1` (`id`);

--
-- Indexes for table `rizfactor`
--
ALTER TABLE `rizfactor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `factor_id_fk_test` (`factor_id`),
  ADD KEY `sabt_name_fk` (`name_sabt`);

--
-- Indexes for table `sabt`
--
ALTER TABLE `sabt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name_sabt` (`name_sabt`);

--
-- Indexes for table `tolidkonande`
--
ALTER TABLE `tolidkonande`
  ADD KEY `tolidkonande_ibfk_1` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daroo`
--
ALTER TABLE `daroo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `factor`
--
ALTER TABLE `factor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=164;

--
-- AUTO_INCREMENT for table `rizfactor`
--
ALTER TABLE `rizfactor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=192;

--
-- AUTO_INCREMENT for table `sabt`
--
ALTER TABLE `sabt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `factor`
--
ALTER TABLE `factor`
  ADD CONSTRAINT `factor-name-staff-fk` FOREIGN KEY (`name_sabt`) REFERENCES `sabt` (`name_sabt`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `khatar`
--
ALTER TABLE `khatar`
  ADD CONSTRAINT `khatar_ibfk_1` FOREIGN KEY (`id`) REFERENCES `daroo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `noe`
--
ALTER TABLE `noe`
  ADD CONSTRAINT `noe_ibfk_1` FOREIGN KEY (`id`) REFERENCES `daroo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `noskhe`
--
ALTER TABLE `noskhe`
  ADD CONSTRAINT `noskhe_ibfk_1` FOREIGN KEY (`id`) REFERENCES `daroo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rizfactor`
--
ALTER TABLE `rizfactor`
  ADD CONSTRAINT `factor_id_fk_test` FOREIGN KEY (`factor_id`) REFERENCES `factor` (`id`),
  ADD CONSTRAINT `sabt_name_fk` FOREIGN KEY (`name_sabt`) REFERENCES `factor` (`name_sabt`);

--
-- Constraints for table `tolidkonande`
--
ALTER TABLE `tolidkonande`
  ADD CONSTRAINT `tolidkonande_ibfk_1` FOREIGN KEY (`id`) REFERENCES `daroo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
