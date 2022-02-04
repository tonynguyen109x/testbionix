const state = () => ({
    all: [
        {
            id: 'novel-bunch',
            name: 'Novel Bunch',
            price: 455.00,
            oldPrice: 459.99,
            sale: false,
            image: require('~/assets/images/shop/shop-1.jpg'),
            imageHover: require('~/assets/images/shop/shop-1-1.jpg'),
        },
        {
            id: 'book-chicks',
            name: 'Book Chicks',
            price: 541.00,
            oldPrice: 540.99,
            sale: true,
            image: require('~/assets/images/shop/shop-2.jpg'),
            imageHover: require('~/assets/images/shop/shop-2-1.jpg'),
        },
        {
            id: 'book-divas',
            name: 'Book Divas',
            price: 140.00,
            oldPrice: 149.99,
            sale: false,
            image: require('~/assets/images/shop/shop-3.jpg'),
            imageHover: require('~/assets/images/shop/shop-3-1.jpg'),
        },
        {
            id: 'book-smart',
            name: 'Book Smart',
            price: 180.00,
            oldPrice: 199.99,
            sale: false,
            image: require('~/assets/images/shop/shop-4.jpg'),
            imageHover: require('~/assets/images/shop/shop-4-1.jpg'),
        },
        {
            id: 'book-broads',
            name: 'Book Broads',
            price: 180.00,
            oldPrice: 199.99,
            sale: false,
            image: require('~/assets/images/shop/shop-5.jpg'),
            imageHover: require('~/assets/images/shop/shop-5-1.jpg'),
        },
        {
            id: 'page-turners',
            name: 'Page Turners',
            price: 200.00,
            oldPrice: 219.99,
            sale: false,
            image: require('~/assets/images/shop/shop-6.jpg'),
            imageHover: require('~/assets/images/shop/shop-6-1.jpg'),
        },
    ]
})

export default {
    state
};