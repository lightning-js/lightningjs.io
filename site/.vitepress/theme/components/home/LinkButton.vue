<script>
export default {
    props: {
        label: 'Link',
        href: 'urls'
    }
}
</script>

<template>
    <div class="flex items-center justify-center">
        <a :href="href" target="_blank" class="transition ease-out duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:-translate-y-1 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> {{ label }} <span aria-hidden="true">→</span></a>
    </div>
</template>