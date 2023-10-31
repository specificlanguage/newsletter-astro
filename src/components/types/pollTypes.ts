export enum QuestionType{
    MultipleChoice,
    Checkboxes,
    ShortResponse,
    OpenResponse,

}

export type PollQuestionProps = {
    questionID: string;
    question: string;
    options?: string[]
    type: QuestionType;
    required: boolean;
    useOther: boolean;
}