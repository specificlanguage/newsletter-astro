<script lang="ts">

    import PollQuestion from "./PollQuestion.svelte";
    import type {PollQuestionProps} from "./types/pollTypes";

    export let submitURL: string
    export let questions: PollQuestionProps[];
    export let submitted = false;

    async function onSubmit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        console.log(formData);
        const response = await fetch("/api/poll", {
            method: "POST",
            body: {
                slug: submitURL,
                ...formData},
        });
        const data = await response.json();
    }

</script>

{#if !submitted}
    <i>Please note that all information submitted is anonymous.</i>
    <form on:submit|preventDefault={onSubmit}>
        {#each questions as question}
            <PollQuestion client:load question={question}/>
        {/each}
        <button class="rounded mt-2 p-2 bg-blue-500" type="submit">Submit</button>
    </form>
{:else }
    <h3>Thanks for submitting!</h3>
    <p>You'll see the results next week!</p>
{/if}

<style>
    form > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>