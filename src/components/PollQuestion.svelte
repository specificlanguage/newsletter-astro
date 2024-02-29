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
            <div class="h-fit m-1">
                <label>
                    <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
                                  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark-border-gray-600"
                           type=radio bind:group={selected}
                           name={question.questionID}
                           value={option.toLowerCase().replace(/ /g, "")}/>
                    <span class="ms-2">{option}</span>
                </label>
            </div>
        {/each}
    {:else if question.type === QuestionType.Checkboxes}
        <div class="-my-2 text-sm font-sans-serif mb-2 ">
            <i>Select all that are applicable.</i>
        </div>
        {#each question.options as option}
            <div class="h-fit m-1">
                <label>
                    <input class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600
                                  dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark-border-gray-600 rounded"
                            type=checkbox bind:group={selected}
                           name={question.questionID}
                           value={option.toLowerCase().replace(/ /g, "")}/>
                    <span class="ms-2">{option}</span>
                </label>
            </div>
        {/each}
    {:else if question.type === QuestionType.ShortResponse}
        <div class="h-fit m-1">
            <input type="text" name={question.questionID} placeholder="Type here..."
            class="rounded-md ml-1 p-1 w-1/2 text-black text-lg border-4 border-transparent"/>
        </div>
    {:else }
        <div class="h-fit m-1">
            <textarea name={question.questionID} placeholder="Type some answer here..."
            class="rounded-md p-1 w-3/4 text-black text-lg border-4 border-transparent"></textarea>
        </div>
    {/if}
</div>