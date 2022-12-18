<template>
  <inputConsultation></inputConsultation>
</template>

<script>
import inputConsultation from '../components/input-consultation.vue'

export default {
  name: 'formStep3',
  data: function() {
    return {
    }
  },
  beforeRouteLeave(nextStep, step3, next) {
    if(nextStep.name === 'step2') {
      return next();
    }
    if(this.$store.state.formData.consultation === '') {
      return window.alert('ご相談内容を入力してください');
    } else {
      next();
    }
  },
  beforeMount() {
    this.updateStepNumber(3);
    this.updateFormSet();
  },
  mounted() {
  },
  methods: {
    updateStepNumber: function(stepNumber) {
      this.$store.commit('updateStepNumber', stepNumber);
    },
    updateFormSet: function() {
      this.$store.commit('updateFormSet', 'NG');
    },
  },
  components: {
    'inputConsultation': inputConsultation,
  }
}
</script>

<style>
</style>