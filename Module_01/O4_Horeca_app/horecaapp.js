
alert("Welkom in michelin star restaurant ")

var Loop = true
var inventory = {"bier":{name: "bier",
                        price: 4.50,
                        amount: 0},
                 "wijn":{name: "wijn",
                         price: 80.50,
                         amount: 0},
                 "fris":{name: "fris",
                         price: 2.25,
                         amount: 0}}

while (Loop){
    Input = prompt("Goede dag serveerster vandaag mijn naam is Hugo \n Wat wilt u bestellen? \n Onze assortiment bestaat uit : \n Bier 4,50€ p.st \n Wijn 80,50€ per vles \n Fris 2,25€ p.st ").toLowerCase();
    if (Input in inventory){
        InputAmount = parseInt(prompt("Hoeveel vlessen van " + Input + " wilt u? "))
        inventory[Input].amount += InputAmount
    }
    else if(Input == "stop"){
        var Loop = false
        alert("Bedankt voor uw bestellingen, na het eten / drinken zal uw bonnetje ontvangen")
    }
    else{
        alert("het spijt me deze hebben we niet op voorad")
    }
}
function bonnetje2(inventory){
    var bon = ("Uw bonnetje") 
    var bier1  = ("Bier 4,50 € ") + inventory.bier.amount + "x = " + (inventory.bier.amount * inventory.bier.price).toFixed(2) + "€"
    var wijn1 = ("Wijn 80,50€ ") + inventory.wijn.amount + "x = " + (inventory.wijn.amount * inventory.wijn.price).toFixed(2) + "€" 
    var fris1 = ("Fris 2,25€ ") + inventory.fris.amount + "x  = " + (inventory.fris.amount * inventory.fris.price).toFixed(2) + "€"
    var totaal1 = ("Uw totaal is : ") + (inventory.fris.amount * inventory.fris.price + inventory.wijn.amount * inventory.wijn.price + inventory.bier.amount * inventory.bier.price).toFixed(2) + (" €")
    document.getElementById('result').innerHTML=bon;
    if (inventory.bier.amount != 0){
        document.getElementById('bier').innerHTML=bier1;}
    if (inventory.wijn.amount != 0){
        document.getElementById('wijn').innerHTML=wijn1;}

    if (inventory.fris.amount != 0){ 
    document.getElementById('fris').innerHTML=fris1;}
    document.getElementById('totaal').innerHTML=totaal1;
    document.getElementById("button").style.visibility="hidden";

}