let count = 0
let countel = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

function increment() {
    count++
    countel.innerText = count
}


function save() {
    console.log(count)
    let countstr = count + " - "
    // saveEl.innerText += " " + count + " - "
    saveEl.textContent += countstr
    count = 0
    countel.innerText = count
}