<<<<<<< .merge_file_a06964
-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 20, 2011 at 04:37 PM
-- Server version: 5.1.41
-- PHP Version: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

=======
# --------------------------------------------------------
# Host:                         localhost
# Server version:               5.5.8
# Server OS:                    Win32
# HeidiSQL version:             6.0.0.3603
# Date/time:                    2011-06-21 21:07:46
# --------------------------------------------------------
>>>>>>> .merge_file_a07720

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

# Dumping structure for table iitbhucse.contents
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.contents: ~2 rows (approximately)
/*!40000 ALTER TABLE `contents` DISABLE KEYS */;
INSERT INTO `contents` (`cntid`, `cntname`, `cntowner`, `cntstype`, `cntstyle`, `cntttype`, `cnttpl`, `cntdtype`, `cntdata`) VALUES
	(1, 'cnt-test', 1, 1, 'div#test {\r\n color: darkred;\r\n font-size: large;\r\n}', 1, '<div id="test">\r\n <p>Hello ${content.name}</p><p>Welcome to ${content.dept}</p>\r\n</div>\r\n', 1, '{\r\n "name":"Vibhaj Rajan",\r\n "dept":"Department of Computer Engineering"\r\n}'),
	(3, 'cnt-test-2', 1, 1, '', 2, 'tpl-add-test', 1, '{\r\n "name":"<h1>Vibhaj<\\/h1>"\r\n}');
/*!40000 ALTER TABLE `contents` ENABLE KEYS */;


# Dumping structure for table iitbhucse.courses
CREATE TABLE IF NOT EXISTS `courses` (
  `crsid` varchar(255) NOT NULL,
  `crsname` varchar(255) NOT NULL,
  `crsdescription` varchar(255) NOT NULL,
  `crspart` int(11) NOT NULL,
  PRIMARY KEY (`crsid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

<<<<<<< .merge_file_a06964
--
-- Dumping data for table `courses`
--

<<<<<<< HEAD
=======
INSERT INTO `courses` (`crsid`, `crsname`, `crsdescription`, `crspart`) VALUES
('CS 13', 'Data Structures', 'Various Data Structures...', 2),
('CS 34', 'Networking', 'Networking Tools', 3);
>>>>>>> master
=======
# Dumping data for table iitbhucse.courses: ~2 rows (approximately)
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` (`crsid`, `crsname`, `crsdescription`, `crspart`) VALUES
	('CS 13', 'Data Structures', 'Various Data Structures...', 2),
	('CS 34', 'Networking', 'Networking Tools', 3);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
>>>>>>> .merge_file_a07720


# Dumping structure for table iitbhucse.elibrary
CREATE TABLE IF NOT EXISTS `elibrary` (
  `bookid` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `bookauthor` varchar(255) NOT NULL,
  `bookdescription` varchar(255) DEFAULT NULL,
  `bookpages` int(11) NOT NULL,
  `bookcollection` varchar(255) NOT NULL,
  PRIMARY KEY (`bookid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.elibrary: 0 rows
/*!40000 ALTER TABLE `elibrary` DISABLE KEYS */;
/*!40000 ALTER TABLE `elibrary` ENABLE KEYS */;


# Dumping structure for table iitbhucse.faculty
CREATE TABLE IF NOT EXISTS `faculty` (
  `fid` bigint(20) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `fdesignation` int(11) NOT NULL,
  `fqualification` varchar(255) NOT NULL,
  `femail` varchar(255) NOT NULL,
  `fphone` varchar(255) DEFAULT NULL,
  `finterest` varchar(255) DEFAULT NULL,
  `fstatus` int(11) NOT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

<<<<<<< .merge_file_a06964
--
-- Dumping data for table `faculty`
--

<<<<<<< HEAD
=======
INSERT INTO `faculty` (`fid`, `fname`, `fdesignation`, `fqualification`, `femail`, `fphone`, `finterest`, `fstatus`) VALUES
(23, 'Dr.K.K.Shukla', 1, 'Msc', 'kks@itbhu.ac.in', '8798546214', 'web development', 1),
(25, 'Dr.Arun Agarwal', 1, 'Msc Phd', 'arun@itbhu.ac.in', '9874651145', 'networking', 2);
>>>>>>> master

-- --------------------------------------------------------
=======
# Dumping data for table iitbhucse.faculty: 2 rows
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
INSERT INTO `faculty` (`fid`, `fname`, `fdesignation`, `fqualification`, `femail`, `fphone`, `finterest`, `fstatus`) VALUES
	(23, 'Dr.K.K.Shukla', 1, 'Msc CS', 'kks@itbhu.ac.in', '8798546214', 'web development', 1),
	(25, 'Dr.Arun Agarwal', 1, 'Msc Phd', 'arun@itbhu.ac.in', '9874651145', 'networking', 2);
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;
>>>>>>> .merge_file_a07720


# Dumping structure for table iitbhucse.groups
CREATE TABLE IF NOT EXISTS `groups` (
  `gid` bigint(20) NOT NULL AUTO_INCREMENT,
  `gname` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.groups: ~0 rows (approximately)
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;


# Dumping structure for table iitbhucse.logs
CREATE TABLE IF NOT EXISTS `logs` (
  `lid` bigint(20) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `time` bigint(20) NOT NULL,
  PRIMARY KEY (`lid`)
<<<<<<< .merge_file_a06964
<<<<<<< HEAD
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=98 ;
=======
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=101 ;
>>>>>>> master

--
-- Dumping data for table `logs`
--
=======
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;
>>>>>>> .merge_file_a07720

# Dumping data for table iitbhucse.logs: ~95 rows (approximately)
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` (`lid`, `message`, `address`, `time`) VALUES
<<<<<<< .merge_file_a06964
(1, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307536404),
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
<<<<<<< HEAD
(97, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308460392);
=======
(97, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308460392),
(98, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308549596),
(99, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308549768),
(100, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308557823);
>>>>>>> master

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

=======
	(1, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307536404),
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
	(101, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308665538);
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;


# Dumping structure for table iitbhucse.members
>>>>>>> .merge_file_a07720
CREATE TABLE IF NOT EXISTS `members` (
  `gid` bigint(20) NOT NULL,
  `member` bigint(20) NOT NULL,
  UNIQUE KEY `gid` (`gid`,`member`),
  KEY `gid_2` (`gid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.members: ~0 rows (approximately)
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
/*!40000 ALTER TABLE `members` ENABLE KEYS */;


# Dumping structure for table iitbhucse.news
CREATE TABLE IF NOT EXISTS `news` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(255) NOT NULL,
  `newstime` int(11) NOT NULL,
  `newscontent` varchar(255) NOT NULL,
  `newsauthor` varchar(255) NOT NULL,
  `newsexpiry` int(11) NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.news: 0 rows
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;


# Dumping structure for table iitbhucse.privileges
CREATE TABLE IF NOT EXISTS `privileges` (
  `type` varchar(255) NOT NULL,
  `uid` bigint(20) NOT NULL,
  UNIQUE KEY `type` (`type`,`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.privileges: ~1 rows (approximately)
/*!40000 ALTER TABLE `privileges` DISABLE KEYS */;
INSERT INTO `privileges` (`type`, `uid`) VALUES
	('ENHANCSE_ADMIN', 1);
/*!40000 ALTER TABLE `privileges` ENABLE KEYS */;


# Dumping structure for table iitbhucse.remarks
CREATE TABLE IF NOT EXISTS `remarks` (
  `rkid` bigint(20) NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) NOT NULL,
  `comment` text NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`rkid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.remarks: ~0 rows (approximately)
/*!40000 ALTER TABLE `remarks` DISABLE KEYS */;
/*!40000 ALTER TABLE `remarks` ENABLE KEYS */;


# Dumping structure for table iitbhucse.resources
CREATE TABLE IF NOT EXISTS `resources` (
  `rsrcid` bigint(20) NOT NULL AUTO_INCREMENT,
  `rsrcname` varchar(255) NOT NULL,
  `resource` text NOT NULL,
  PRIMARY KEY (`rsrcid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

# Dumping data for table iitbhucse.resources: ~1 rows (approximately)
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
INSERT INTO `resources` (`rsrcid`, `rsrcname`, `resource`) VALUES
	(2, 'tpl-add-test', '<div id="test">{{html content.name}}</div>');
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;


# Dumping structure for table iitbhucse.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `sessionid` char(32) NOT NULL,
  `uid` bigint(20) NOT NULL,
  `time` bigint(20) NOT NULL,
  `expiry` bigint(20) NOT NULL,
  PRIMARY KEY (`sessionid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.sessions: ~2 rows (approximately)
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`sessionid`, `uid`, `time`, `expiry`) VALUES
<<<<<<< .merge_file_a06964
<<<<<<< HEAD
('gl3fhvmhljqkpeh6scfg5n0g6e60nujs', 1, 1308394392, 1308480792),
('w9xnytf300hnusb8cdv2lyyid3paitej', 1, 1308460391, 1308546791);
=======
('xpm14izxwems0b5rghlyro4zt79ylew6', 1, 1308557823, 1308644223);
>>>>>>> master

-- --------------------------------------------------------
=======
	('ehj23jzcg0u99h9pcfwg6zhkhtcqtvjj', 29, 1308653783, 1308740183),
	('khpbphzn8hirnx7ah0si71i7ni624d1j', 1, 1308665538, 1308751938);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
>>>>>>> .merge_file_a07720


# Dumping structure for table iitbhucse.spaces
CREATE TABLE IF NOT EXISTS `spaces` (
  `spid` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner` bigint(20) NOT NULL,
  `spvfpath` varchar(255) NOT NULL,
  `spvfname` varchar(255) NOT NULL,
  `stgid` bigint(20) NOT NULL,
  PRIMARY KEY (`spid`),
  UNIQUE KEY `spacename_vpath_vname` (`owner`,`spvfpath`,`spvfname`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.spaces: ~0 rows (approximately)
/*!40000 ALTER TABLE `spaces` DISABLE KEYS */;
INSERT INTO `spaces` (`spid`, `owner`, `spvfpath`, `spvfname`, `stgid`) VALUES
	(3, 29, '/resume/', 'Vibhaj Rajan.pdf', 3),
	(4, 29, '/photo/', 'Vibhaj Rajan.png', 4);
/*!40000 ALTER TABLE `spaces` ENABLE KEYS */;


# Dumping structure for table iitbhucse.storages
CREATE TABLE IF NOT EXISTS `storages` (
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

<<<<<<< .merge_file_a06964
--
-- Dumping data for table `storages`
--

INSERT INTO `storages` (`stgid`, `stgname`, `filename`, `mime`, `owner`, `access`, `groupid`, `ctime`, `atime`, `mtime`, `dirid`) VALUES
('c5v9bw1khuxtlwpqgn96wbqdfsv08sml', 'Vibhaj Rajan', '', 'application/pdf', 14, 4, 0, 1307787896, 1307787896, 1307787896, ''),
('dyz8b3yizlo6vuhp6suxjuz751pumtdt', 'Shivang Mittal', '', 'application/pdf', 15, 4, 0, 1307820268, 1307820268, 1307820268, ''),
<<<<<<< HEAD
=======
('hlreu1r8eq86s8181u0ehwr7gepadvl3', 'Syed Wali Hamza', '', 'application/pdf', 24, 4, 0, 1308556004, 1308556004, 1308556004, ''),
>>>>>>> master
('xfxkz5qpko4oi8dynp43hwla535h5usk', 'Shivang Mittal', '', 'application/pdf', 22, 4, 0, 1308394156, 1308394156, 1308394156, '');

-- --------------------------------------------------------
=======
# Dumping data for table iitbhucse.storages: ~0 rows (approximately)
/*!40000 ALTER TABLE `storages` DISABLE KEYS */;
INSERT INTO `storages` (`stgid`, `stgname`, `filepath`, `filename`, `mime`, `size`, `owner`, `access`, `protection`, `ctime`, `atime`, `mtime`, `links`) VALUES
	(3, 'Resume-Vibhaj Rajan', 'D:\\Program Files\\Apache Software Foundation\\Apache2.2\\htdocs\\public\\iitbhucse/storage/resume/', 'Vibhaj Rajan.pdf', 'application/pdf', 154532, 29, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1308641630, 1308669106, 1308669106, 1),
	(4, 'Photo-Vibhaj Rajan', 'D:\\Program Files\\Apache Software Foundation\\Apache2.2\\htdocs\\public\\iitbhucse/storage/photo/', 'Vibhaj Rajan.png', 'image/png', 121022, 29, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1308641630, 1308669350, 1308669350, 1);
/*!40000 ALTER TABLE `storages` ENABLE KEYS */;
>>>>>>> .merge_file_a07720


# Dumping structure for table iitbhucse.students
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
  `stresume` bigint(20) NOT NULL,
  `stphoto` bigint(20) NOT NULL,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.students: ~2 rows (approximately)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`stuid`, `stname`, `strollno`, `stemail`, `stcourse`, `styear`, `stinterest`, `stcgpa`, `stinternship`, `stplacement`, `ststatus`, `stresume`, `stphoto`) VALUES
	(15, 'Shivang Mittal', '10100EN010', 'shivang.mittal.cse10@itbhu.ac.in', 1, 2010, NULL, NULL, NULL, NULL, 1, 2, 0),
	(29, 'Vibhaj Rajan', '08400EN008', 'vibhaj.rajan.cse08@itbhu.ac.in', 2, 2008, 'Web Development', 8.23, '', '', 1, 3, 4);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;


# Dumping structure for table iitbhucse.users
CREATE TABLE IF NOT EXISTS `users` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
<<<<<<< .merge_file_a06964
<<<<<<< HEAD
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;
=======
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;
>>>>>>> master

--
-- Dumping data for table `users`
--
=======
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
>>>>>>> .merge_file_a07720

# Dumping data for table iitbhucse.users: ~5 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`uid`, `username`, `password`, `email`) VALUES
<<<<<<< .merge_file_a06964
(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com'),
(14, 'vibhaj', '69ceec29f74496b2bfb88b2533a0642b', 'vibhaj.rajan.cse08@itbhu.ac.in'),
<<<<<<< HEAD
(22, 'shivang', 'e9e0442482a4da40f9b4ce32dd979d6c', 'shivang.mittal.cse10@itbhu.ac.in');
=======
(22, 'shivang', 'e9e0442482a4da40f9b4ce32dd979d6c', 'shivang.mittal.cse10@itbhu.ac.in'),
(23, 'kks', 'f63a72dab96e54d5c54c9c3f2ac25315', 'kks@itbhu.ac.in'),
(25, 'arun', '8f46f680105f57822b75e658732831a1', 'arun@itbhu.ac.in');
>>>>>>> master

=======
	(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com'),
	(15, 'shivang', 'f745a8f4ca0c5e3d0502e588ed6bb0d2', 'shivang.mittal.cse10@itbhu.ac.in'),
	(23, 'kks', 'f63a72dab96e54d5c54c9c3f2ac25315', 'kks@itbhu.ac.in'),
	(25, 'arun', '8f46f680105f57822b75e658732831a1', 'arun@itbhu.ac.in'),
	(29, 'vibhaj', 'd7d069aee1cc1124e84d9a57632d20c9', 'vibhaj.rajan.cse08@itbhu.ac.in');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
>>>>>>> .merge_file_a07720
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
