// Se hace una función autoejecutable para proteger el código JavaScript
// De esta manera protegemos todo nuestro código, variables, objetos, propiedades, etc
(function(){
        propieLight = document.querySelectorAll('.imagenContenido');
    // console.log(propieLight);
        for (var i = 0; i < propieLight.length; i++) {
			//
			propieLight[i].addEventListener('click', function(){
                var rutaImagen = this.src;

            // Creamos el modal y le concatenamos la variable de la ruta para hacer el modal dinámico
            var modal = `<div class="modal" id="modal">
                            <img src="${rutaImagen}" alt="">
                            <div class="btn-cerrar" id="btnCerrar">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                        </div>`
                        
            document.getElementById('contenidoDisponible').innerHTML = modal;

            document.getElementById('btnCerrar').addEventListener('click', function(){
                document.getElementById('modal').remove();
            })

            document.addEventListener('keyup', function(e){
                if(e.which==27){
                    document.getElementById('modal').remove();
                }
            })

            });
		}
}())

