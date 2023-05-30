<template>
  <div class="list">
    <div class="grid">
        <div class="column"
            v-for="product in products"
            :key="product.id"
        >
            <product-item :product="product" />
        </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import {productsMixin} from '@/mixins/products';

export default {
  components: { ProductItem },
  mixins: [productsMixin],

}
</script>

<style scoped lang="scss">
.list {
    margin-top: 15px;
}
.grid {
    display: grid;
    grid-template-columns: calc(50% - 7.5px) calc(50% - 7.5px);
    column-gap: 15px;
    row-gap: 15px;
}
.column {
    display: flex;
}
</style>