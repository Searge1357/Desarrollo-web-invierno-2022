//1. Obtener las referencias de los elementos a interactuar

let post = document.getElementById("buttonPost")
let clear = document.getElementById("buttonClear")
let mark = document.getElementById("buttonMark")
let del= document.getElementById("buttonDelete")


//2. Registrar el evento

post.addEventListener("click", todoPost)
clear.addEventListener("click", todoClear)
mark.addEventListener("click", todoMark)
del.addEventListener("click", todoDel)

function todoPost(e){
    e.preventDefault()
    let todo = document.getElementById("todoText").value //el value aplica para donde escribes algo
    let list = document.getElementById("todoList")

    let div = document.createElement("div") //Creo un div para que sea más fácil borrar cada elemento eindividual
    let input = document.createElement("input")
    let label = document.createElement("label")

    input.type = "checkbox" //le estoy agregando un atributo type con valor checkbox
    input.name = "todo"

    label.textContent = todo //aquí le pongo el contenido

    div.appendChild(input)
    div.appendChild(label)
    list.appendChild(div) //Va a ser una lista de divs, y cada div tendrá un checkbox con el todo

}

function todoClear(){ //quita todas las check marks
    let todos = document.getElementsByName("todo")
    for(let i=0; i< todos.length; i++){
        todos[i].checked = false; 
    }
}

function todoMark(){
    let todos = document.getElementsByName("todo")
    for(let i=0; i< todos.length; i++){
        todos[i].checked = true; 
    }
}

function todoDel(){
    let todos = document.getElementsByName("todo")

    for(let i=0; i<todos.length; i++){
        if(todos[i].checked){
            todos[i].parentElement.remove() //el parent element es el div entones lo borra
            i = i -1
        }
    }
}