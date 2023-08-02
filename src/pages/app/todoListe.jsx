import { useState } from "react";

export default function ListeTodo({ liste, removeInListe, updateInListe }) {
    const [inputValue, setInput, clearInput] = useInput()

    return (
        <ul>
            <input type="text" value={inputValue} onChange={setInput} />
            {liste.map((item, index) => {
                return <li key={index}>
                    <p>{index} - {item}</p>
                    <button onClick={()=>removeInListe(index)}>X</button>
                    <button onClick={()=>{
                        updateInListe(index, inputValue);
                        clearInput();
                        }}>U</button>
                </li>;
            })}
        </ul>
    );
}

function useInput () {
    const [inputValue, setinputValue] = useState("")

    const setInput = (e) => {
        setinputValue(e.target.value)
    }

    const clearInput = () => {
        setinputValue("")
    }

    return [inputValue, setInput, clearInput]
}
  