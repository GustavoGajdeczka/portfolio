<template>
  <Header></Header>
  <Main></Main>
  <Background></Background>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/header.vue'
import Background from './components/Background.vue';
export default {
  components:{
    Main: Main,
    Header: Header,
    Background: Background
}
}
</script>

<style>

</style>