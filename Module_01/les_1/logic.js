console.log('nu zitten we in andere file');

function clicked_button(event){
    console.log('clicked button');
    var name = prompt('Wat is je naam?');
    var div = document.getElementById('result');
    
    div.innerHTML = 'Hallo vanuit de button....' + name;
    div.classList.toggle('clicked')
}
function hover_button(event){
    console.log('nu ga ik met de muis over de button');
    
}
button = document.getElementById('start')
button.onlick = clicked_button
button.onmouseover = hover_button;
//console.dir(button);
//clicked_button(1);