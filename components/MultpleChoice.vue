<template>
  <section>
    <b>Câu hỏi : {{content.question}}</b>
    <div>Câu trả lời</div>
    <div v-for="( answer,index) in content.answers" :key="index">
      <input type="checkbox" v-model="answerUser" :value="index">{{answer}}<br>
    </div>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: "MultpleChoice",
    props:['content','indexContent'],
    data() {
      return {
        answerUser:[]
      }
    },
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
