(function AE1_4(){
    var numero1 = 5;
    var numero2 = 8; 

    if(numero2>numero1){
        console.log("numero1 no es mayor que numero2"); 
    }

    if(numero2>0){
        console.log("numero2 es positivo"); 
    }

    if(numero1<0 || numero1!=0){
        console.log("numero1 es negativo o distinto de cero"); 
    }

    if(numero1 < (numero2-1)){
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que el numero2"); 
    }
    
})();