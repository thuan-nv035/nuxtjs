<template>
  <section>
    <b>Câu hỏi : {{content.question}}</b>
    <div>Câu trả lời</div>
    <div>
      <input type="text" v-model="answerUser">
    </div>
  </section>
</template>

<script>
  import {mapMutations} from 'vuex';
  export default {
    name: "InputAnswer",
    props:['content','indexContent'],
    data() {
      return {
        answerUser: ''
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
