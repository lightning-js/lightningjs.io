<script>
import FeatureCard from './FeatureCard.vue';
import website_new from '../../../../assets/home/website_new.png';
import website_gradient from '../../../../assets/home/website_gradient.png';
import website_multi from '../../../../assets/home/website_multithreading.png';

  const dataFeatures = [
    { title: 'New and improved from rendering ',img: website_new, description:'Some text to give a generaal idee wat kind of long texr can be place on this spot', style:'md:col-span-2'},
    { title: 'Dynamic shaders ',img: website_gradient, description:'Some text to give a generaal idee wat kind of long texr can be place on this spot'},
    { title: 'Batched rendering',img: website_multi, description:'Some text to give a generaal idee wat kind of long texr can be place on this spot'},
    { title: 'Multithreading ',img: website_multi, description:'Some text to give a generaal idee wat kind of long texr can be place on this spot', style:'md:col-span-2'  },
  ]


export default {
  data() {
    return {
      dataFeatures
    }
  },
  components: {FeatureCard}
}

</script>
<template>

    <section class="pt-32 relative isolate overflow-hidden px-6 lg:px-8 ">
        <h1 class="text-5xl text-center font-bold pb-10 from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">New Features</h1>
        <div class="grid gap-3 md:grid-cols-3">
            <FeatureCard v-for="data in dataFeatures" :feature="data"/>
        </div>
    </section>
</template>