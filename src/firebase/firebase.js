/* eslint-disable no-unused-vars */
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBSv5_KvHFB9Q-xAjifO7SVCgtoKujGoYQ',
  authDomain: 'test-chat-app-34489.firebaseapp.com',
  databaseURL: 'https://test-chat-app-34489.firebaseio.com',
  projectId: 'test-chat-app-34489',
  storageBucket: 'test-chat-app-34489.appspot.com',
  messagingSenderId: '186502390961',
  appId: '1:186502390961:web:6df6ff32a5a7e883b82e90'
}

firebase.initializeApp(firebaseConfig)

export default {
  auth: firebase.auth(),
  login () {
    const provider = new firebase.auth.Auth()
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = error.credential
        console.log(errorCode, errorMessage, email, credential)
      })
  },
  logout () {
    firebase.auth().signOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error)
      })
  }
}
