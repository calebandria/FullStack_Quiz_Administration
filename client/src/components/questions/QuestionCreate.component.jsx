import { useEffect, useState } from "react";
function QuestionCreate(){
    const [dataGot, setDataGot] = useState([]);
    const [idTheme, setIdTheme] = useState(1);
    const [content, setContent] = useState("");
   
    useEffect(()=>{
        fetch('http://192.168.1.83:5000/theme/get')
            .then(response => response.json())
            .then(donnees =>{
                setDataGot(donnees.data);
            })
    },[dataGot]);

    const onChange = event =>{
        setContent(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // setContent(event.target.value);
        const data = { idTheme, content};
        console.log(data);
        const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
        };
        fetch('http://192.168.1.83:5000/question/post',requestOptions)
            .then(response =>response.json())
            .then(response => console.log(response));
    };
    return(
        <div className="question_create">
            <h1>Question Creation</h1>
            <form 
            /* onSubmit = {postQuestion(obj)} */>
                <label>New Question:
                    <input 
                        type="text" 
                        name="question" 
                        required 
                        onChange={onChange}
                        />
                </label>
                <fieldset>
                    <legend>Choose the theme</legend>
                    {dataGot.map(element =>{
                        return(
                            <div>
                                <input 
                                name="label" 
                                key={element.id_theme} 
                                type="radio" value={element.id_theme} 
                                onClick={(e)=> {setIdTheme(e.target.value); console.log(`ID theme new : ${idTheme}`)}}
                                required/>{element.label}
                            </div>
                        )
                    })}
                </fieldset>   
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    )   

}
export default QuestionCreate;