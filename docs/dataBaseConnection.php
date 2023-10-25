<?php
// Información de la conexión a la base de datos
$hostname = "192.168.1.52";
$port = "3306";
$username = "Admin";
$password = "TUvGyzf5q5@*-isabella";
$database = "parkin360"; // Reemplaza "nombre_de_tu_base_de_datos" con el nombre de tu base de datos

// Crear una conexión a la base de datos
$conexion = new mysqli($hostname, $username, $password, $database, $port);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

echo "Conexión exitosa a la base de datos ";

// Aquí puedes realizar consultas y operaciones en la base de datos

// Cerrar la conexión cuando hayas terminado
$conexion->close();
?>
