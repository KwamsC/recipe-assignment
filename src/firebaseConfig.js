import { initializeApp } from 'firebase/app'
import {
  getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDk5g2TjjqfFntkPxUkTzslAZQ_8dQuF_c',
  authDomain: 'abn-recipe-app.firebaseapp.com',
  projectId: 'abn-recipe-app',
  storageBucket: 'abn-recipe-app.appspot.com',
  messagingSenderId: '229398139813',
  appId: '1:229398139813:web:aaa2ea9a4e2d51b6414e4c',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export const getCurrentUser = () => new Promise((resolve, reject) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    unsubscribe()
    resolve(user)
  }, reject)
})

export const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  await signOut(auth)
}

const user = await getCurrentUser()

export default {
  app, login, logout, getCurrentUser, user,
}
