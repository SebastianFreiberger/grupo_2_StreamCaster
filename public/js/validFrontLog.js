window.addEventListener("load", function () {
    console.log("holisssss");


    let formulario = document.querySelector("form.form-loggin");
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();


        let errores = [];
        
        // para email
        let campoEmail  = document.querySelector("#email");
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        
        if (campoEmail.value == "") {
            errores.push("El e-mail  no puede estar vacío");
         } else if (!(campoEmail.value.match(validRegex))){
            errores.push("El e-mail no tiene un formato válido")
        }
        
        // para contraseña
        let campoPass  = document.querySelector("#contrasenia");
        if (campoPass.value == "") {
            errores.push("La contraseña no puede estar vacía");
        }
        
        //para resetear el array de errores en cada submit
        let ulErrores = document.querySelector("section.errores ul");
        ulErrores.innerHTML = ""

        if (errores.length > 0) {
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `<li class=err-li>${errores[i]}</li>`

            }

        }
        else {
            formulario.submit();
        }

    });
})


