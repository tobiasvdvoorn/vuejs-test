<template>
  <ul>
    <li>
      <router-link :to="{ name: 'home' }">home</router-link>
    </li>
    <li>
      <router-link :to="{ name: 'about' }">about</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export default class Navbar extends Vue {}
</script>
<style lang="scss" scoped>
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
</style>