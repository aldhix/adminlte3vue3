<script>
import NavItem from "./NavItem.vue"
export default {
    components:{
        NavItem
    },
    props:{
        title:{
            type:Object,
            default:()=>({})
        },
        subMenu:{
            type:Array,
            default:()=>[],
        },
    },
    methods:{
        active(){
            for(let i=0; i<this.subMenu.length;i++){
                if (this.exists(this.subMenu[i])){
                    return true;
                }
            }
            return false;
        },
        exists(menu){
            let name_route = this.$route.name;
            let path = this.$route.path;
            let subExists = menu.subPath ? menu.subPath.includes(name_route) : false;
            if (typeof menu.to == 'object'){
                return menu.to.name == name_route ? true : subExists;
                
            } else {
                return menu.to == path ? true : subExists;
            }
        }
    }
}
</script>
<template>
  <li class="nav-item ">
    <a href="#" class="nav-link" :class="{ active : active() }">
      <i class="nav-icon" :class="title.icon" v-if="title.icon"></i>
      <p>
        {{ title.name }}
        <i class="right fas fa-angle-left"></i>
      </p>
    </a>
    <ul class="nav nav-treeview">
        <template v-for="(key, index) in subMenu" :key="index">
            <nav-item :title="{ name:key.name, icon:key.icon }" :to="key.to" :sub-path="key.subPath" />
        </template>
    </ul>
  </li>
</template>
