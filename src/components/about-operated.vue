<template >
  <div class="p-question-detailed" id="about-operated">
    <p class="p-question-detailed__title">
      過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
    </p>
    <div class="p-question-detailed__answer">
      <input type="radio" id="operated" name="surgery" v-model="operated" value="はい">
      <label for="operated">はい</label>
      <input type="radio" id="notOperated" name="surgery" v-model="operated" value="いいえ">
      <label for="notOperated">いいえ</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-operated',
  computed: {
    operated: {
      get() {
        return this.$store.getters.getOperated;
      },
      set(operated) {
        this.$store.dispatch("commitOperated", operated);
      }
    },
  },
}
</script>
