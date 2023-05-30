<template>
 <div class="step">
    <products-list />
 </div>
</template>

<script>
import ProductsList from './ProductsList.vue'
export default {
  components: { ProductsList },
    name: 'StepOne',
}
</script>

<style scoped lang="scss">
.step {
    color: #2b2b2b;
    text-align: center;
    &__title {

        font-size: 30px;
    }
    &__desc {
        font-size: 16px;
        margin-top: 5px;
    }
}
</style>