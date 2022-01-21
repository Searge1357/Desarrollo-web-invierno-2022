$(".agregar").on("click", function(event){
    event.preventDefault()
    let producto = $("#newText").val() /*Val aplica para inputs*/ 
    let div = $("<div class='caja'>")
    div.html(`
        <p class="producto">${producto}</p>
        <button class="check">check</button>
        <button class="delete">delete</button>
    `)
    $(".Lista").append(div) 
})


$(".Lista").on("click", ".check", function(event){
    event.preventDefault()
    $(this).prev().toggleClass("ProductoDelineado")
    //toggleClass agrega la clase si no existe, y si existe la quita
})

$(".Lista").on("click", ".delete", function(event){
    event.preventDefault()
    $(this).parent().remove()
})

