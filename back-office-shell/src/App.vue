<template>
  <v-app id="app">
      <Header/>
      <template>
          <navigation/>
      </template>
      <transition name="page">
          <router-view />
      </transition>
  </v-app>
</template>

<script>
import Header from './components/common/header/Hearder'
import navigation from './components/common/navigation/Navigation'

export default {
  name: 'App',
  components: { Header , navigation }
}
</script>

<style lang="scss">
#app {
    width: 1920px;
    height: auto;
    background-color: #F9F9F9;
    /*Router Transition*/
      .page-enter-active, .page-leave-active{
        transition: opacity .2s;
      }
      .page-enter, .page-leave-to{
        opacity: 0;
      };
}
</style>
