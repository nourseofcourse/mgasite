<template>
  <div class="auto-walk">
    <div class="auto-walk__belt" :class="{ 'auto-walk__belt--rev': reversed }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      reversed: {
        type: Boolean,
        default: false
      },
    },
  }
</script>

<style lang="scss" scoped>
.auto-walk {
  display: flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;

  &:before {
    content: '';
    display: block;
    height: 200px;
    width: 100%;
    background: linear-gradient(180deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    z-index: 1;
  }

  &:after {
    content: '';
    display: block;
    height: 200px;
    width: 100%;
    background: linear-gradient(0deg,rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &__belt {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: marquee-vertical 20s linear infinite;

    &--rev {
      animation: marquee-vertical-alt 20s linear infinite;
    }
  }

}

.auto-walk__belt--rev {
  animation: marquee-vertical-alt 20s linear infinite;
}
@keyframes marquee-vertical {
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
}
@keyframes marquee-vertical-alt {
  from { transform: translateY(-50%); }
  to { transform: translateY(0%); }
}
</style>
