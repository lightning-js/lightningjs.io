<script>
import SectionHeader from './SectionHeader.vue';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
export default {
    props: ['legacy'],
    components: { SectionHeader, Popover, PopoverButton, PopoverPanel}
}
</script>

<template>
    <section class="pt-14 md:pt-28 grid grid-cols-1 justify-center items-center ">
        <SectionHeader :title="legacy.title" :description="legacy.description"/>
        <Popover class="relative mx-auto w-11/12 grid grid-cols-1 rounded-lg border-[1px] mt-8 md:hidden justify-center items-center">
            <PopoverButton class="w-full h-12 rounded-md border-[1px]">Lightning 2 Ecosystem</PopoverButton>
            <PopoverPanel class="z-10 w-full absolute gap-2 grid grid-cols-2 top-14 rounded-lg p-4 drop-shadow-lg bg-slate-100 dark:bg-slate-900">
                <a v-for="link in legacy.links" :href="link.url" target="_blank" 
                class="border-[1px] h-12 rounded-md flex items-center justify-center"> 
                    <span>{{ link.title }}</span>
                </a>
            </PopoverPanel>
        </Popover>
        <div class="hidden pt-12 md:grid gap-6 md:grid-cols-3">
            <a v-for="link in legacy.links" :href="link.url" target="_blank" 
            class="border-[1px] h-12 rounded-md flex items-center justify-center"> 
            <span>{{ link.title }}</span></a>
        </div>
    </section>
</template>