<template>
<div id="app">

    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Buah Tangan Dashboard</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Items
</template>
    <el-menu-item index="2-1">Show All</el-menu-item>
    <el-menu-item index="2-2">Create</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">Orders</el-menu-item>
</el-menu>

    <!-- <img src="./assets/logo.png"> -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <el-button @click.native="startHacking">Let's do it</el-button> -->
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="Price"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="Description">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            msg: 'Pakai Vue 2.0 sekarang!',
            activeIndex: '1',
            activeIndex2: '1',
            items: []
        }
    },
    created() {
      console.log('run');
      let self = this;
      let host = 'http://localhost:3000';
        axios.get(host + '/api/items')
            .then(response => {
                // JSON responses are automatically parsed.
                console.log(response);
                console.log(this);
                console.log(self);

                self.items = response.data
            })
            .catch(e => {
                console.log(e);
            })
    },

    methods: {
        getItems() {

        },
        startHacking() {
            this.$notify({
                title: 'It Works',
                message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                duration: 6000
            })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
