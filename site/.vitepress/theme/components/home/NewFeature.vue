<script>
import FeatureCard from './FeatureCard.vue';

export default {
  props: ['features'],
  components: {FeatureCard}
}

</script>
<template>
    <section class="pt-32 relative isolate overflow-hidden px-6 lg:px-8 ">
      <h1 class="text-5xl text-center font-bold pb-10 from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">New Features</h1>
      <div class="grid gap-6 md:grid-cols-3">
        <FeatureCard v-for="data in features" :feature="data"/>
      </div>
    </section>
</template>