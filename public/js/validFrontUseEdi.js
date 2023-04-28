window.addEventListener("load", function () {
    console.log("holisssss");


    let formulario = document.querySelector("form.form-ediusu");
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();


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
        
        /* if (campoEmail.value == "") {
            errores.push("El e-mail  no puede estar vacío");
         } else if (!(campoEmail.value.match(validRegex))){
            errores.push("El e-mail no tiene un formato válido")
        } */
        
        // para contraseña
        /* let campoPass  = document.querySelector("#contrasenia");
        if (campoPass.value == "") {
            errores.push("La contraseña no puede estar vacía");
        } */
        
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


