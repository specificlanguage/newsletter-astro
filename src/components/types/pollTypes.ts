export enum QuestionType{
    MultipleChoice,
    Checkboxes,
    OpenResponse
}

export type PollQuestionProps = {
    questionID: string;
    question: string;
    options: string[]
    type: QuestionType
    required: boolean
    useOther: boolean
}