<template>
  <div id="app">
    <nav>
    </nav>
    <router-view/>
    <div class="p-move" @click="fadeIn">
      <router-link class="p-next" :to="{name: 'step2'}" v-if="($store.state.stepNumber === 1)" >次へ進む</router-link>
      <router-link class="p-next" :to="{name: 'step1'}" v-if="($store.state.stepNumber === 2)" >前に戻る</router-link>
      <router-link class="p-next" :to="{name: 'step3'}" v-if="($store.state.stepNumber === 2)" >次へ進む</router-link>
      <router-link class="p-next" :to="{name: 'step2'}" v-if="(($store.state.stepNumber === 3) && ($store.state.formSet !== 'OK'))">前に戻る</router-link>
      <router-link class="p-next" :to="{name: 'confirm'}" v-if="(($store.state.stepNumber === 3) && ($store.state.formSet !== 'OK'))" >次へ進む</router-link>
      <router-link class="p-next" :to="{name: 'step3'}" v-if="(($store.state.stepNumber === 3) && ($store.state.formSet === 'OK'))">前に戻る</router-link>
      <router-link class="p-next" :to="{name: 'step4'}" v-if="(($store.state.stepNumber === 3) && ($store.state.formSet === 'OK'))" >送信</router-link>
      <router-link class="p-next" :to="{name: 'step3'}" v-if="($store.state.stepNumber === 4)" >前に戻る</router-link>
    </div>
    <!-- router-linkタグ内にクリックイベントを記述する場合はnative記述必須 @click.native="fadeIn" -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
    }
  },
  mounted() {
    this.fadeIn();
  },
  computed: {
  },
  methods: {
    fadeIn: function() {
      const display = document.getElementById('app');
      display.classList.add('is-fade-in');
      setTimeout( () => {
        display.classList.remove('is-fade-in');
      }, 500);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
.p-form {
  border-radius: 5px;
  width: 50%;
  border: solid 1.5px rgb(27, 87, 255);
  margin: auto;
}
.p-question {
  position: relative;
}
.p-question-title {
  border: 1.5px solid rgba(1, 231, 192, 0.824);
  font-size: 2vw;
  background-color: aquamarine;
  margin: 0;
}
.p-question-detailed {
  font-size: 1.2vw;
  text-align: left;
  margin-left: 1.5vw;
  margin-bottom: 2.5vw;
}
.p-question-detailed__title {
  color: rgb(50, 88, 191);
  margin-bottom: .2vw;
}
.p-question-detailed__answer {
  display: inline-block;
  margin: 0;
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
  border-radius: 2px;
}
.p-move {
  display: flex;
  justify-content: center;
  margin-top: 3vw;
}
.p-next{
  margin-right: 2vw;
}
.p-next::after {
  content: '>';
  margin-left: 1vw;
}
.p-next,
.p-back {
  display: inline-block;
  text-decoration: none;
  font-size: 1.5vw;
  color: white;
  background-color: rgb(2, 174, 2);
  padding: .5vw 1vw;
}
.is-fade-in {
  animation: displayFadeIn .5s ease-out forwards;
}
@keyframes displayFadeIn {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}
</style>
