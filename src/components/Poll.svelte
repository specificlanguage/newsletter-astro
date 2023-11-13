<script lang="ts">

    import PollQuestion from "./PollQuestion.svelte";
    import type {PollQuestionProps} from "./types/pollTypes";
    import RequiredStar from "./RequiredStar.svelte";
    import LoadingSpinner from "./LoadingSpinner.svelte";

    export let submitURL: string
    export let questions: PollQuestionProps[];
    let submitted = false;
    let submitting = false;


    async function onSubmit(e: SubmitEvent) {

        function errorSubmit(){
            alert("Something went wrong, try submitting again later.")
            submitted = false;
            submitting = false;
        }

        e.preventDefault();
        submitting = true;

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

        const response = await fetch("https://api.civwiki.news/poll", {
            method: "POST",
            body: JSON.stringify(body)
        }).then(response => {
            if(response.ok){
                submitted = true;
            } else {
                errorSubmit();
            }
        }).catch(e => {
            console.log(e);
            errorSubmit();
        })
    }

</script>

<div class="my-4">
{#if !submitted}
    <i>Please note that all information submitted is anonymous. A red star (<RequiredStar/>) means that this question is required to submit.</i>
    <form on:submit|preventDefault={onSubmit}>
        {#each questions as question}
            <PollQuestion question={question}/>
        {/each}
        <button class="rounded mt-2 p-2 bg-blue-500 text-white" disabled={submitting} type="submit">
            {#if !submitting}
                Submit
            {:else}
                <div class="ml-2.5 mr-3">
                    <LoadingSpinner/>
                </div>
            {/if}
        </button>
    </form>
{:else }
    <h3>Thanks for submitting!</h3>
    <p>You'll see the results next week!</p>
{/if}
</div>