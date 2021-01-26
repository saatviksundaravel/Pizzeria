pizzaMenu=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Extravaganza Pizza","Veg Supreme Pizza"];

function getMenu(){
    var menu="<ol class='menulist'>";
    for(i=0;i<pizzaMenu.length;i++){
        menu=menu+"<li>"+pizzaMenu[i]+"</li>"
    }
    menu=menu+"</ol>"
    document.getElementById("dynamic_menu_div").innerHTML=menu;
}

function add_item(){
    var menu;
    var item=document.getElementById("add_item").value;
    pizzaMenu.push(item);
    pizzaMenu.sort();
    menu="<section class='cards'>"
    for(var i=0;i<pizzaMenu.length;i++){
        menu=menu+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+pizzaMenu[i]+'</div>'
    }
    menu=menu+"</section>"
    document.getElementById("display_addedmenu").innerHTML=menu;
}