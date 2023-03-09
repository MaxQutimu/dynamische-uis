
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
    Input = prompt("Goede dag serveerster vandaag mijn naam is Hugo \n ,Wat wilt u bestellen? \n Onze assortiment bestaat uit : \n Bier 4,50€ p.st \n Wijn 80,50€ per vles \n fris 2,25€ p.st ").toLowerCase();
    if (Input in inventory){
        InputAmount = parseInt(prompt("Hoeveel vlessen van" + Input + "wilt u? "))
        inventory[Input].amount += InputAmount
    }
    else if(Input in ["stop","niks","dat was alles","niks meer"]){
        var Loop = false
        alert("Bedankt voor uw bestellingen na het eten / drinken zal uw bonnetje ontvangen")
    }
    else{
        alert("het spijt me deze hebben we niet op voorad")
    }
}
var bon = ("Uw bonnetje") 
document.getElementById('result').innerHTML=bon;