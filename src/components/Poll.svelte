<script lang="ts">

    import {PollQuestionProps} from "./types/pollTypes";
    import PollQuestion from "./PollQuestion.svelte";

    export let submitURL: string
    export let questions: PollQuestionProps[];
    export let submitted = false;

    function onSubmit(e) {
        alert("clicked")
        console.log(e.target);
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }

        console.log(data);
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