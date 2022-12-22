<template>
  <div class="formStep1">
    <form id="app" class="p-form" action="">
      <div  class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">お客様の情報を入力してください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-性別-</p>
        <input type="radio" id="male" name="sex" value="男性" @change="updateSexButton">
        <label for="male">男性</label>
        <input type="radio" id="female" name="sex" value="女性" @change="updateSexButton">
        <label for="female">女性</label>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-生年月日-</p>
        <select id="selectYear" name="year" @change="updateYear"></select>
        <span>年</span>
        <select id="selectMonth" name="month" @change="updateMonth"></select>
        <span>月</span>
        <select id="selectDay" name="day" @change="updateDay"></select>
        <span>日</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name:'formStep1',
  // beforeRouteEnter(step2, step1, next) {
  //   next( (vm) => {
  //     }
  //   });
  // },
  beforeMount() {
    this.updateStepNumber(1)
  },
  mounted() {
    this.checkSexData()
    this.createDateList()
    const year = document.getElementById('selectYear')
    year.addEventListener('change', this.rebuildDate)
    const month = document.getElementById('selectMonth')
    month.addEventListener('change', this.rebuildDate)
    this.checkBirthdayData()
  },
  beforeRouteLeave(step2, step1, next) {
    if(this.$store.getters.getSexButtonValue === undefined) {
      return window.alert('性別が選択されていません');
    } else {
      next();
    }
  },
  methods: {
    checkSexData: function() {
      if(this.$store.getters.getSexButtonValue !== undefined) {
        let radioButton = document.getElementById(this.$store.getters.getSexButtonId);
        radioButton.checked = true;
      } 
    },
    checkBirthdayData: function() {
      //optionタグにselectedが入れられれば解決できるかも
    },
    createDateList: function() {
      this.createYears()
      this.createMonths()
      this.createDays()
    },
    createYears: function() {
      const startPastDate = new Date('1950');
      let pastYear = startPastDate.getFullYear();
      const currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let pastEraData;
      let pastEra;
      const typeEra = /^\D\D\d*/;
      const year = document.getElementById('selectYear');
      for(pastYear; pastYear <= currentYear; pastYear++) {
        let incrementYear = new Date(String(pastYear));
        pastEraData = incrementYear.toLocaleString('ja-JP-u-ca-japanese', {era: 'short'});
        pastEra = pastEraData.match(typeEra);
        const newOption = document.createElement('option');
        newOption.textContent = `${pastYear}年（${pastEra[0]}）`;
        year.appendChild(newOption);
        this.selectedOptionYear(pastYear, year, newOption);
      }
    },
    createMonths: function() {
      const month = document.getElementById('selectMonth');
      for(let i = 1; i <= 12; i++) {
        this.createElements(i, month)
      }
    },
    createDays: function() {
      const day = document.getElementById('selectDay');
      for(let i = 1; i <= 31; i++) {
        this.createElements(i, day)
      }
    },
    createElements: function(index, element) {
      const newOption = document.createElement('option');
      newOption.textContent = index;
      element.appendChild(newOption);
      this.selectedOptionMonth(index, element, newOption);
      this.selectedOptionDay(index, element, newOption);
    },
    selectedOptionYear: function(index, element, newElement) {
      if(element.name === 'year') {
        if(this.$store.getters.getYear === String(index)) {
        newElement.selected = true;
        }
      }
    },
    selectedOptionMonth: function(index, element, newElement) {
      if(element.name === 'month') {
        if(this.$store.getters.getMonth === String(index)) {
        newElement.selected = true;
        }
      }
    },
    selectedOptionDay: function(index, element, newElement) {
      if(element.name === 'day') {
        if(this.$store.getters.getDay === String(index)) {
        newElement.selected = true;
        }
      }
    },
    rebuildDate: function() {
      const year = document.getElementById('selectYear');
      const month = document.getElementById('selectMonth');
      const day = document.getElementById('selectDay');
      const typeYear = /^\d*/;
      let setYear;
      day.innerHTML = '';
      setYear = year.value.match(typeYear);
      let targetDate = new Date(Number(setYear[0]), month.value, 0);
      let displayDays = targetDate.getDate();
      for(let i = 1; i <= displayDays; i++) {
        this.createElements(i, day)
      }
    },
    updateStepNumber: function(stepNumber) {
      this.$store.commit('updateStepNumber', stepNumber);
    },
    updateSexButton: function(e) {
      this.$store.commit('updateSexButton', e.target);
    },
    updateYear: function(e) {
      console.log(e.target.value);
      this.$store.commit('updateYear', e.target.value);
    },
    updateMonth: function(e) {
      this.$store.commit('updateMonth', e.target.value);
    },
    updateDay: function(e) {
      this.$store.commit('updateDay', e.target.value);
    },
  }
}
</script>

<style>
select{
  font-size: 1.2vw;
  margin-right: .5vw;
}
span {
  margin-right: 2vw;
}
</style>