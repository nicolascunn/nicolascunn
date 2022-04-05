<template>
  <div class="view-portfolio">
    <div class="main">
      <div class="cases">

        <div class="cases-intro first">
          <h2>My Portfolio</h2>
          <p>A journey from Front-end Developer to Startup Founder.</p>
          <div class="menu submenu">
            <ul class="no-bullets">
              <li><a href="#" @click.prevent="scrollMeTo('frontend')">Front-end Dev</a></li>
              <li><a href="#" @click.prevent="scrollMeTo('designer')">UI Designer</a></li>
              <li><a href="#" @click.prevent="scrollMeTo('ux-lead')">UX Lead</a></li>
              <li><a href="#" @click.prevent="scrollMeTo('ux-consultant')">UX Consultant</a></li>
              <li><a href="#" @click.prevent="scrollMeTo('product-manager')">Product Manager</a></li>
              <li><a href="#" @click.prevent="scrollMeTo('founder')">Startup Founder</a></li>
            </ul>
          </div>
        </div>

        <div class="cases-intro anchor" ref="founder">
          <h3>My work as a startup founder</h3>
          <p>Between 2018 and 2022 I've been building digital products from scratch with <a href="https://www.linkedin.com/in/sergio-mandelbaum" target="_blank">Sergio Mandelbaum</a>. I managed design and development teams with super talented people such as <a href="https://www.behance.net/maritesganga" target="_blank">Marité Sganga</a> (UX/UI Designer), <a href="https://www.trescientosuno.com/" target="_blank">Gonzalo Frery</a> (Director of Trescientosuno.com), <a href="https://www.linkedin.com/in/roymagarinos/" target="_blank">Roy Magariños</a> (Director of Digilearnnials.com) amongst others. I was also involved in CEO tasks such as fundraising, pitching, and envisioning.</p>          
        </div>

        <item-case
          name="GetProud.io (2022)"
          img="https://mhvnobgazgjwiuroumjw.supabase.in/storage/v1/object/public/static/preview-min.png"
          title="Designing and Developing an MVP in 2 months"
          :tags="['UX Research', 'Design', 'Development']"
          desc="In January 2022 I started building the MVP for Proud a team recognition software platform that allows teams to reward their colleagues with NFTs."
          linkExt="https://getproud.io"
        ></item-case>

        <item-case
          name="CoffeeBreakGame.com (2020-2021)"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6caf7e104294611.5f6001390bcea.jpg"
          title="Bootstrapping a B2B SaaS to break-even"
          desc=""
          linkExt="https://coffeebreakgame.com"
        ></item-case>

        <item-case
          name="TheMillionDollarGame.co (2020-2021)"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/90459f131545483.6196cda82ab72.jpg"
          title="Managing the Design and Development teams of a real-money mobile game"
          desc=""
          linkExt="https://themilliondollargame.co"
        ></item-case>

        <item-case
          name="CryptoQuiz (2020)"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/df24c3131547185.6196d95f66b2c.jpg"
          title="Managing the Design and Development teams of a crypto game"
          desc=""
        ></item-case>

        <item-case
          name="QuizViajero (2017-2020)"
          img="../assets/cases-quizviajero.png"
          title="Creating the first mobile game for travel lovers"
          desc=""
          linkExt="https://quizviajero.com"
        ></item-case>

        <item-case
          name="QuizViajero for Airports (2019)"
          img="../assets/cases-quizviajero-aeropuertos.png"
          title="QuizViajero for Airports"
          desc="In January 2022 I started building the MVP for Proud a team recognition software platform that allows teams to reward their colleagues with NFTs."
        ></item-case>

        <item-case
          name="QuizViajero Family (2020)"
          img="https://quizviajero.com/blog/wp-content/uploads/2020/03/2-covers-768x512.jpg"
          title="Weekly printable and online travel games for families in lockdown"
          desc="When the COVID-19 pandemic started and all our revenue sources from QuizViajero went to zero, we quickly started creating printable games for families in lockdown."
          linkExt="https://quizviajero.com/blog/quizviajero-family-juegos-de-viajes-para-grandes-y-chicos/"
        ></item-case>

        <item-case
          name="LineupBuilder.com (2011)"
          img="../assets/cases-lineupbuilder.png"
          title="Creating a 5 Million PageViews per month webapp"
          desc="In 2011 I created a tool for sports bloggers to build beautiful football formations and share them on their sites."
          linkExt="https://lineupbuilder.com"
        ></item-case>

        <div class="cases-intro anchor" ref="product-manager">
          <h3>My work as a Product Manager</h3>
          <p>Between 2015 and 2018 I've been working as a Product Manager and UX Researcher in early stage startups. I had the opportunity to lead teams of +10 designers, developers, marketers and other cross-functional specialists to build products people love and drive growth.</p>
        </div>

        <item-case
          name="Teatrix.com (2017-2018)"
          img="../assets/cases-teatrix.jpg"
          desc=""
          link=""
        ></item-case>

        <item-case
          name="Purga.tv (2017-2018)"
          img="../assets/cases-purga2.jpg"
          title=""
          desc=""
          link=""
        ></item-case>

        <item-case
          name="YaSports.com (2015-2016)"
          img="../assets/cases-yasports.jpg"
          title=""
          desc=""
          link=""
        ></item-case>

        <div class="cases-intro anchor" ref="ux-consultant">
          <h3>My work as a UX Consultant</h3>
          <p>I also love to help other early stage startups build their MVPs with a tight budget but a huge ambition in terms of product quality. Working alone or involving other designers such as <a href="https://www.behance.net/maritesganga" target="_blank">Marité Sganga</a> and <a href="https://www.behance.net/nicolaspenco" target="_blank">Nicolás Penco</a>, we achieved great results in all these projects.</p>
        </div>

        <item-case
          name="Índigo MVP (2021)"
          img="../assets/cases-indigo.jpg"
          desc=""
          link=""
        ></item-case>

        <item-case
          name="LiteupMedia MVP (2020)"
          img="../assets/cases-liteupmedia.jpg"
          desc=""
          link=""
        ></item-case>

        <item-case
          name="Qu3Bola MVP (2020)"
          img="../assets/cases-qu3bola.jpg"
          desc=""
          link=""
        ></item-case>

        <div class="cases-intro anchor" ref="ux-lead">
          <h3>My work as a UX Lead</h3>
          <p>Between 2012 and 2015 I became a Senior UX Researcher and led UX Teams in <a href="https://kambrica.com" target="_blank">Kambrica</a> and Keikendo with some of the most influential professionals in the UX Industry in Argentina (<a href="https://www.linkedin.com/in/santiagobustelo" target="_blank">Santiago Bustelo</a>, <a href="https://www.linkedin.com/in/smfqv" target="_blank">Sebastián Fernandez Quezada</a> and <a href="https://www.linkedin.com/in/juanmanuelcarraro" target="_blank">Juan Manuel Carraro</a>).</p>
        </div>

        <item-case
          name="Wayra (2012-2015)"
          img="https://kambrica.com/wp-content/uploads/2015/05/Wayra_04.jpg"
          title="Usability Testing with multiples startups"
          :tags="['UX Lead','Design Thinking','Usability Testing']"
          desc="Working in Kambrica.com I had the honor to lead a team of UX Specialists to help Telefónica and Movistar Product Managers adopting user-centered design."
          linkExt="https://www.kambrica.com/telefonica-y-movistar/"
        ></item-case>

        <item-case
          img="http://i1.kambrica.com/wp-content/uploads/2018/03/telefonica_destacada.png"
          name="Telefónica/Movistar (2012-2015)"
          title="Leading UX Research in multiple projects"
          :tags="['UX Lead','UX Research','Wireframing','UI Design', 'A/B Testing', 'Analytics', 'Design Thinking']"
          desc="Working in Kambrica.com I had the honor to lead a team of UX Specialists to help Telefónica and Movistar Product Managers adopting user-centered design."
          linkExt="https://www.kambrica.com/telefonica-y-movistar/"
        ></item-case>

        <div class="cases-intro anchor" ref="designer">
          <h3 class="anchor" ref="frontend">My work as a Front-end Dev/UI Designer</h3>
          <p>Between 2008 and 2011 I worked in Icograma with <a href="https://www.linkedin.com/in/santiagobustelo" target="_blank">Santiago Bustelo</a>, one of the most influential UX Designers in LATAM, where I developed an expertise in Front-end Dev and UI Design.</p>
        </div>

        <item-case
          name="Jumbo A Casa (2011)"
          img="https://kambrica.com/wp-content/uploads/2015/03/jumbo_03.jpg"
          title="Front-end Development for one of the most important online Retails in Argentina."
          :tags="['Front-end', 'Cross-browser', 'Usability Testing']"
          desc="I was in charge of coding a pixel-perfect front-end implementation of the design previously validated with usability studies."
          linkExt="https://www.kambrica.com/jumbo-casa-rediseno-del-sitio-web/"
        ></item-case>

        <item-case
          name="Santander (2010)"
          img="https://i1.kambrica.com/wp-content/uploads/2015/03/santander_01.jpg"
          title="Responsive Front-end Development with accessibility standards"
          :tags="['Front-end', 'Accesibility', 'Responsive']"
          desc="I was in charge of building the front-end of a complex 5 step form for acquiring online a package of the bank."
          linkExt="https://www.kambrica.com/disenamos-un-proceso-de-adquisicion-4-veces-mas-efectivo/"
        ></item-case>

        <item-case
          name="GuíaOleo (2009)"
          img="https://kambrica.com/wp-content/uploads/2010/10/guioleo_06-1.jpg"
          title="Modularized Front-end Development and Usability Testing."
          :tags="['Usability Testing', 'Paper Prototyping', 'Front-end']"
          desc="I was in charge of coding a pixel-perfect front-end implementation of the design previously validated with usability studies."
          linkExt="https://www.kambrica.com/guia-oleo/"
        ></item-case>

      </div><!--/cases-->
    </div><!--/main-->
  </div><!--/view-portfolio-->
</template>

<script>
import ItemCase from '../components/ItemCase.vue'

export default {

  components: {
    'item-case': ItemCase,
  },
  
	methods: {
		scrollMeTo(refName) {
			var element = this.$refs[refName];
			var top = element.offsetTop-50;
			window.scroll({
				top: top,
				behavior: 'smooth'
			})
		},
  }

}
</script>

<style scoped>
.cases-intro {
  margin-top:3em;
  text-align:center;    
}
.cases-intro.first {
  margin-top:0em;
}
.cases-intro H2 {
  margin:.5em 0 0;
  font-size:60px;
  line-height:1.2;
}
.cases-intro H3 {
  margin:.5em 0 0;
  font-size:45px;
  line-height:1.2;
}
.cases-intro P {
  margin:.5em 0;
}
@media only screen and (max-width: 900px) {
  .cases-intro H2 {
    font-size:30px;
  }
  .cases-intro H3 {
    font-size:24px;
  }
}
</style>