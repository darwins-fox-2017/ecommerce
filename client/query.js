var app = new Vue({
    el: "#app",
    data: {
        items: []
        orderedItems: []
    },
    created() {
        this.getItems()
    },
    methods: {
        getItems() {
            axios.get('http://localhost:3000/')
                .then(function (response) {
                    this.app.items = response.data
                })
        },
        addItem: function (item) {
            this.orderedItems.push({
                price: item.price,
                qty: 1,
                itemCode: item.itemCode,
                name: item.name
            })
        },
        checkout: function () {
            axios.post('http://localhost:3000/cart', {
                    dataId: 1,
                    memberId: "KUCING",
                    total: 6000000,
                    transaction_date: new Date(),
                    itemList: "jacky"
                })
                .then(function (response) {
                    // console.log(response);
                    console.log(`data sudah dimasukkan`);
                })
                .catch(function (error) {
                    console.log(`data belum dimasukkan`);
                });
        }
    }
})
