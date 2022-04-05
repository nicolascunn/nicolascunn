<template>
  <div class="case">
    <div class="case-img" :style="'background-image:url('+ img +')'"></div>
    <div class="case-text">
      <h5 v-if="name">{{ name }}</h5>
      <h3>{{ title }}</h3>
      <div class="tags" v-if="tags">
        <span class="tag" v-for="tag in tags" :key="tag"><span class="nowrap">{{ tag }}</span></span>
      </div>
      <p>{{ desc }}</p>
      <div class="buttons">
        <router-link v-if="link" class="btn btn-primary" :to="link">View case</router-link>
        <a v-if="linkExt" class="btn btn-secondary" :href="linkExt" target="_blank">Go to site</a>
      </div>
    </div><!--/case-text-->
  </div><!--/case-->
</template>

<script>
export default {

  props: ['img', 'name', 'title', 'tags', 'desc', 'link', 'linkExt'],

}
</script>

<style scoped>
.case {
  margin:1em 0;
  padding:2em 0;
  overflow: hidden;
}
.case-img {
  float:left;
  width:56%; height:340px;
  background-size:cover;
  background-position: center center;
  background-color: #1E2936;
  overflow: hidden;
  border:4px solid #1E2936;
}
.case-text {
  float:right;
  width:40%;
}
.case-img IMG {
  width:auto;
  height:340px;
}
.case-text H5 {
  margin:0;
  font-size:20px;
  color:#808080;
}
.case-text H3 {
  margin:0 0 .25em;
  font-size:30px;
}
.case-text P {
  margin:.5em 0 1em;
  font-size:18px;
}
.case-text .buttons .btn {
  display:inline-block;
  width:48%;
  margin:0 2% 0 0;
}
@media only screen and (max-width: 900px) {
  .case-img {
    float:none;
    width:auto; height:280px;
    margin:0 auto;
  }
  .case-text {
    margin-top:.5em;
    float:none;
    width:auto;
    text-align:center;
  }  
  .case-text H5 {
    font-size:18px;
  }
  .case-text H3 {
    font-size:30px;
  }
  .case-text P {
    font-size:18px;
  }
}
</style>
