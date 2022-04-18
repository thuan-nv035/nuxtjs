<template>
  <div>
<!--    {{data}}-->
    <SingleChoice></SingleChoice>
    <InputAnswer></InputAnswer>
    <MultpleChoice></MultpleChoice>
    <SingleSelect></SingleSelect>
    <button type = "button">Submit</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import InputAnswer from '@/components/InputAnswer'
  import MultpleChoice from "../components/MultpleChoice";
  import SingleChoice from '@/components/SingleChoice';
  import SingleSelect from '@/components/SingleSelect'
    export default {
        name: "Quiz",
      components: {
        InputAnswer,
        MultpleChoice,
        SingleChoice,
        SingleSelect
      },
      computed: {
          ...mapState(['data'])
      }
    }
</script>

<style scoped>

</style>
