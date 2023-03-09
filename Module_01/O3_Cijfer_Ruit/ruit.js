function diamond(number) {
    line='';
    for(i=1;i<=number;i++) {
        for(j=1;j<=i;j++) {
            if(j == 1)
                line +='<br>'+ j;
            else
                line+='-'+j;
            }
            
            }
    for(i=number-1;i>=1;i--) {
        for(j=1;j<=i;j++) {
            if(j == 1)
                line +='<br>'+ j;
            else
                line+='-'+j;
            }
    }
    document.getElementById('result').innerHTML=line;
    }