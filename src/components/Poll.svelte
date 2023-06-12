<script lang="ts">

    import type {PollQuestionProps} from "./types/pollTypes";
    import PollQuestion from "./PollQuestion.svelte";

    export let submitURL: string
    export let questions: PollQuestionProps[];
    export let submitted = false;

    function onSubmit(e) {
        e.preventDefault();
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
    <form on:submit|preventDefault={onSubmit}>
        <div>
            {#each questions as question}
                <PollQuestion question={question}/>
            {/each}
        </div>
    </form>
{:else }

{/if}

<style>
    form > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>