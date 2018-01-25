<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.c_header{ background:#595387;}
.s_phone .c_header .back.active{ background:#534f5c;}
.c_box-blue{ background:#595387;}
.c_header .fn .e_button-blue{ background:#595387;}
.s_phone .c_header .fn > [class*="e_ico"].active { background:#534f5c;}
</style>
