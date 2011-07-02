-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 30, 2011 at 05:40 PM
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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `contents`
--

INSERT INTO `contents` (`cntid`, `cntname`, `cntowner`, `cntstype`, `cntstyle`, `cntttype`, `cnttpl`, `cntdtype`, `cntdata`) VALUES
(1, 'cnt-test', 1, 1, 'div#test {\r\n color: darkred;\r\n font-size: large;\r\n}', 1, '<div id="test">\r\n <p>Hello ${content.name}</p><p>Welcome to ${content.dept}</p>\r\n</div>\r\n', 1, '{\r\n "name":"Vibhaj Rajan",\r\n "dept":"Department of Computer Engineering"\r\n}'),
(3, 'cnt-test-2', 1, 1, '', 2, 'tpl-add-test', 1, '{\r\n "name":"<h1>Vibhaj<\\/h1>"\r\n}'),
(4, 'Content-kks', 31, 1, '', 1, '<h2>${content.message}</h2>', 1, '{"message":"Welcome to Dr.K.K.Shukla''s Home Page"}'),
(5, 'Content-vibhaj', 32, 1, '.italic {
 font-style: italic;
 }', 1, '<h2 class="italic">${content.message}</h2>', 1, '{
 "message":"Welcome to Vibhaj Rajan\'s Home Page"
}
'),
(6, 'Content-Web Development', 1, 1, '', 1, '<h2>${content.message}</h2>', 1, '{"message":"Welcome to the Web Development''s Course Page"}'),
(8, 'Content-shivang', 34, 1, '', 1, '<h2>${content.message}</h2>', 1, '{"message":"Welcome to Shivang Mittal''s Home Page"}');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `crsid` varchar(255) NOT NULL,
  `crsname` varchar(255) NOT NULL,
  `crsdescription` varchar(255) NOT NULL,
  `crspart` int(11) NOT NULL,
  `crshome` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`crsid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`crsid`, `crsname`, `crsdescription`, `crspart`, `crshome`) VALUES
('CS 13', 'Web Development', 'Complete web development package..', 2, 6);

-- --------------------------------------------------------

--
-- Table structure for table `elibrary`
--

CREATE TABLE IF NOT EXISTS `elibrary` (
  `bookid` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `bookauthor` varchar(255) NOT NULL,
  `bookdescription` varchar(255) DEFAULT NULL,
  `bookpages` bigint(20) DEFAULT NULL,
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
  `fhome` bigint(20) DEFAULT NULL,
  `fresume` bigint(20) DEFAULT NULL,
  `fphoto` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`fid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`fid`, `fname`, `fdesignation`, `fqualification`, `femail`, `fphone`, `finterest`, `fstatus`, `fhome`, `fresume`, `fphoto`) VALUES
(31, 'Dr.K.K.Shukla', 1, 'M.Sc. PhD', 'kks@itbhu.ac.in', '+91 87 4641 5656', 'web development...', 1, 4, 9, 10);

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
-- Table structure for table `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `lid` bigint(20) NOT NULL AUTO_INCREMENT,
  `message` text NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `time` bigint(20) NOT NULL,
  PRIMARY KEY (`lid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ;

--
-- Dumping data for table `logs`
--

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
  `newscontent` text,
  `newsauthor` varchar(255) NOT NULL,
  `newsexpiry` int(11) NOT NULL,
  `newsdescription` varchar(255) DEFAULT NULL,
  `newsattachment` bigint(20) DEFAULT NULL,
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
('5n0g6e60nujsze9fak509hoqhm3lgafu', 1, 1309419341, 1309505741),
('le6cjsi8zgbdndt8g6nxavqpcxa6l3l2', 1, 1309418678, 1309505078),
('wq908y4utmlwce1c9kh5bf4jwz3tcycd', 1, 1309430205, 1309516605),
('xwkl42t71n3mtnevzif1qfpy48x9zgj5', 1, 1309418656, 1309505056);

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `spaces`
--

INSERT INTO `spaces` (`spid`, `owner`, `spvfpath`, `spvfname`, `stgid`) VALUES
(3, 32, '/resume/', 'Vibhaj Rajan.pdf', 3),
(4, 32, '/photo/', 'Vibhaj Rajan.png', 4),
(9, 31, '/resume/', 'Dr.K.K.Shukla.pdf', 9),
(10, 31, '/photo/', 'Dr.K.K.Shukla.png', 10),
(15, 34, '/resume/', 'Shivang Mittal.pdf', 16),
(16, 34, '/photo/', 's.jpg', 17);

-- --------------------------------------------------------

--
-- Table structure for table `storages`
--

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

--
-- Dumping data for table `storages`
--

INSERT INTO `storages` (`stgid`, `stgname`, `filepath`, `filename`, `mime`, `size`, `owner`, `access`, `protection`, `ctime`, `atime`, `mtime`, `links`) VALUES
(3, 'Resume-Vibhaj Rajan', 'storage/resume/', 'resume-vibhaj.pdf', 'application/pdf', 154532, 32, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1308641630, 1309422443, 1308669106, 1),
(4, 'Photo-Vibhaj Rajan', 'storage/photo/', 'photo-vibhaj.png', 'image/png', 121022, 32, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1308641630, 1309431269, 1308725563, 1),
(9, 'Resume-Dr.K.K.Shukla', 'storage/resume/', 'Resume-kks.pdf', 'application/pdf', 0, 31, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309240448, 1309240448, 1309240448, 1),
(10, 'Photo-Dr.K.K.Shukla', 'storage/photo/', 'Photo-kks.png', 'image/png', 0, 31, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309240448, 1309423003, 1309240448, 1),
(16, 'Resume-Shivang Mittal', 'storage/resume/', 'Resume-shivang.pdf', 'application/pdf', 0, 34, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309431113, 1309431113, 1309431113, 1),
(17, 'Photo-Shivang Mittal', 'storage/photo/', 'Photo-shivang.png', 'image/gif', 75493, 34, 2, 'd41d8cd98f00b204e9800998ecf8427e', 1309431113, 1309431287, 1309431205, 1);

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
  `stresume` bigint(20) NOT NULL,
  `stphoto` bigint(20) NOT NULL,
  `sthome` bigint(20) DEFAULT NULL,
  `stphone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`stuid`, `stname`, `strollno`, `stemail`, `stcourse`, `styear`, `stinterest`, `stcgpa`, `stinternship`, `stplacement`, `ststatus`, `stresume`, `stphoto`, `sthome`, `stphone`) VALUES
(32, 'Vibhaj Rajan', '08400EN008', 'vibhaj.rajan.cse08@itbhu.ac.in', 2, 2008, 'Web Development', '8.23', '', '', 1, 3, 4, 5, '+91 92 3531 2784'),
(34, 'Shivang Mittal', '10100EN009', 'shivang.mittal.cse10@itbhu.ac.in', 1, 2010, NULL, NULL, NULL, NULL, 1, 15, 16, 8, '+91 78 6048 5449');

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `password`, `email`) VALUES
(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com'),
(31, 'kks', '75b5f7cc67cc2fbc14a2342c08ec472d', 'kks@itbhu.ac.in'),
(32, 'vibhaj', 'd7d069aee1cc1124e84d9a57632d20c9', 'vibhaj.rajan.cse08@itbhu.ac.in'),
(34, 'shivang', 'a8431e9f6db7b4b14acaa1f5777df9f3', 'shivang.mittal.cse10@itbhu.ac.in');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
