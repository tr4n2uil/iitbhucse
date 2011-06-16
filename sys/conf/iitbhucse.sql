# --------------------------------------------------------
# Host:                         localhost
# Server version:               5.5.8
# Server OS:                    Win32
# HeidiSQL version:             6.0.0.3603
# Date/time:                    2011-06-16 11:11:12
# --------------------------------------------------------

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
  `crsid` bigint(20) NOT NULL,
  `crsname` varchar(255) NOT NULL,
  `crsdescription` varchar(255) NOT NULL,
  PRIMARY KEY (`crsid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.courses: ~0 rows (approximately)
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;


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

# Dumping data for table iitbhucse.faculty: 0 rows
/*!40000 ALTER TABLE `faculty` DISABLE KEYS */;
/*!40000 ALTER TABLE `faculty` ENABLE KEYS */;


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
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.logs: ~76 rows (approximately)
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` (`lid`, `message`, `address`, `time`) VALUES
	(1, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1307536404),
	(76, 'USER LOGIN with uid=1 and username=enhancse', '127.0.0.1', 1308202393);
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;


# Dumping structure for table iitbhucse.members
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

# Dumping data for table iitbhucse.sessions: ~1 rows (approximately)
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`sessionid`, `uid`, `time`, `expiry`) VALUES
	('q2zue3ciwbj3q1w5h8s290j4s3n54pih', 1, 1308202393, 1308288793);
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;


# Dumping structure for table iitbhucse.storages
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

# Dumping data for table iitbhucse.storages: ~2 rows (approximately)
/*!40000 ALTER TABLE `storages` DISABLE KEYS */;
INSERT INTO `storages` (`stgid`, `stgname`, `filename`, `mime`, `owner`, `access`, `groupid`, `ctime`, `atime`, `mtime`, `dirid`) VALUES
	('c5v9bw1khuxtlwpqgn96wbqdfsv08sml', 'Vibhaj Rajan', '', 'application/pdf', 14, 4, 0, 1307787896, 1307787896, 1307787896, ''),
	('dyz8b3yizlo6vuhp6suxjuz751pumtdt', 'Shivang Mittal', '', 'application/pdf', 15, 4, 0, 1307820268, 1307820268, 1307820268, '');
/*!40000 ALTER TABLE `storages` ENABLE KEYS */;


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
  `stresume` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.students: ~2 rows (approximately)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`stuid`, `stname`, `strollno`, `stemail`, `stcourse`, `styear`, `stinterest`, `stcgpa`, `stinternship`, `stplacement`, `ststatus`, `stresume`) VALUES
	(14, 'Vibhaj Rajan', '08400EN008', 'vibhaj.rajan.cse08@itbhu.ac.in', 2, 2008, NULL, NULL, NULL, NULL, 1, 'c5v9bw1khuxtlwpqgn96wbqdfsv08sml'),
	(15, 'Shivang Mittal', '10100EN010', 'shivang.mittal.cse10@itbhu.ac.in', 1, 2010, NULL, NULL, NULL, NULL, 1, 'dyz8b3yizlo6vuhp6suxjuz751pumtdt');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;


# Dumping structure for table iitbhucse.users
CREATE TABLE IF NOT EXISTS `users` (
  `uid` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

# Dumping data for table iitbhucse.users: ~3 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`uid`, `username`, `password`, `email`) VALUES
	(1, 'enhancse', 'fc7c70a196d8c1bf619bef2aed0bf9e2', 'vibhaj.itbhu@gmail.com'),
	(14, 'vibhaj', '69ceec29f74496b2bfb88b2533a0642b', 'vibhaj.rajan.cse08@itbhu.ac.in'),
	(15, 'shivang', 'f745a8f4ca0c5e3d0502e588ed6bb0d2', 'shivang.mittal.cse10@itbhu.ac.in');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
