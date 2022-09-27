<template>
  <div class="col-md-4">
    <div class="card" v-if="gift.opened">
      <img class="card-img-top" :src="gift.url" alt="Title">
      <div class="card-body">
        <h4 class="card-title">{{gift.tag}}</h4>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-body">
        <img
          src="https://media.istockphoto.com/illustrations/seamless-with-skulls-and-bones-illustration-id164472921?k=20&m=164472921&s=612x612&w=0&h=mQ1J2XptX_6qh9sgPY7k84Gr_r-mIRT64EE886hpTR8="
          class="img-fluid" @click="openGift()">
      </div>
    </div>
  </div>




</template>


<script>
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    gift: { type: Gift, required: true }
  },
  setup(props) {
    return {
      async openGift() {
        try {
          await giftsService.openGift(props.gift)
        } catch (error) {
          console.error('[opengift]', error);
          Pop.error(error)
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>

</style>