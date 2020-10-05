<template>
  <div>
    <VGrid variant="container">
      <VRow>
        <VCol variant="md-6">I take up half of the space</VCol>
        <VCol variant="md-6">Me too!</VCol>
      </VRow>
    </VGrid>
    <AutoWalk>
      <CarrierCard
        v-for="(carrier, idx) in carriers"
        :key="idx"
        :image="carrier.image"
        :alt="carrier.alt" />
    </AutoWalk>
  </div>
</template>

<script>
import AutoWalk from '@/components/AutoWalk.vue';
import CarrierCard from '@/components/CarrierCard.vue';
export default {
  name: 'home',
  components: {
    AutoWalk,
    CarrierCard
  },
  data() {
    return {
      carriers: [
        {
          image: '',
          alt: ''
        }
      ]
    }
  },
}
</script>
