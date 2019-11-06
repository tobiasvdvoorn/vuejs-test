<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-button v-b-modal.my-modal>Show Modal</b-button>
    <b-modal id="my-modal">
      <h2>Hello From My Modal!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quaerat iure repellendus excepturi, inventore expedita harum quasi nisi sunt accusantium totam eius tempore quidem deserunt ipsum dolorum praesentium. Rerum, nobis!</p>
    </b-modal>
  </div>
</template>
