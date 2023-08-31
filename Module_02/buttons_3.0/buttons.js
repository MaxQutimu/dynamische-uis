

function CreateButton(amount){
    BtnNumber = 0
    amount = amount / 5
    for(let i = 0; i< amount; i++){
        let NewDiv = document.createElement('Div');
        document.querySelector('#container').appendChild(NewDiv);
        NewDiv.classList.add("col-3")
        NewDiv.setAttribute("id",i)
        for(let l = 0; l< 5; l++){
        let NewBtn = document.createElement('button');
        BtnNumber += 1
        NewBtn.innerText=BtnNumber;
        document.getElementById(i).appendChild(NewBtn);
        NewBtn.setAttribute("id","Btn" + BtnNumber)
        NewBtn.classList.add("ButtonClass0")
        NewBtn.setAttribute("onclick","BtnClicked(this.id)")
        
        }
  }}
function BtnClicked(clicked_id){
    var BtnId = document.getElementById(clicked_id);
    if(BtnId.classList.contains("ButtonClass0")){
        BtnId.classList.replace("ButtonClass0","ButtonClass1");}
    else if (BtnId.classList.contains("ButtonClass1")){
        BtnId.classList.replace("ButtonClass1","ButtonClass2");}
    else if (BtnId.classList.contains("ButtonClass2")){
        BtnId.classList.replace("ButtonClass2","ButtonClass3");}
    else if (BtnId.classList.contains("ButtonClass3")){
        BtnId.classList.replace("ButtonClass3","ButtonClass4");}
    else if (BtnId.classList.contains("ButtonClass4")){
        BtnId.remove();
    }
}


