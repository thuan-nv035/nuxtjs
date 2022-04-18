<template>
  <section>
    <b>Câu hỏi : {{ content.question}}</b>
    <div>Câu trả lời</div>
    <div>
      <select name="" id="" v-model="answerUser">
        <option v-for="( answer,index ) in content.answers" :key="index" :value="index">{{answer}}</option>
      </select>
    </div>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: "SingleSelect",
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
