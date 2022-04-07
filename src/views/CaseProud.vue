<template>
  <div class="view view-case">
    <div class="main center">

      <div class="menu submenu breadcrumb">
        <ul class="no-bullets">
          <li><router-link to="/cases">Portfolio</router-link></li>
          <li>&raquo;</li>
          <li><strong>GetProud.io (2022)</strong></li>
        </ul>
      </div>

      <div class="case-text case-text-full">
        <h2>Designing and Developing an MVP in 2 months including UX Research</h2>
        <div class="tags">
          <span class="tag"><span class="nowrap">UX Research</span></span>
          <span class="tag"><span class="nowrap">Design</span></span>
          <span class="tag"><span class="nowrap">Development</span></span>
          <span class="tag"><span class="nowrap">Web3/Crypto</span></span>
        </div>
        <p>Link to website: <a href="https://getproud.io" target="_blank">GetProud.io</a></p>
        <p class="credits">Credits: Marketing led by <a href="https://www.linkedin.com/in/sergio-mandelbaum" target="_blank">Sergio Mandelbaum</a>, NFT Designs by <a href="https://www.behance.net/maritesganga" target="_blank">Marite Sganga</a>.</p>
        <p>In January 2022 I started building the MVP for Proud a team recognition software platform that allows teams to reward their colleagues with NFTs.</p>

      </div>

      <img class="image-frame" src="https://mhvnobgazgjwiuroumjw.supabase.in/storage/v1/object/public/static/preview-min.png" alt="" />


      <h4>A 3-person team</h4>
      <p>I was not alone. Sergio, my partner in QuizViajero, CoffeeBreak and other ventures, was in charge of the Marketing stuff: defining the value proposition, content for the landing page, and acquiring leads. Santiago, expert in Blockchain was in charge of providing the web3 API for minting the NFTs.</p>

      <h4>My job</h4>
      <p>As the Product co-founder I was in charge of doing the whole work of a Product squad (Design, Full-stack Development, UX Research, Testing, etc) with no budget for involving other people. Here is how I managed to build an MVP in just 10 weeks.</p>

      <h4>Week 1: Collecting potential users</h4>
      <p>Before starting to Design I created a form using Airtable to collect potential users willing to collaborate with a 30 minute call to better understand how they solve the problem nowadays. We distributed the form using Twitter, Linkedin and Mailchimp and collected info from +200 team leaders willing to collaborate during the whole process and scheduled +20 calls to better understand the problem.</p>

      <img class="image-frame" src="../../public/assets/case-proud-airtable.png" alt="" />

      <h4>Week 2: UX Research - Understanding the problem</h4>
      <p>We started scheduling calls in the first week and after two weeks of 30-minute "Problem Interviews" with potential users we felt that we had a better understanding of the problem: where do current solutions fell short, what works in a sustainable way, what kinds of tools were used in large enterprises and how do people manage recognition in small startups.</p>

      <img class="image-frame" src="../../public/assets/case-proud-interviews.png" alt="" />

      <h4>Week 3: Wireframing - Explore possible solutions</h4>
      <p>With the conclusions of the research I jumped to Figma to start sketching different solutions and after a week of iterating the wireframes with the team we managed to reach a consensus for the prototype that we were going to be building. We also tested this hypothesis calling some of the leads to be sure we were on the right path.</p>

      <img class="image-frame" src="../../public/assets/case-proud-wireframes.png" alt="" />

      <h4>Week 4: UI Design</h4>
      <p>Usually a decent nice design is enough for a first prototype, so we decided to leave the branding job for the future after a first validation and I put together a simple UI Design in a couple of hours.</p>

      <p>Even though we were not planning to spend so much time defining the branding, we wanted to focus all the design attention into the NFTs as they were the most important part of the value proposition. So I got a little help and advice from <a href="https://www.behance.net/maritesganga" target="_blank">Marite Sganga</a> to make beautiful awards.</p>

      <img class="image-frame" src="../../public/assets/case-proud-ui.png" alt="" />

      <h4>Week 5-10: Development</h4>
      <p>With my expertise in Front-end Development I quickly implemented the whole UI using Vue 3 in just a week. After that, I started building the Backend which is not my area of expertise but I could quickly implement it using Supabase.io and Vercel.</p>

      <p>The tech stack that we decided to use for the prototype with Santiago: Vue3 (frontend), Supabase.io (backend), Vercel (deployment), <a href="https://blockonelabs.com/" target="_blank">Block One</a> (NFT minting).</p>

      <img class="image-frame" src="../../public/assets/case-proud-dev.png" alt="" />

      <h4>Soft-launch</h4>
      <p>After 10 weeks and some days of internal testing and iterations we launched the product to the evergrowing database of leads that Sergio was building using LinkedIn and Twitter.</p>
      <p>Besides the Google Analytics data, I created a custom analytics page for us to track the most important KPIs day by day for User Acquisition and Engagement.</p>

      <img class="image-frame" src="../../public/assets/case-proud-analytics1.png" alt="" />

      <img class="image-frame" src="../../public/assets/case-proud-analytics2.png" alt="" />

      <h4>Continuous iterations and UX Research</h4>
      <p>By interviewing users and analysing the data, we continued tweaking the sending process to make it as easy and smooth as possible while adding new features based on user needs.</p>

      <video id="myVideo" class="image-frame" width="100%" autoplay muted poster="../../public/assets/case-proud-send.png">
          <source src="../../public/assets/case-proud-send.mp4" type="video/mp4">
      </video>

      <h4>Bonus: Daily and Weekly updates on Slack</h4>
      <p>A great suggestion from <a href="https://www.linkedin.com/in/christopherdossman" target="_blank">Chris Dossman</a>, a very important advisor in the past year for us, was adopting the habit to post daily updates on Slack at the end of the day.</p>

      <p>This small but very powerful team habit helped us keep tuned and collaborative while maximizing our focus in being productive with our tasks. Furthermore, after launch I started posting weekly updates with key metrics, achievements and milestones in the #general channel.</p> 

      <img class="image-frame" src="../../public/assets/case-proud-slack-daily.png" alt="" />

      <img class="image-frame" src="../../public/assets/case-proud-slack-weekly.png" alt="" />
        
    </div><!--/main-->
  </div><!--/view-home-->
</template>

<script>
</script>
