<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{$store.state.stepNumber}}</p>
        <h2 class="p-question-title">以下にお答えください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">現在、生命保険に加入されていますか？</p>
        <div class="p-question-detailed__answer">
          <input type="radio" id="insured" name="insurance" value="はい" @change="addQuestion1" @click="updateLifeInsuranceButton">
          <label for="insured">はい</label>
          <input type="radio" id="notInsured" name="insurance" value="いいえ" @change="addQuestion1" @click="updateLifeInsuranceButton">
          <label for="notInsured">いいえ</label>
        </div>
      </div>
      <aboutHospitalization v-show="displayHospitalizationSelect" @display-about-operated="changeAuthenticityQuestion2"></aboutHospitalization>
      <about-operated v-show="displayOperatedSelect"></about-operated>
    </form>
  </div>
</template>

<script>
import aboutHospitalization from '../components/about-hospitalization.vue'
import aboutOperated from '../components/about-operated.vue'

export default {
  name: 'formStep2',
  data: function() {
    return {
      displayHospitalizationSelect: false,
      displayOperatedSelect: false
    }
  },
  beforeRouteLeave(nextStep, step2, next) {
    if(nextStep.name === 'step1') {
      return next();
    }
    if ((this.$store.state.formData.lifeInsuranceButton.value === undefined) || 
    (this.$store.state.formData.lifeInsuranceButton.value === undefined) || 
    (this.$store.state.formData.operatedButton.value === undefined)) {
      return window.alert('全ての項目が選択されていません');
    } else {
      next();
    }
  },
  beforeMount() {
    this.updateStepNumber(2);
  },
  mounted() {
    this.checkLifeInsuranceData()
    this.checkHospitalizationData()
    this.checkOperatedData()
  },
  methods: {
    checkLifeInsuranceData: function() {
      if(this.$store.state.formData.lifeInsuranceButton.value !== undefined) {
        console.log(this.$store.state.formData.lifeInsuranceButton.id);
        let radioButton = document.getElementById(this.$store.state.formData.lifeInsuranceButton.id);
        radioButton.checked = true;
        this.displayHospitalizationSelect = true;
      }
    },
    checkHospitalizationData: function() {
      if(this.$store.state.formData.hospitalizationButton.value !== undefined) {
        console.log(this.$store.state.formData.hospitalizationButton.id);
        let radioButton = document.getElementById(this.$store.state.formData.hospitalizationButton.id);
        radioButton.checked = true;
        this.displayOperatedSelect = true;
      }
    },
    checkOperatedData: function() {
      if(this.$store.state.formData.operatedButton.value !== undefined) {
        console.log(this.$store.state.formData.operatedButton.id);
        let radioButton = document.getElementById(this.$store.state.formData.operatedButton.id);
        radioButton.checked = true;
      }
    },
    addQuestion1: function() {
      this.displayHospitalizationSelect = true
    },
    changeAuthenticityQuestion2: function() {
      this.displayOperatedSelect = true
    },
    updateStepNumber: function(stepNumber) {
      this.$store.commit('updateStepNumber', stepNumber);
    },
    updateLifeInsuranceButton: function(e) {
      this.$store.commit('updateLifeInsuranceButton', e.target);
    },
  },
  components: {
    'aboutHospitalization': aboutHospitalization,
    'about-operated': aboutOperated
  }
}
</script>