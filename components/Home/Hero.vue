<template>
  <header class="page-head page-head--home">
    <picture>
      <source srcset="hero-image.webp" type="image/webp" alt="" media="(min-width: 1000px)">
      <source srcset="hero-image.png" type="image/jpeg" alt="" media="(min-width: 1000px)">
      <source srcset="hero-image-m.webp" type="image/webp" alt="" media="(min-width: 900px)">
      <source srcset="hero-image-m.png" type="image/jpeg" alt="" media="(min-width: 900px)">
      <img src="hero-image.png" alt="">
    </picture>
    <VGrid variant="container">
      <VRow class="page-head__content">
        <VCol :variants="[ 'align-center', 'md-7' ]">
          <div class="headline">
            <vue-typed-js
              :strings="words"
              :startDelay="1000"
              :loop="true"
              :backDelay="2000"
              :shuffle="true"
              :backSpeed="50"
              :smartBackspace="false"
              @onStringTyped="drawUnderline"
              @preStringTyped="hideUnderline"
              @onLastStringBackspaced="hideUnderline"
              >
              <h1 class="page-head__title  headline__title">
                Providing financial <br>advisors with
                <span>
                  <span class="typing"></span>
                  <span class="page-head__underline" ref="underline"></span>
                </span>
              </h1>
            </vue-typed-js>
          </div>
          <p class="page-head__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <a href="" class="page-head__link"><span>Let’s start the conversation!</span> <sup>↗</sup></a>
        </VCol>
        <VCol :variants="[ 'align-center', 'md-5' ]">

        </VCol>
      </VRow>
    </VGrid>
  </header>
</template>

<script>

  export default {
    data() {
      return {
        toggleClasses: {
          show: 'page-head__underline--show',
          hide: 'page-head__underline--hide'
        },
        words: [
          'Marketing',
          'Branding',
          'Support',
          'Education',
          'Video',
          'Radio',
          'Stationary',
          'Web Design',
          'Seminars'
        ],
        colors: [
          '#19CEB080',
          '#FFDB7D80',
          '#E843D780',
          '#5E19CE80',
          '#43A3E880',
          '#A9E84380',
          '#E8924380'
        ],
        speed: 50,
        currentLetter: 0
      }
    },
    methods: {
      drawUnderline() {
        const underline = this.$refs.underline
        let randomColor = this.colors[Math.floor(Math.random()*this.colors.length)]
        underline.style.backgroundColor = randomColor
        underline.classList.remove(this.toggleClasses.hide)
        underline.classList.add(this.toggleClasses.show)
      },
      hideUnderline() {
        const underline = this.$refs.underline
        underline.classList.remove(this.toggleClasses.show)
        underline.classList.add(this.toggleClasses.hide)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
