window.addEventListener("load", function(){
    console.log("holisssss");


    let formulario = document.querySelector("form.form-rgt");
    formulario.addEventListener("submit", function (evento) {
        
        let errores = [];
        // para nombre en registro.ejs, userEdit.ejs, creacion-de-producto.ejs, edicion-de-producto.ejs 
        let campoNombre = document.querySelector("#nombre");
        if (campoNombre.value == "") {
            errores.push("El nombre no puede estar vacío");
        };
        
        if (errores.length > 0) {
            evento.preventDefault();
            let ulErrores = document.querySelector("section.errores ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"

            }

        } 
        
    }); 
})
    
   
