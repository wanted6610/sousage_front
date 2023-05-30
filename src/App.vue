<template>
  <div id="app">
    <div class="counter">
      <p class="counter__time">До окончания приема заказов осталось 10:00</p>
    </div>
    <div class="main">
      <StepOneVue 
        v-if="currentStep === 1"
        @change-step="changeCurrentStep" 
      />
      <StepTwoVue 
        v-if="currentStep === 2" 
      />
    </div>
  </div>
</template>

<script>
import StepOneVue from './components/StepOne.vue';
import StepTwoVue from './components/StepTwo.vue';

export default {
  name: 'App',
  data() {
    return {
      currentStep: 1,
    }
  },
  components: {
    StepOneVue,
    StepTwoVue,
  },
  methods: {
    changeCurrentStep(step) {
      this.currentStep = step;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

#app {
  background: #fff;
}

html,body, #app{
  height:100%!important;
}

.main {
  padding: 15px 15px 65px 15px;
}
.counter {
  background-color: #a9a9a9;
  padding: 10px;
  &__time {
    text-align: center;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
  }
}
</style>