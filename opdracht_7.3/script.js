clicks = 0;

function add(){
    clicks += 1;
    document.getElementById("number").innerHTML = clicks;

    if (clicks > 9){
        clicks = "";
    }
}

