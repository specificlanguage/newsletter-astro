export enum QuestionType{
    MultipleChoice,
    Checkboxes,
    OpenResponse
}

export interface PollQuestionProps {
    question: string;
    options: string[]
    type: QuestionType
    required: boolean
    useOther: boolean
}


/**
 *
 * @param props: Poll Question props.
 *  question: question for that particular poll
 *  options: all possible options/answers for that question
 *  type: type of question, multiple choice or checkboxes (open response is not supported)
 *  required: is required
 *  useOther: unsupported as of right now
 * @constructor creates the poll question for Multiple Choice & Checkboxes, should be used with Polls
 */
export default function PollQuestion (props: PollQuestionProps){

    const question = props.question.replace("/\s/g", "").toLowerCase();

    switch (props.type){
        case QuestionType.MultipleChoice:
            return (
                <div className="mb-6">
                    <h4>{props.question}</h4>
                    {props.options.map(option => (
                        <div className="form-control mb-2 indent-2">
                            <label className="label cursor-pointer">
                                <input className="radio-lg" type="radio" name={question} key={option}/>
                                <span className="label-text ml-2">{option}</span>
                            </label>
                        </div>
                    ))}
                    {/*<div className="form-control indent-2 mb-2">*/}
                    {/*{props.useOther &&*/}
                    {/*    <div className="form-control">*/}
                    {/*        <input className="radio-lg" type="radio" name="other" key="zzzzz"/>*/}
                    {/*        <input type="text" placeholder="Other..." key="zzzzz" name={question}*/}
                    {/*               className="input rounded p-0.5 ml-2 w-full max-w-xs text-black"/>*/}
                    {/*    </div>*/}
                    {/*}*/}
                    {/*</div>*/}
                </div>
            )
        case QuestionType.Checkboxes:
            return (
                <div className="mb-6">
                    <h4>{props.question}</h4>
                    {props.options.map(option => (
                        <div className="indent-2 mb-2">
                            <label className="cursor-pointer label">
                                <input type="checkbox" name={question}/>
                                <span className="label-text ml-2">{option}</span>
                            </label>
                        </div>
                    ))}
                </div>
            )
        case QuestionType.OpenResponse:
            return (
                <div className="form-control">
                    <input type="text" placeholder="Type here" name={question} className="input w-full max-w-xs"/>
                </div>
            )
    }
}