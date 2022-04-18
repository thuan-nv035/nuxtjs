<template>
  <div >
    <div v-for="( dataItem,dataIndex ) in data" :key="dataIndex">
      <SingleChoice v-if="dataItem.type===1" :content="dataItem.type===1?dataItem:''" :indexContent="dataIndex"></SingleChoice>
      <InputAnswer v-if="dataItem.type===2" :content="dataItem.type===2?dataItem:''" :indexContent="dataIndex"></InputAnswer>
      <MultpleChoice v-if="dataItem.type===3" :content="dataItem.type===3?dataItem:''" :indexContent="dataIndex"></MultpleChoice>
      <SingleSelect v-if="dataItem.type===4" :content="dataItem.type===4?dataItem:''" :indexContent="dataIndex"></SingleSelect>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex";
  export default {
    name: 'IndexPage',
    computed: {
      ...mapState(['data'])
    },
  }
</script>
