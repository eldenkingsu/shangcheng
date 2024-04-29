// app.js
Vue.component('product-list', {
  props: ['products'],
  template: `
    <div>
      <h2>Products</h2>
      <div v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="$emit('add-to-cart', product)">Add to Cart</button>
      </div>
    </div>
  `
});

Vue.component('cart', {
  props: ['cart'],
  template: `
    <div>
      <h2>Cart</h2>
      <div v-for="item in cart" :key="item.id">
        {{ item.name }} - {{ item.quantity }}
      </div>
    </div>
  `
});

new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 }
    ],
    cart: []
  },
  methods: {
    addToCart(product) {
      let found = this.cart.find(item => item.id === product.id);
      if (found) {
        found.quantity++;
      } else {
        this.cart.push({...product, quantity: 1});
      }
    }
  }
});
