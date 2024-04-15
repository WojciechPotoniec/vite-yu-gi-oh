<template>
  <select class="container form-select">
    <option selected>Choose your card</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="container bg-light p-5">
    <h4 class="text-light p-3">Found {{ store.Cards.length }} cards</h4>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-2 g-lg-3"
    >
      <div class="col" v-for="card in store.Cards" :key="store.Cards.id">
        <div class="card">
          <img
            :src="card.card_images[0].image_url"
            class="card-img-top"
            :alt="card.type"
          />
          <div class="card-body wp-bg-orange text-center wp-h">
            <h5 class="card-title text-light">{{ card.name }}</h5>
            <strong>{{ card.archetype }}</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "CardComponent",
  data() {
    return {
      store,
    };
  },
  created() {
    console.log(this.store.Cards);
  },
};
</script>

<style lang="scss" scoped>
.wp-bg-orange {
  background-color: orange;
}
h4 {
  background-color: black;
}
.wp-h {
  min-height: 150px;
}
strong {
  text-align: end;
}
select {
  width: 180px;
}
</style>
