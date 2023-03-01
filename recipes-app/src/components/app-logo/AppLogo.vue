<template>
  <div class="logo">
    <router-link to="/">
      <img class="logo-img" alt="abn-recipe-logo" src="@/assets/img/abn-logo.svg" />
      <div class="sub-title">
        <span>Recipes</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.sub-title {
  font-family: var(--curlyLogoFont);
  position: relative;
  justify-self: center;
  top: -16px;
  transform: rotateY(0deg) rotate(351deg);
  color: black;
}

.logo {
  display: flex;
  align-items: flex-end;
  justify-self: center;
}

.logo-img {
  height: 38px;
  width: auto;
}
</style>
