function button_clicked(event){
    var element = document.getElementById('container')
    document.getElementById('container').className = ""
    var clas = this.id.replace("button","nummer")
    element.classList.add(clas)
    this.value = parseInt(this.value) +1
    buttons = document.querySelectorAll('input')
    for (button of buttons){
        button.disabled = false
    }
    this.disabled = true
}


button1.onclick = button_clicked
button2.onclick = button_clicked
button3.onclick = button_clicked
