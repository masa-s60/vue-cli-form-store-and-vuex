<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">ご相談内容をご記入ください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-ご相談内容-</p>
        <textarea id="consultation" class="p-question-detailed__input-text" rows="" cols="" @change="updateConsultation"></textarea> 
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'input-consultation',
  mounted() {
    this.checkConsultationData()
  },
  methods: {
    checkConsultationData: function() {
      if(this.$store.getters.getConsultationValue !== undefined) {
        let text = document.getElementById(this.$store.getters.getConsultationId);
        text.value = this.$store.getters.getConsultationValue;
      }
    },
    addFadeIn: function() {
      const aboutOperated = document.querySelector('.p-about-operated');
      aboutOperated.classList.add('is-fade-in');
    },
    updateConsultation: function(e) {
      this.$store.commit('updateConsultation', e.target);
    }
  }
}
</script>

<style>
.p-question-detailed__input-text{
  width: 95%;
  height: 400px;
}
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
