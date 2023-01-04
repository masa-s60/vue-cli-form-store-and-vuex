import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stepNumber: 1,
    formSet: 'NG',
    formData: {
      yearsList: [],
      EraList: [],
      monthsList: [1,2,3,4,5,6,7,8,9,10,11,12],
      daysList: [],
      sex: '',
      birthdayYear: '1950(昭和25)',
      birthdayMonth: 1,
      birthdayDay: 1,
      lifeInsurance: '',
      hospitalization: '',
      operated: '',
      consultation: '',
    }
  },
  getters: {
    getStepNumber: state => state.stepNumber,
    getYearsList: state => state.formData.yearsList,
    getEraList: state => state.formData.EraList,
    getMonthsList: state => state.formData.monthsList,
    getDaysList: state => state.formData.daysList,
    getFormSet: state => state.formSet,
    getSex: state => state.formData.sex,
    getBirthdayYear: state => state.formData.birthdayYear,
    getBirthdayMonth: state => state.formData.birthdayMonth,
    getBirthdayDay: state => state.formData.birthdayDay,
    getLifeInsurance: state => state.formData.lifeInsurance,
    getHospitalization: state => state.formData.hospitalization,
    getOperated: state => state.formData.operated,
    getConsultation: state => state.formData.consultation,
  },
  mutations: {
    createYearsList: function(state, year) {
      state.formData.yearsList.push(year);
    },
    createErasList: function(state, Era) {
      state.formData.EraList.push(Era);
    },
    createDaysList: function(state, day) {
      state.formData.daysList.push(day);
    },
    updateStepNumber: function(state, stepNumber) {
      state.stepNumber = stepNumber;
    },
    updateSex: function(state, sex) {
      state.formData.sex = sex;
    },
    updateBirthdayYear: function(state, year) {
      state.formData.birthdayYear = year;
      console.log(state.formData.birthdayYear);
    },
    updateBirthdayMonth: function(state, month) {
      state.formData.birthdayMonth = month;
      console.log(state.formData.birthdayMonth);
    },
    updateBirthdayDay: function(state, day) {
      state.formData.birthdayDay = day;
      console.log(state.formData.birthdayDay);
    },
    updateLifeInsurance: function(state, lifeInsurance) {
      state.formData.lifeInsurance = lifeInsurance;
      console.log(state.formData.lifeInsurance);
    },
    updateHospitalization: function(state, hospitalization) {
      state.formData.hospitalization = hospitalization;
      console.log(state.formData.hospitalization);
    },
    updateOperated: function(state, operated) {
      state.formData.operated = operated;
      console.log(state.formData.operated);
    },
    updateConsultation: function(state, consultation) {
      state.formData.consultation = consultation;
      console.log(state.formData.consultation);
    },
    updateFormSet: function(state, formSet) {
      state.formSet = formSet;
      console.log(state.formSet);
    },
  },
  actions: {
    commitStepNumber: function({ commit }, stepNumber) {
      commit('updateStepNumber', stepNumber);
    },
    commitSex: function({ commit }, sex) {
      commit('updateSex', sex);
    },
    commitYear: function({ commit }, year) {
      commit('updateBirthdayYear', year);
    },
    commitMonth: function({ commit }, month) {
      commit('updateBirthdayMonth', month);
    },
    commitDay: function({ commit }, day) {
      commit('updateBirthdayDay', day);
    },
    commitLifeInsurance: function({ commit }, lifeInsurance) {
      commit('updateLifeInsurance', lifeInsurance);
    },
    commitHospitalization: function({ commit }, hospitalization) {
      commit('updateHospitalization', hospitalization);
    },
    commitOperated: function({ commit }, operated) {
      commit('updateOperated', operated);
    },
    commitConsultation: function({ commit }, consultation) {
      commit('updateConsultation', consultation);
    },
  },
  modules: {
  }
})
