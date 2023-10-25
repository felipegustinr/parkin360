import { saveUser } from "./app.js";
window.addEventListener('DOMContentLoaded', () => {

})

const registerForm = document.getElementById('registerUser');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = registerForm['email-reg'];
    const password = registerForm['password-reg'];
    const confirmPass = registerForm['confirmPass-reg'];
    const direccion = registerForm['Direccion'];
    const ciudad = registerForm['Ciudad'];
    const pais = registerForm['Pais'];
    const zipcode = registerForm['ZipCode'];
    
    saveUser(email.value,password.value,confirmPass.value,direccion.value,ciudad.value,pais.value,zipcode.value);
    
});
