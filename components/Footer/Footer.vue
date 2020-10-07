<template>
  <footer class="site-foot">
    <div class="site-foot__cta">
      <div class="site-foot__overlay"></div>
      <VGrid variant="container">
        <VRow>
          <VCol :variants="[ 'md-6', 'md-offset-3' ]">
            <div class="headline  text-center">
              <h2 class="headline__title  site-foot__headline">Let's start the conversation</h2>
              <div class="headline__content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam et dolore magna aliqua.</div>
              <button class="btn  btn--default  btn--shadow">Let's Go!</button>
            </div>
          </VCol>
        </VRow>
      </VGrid>
    </div>
    <div class="site-foot__bar">
      <VGrid variant="container">
        <VRow>
          <VCol variant="md-2">
            <picture>
              <source srcset="/m-logo-white.png" type="image/webp" alt="">
              <source srcset="/m-logo-white.png" type="image/jpeg" alt="">
              <img src="/m-logo-white.png" alt="">
            </picture>
          </VCol>
          <VCol variant="md-8">
            <div class="site-foot__nav">
              <NavItems :items="items" />
            </div>
          </VCol>
          <VCol variant="md-2">
            <ul class="site-foot__social">
              <li class="site-foot__social-item">
                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16671 0.666748V4.00008H7.50004C6.92504 4.00008 6.66671 4.67508 6.66671 5.25008V7.33342H9.16671V10.6667H6.66671V17.3334H3.33337V10.6667H0.833374V7.33342H3.33337V4.00008C3.33337 2.15841 4.82504 0.666748 6.66671 0.666748H9.16671Z" fill="#DCF7FF"/>
              </svg>
              </li>
              <li class="site-foot__social-item">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9441 4.92638C17.9568 5.10403 17.9568 5.28173 17.9568 5.45938C17.9568 10.8781 13.8325 17.1218 6.29441 17.1218C3.97207 17.1218 1.81473 16.4492 0 15.2817C0.329961 15.3198 0.647187 15.3325 0.989844 15.3325C2.90605 15.3325 4.67004 14.6853 6.07867 13.5812C4.27664 13.5431 2.76648 12.3629 2.24617 10.7386C2.5 10.7766 2.75379 10.802 3.02031 10.802C3.38832 10.802 3.75637 10.7512 4.09898 10.6624C2.22082 10.2817 0.812148 8.63196 0.812148 6.63958V6.58884C1.35781 6.89341 1.99238 7.08376 2.66492 7.10911C1.56086 6.37306 0.837539 5.11673 0.837539 3.6954C0.837539 2.93399 1.04055 2.23603 1.3959 1.62688C3.41367 4.11419 6.44668 5.73853 9.84766 5.91622C9.78422 5.61165 9.74613 5.29442 9.74613 4.97716C9.74613 2.71825 11.5736 0.878174 13.8451 0.878174C15.0253 0.878174 16.0913 1.3731 16.84 2.17259C17.7664 1.99493 18.6547 1.65228 19.4416 1.18274C19.137 2.13454 18.4898 2.93403 17.6395 3.44161C18.4644 3.35282 19.2639 3.12435 19.9999 2.80712C19.4416 3.61927 18.7436 4.34259 17.9441 4.92638V4.92638Z" fill="#DCF7FF"/>
                </svg>
              </li>
              <li class="site-foot__social-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 15.5H12.1667V9.875C12.1667 8.99167 11.175 8.25833 10.2917 8.25833C9.40833 8.25833 8.83333 8.99167 8.83333 9.875V15.5H5.5V5.5H8.83333V7.16667C9.38333 6.275 10.8 5.7 11.75 5.7C13.8333 5.7 15.5 7.4 15.5 9.45833V15.5ZM3.83333 15.5H0.5V5.5H3.83333V15.5ZM2.16667 0.5C3.08333 0.5 3.83333 1.25 3.83333 2.16667C3.83333 3.08333 3.08333 3.83333 2.16667 3.83333C1.25 3.83333 0.5 3.08333 0.5 2.16667C0.5 1.25 1.25 0.5 2.16667 0.5Z" fill="#DCF7FF"/>
                </svg>
              </li>
            </ul>
          </VCol>
        </VRow>
      </VGrid>
    </div>
  </footer>
</template>

<script>
import NavItems from '@/components/Footer/NavItems.vue';
  export default {
    data() {
      return {
        items: [
          { name: 'Who We Are', href: '/' },
          { name: 'Join Our Team', href: '/' },
          { name: 'Partners', href: '/' },
          { name: 'Contact', href: '/' },
          { name: 'Privacy Policy', href: '/' }
        ]
      }
    },
    components: {
      NavItems
    }
  }
</script>

<style lang="scss" scoped>

</style>
