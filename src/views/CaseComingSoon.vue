<template>
  <div class="view view-case">

    <div class="main">
      <div class="menu submenu breadcrumb">
        <ul class="no-bullets">
          <li><router-link to="/cases">Portfolio</router-link></li>
          <li>&raquo;</li>
          <li><strong>Coming Soon...</strong></li>
        </ul>
      </div>
      <div class="case-text">
        <h2>🚧 This case study is coming soon...</h2>
        <p>Thanks for your patience.</p>
      </div>

      <h3 style="margin-bottom:-30px;">Find here all the available cases:</h3>
      <div class="cases">
        <item-case
          name="GetProud.io (2022)"
          img="https://mhvnobgazgjwiuroumjw.supabase.in/storage/v1/object/public/static/preview-min.png"
          title="Designing and Developing an MVP in 2 months"
          :tags="['UX Research', 'Design', 'Development']"
          desc="In January 2022 I started building the MVP for Proud a team recognition software platform that allows teams to reward their colleagues with NFTs."
          link="/cases/proud"
          linkExt="https://getproud.io"
        ></item-case>
    </div><!--/cases-->

    </div><!--/main-->
  </div><!--/view-home-->
</template>

<script>
import ItemCase from '../components/ItemCase.vue'

export default {

  components: {
    'item-case': ItemCase,
  },

}
</script>
