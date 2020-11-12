<template>
  <div class="home">
    <HelloWorld msg=""/>

    <div class="frontPageSplit">

  <div class="split left">
    <div class="centered">
      <img src="http://placecorgi.com/260/180" class="dog-img show" alt="friendly and intimate - man's best friend" />
      <h2 class="leftSide">WALKieZ</h2>
      <p class="leftSide">DOGieZ need a WALK</p>
      <button type="button" name="button">Need a helping hand with your dog? Create a Profile for your best-friend</button>
    </div>
  </div>

  <div class="split right">
    <div class="centered">
      <img src="https://images.freeimages.com/images/large-previews/923/our-friend-1239655.jpg">
      <h2>WALKerZ</h2>
      <p>I can WALK your DOGZ</p>
      <button type="button" name="button">Want to walk our premium members? Sign up Here</button>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
