<template>
    <div>
        首页
    </div>
</template>

<script>
import {bkData} from '@/mock/homeData.js'
export default {
  name: 'index',
  created() {
    bkData().then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
    
</style>