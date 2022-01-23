$("#Post").on("click", (event)=>{
    event.preventDefault()
    let newDiv = $("<div class='elementoLista'>") //Habrá un div para cada elemento de la lista
    let newProduct = $("#newTodo").val() //Obtengo el valor del input 

    newDiv.html(`<input type="checkbox" class="checkbox"><label>${newProduct}</label>`) //Le agrego esto al Div que creé
    $("#allTodos").append(newDiv) //Lo agrego a la lista de Todo
})

$("#clear").on("click", (event)=>{
    event.preventDefault()
    let listaClear = $(".checkbox")
    for(let i=0; i<listaClear.length; i++){
        listaClear[i].checked = false; 
    }
})

$("#mark").on("click", (event)=>{
    event.preventDefault()
    let listaClear = $(".checkbox")
    for(let i=0; i<listaClear.length; i++){
        listaClear[i].checked = true; 
    }
})

$("#delete").on("click", (event)=>{
    event.preventDefault()
    $(".elementoLista").remove() //Así remuevo todos 
})


