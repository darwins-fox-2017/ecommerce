var app = new Vue({
  el: '#app',
  data:{
    name: '',
    description: '',
    price: '',
    rate: '',
    image: '',
    items: []
  },
  methods:{
    getItems: function() {
      axios.get('http://localhost:3000/api/items')
      .then(function(data) {
        app.items = (data.data)
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    addToCart: function (id,pic,name,price) {
      var item;
      if(localStorage.getItem(id)){
        var barang = JSON.parse(localStorage.getItem(id))
        barang.qty ++
        item = {
          "id": id,
          "pic": pic,
          "name": name,
          "price": price,
          "qty": barang.qty,
          "total": barang.qty * price
        }
        localStorage.setItem(id, JSON.stringify(item))
        app2.carts.push(item)
      }else {
        item = {
          "id": "cart"+id,
          "pic": pic,
          "name": name,
          "price": price,
          "qty": 1,
          "total": price
        }
        localStorage.setItem(id, JSON.stringify(item))
        app2.carts.push(item)
      }
    }
  }
})

var app2 = new Vue({
  el: '#cart',
  data:{
    carts : []
  }
})
app.getItems()
