<script>
import FeatureCard from './FeatureCard.vue';
 
  const dataFeatures = [
    { title: 'New and improved from rendering ',img:'src/assets/website_new.png', description:'Some text to give a generaal idee wat kind of long texr can be place on this spot', style:'md:col-span-2'},
    { title: 'Dynamic shaders ',img:'src/assets/website__gradient_.png', description:'Some text to give a generaal idee wat kind of long texr can be place on this spot'},
    { title: 'Batched rendering',img:'src/assets/website__00215_.png', description:'Some text to give a generaal idee wat kind of long texr can be place on this spot'},
    { title: 'Multithreading ',img:'src/assets/website__mutithreading.png', description:'Some text to give a generaal idee wat kind of long texr can be place on this spot', style:'md:col-span-2'  },
  ]


export default {
  data() {
    return {
      dataFeatures
    }
  },
  mounted() {
    console.log('new feature mounted')
  },
  activated() {
    console.log('halloooooooooo')
  },
  components: {FeatureCard}
}

</script>
<template>
    <section class="pt-32">
        <h1 class="text-5xl text-center font-bold pb-10 from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">New Features</h1>
        <div class="grid gap-3 md:grid-cols-3">
            <FeatureCard v-for="data in dataFeatures" :feature="data"/>
        </div>
    </section>
</template>