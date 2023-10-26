
// Importa el paquete mysql2


window.addEventListener('DOMContentLoaded', () => {

})

const registerForm = document.getElementById('registerUser');
const mysql = require('mysql2');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Configuración de la conexión a la base de datos
const connection = createConnection({
    host: 'parking360-server.cabb3oposaxk.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'TUvGyzf5q5',
    database: 'parking360'
});

// Conéctate a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectarse a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conexión establecida con el ID: ' + connection.threadId);

    // Aquí puedes realizar operaciones de consulta y manipulación de datos

    // Cierra la conexión cuando hayas terminado
    connection.end((err) => {
        if (err) {
            console.error('Error al cerrar la conexión: ' + err.stack);
            return;
        }
        console.log('Conexión cerrada.');
    });
});
    
    
    
});


// baseDatos = JSON.parse( window.localStorage.getItem("DB_users"));


// if (!baseDatos) {
//     cargarDatosDB()
// }

// function guardarDatos(){
//     localStorage.setItem("DB_users", JSON.stringify(baseDatos))
// }
// function cargarDatosDB() {
//     baseDatos = {
//         "felipe_rivas@prueba.com": {
//             password: "felipe123"
//         },
        
//         "jorge_rivera@prueba.com": {
//             password: "jorge123"
//         },

//         "diana_araujo@prueba.com": {
//             password :"diana123"
//         },

//         "marleny_lopez@prueba.com": {
//             password: "marleny123"
//         },

//         "daniel_jojoa@prueba.com": {
//             password: "daniel123"
//         },
        
//         "alejandra-zuleta@prueba.com": {
//             password: "alejandra123"
//         }
//     }
// }



// function login() {  
//         let usuario = document.getElementById("email-login").value;
//         let password = document.getElementById("password-login").value;

//         if (!usuario) {
//             alert("Campo vacio en usuario");
//         }
//         if(!password){
//             alert("Campo vacio en contraseña");
//         }
//         let datos =  baseDatos[usuario]
//         if (!datos){
//             alert("El usuario no existe")
//         }
//         if (password != datos.password) {
//             alert("Contraseña incorrecta")
//         } else {
//             window.location="espacios.html"
//             alert("Bienvenido "+ usuario)
//         }
//     }
//     function registrer(){
//         let usuario = document.getElementById("email-reg").value;
//         let password = document.getElementById("password-reg").value;
        
//         if (!usuario) {
//             alert("Campo vacio en usuario");
//         }
//         if(!password){
//             alert("Campo vacio en contraseña");
//     }else{
//         baseDatos[usuario]={}
//         baseDatos[usuario].password=password
//         guardarDatos();
//         window.location="login.html"
//         alert("Usuario Registrado Correctamente")
//     } 
// }

