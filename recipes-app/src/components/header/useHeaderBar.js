import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { logout as fireBaseLogout } from '../../firebaseConfig'

export default function useHeaderBar() {
  const router = useRouter()
  const route = useRoute()
  const noHeader = ref(true)

  /**
   * Watches the route for changes and updates the value of the noHeader reactive variable to
   * control whether the header is displayed or not based on the current route.
   *
   * @returns {void}
   */
  watch(route, () => {
    noHeader.value = route.name !== 'login'
  })

  /**
   * Logs out the user by calling Firebase's logout function and redirecting to the login page.
   *
   * @returns {Promise<void>}
   */
  const logout = async () => {
    await fireBaseLogout().then(() => {
      console.log('logout successful')
      router.push('/login')
    }).catch((error) => {
      console.log('logout was unsuccesful due to ', error)
    })
  }

  return {
    logout,
    noHeader,
  }
}
