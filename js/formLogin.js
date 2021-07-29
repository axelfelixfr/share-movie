document.getElementById('formLogin').addEventListener('submit', function(e){
        e.preventDefault();

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
      
        localStorage.setItem("Usuario", email);
        localStorage.setItem("Password", password);
        
        let navLogin = `<nav class="flex-wrap items-center justify-center hidden space-x-6 text-base font-semibold md:ml-auto lg:flex">
                            <svg class="w-6 h-6 font-bold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path></svg>
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                            <button class="flex items-center">
                                <img src="https://occ-0-58-64.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTw7t_oDR-SWh9ddj9kh9AlOqCabZMupMWano7R5wg9x1_KPjvABqKHNeCxcMddK7Ku9HsV6keglPmWPZeh0lKU.png?r=fcc" alt="">
                                <svg class="w-5 h-5 text-gray-800 stroke-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </nav>`
        
        let botonSalir = `<button
                            id="btnSalir"
                            class="button-outline-danger">
                            Salir
                          </button>`

        let botonVer = `<a class="mx-auto scroll-suave button-primary" href="#verPelicula">Ver contenido <i class="pl-2 far fa-heart"></i></a>`
        
        let lemaLogin = `Puedes ver <i class="inline fas fa-film"></i> Share <span class="font-bold">Movie</span> y checar nuestros estrenos`

        document.getElementById('lemaMovie').innerHTML = lemaLogin;
        document.getElementById('navLogin').innerHTML = navLogin;
        document.getElementById('botonesLogin').innerHTML = botonSalir;
        document.getElementById('botonesInicio').innerHTML = botonVer;
        document.getElementById('itemPromociones').innerHTML = '';
        document.getElementById('itemPlanes').innerHTML = '';
        document.getElementById('itemProcedimiento').innerHTML = '';
        document.getElementById('itemNosotros').innerHTML = '';
        document.getElementById('promociones').innerHTML = '';
        document.getElementById('planes').classList.remove("py-8");
        document.getElementById('planes').classList.remove("bg-gray-100");
        document.getElementById('planes').innerHTML = '';
        document.getElementById('procedimiento').classList.remove("py-10");
        document.getElementById('procedimiento').innerHTML = '';
        document.getElementById('contenido').classList.remove("border-b");
        // document.getElementById('nosotros').innerHTML = '';
        
        if(document.getElementById('btnSalir') != null || undefined){

          document.getElementById('btnSalir').addEventListener('click', function(e){
              e.preventDefault();
              if (window.localStorage.getItem('Usuario') !== undefined && window.localStorage.getItem('Usuario')){
                localStorage.clear();

                // Recargamos la página
                window.location.reload();
                document.getElementById('procedimiento').classList.add("py-10");
                document.getElementById('planes').classList.add("py-8");
                document.getElementById('planes').classList.add("bg-gray-100");
                document.getElementById('contenido').classList.add("border-b");
              }       
            });
      }
});