<script lang="ts">
    import {PollQuestionProps, QuestionType} from "./types/pollTypes";
    export let question: PollQuestionProps

    // console.log(question);

</script>

<div class="">
{#if question.type === QuestionType.MultipleChoice}
    {#each question.options as option}
        <div class="h-fit my-1">
            <label>
                <input type=radio bind:group={question.questionID}
                       name={question.questionID}
                       value={option.toLowerCase().replace(" ", "")}/>
                {option}
            </label>
        </div>
    {/each}
{:else if question.type === QuestionType.Checkboxes}
    {#each question.options as option}
        <div class="h-fit my-1">
            <label>
                <input type=checkbox bind:group={question.questionID}
                       name={question.questionID}
                       value={option.toLowerCase().replace(" ", "")}/>
                {option}
            </label>
        </div>
    {/each}
{:else}
    <input type=text name={question.questionID} placeholder="Type here..."/>
{/if}
</div>