<template>
  <div>
    <Hero />
    <section class="section">
      <VGrid variant="container">
        <VRow>
          <VCol :variants="[ 'md-no-gutters', 'md-8', 'md-offset-2' ]">
            <div class="headline  headline--boxed">
              <h2 class="headline__title">Why Megastar?</h2>
              <p>We can put you in front of more people because we focus on their needs.It’s called Consumer-Driven Marketing and it makes perfect sense for the retirement-planning industry. We can put you in front of more people because we focus on their needs.It’s called Consumer-Driven Marketing.</p>
              <p>Let’s face it – in today’s super-connected world everyone has the ability to research anything at the speed of the internet.</p>
              <p><a href="" class="link link--big"><span>Learn More</span> <sup>↗</sup></a></p>
            </div>
          </VCol>
        </VRow>
      </VGrid>
    </section>
    <section class="section" style="overflow: hidden;">
      <div class="section--bg"></div>
      <VGrid variant="container">
        <VRow>
          <VCol :variants="[ 'md-6', 'md-offset-3' ]">
            <div class="headline  text-center  headline--mb">
              <h2 class="headline__title">Services at your Fingertips</h2>
              <p class="headline__content  headline__content--small">Our core business models help you establish your name brand as a trusted source for financial services.</p>
            </div>
          </VCol>
        </VRow>
        <VRow>
          <VCol :variants="[ 'md-4', 'no-gutters' ]">
            <Tabs />
          </VCol>
          <VCol :variants="[ 'md-6', 'md-offset-1' ]">
            <TabContent />
          </VCol>
        </VRow>
      </VGrid>
    </section>
    <section class="section" ref="features">
      <div class="feature-wrap">
        <VGrid variant="container">

          <div class="feature-slider" ref="featureSlider">
            <VRow>
              <VCol :variants="[ 'md-3', 'align-center' ]">
                <div class="headline" ref="featureSliderContent">
                  <h2 class="headline__title">Training & Development</h2>
                  <p class="headline__content">All of our core business models are built upon the same growth strategy – to establish your name brand as a trusted source for financial services within your community.</p>
                </div>
              </VCol>
              <VCol :variants="[ 'md-8', 'md-offset-1' ]">
                <ul class="feature-slider__slides" ref="featureSliderSlides">
              <li class="feature-slider__slide">
                <div class="icn">
                  <img src="coffee-mug.svg" alt="">
                </div>
                <h3>Coffee 4 Closers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              </li>
              <li class="feature-slider__slide">
                <div class="icn">
                  <img src="coffee-mug.svg" alt="">
                </div>
                <h3>Coffee 4 Closers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              </li>
              <li class="feature-slider__slide">
                <div class="icn">
                  <img src="coffee-mug.svg" alt="">
                </div>
                <h3>Coffee 4 Closers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              </li>
              <li class="feature-slider__slide">
                <div class="icn">
                  <img src="coffee-mug.svg" alt="">
                </div>
                <h3>Coffee 4 Closers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              </li>
              <li class="feature-slider__slide">
                <div class="icn">
                  <img src="coffee-mug.svg" alt="">
                </div>
                <h3>Coffee 4 Closers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore</p>
              </li>
            </ul>
              </VCol>
            </VRow>

          </div>
        </VGrid>
      </div>
    </section>
    <section class="section">
      <VGrid variant="container">
        <VRow>
          <VCol variant="md-8">'
            <div class="flex">
              <AutoWalk>
                <CarrierCard
                  v-for="(carrier, idx) in carriers"
                  :key="idx"
                  :image="carrier.image"
                  :alt="carrier.alt" />
              </AutoWalk>
              <AutoWalk :reversed="true">
                <CarrierCard
                  v-for="(carrier, idx) in carriers"
                  :key="idx"
                  :image="carrier.image"
                  :alt="carrier.alt" />
              </AutoWalk>
              <AutoWalk>
                <CarrierCard
                  v-for="(carrier, idx) in carriers"
                  :key="idx"
                  :image="carrier.image"
                  :alt="carrier.alt" />
              </AutoWalk>
            </div>
          </VCol>
          <VCol :variants="[ 'align-center', 'md-3', 'md-offset-1', 'no-gutters' ]">
            <div class="headline">
              <h2 class="headline__title">Insurance Providers</h2>
            </div>
            <p>A diverse product portfolio is the cornerstone of every producer’s career. Megastar provides the carriers and products that independents like yourself need and want.</p>
          </VCol>
        </VRow>
      </VGrid>
    </section>
  </div>
</template>

<script>
import AutoWalk from '@/components/AutoWalk.vue';
import CarrierCard from '@/components/CarrierCard.vue';
import Hero from '@/components/Home/Hero.vue';
import Tabs from '@/components/Tabs/Tabs.vue';
import TabContent from '@/components/Tabs/TabContent.vue';
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    AutoWalk,
    CarrierCard,
    Hero,
    Tabs,
    TabContent
  },
  data() {
    return {
      carriers: [
        {
          image: 'fidelity-logo.png',
          alt: 'Fidelity'
        },
        {
          image: 'fidelity-logo.png',
          alt: 'Fidelity'
        },
        {
          image: 'fidelity-logo.png',
          alt: 'Fidelity'
        },
        {
          image: 'fidelity-logo.png',
          alt: 'Fidelity'
        },
        {
          image: 'fidelity-logo.png',
          alt: 'Fidelity'
        },
        {
          image: 'fidelity-logo.png',
          alt: 'Fidelity'
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      let ww = window.innerWidth
      let border = window.innerWidth - 1440
      let section = this.$refs.features
      let sliderSlides = this.$refs.featureSliderSlides
      let slider = this.$refs.featureSlider
      let sliderContent = this.$refs.featureSliderContent
      section.style.height = ( sliderSlides.clientWidth + sliderContent.clientWidth - border ) + 'px'

      window.addEventListener('scroll', () => {
        let rect = section.getBoundingClientRect(),
          win = section.ownerDocument.defaultView,
          top = rect.top + win.pageYOffset,
          i = ww / 100 * 25,
          sectionHeight = section.clientHeight,
          pos = window.scrollY - top + i;

        slider.style["-webkit-transform"] = "translateX(-" + pos + "px)"
        slider.style["-moz-transform"] = "translateX(-" + pos + "px)"
        slider.style["-ms-transform"] = "translateX(-" + pos + "px)"
        slider.style["-o-transform"] = "translateX(-" + pos + "px)"
        slider.style.transform = "translateX(-" + pos + "px)"
      })
    })

//     let t = $(window).width() - 1200;
// $('.section').height($('.section .container-slider').width() - t)

// $(window).scroll(() => {
//   let t = $('section').offset(),
//       i = $(window).height() / 100 * 25,
//       r = $('.section').height(),
//       n = $(window).scrollTop() - t.top + i;
//   $('.section .container-slider').css({
//     "-webkit-transform": "translateX(-" + n + "px)",
//                     "-moz-transform": "translateX(-" + n + "px)",
//                     "-ms-transform": "translateX(-" + n + "px)",
//                     "-o-transform": "translateX(-" + n + "px)",
//                     transform: "translateX(-" + n + "px)"
//   }),
//     d = d = $(".section").next().offset(), e = d.top - t.top - 1.25 * $(window).height(), n >= e ? $(".section").hasClass("active") || $(".section").addClass("active") : $(".section").hasClass("active") && $(".section").removeClass("active")
// })
  }
}
</script>
