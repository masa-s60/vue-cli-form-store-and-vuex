<template >
  <div class="p-question-detailed" id="about-operated">
    <p class="p-question-detailed__title">
      過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
    </p>
    <div class="p-question-detailed__answer">
      <input type="radio" id="operated" name="surgery" value="はい" @click="updateOperated">
      <label for="operated">はい</label>
      <input type="radio" id="notOperated" name="surgery" value="いいえ" @click="updateOperated">
      <label for="notOperated">いいえ</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-operated',
  mounted() {
    this.componentsFadeIn()
  },
  methods: {
    componentsFadeIn: function() {
      const aboutOperated = document.getElementById('about-operated');
      aboutOperated.classList.add('is-fade-in');
    },
    updateOperated: function(e) {
      this.$store.commit('updateOperatedButton', e.target);
    },
  }
}
</script>

<style>
.is-fade-in {
  animation: displayFadeIn .5s ease-out forwards;
}
@keyframes displayFadeIn {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
</style>
