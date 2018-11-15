<template>
<div class="gis-note-list">
  <div class="gis-note-header">
    <Row>
      <i-col span="10">
        <i-input class="note-search" v-model="searchText" placeholder="请输入...">
          <Select v-model="searchField" slot="prepend" style="width: 80px">
            <Option value="title">标题</Option>
            <Option value="abstract">摘要</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
        </i-input>
      </i-col>
      <i-col span="4" offset="1">
        <Button type="primary" @click.stop="createNote">添加</Button>
      </i-col>
    </Row>
  </div>
  <!--body-->
  <div class="gis-note-body">
    <Row v-for="item in noteModules" :key="item.noteid">
      <i-col class="note-title"><span @click.stop="checkDetail(item)">{{item.title}}</span></i-col>
      <i-col class="note-abstract"><span>{{item.abstract}}</span></i-col>
      <i-col>
        <Row>
          <i-col class="note-updatetime"> {{item.updatetime}}</i-col>
        </Row>
      </i-col>
    </Row>
  </div>
  <div class="gis-note-footer">
    <Page :total="100"></Page>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      searchField: "title",
      searchText: "",
      noteModules: [
        {
          noteid: 5,
          title: "132",
          updatetime: "2018-11-14",
          username: 'zzy',
          abstract: "简介"
        }
      ]
    }
  },
  methods: {
    checkDetail(item) {
      this.$router.push({
        name: "note-detail", params: {noteid: item.noteid}
      });
    },

    createNote() {
      this.$router.push({name: "note-create"});
    }
  }
}
</script>

<style lang="less">
.gis-note-list{
  width:100%;
  height:100vh;
  padding:0 10%;
  .note-title{
    font-size:25px;
    text-align:left;
    cursor:pointer;
    &:hover{
      color:#f00000;
    }
  }
  .note-abstract{
    font-size:16px;
    color:grey;
    text-align:left;
  }
  .note-updatetime{
    color:grey;
    text-align:left;
  }
}
.gis-note-body{
  > .ivu-row{
    border-bottom:1px solid #dddddd;
  }
}
.gis-note-header{
  height:20%;
  text-align:left;
  padding:5% 0;
  border-bottom:1px solid #dddddd;
}
.gis-note-footer{
  padding:10px;
}
</style>
