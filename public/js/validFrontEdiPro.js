window.addEventListener("load", function () {
    console.log("holisssss");


    let formulario = document.querySelector("form.form-editprod");
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();


        let errores = [];
        // para nombre
        let campoNombre = document.querySelector("#nombre");
        if (campoNombre.value == "") {
            errores.push("El nombre no puede estar vacío");
        } else if (campoNombre.value.length < 5 || campoNombre.value.length > 30) {
            errores.push('El nombre deber tener entre 5 y 30 caracteres')
        }

        // para marca
        let campoMarca  = document.querySelector("#marca");
        if (campoMarca.value == "") {
            errores.push('Debe seleccionar una marca');
        }

        // para pesoKg
        let campoPesoKg = document.querySelector("#pesoKg");
        if (campoPesoKg.value < 0.01 || campoPesoKg.value > 999999.99) {
            errores.push('El peso debe estar entre 0.01 y 999999.99')
        }

        // para precio
        let campoPrecio = document.querySelector("#precio");
        if (campoPrecio.value < 0.01 || campoPrecio.value > 999999.99) {
            errores.push('El precio debe estar entre 0.01 y 999999.99')
        }

        // para descuento
        let campoDescuento = document.querySelector("#descuento");
        if (campoDescuento.value < 1 || campoDescuento.value > 100) {
            errores.push('El descuento es un %, debe estar entre 0 y 100')
        }
        
        // para imagen
        let campoImg  = document.querySelector("#img");
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
        /* if (campoImg.value == "") {
            errores.push("Debes subir una imagen");
        } else  if (!allowedExtensions.exec(campoImg.value) ) {
            errores.push("La imagen debe tener formato jpg, jpeg, png o gif")
        }*/

        // para caracteristicas
        let campoCaract  = document.querySelector("#caract");
                if (campoCaract.value < 25 || campoCaract.value > 250) {
                    errores.push('Las características deben tener entre 25 y 250 caracteres');
                }

        // para descripción
        let campoDescripcion  = document.querySelector("#descripcion");
                if (campoDescripcion.value < 25 || campoDescripcion.value > 350) {
                    errores.push('La descripción debe tener entre 25 y 350 caracteres');
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


