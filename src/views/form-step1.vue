<template>
  <div class="formStep1">
    <form id="app" class="p-form" action="">
      <div  class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">お客様の情報を入力してください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-性別-</p>
        <input type="radio" id="male" name="sex" v-model="$store.getters.getSex" value="男性" @change="updateSex">
        <label for="male">男性</label>
        <input type="radio" id="female" name="sex" v-model="$store.getters.getSex" value="女性" @change="updateSex">
        <label for="female">女性</label>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-生年月日-</p>
        <select id="selectYear" name="year" v-model="$store.getters.getBirthdayYear" @change="updateBirthdayYear">
          <option v-for="(year, index) in $store.getters.getYearsList" :key="index">
            {{$store.getters.getYearsList[index]}}({{$store.getters.getEraList[index]}})
          </option>
        </select>
        <span>年</span>
        <select id="selectMonth" name="month" v-model="$store.getters.getBirthdayMonth" @change="updateBirthdayMonth">
          <option v-for="(month, index) in $store.getters.getMonthsList" :key="index">
            {{$store.getters.getMonthsList[index]}}
          </option>
        </select>
        <span>月</span>
        <select id="selectDay" name="day" v-model="$store.getters.getBirthdayDay" @change="updateBirthdayDay">
          <option v-for="(day, index) in $store.getters.getDaysList" :key="index">
            {{$store.getters.getDaysList[index]}}
          </option>
        </select>
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
  // data: function() {
  //   return {
  //   }
  // },
  beforeMount() {
    this.updateStepNumber(1)
  },
  mounted() {
    this.createYearsList()
    this.createDaysList()
  },
  beforeRouteLeave(step2, step1, next) {
    if(this.$store.getters.getSex === '') {
      return window.alert('性別が選択されていません');
    } else {
      next();
    }
  },
  computed: {
  },
  methods: {
    createYearsList: function() {
      const currentDate = new Date();
      const typeEra = /^\D\D\d*/;
      const currentYear = currentDate.getFullYear();
      for(let i = 1950; i <= currentYear; i++) {
        this.$store.commit('createYearsList', i);
        let targetYear = new Date(String(i));
        let pastEraData = targetYear.toLocaleString('ja-JP-u-ca-japanese', {era: 'short'});
        let pastEra = pastEraData.match(typeEra);
        this.$store.commit('createErasList', pastEra[0]);
      }
    },
    createDaysList: function() {
      for(let i = 1; i <= 31; i++) {
        this.$store.commit('createDaysList', i);
      }
    },
    rebuildDate: function() {
      this.$store.getters.getDaysList.length = 0;
      const typeYear = /^\d*/;
      let setYear = this.$store.getters.getBirthdayYear.match(typeYear);
      let targetDate = new Date(Number(setYear[0]), this.$store.getters.getBirthdayMonth, 0);
      let displayLastDay = targetDate.getDate();
      for(let i = 1; i <= displayLastDay; i++) {
        this.$store.commit('createDaysList', i);
      }
    },
    updateStepNumber: function(stepNumber) {
      this.$store.commit('updateStepNumber', stepNumber);
    },
    updateSex: function(e) {
      this.$store.commit('updateSex', e.target.value);
    },
    updateBirthdayYear: function(selectedYear) {
      this.$store.commit('updateBirthdayYear', selectedYear.target.value);
      this.rebuildDate();
    },
    updateBirthdayMonth: function(selectedMonth) {
      this.$store.commit('updateBirthdayMonth', selectedMonth.target.value);
      this.rebuildDate();
    },
    updateBirthdayDay: function(selectedDay) {
      this.$store.commit('updateBirthdayDay', selectedDay.target.value);
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