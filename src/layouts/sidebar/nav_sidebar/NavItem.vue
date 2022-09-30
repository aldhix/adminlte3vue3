<script>
export default {
    props:{
        title:{
            type:Object,
            default:()=>({})
        },
        to:{
            type:[Object, String],
            default:null,
        },
        subPath:{
            type:[Array, String],
            default:null
        }
    },
    methods:{
        active(){
            let name_route = this.$route.name;
            let path = this.$route.path;
            let subExists = this.subPath ? this.subPath.includes(name_route) : false;
            if (typeof this.to === 'object'){
                return this.to.name === name_route ? true : subExists;
            } else {
                return this.to === path ? true : subExists;
            }
        }
    }
}
</script>
<template>
  <li class="nav-item">
    <router-link :to="to" class="nav-link" :class="{ active : active() }">
      <i class="nav-icon" :class="title.icon" v-if="title.icon"></i>
      <p>
        {{ title.name }}
      </p>
    </router-link>
  </li>
</template>
