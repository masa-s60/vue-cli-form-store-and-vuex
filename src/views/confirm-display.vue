<template>
  <div>
    <form id="app" class="p-form" action="">
      <div class="p-question">
        <p class="p-step">STEP{{ $store.getters.getStepNumber }}</p>
        <h2 class="p-question-title">以下の内容をご確認ください</h2>
      </div>
      <div class="p-question-detailed">
        <div class="p-question-detailed-container">
          <p class="p-question-detailed__title">-性別-</p>
          <p class="p-question-detailed__answer">{{$store.getters.getSex}}</p>
        </div>
        <div class="p-question-detailed-container">
          <p class="p-question-detailed__title">-生年月日-</p>
          <span class="p-question-detailed__answer">{{year}}年{{$store.getters.getBirthdayMonth}}月{{$store.getters.getBirthdayDay}}日</span>
        </div>
        <div class="p-question-detailed-container">
          <p class="p-question-detailed__title">-現在、生命保険に加入されていますか？-</p>
          <p class="p-question-detailed__answer">{{$store.getters.getLifeInsurance}}</p>
        </div>
        <div class="p-question-detailed-container">
          <p class="p-question-detailed__title">-現在入院中ですか。また、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <p class="p-question-detailed__answer">{{$store.getters.getHospitalization}}</p>
        </div>
        <div class="p-question-detailed-container">
          <p class="p-question-detailed__title">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
          <p class="p-question-detailed__answer">{{$store.getters.getOperated}}</p>
        </div>
        <div class="p-question-detailed-container">
          <p class="p-question-detailed__title">-ご質問内容-</p>
          <p class="p-question-detailed__answer">{{$store.getters.getConsultation}}</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'confirm-display',
  beforeMount() {
    this.updateFormSet();
    this.removeEra();
  },
  data: function() {
    return {
      year: this.removeEra(),
    }
  },
  methods: {
    updateFormSet: function() {
      this.$store.dispatch("commitFormSet", 'OK');
    },
    removeEra: function() {
      const AD = /^\d*/;
      const ADyear = this.$store.getters.getBirthdayYear.match(AD);
      return ADyear[0];
    },
  }
}
</script>

<style>
.p-question-detailed-container {
  margin-bottom: 3vw;
}
</style>
