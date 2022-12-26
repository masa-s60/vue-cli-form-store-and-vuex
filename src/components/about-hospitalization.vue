<template>
  <div class="p-question-detailed" id="about-hospitalization">
    <p class="p-question-detailed__title">
      現在入院中ですか。また、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
    </p>
    <div class="p-question-detailed__answer">
      <input type="radio" id="hospitalized" name="hospitalization" v-model="$store.getters.getHospitalization" value="はい" @change="addQuestion2" @click="updateHospitalization">
      <label for="hospitalized">はい</label>
      <input type="radio" id="notHospitalized" name="hospitalization" v-model="$store.getters.getHospitalization" value="いいえ" @change="addQuestion2" @click="updateHospitalization">
      <label for="notHospitalized">いいえ</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-hospitalization',
  mounted() {
  },
  // props: {
  //   displayQuestion1: {
  //   type: String,
  //   default: 値または関数,
  //   required: 値,
  //   validator: 関数
  // },
  methods: {
    addQuestion2: function() {
      this.$emit('display-about-operated');
    },
    updateHospitalization: function(e) {
      this.$store.commit('updateHospitalization', e.target.value);
    },
  }
}
</script>