import { useState , useEffect} from "react";
function QuestionItems(){
    const[data, setData] = useState([]);

    useEffect(()=>{
         fetch('http://localhost:5000/question/get')
            .then(response => response.json())
            .then( donnees => {
                setData(donnees.data); // this "data" is written in the rest api code
                console.log(donnees)
            })

    },[])

    return(
        <div className="question">
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
                                <tr>
                                    <td key={item.id_question}>{item.id_question}</td>
                                    <td key={item.id_question}>{item.content}</td>
                                    <td key={item.id_question}>{item.id_theme}</td>
                                </tr>
                        )
                    })}
                </tbody>
            </table>
            
        </div>
        
    )
}
export default QuestionItems;