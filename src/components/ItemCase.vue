<template>
  <div class="case">
    <div class="case-img">
      <router-link :to="link"><img :src="img" alt="" /></router-link>
      <div v-if="availability == 'soon'" class="ribbon-soon"></div>
    </div>
    <div class="case-text">
      <h5 v-if="name">{{ name }}</h5>
      <h3>{{ title }}</h3>
      <div class="tags" v-if="tags">
        <span class="tag" v-for="tag in tags" :key="tag"><span class="nowrap">{{ tag }}</span></span>
      </div>
      <p>{{ desc }}</p>
      <h6 v-if="credits">Credits: {{ credits }}</h6>
      <div class="buttons">
        <router-link v-if="link && availability != 'soon'" class="btn btn-primary" :to="link">View case</router-link>
        <a v-if="linkExt" class="btn btn-secondary" :href="linkExt" target="_blank">Go to site</a>
      </div>
    </div><!--/case-text-->
  </div><!--/case-->
</template>

<script>
export default {

  props: ['img', 'name', 'title', 'tags', 'desc', 'link', 'linkExt', 'availability', 'credits'],

}
</script>

<style>
.case {
  margin:1em 0;
  padding:2em 0;
  clear:both;
}
.case-text,
.case-img {
  margin-bottom:3em;
}
.case-img {
  float:left;
  width:56%;
}
.case-text {
  float:right;
  width:40%;
}
.case-img IMG {
  width:100%;
  vertical-align: top;
  cursor:pointer;
  border:2px solid #3B82F6;
  border-radius:16px;
}
.case-img A {
  display:block;
  cursor:pointer;
}
.case-text H5 {
  margin:0;
  font-size:20px;
  color:#68727E;
}
.case-text H2 {
  margin:0 0 .25em;
  font-size:40px;  
}
.case-text H3 {
  margin:0 0 .25em;
  font-size:30px;
}
.case-text H6 {
  margin:.5em 0 1em;
  font-size:14px;
  line-height:1.2;
  font-weight:normal;
  color:#68727E;
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
.case-img {
  position:relative;
}
.ribbon-soon {
  position:absolute;
  width:200px; height:170px;
  top:-30px; left:-38px;
  z-index:1;
  background:url('/assets/ribbon-comingsoon-study.png') no-repeat top left;
  background-size:contain;
}
@media only screen and (max-width: 900px) {
  .case-img {
    float:none;
    width:auto; height:auto;
    margin:0 auto;
  }
  .case-text {
    margin-top:.5em;
    float:none;
    width:auto;
    text-align:left;
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
  .ribbon-soon {
    width:120px; height:101px;
    top:-10px; left:-22px;
  }
  .case-text,
  .case-img {
    margin-bottom:1.5em;
  }
}
</style>
