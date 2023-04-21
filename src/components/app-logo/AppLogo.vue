<template>
  <router-link to="/">
    <div class="logo">
      <h2 class="logo-img">
        LOGO
      </h2>
      <div class="sub-title">
        <span>Recipes</span>
      </div>
    </div>
  </router-link>
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
  flex-direction: column;
}
</style>
