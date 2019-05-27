<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}
body{
  overflow-y: scroll;
  background: white;
}
a {
  color: #043ba0;
  text-decoration: none;
}
a:hover {
  color: #a4a711;
}

ul,
li {
    list-style: none;
}

</style>
