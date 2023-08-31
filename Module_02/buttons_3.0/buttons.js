

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
    BtnId = clicked_id
    console.log(BtnId)
    if (BtnId.classList.contains("ButtonClass0")){
        console.log("it works")
    // this.classList.replace("ButtonClass0","ButtonClass1");
    }
    else{
        console.log("nope")
    }
}


