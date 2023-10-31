<script lang="ts">
    import {QuestionType} from "./types/pollTypes";
    import type {PollQuestionProps} from "./types/pollTypes";
    import RequiredStar from "./RequiredStar.svelte";

    export let question: PollQuestionProps;
    let selected = ""



</script>

<div class="p-2 mt-2">
    <div class="mb-3">
        <strong>{question.question}</strong>
            {#if question.required && question.type === QuestionType.MultipleChoice}
                <RequiredStar/>
            {/if}
    </div>
    {#if question.type === QuestionType.MultipleChoice}
        {#each question.options as option}
            <div class="h-fit my-1 ml-1">
                <label>
                    <input type=radio bind:group={selected}
                           name={question.questionID}
                           value={option.toLowerCase().replace(/ /g, "")}/>
                    {option}

                </label>
            </div>
        {/each}
    {:else if question.type === QuestionType.Checkboxes}
        <div class="-my-2 text-sm font-sans-serif mb-2 ">
            <i>Select all that are applicable.</i>
        </div>
        {#each question.options as option}
            <div class="h-fit my-1">
                <label>
                    <input type=checkbox bind:group={selected}
                           name={question.questionID}
                           value={option.toLowerCase().replace(/ /g, "")}/>
                    {option}
                </label>
            </div>
        {/each}
    {:else if question.type === QuestionType.ShortResponse}
        <input type="text" name={question.questionID} placeholder="Type here..."
        class="rounded-md p-1 w-1/2 text-black text-lg border-4 border-transparent"/>
    {:else }
        <textarea name={question.questionID} placeholder="Type some answer here..."
        class="rounded-md p-1 w-3/4 text-black text-lg border-4 border-transparent"/>
    {/if}
</div>