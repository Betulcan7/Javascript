function add(){
    nummer1=parseInt(myform.nummer1.value);
    nummer2=parseInt(myform.nummer2.value);
    result=nummer1+nummer2
    myform.result.value=result;
    
    if(nummer1, nummer2 < 1){
        alert("Het getal is te laag!")
    }
}


function minus(){
    nummer1=parseInt(myform.nummer1.value);
    nummer2=parseInt(myform.nummer2.value);
    result=nummer1-nummer2
    myform.result.value=result;

    if(nummer1, nummer2 < 1){
        alert("Het getal is te laag!")
    }
}

function multiply(){
    nummer1=parseInt(myform.nummer1.value);
    nummer2=parseInt(myform.nummer2.value);
    result=nummer1*nummer2
    myform.result.value=result;

    if(nummer1, nummer2 < 1){
        alert("Het getal is te laag!")
    }
}

function devide(){
    nummer1=parseInt(myform.nummer1.value);
    nummer2=parseInt(myform.nummer2.value);
    result=nummer1/nummer2
    myform.result.value=result;
    
    if(nummer1, nummer2 < 1){
        alert("Het getal is te laag!")
    }
}

