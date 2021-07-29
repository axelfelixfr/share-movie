document.getElementById("buscadorPeli").addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Se ejecuto la función");
    let movieTitle = document.getElementById('search').value;
    let movieData = {};
    // Seleccionamos el movieTitle que contiene la película con this
    // Con toLowerCase() pasamos todas las letras en minusculas
    // Con replace() reemplazamos todos los espacios que se pondran en el titulo de la película en el
    // input por un "+" para colocarlos correctamente en la URL
    const search = movieTitle.toLowerCase().replace(/ /g, "+");
        try {
            // Con fetch hacemos la API 
            // Es necesario ponerle await para que no este en espera
            // Le pasamos la variable search para que busque la película que se ponga en el input
            const data = await fetch(`https://www.omdbapi.com/?apikey=35ecc9eb&t=${search}`);

            // Convertimos la data en JSON
            const jsonData = await data.json();

            // La pasamos a movieData que es el objeto que después se llamara a la hora de imprimir los datos
            movieData = jsonData;
            console.log(movieData);
            
            // Dividimos cada una de sus propiedades del objeto
            let titulo = movieData.Title;
            let year = movieData.Year;
            let genero = movieData.Genre;
            let raiting = movieData.imdbRating;
            let idioma = movieData.Language;
            let portada = movieData.Poster;
            if (window.localStorage.getItem('Usuario') !== undefined && window.localStorage.getItem('Usuario')) {

            // Se comprueba si la busqueda es correcta en cuanto a la base de datos de la API o si la búsqueda contiene un poster ya que si no tiene puede quebrar el diseño
            if(movieData.Response === 'False' || movieData.Error === 'Movie not found!' || movieData.Poster === 'N/A'){
            
            // Si la card de la pelicula no existe la remueve del DOM
            if(document.getElementById('cardPeli') != null || undefined){
                document.getElementById('cardPeli').remove();
            }
            
            // Se crea una variable con la alerta de error
            let alerta = `<div id="alert" class='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md'>
                            <div class='w-2 bg-red-500'></div>

                            <div class='flex items-center px-2 py-3'>
                                <div class='mx-3'>
                                    <p class='text-gray-600'><i class="object-cover w-10 h-10 text-yellow-400 rounded-full fas fa-exclamation-triangle"></i> Lo sentimos, no tenemos ese título :(</p>
                                </div>
                            </div>
                        </div>`

            // Se inserta el HTML en el div de la alerta
            document.getElementById('alertError').innerHTML = alerta;

            } else {

            // Si la búsqueda no dio error entonces el título es correcto
            if(document.getElementById('cardPeli') === null || undefined){
            
                // Si ya hay una alerta de error entonces se remueve
                if(document.getElementById('alert') != null || undefined){
                    document.getElementById('alert').remove();
                }

                // Se crea una variable con la card de la película/serie
                let cardPeli = `<div id="cardPeli" class="flex flex-col justify-center min-h-full pb-20 bg-white">
                                    <div class="py-1 sm:max-w-xl sm:mx-auto">
                                    <div class="flex p-8 space-x-8 bg-white border border-gray-100 shadow-lg max-h-80 sm:rounded-3xl">
                                        <div class="w-1/2 h-48 overflow-visible">
                                            <img id="portada" class="shadow-lg rounded-3xl" src="${portada}" alt="">
                                        </div>
                                        <div class="flex flex-col w-1/2 space-y-4">
                                        <div class="flex items-start justify-between">
                                            <h2 id="titulo" class="text-3xl font-bold text-black">${titulo}</h2> <!-- Title -->
                                            <div id="raiting" class="p-2 font-bold bg-yellow-400 rounded-xl">${raiting}</div> <!-- imdbRating -->
                                        </div>
                                        <div>
                                            <div class="text-gray-800 text-md"><span class="text-gray-500 text-md">Idioma: </span><span id="idioma">${idioma}</span></div> <!-- Language -->
                                            <p class="overflow-y-hidden text-gray-800 max-h-40"><span class="text-gray-500">Género: </span><span id="genero">${genero}</span></p> <!-- Director -->
                                            <div class="text-sm text-gray-800"><span class="text-sm text-gray-500">Año: </span><span id="year">${year}</span></div>  <!-- Year -->
                                        <button class="flex button-danger sm:mt-3">Ver ahora <i class="pl-2 fas fa-laugh-beam"></i></button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>`

                    // Se inserta en el HTML dentro del div de la card
                    document.getElementById('contentMovie').innerHTML = cardPeli;
                    
                    // Si la card ya existe entonces solo se sobreescribe su contenido
                    } else {
                        document.getElementById('titulo').textContent = titulo;
                        document.getElementById('raiting').textContent = raiting;
                        document.getElementById('idioma').textContent = idioma;
                        document.getElementById('year').textContent = year;
                        document.getElementById('genero').textContent = genero;
                        document.getElementById('portada').src = portada;
                    }
            }
        } else{
            // alert('No estas logueado');
            // Se crea una variable con la alerta de error
            let alertaLogin = `<div id="alert" class='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md'>
                            <div class='w-2 bg-red-500'></div>

                            <div class='flex items-center px-2 py-3'>
                                <div class='mx-3'>
                                    <p class='text-gray-600'><i class="object-cover w-10 h-10 text-yellow-400 rounded-full fas fa-user-times"></i> Necesitas ingresar a la plataforma :(</p>
                                </div>
                            </div>
                        </div>`

            // Se inserta el HTML en el div de la alertaLogin
            document.getElementById('alertError').innerHTML = alertaLogin;
        } 
    } catch (err) {
        console.log(err)
    }
}, false);
