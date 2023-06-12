export enum QuestionType{
    MultipleChoice,
    Checkboxes,
    OpenResponse
}

export interface PollQuestionProps {
    questionID: string;
    question: string;
    options: string[]
    type: QuestionType
    required: boolean
    useOther: boolean
}