<template>
  <div class="view view-portfolio">
    <div class="main">
      <div class="cases">

        <h2>Portfolio</h2>
        <p>A journey from Front-end Developer in 2008 to Startup Founder.</p>
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

        <div class="cases-intro first anchor" ref="founder">
          <h3>My work as a startup founder</h3>
          <p>Between 2018 and 2022 I've been building digital products from scratch with <a href="https://www.linkedin.com/in/sergio-mandelbaum" target="_blank">Sergio Mandelbaum</a>. I managed design and development teams with super talented people such as <a href="https://www.behance.net/maritesganga" target="_blank">Marité Sganga</a> (UX/UI Designer), <a href="https://www.trescientosuno.com/" target="_blank">Gonzalo Frery</a> (Director of Trescientosuno.com), <a href="https://www.linkedin.com/in/roymagarinos/" target="_blank">Roy Magariños</a> (Director of Digilearnnials.com) amongst others. I was also involved in CEO tasks such as fundraising, pitching, and envisioning.</p>          
        </div>

        <item-case
          name="GetProud.io (2022)"
          img="../assets/cases-proud.png"
          title="Designing and Developing an MVP in 2 months including UX Research"
          :tags="['UX Research', 'Design', 'Development', 'Web3/Crypto']"
          desc="In January 2022 I started building the MVP for Proud a team recognition software platform that allows teams to reward their colleagues with NFTs."
          credits="Marketing led by Sergio Mandelbaum, NFT Designs by Marite Sganga."
          link="/cases/proud"
          linkExt="https://getproud.io"
        ></item-case>

        <item-case
          name="CoffeeBreakGame.com (2020-2021)"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6caf7e104294611.5f6001390bcea.jpg"
          title="Bootstrapping a B2B SaaS to 200K users"
          :tags="['UX Research', 'Wireframing', 'Development', 'Design & Dev Management', 'Sales', 'B2B', 'SaaS', 'Growth', 'Email Marketing', 'Pitching', 'Gamification']"
          desc="Due to the COVID-19 pandemic our revenue streams with our previous startup in the travel industry went down to zero, but we quickly pivoted to building socializing games for remote teams."
          credits="Marketing, Sales & Community-building led by Sergio Mandelbaum, UI Design by Marite Sganga, Development by Trescientosuno.com."
          link="/cases/coffeebreakgame"
          linkExt="https://coffeebreakgame.com"
          availability="soon"
        ></item-case>

        <item-case
          name="TheMillionDollarGame.co (2020-2021)"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/90459f131545483.6196cda82ab72.jpg"
          title="Managing the Design and Development teams of a real-money mobile game"
          :tags="['CTO', 'Design & Dev Management', 'Wireframing', 'UX Research', 'Surverys', 'Analytics', 'Agile Methodologies']"
          desc="With the experience gained building QuizViajero APP we partnered with the TheMillionDollarGame team to build a mobile game for the US with real-money prizes."
          credits="Marketing led by Sergio Mandelbaum, Game Mechanics by Digilearnnials.com, UI Design by Marite Sganga, Development by Trescientosuno.com, TheAppMaster.com and Juan Cruz Romero García."
          link="/cases/themilliondollargame"
          linkExt="https://themilliondollargame.co"
          availability="soon"
        ></item-case>

        <item-case
          name="CryptoQuiz (2020)"
          img="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/df24c3131547185.6196d95f66b2c.jpg"
          title="Managing the Design and Development teams of a crypto game"
          :tags="['Design & Dev Management', 'Wireframing', 'UX Research', 'Web3/Crypto', 'Agile Methodologies']"
          desc="With the experience gained building QuizViajero APP we partnered with the IOVLabs team to build a crypto trivia game."
          credits="Marketing led by Sergio Mandelbaum, Game Mechanics by Digilearnnials.com, UI Design by Marite Sganga, Development by Trescientosuno.com, TheAppMaster.com and Juan Cruz Romero García."
          link="/cases/cryptoquiz"
          availability="soon"
        ></item-case>

        <item-case
          name="QuizViajero (2017-2020)"
          img="../assets/cases-quizviajero.png"
          title="Creating the first mobile game for travel lovers with +100K downloads"
          :tags="['CTO', 'UX Research', 'Wireframing', 'Development', 'Design & Dev Management', 'Sales', 'Growth', 'Email Marketing', 'Pitching', 'Gamification', 'Ads Monetization', 'Community-building']"
          desc="QuizViajero is a mobile game for travel lovers with +100 travel destinations of the World and real prizes and discounts for travelers."
          credits="Marketing, Sales & Community-building led by Sergio Mandelbaum, UI Design by Marite Sganga, Development by Trescientosuno.com and Juan Cruz Romero García, the support of multiple investors and a the best community of travel lovers in Argentina @quiz_viajero in Twitter."
          link="/cases/quizviajero"
          linkExt="https://quizviajero.com"
          availability="soon"
        ></item-case>

        <item-case
          name="QuizViajero for Airports (2019)"
          img="../assets/cases-quizviajero-aeropuertos.png"
          title="Developing and validating with field studies a game for airport boarding gates."
          :tags="['B2B', 'Wireframing', 'Field Studies', 'Design & Dev Management', 'Gamification']"
          desc="In December 2019 we developed an interactive game to make waiting for boarding your plane fun. I run the design, development and field studies for testing the prototype in the airport with 5 iterations."
          link="/cases/quizviajero-airports"
          credits="Marketing led by Sergio Mandelbaum, UI Design by Marite Sganga, Development by Trescientosuno.com."
          availability="soon"
        ></item-case>

        <item-case
          name="QuizViajero Family (2020)"
          img="https://quizviajero.com/blog/wp-content/uploads/2020/03/2-covers-768x512.jpg"
          title="Weekly printable and online travel games for families in lockdown"
          :tags="['Development', 'Gamification']"
          desc="When the COVID-19 pandemic started and all our revenue sources from QuizViajero went to zero, we quickly started creating printable games for families in lockdown."
          link="/cases/quizviajero-family"
          credits="Marketing & Sales led by Sergio Mandelbaum, Design by Marite Sganga."
          linkExt="https://quizviajero.com/blog/quizviajero-family-juegos-de-viajes-para-grandes-y-chicos/"
          availability="soon"
        ></item-case>

        <item-case
          name="LineupBuilder.com (2011)"
          img="../assets/cases-lineupbuilder.png"
          title="Creating a 5 Million PageViews per month webapp"
          :tags="['Side-hustle', 'Design', 'Development', 'Analytics', 'Growth Hacking', 'Virality', 'Ads Monetization']"
          desc="In 2011 I created a tool for sports bloggers to build beautiful football formations and share them on their sites."
          link="/cases/lineupbuilder"
          linkExt="https://lineupbuilder.com"
          availability="soon"
        ></item-case>

        <div class="separator"></div>

        <div class="cases-intro anchor" ref="product-manager">
          <h3>My work as a Product Manager</h3>
          <p>Between 2015 and 2018 I've been working as a Product Manager and UX Researcher in early stage startups. I had the opportunity to lead teams of +10 designers, developers, marketers and other cross-functional specialists to build products people love and drive growth.</p>
        </div>

        <item-case
          name="Teatrix.com (2017-2018)"
          img="../assets/cases-teatrix.jpg"
          title='From "Product-Market Fit" to "Ready to grow" and tripling the subscribers and revenue'
          :tags="['Product Management', 'UX Research', 'KPIs', 'Dashboard Building', 'SaaS', 'Design and Dev Management', 'Agile Methodologies', 'Marketing Management', 'Facebook/Google Ads', 'Content Delivery Networks', 'Subscription Platforms', 'Mobile/SmartTV Development']"
          desc="I joined Teatrix after they reached 2K paying subscribers 3 years after launching and left 1 year and a half later with 10K subscribers."
          credits="Thanks to the founders and directors of Teatrix.com for the trust and the support when I left to become an entrepreneur."
          link="/cases/teatrix"
          linkExt="https://teatrix.com"
          availability="soon"
        ></item-case>

        <item-case
          name="Purga.tv (2017-2018)"
          img="../assets/cases-purga2.jpg"
          title='Launching a Subscription Video On-Demand Platform for horror movies fans in 4 months'
          :tags="['Product Management', 'CTO', 'UX Research', 'Surveys', 'Interviews', 'KPIs', 'Dashboard Building', 'SaaS', 'Design and Dev Management', 'Agile Methodologies']"
          desc="I joined Purga as the CTO and Product Manager with the goal of running user research studies and build an MVP that ensures a great product-market fit for the launch."
          credits="Was made possible thanks to the leadership of Sergio Mandelbaum (CEO) and Laura Santiago (COO)."
          link="/cases/purga"
          linkExt="https://www.pandaancha.mx/noticias/peliculas-de-terror-en-linea-que-es-purga-tv-cine-de-terror.html"
          linkExtLabel="Learn more"
          availability="soon"
        ></item-case>

        <item-case
          name="YaSports.com (2015-2016)"
          img="../assets/cases-yasports.jpg"
          :tags="['Product Management', 'UX Research', 'Surveys', 'Interviews', 'KPIs', 'Dashboard Building', 'SaaS', 'Design and Dev Management', 'Agile Methodologies']"
          title="Launching a Subscription Video On-Demand Platform for sports fans in LATAM"
          desc="I joined YaSports as the Product Manager with the goal of running user research studies and build an MVP that ensures a great product-market fit for the launch."
          link="/cases/yasports"
          linkExt="https://tecnogaming.com/yasports-es-la-nueva-plataforma-ondemand-para-deportes/"
          linkExtLabel="Learn more"
          availability="soon"
        ></item-case>

        <div class="separator"></div>

        <div class="cases-intro anchor" ref="ux-consultant">
          <h3>My work as a UX Consultant</h3>
          <p>I also love to help other early stage startups build their MVPs with a tight budget but a huge ambition in terms of product quality. Working alone or involving other designers such as <a href="https://www.behance.net/maritesganga" target="_blank">Marité Sganga</a> and <a href="https://www.behance.net/nicolaspenco" target="_blank">Nicolás Penco</a>, we achieved great results in all these projects.</p>
        </div>

        <item-case
          name="Índigo MVP (2021)"
          img="../assets/cases-indigo.jpg"
          title="Managing the UX/UI design of a fitness & wellness app"
          :tags="['Design Management', 'UX Expert Reviews']"
          desc="I worked with Marite Sganga and the team of Indigo to design the MVP for Indigo in 6 weeks."
          link="/cases/indigo"
          credits="UX/UI Design by Marité Sganga."
          availability="soon"
        ></item-case>

        <item-case
          name="LiteupMedia MVP (2020)"
          img="../assets/cases-liteupmedia.jpg"
          title="Managing the UX/UI design of an affiliate marketing platform for influencers"
          :tags="['Design Management', 'UX Expert Reviews']"
          desc="I worked with Marite Sganga, Nicolas Penco and the founders of LiteupMedia to design the MVP of the platform in 12 weeks."
          link="/cases/liteupmedia"
          credits="Wireframes by Marité Sganga and UI Design by Nicolás Penco."
          availability="soon"
        ></item-case>

        <item-case
          name="Qu3Bola MVP (2020)"
          img="../assets/cases-qu3bola.jpg"
          title="Redesigning a reseller platform for internet and mobile top-up."
          :tags="['Wireframe and UI Design', 'Responsive Design', 'UX Expert Reviews']"
          desc="I worked with Marite Sganga and the founders of Qu3Bola to redesign the reseller admin panel."
          link="/cases/quebola"
          credits="UI Design by Marité Sganga"
          availability="soon"
        ></item-case>

        <div class="separator"></div>

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
          link="/cases/wayra"
          linkExt="https://www.kambrica.com/lean-ux-ayudamos-a-35-startups-a-impulsar-su-negocio/"
          linkExtLabel="Read case (Spanish)"
          credits="A program run by Santiago Bustelo (Director of Kambrica.com), Sebastián Fernández Quesada and Juan Manuel Carraro."
          availability="soon"
        ></item-case>

        <item-case
          img="http://i1.kambrica.com/wp-content/uploads/2018/03/telefonica_destacada.png"
          name="Telefónica/Movistar (2012-2015)"
          title="Leading UX Research in multiple projects"
          :tags="['UX Lead','UX Research','Wireframing','UI Design', 'A/B Testing', 'Analytics', 'Design Thinking']"
          desc="Working in Kambrica.com I had the honor to lead a team of UX Specialists to help Telefónica and Movistar Product Managers adopting user-centered design."
          link="/cases/telefonica-movistar"
          linkExt="https://www.kambrica.com/telefonica-y-movistar/"
          linkExtLabel="Read case (Spanish)"
          credits="Backed by Santiago Bustelo (Director of Kambrica.com)."
          availability="soon"
        ></item-case>

        <div class="separator"></div>

        <div class="cases-intro anchor" ref="designer">
          <h3 class="anchor" ref="frontend">My work as a Front-end Dev/UI Designer</h3>
          <p>Between 2008 and 2011 I worked in Icograma with <a href="https://www.linkedin.com/in/santiagobustelo" target="_blank">Santiago Bustelo</a>, one of the most influential UX Designers in LATAM, where I developed an expertise in Front-end Dev and UI Design.</p>
        </div>

        <item-case
          name="Jumbo A Casa (2011)"
          img="https://kambrica.com/wp-content/uploads/2015/03/jumbo_03.jpg"
          title="Front-end Development for one of the most important online groceries stores in Argentina."
          :tags="['Front-end', 'Cross-browser', 'Usability Testing']"
          desc="I was in charge of coding a pixel-perfect front-end implementation of the design previously validated with usability studies."
          link="/cases/jumboacasa"
          linkExt="https://www.kambrica.com/jumbo-casa-rediseno-del-sitio-web/"
          linkExtLabel="Read case (Spanish)"
          credits="UX/UI Design by Santiago Bustelo (Director of Kambrica.com) and Pamela Vanni."
          availability="soon"
        ></item-case>

        <item-case
          name="Santander (2010)"
          img="https://i1.kambrica.com/wp-content/uploads/2015/03/santander_01.jpg"
          title="Responsive Front-end Development with accessibility standards"
          :tags="['Front-end', 'Accesibility', 'Responsive']"
          desc="I was in charge of building the front-end of a complex 5 step form for acquiring online a package of the bank."
          link="/cases/santander"
          linkExt="https://www.kambrica.com/disenamos-un-proceso-de-adquisicion-4-veces-mas-efectivo/"
          linkExtLabel="Read case (Spanish)"
          credits="UX/UI Design by Santiago Bustelo (Director of Kambrica.com) and Pamela Vanni."
          availability="soon"
        ></item-case>

        <item-case
          name="GuíaOleo (2009)"
          img="https://kambrica.com/wp-content/uploads/2010/10/guioleo_06-1.jpg"
          title="Modularized Front-end Development and Usability Testing."
          :tags="['Usability Testing', 'Paper Prototyping', 'Front-end']"
          desc="I was in charge of coding a pixel-perfect front-end implementation of the design previously validated with usability studies."
          link="/cases/guiaoleo"
          linkExt="https://www.kambrica.com/guia-oleo/"
          linkExtLabel="Read case (Spanish)"
          credits="UX/UI Design by Santiago Bustelo (Director of Kambrica.com) and Pamela Vanni."
          availability="soon"
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

<style>
.cases-intro {
  text-align:left;    
  clear:both;
  overflow:hidden;
}
.cases-intro.first {
  margin-top:0em;
}
.view-portfolio H2 {
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
.separator {
  clear:both;
  height:80px;
}
@media only screen and (max-width: 900px) {
  .cases-intro {
    text-align:left;    
  }
  .cases-intro H2 {
    font-size:40px;
  }
  .cases-intro H3 {
    font-size:30px;
  }
}
</style>
