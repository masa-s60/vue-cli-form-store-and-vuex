<template>
  <div class="formStep1">
    <form id="app" class="p-form" action="">
      <div  class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">お客様の情報を入力してください</h2>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-性別-</p>
        <input type="radio" id="male" name="sex" v-model="sex" value="男性">
        <label for="male">男性</label>
        <input type="radio" id="female" name="sex" v-model="sex" value="女性">
        <label for="female">女性</label>
      </div>
      <div class="p-question-detailed">
        <p class="p-question-detailed__title">-生年月日-</p>
        <select id="selectYear" name="year" v-model="year" @change="rebuildDate">
          <option v-for="(year, index) in $store.getters.getYearsList" :key="index">
            {{$store.getters.getYearsList[index]}}({{$store.getters.getEraList[index]}})
          </option>
        </select>
        <span>年</span>
        <select id="selectMonth" name="month" v-model="month" @change="rebuildDate">
          <option v-for="(month, index) in $store.getters.getMonthsList" :key="index">
            {{$store.getters.getMonthsList[index]}}
          </option>
        </select>
        <span>月</span>
        <select id="selectDay" name="day" v-model="day">
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
    this.setStepNumber(1)
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
    sex: {
      get() {
        return this.$store.getters.getSex;
      },
      set(sex) {
        this.$store.dispatch("commitSex", sex);
      }
    },
    year: {
      get() {
        return this.$store.getters.getBirthdayYear;
      },
      set(year) {
        this.$store.dispatch("commitYear", year);
      }
    },
    month: {
      get() {
        return this.$store.getters.getBirthdayMonth;
      },
      set(month) {
        this.$store.dispatch("commitMonth", month);
      }
    },
    day: {
      get() {
        return this.$store.getters.getBirthdayDay;
      },
      set(day) {
        this.$store.dispatch("commitDay", day);
      }
    },
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
    setStepNumber: function(stepNumber) {
      this.$store.dispatch("commitStepNumber", stepNumber);
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