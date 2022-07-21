var products, ids, shopping_cart, item, product;


products = ['bread', 'cheese', 'milk', 'tea', 'coffee'];
ids = ['add-bread', 'add-cheese', 'add-milk', 'add-tea', 'add-coffee'];
shopping_cart = [];
let element_product_list = document.getElementById('product-list');
products.forEach((product) => {
    let new_li = document.createElement('li');
    new_li.innerText = product;
    new_li.setAttribute("id", product);

    element_product_list.appendChild(new_li);
    let new_button = document.createElement('button');
    new_button.innerText = 'Add To Shopping Cart';
    new_button.setAttribute("id", ids.shift());

    element_product_list.appendChild(new_button);
});


document.getElementById('add-bread').addEventListener('click', (event) => {
    shopping_cart.push('bread');
    let element_shopping_list = document.getElementById('shopping-list');
    element_shopping_list.replaceChildren();
    shopping_cart.forEach((item) => {
        let new_li2 = document.createElement('li');
        new_li2.innerText = item;

        element_shopping_list.appendChild(new_li2);
        let new_button2 = document.createElement('button');
        new_button2.setAttribute("id", 'remove-bread');
        new_button2.innerText = 'Remove From Shopping Cart';

        element_shopping_list.appendChild(new_button2);
    });

});

document.getElementById('remove-bread').addEventListener('click', (event) => {
    shopping_cart.pop();
    let element_shopping_list2 = document.getElementById('shopping-list');
    element_shopping_list2.replaceChildren();
    shopping_cart.forEach((item) => {
        let new_li3 = document.createElement('li');
        new_li3.innerText = item;

        element_shopping_list2.appendChild(new_li3);
        let new_button3 = document.createElement('button');
        new_button3.setAttribute("id", 'remove-bread');
        new_button3.innerText = 'Remove From Shopping Cart';

        element_shopping_list2.appendChild(new_button3);
    });

});

document.getElementById('show-array-button').addEventListener('click', (event) => {
    let element_show_array = document.getElementById('show-array');
    shopping_cart.forEach((item) => {
        let new_div = document.createElement('div');
        new_div.innerText = item;

        element_show_array.appendChild(new_div);
    });

});