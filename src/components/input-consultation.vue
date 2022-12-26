<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">ご相談内容をご記入ください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-ご相談内容-</p>
        <textarea id="consultation" class="p-question-detailed__input-text" rows="" cols="" v-model="$store.getters.getConsultation" @change="updateConsultation"></textarea> 
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'input-consultation',
  mounted() {
  },
  methods: {
    updateConsultation: function(e) {
      this.$store.commit('updateConsultation', e.target.value);
    }
  }
}
</script>

<style>
.p-question-detailed__input-text{
  width: 95%;
  height: 400px;
}
</style>
