import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stepNumber: 1,
    formSet: 'NG',
    formData: {
      sexButton: {},
      year: '1950年（昭和24）',
      month: 1,
      day: 1,
      lifeInsuranceButton: {},
      hospitalizationButton: {},
      operatedButton: {},
      consultation: {},
    }
  },
  getters: {
  },
  mutations: {
    updateStepNumber: function(state, stepNumber) {
      state.stepNumber = stepNumber;
    },
    updateSexButton: function(state, sexButton) {
      // 性別選択ボタンの取得のみで出力値は応用可能
      state.formData.sexButton = sexButton;
      // console.log(state.formData.sexButton);
    },
    updateYear: function(state, year) {
      let yearAD = year.match(/\d{4}/);
      state.formData.year = yearAD[0];
      // console.log(state.formData.year);
    },
    updateMonth: function(state, month) {
      state.formData.month = month;
      // console.log(state.formData.month);
    },
    updateDay: function(state, day) {
      state.formData.day = day;
      // console.log(state.formData.day);
    },
    updateLifeInsuranceButton: function(state, lifeInsuranceButton) {
      state.formData.lifeInsuranceButton = lifeInsuranceButton;
      // console.log(state.formData.lifeInsuranceButton);
    },
    updateHospitalizationButton: function(state, hospitalizationButton) {
      state.formData.hospitalizationButton = hospitalizationButton;
      // console.log(state.formData.hospitalizationButton);
    },
    updateOperatedButton: function(state, operatedButton) {
      state.formData.operatedButton = operatedButton;
      // console.log(state.formData.operatedButton);
    },
    updateConsultation: function(state, consultation) {
      state.formData.consultation = consultation;
      // console.log(state.formData.consultation);
    },
    updateFormSet: function(state, formSet) {
      state.formSet = formSet;
      console.log(state.formSet);
    },
  },
  actions: {
  },
  modules: {
  }
})
