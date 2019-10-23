<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">about</router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  ul {
    list-style-type: none;
    padding: 30px 0px;
    display: flex;
    justify-content: center;
    background-color: #35495e;
    margin: 0px;
    li {
      margin: 1px 10px;
      background-color: #41b883;
      opacity: 0.8;
      transform: scale(
        1
      ); /* you need a scale here to allow it to transition in both directions */
      transition: 0.5s all ease;
      &:hover {
        opacity: 1;
        transform: scale(1.3);
      }
      a {
        padding: 10px;
        display: block;
        text-decoration: none;
        color: white;
        font-weight: bolder;
      }
    }
  }
}
</style>>


