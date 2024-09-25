-- MariaDB dump 10.19-11.3.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: EduPrep
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificate`
--

DROP TABLE IF EXISTS `certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `certificate` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `completeddate` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate`
--

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `id` int(11) NOT NULL,
  `textintroduction` varchar(150) DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `timeduration` decimal(5,2) DEFAULT NULL,
  `isworkshop` tinyint(1) DEFAULT NULL,
  `grade` float DEFAULT NULL,
  `difficult` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES
(1,'Introduction to programming','Programming 101',10.50,0,85.5,3),
(2,'Learn the basics of web development','Web Development Basics',8.00,1,90,4),
(3,'Advanced topics in databases','Database Mastery',12.25,0,88.7,5),
(4,'Master front-end development','Frontend Development',7.30,1,92.3,4),
(5,'Learn Python from scratch','Python for Beginners',9.75,0,86.4,3),
(6,'Deep dive into Java programming','Advanced Java',11.00,0,95,5),
(7,'Understand algorithms and data structures','Algorithms and Data Structures',10.00,1,82.1,4),
(8,'Master responsive web design','Responsive Web Design',7.50,0,89.2,3),
(9,'Learn about machine learning','Machine Learning Essentials',13.00,1,86.8,5),
(10,'Introduction to cybersecurity','Cybersecurity Basics',9.00,0,87.5,4),
(11,'Learn cloud computing fundamentals','Cloud Computing 101',8.50,0,84.3,4),
(12,'Master full-stack development','Full Stack Developer',15.00,1,91,5),
(13,'Explore the world of AI','Artificial Intelligence Basics',12.75,0,89.5,4),
(14,'Learn about ethical hacking','Ethical Hacking',9.00,1,92.7,5),
(15,'Introduction to blockchain technology','Blockchain Basics',10.00,0,87.8,4),
(16,'Become a data analyst','Data Analytics',14.50,1,90.5,5),
(17,'Introduction to game development','Game Development',11.25,0,88.9,3),
(18,'Learn Docker for deployment','Docker Deployment',7.75,1,85.6,4),
(19,'Understand software testing','Software Testing Basics',8.00,0,83.2,3),
(20,'Explore DevOps practices','DevOps Essentials',10.50,1,90.8,5);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exercise`
--

DROP TABLE IF EXISTS `exercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exercise` (
  `id` int(11) NOT NULL,
  `grade` float DEFAULT NULL,
  `game` varchar(70) DEFAULT NULL,
  `idLesson` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idLesson` (`idLesson`),
  CONSTRAINT `exercise_ibfk_1` FOREIGN KEY (`idLesson`) REFERENCES `lesson` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exercise`
--

LOCK TABLES `exercise` WRITE;
/*!40000 ALTER TABLE `exercise` DISABLE KEYS */;
/*!40000 ALTER TABLE `exercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson`
--

DROP TABLE IF EXISTS `lesson`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lesson` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `textintroduction` varchar(150) DEFAULT NULL,
  `grade` float DEFAULT NULL,
  `idCourse` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCourse` (`idCourse`),
  CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`idCourse`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lesson`
--

LOCK TABLES `lesson` WRITE;
/*!40000 ALTER TABLE `lesson` DISABLE KEYS */;
/*!40000 ALTER TABLE `lesson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `video` varchar(70) DEFAULT NULL,
  `infographic` varchar(70) DEFAULT NULL,
  `map` varchar(70) DEFAULT NULL,
  `text` varchar(100) DEFAULT NULL,
  `idLesson` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idLesson` (`idLesson`),
  CONSTRAINT `material_ibfk_1` FOREIGN KEY (`idLesson`) REFERENCES `lesson` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `textQuestion` varchar(40) DEFAULT NULL,
  `textAnswer` varchar(40) DEFAULT NULL,
  `idExercise` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idExercise` (`idExercise`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`idExercise`) REFERENCES `exercise` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentcoursegrade`
--

DROP TABLE IF EXISTS `studentcoursegrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studentcoursegrade` (
  `studentId` int(11) NOT NULL,
  `courseId` int(11) NOT NULL,
  `grade` float DEFAULT NULL,
  PRIMARY KEY (`studentId`,`courseId`),
  KEY `courseId` (`courseId`),
  CONSTRAINT `studentcoursegrade_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `user` (`id`),
  CONSTRAINT `studentcoursegrade_ibfk_2` FOREIGN KEY (`courseId`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentcoursegrade`
--

LOCK TABLES `studentcoursegrade` WRITE;
/*!40000 ALTER TABLE `studentcoursegrade` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentcoursegrade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentexercisegrade`
--

DROP TABLE IF EXISTS `studentexercisegrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studentexercisegrade` (
  `studentId` int(11) NOT NULL,
  `exerciseId` int(11) NOT NULL,
  `grade` float DEFAULT NULL,
  PRIMARY KEY (`studentId`,`exerciseId`),
  KEY `exerciseId` (`exerciseId`),
  CONSTRAINT `studentexercisegrade_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `user` (`id`),
  CONSTRAINT `studentexercisegrade_ibfk_2` FOREIGN KEY (`exerciseId`) REFERENCES `exercise` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentexercisegrade`
--

LOCK TABLES `studentexercisegrade` WRITE;
/*!40000 ALTER TABLE `studentexercisegrade` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentexercisegrade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentlessongrade`
--

DROP TABLE IF EXISTS `studentlessongrade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `studentlessongrade` (
  `studentId` int(11) NOT NULL,
  `lessonId` int(11) NOT NULL,
  `grade` float DEFAULT NULL,
  PRIMARY KEY (`studentId`,`lessonId`),
  KEY `lessonId` (`lessonId`),
  CONSTRAINT `studentlessongrade_ibfk_1` FOREIGN KEY (`studentId`) REFERENCES `user` (`id`),
  CONSTRAINT `studentlessongrade_ibfk_2` FOREIGN KEY (`lessonId`) REFERENCES `lesson` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentlessongrade`
--

LOCK TABLES `studentlessongrade` WRITE;
/*!40000 ALTER TABLE `studentlessongrade` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentlessongrade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(30) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `scholargrade` float DEFAULT NULL,
  `idWorkShop` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Workshop` (`idWorkShop`),
  CONSTRAINT `fk_Workshop` FOREIGN KEY (`idWorkShop`) REFERENCES `course` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,'Juan','Perez','juan.perez@example.com',88.5,2),
(2,'Maria','Lopez','maria.lopez@example.com',92,4),
(3,'Carlos','Gonzalez','carlos.gonzalez@example.com',85.7,7),
(4,'Ana','Martinez','ana.martinez@example.com',90.3,12),
(5,'Pedro','Sanchez','pedro.sanchez@example.com',88.2,14),
(6,'Lucia','Diaz','lucia.diaz@example.com',89.6,16),
(7,'Miguel','Ramirez','miguel.ramirez@example.com',84.4,18),
(8,'Sofia','Fernandez','sofia.fernandez@example.com',91.5,20),
(9,'Diego','Vargas','diego.vargas@example.com',86.9,7),
(10,'Valeria','Hernandez','valeria.hernandez@example.com',92.7,14);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-25 17:19:51
