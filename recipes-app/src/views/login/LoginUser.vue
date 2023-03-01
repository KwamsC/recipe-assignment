<script setup>
import AppLogo from '../../components/app-logo/AppLogo.vue'
import useLoginUser from './useLoginUser'

const {
  email, password, errorMessage, firebaseLogin,
} = useLoginUser()
</script>

<template>
  <section class="login-container">
    <div class="login-card">
      <app-logo />
      <h1>Login to use the Recipe app</h1>
      <form class="form" action="#" @submit.prevent="firebaseLogin">
        <div class="form-group row">
          <label for="email" class="col-form-label">Email</label>

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
          <label for="password" class="col-form-label">Password</label>

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

        <div class="form-group">
          <div class="">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </div>
        <small class="error-message">{{ errorMessage }}</small>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  padding: 0.5rem 1rem;
  text-transform: capitalize;
  border: 0;
  border-radius: 1rem;
  margin: 2rem 0 0.5rem;
  color: white;
  background: black;
}

.form {
  margin-top: 2rem
}

.login-card{
  padding: 1rem;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.356);
}

.error-message {
  color: red;
}
</style>
