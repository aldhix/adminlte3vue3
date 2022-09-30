<script>
export default {
    props:{
        title:{
            type:Object,
            default:()=>({})
        },
        badge:{
            type:Object,
            default:()=>({})
        },
        dropdownType:{
            type:String,
            default:'dropdown-sm'
        }
    }
}
</script>
<template>
    <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far" :class="title.icon" v-if="title.icon"></i> {{ title.name }}
          <span class="badge navbar-badge" :class="badge.type" v-if="badge.value">{{ badge.value }}</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right" :class="dropdownType" >
            <slot></slot>
        </div>
      </li>
</template>