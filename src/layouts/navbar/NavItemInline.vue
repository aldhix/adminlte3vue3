<script>
export default {
    props:{
        title:{
            type:Object,
            default:()=>({})
        },
        to:{
            type:[Object,String],
            default:null
        }
    }
};
</script>
<template>
  <li class="nav-item d-none d-sm-inline-block">
    <router-link :to="to" class="nav-link">{{ title.name }}</router-link>
  </li>
</template>
