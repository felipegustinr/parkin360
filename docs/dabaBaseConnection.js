const firebase = require('firebase');
require('firebase/firestore');

// Inicializar Firebase con tu configuración
const firebaseConfig = {
    apiKey: "AIzaSyB_YIlap7tI3WNckTq1A9XEBjQeaIK7g7w",
    authDomain: "parking360-bc4c6.firebaseapp.com",
    projectId: "parking360-bc4c6",
    storageBucket: "parking360-bc4c6.appspot.com",
    messagingSenderId: "1003326374942",
    appId: "1:1003326374942:web:5cb193cdcfc43892bbda0f"
};

firebase.initializeApp(firebaseConfig);

// Obtener una referencia a la colección 'categorias' en Firestore
const db = firebase.firestore();
const categoriasCollection = db.collection('categorias');

// Añadir un documento a la colección 'categorias'
categoriasCollection.add({
    id_categoria: 1,
    descripition: "Descripción de la categoría 1"
})
    .then((docRef) => {
        console.log("Documento añadido con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al añadir documento: ", error);
    });
