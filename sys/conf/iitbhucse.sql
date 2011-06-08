-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 08, 2011 at 05:50 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.4

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `iitbhucse`
--

-- --------------------------------------------------------

--
-- Table structure for table `collations`
--

CREATE TABLE IF NOT EXISTS `collations` (
  `pgid` bigint(20) NOT NULL,
  `key` varchar(255) NOT NULL,
  `cntid` bigint(20) NOT NULL,
  PRIMARY KEY (`pgid`,`key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `collations`
--


-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE IF NOT EXISTS `contents` (
  `cntid` bigint(20) NOT NULL AUTO_INCREMENT,
  `cnttype` int(11) NOT NULL,
  `styleclass` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  PRIMARY KEY (`cntid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `contents`
--


-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE IF NOT EXISTS `courses` (
  `crsid` bigint(20) NOT NULL,
  `crsname` varchar(255) NOT NULL,
  `crsdescription` varchar(255) NOT NULL,
  PRIMARY KEY (`crsid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

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
-- Table structure for table `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `pgid` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner` bigint(20) NOT NULL,
  `style` longtext NOT NULL,
  `tplid` bigint(20) NOT NULL,
  PRIMARY KEY (`pgid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `pages`
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
  `group` bigint(20) NOT NULL,
  `ctime` bigint(20) NOT NULL,
  `atime` bigint(20) NOT NULL,
  `mtime` bigint(20) NOT NULL,
  `dirid` varchar(255) DEFAULT NULL,
  UNIQUE KEY `stgid` (`stgid`),
  UNIQUE KEY `filename` (`filename`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `storages`
--


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
  PRIMARY KEY (`stuid`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--


-- --------------------------------------------------------

--
-- Table structure for table `templates`
--

CREATE TABLE IF NOT EXISTS `templates` (
  `tplid` bigint(20) NOT NULL AUTO_INCREMENT,
  `tplname` varchar(255) NOT NULL,
  `template` longtext NOT NULL,
  PRIMARY KEY (`tplid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Dumping data for table `templates`
--


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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `username`, `password`, `email`) VALUES
(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com');
