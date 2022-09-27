<template>
  <form @submit.prevent="handleSubmit">

    <div class="form-floating mb-3">
      <input type="Text" class="form-control" id="tag" placeholder="Your Giph Tag" required="true"
        v-model="editable.tag">
      <label for="tag">Get Random Giph by Tag</label>
    </div>
    <div class="text-end">
      <button type="submit" class="btn btn-primary mt-2">Post Gift</button>
    </div>
  </form>
</template>


<script>
import { ref } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async handleSubmit() {
        // console.log(editable)
        try {
          await giftsService.getGiph(editable.value.tag)
        } catch (error) {
          console.error('[submit]', error);
          Pop.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>