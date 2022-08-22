<template>
  <div class="main d-flex justify-content-center pt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <img src="./../assets/logopixel.png" style="float:left;width:200px;height:200px;" alt="">
          <h1>{{getLang.welcome}}</h1>
          <h3>{{getLang.bio}}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import json from '../lang/lang.json'
  export default {
    data() {
      return {
        counter: 0, 
        slide: 0,
        sliding: null,
        langFile:json
      }
    },
    computed: {
      getLang(){
        return this.langFile[this.$store.getters.getIdioma]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>