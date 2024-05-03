total = 0;
inum = document.getElementById("itemNB"); // item counter on add-to-cart icon
c = 0; //item counter here in javascript
const addToCard = (btn, e) => {
    if (btn.innerHTML !== "added!"){
        btn.innerHTML = "added!";
        total += e;
        document.getElementById("subtotal").innerHTML = total;
        c++; // increment by 1
        inum.innerHTML = c; // subtotal = counter
    }else{
        btn.innerHTML = "add to cart";
        total -= e;
        c = c - 1;
        inum.innerHTML = c;
        document.getElementById("subtotal").innerHTML = total;
    }
}

