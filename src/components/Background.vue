<template>
  <div class="bg1">
    <img ref="bgImage" src="./../assets/bg1.png">
  </div>
  <div class="birds">
    <div class="bird-container bird-container--one">
      <div class="bird bird--one"></div>
    </div>
    <div class="bird-container bird-container--two">
      <div class="bird bird--two"></div>
    </div>
  </div>
  <div id="sun" ref="sun"></div>
  <div id="sunDay" ref="sunDay"></div>
  <div id="sunSet" ref="sunSet"></div>
  <div id="sky" ref="sky"></div>
  <div id="moon" ref="moon"></div>
  <div id="darknessOverlay" ref="darknessOverlay"></div>
</template>

<script>
export default {
  data(){
    return {
      x: 0,
      y: 0,
      viewportHeight: 1,
      viewportWidth: 1,
      myWidth: 0,
      myHeight: 0
    }
  },
  created () {
    this.updateViewportSize()
  },

  mounted () {
    document.addEventListener('mousemove', this.onMouseMove)
    window.addEventListener('resize', this.updateViewportSize)
  },
  unmounted () {
    document.removeEventListener('mousemove', this.onMouseMove)
    window.removeEventListener('resize', this.updateViewportSize)
  },

  computed: {
    
  },
  methods:{
    onMouseMove (ev) {
      this.x = ev.clientX
      this.y = ev.clientY
      console.clear()
      console.log("x", this.x)
      console.log("y", this.y)
      console.log("viewY", this.viewportWidth)
      console.log("viexX", this.viewportHeight)


      this.$refs.sun.style.background = '-webkit-radial-gradient(' + this.x + 'px ' + this.y + 'px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)';

      this.$refs.sunDay.style.background = '-webkit-radial-gradient(' + this.x + 'px ' + this.y + 'px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)';

      this.$refs.sunSet.style.background = '-webkit-radial-gradient(' + this.x + 'px ' + this.y + 'px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)';

      this.$refs.darknessOverlay.style.opacity = Math.min((this.y-((this.viewportHeight/10)*9.5)), 1);
      this.$refs.moon.style.opacity = Math.min((this.y-(this.viewportHeight*9/10)) / (this.viewportHeight-(this.viewportHeight*9/10)), 0.65);

      this.$refs.sunDay.style.opacity = (1 - this.y/this.viewportHeight);
      this.$refs.sky.style.opacity = Math.min((1 - this.y/this.viewportHeight), 0.99);
      this.$refs.sunSet.style.opacity = (this.y / this.viewportHeight - 0.5);

      if(this.y > this.viewportHeight/2){
        this.$refs.sun.style.opacity = Math.min((this.viewportHeight-this.y) / (this.viewportHeight/2) + 0.2, 0.5);
        this.$refs.bgImage.style.filter = `grayscale(${Math.min(((this.y / (this.viewportHeight/2) - 1)) * 100)}%)`
        console.log("viewport: ", Math.min(((this.y / (this.viewportHeight/2) - 1)) * 100))
      }else{
        this.$refs.sun.style.opacity = Math.min(this.y / (this.viewportHeight/2), 0.2);
        this.$refs.bgImage.style.filter = "grayscale(0%)"
      }
    },

    updateViewportSize () {
      this.viewportHeight = window.innerHeight
      this.viewportWidth = window.innerWidth
    }
  }
}
</script>

<style>

</style>