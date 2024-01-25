<script>
import SectionHeader from './SectionHeader.vue';
import featureData from '../../../../assets/home/features.json';

export default {

  data() {
    return {
      features: featureData
    }
  },
  components: { SectionHeader }
}

</script>
<template>
    <section class="pt-14 md:pt-28">
      <SectionHeader title="Features" description="Upcoming features of the Lightning Renderer. This part of our ecosystem is now in beta."/>
      <div class="grid grid-cols-2 gap-10 pt-6">
        <div v-if="features" v-for="feature in features " >
          <div class="flex gap-6 items-center">
            <span class="text-6xl text-purple-800">&#8226;</span>
            <div class="flex-col">
              <h2 class="text-2xl font-semibold">{{feature.title}}</h2>
              <p>{{feature.description}}</p>
            </div>
          </div>
             
        </div>
     </div>
    </section>
</template>