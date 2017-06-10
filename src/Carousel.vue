<!-- ourtemplate -->
<template>
  <div id="hero">
      <carousel :autoplay="true" :navigationEnabled="true" :navigationClickTargetSize="20" :perPage="1">
        <slide>
          <img class="hero-image" src="./assets/adriel-kloppenburg-14831.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/paul-summers-42914.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/scott-webb-16783.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/adriel-kloppenburg-14831.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/paul-summers-42914.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/scott-webb-16783.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/adriel-kloppenburg-14831.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/paul-summers-42914.jpg">
        </slide>
        <slide>
          <img class="hero-image" src="./assets/scott-webb-16783.jpg">
        </slide>
      </carousel>
  </div>
</template>

<!-- ourscripts -->
<script></script>

<!-- ourstyles -->
<style lang="scss">

#hero {
  float: left;

  img {
    width: 100%;
    height: 100%;
    max-height: 750px;
  }

}

.VueCarousel {
  margin: 20px 80px 20px 80px;
}

.VueCarousel-navigation-button {
  font-size: 30px;
}

</style>
