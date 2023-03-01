import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../../firebaseConfig'

export default function useLoginUser() {
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const errorMessage = ref('')

  const firebaseLogin = () => {
    login(email.value, password.value)
      .then(() => {
        console.log('Successfully registered!')
        router.push('/')
      })
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          errorMessage.value = 'Wrong password'
        } else if (error.code === 'auth/user-not-found') {
          errorMessage.value = 'Not a user'
        } else console.log(error)
      })
  }
  return {
    email,
    password,
    errorMessage,
    firebaseLogin,
  }
}
