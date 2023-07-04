-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2023 a las 23:40:26
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fruver`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(11) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `cantidad` int(6) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPedido`, `detalle`, `cantidad`, `fecha`) VALUES
(12, 'baya de la enredadera', 2, '2023-07-03 23:14:50'),
(13, 'fruta pomácea y sabor muy dulce', 3, '2023-07-03 23:15:42'),
(14, 'cereza fresca de color rojo', 1, '2023-07-03 23:49:59'),
(20, 'baya de la enredadera', 1, '2023-07-04 15:31:07'),
(21, ' piña tropical', 1, '2023-07-04 15:31:12'),
(22, 'Uva cubana', 1, '2023-07-04 21:17:01'),
(23, 'fruta pomácea y sabor muy dulce', 2, '2023-07-04 21:17:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `detalle` varchar(255) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `detalle`, `cantidad`, `categoria`, `precio`, `imagen`) VALUES
(1, 'uva', 'Uva cubana', 39, 'temporada', 5000, 'assets/images/uva.jpg'),
(2, 'mango', 'Mango \"Golden Sunrise\"', 20, 'pepita', 5000, 'assets/images/mango.jpg'),
(3, 'kiwi', 'baya de la enredadera', 20, 'pepita', 2000, 'assets/images/kiwi.png'),
(4, 'piña', ' piña tropical', 13, 'tropical', 4600, 'assets/images/piña.jpeg'),
(6, 'cereza', 'cereza fresca de color rojo', 17, 'baya', 6500, 'assets/images/cereza.jpeg'),
(7, 'coco', 'Fruto seco tropical', 58, 'tropical', 5500, 'assets/images/coco.jpg'),
(8, 'fresa', ' Fruto de color rojo brillante y suculento', 150, 'baya', 3000, 'assets/images/fresa.png'),
(9, 'manzana', 'fruta pomácea y sabor muy dulce', 43, 'pepita', 2500, 'assets/images/manzana.jpg'),
(10, 'naranja', 'Fruta cítrica obtenida del naranjo dulce', 73, 'citrico', 1500, 'assets/images/naranja.jpeg'),
(11, 'papaya', ' Fruta rica en agua (un 88%)', 61, 'pepita', 10000, 'assets/images/papaya.jpg'),
(12, 'pera', 'Contiene mas del 80% de agua', 116, 'pepita', 2700, 'assets/images/pera.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombre`, `direccion`, `correo`, `contrasena`, `tipo`) VALUES
(1, 'Fausto Contreras', 'Calle 342', 'fausto34@gmail.com', '1234', 1),
(20, 'Otoniel Gonzales', 'Calle 345', 'otogon35@gmail.com', '1234', 2),
(21, 'Carlos Antoño', 'Calle 542', 'carlosant4@gmail.com', '1234', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedido`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
