<script>
    import {afterUpdate, onMount} from "svelte";

    export const ssr = false;
    let progress;

    function calcProgress() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
            height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return (winScroll / height) * 100;
    }

    onMount(() => {
        console.log("hello");
        progress = Math.round(calcProgress());
        document.onscroll = () => {
            progress = Math.round(calcProgress());
        }
    })


</script>

<div on:scroll={progress = calcProgress().toLocaleString(undefined, {maximumFractionDigits: 0})}>
    <div class="text-right text-base text-neutral-500">{progress}% read</div>
    <div class="bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-emerald-600 h-2.5 rounded-full" style="width: {progress}%"></div>
    </div>
</div>