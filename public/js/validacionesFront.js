window.addEventListener("load", function () {
    console.log("holisssss");


    let formulario = document.querySelector("form.form-rgt");
    formulario.addEventListener("submit", function (evento) {

        let errores = [];
        // para nombre
        let campoNombre = document.querySelector("#nombre");
        if (campoNombre.value == "") {
            errores.push("El nombre no puede estar vacío");
        } else if (campoNombre.value.length < 3) {
            errores.push("El nombre debe tener 3 caracteres como mínimo")
        }

        // para apellido
        let campoApellido  = document.querySelector("#apellido");
        if (campoApellido.value == "") {
            errores.push("El apellido  no puede estar vacío");
        } else if (campoApellido.value.length < 3) {
            errores.push("El apellido debe tener 3 caracteres como mínimo")
        }


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
        
        // para imagen
        let campoImg  = document.querySelector("#img");
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        if (campoImg.value == "") {
            errores.push("Debes subir una imagen");
        } else if (!allowedExtensions.exec(campoImg.value) ) {
            errores.push("La imagen debe tener formato jpg, jpeg, png o gif")
        }

        
        

        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector("section.errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li class=err-li>" + errores[i] + "</li>"

            }

        }

    });
})


