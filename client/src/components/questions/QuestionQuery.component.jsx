import { useState , useEffect} from "react";
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
function QuestionQuery(){
    const[data, setData] = useState([]);

    useEffect(()=>{
         fetch('http://localhost:5000/question/get')
            .then(response => response.json())
            .then( donnees => {
                setData(donnees.data); // this "data" is written in the rest api code
            })

    })

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
                    {data.map((item)=>{
                        return(
                                <tr key={item.id_question}>
                                    <td /* key={item.id_question} */>{item.id_question}</td>
                                    <td /* key={item.id_question} */>{item.content}</td>
                                    <td /* key={item.id_question} */>{item.label}</td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}
export default QuestionQuery;