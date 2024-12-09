<script lang="ts">

  import type {CollectionEntry} from "astro:content";

  export let feature: CollectionEntry<"newsletter">;
  export let arrowDirection: "left" | "right";
</script>

<a class={
        "rounded-3xl my-1 px-2 h-20 flex " +
        "border-2 border-neutral-500 " +
        "text-neutral-600 dark:text-neutral-400 " +
        "hover:bg-gray-400 dark:hover:bg-gray-700 "
    }
   href={'/newsletter/' + feature.slug}>


    <!-- Body flexbox -->
    <div class="flex space-x-2 px-1 w-full">
        {#if arrowDirection === "left"}
            <div class="my-auto pr-2 text-[24pt] basis-1/12">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
        {/if}
        <div class={"my-auto basis-11/12 " + (arrowDirection === "left" ? "flex-1" : "")}>
            <h4 class="m-0 text-base text-pretty">{feature.data.title}</h4>
            <p class="m-0 text-sm">{feature.data.author}</p>
        </div>
        {#if arrowDirection === "right"}
            <div class="my-auto pl-2 mx-4 text-[24pt] basis-1/12 flex-1">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        {/if}
    </div>

</a>