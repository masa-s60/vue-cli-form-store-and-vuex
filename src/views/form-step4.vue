<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{$store.state.stepNumber}}</p>
        <h2 class="p-question-message">以下にお答えください</h2>
      </div>
      <div class="p-about-life-insurance">
        <p class="p-about-life-insurance__question">現在</p>
        <div class="p-about-life-insurance__answer" @click="addQuestion1">
          <input type="radio" id="yes" name="insured" value="insured">
          <label for="yes">はい</label>
          <input type="radio" id="no" name="notInsured" value="notInsured">
          <label for="no">いいえ</label>
        </div>
      </div>
      <aboutHospitalization v-show="displayQuestion1" @display-about-operated="changeAuthenticityQuestion2"></aboutHospitalization>
      <about-operated v-show="displayQuestion2"></about-operated>
    </form>
  </div>
</template>

<script>
import aboutHospitalization from '../components/about-hospitalization.vue'
import aboutOperated from '../components/about-operated.vue'
import store from '../store/index.js'

export default {
  name: 'formStep2',
  data: function() {
    return {
      displayQuestion1: false,
      displayQuestion2: false
    }
  },
  beforeMount() {
    store.state.stepNumber = 4
  },
  mounted() {
    this.fadeIn()
  },
  methods: {
    fadeIn: function() {
      const display = document.getElementById('app');
      display.classList.add('is-fade-in');
        setTimeout(() => {
        display.classList.remove('is-fade-in');
      }, 500);
    },
    addQuestion1: function() {
    },
    changeAuthenticityQuestion2: function() {
      this.displayQuestion2 = true
    },
  },
  components: {
    'aboutHospitalization': aboutHospitalization,
    'about-operated': aboutOperated
  }
}
</script>

<style>
.p-form {
  width: 50%;
  border: solid 1.5px rgb(27, 87, 255);
  margin: auto;
}
.p-question {
  position: relative;
}
.p-step {
  position: absolute;
  top: -37%;
  left: 0;
  font-size: 1.2vw;
  color: white;
  background-color: rgb(14, 167, 255);
  padding: 0 5px;
  letter-spacing: 1px;
}
.p-question-message {
  border: 1.5px solid rgba(1, 231, 192, 0.824);
  font-size: 2vw;
  background-color: aquamarine;
  margin: 0;
}

</style>