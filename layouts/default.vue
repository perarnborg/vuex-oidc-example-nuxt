<template>
  <div id="app">
    <div
      v-if="hasAccess"
      id="nav"
    >
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/protected">
        Protected
      </router-link>
    </div>
    <nuxt />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters('oidc', [
      'oidcIsAuthenticated'
    ]),
    hasAccess: function () {
      return this.oidcIsAuthenticated || this.oidcIsRoutePublic(this.$route)
    }
  },
  mounted() {
    window.addEventListener('vuexoidc:userLoaded', this.userLoaded)
  },
  destroyed() {
    window.removeEventListener('vuexoidc:userLoaded', this.userLoaded)
  },
  methods: {
    ...mapGetters('oidc', [
      'oidcIsRoutePublic'
    ]),
    userLoaded: function (e) {
      console.log('I am listening to the user loaded event in vuex-oidc', e.detail)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.nuxt-link-active {
  color: #42b983;
}
</style>
