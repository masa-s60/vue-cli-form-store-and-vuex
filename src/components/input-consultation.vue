<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">ご相談内容をご記入ください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-ご相談内容-</p>
        <textarea id="consultation" class="p-question-detailed__input-text" rows="" cols="" v-model="consultation"></textarea> 
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'input-consultation',
  computed: {
    consultation: {
      get() {
        return this.$store.getters.getConsultation;
      },
      set(consultation) {
        this.$store.dispatch("commitConsultation", consultation);
      }
    },
  },
}
</script>

<style>
.p-question-detailed__input-text{
  width: 95%;
  height: 400px;
}
</style>
