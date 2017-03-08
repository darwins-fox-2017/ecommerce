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
        console.log('ini data ', data);
        app.items = (data.data)
      })
      .catch(function(error) {
        console.log(error);
      })
    }
  }
})

app.getItems()
