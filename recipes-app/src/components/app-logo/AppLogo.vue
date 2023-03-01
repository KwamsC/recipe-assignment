<template>
  <router-link to="/" class="logo">
    <img class="logo-img" alt="abn-recipe-logo" src="@/assets/img/abn-logo.svg" />
    <div class="sub-title">
      <span>Recipes</span>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.sub-title {
  font-family: var(--curlyLogoFont);
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
  height: 38px;
  width: auto;
}
</style>
