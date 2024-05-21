<script>
export default {
    props: ['feature', 'index'],
}
</script>

<template>
    <div class="relative overflow-hidden flex flex-col self-auto p-8 h-48 sm:h-80 animate-popin rounded-lg border-[1px] bg-cover bg-center" :class="`md:col-span-${feature.span || 1}`" >
        <h1 class="text-3xl font-semibold drop-shadow-2xl text-white">{{ feature.title }}</h1>
        <p class="pt-1 text-slate-300 drop-shadow-2xl " > {{ feature.description }}</p>
    </div>
</template>