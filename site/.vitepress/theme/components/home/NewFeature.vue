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
    <section class="flex flex-col w-full items-center">
      <div class="w-11/12">
        <SectionHeader title="Features" />
      </div>
      <div class="max-w-md w-11/12 md:max-w-none md:w-5/6 grid grid-cols-1 md:grid-cols-2 place-items-center gap-4 items-stretch">
        <div v-if="features" v-for="feature in features " class="flex gap-6 items-center rounded-sm bg-zinc-50 dark:bg-slate-900 p-4">
          <div class="flex-col">
            <h2 class="text-2xl font-semibold">{{feature.title}}</h2>
            <p class="grow">{{feature.description}}</p>
          </div>
        </div>
     </div>
    </section>
</template>