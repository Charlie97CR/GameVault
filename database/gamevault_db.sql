-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2026 a las 20:31:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gamevault_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `juego_id` int(11) DEFAULT NULL,
  `nombre_genero` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id`, `juego_id`, `nombre_genero`) VALUES
(4, 4, 'Platformer'),
(5, 4, 'Action'),
(6, 5, 'Indie'),
(7, 5, 'Adventure'),
(8, 5, 'Action'),
(9, 6, 'Action'),
(10, 7, 'Action'),
(11, 8, 'Action'),
(12, 9, 'Adventure'),
(13, 9, 'RPG'),
(14, 9, 'Puzzle'),
(15, 10, 'Adventure'),
(16, 10, 'Action'),
(17, 11, 'Adventure'),
(18, 12, 'Adventure'),
(19, 12, 'Action'),
(20, 12, 'RPG'),
(24, 14, 'Adventure'),
(25, 14, 'Action'),
(27, 16, 'Action'),
(28, 17, 'Adventure'),
(29, 17, 'Action'),
(30, 17, 'RPG'),
(31, 18, 'Adventure'),
(32, 18, 'Action'),
(33, 19, 'Shooter'),
(34, 19, 'Indie'),
(35, 19, 'RPG'),
(36, 20, 'Indie'),
(37, 20, 'Adventure'),
(38, 20, 'Simulation'),
(39, 21, 'Adventure'),
(40, 21, 'Action'),
(41, 22, 'Adventure'),
(42, 22, 'Action'),
(43, 23, 'Indie'),
(44, 23, 'Adventure'),
(45, 23, 'Action'),
(46, 24, 'Action'),
(47, 25, 'Adventure'),
(48, 25, 'Action'),
(49, 25, 'Casual'),
(50, 25, 'Simulation'),
(51, 25, 'Indie'),
(52, 26, 'Shooter'),
(53, 28, 'Shooter'),
(54, 28, 'Indie'),
(55, 28, 'Action'),
(56, 29, 'Action'),
(57, 29, 'RPG'),
(58, 30, 'Platformer'),
(59, 30, 'Adventure'),
(60, 30, 'Action'),
(61, 31, 'Indie'),
(62, 31, 'Adventure'),
(63, 31, 'Action'),
(64, 32, 'Adventure'),
(65, 32, 'Action'),
(66, 32, 'RPG'),
(67, 32, 'Casual'),
(68, 32, 'Indie'),
(69, 33, 'Action'),
(70, 33, 'RPG'),
(71, 34, 'Action'),
(72, 34, 'RPG'),
(73, 35, 'Action'),
(74, 35, 'RPG'),
(75, 36, 'Action'),
(76, 36, 'RPG'),
(79, 38, 'Shooter'),
(80, 38, 'Action'),
(81, 39, 'Platformer'),
(82, 39, 'Adventure'),
(83, 40, 'Platformer'),
(84, 40, 'Adventure'),
(85, 40, 'Action'),
(89, 13, 'Adventure'),
(90, 13, 'Action'),
(91, 13, 'RPG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(11) NOT NULL,
  `rawg_id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `imagen` varchar(500) DEFAULT NULL,
  `lanzamiento` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT 'biblioteca',
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `rawg_id`, `nombre`, `imagen`, `lanzamiento`, `estado`, `creado_en`) VALUES
(4, 11164, 'A Hat in Time', 'https://media.rawg.io/media/games/594/5949baae74fe9e399adbce0c44e28783.jpg', '2017-10-05', 'completado', '2026-10-18 17:52:15'),
(5, 977219, 'Another Crab\'s Treasure', 'https://media.rawg.io/media/games/5c5/5c506eb1f46d15ca07e13a85363ed389.jpg', '2024-04-25', 'completado', '2026-10-18 17:52:36'),
(6, 29179, 'God of War I', 'https://media.rawg.io/media/games/1aa/1aa4ca34a8a6bb57a2e065c8332dc230.jpg', '2005-03-22', 'completado', '2026-10-18 17:56:29'),
(7, 494384, 'God of War: Ragnarök', 'https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg', '2022-11-09', 'completado', '2026-10-18 17:56:35'),
(8, 39707, 'God of War II', 'https://media.rawg.io/media/games/615/615e9fc0a325e0d87b84dad029b8b7b9.jpg', '2007-03-13', 'pendiente', '2026-10-18 17:56:42'),
(9, 27969, 'The Legend of Zelda: Ocarina of Time 3D', 'https://media.rawg.io/media/games/c91/c916af1fa182bc2d674b4d9270bb7713.jpg', '2011-06-19', 'completado', '2026-10-18 17:57:41'),
(10, 25924, 'The Legend of Zelda: Majora\'s Mask', 'https://media.rawg.io/media/games/b3c/b3c209cd49aae8a469a59b79b54dc599.jpg', '2000-04-27', 'completado', '2026-10-18 17:57:56'),
(11, 26824, 'The Legend of Zelda: Skyward Sword', 'https://media.rawg.io/media/games/884/884d12f527a9a12b5e486ee1b79ecf7f.jpeg', '2011-11-20', 'completado', '2026-10-18 17:58:14'),
(12, 22511, 'The Legend of Zelda: Breath of the Wild', 'https://media.rawg.io/media/games/cc1/cc196a5ad763955d6532cdba236f730c.jpg', '2017-03-03', 'completado', '2026-10-18 17:58:25'),
(13, 292842, 'The Legend of Zelda: Link\'s Awakening (2019)', 'https://media.rawg.io/media/games/1bb/1bb38f1354db6596ccd6bdcb4a7f6cbc.jpg', '2019-09-20', 'completado', '2026-10-18 17:58:38'),
(14, 327239, 'The Legend of Zelda: Tears of the Kingdom', 'https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg', '2023-05-12', 'completado', '2026-10-18 17:58:48'),
(16, 58175, 'God of War (2018)', 'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg', '2018-04-20', 'completado', '2026-10-18 19:56:36'),
(17, 481913, 'Black Myth: Wukong', 'https://media.rawg.io/media/games/779/77988e89f7862afeede524420aa251b0.jpg', '2024-08-20', 'pendiente', '2026-10-18 20:15:40'),
(18, 4520, 'Alice: Madness Returns', 'https://media.rawg.io/media/games/0b5/0b5410b1e4b3fb72696dcefbf4f1cf40.jpg', '2011-06-14', 'dropeado', '2026-10-18 20:16:23'),
(19, 2255, '7 Days to Die', 'https://media.rawg.io/media/games/5cb/5cbbc5cd24677331c85253f961cad72a.jpg', '2013-12-13', 'dropeado', '2026-10-18 20:37:11'),
(20, 7381, 'ABZU', 'https://media.rawg.io/media/games/ba9/ba9ad92b6d04825bd15a407c6059db94.jpg', '2016-08-02', 'dropeado', '2026-10-18 20:40:50'),
(21, 4101, 'Bayonetta', 'https://media.rawg.io/media/games/bee/bee483efadcf9d7e657e52184316a34e.jpg', '2009-06-23', 'pendiente', '2026-10-18 20:41:17'),
(22, 3265, 'God of War III Remastered', 'https://media.rawg.io/media/games/4b6/4b67558bf04c7211aabeff179271bdd8.jpg', '2015-07-14', 'pendiente', '2026-10-18 21:17:27'),
(23, 427977, '30XX', 'https://media.rawg.io/media/screenshots/baf/bafe2b7cc5b935ad5897dc856e0f6971.jpg', '2021-07-04', 'completado', '2026-10-18 21:27:31'),
(24, 704787, 'ARC Raiders', 'https://media.rawg.io/media/games/5af/5af62b2725a440cf6858ce66b30151e5.jpg', '2025-10-30', 'completado', '2026-10-18 21:27:56'),
(25, 868127, 'Backrooms: Escape Together', 'https://media.rawg.io/media/screenshots/fbf/fbf5925db0efab579bd2952bbec5ff46.jpg', '2022-10-18', 'completado', '2026-10-18 21:28:47'),
(26, 45844, 'Battlefield 1 Revolution', 'https://media.rawg.io/media/games/52b/52be77c9a8f45af6ada50ec59a3d643c.jpg', '2017-08-21', 'completado', '2026-10-18 21:29:09'),
(27, 38335, 'Bejeweled', 'https://media.rawg.io/media/screenshots/302/302c34bc9ca4687b94c50199f88a9b22.jpg', '2001-01-01', 'completado', '2026-10-18 21:29:32'),
(28, 15426, 'Black Mesa', 'https://media.rawg.io/media/games/009/009e4e84975d6a60173ec1199db25aa3.jpg', '2020-03-06', 'completado', '2026-10-18 21:29:53'),
(29, 58637, 'Code Vein', 'https://media.rawg.io/media/games/16a/16a81cc458b0acb6ed2bcfd2a10f1527.jpg', '2019-09-26', 'completado', '2026-10-18 21:30:10'),
(30, 1013474, 'Constance (2025)', 'https://media.rawg.io/media/screenshots/592/592feaa2ff2a59c9859f084fb4c5d118.jpg', '2025-11-24', 'completado', '2026-10-18 21:30:39'),
(31, 979524, 'Content Warning', 'https://media.rawg.io/media/games/4b7/4b7716ece99ad9d65747f580c0399237.jpg', '2024-04-01', 'completado', '2026-10-18 21:30:54'),
(32, 616688, 'Core Keeper', 'https://media.rawg.io/media/games/8d9/8d980d350e5b4661bba3a15afa7b04da.jpg', '2024-08-26', 'completado', '2026-10-18 21:31:48'),
(33, 904375, 'Dark and Darker', 'https://media.rawg.io/media/screenshots/e72/e722d462113f4e595426e92c322b5012.jpg', '2024-06-07', 'completado', '2026-10-18 21:32:37'),
(34, 3371, 'Dark Souls II: Scholar of the First Sin', 'https://media.rawg.io/media/games/8fc/8fc59e74133fd8a8a436b7e2d0fb36c2.jpg', '2015-04-01', 'completado', '2026-10-18 21:32:51'),
(35, 2551, 'Dark Souls III', 'https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg', '2016-04-11', 'completado', '2026-10-18 21:33:10'),
(36, 51610, 'Dark Souls: Remastered', 'https://media.rawg.io/media/games/29c/29c6c21cc0c78cff6f45d23631cc82f4.jpg', '2018-05-23', 'completado', '2026-10-18 21:33:26'),
(38, 32, 'Destiny 2', 'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg', '2017-09-06', 'completado', '2026-10-18 21:34:36'),
(39, 17959, 'Ori and the Blind Forest: Definitive Edition', 'https://media.rawg.io/media/games/04a/04a7e7e185fb51493bdcbe1693a8b3dc.jpg', '2016-04-27', 'completado', '2026-10-19 02:27:50'),
(40, 28199, 'Ori and the Will of the Wisps', 'https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg', '2020-03-10', 'completado', '2026-10-19 02:27:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plataformas`
--

CREATE TABLE `plataformas` (
  `id` int(11) NOT NULL,
  `juego_id` int(11) DEFAULT NULL,
  `nombre_plataforma` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plataformas`
--

INSERT INTO `plataformas` (`id`, `juego_id`, `nombre_plataforma`) VALUES
(7, 4, 'PC'),
(8, 4, 'Xbox One'),
(9, 4, 'PlayStation 4'),
(10, 4, 'Nintendo Switch'),
(11, 4, 'macOS'),
(12, 5, 'PC'),
(13, 5, 'PlayStation 5'),
(14, 5, 'Xbox Series S/X'),
(15, 5, 'Nintendo Switch'),
(16, 6, 'PlayStation 3'),
(17, 6, 'PlayStation 2'),
(18, 6, 'PS Vita'),
(19, 7, 'PC'),
(20, 7, 'PlayStation 5'),
(21, 7, 'PlayStation 4'),
(22, 8, 'PlayStation 3'),
(23, 8, 'PlayStation 2'),
(24, 8, 'PS Vita'),
(25, 9, 'Nintendo 3DS'),
(26, 10, 'Nintendo Switch'),
(27, 10, 'Nintendo 64'),
(28, 11, 'Nintendo Switch'),
(29, 11, 'Wii U'),
(30, 11, 'Wii'),
(31, 12, 'Nintendo Switch'),
(32, 12, 'Wii U'),
(34, 14, 'Nintendo Switch'),
(37, 16, 'PC'),
(38, 16, 'PlayStation 4'),
(39, 17, 'PC'),
(40, 17, 'PlayStation 5'),
(41, 17, 'Xbox Series S/X'),
(42, 18, 'PC'),
(43, 18, 'Xbox One'),
(44, 18, 'Xbox 360'),
(45, 18, 'PlayStation 3'),
(46, 19, 'PC'),
(47, 19, 'Xbox One'),
(48, 19, 'PlayStation 4'),
(49, 19, 'macOS'),
(50, 19, 'Linux'),
(51, 20, 'PC'),
(52, 20, 'Xbox One'),
(53, 20, 'PlayStation 4'),
(54, 20, 'Nintendo Switch'),
(55, 21, 'PC'),
(56, 21, 'PlayStation 4'),
(57, 21, 'Xbox One'),
(58, 21, 'Nintendo Switch'),
(59, 21, 'Xbox 360'),
(60, 21, 'PlayStation 3'),
(61, 21, 'Wii U'),
(62, 22, 'PlayStation 4'),
(63, 23, 'PC'),
(64, 24, 'PC'),
(65, 24, 'PlayStation 5'),
(66, 24, 'Xbox Series S/X'),
(67, 25, 'PC'),
(68, 26, 'PC'),
(69, 26, 'Xbox One'),
(70, 26, 'PlayStation 4'),
(71, 27, 'PC'),
(72, 28, 'PC'),
(73, 28, 'Linux'),
(74, 29, 'PC'),
(75, 29, 'Xbox One'),
(76, 29, 'PlayStation 4'),
(77, 30, 'PC'),
(78, 31, 'PC'),
(79, 32, 'PC'),
(80, 32, 'Linux'),
(81, 33, 'PC'),
(82, 34, 'PC'),
(83, 34, 'Xbox One'),
(84, 34, 'PlayStation 4'),
(85, 35, 'PC'),
(86, 35, 'Xbox One'),
(87, 35, 'PlayStation 4'),
(88, 36, 'PC'),
(89, 36, 'Xbox One'),
(90, 36, 'PlayStation 4'),
(91, 36, 'Nintendo Switch'),
(94, 38, 'PC'),
(95, 38, 'PlayStation 5'),
(96, 38, 'Xbox One'),
(97, 38, 'PlayStation 4'),
(98, 38, 'Xbox Series S/X'),
(99, 38, 'Web'),
(100, 39, 'PC'),
(101, 39, 'Xbox One'),
(102, 39, 'Nintendo Switch'),
(103, 39, 'Xbox 360'),
(104, 40, 'PC'),
(105, 40, 'Xbox One'),
(106, 40, 'Xbox Series S/X'),
(107, 40, 'Nintendo Switch'),
(109, 13, 'Nintendo Switch');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `juego_id` (`juego_id`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rawg_id` (`rawg_id`);

--
-- Indices de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `juego_id` (`juego_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT de la tabla `plataformas`
--
ALTER TABLE `plataformas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `generos`
--
ALTER TABLE `generos`
  ADD CONSTRAINT `generos_ibfk_1` FOREIGN KEY (`juego_id`) REFERENCES `juegos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `plataformas`
--
ALTER TABLE `plataformas`
  ADD CONSTRAINT `plataformas_ibfk_1` FOREIGN KEY (`juego_id`) REFERENCES `juegos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
