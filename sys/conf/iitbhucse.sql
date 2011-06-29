-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
<<<<<<< HEAD
-- Generation Time: Jun 28, 2011 at 05:18 PM
=======
-- Generation Time: Jun 20, 2011 at 04:37 PM
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `iitbhucse`
--

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE IF NOT EXISTS `contents` (
  `cntid` bigint(20) NOT NULL AUTO_INCREMENT,
  `cntname` varchar(255) NOT NULL,
  `cntowner` bigint(20) NOT NULL,
  `cntstype` int(11) NOT NULL DEFAULT '0',
  `cntstyle` varchar(255) NOT NULL DEFAULT '',
  `cntttype` int(11) NOT NULL,
  `cnttpl` varchar(255) NOT NULL,
  `cntdtype` int(11) NOT NULL,
  `cntdata` text NOT NULL,
  PRIMARY KEY (`cntid`)
<<<<<<< HEAD
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;
=======
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

--
-- Dumping data for table `contents`
--

INSERT INTO `contents` (`cntid`, `cntname`, `cntowner`, `cntstype`, `cntstyle`, `cntttype`, `cnttpl`, `cntdtype`, `cntdata`) VALUES
(1, 'cnt-test', 1, 1, 'div#test {\r\n color: darkred;\r\n font-size: large;\r\n}', 1, '<div id="test">\r\n <p>Hello ${content.name}</p><p>Welcome to ${content.dept}</p>\r\n</div>\r\n', 1, '{\r\n "name":"Vibhaj Rajan",\r\n "dept":"Department of Computer Engineering"\r\n}'),
<<<<<<< HEAD
(3, 'cnt-test-2', 1, 1, '', 2, 'tpl-add-test', 1, '{\r\n "name":"<h1>Vibhaj<\\/h1>"\r\n}'),
(4, 'Content-shivang', 30, 1, '', 1, '<h2>${content.message}</h2>', 1, '{"message":"Welcome to Shivang Mittal''s Home Page"}'),
(5, 'Content-kks', 31, 1, '', 1, '<h2>${content.message}</h2>', 1, '{"message":"Welcome to Dr.K.K.Shukla''s Home Page"}'),
(6, 'Content-Web Development', 1, 1, '', 1, '<h2>${content.message}</h2>', 1, '{"message":"Welcome to the Web Development''s Course Page"}');
=======
(3, 'cnt-test-2', 1, 1, '', 2, 'tpl-add-test', 1, '{\r\n "name":"<h1>Vibhaj<\\/h1>"\r\n}');
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `crsid` varchar(255) NOT NULL,
  `crsname` varchar(255) NOT NULL,
  `crsdescription` varchar(255) NOT NULL,
  `crspart` int(11) NOT NULL,
<<<<<<< HEAD
  `crshome` bigint(20) DEFAULT NULL,
=======
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
  PRIMARY KEY (`crsid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

<<<<<<< HEAD
INSERT INTO `courses` (`crsid`, `crsname`, `crsdescription`, `crspart`, `crshome`) VALUES
('CS 13', 'Web Development', 'Complete web development package..', 2, 6);
=======
INSERT INTO `courses` (`crsid`, `crsname`, `crsdescription`, `crspart`) VALUES
('CS 13', 'Data Structures', 'Various Data Structures...', 2),
('CS 34', 'Networking', 'Networking Tools', 3);
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `elibrary`
--

CREATE TABLE IF NOT EXISTS `elibrary` (
  `bookid` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `bookauthor` varchar(255) NOT NULL,
  `bookdescription` varchar(255) DEFAULT NULL,
<<<<<<< HEAD
  `bookpages` bigint(20) DEFAULT NULL,
=======
  `bookpages` int(11) NOT NULL,
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
  `bookcollection` varchar(255) NOT NULL,
  PRIMARY KEY (`bookid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `elibrary`
--

<<<<<<< HEAD
INSERT INTO `elibrary` (`bookid`, `bookname`, `bookauthor`, `bookdescription`, `bookpages`, `bookcollection`) VALUES
('11', 'PHP and MySQL', 'Appson', 'complete php and sql tutorial...', 780, 'Web Development');
=======
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE IF NOT EXISTS `faculty` (
  `fid` bigint(20) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `fdesignation` int(11) NOT NULL,
  `fqualification` varchar(255) NOT NULL,
  `femail` varchar(255) NOT NULL,
  `fphone` varchar(255) DEFAULT NULL,
  `finterest` varchar(255) DEFAULT NULL,
  `fstatus` int(11) NOT NULL,
<<<<<<< HEAD
  `fhome` bigint(20) DEFAULT NULL,
  `fresume` bigint(20) DEFAULT NULL,
  `fphoto` bigint(20) DEFAULT NULL,
=======
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

<<<<<<< HEAD
INSERT INTO `faculty` (`fid`, `fname`, `fdesignation`, `fqualification`, `femail`, `fphone`, `finterest`, `fstatus`, `fhome`, `fresume`, `fphoto`) VALUES
(31, 'Dr.K.K.Shukla', 1, 'M.Sc. PhD', 'kks@itbhu.ac.in', '+91 87 4641 5656', 'web development...', 1, 5, 9, 10);
=======
INSERT INTO `faculty` (`fid`, `fname`, `fdesignation`, `fqualification`, `femail`, `fphone`, `finterest`, `fstatus`) VALUES
(23, 'Dr.K.K.Shukla', 1, 'Msc', 'kks@itbhu.ac.in', '8798546214', 'web development', 1),
(25, 'Dr.Arun Agarwal', 1, 'Msc Phd', 'arun@itbhu.ac.in', '9874651145', 'networking', 2);
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--

CREATE TABLE IF NOT EXISTS `groups` (
  `gid` bigint(20) NOT NULL AUTO_INCREMENT,
  `gname` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `groups`
--


-- --------------------------------------------------------

--
<<<<<<< HEAD
-- Table structure for table `library`
--

CREATE TABLE IF NOT EXISTS `library` (
  `bookname` varchar(255) NOT NULL,
  `bookauthor` varchar(255) NOT NULL,
  `bookdescription` varchar(255) NOT NULL,
  `bookpages` int(11) DEFAULT NULL,
  `issuedto` bigint(20) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `bookcollection` varchar(255) NOT NULL,
  `isbn` varchar(255) NOT NULL,
  `bookid` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`isbn`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`bookname`, `bookauthor`, `bookdescription`, `bookpages`, `issuedto`, `status`, `bookcollection`, `isbn`, `bookid`) VALUES
('Core Java vol II', 'Martin', 'Complete java reference..', 450, 1, 2, 'Java', '24540ASADCS121', 1215);

-- --------------------------------------------------------

--
=======
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `lid` bigint(20) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `time` bigint(20) NOT NULL,
  PRIMARY KEY (`lid`)
<<<<<<< HEAD
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=136 ;
=======
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=101 ;
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`lid`, `message`, `address`, `time`) VALUES
(1, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307536404),
<<<<<<< HEAD
(2, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307628897),
(3, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307629209),
(4, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307629226),
(5, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307629885),
(6, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307630683),
(7, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307630786),
(8, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307630811),
(9, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307638211),
(10, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307640908),
(11, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307642284),
(12, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307642553),
(13, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307642686),
(14, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307642731),
(15, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307643010),
(16, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307643114),
(17, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307643152),
(18, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307644573),
(19, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307646200),
(20, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307650610),
(21, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307651548),
(22, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307652135),
(23, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307652278),
(24, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307652302),
(25, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307684577),
(26, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307688575),
(27, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307689024),
(28, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307689051),
(29, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307689331),
(30, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307689507),
(31, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307698747),
(32, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307700545),
(33, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307727266),
(34, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307728132),
(35, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307728282),
(36, 'USER LOGIN with uid=4 and username=vibhaj', '127.0.0.1', 1307736523),
(37, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307737470),
(38, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307773446),
(39, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307773536),
(40, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307780724),
(41, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307780913),
(42, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307781000),
(43, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307781330),
(44, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307783834),
(45, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307808667),
(46, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307808872),
(47, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307812240),
(48, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307812440),
(49, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307812461),
(50, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307823622),
(51, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307945177),
(52, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307945230),
(53, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307980906),
(54, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308000045),
(55, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308063948),
(56, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308067790),
(57, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308070628),
(58, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308079324),
(59, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308079379),
(60, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308080464),
(61, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308080491),
(62, 'USER LOGIN with uid=1 and username=admin', '127.0.0.1', 1308080523),
(63, 'USER LOGIN with uid=1 and username=admin', '127.0.0.1', 1308080566),
(64, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308080597),
(65, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308080621),
(66, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308080650),
(67, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308107248),
(68, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308107272),
(69, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308107279),
(70, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308109640),
(71, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308109671),
(72, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308109841),
(73, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308109951),
(74, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308110062),
(75, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308110142),
(76, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308202393),
(77, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308229992),
(78, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308327122),
(79, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308483429),
(80, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308484602),
(81, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308485286),
(82, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308485659),
(83, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308486661),
(84, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308486981),
(85, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308513527),
(86, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308513750),
(87, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308515454),
(88, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308516171),
(89, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308548628),
(90, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308568579),
(91, 'USER LOGIN with uid=14 and username=vibhaj', '127.0.0.1', 1308568777),
(92, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308568825),
(93, 'USER LOGIN with uid=14 and username=vibhaj', '127.0.0.1', 1308569096),
(94, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308572226),
(95, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308605478),
(96, 'USER LOGIN with uid=29 and username=vibhaj', '127.0.0.1', 1308647799),
(97, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308649228),
(98, 'USER LOGIN with uid=29 and username=vibhaj', '127.0.0.1', 1308649316),
(99, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308653733),
(100, 'USER LOGIN with uid=29 and username=vibhaj', '127.0.0.1', 1308653783),
(101, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308665538),
(102, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308723747),
(103, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308725737),
(104, 'USER LOGIN with uid=15 and username=shivang', '::1', 1308725757),
(105, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308725934),
(106, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308739123),
(107, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308749089),
(108, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308807081),
(109, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308892409),
(110, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308908088),
(111, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308975578),
(112, 'USER LOGIN with uid=15 and username=shivang', '::1', 1309153288),
(113, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309153320),
(114, 'USER LOGIN with uid=15 and username=shivang', '::1', 1309174789),
(115, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309174881),
(116, 'USER LOGIN with uid=15 and username=shivang', '::1', 1309174988),
(117, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309175053),
(118, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309238149),
(119, 'USER LOGIN with uid=15 and username=shivang', '::1', 1309238199),
(120, 'USER LOGIN with uid=15 and username=shivang', '::1', 1309239370),
(121, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309239484),
(122, 'USER LOGIN with uid=30 and username=shivang', '::1', 1309239763),
(123, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309239874),
(124, 'USER LOGIN with uid=31 and username=kks', '::1', 1309241045),
(125, 'USER LOGIN with uid=30 and username=shivang', '::1', 1309241057),
(126, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309241296),
(127, 'USER LOGIN with uid=30 and username=shivang', '::1', 1309241319),
(128, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309242892),
(129, 'USER LOGIN with uid=30 and username=shivang', '::1', 1309243081),
(130, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309243337),
(131, 'USER LOGIN with uid=30 and username=shivang', '::1', 1309243386),
(132, 'USER LOGIN with uid=31 and username=kks', '::1', 1309243464),
(133, 'USER LOGIN with uid=30 and username=shivang', '::1', 1309243477),
(134, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309248513),
(135, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1309259870);
=======
(76, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308202393),
(77, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308208919),
(78, 'USER LOGIN with uid=15 and username=shivang', '::1', 1308211322),
(79, 'USER LOGIN with uid=15 and username=', '::1', 1308211378),
(80, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308211469),
(81, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308211577),
(82, 'USER LOGIN with uid=15 and username=shivang', '::1', 1308211599),
(83, 'USER LOGIN with uid=15 and username=shivang', '::1', 1308211620),
(84, 'USER LOGIN with uid=15 and username=shivang', '::1', 1308211630),
(85, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308211723),
(86, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308216732),
(87, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308223855),
(88, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308226652),
(89, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308230007),
(90, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308230361),
(91, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308287178),
(92, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308313278),
(93, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308318135),
(94, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308374848),
(95, 'USER LOGIN with uid=22 and username=shivang', '::1', 1308394363),
(96, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308394392),
(97, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308460392),
(98, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308549596),
(99, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308549768),
(100, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308557823);
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `gid` bigint(20) NOT NULL,
  `member` bigint(20) NOT NULL,
  UNIQUE KEY `gid` (`gid`,`member`),
  KEY `gid_2` (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--


-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(255) NOT NULL,
  `newstime` int(11) NOT NULL,
<<<<<<< HEAD
  `newscontent` text,
  `newsauthor` varchar(255) NOT NULL,
  `newsexpiry` int(11) NOT NULL,
  `newsdescription` varchar(255) DEFAULT NULL,
  `newsattachment` bigint(20) DEFAULT NULL,
=======
  `newscontent` varchar(255) NOT NULL,
  `newsauthor` varchar(255) NOT NULL,
  `newsexpiry` int(11) NOT NULL,
  `newsattachment` varchar(255) DEFAULT NULL,
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
  PRIMARY KEY (`newsid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `news`
--


-- --------------------------------------------------------

--
-- Table structure for table `privileges`
--

CREATE TABLE IF NOT EXISTS `privileges` (
  `type` varchar(255) NOT NULL,
  `uid` bigint(20) NOT NULL,
  UNIQUE KEY `type` (`type`,`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `privileges`
--

INSERT INTO `privileges` (`type`, `uid`) VALUES
('ENHANCSE_ADMIN', 1);

-- --------------------------------------------------------

--
-- Table structure for table `remarks`
--

CREATE TABLE IF NOT EXISTS `remarks` (
  `rkid` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) NOT NULL,
  `comment` text NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`rkid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `remarks`
--


-- --------------------------------------------------------

--
-- Table structure for table `resources`
--

CREATE TABLE IF NOT EXISTS `resources` (
  `rsrcid` bigint(20) NOT NULL AUTO_INCREMENT,
  `rsrcname` varchar(255) NOT NULL,
  `resource` text NOT NULL,
  PRIMARY KEY (`rsrcid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT AUTO_INCREMENT=3 ;

--
-- Dumping data for table `resources`
--

INSERT INTO `resources` (`rsrcid`, `rsrcname`, `resource`) VALUES
(2, 'tpl-add-test', '<div id="test">{{html content.name}}</div>');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `sessionid` char(32) NOT NULL,
  `uid` bigint(20) NOT NULL,
  `time` bigint(20) NOT NULL,
  `expiry` bigint(20) NOT NULL,
  PRIMARY KEY (`sessionid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sessionid`, `uid`, `time`, `expiry`) VALUES
<<<<<<< HEAD
('c9vfunapnw8bphn62hk09fbyui32j4ww', 1, 1309259870, 1309346270),
('mze2wnut42y949ejvm4r1qi510pj2tjh', 1, 1309248513, 1309334913);

-- --------------------------------------------------------

--
-- Table structure for table `spaces`
--

CREATE TABLE IF NOT EXISTS `spaces` (
  `spid` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner` bigint(20) NOT NULL,
  `spvfpath` varchar(255) NOT NULL,
  `spvfname` varchar(255) NOT NULL,
  `stgid` bigint(20) NOT NULL,
  PRIMARY KEY (`spid`),
  UNIQUE KEY `spacename_vpath_vname` (`owner`,`spvfpath`,`spvfname`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `spaces`
--

INSERT INTO `spaces` (`spid`, `owner`, `spvfpath`, `spvfname`, `stgid`) VALUES
(3, 29, '/resume/', 'Vibhaj Rajan.pdf', 3),
(4, 29, '/photo/', 'Vibhaj Rajan.png', 4),
(7, 30, '', 'B.Tech 1st Year.pdf', 7),
(8, 30, '', 's.jpg', 8),
(9, 31, '/resume/', 'Dr.K.K.Shukla.pdf', 9),
(10, 31, '/photo/', 'Dr.K.K.Shukla.png', 10),
(11, 1, '/ebook/', 'B.Tech 1st Year.pdf', 11);
=======
('xpm14izxwems0b5rghlyro4zt79ylew6', 1, 1308557823, 1308644223);
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `storages`
--

CREATE TABLE IF NOT EXISTS `storages` (
<<<<<<< HEAD
  `stgid` bigint(20) NOT NULL AUTO_INCREMENT,
  `stgname` varchar(255) NOT NULL,
  `filepath` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `mime` varchar(255) NOT NULL,
  `size` bigint(20) NOT NULL,
  `owner` bigint(20) NOT NULL,
  `access` int(11) NOT NULL,
  `protection` varchar(255) NOT NULL,
  `ctime` bigint(20) NOT NULL,
  `atime` bigint(20) NOT NULL,
  `mtime` bigint(20) NOT NULL,
  `links` bigint(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`stgid`),
  UNIQUE KEY `filepath_filename` (`filepath`,`filename`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;
=======
  `stgid` varchar(255) NOT NULL,
  `stgname` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `mime` varchar(255) NOT NULL,
  `owner` bigint(20) NOT NULL,
  `access` int(11) NOT NULL,
  `groupid` bigint(20) NOT NULL,
  `ctime` bigint(20) NOT NULL,
  `atime` bigint(20) NOT NULL,
  `mtime` bigint(20) NOT NULL,
  `dirid` varchar(255) DEFAULT NULL,
  UNIQUE KEY `stgid` (`stgid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

--
-- Dumping data for table `storages`
--

<<<<<<< HEAD
INSERT INTO `storages` (`stgid`, `stgname`, `filepath`, `filename`, `mime`, `size`, `owner`, `access`, `protection`, `ctime`, `atime`, `mtime`, `links`) VALUES
(3, 'Resume-Vibhaj Rajan', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse\\storage\\resume\\', 'resume-vibhaj.pdf', 'application/pdf', 154532, 29, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1308641630, 1309155924, 1308669106, 1),
(4, 'Photo-Vibhaj Rajan', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse\\storage\\photo\\', 'photo-vibhaj.png', 'image/png', 121022, 29, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1308641630, 1309248548, 1308725563, 1),
(7, 'Resume-Shivang Mittal', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse/storage/resume/', 'Resume-shivang.pdf', 'application/pdf', 153972, 30, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309239559, 1309243104, 1309243095, 1),
(8, 'Photo-Shivang Mittal', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse/storage/photo/', 'Photo-shivang.png', 'image/gif', 75493, 30, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309239559, 1309248646, 1309243268, 1),
(9, 'Resume-Dr.K.K.Shukla', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse/storage/resume/', 'Resume-kks.pdf', 'application/pdf', 0, 31, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309240448, 1309240448, 1309240448, 1),
(10, 'Photo-Dr.K.K.Shukla', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse/storage/photo/', 'Photo-kks.png', 'image/png', 0, 31, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309240448, 1309248654, 1309240448, 1),
(11, 'E.Book-PHP and MySQL', 'C:\\Users\\Shivang Mittal\\webroot\\iitbhucse/storage/elibrary/', 'E.book-PHP and MySQL.pdf', 'application/pdf', 153972, 1, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309259919, 1309259940, 1309259940, 1);
=======
INSERT INTO `storages` (`stgid`, `stgname`, `filename`, `mime`, `owner`, `access`, `groupid`, `ctime`, `atime`, `mtime`, `dirid`) VALUES
('c5v9bw1khuxtlwpqgn96wbqdfsv08sml', 'Vibhaj Rajan', '', 'application/pdf', 14, 4, 0, 1307787896, 1307787896, 1307787896, ''),
('dyz8b3yizlo6vuhp6suxjuz751pumtdt', 'Shivang Mittal', '', 'application/pdf', 15, 4, 0, 1307820268, 1307820268, 1307820268, ''),
('hlreu1r8eq86s8181u0ehwr7gepadvl3', 'Syed Wali Hamza', '', 'application/pdf', 24, 4, 0, 1308556004, 1308556004, 1308556004, ''),
('xfxkz5qpko4oi8dynp43hwla535h5usk', 'Shivang Mittal', '', 'application/pdf', 22, 4, 0, 1308394156, 1308394156, 1308394156, '');
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE IF NOT EXISTS `students` (
  `stuid` bigint(20) NOT NULL,
  `stname` varchar(255) NOT NULL,
  `strollno` varchar(255) NOT NULL,
  `stemail` varchar(255) NOT NULL,
  `stcourse` int(11) NOT NULL,
  `styear` int(11) NOT NULL,
  `stinterest` varchar(255) DEFAULT NULL,
  `stcgpa` decimal(5,2) DEFAULT NULL,
  `stinternship` varchar(255) DEFAULT NULL,
  `stplacement` varchar(255) DEFAULT NULL,
  `ststatus` int(11) NOT NULL,
<<<<<<< HEAD
  `stresume` bigint(20) NOT NULL,
  `stphoto` bigint(20) NOT NULL,
  `sthome` bigint(20) DEFAULT NULL,
  `stphone` varchar(255) DEFAULT NULL,
=======
  `stresume` varchar(32) DEFAULT NULL,
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

<<<<<<< HEAD
INSERT INTO `students` (`stuid`, `stname`, `strollno`, `stemail`, `stcourse`, `styear`, `stinterest`, `stcgpa`, `stinternship`, `stplacement`, `ststatus`, `stresume`, `stphoto`, `sthome`, `stphone`) VALUES
(29, 'Vibhaj Rajan', '08400EN008', 'vibhaj.rajan.cse08@itbhu.ac.in', 2, 2008, 'Web Development', '8.23', '', '', 1, 3, 4, NULL, NULL),
(30, 'Shivang Mittal', '10100EN009', 'shivang.mittal.cse10@itbhu.ac.in', 1, 2010, 'Web Development...', '8.64', NULL, NULL, 1, 7, 8, 4, '+91 78 6048 5449');
=======
INSERT INTO `students` (`stuid`, `stname`, `strollno`, `stemail`, `stcourse`, `styear`, `stinterest`, `stcgpa`, `stinternship`, `stplacement`, `ststatus`, `stresume`) VALUES
(14, 'Vibhaj Rajan', '08400EN008', 'vibhaj.rajan.cse08@itbhu.ac.in', 2, 2008, NULL, '0.00', '', '', 1, 'c5v9bw1khuxtlwpqgn96wbqdfsv08sml'),
(22, 'Shivang Mittal', '10100EN009', 'shivang.mittal.cse10@itbhu.ac.in', 1, 2010, '', '0.00', '', '', 1, 'xfxkz5qpko4oi8dynp43hwla535h5usk');
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
<<<<<<< HEAD
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;
=======
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `password`, `email`) VALUES
(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com'),
<<<<<<< HEAD
(29, 'vibhaj', 'd7d069aee1cc1124e84d9a57632d20c9', 'vibhaj.rajan.cse08@itbhu.ac.in'),
(30, 'shivang', 'e9e0442482a4da40f9b4ce32dd979d6c', 'shivang.mittal.cse10@itbhu.ac.in'),
(31, 'kks', '75b5f7cc67cc2fbc14a2342c08ec472d', 'kks@itbhu.ac.in');
=======
(14, 'vibhaj', '69ceec29f74496b2bfb88b2533a0642b', 'vibhaj.rajan.cse08@itbhu.ac.in'),
(22, 'shivang', 'e9e0442482a4da40f9b4ce32dd979d6c', 'shivang.mittal.cse10@itbhu.ac.in'),
(23, 'kks', 'f63a72dab96e54d5c54c9c3f2ac25315', 'kks@itbhu.ac.in'),
(25, 'arun', '8f46f680105f57822b75e658732831a1', 'arun@itbhu.ac.in');
>>>>>>> 8eb99ea2918041bd30d1a1fc6c21b64e0648a44e

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
