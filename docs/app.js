baseDatos = JSON.parse( window.localStorage.getItem("DB_users"));


if (!baseDatos) {
    cargarDatosDB()
}

function guardarDatos(){
    localStorage.setItem("DB_users", JSON.stringify(baseDatos))
}
function cargarDatosDB() {
    baseDatos = {
        "felipe_rivas@prueba.com": {
            password: "felipe123"
        },
        
        "jorge_rivera@prueba.com": {
            password: "jorge123"
        },

        "diana_araujo@prueba.com": {
            password :"diana123"
        },

        "marleny_lopez@prueba.com": {
            password: "marleny123"
        },

        "daniel_jojoa@prueba.com": {
            password: "daniel123"
        },
        
        "alejandra-zuleta@prueba.com": {
            password: "alejandra123"
        }
    }
}

function login() {  
        let usuario = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;

        if (!usuario) {
            alert("Campo vacio en usuario");
        }
        if(!password){
            alert("Campo vacio en contraseña");
        }
        let datos =  baseDatos[usuario]
        if (!datos){
            alert("El usuario no existe")
        }
        if (password != datos.password) {
            alert("Contraseña incorrecta")
        } else {
            window.location="espacios.html"
            alert("Bienvenido "+ usuario)
        }
    }
    function registrer(){
        let usuario = document.getElementById("email-reg").value;
        let password = document.getElementById("password-reg").value;
        
        if (!usuario) {
            alert("Campo vacio en usuario");
        }
        if(!password){
            alert("Campo vacio en contraseña");
    }else{
        baseDatos[usuario]={}
        baseDatos[usuario].password=password
        guardarDatos();
        window.location="login.html"
        alert("Usuario Registrado Correctamente")
    } 
}

