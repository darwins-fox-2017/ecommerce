<template>
  <el-table
    :data="items"
    :default-sort = "{prop: 'name', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="name"
      label="Name"
      sortable
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
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
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

        formatter(row, column) {
            return row.address;
        }
    }
}
</script>

<style>
</style>
