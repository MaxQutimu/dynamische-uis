function diamond(number) {
    line='';
    for(aantal=1;aantal<=number;aantal++) {
        for(nummer=1;nummer<=aantal;nummer++) {
            if(nummer == 1){
                line +='<br>'+ nummer;}
            else{
                line+='-'+nummer;}
            }}
    for(aantal=number-1;aantal>=1;aantal--) {
        for(nummer=1;nummer<=aantal;nummer++) {
            if(nummer == 1){
                line +='<br>'+ nummer;}
            else{
                line+='-'+nummer;}
            }}
    document.getElementById('result').innerHTML=line;
    }