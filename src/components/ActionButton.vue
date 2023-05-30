<template>
    <button @click="onPressed" class="action">{{title}}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Кнопка',
        },
    },
    methods: {
        onPressed() {
            this.$emit('on-pressed');
        }
    }
}
</script>

<style scoped lang="scss">
.action {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: #e11a1a;
    color: #fff;
    font-size: 20px;
    border-radius: 10px 10px 0 0;
    -webkit-box-shadow: 0px -6px 29px 0px rgba(34, 60, 80, 0.27);
    -moz-box-shadow: 0px -6px 29px 0px rgba(34, 60, 80, 0.27);
    box-shadow: 0px -6px 29px 0px rgba(34, 60, 80, 0.27);
}
</style>