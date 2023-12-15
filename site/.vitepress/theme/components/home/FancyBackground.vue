<script>
import * as HeaderBackground from './headerbackground.js';
import '../../css/headerbackground.css';
export default{
    mounted() {
        HeaderBackground.init(this.$refs.hero);
    }
}
</script>

<template>
    <div class="absolute left-0 z-0 bg-slate-100 dark:bg-[#020617]" ref="hero">
        <canvas id="stars" width="300" height="300"></canvas>
    </div>
</template>