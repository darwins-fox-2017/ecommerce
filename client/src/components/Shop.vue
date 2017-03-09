<template>
<div class="">
    <el-button type="primary" @click.native="checkout">Checkout</el-button>
    <br/>
    <br/>
    <el-row>
  <el-col :span="8" v-for="item in items" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://destinasi-indonesia.com/wp-content/uploads/2016/08/Oleh-oleh-Belitung-Sirup-Jeruk-Kunci.jpg" class="image">
      <div style="padding: 14px;">
        <span>{{ item.name }}</span>
        <div class="bottom clearfix">
          <p>
            {{ item.description }}
          </p>
          <h3>Rp. {{ item.price }}</h3>
          <el-button type="primary" class="button" >Add to cart</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            items: []
        }
    },
    created() {
        console.log('run');
        this.getItems()
    },

    methods: {
        getItems() {
            let self = this;
            axios.get(host + '/items')
                .then(response => {
                    // JSON responses are automatically parsed.
                    self.items = response.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        addItem() {
            this.$router.push('/items/new')
        },
        handleDelete(index, row) {
            this.items.slice(index, 1)
            let self = this
            axios.delete(host + '/items/' + row.id).then(response => {
                console.log(response);
                if (response.status) {
                    self.getItems()
                } else {
                    self.$notify({
                        title: 'Error',
                        message: 'Something wrong while trying to delete this item',
                        duration: 6000
                    })
                }
            })
        },
        handleEdit(index, row) {
            this.$router.push('/items/' + row.id + '/edit')
        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>
.image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
