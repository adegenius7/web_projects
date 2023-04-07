let count = 0
let saveStr = document.getElementById("ent-el")

function increase() {
    count += 1
    document.getElementById("count-el").innerText = count
}
let welcome = document.getElementById("welcome-el")
let namE = "Adewole"
let greeting = "You are Welcome"
welcome.innerText = namE + ", " + greeting

function save() {
    let dash = count + " - "
    saveStr.innerText += dash
    
    console.log(count)
}



