<script setup>
import { onMounted } from 'vue'
import { ElButton } from 'element-plus'
import API from './apis/index'

onMounted(() => {
  console.log('onMounted')
  API.getAppList()
})
// 函数
function log() {
  console.log('222')
}

</script>

<template>
  <el-button type="primary" @click="log"> 我是 ElButton </el-button>
</template>

<style>
</style>
