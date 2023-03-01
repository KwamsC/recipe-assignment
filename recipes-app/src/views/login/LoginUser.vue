<script setup>
import AppLogo from '../../components/app-logo/AppLogo.vue'
import useLoginUser from './useLoginUser'

const {
  email, password, errorMessage, firebaseLogin,
} = useLoginUser()
</script>

<template>
  <section class="login-container">
    <app-logo />
    <h1>Login to use the Recipe app</h1>
    <form action="#" @submit.prevent="firebaseLogin">
      <div class="form-group row">
        <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

        <div class="col-md-6">
          <input
            id="email"
            type="email"
            class="form-control"
            name="email"
            value
            required
            v-model="email"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

        <div class="col-md-6">
          <input
            id="password"
            type="password"
            class="form-control"
            name="password"
            required
            v-model="password"
          />
        </div>
      </div>

      <div class="form-group row mb-0">
        <div class="col-md-8 offset-md-4">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </div>
      <small class="error-message">{{ errorMessage }}</small>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-message {
  color: red;
}
</style>
