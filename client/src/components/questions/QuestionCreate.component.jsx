import { useEffect, useState } from "react";
function QuestionCreate(){
    const [dataGot, setDataGot] = useState([]);
    const [id_theme, setid_theme] = useState(1);
    const [content, setContent] = useState("");
   
    useEffect(()=>{
        fetch('http://localhost:5000/theme/get')
            .then(response => response.json())
            .then(donnees =>{
                setDataGot(donnees.data);
            })
    },[dataGot]);

    const onChange = event =>{
        setContent(event.target.value);
    }

    const handleSubmit = (event) =>{
        
        // setContent(event.target.value);
        const data = { id_theme, content};
        data.id_theme = parseInt(id_theme);
        // console.log(typeof data.id_theme);
        const requestOptions = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/question/post',requestOptions)
            .then(response =>response.json())
            .then(response => console.log(response));
        event.preventDefault();
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
                                key={parseInt(element.id_theme)} 
                                type="radio" value={(element.id_theme)} 
                                onClick={(e)=> {setid_theme(e.target.value);}}
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