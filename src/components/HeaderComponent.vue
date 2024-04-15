<template>
  <header class="d-flex align-items-center ms-3">
    <div id="logo">
      <img :src="img" alt="logo" />
    </div>
    <h1>Yu-Gi-Oh Api</h1>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      img: "./public/img/Yugioh_anime_logo.webp",
    };
  },
};
</script>

<style lang="scss" scoped>
#logo {
  width: 100px;
  img{
    width: 100%;
  }
}
h1{
  margin-left: 10px;
}
</style>
