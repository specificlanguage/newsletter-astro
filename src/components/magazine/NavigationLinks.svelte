<script lang="ts">

  import type {CollectionEntry} from "astro:content";
  import NavLink from "./NavLink.svelte";

  export let featureLeft: CollectionEntry<"newsletter"> | null;
  export let featureRight: CollectionEntry<"newsletter"> | null;
  export let mainArticleURL: string;
  export let displayDate: string | null;

</script>

<div class="space-between-2">
    <div class="flex space-x-4">
        <!--    LEFT SIDE  -->
        <div class="w-1/2 my-auto">
            {#if featureLeft}
                <NavLink feature={featureLeft} arrowDirection={"left"} />
            {:else}
                <div class={
                    "rounded-3xl my-1 px-4 py-0.5 md:h-24 flex " +
                    "text-neutral-600 dark:text-neutral-400 "
                }>
                    <p class="m-auto text-sm">You're at the very start! Click the other panel to keep going!</p>
                </div>
            {/if}
        </div>
        <!--    RIGHT SIDE -->
        <div class="w-1/2 my-auto">
            {#if featureRight}
                <NavLink feature={featureRight} arrowDirection={"right"} />
            {:else}
                <div class={
                    "rounded-3xl my-1 px-4 py-0.5 md:h-24 flex " +
                    "text-neutral-600 dark:text-neutral-400 "
                }>
                    <p class="m-auto text-sm">🎉 You've reached the end of the newsletter! Have a lovely day!</p>
                </div>
            {/if}
        </div>
    </div>
    <a class={
        "rounded-3xl my-1 px-2 flex " +
        "border-2 border-neutral-500 " +
        "text-neutral-600 dark:text-neutral-400 " +
        "hover:bg-gray-400 dark:hover:bg-gray-700 " +
        "bg-teal-100 dark:bg-teal-900 "
                } href={'/newsletter/' + mainArticleURL}>
        <div class="flex h-12 mx-auto">
            <div class="m-auto space-x-4">
                <i class="fa-solid fa-house"></i>
                <span class="align-middle">Magazine home (table of contents)</span>
            </div>
        </div>
    </a>
</div>