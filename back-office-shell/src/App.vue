<template>
  <v-app id="app">
      <Header/>
      <div class="app">
          <template>
              <navigation style="height: 100%"/>
          </template>
          <transition name="page">
              <router-view />
          </transition>
      </div>
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

<style lang="scss" scoped>
    @import '~@/assets/scss/_index.scss';
</style>
