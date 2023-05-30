<template>
 <div class="step">
    <h1 class="step__title">Привет, Вася!</h1>
    <p class="step__desc">готов сделать заказ?</p>
    <products-list />
    <action-button
        title="Оформить заказ"
        @on-pressed="changeStep"
    />
 </div>
</template>

<script>
import ActionButton from './ActionButton.vue'
import ProductsList from './ProductsList.vue'
export default {
  components: { ActionButton, ProductsList },
    name: 'StepOne',
    methods: {
        changeStep() {
            this.$emit('change-step', 2);
        }
    }
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