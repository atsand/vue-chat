<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-btn v-if="!authenticated" @click="login">Login</v-btn>
        <div v-if="authenticated">
          <v-btn @click="logout">Logout</v-btn>
          <v-avatar>
            <v-img :src="user.data.photoURL"
              alt="?"></v-img>
          </v-avatar>
          <h1>Hi {{firstName}}, you're signed in!!!!</h1>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Firebase from '../firebase/firebase.js'

  export default {
    name: 'Home',

    data: () => ({
      user: {
        loggedIn: false,
        data: {}
      }
    }),
    mounted: function () {
      Firebase.auth.onAuthStateChanged(user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    },
    computed: {
      authenticated () {
        return this.user.loggedIn;
      },
      firstName () {
        if (this.user.data.displayName) {
          return this.user.data.displayName.split(' ')[0];
        }
        return null;
      }
    },
    methods: {
      login () {
        Firebase.login();
        console.log(this.user)
      },
      logout () {
        Firebase.logout();
      }
    }
  }
</script>
