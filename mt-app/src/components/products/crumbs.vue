<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
    <el-breadcrumb-item>{{$store.state.position.name}}美团</el-breadcrumb-item>
    <el-breadcrumb-item>{{$store.state.position.name}}{{$route.params.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template> 

<script>
export default {

}
</script>

<style lang="scss">
    
</style>