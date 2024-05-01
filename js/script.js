total = 0;
inum = document.getElementById("itemNB");
c = 0;
const addToCard = (btn, e) => {
    if (btn.innerHTML !== "added!"){
        btn.innerHTML = "added!";
        total += e;
        document.getElementById("subtotal").innerHTML = total;
        c++;
        inum.innerHTML = c;
    }else{
        btn.innerHTML = "add to cart";
        total -= e;
        c = c - 1;
        inum.innerHTML = c;
        document.getElementById("subtotal").innerHTML = total;
    }
}