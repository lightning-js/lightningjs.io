<script>
export default {
    props: ['feature']
}
</script>

<template>
    <div class="p-8 h-[320px] animate-popin rounded-lg border-[1px] bg-cover bg-center " :class="feature.span ? `md:col-span-${feature.span}` : ''" :style="{'background-image': `url(${feature.image})` }"  >
        <h1 class="text-3xl font-semibold drop-shadow-2xl text-white">{{ feature.title }}</h1>
        <p class="pt-1 text-slate-300 drop-shadow-2xl" > {{ feature.description }}</p>
    </div>
</template>