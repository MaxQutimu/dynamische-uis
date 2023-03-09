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
    input = prompt("Wat wilt u bestellen? \n Onze assortiment bestaat uit : \n Bier 4,50€ p.st \n Wijn 80,50€ per vles \n fris 2,25€ p.st ").toLowerCase();
    if (input in inventory){
        amount = parseInt(prompt(""))
    }
}