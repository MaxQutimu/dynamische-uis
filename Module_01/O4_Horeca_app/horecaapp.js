
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
    Input = prompt("Goede dag serveerster vandaag mijn naam is Hugo \n Wat wilt u bestellen? \n Onze assortiment bestaat uit : \n Bier 4,50€ p.st \n Wijn 80,50€ per vles \n fris 2,25€ p.st ").toLowerCase();
    if (Input in inventory){
        InputAmount = parseInt(prompt("Hoeveel vlessen van" + Input + "wilt u? "))
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
var bon = ("Uw bonnetje") 
var bier = ("Bier 4,50 € ") + inventory.bier.amount + "x = " + Math.round(inventory.bier.amount * inventory.bier.price) + "€"
var wijn = ("Wijn 80,50€ ") + inventory.wijn.amount + "x = " + Math.round(inventory.wijn.amount * inventory.wijn.price) + "€" 
var fris = ("Fris 2,25€ ") + inventory.fris.amount + "x  = " + Math.round(inventory.fris.amount * inventory.fris.price) + "€"
var totaal = ("uw totaal is : ") + Math.round(inventory.fris.amount * inventory.fris.price + inventory.wijn.amount * inventory.wijn.price + inventory.bier.amount * inventory.bier.price) + (" €")
document.getElementById('result').innerHTML=bon;
if (inventory.bier.amount != 0){
    document.getElementById('bier').innerHTML=bier;}
if (inventory.wijn.amount != 0){
    document.getElementById('wijn').innerHTML=wijn;}

if (inventory.fris.amount != 0){ 
document.getElementById('fris').innerHTML=fris;}
document.getElementById('totaal').innerHTML=totaal;