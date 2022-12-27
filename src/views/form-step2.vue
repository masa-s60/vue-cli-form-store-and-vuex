<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">以下にお答えください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">現在、生命保険に加入されていますか？</p>
        <div class="p-question-detailed__answer">
          <input type="radio" id="insured" name="insurance" v-model="lifeInsurance" value="はい" @change="addQuestion1">
          <label for="insured">はい</label>
          <input type="radio" id="notInsured" name="insurance" v-model="lifeInsurance" value="いいえ" @change="addQuestion1">
          <label for="notInsured">いいえ</label>
        </div>
      </div>
      <aboutHospitalization v-show="displayHospitalizationSelect" :class="{'is-fade-in': displayHospitalizationSelect}" @display-about-operated="changeAuthenticityQuestion2"></aboutHospitalization>
      <about-operated v-show="displayOperatedSelect" :class="{'is-fade-in': displayHospitalizationSelect}"></about-operated>
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
      displayOperatedSelect: false,
    }
  },
  beforeRouteLeave(nextStep, step2, next) {
    if(nextStep.name === 'step1') {
      return next();
    }
    if ((this.$store.getters.getLifeInsurance === '') || 
    (this.$store.getters.getHospitalization === '') || 
    (this.$store.getters.getOperated === '')) {
      return window.alert('全ての項目が選択されていません');
    } else {
      next();
    }
  },
  beforeMount() {
    this.setStepNumber(2);
  },
  computed: {
    lifeInsurance: {
      get() {
        return this.$store.getters.getLifeInsurance;
      },
      set(lifeInsurance) {
        this.$store.dispatch("commitLifeInsurance", lifeInsurance);
      }
    },
  },
  mounted() {
    this.checkLifeInsurance()
    this.checkHospitalizationData()
  },
  methods: {
    checkLifeInsurance: function() {
      if(this.$store.getters.getLifeInsurance !== '') {
        this.displayHospitalizationSelect = true;
      }
    },
    checkHospitalizationData: function() {
      if(this.$store.getters.getHospitalization !== '') {
        this.displayOperatedSelect = true;
      }
    },
    addQuestion1: function() {
      this.displayHospitalizationSelect = true
    },
    changeAuthenticityQuestion2: function() {
      this.displayOperatedSelect = true
    },
    setStepNumber: function(stepNumber) {
      this.$store.dispatch("commitStepNumber", stepNumber);
    },
  },
  components: {
    'aboutHospitalization': aboutHospitalization,
    'about-operated': aboutOperated
  }
}
</script>