import firebase from 'firebase/app'
import 'firebase/auth'

const AuthAdapter = {
  signIn() {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    /*
    let result = await firebase.auth().signInWithPopup(provider)
    var token = result.credential.accessToken
    var user = result.user

    console.log(token)
    console.log(user)
    */
  },

  signOut() {
    return firebase.auth().signOut().then(()=>{
      console.log('로그아웃 성공')
    },()=>{
      console.log('로그아웃 실패')
    })
  }
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user)
    // User is signed in.
  } else {
    console.log('로그아웃 성공')
    // No user is signed in.
  }
})

export default AuthAdapter
