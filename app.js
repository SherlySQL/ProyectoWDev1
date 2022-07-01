

//----------------------------------------------------------------------EJERCICIO #2 VENTANA MODAL, CONSUMO DE API Y EVENTO ONCLICK DE JQUERY------------------------------------------------------------------------------------


//DEFINICIÓN DE VARIABLES GLOBALES
let imagen;
let nombre;
let apellido;
let correo;
let pais;
let telefono;
let celular;
let genero;
let mifoto;


//CONSUMO DEL API
function Api1() {
    let url="https://randomuser.me/api/" //URL del Api

    fetch(url) //solicitud con fetch
    .then(response => response.json()) 
    .then(data =>{ //la data es la promesa que les cumplio el API

        //SE CARGAN LOS VALORES DE DATA EN CADA VARIABLE GLOBAL
        imagen = data.results[0].picture.large
        nombre = data.results[0].name.first
        apellido = data.results[0].name.last
        correo = data.results[0].email
        pais = data.results[0].location.country
        telefono = data.results[0].phone
        celular = data.results[0].cell
        genero = data.results[0].gender
        
        
        //Antes de pintar sobre los div  debemos limpiarlos o solo asegurarnos que estén limpios
        document.getElementById("foto").innerHTML=""
        document.getElementById("contenido1").innerHTML=""
        document.getElementById("contenido2").innerHTML=""


        //SE PINTA DINAMICAMENTE LA FOTO DEL ARQUITECTO (la coloco aparte porque la imagen no require hacerle click)
        let foto = document.getElementById("foto")
        mifoto =`<img src="${imagen}" alt="" class="rounded-circle" width="200px" height="200px">`
        foto.innerHTML=mifoto //Meter la info en el HTML id=foto


        //SE PINTAN DINAMICAMENTE LOS OTROS DATOS CON EVENTOS DE JQUERY, (que al hacer click sobre ellos, se muestren los datos)    
        $(document).ready(function () {

            $("#name").click(function (e) { 
                e.preventDefault();
                let linea1 =`<p class="categoria"> Mi Nombre es:</p>`
                let linea2 =`<p class="atributo"> ${nombre} ${apellido}`
                contenido1.innerHTML=linea1 //Meter la info en el HTML id=contenido1
                contenido2.innerHTML=linea2 //Meter la info en el HTML id=contenido2
            });

            $("#email").click(function (e) { 
                e.preventDefault();
                let linea1 =`<p class="categoria"> Mi Correo Electrónico es:</p>`
                let linea2 =`<p class="atributo"> ${correo}</p>`
                contenido1.innerHTML=linea1 
                contenido2.innerHTML=linea2 
            });

            $("#pais").click(function (e) { 
                e.preventDefault();
                let linea1 =`<p class="categoria"> Mi País de Origen es:</p>`
                let linea2 =`<p class="atributo"> ${pais}</p>`
                contenido1.innerHTML=linea1 
                contenido2.innerHTML=linea2 
            });

            $("#phone").click(function (e) { 
                e.preventDefault();
                let linea1 =`<p class="categoria"> Mi Número de Teléfono es:</p>`
                let linea2 =`<p class="atributo"> ${telefono}</p>`
                contenido1.innerHTML=linea1 
                contenido2.innerHTML=linea2 
            });

            $("#cellphone").click(function (e) { 
                e.preventDefault();
                let linea1 =`<p class="categoria"> Mi Número de Celular es:</p>`
                let linea2 =`<p class="atributo"> ${celular}</p>`
                contenido1.innerHTML=linea1 
                contenido2.innerHTML=linea2 
            });

            $("#gender").click(function (e) { 
                e.preventDefault();
                let linea1 =`<p class="categoria"> Mi Genero es:</p>`
                let linea2 =`<p class="atributo"> ${genero}</p>`
                contenido1.innerHTML=linea1 
                contenido2.innerHTML=linea2 
            });
    });

})}






//----------------------------------------------------------------------EJERCICIO #12 CONSULTAR API Y MOSTRAR EN TABLA------------------------------------------------------------------------------------


function Api2() {
    let contenidotabla=document.getElementById("contenidotabla")
    let misdatos="" //Lo declaro "" para que no tire undefined en la primera linea
    let url="https://jsonplaceholder.typicode.com/photos" //URL del Api

    fetch(url) //solicitud con fetch
    .then(response => response.json()) 
    .then(data =>{ //la data es la promesa que les cumplio el API

        data.forEach(element => { //aca pintamos el contenido de la tabla dinamicamente
            misdatos += `
            <tr>
                <td>${element.albumId}</td>
                <td>${element.id}</td>
                <td>${element.thumbnailUrl}</td>
                <td>${element.title}</td>
                <td>${element.url}</td>
            </tr> `    
        });
    
        console.log (data)
        contenidotabla.innerHTML=misdatos //Meter la info en el HTML
                                          //? "True" : "Falso" ESTO ES UN IF MODERNO, (si es True cambiar a Activo)
                                          //(si es False cambiar a Inactivo)  

})}