import {generarTOKEN} from "./CONSTANTES.js"
import {consumirAPI} from "./servicios.js"
import { pintarCanciones } from "./pintar.js"
let fila = document.getElementById("base")
let artistas = [
    {URI : 'https://api.spotify.com/v1/artists/1wZtkThiXbVNtj6hee6dz9/top-tracks?market=US', IMG : 'img/IMG1_W&Y.jpg'},
    {URI : 'https://api.spotify.com/v1/artists/4SsVbpTthjScTS7U2hmr1X/top-tracks?market=US', IMG : 'img/IMG_Arcangel.jpg'},
    {URI : 'https://api.spotify.com/v1/artists/4152ZUds7gXsqYQexUonDP/top-tracks?market=US', IMG : 'img/IMG_Grupo-Gale.jpg'},
    {URI : 'https://api.spotify.com/v1/artists/2EIZodXJHserIu4pGNfD3Z/top-tracks?market=US', IMG : 'img/IMG_Willie-Gonzalez.jpg'},
    {URI : 'https://api.spotify.com/v1/artists/3q7HBObVc0L8jNeTe5Gofh/top-tracks?market=US', IMG : 'img/IMG_50-Cent.jpg'}
]

let TOKEN = await generarTOKEN()
let resultado = await consumirAPI(artistas[0].URI, TOKEN)
let imagen = document.getElementById('imagen')
let botones = document.querySelectorAll(".dropdown-item")
botones.forEach((boton,index)=>{
    boton.addEventListener("click", async function(){
        fila.innerHTML = ""
        resultado = await consumirAPI(artistas[index].URI, TOKEN)
        imagen.src = artistas[index].IMG
        pintarCanciones(resultado)
    })
})

// let search = document.getElementById("search")
// search.addEventListener("click", function (){
//     artistas.forEach((artista)=>{
//         if(artista.URI=="https://api.spotify.com/v1/artists/1wZtkThiXbVNtj6hee6dz9/top-tracks?market=US"){
            
//         }
//     })
// })




