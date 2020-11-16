<template>
  <div>
      我是slot作用域插槽
      <slot :data="data"></slot>
  </div>
</template>

<script>
export default {
    data(){
        return {
            data:"Ffff"
        }
    }
}
</script>

<style>

</style>