<template>
    <comment :id="this.$route.params.id"></comment>
</template>
<script>
import comment from "../comment/comment.vue"
export default {
  components:{
      comment
  }
}
</script>
<style>

</style>
