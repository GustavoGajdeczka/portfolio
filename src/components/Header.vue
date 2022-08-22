<template>
  <div>
    <nav class="navbar">
      <div class="frameworks">
        <button type="button" class="btn py-1" v-on:click="changeFramework('vue')">
          <img alt="Vue" src="../assets/vue.svg"/>
        </button>
        <button type="button" class="btn py-1">
          <img alt="React" src="../assets/react.svg" v-on:click="changeFramework('react')"/>
        </button>
      </div>
      <div class="idiomas mx-2">
        <button type="button" class="btn py-1" v-on:click="changeLanguage('pt-BR')">
          BR
          <img alt="United States" src="../assets/BR.svg"/>
        </button>
        <button type="button" class="btn py-1" v-on:click="changeLanguage('en-US')">
          EN
          <img alt="United States" src="../assets/US.svg"/>
        </button>
        <button type="button" class="btn py-1" v-on:click="changeLanguage('de-DE')">
          DE
          <img alt="United States" src="../assets/DE.svg"/>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    
  },
  methods: {
    changeLanguage(language){
      this.$store.dispatch('setarIdioma', language)
    },
    changeFramework(framework){
      this.$store.dispatch('setarFramework', framework)
    }
  }
}
</script>

<style>

</style>