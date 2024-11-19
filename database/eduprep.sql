-- MariaDB dump 10.19-11.3.2-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: eduprep
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
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `course` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `difficult` int(11) DEFAULT NULL,
  `how_many_lesson` int(11) DEFAULT NULL,
  `is_workshop` bit(1) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `textintroduction` varchar(500) DEFAULT NULL,
  `timedurationmonth` int(11) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `exam_id` int(11) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`course_id`),
  UNIQUE KEY `UKcaxxd6p1dx1xqqjdv5ns25pnr` (`exam_id`),
  CONSTRAINT `FKo32aifp60sloal8h3rocivjhw` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`exam_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES
(1,'Programación',3,12,'\0','Curso de Java','Aprende los fundamentos de Java desde cero.',6,'https://www.youtube.com/embed/abcd1234',1,'/uploads/c1.jpg','/uploads/c1.jpg'),
(2,'Diseño',2,10,'\0','Curso de Photoshop','Domina las herramientas básicas de edición con Photoshop.',4,'https://www.youtube.com/embed/efgh5678',2,'/uploads/c1.jpg','/uploads/c1.jpg'),
(3,'Marketing',4,8,'','Taller de Marketing Digital','Crea estrategias digitales efectivas para tu negocio.',3,'https://www.youtube.com/embed/ijkl9012',3,'/uploads/c1.jpg','/uploads/c1.jpg'),
(4,'Ciencias',5,15,'\0','Curso de Física','Un recorrido por los conceptos básicos de la física clásica.',5,'https://www.youtube.com/embed/mnop3456',4,'/uploads/c1.jpg','/uploads/c1.jpg'),
(5,'Matemáticas',3,20,'\0','Curso de Álgebra','Resuelve ecuaciones y domina los fundamentos del álgebra.',6,'https://www.youtube.com/embed/qrst7890',5,'/uploads/c1.jpg','/uploads/c1.jpg'),
(6,'Arte',1,5,'','Taller de Pintura','Explora técnicas básicas de pintura al óleo.',2,'https://www.youtube.com/embed/uvwx1122',6,'/uploads/c1.jpg','/uploads/c1.jpg');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam`
--

DROP TABLE IF EXISTS `exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exam` (
  `exam_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`exam_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam`
--

LOCK TABLES `exam` WRITE;
/*!40000 ALTER TABLE `exam` DISABLE KEYS */;
INSERT INTO `exam` VALUES
(1,'EXAMEN FINAL'),
(2,'EXAMEN FINAL'),
(3,'EXAMEN FINAL'),
(4,'EXAMEN FINAL'),
(5,'EXAMEN FINAL'),
(6,'EXAMEN FINAL');
/*!40000 ALTER TABLE `exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lesson`
--

DROP TABLE IF EXISTS `lesson`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lesson` (
  `lesson_id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(800) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`lesson_id`),
  KEY `FKjs3c7skmg8bvdddok5lc7s807` (`course_id`),
  CONSTRAINT `FKjs3c7skmg8bvdddok5lc7s807` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`)
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
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `question_id` int(11) NOT NULL AUTO_INCREMENT,
  `correct_answer` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `exam_id` int(11) NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `FKhupso6ldavcx993tfnrjsdl1p` (`exam_id`),
  CONSTRAINT `FKhupso6ldavcx993tfnrjsdl1p` FOREIGN KEY (`exam_id`) REFERENCES `exam` (`exam_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_options`
--

DROP TABLE IF EXISTS `question_options`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_options` (
  `question_question_id` int(11) NOT NULL,
  `options` varchar(255) DEFAULT NULL,
  KEY `FKpe5m5pktlr3jq7n2u98inq4o1` (`question_question_id`),
  CONSTRAINT `FKpe5m5pktlr3jq7n2u98inq4o1` FOREIGN KEY (`question_question_id`) REFERENCES `question` (`question_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_options`
--

LOCK TABLES `question_options` WRITE;
/*!40000 ALTER TABLE `question_options` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_options` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_course_grade`
--

DROP TABLE IF EXISTS `student_course_grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_course_grade` (
  `course_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `grade` float NOT NULL,
  `progress` float NOT NULL,
  PRIMARY KEY (`course_id`,`student_id`),
  KEY `FKku5o8n56e85tv94myqxbvlpe1` (`student_id`),
  CONSTRAINT `FKaboo7psgtlbe2uldpowsot86x` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`),
  CONSTRAINT `FKku5o8n56e85tv94myqxbvlpe1` FOREIGN KEY (`student_id`) REFERENCES `user` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_course_grade`
--

LOCK TABLES `student_course_grade` WRITE;
/*!40000 ALTER TABLE `student_course_grade` DISABLE KEYS */;
INSERT INTO `student_course_grade` VALUES
(3,1,100,100),
(5,1,-1,33),
(6,1,-1,0);
/*!40000 ALTER TABLE `student_course_grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_lesson_grade`
--

DROP TABLE IF EXISTS `student_lesson_grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_lesson_grade` (
  `lesson_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `grade` float NOT NULL,
  PRIMARY KEY (`lesson_id`,`student_id`),
  KEY `FKrhg4c3ppe0qcqmk5l01l64d6m` (`student_id`),
  CONSTRAINT `FK6wcbmvb9wj3fiimgfixcup2ot` FOREIGN KEY (`lesson_id`) REFERENCES `lesson` (`lesson_id`),
  CONSTRAINT `FKrhg4c3ppe0qcqmk5l01l64d6m` FOREIGN KEY (`student_id`) REFERENCES `user` (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_lesson_grade`
--

LOCK TABLES `student_lesson_grade` WRITE;
/*!40000 ALTER TABLE `student_lesson_grade` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_lesson_grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `student_id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `id_workshop` int(11) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1,'juan.perez@example.com','Juan',101,'Pérez','securepass123'),
(2,'maria.gomez@example.com','Maria',NULL,'Gómez','mypassword456'),
(3,'luis.lopez@example.com','Luis',103,'López','password789'),
(4,'ana.sanchez@example.com','Ana',104,'Sánchez','anaS1234'),
(5,'carlos.ramirez@example.com','Carlos',NULL,'Ramírez','pass5678'),
(6,'sofia.martinez@example.com','Sofía',105,'Martínez','secure@sofia');
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

-- Dump completed on 2024-11-17 17:08:34
