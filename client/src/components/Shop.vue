<template>
<div class="">
    <el-button type="primary" @click.native="checkout">Checkout</el-button>
    <br/>
    <br/>

    <el-row :gutter="20">
        <el-col :span="16">
            <el-row :gutter="20">
                <el-col :span="8" v-for="item in items" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="http://destinasi-indonesia.com/wp-content/uploads/2016/08/Oleh-oleh-Belitung-Sirup-Jeruk-Kunci.jpg" class="image">
                        <div style="padding: 14px;">
                            <h3>{{ item.name }}</h3>
                            <div class="bottom clearfix">
                                <p>
                                    {{ item.description }}
                                </p>
                                <h3>{{ item.price }}</h3>
                                <el-button type="primary" class="button" @click.native="addToCart(item)">Add to cart</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px;">Shoping cart</span>
                    <el-button style="float: right;" type="primary">Purchase now</el-button>
                </div>
                <div v-for="item in cart" class="text item">
                      {{ item.name }} <span class="right">{{ item.price }}</span>
                </div>
                <div class="">
                  <span class="total title">Total</span> <span class="total right">{{ total }}</span>
                </div>
            </el-card>
        </el-col>
    </el-row>

</div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash'
import rupiah from 'rupiah-format'
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            items: [],
            cart: []
        }
    },
    created() {
        console.log('run');
        this.getItems()
    },
    computed: {
      total: function(){
        console.log('--------------------', rupiah.convert(_.sumBy(this.cart, 'price')));
        return rupiah.convert(_.sumBy(this.cart, 'price'))
      }
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
        addToCart(item){
          let newItem = item
          newItem.price = parseInt(item.price)
          this.cart.push(newItem)
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
.text {
  font-size: 14px;
}

.item {
  padding: 10px 0;
}

.total {
  font-size: 18px;
  font-weight: bold;

}

.right {
  float: right;
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
