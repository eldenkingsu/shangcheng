<!-- index.html -->
<div id="app">
  <product-list :products="products" @add-to-cart="addToCart"></product-list>
  <cart :cart="cart"></cart>
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script src="app.js"></script>
