import PollQuestion, {PollQuestionProps} from "./PollQuestion";

export interface PollProps {
    submitURL: string,
    date: Date,
    questions: PollQuestionProps[]
}

export default function Poll (props: PollProps) {
    return (
        <form>
            <i>Please note that all submitted information is anonymous, and no personal information will be submitted.</i>
            {props.questions.map(question => (
                <div>
                    <PollQuestion question={question.question}
                                  options={question.options}
                                  type={question.type}
                                  required={question.required}
                                  useOther={question.useOther}/>
                </div>
            ))}
            <button className="btn btn-lg p-2 mt-6 rounded-md border-white bg-blue-500 text-white" type="submit">Submit</button>
        </form>
    )
}