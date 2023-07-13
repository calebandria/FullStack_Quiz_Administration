import { useState } from "react";
function QuestionCreate(props){
    const [id_theme, setid_theme] = useState(1);
    const [content, setContent] = useState("");

    const onChange = event =>{
        setContent(event.target.value);
    }

    const handleSubmit = () =>{
        
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
                    {props.theme.map(({id_theme, label}) =>{
                        return(
                            <div key={id_theme}>
                                <input 
                                name="label"  
                                type="radio" value={(id_theme)} 
                                onClick={(e)=> {setid_theme(e.target.value);}}
                                required/>{label}
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