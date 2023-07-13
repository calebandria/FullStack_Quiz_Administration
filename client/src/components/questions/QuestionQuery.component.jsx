/* import { useState , useEffect} from "react"; */
/* import { DetailsList } from "@fluentui/react/lib/DetailsList"; */

/* const columns = [
    {
        key:"question",
        name: "N°",
        fieldName: "id_question",
        minWidth: 90,
        maxWidth: 200,
        isResizable: true
    },
    {
        key:"content",
        name: "Question",
        fieldName: "content",
        minWidth: 90,
        maxWidth: 500,
        isResizable: true
    },
    {
        key:"label",
        name: "Theme",
        fieldName: "label",
        minWidth: 90,
        maxWidth: 200,
        isResizable: true
    }
]; */
function QuestionQuery(props){
    return(
        <div className="question-query">
            <h1>Question Querying</h1>
            <table className ="table-skeleton">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>content</th>
                        <th>theme</th>
                    </tr>
                </thead>
                <tbody>
                    {props.quest.map(({id_question, label, content})=>{
                        return(
                                <tr key={id_question}>
                                    <td /* key={item.id_question} */>{id_question}</td>
                                    <td /* key={item.id_question} */>{content}</td>
                                    <td /* key={item.id_question} */>{label}</td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}
export default QuestionQuery;