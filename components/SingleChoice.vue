<template>
  <div>
    <section>
      <b>Câu hỏi : {{ content.question }}</b>
      <div>Câu trả lời</div>
      <div v-for="( answer,index ) in content.answers" :key="index">
        <input type="radio" name="ranswer" v-model="answerUser" :value="index">{{ answer }}<br>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: "SingleChoice",
    data() {
      return {
        answerUser: ''
      }
    },
    props: ['content', 'indexContent'],
    methods: {
      ...mapMutations(['setAnswerUser']),
    },
    watch: {
      answerUser(newValue,oldValue) {
        this.setAnswerUser({index: this.indexContent, correct: newValue});
      }
    }
  }
</script>

<style scoped>
</style>
