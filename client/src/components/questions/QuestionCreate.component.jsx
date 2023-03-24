import { useEffect, useState } from "react";
function QuestionCreate(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/theme/get')
            .then(response => response.json())
            .then(donnees =>{
                setData(donnees.data);
            })
    })
    return(
        <div className="question_create">
            <h1>Question Creation</h1>
            <form method="post">
                <label>New Question:
                    <input type="text" name="name" required />
                </label>
                <fieldset>
                    <legend>Choose the theme</legend>
                    {data.map(element =>{
                        return(
                            <div>
                                <input 
                                name="theme" 
                                key={element.id_theme} 
                                type="radio" value={element.label} 
                                onClick={(event)=>{console.log(event.target.defaultValue)}}
                                required/>{element.label}
                            </div>
                        )
                    })}
                </fieldset>   
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )   

}
export default QuestionCreate;