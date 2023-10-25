const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '192.168.1.52',
    port: '3306',
    user: 'Admin',
    password: 'TUvGyzf5q5@*-isabella',
    database: 'nombre_de_tu_base_de_datos', // Reemplaza 'nombre_de_tu_base_de_datos' con el nombre de tu base de datos
});

connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.message);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
        // Aquí puedes realizar consultas y operaciones en la base de datos
    }
});

// Cuando hayas terminado de realizar operaciones en la base de datos, no olvides cerrar la conexión
// connection.end();
