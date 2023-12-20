<script>
import FeatureCard from './FeatureCard.vue';
import SectionHeader from './SectionHeader.vue';

export default {
  props: ['features'],
  components: { FeatureCard, SectionHeader }
}

</script>
<template>
    <section class="pt-14 md:pt-28">
      <SectionHeader title="New Features" description="Upcoming features of the Lightning Renderer. This part of our ecosystem is now in beta."/>
      <div class="pt-12 place-items-center w-full grid gap-6 md:grid-cols-3">
        <FeatureCard v-for="data in features" :feature="data"/>
      </div>
    </section>
</template>