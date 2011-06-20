-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 19, 2011 at 10:46 AM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `contents`
--

INSERT INTO `contents` (`cntid`, `cntname`, `cntowner`, `cntstype`, `cntstyle`, `cntttype`, `cnttpl`, `cntdtype`, `cntdata`) VALUES
(1, 'cnt-test', 1, 1, 'div#test {\r\n color: darkred;\r\n font-size: large;\r\n}', 1, '<div id="test">\r\n <p>Hello ${content.name}</p><p>Welcome to ${content.dept}</p>\r\n</div>\r\n', 1, '{\r\n "name":"Vibhaj Rajan",\r\n "dept":"Department of Computer Engineering"\r\n}'),
(3, 'cnt-test-2', 1, 1, '', 2, 'tpl-add-test', 1, '{\r\n "name":"<h1>Vibhaj<\\/h1>"\r\n}');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `crsid` varchar(255) NOT NULL,
  `crsname` varchar(255) NOT NULL,
  `crsdescription` varchar(255) NOT NULL,
  `crspart` int(11) NOT NULL,
  PRIMARY KEY (`crsid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--


-- --------------------------------------------------------

--
-- Table structure for table `elibrary`
--

CREATE TABLE IF NOT EXISTS `elibrary` (
  `bookid` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `bookauthor` varchar(255) NOT NULL,
  `bookdescription` varchar(255) DEFAULT NULL,
  `bookpages` int(11) NOT NULL,
  `bookcollection` varchar(255) NOT NULL,
  PRIMARY KEY (`bookid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `elibrary`
--


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
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--


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
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `lid` bigint(20) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `time` bigint(20) NOT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=98 ;

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`lid`, `message`, `address`, `time`) VALUES
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
(97, 'USER LOGIN with uid=1 and username=enhancse', '::1', 1308460392);

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
  `newscontent` varchar(255) NOT NULL,
  `newsauthor` varchar(255) NOT NULL,
  `newsexpiry` int(11) NOT NULL,
  `newsattachment` varchar(255) DEFAULT NULL,
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
('gl3fhvmhljqkpeh6scfg5n0g6e60nujs', 1, 1308394392, 1308480792),
('w9xnytf300hnusb8cdv2lyyid3paitej', 1, 1308460391, 1308546791);

-- --------------------------------------------------------

--
-- Table structure for table `storages`
--

CREATE TABLE IF NOT EXISTS `storages` (
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

--
-- Dumping data for table `storages`
--

INSERT INTO `storages` (`stgid`, `stgname`, `filename`, `mime`, `owner`, `access`, `groupid`, `ctime`, `atime`, `mtime`, `dirid`) VALUES
('c5v9bw1khuxtlwpqgn96wbqdfsv08sml', 'Vibhaj Rajan', '', 'application/pdf', 14, 4, 0, 1307787896, 1307787896, 1307787896, ''),
('dyz8b3yizlo6vuhp6suxjuz751pumtdt', 'Shivang Mittal', '', 'application/pdf', 15, 4, 0, 1307820268, 1307820268, 1307820268, ''),
('xfxkz5qpko4oi8dynp43hwla535h5usk', 'Shivang Mittal', '', 'application/pdf', 22, 4, 0, 1308394156, 1308394156, 1308394156, '');

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
  `stresume` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`stuid`, `stname`, `strollno`, `stemail`, `stcourse`, `styear`, `stinterest`, `stcgpa`, `stinternship`, `stplacement`, `ststatus`, `stresume`) VALUES
(14, 'Vibhaj Rajan', '08400EN008', 'vibhaj.rajan.cse08@itbhu.ac.in', 2, 2008, NULL, '0.00', '', '', 1, 'c5v9bw1khuxtlwpqgn96wbqdfsv08sml'),
(22, 'Shivang Mittal', '10100EN009', 'shivang.mittal.cse10@itbhu.ac.in', 1, 2010, '', '0.00', '', '', 1, 'xfxkz5qpko4oi8dynp43hwla535h5usk');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `password`, `email`) VALUES
(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com'),
(14, 'vibhaj', '69ceec29f74496b2bfb88b2533a0642b', 'vibhaj.rajan.cse08@itbhu.ac.in'),
(22, 'shivang', 'e9e0442482a4da40f9b4ce32dd979d6c', 'shivang.mittal.cse10@itbhu.ac.in');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
