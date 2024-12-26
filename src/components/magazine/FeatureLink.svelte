<script lang="ts">

  import type {CollectionEntry} from "astro:content";

  export let feature: CollectionEntry<"newsletter" | "extras">;

  const img_url = feature.data.image ? (
      feature.data.image.startsWith("https") ? feature.data.image : "/" + feature.data.image
  ) : "/collage-2.png"

</script>

<a class={
        "rounded-3xl my-1 px-4 py-0.5 h-full sm:h-48 flex items-center " +
        "dark:bg-neutral-700 bg-neutral-200 " +
        "border-2 border-neutral-500 " +
        "text-neutral-600 dark:text-neutral-400 " +
        "hover:bg-gray-400 dark:hover:bg-gray-700 "
    }
   href={"/" + feature.collection + "/" + feature.slug}>

    <!-- Body flexbox -->
    <div class="flex flex-col">

        <div class="flex space-x-2 py-2">
            <div class={"w-full sm:w-2/3 my-auto"} >
                <h3 class="m-0">{feature.data.title}</h3>
                <p class="m-0 text-sm">{feature.data.author}</p>
                <p class="my-2 text-base">{feature.data.description}</p>
            </div>
            <div class="hidden sm:flex sm:visible sm:w-1/3 px-0.5">
                <img src={img_url} class="object-scale-down"/>
            </div>
        </div>

    </div>

</a>