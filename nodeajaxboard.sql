-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 23-08-01 14:55
-- 서버 버전: 10.4.28-MariaDB
-- PHP 버전: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `nodeajaxboard`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `post`
--

CREATE TABLE `post` (
  `idx` int(11) NOT NULL,
  `id` varchar(20) NOT NULL,
  `title` varchar(25) NOT NULL,
  `datetime` datetime NOT NULL,
  `detail` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 테이블의 덤프 데이터 `post`
--

INSERT INTO `post` (`idx`, `id`, `title`, `datetime`, `detail`) VALUES
(1, 'FNC Alfajer', 'Valroant champions', '2023-08-01 21:47:21', 'dd');

-- --------------------------------------------------------

--
-- 테이블 구조 `reply`
--

CREATE TABLE `reply` (
  `idx` int(11) NOT NULL,
  `writer_id` varchar(20) NOT NULL,
  `post_idx` int(11) NOT NULL,
  `datetime` datetime NOT NULL,
  `detail` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`idx`);

--
-- 테이블의 인덱스 `reply`
--
ALTER TABLE `reply`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `post`
--
ALTER TABLE `post`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 테이블의 AUTO_INCREMENT `reply`
--
ALTER TABLE `reply`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
