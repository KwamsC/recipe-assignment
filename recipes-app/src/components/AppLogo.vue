<template>
  <router-link to="/" class="logo">
    <img class="logo-img" src="@/assets/img/abn-logo.svg" />
    <div class="sub-title">
      <small>Recipes</small>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

.sub-title {
  font-family: 'Yellowtail';
  position: absolute;
  justify-self: center;
  transform: rotateY(0deg) rotate(351deg);
  color: black;
}

.logo {
  display: grid;
  align-items: flex-end;
  justify-self: center;
}

.logo-img {
  height: 40px;
  width: auto;
}
</style>
