<template>
  <div class="gis-note-detail">
    <div class="note-detail-header">
      <Row>
        <i-col>
          <Input v-model="noteData.title" class="note-detail-title" placeholder="输入标题"/>
        </i-col>
        <i-col span="13" offset="1" class="note-detail-updatetime"><span>{{noteData.updatetime}}</span></i-col>
        <i-col span="9" class="note-detail-backBtn">
          <span @click.stop="backHandle"><i class="fa fa-reply"></i>返回列表</span> <span @click.stop="saveHandle"><i class="fa fa-floppy-o"></i>保存</span>
        </i-col>
      </Row>
    </div>
    <div class="note-detail-body">
      <vue-html5-editor @change="updateEditorData" :content="noteData.content" :auto-height="true" :show-module-name="true"></vue-html5-editor>
    </div>
    <div class="note-detail-footer"></div>
  </div>
</template>

<script>
  import html5Edit from "../common/vue-html-edit/html5-edit.vue";
  import { dateFormat } from "../utils/index";
  export default {
    components: {
      'vue-html5-editor': html5Edit
    },
    data() {
      return {
        noteData: {
          title: "123",
          content: "123",
          abstract: "123",
          updatetime: "2018-11-11"
        }
      }
    },
    methods: {
      backHandle() {
        this.$router.push({name: "note-list"});
      },
      saveHandle() {
        let time1 = new Date();
        time1 = dateFormat("yyyy-MM-dd hh:mm:ss", time1);
        this.updatetime = "";
        console.log(time1);
      },
      updateEditorData(val) {
        this.noteData.content = val;
      }
    },
    mounted() {
      debugger;
      if (this.$router.currentRoute.name === "note-detail") {
        let noteId = this.$router.currentRoute.params.noteid || "";
        // 根据noteid获取详情
        if (noteId) {
        } else {
          // 返回列表
          this.$router.push({name: "note-list"});
        }
      }
    }
  }
</script>

<style lang="less">
  .note-detail-header{
    padding-top:20px;
    margin-bottom:20px;
    border-bottom:1px solid #dddddd;
  }
  .note-detail-title{
    input{
      font-size:25px;
      text-align:center;
      background-color:#ecf0f6;
      border:0px;
    }
  }
  .note-detail-updatetime{
    font-size:16px;
    text-align:left;
    color:grey;
  }
  .note-detail-backBtn{
    font-size:16px;
    text-align:right;
    color:grey;
    cursor:pointer;
    i{
      padding:0 5px;
    }
    span{
      margin-left:10px;
      &:hover{
        color:#2d8cf0;
      }
    }
  }
  .note-detail-body{
    height:80vh;
    .vue-html5-editor{
      height:100%;
    }
  }
</style>
