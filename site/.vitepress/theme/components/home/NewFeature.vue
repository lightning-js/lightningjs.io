<script>
import FeatureCard from './FeatureCard.vue';

export default {
  props: ['features'],
  components: {FeatureCard}
}

</script>
<template>
    <section class="pt-28">
      <div class="mx-auto max-w-2xl text-center px-6 lg:px-8">
        <h1 class="text-5xl text-center font-bold from-blue-200 via-purple-700 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">New Features</h1>
        <p class="mt-6 text-lg leading-8 text-black dark:text-gray-200">Upcoming features of the Lightning Renderer. This part of our ecosystem is now in beta.</p>
      </div>
      <div class="pt-12 grid gap-6 md:grid-cols-3">
        <FeatureCard v-for="data in features" :feature="data"/>
      </div>
    </section>
</template>