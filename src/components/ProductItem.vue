<template>
  <div class="product">
    <img class="product__image" :src="getImgUrl(product.image)" />
    <p class="product__title">{{product.name}}</p>
    <p class="product__desc">{{product.desc}}</p>
    <button class="product__button">В корзину</button>
  </div>
</template>

<script>
export default {
  props: {
        product: {
            type: Object,
            default: () => {},
        },
  },
  methods: {
      getImgUrl(pic) {
      return require('../assets/products/'+pic)
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  padding: 10px;
  border-radius: 15px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  text-align: left;
  display: flex;
  flex-direction: column;
  &__image {
    width: 100%;
  }
  &__title {
    font-weight: 400;
    font-size: 18px;
  }
  &__desc {
    font-size: 14px;
    margin-top: 10px;
    flex: 1;
  }
  &__button {
    margin-top: 15px;
    background: #e11a1a;
    color: #fff;
    height: 40px;
    border-radius: 10px;
  }

}
</style>