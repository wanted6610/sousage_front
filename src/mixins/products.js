export const productsMixin = {
    data: function () {
        return {
            products: [
                {
                    name: 'Сосиска в тесте',
                    desc: 'Сочная сосиска, запеченная в хрустящем тесте',
                    image: 'sousage_preview.jpg',
                    price: 50,
                    id: 0,
                },
                {
                    name: 'Пицца',
                    desc: 'Суперзвезда итальянской кухни',
                    image: 'pizza_preview.jpg',
                    price: 50,
                    id: 1,
                },
            ],
        }
    },
}