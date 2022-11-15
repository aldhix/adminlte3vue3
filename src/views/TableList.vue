<script>
import ContentWraper from "../components/ContentWraper.vue";
import user from "./example_data/user";
import TableList from "../components/TableList.vue";
import PageList from "../components/PageList.vue"
import PageInfo from '../components/PageInfo.vue';
export default {
  components: {
    ContentWraper,
    TableList,
    PageList,
    PageInfo,
  },
  beforeMount(){
    this.getData();
  },
  data() {
    return {
      resData: {},
    };
  },
  methods: {
    getData() {
      this.resData = user;
    },
  },
};
</script>
<template>
  <content-wraper :title="{ name: 'Table List', icon: 'fas fa-list' }">
    <div class="card">
      <div class="card-body p-0">
        <table-list class="table-sm">
            <thead class="mb-0">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
           <tbody>
                <tr v-for="(row, i) in resData.data" :key="i">
                    <td>{{ row.id }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.email }}</td>
                </tr>
           </tbody>
        </table-list>
      </div>
      <div class="card-footer d-flex">
            <page-info :data-page="resData" />
            <page-list class="pagination-sm" @clickpage="getData" :data-page="resData" />
      </div>
    </div>
  </content-wraper>
</template>
