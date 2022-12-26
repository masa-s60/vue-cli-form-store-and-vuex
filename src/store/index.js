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
    getStepNumber(state) {
      return state.stepNumber
    },
    getYearsList(state) {
      return state.formData.yearsList;
    },
    getEraList(state) {
      return state.formData.EraList;
    },
    getMonthsList(state) {
      return state.formData.monthsList;
    },
    getDaysList(state) {
      return state.formData.daysList;
    },
    getFormSet(state) {
      return state.formSet
    },
    getSex(state) {
      console.log(state.formData.sex);
      return state.formData.sex;
    },
    getBirthdayYear(state) {
      console.log(state.formData.birthdayYear);
      return state.formData.birthdayYear;
    },
    getBirthdayMonth(state) {
      console.log(state.formData.birthdayMonth);
      return state.formData.birthdayMonth;
    },
    getBirthdayDay(state) {
      console.log(state.formData.birthdayDay);
      return state.formData.birthdayDay;
    },
    getLifeInsurance(state) {
      return state.formData.lifeInsurance;
    },
    getHospitalization(state) {
      return state.formData.hospitalization;
    },
    getOperated(state) {
      return state.formData.operated;
    },
    getConsultation(state) {
      return state.formData.consultation;
    },
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
      console.log(state.formData.sex);
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
  },
  modules: {
  }
})
