// Script.js

window.addEventListener('DOMContentLoaded', () => {

  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(obj => {
      window.localStorage.setItem(obj.id + "", JSON.stringify(obj));
      if (localStorage.getItem("cart"+obj.id) === null) {
        window.localStorage.setItem("cart"+obj.id,'0');
      }
    });
  });
  for (var i = 1; i <= localStorage.length/2; i++ ){
    var item = new ProductItem();
    var itemData = JSON.parse(window.localStorage.getItem(i));
    item.shadowRoot.querySelector('img').setAttribute('src',itemData['image']);
    item.shadowRoot.querySelector('img').setAttribute('alt',itemData['title']);
    item.shadowRoot.querySelector('.title').textContent = itemData['title'];
    item.shadowRoot.querySelector('.price').textContent=itemData['price'];
    item.shadowRoot.querySelector('button').productID = itemData.id;

    if (localStorage.getItem("cart"+itemData.id) == '1'){
      item.shadowRoot.querySelector('button').state = 'Remove';
      document.getElementById("cart-count").textContent++;
      item.shadowRoot.querySelector('button').setAttribute('onclick', "alert('Removed from Cart!')");
      item.shadowRoot.querySelector('button').textContent = 'Remove from Cart';
    } 
    else if (localStorage.getItem("cart"+itemData.id) == '0'){
      item.shadowRoot.querySelector('button').state = 'Add';
      item.shadowRoot.querySelector('button').setAttribute('onclick', "alert('Added to Cart!')");
      item.shadowRoot.querySelector('button').textContent = 'Add to Cart';
    }
    document.getElementById("product-list").appendChild(item);
  }
});




    
