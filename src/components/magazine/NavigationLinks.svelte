<script lang="ts">

  import type {CollectionEntry} from "astro:content";
  import NavLink from "./NavLink.svelte";

  export let featureLeft: CollectionEntry<"newsletter"> | null;
  export let featureRight: CollectionEntry<"newsletter"> | null;

</script>

<div class="flex">
    <!--    LEFT SIDE  -->
    <div class="w-1/2 my-auto">
        {#if featureLeft}
            <NavLink feature={featureLeft} arrowDirection={"left"} />
        {:else}
            <div class={
                "rounded-3xl my-1 px-4 py-0.5 h-24 flex " +
                "text-neutral-600 dark:text-neutral-400 "
            }>
                <p class="m-auto text-base">You're at the very start! Click the other panel to keep going!</p>
            </div>
        {/if}
    </div>
    <!--    RIGHT SIDE -->
    <div class="w-1/2 my-auto">
        {#if featureRight}
            <NavLink feature={featureRight} arrowDirection={"right"} />
        {:else}
            <div class={
                "rounded-3xl my-1 px-4 py-0.5 h-24 flex " +
                "text-neutral-600 dark:text-neutral-400 "
            }>
                <p class="m-auto text-base">🎉 You've reached the end of the newsletter! Have a lovely day!</p>
            </div>
        {/if}
    </div>
</div>