<template>
  <div class="task task_4">
    <h2>Task 4</h2>
    <div class="products-list">
      <div class="products-list-item" v-for="product of products" :key="product.id">
        <span>#{{ product.id }}</span>
        <h4>{{ product.title }}</h4>
        <span>{{ product.sku }}</span>
        <img :src="product.image" alt="">
        <strong>Product options</strong>
        <ul>
          <li>Metal type: {{ product.options.metal_type }}</li>
          <li>Metal color: {{ product.options.metal_color }}</li>
          <li>Stone shape: {{ product.options.stone_shape }}</li>
          <li>Gemstone color: {{ product.options.gemstone_color }}</li>
        </ul>
        <b>{{ product.price }} {{ product.currency }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Taks_4',
  data: () => ({
    products: [],
  }),
  async created() {
    try {
      const res = await fetch('http://54.39.188.42/');
      const list = await res.text();
      this.products = JSON.parse(atob(list)).map(product => ({
        ...product,
        price: Math.floor(product.price).toFixed(2),
        options: product.options[0],
      }));
    } catch (e) {
      console.error(`Fetch failed with error: ${e.message}`);
    }
  },
}
</script>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.products-list-item {
  width: calc(100% / 2 - 12px);
  min-width: 270px;
  margin-bottom: 24px;
  padding: 12px;
  border: 1px solid #dee2e6;
  box-sizing: border-box;
  text-align: center;
}

.products-list-item h4 {
  margin: 0;
  font-weight: normal;
}

.products-list-item img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
}

.products-list-item strong {
  text-transform: uppercase;
}

.products-list-item ul {
  padding: 0;
  list-style-type: none;
  text-align: left;
}

.products-list-item b {
  font-size: 18px;
}
</style>
