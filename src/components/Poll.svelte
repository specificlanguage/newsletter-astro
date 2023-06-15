<script lang="ts">

    import PollQuestion from "./PollQuestion.svelte";
    import type {PollQuestionProps} from "./types/pollTypes";
    import RequiredStar from "./RequiredStar.svelte";

    export let submitURL: string
    export let questions: PollQuestionProps[];
    export let submitted = false;


    async function onSubmit(e: SubmitEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const answers = {}
        for(let [k, v] of formData.entries()){
            if(answers[k]) {
                answers[k] += "," + v;
            } else {
                answers[k] = v;
            }
        }

        const body = {
            slug: submitURL,
            ...answers}

        const response = await fetch("/api/poll", {
            method: "POST",
            body: JSON.stringify(body)
        });

        console.log(response);

        if(!response.ok){
            alert("Something went wrong, try submitting again later.")
            return;
        }

        const data = await response.json();
        console.log(data);
        submitted = true;
    }

</script>

{#if !submitted}
    <i>Please note that all information submitted is anonymous. A red star (<RequiredStar/>) means that this question is required.</i>
    <form on:submit|preventDefault={onSubmit}>
        {#each questions as question}
            <PollQuestion question={question}/>
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