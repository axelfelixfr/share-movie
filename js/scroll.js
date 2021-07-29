// Se hace una función autoejecutable para proteger el código JavaScript
// De esta manera protegemos todo nuestro código, variables, objetos, propiedades, etc
(function(){

    // Objeto con propiedades del scroll
    var propieScroll = {
        // Para saber la posición en la que estamos usamos la propiedad "pageYOffset" del objeto "window"
        posicion: window.pageYOffset,
        // Seleccionamos los elementos con clase "scroll-suave"
        scroll_suave: document.getElementsByClassName('scroll-suave'),
        // Seleccionamos los elementos con clase "volver-arriba", en este caso solo lo tiene el elemento "inicio"
        volver_arriba: document.getElementsByClassName('volver-arriba'),
        destino: null,
        seccion_distancia: null,
        intervalo: null
    }
    
    
    // Objeto con métodos del scroll
    var metodoScroll = {
        inicio: function(){
            // Seleccionamos todos los elementos con clase "scroll-suave" a través del for
            for (var i = 0; i < propieScroll.scroll_suave.length; i++) {
                // Le daremos un efecto click a cada elemento del menu
                propieScroll.scroll_suave[i].addEventListener('click', metodoScroll.moverse);
            }
    
            // Seleccionamos todos los elementos con clase "volver-arriba" a través del for, en este caso solo es el "inicio"
            for (var i = 0; i < propieScroll.volver_arriba.length; i++) {
                // Le daremos un efecto click a cada elemento del menu
                propieScroll.volver_arriba[i].addEventListener('click', metodoScroll.subir);
            }
        },
    
        moverse: function(e){
            // Quitamos el efecto brusco que ya hace por defecto al dar click a los enlaces
            e.preventDefault();
    
            // Debemos limpiar los demás intervalos que se ejecuten para que no choquen entre ellos y pasen errores
            clearInterval(propieScroll.intervalo);
    
            // Almacenamos en la propiedad ".destino" el href de los enlaces de cada elemento del menú
            propieScroll.destino = this.getAttribute('href');
    
            // Ahora los seleccionamos con un querySelector de forma dinámica, esto para que vaya cambiando mientras
            // se este dando click en cada uno de los elementos del menú
            propieScroll.seccion_distancia = document.querySelector(propieScroll.destino).offsetTop - 50;
            // Con la propiedad "offsetTop" podemos acceder a los pixeles de distancia que esta en cada elemento
            
            // Almacenamos la propieadad "pageYOffset" del objeto "window" para saber la distancia de los pixeles
            propieScroll.posicion = window.pageYOffset;
    
            // Hacemos el intervalo con que se hara el scroll al dar click en algunos de los elementos del menú
            propieScroll.intervalo = setInterval(function () {
    
                // Con este if calculamos que la posición sea menor  que la altura de pixeles de cada elemento
                if(propieScroll.posicion < propieScroll.seccion_distancia){
                    // Con esto podemos darle un seguimiento, pues por cada 15 milisegundos se movera "30" pixeles
                    propieScroll.posicion += 30;
    
                    // Con este if calculamos que ya haya llegado el scroll a la ubicación del elemento
                    // Esto se debe porque sino no se podrá salir del modulo
                    if(propieScroll.posicion >= propieScroll.seccion_distancia){
                        // Con la función clearInterval() elimina el intervalo que acabamos de ejecutar, para que deje
                        // de ejecutarse y el usuario pueda salir de la sección
                        clearInterval(propieScroll.intervalo); // Le pasamos a la función el intervalo que queremos que eliminemos
                    }
                // Este else es para que se pueda mover hacia arriba				
                } else {
                    // Usaremos lo mismos pixeles al moverse hacia abajo
                    propieScroll.posicion -= 30; // Esta vez no los sumara, sino que mas bien restara los pixeles
    
                    // Con este if calculamos que ya haya llegado el scroll a la ubicación del elemento
                    // Esto se debe porque sino no se podrá salir del modulo
                    if(propieScroll.posicion <= propieScroll.seccion_distancia){
                        // Con la función clearInterval() elimina el intervalo que acabamos de ejecutar, para que deje
                        // de ejecutarse y el usuario pueda salir de la sección
                        clearInterval(propieScroll.intervalo); // Le pasamos a la función el intervalo que queremos que eliminemos
                    }
    
                }
                // Con la función scrollTo() podemos hacer que el scroll vaya a una ubicación en específico
                // scrollTo(posicionX, posicionY)
                // En la posicionY debemos poner la posicion que queremos ubicar el scroll, esto porque se trata del largo de la página
                window.scrollTo(0,propieScroll.posicion);
            }, 15); // El "15" son los milisegundos que se ira moviendo el intervalo
        },
    
        subir: function(e){
            // Quitamos el efecto brusco que ya hace por defecto al dar click a los enlaces
            e.preventDefault();
    
            // Debemos limpiar los demás intervalos que se ejecuten para que no choquen entre ellos y pasen errores
            clearInterval(propieScroll.intervalo);
    
            // Almacenamos la propieadad "pageYOffset" del objeto "window" para saber la distancia de los pixeles
            propieScroll.posicion = window.pageYOffset;
    
            // Hacemos el intervalo con que se hara el scroll al dar click en algunos de los elementos del menú
            // En este intervalo se evaluara solo el elemento "inicio"
            propieScroll.intervalo = setInterval(function(){
    
                // La posición debe ser mayor a cero, ya que si el usuario se encuentra mas abajo que el menu
                // debe ejecutar la función. de otro caso no
                if(propieScroll.posicion > 0){
                    // Usaremos lo mismos pixeles al moverse hacia abajo
                    propieScroll.posicion -= 30; // Esta vez no los sumara, sino que mas bien restara los pixeles
    
                    // Si el usuario ya esta en inicio, entonces los pixeles de la pagina estaran en 0
                    // por lo tanto entrara en est if para dejar de ejecutar el intervalo
                    if(propieScroll.posicion <= 0){
                        // Limpiaremos el intervalo una vez que ya este en inicio
                        clearInterval(propieScroll.intervalo);
                    }
                } else{
                    // Con esto no se trabará el efecto si es que el usuario ya esta en el pixel 0
                    return;
                }
    
                // Con la función scrollTo() podemos hacer que el scroll vaya a una ubicación en específico
                // scrollTo(posicionX, posicionY)
                // En la posicionY debemos poner la posicion que queremos ubicar el scroll, esto porque se trata del largo de la página
                window.scrollTo(0, propieScroll.posicion);
    
            },15)
        }
    }
    metodoScroll.inicio();
    
    }())
    
    