<script lang="ts">
    export let url: string
    export let img_url: string
    export let title: string
    export let description: string
    export let author: string | undefined
    export let icon_class: string | undefined
</script>

<a class={
        "rounded-3xl my-1 px-4 py-2 h-32 md:h-32 flex items-center overflow-hidden " +
        "dark:bg-neutral-700 bg-neutral-200 " +
        "border-2 border-neutral-500 " +
        "text-neutral-600 dark:text-neutral-400 " +
        "hover:bg-gray-400 dark:hover:bg-gray-700 "
    }
   href={url}>

    <!-- Content section -->
    <div class="w-full sm:w-2/3 pr-4 flex flex-col justify-center min-h-0 ">
        <span class="flex flex-nowrap space-x-2">
            <h4 class="truncate m-0 text-[18px] ">{title}</h4>
            {#if icon_class !== undefined}
                <p class="m-0"><i class={icon_class}></i></p>
            {/if}
        </span>
        {#if author !== undefined}
            <p class="m-0 text-sm truncate">{author}</p>
        {/if}
        <p class="my-1 text-base line-clamp-2">{description}</p>
    </div>

    <!-- Image section -->
    <div class="hidden sm:block sm:w-1/3 h-full">
        <img src={img_url} class="object-cover h-full w-full rounded" alt={description}/>
    </div>

</a>