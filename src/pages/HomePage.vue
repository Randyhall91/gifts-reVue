<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Gifted side bar -->
      <div class="col-4 mt-3">

        <SearchForm />

      </div>
      <!-- Gifts -->
      <div class="col-md-8">
        <div class="row">
          <GiftCard v-for="g in gifts" :gift="g" />
        </div>
      </div>
    </div>
  </div>



</template>





<script>

import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js'
import GiftCard from '../components/GiftCard.vue';
import SearchForm from '../components/SearchForm.vue';
export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        console.error("[GetGifts]", error);
        Pop.error(error);
      }
    }
    getGifts();
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
  components: { GiftCard, SearchForm }
}
</script>






<style scoped lang="scss">

</style>
