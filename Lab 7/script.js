let animals = ["tiger", "lion", "dogs", "cats", "turtles", "chickens", "whales", "sharks"]

$(document).ready(function() {

    // Start your code from here
    crearBotones()

    $("#animal-buttons").on("click", ".animalButton", function(){ 
        $("#animals").empty() //Cada vez que demos click hay que vaciar el contenedor
        let search = $(this).attr("data-type") 
        let giphyURL = "https://api.giphy.com/v1/gifs/search?q="+ search+ "&api_key=C2KwCJO2s1RkJuWbtlzCjsgqN0n2FCvk&limit=10"
        //alert(giphyURL)
        $.ajax(
            {
                url: giphyURL
            })
        .then(function(response){
            //console.log(response)
            let results = response.data

            for(let i=0; i <results.length; i++){
                let divAnimal = $("<div class= 'animal-item'>")

                //Los siguientes datos los saco del json del api,los puedo savar haciendo console.log a la respuesta
                let rating = results[i].rating

                let p = $("<p>").text("Rating: " + rating)

                let animalImage =$("<img class='imagenAnimal'>")
                animalImage.attr("src", results[i].images.fixed_height_still.url) //Este url es para que las imágenes estén quietas

                //Agregar los atributos es muy útil, los data- convierten el atributo en una variable
                //Me faciliará demasiado para conseguir los links y así cambiar las imágenes a fijas o movibles
                animalImage.attr("data-still",  results[i].images.fixed_height_still.url)
                animalImage.attr("data-animals",  results[i].images.fixed_height.url)
                animalImage.attr("data-state", "still")


                divAnimal.append(p)
                divAnimal.append(animalImage)

                $("#animals").append(divAnimal)
                
            }
        }

        )
    })

    let contador = 1

    $("#animals").on("click", ".imagenAnimal", function(){
        //alert("Click en imagen")
        contador++
        let imagenAnimada = $(this).attr("data-animals")
        let imagenFija = $(this).attr("data-still")
        if(contador%2 == 0){
            $(this).attr("data-state", "moving")
            $(this).attr("src", imagenAnimada)
            
        }
        else{
            $(this).attr("data-state", "still")
            $(this).attr("src", imagenFija)
        }
        
    })

    $("#animal-form").on("click", "#add-animal", function(event){
        event.preventDefault()
        let input = $("#animal-input").val()
        /*
        let nuevoBoton = $("<boton>")
        nuevoBoton.addClass("animalButton")
        nuevoBoton.attr("data-type", input)
        nuevoBoton.text(input)
        $("#animal-buttons").append(nuevoBoton)
        */
        animals.push(input)
        crearBotones()

    })
    
    });

    function crearBotones(){ 
        $("#animal-buttons").empty() //Con esto limpio los botones y los vuelvo a generar con los nuevos que agrego en la función de arriba
        for(let i=0; i<animals.length; i++){
            let animal_button = $("<button>")
            animal_button.addClass("animalButton")
            animal_button.attr("data-type", animals[i])
            animal_button.text(animals[i])
            //let animal_button = $(`<button class='animalButton'>${animals[i]}</button>`)
            $("#animal-buttons").append(animal_button)
        }
    }
    
