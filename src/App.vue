<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from "./store.js";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getCards() {
      axios
        .get(this.store.apiPath + this.store.endPoint.cardSearch)
        .then((res) => {
          this.store.Cards = res.data.data;
          console.log(this.store.Cards);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          
        });
    },
  },
  created() {
    this.getCards();
  },
};
</script>

<style lang="scss" scoped></style>
