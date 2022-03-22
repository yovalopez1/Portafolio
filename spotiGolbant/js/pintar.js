export function pintarCanciones(resultado){

    resultado.tracks.forEach(tracks => {
            
        let base = document.getElementById("base")
        let columna = document.createElement("div")
        columna.classList.add("card")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.src=tracks.album.images[0].url
        
        let nombrecancion=document.createElement("h2")

        nombrecancion.classList.add("fw-bold")
        nombrecancion.classList.add("text-center")
        nombrecancion.textContent=tracks.name

        let audio = document.createElement("audio")
        audio.src = tracks.preview_url
        audio.setAttribute("controls","controls")

        //padres e hijos

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombrecancion)
        tarjeta.appendChild(audio)

        columna.appendChild(tarjeta)
        base.appendChild(columna)

        console.log(tracks.name)
        console.log(tracks.preview_url)
        console.log(tracks.album.images[0].url)
    });
    
    // .catch(function(respuesta){ //mostrar el error de la promesa
    // console.log("Upsss..."+respuesta)
    // })

    // FUNCION PINTAR
    // Funcion encargada de recorrer los datos y pintalos en pantalla
//     function pintarCanciones(tracks){
//         console.log('estamos pintando')
//         console.log(tracks)
//     }
}

    