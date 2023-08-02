import { useState } from "react";
import style from "../../styles/Home.module.css";

export default function InputTodo ({addliste}) {
    const [inputValue, setInput, clearInput] = useInput()

    return (
        <div className={style.inputTodo}>
            <p>Pour ajouter une nouvelle tache</p>
            <div>
                <input type="text" value={inputValue} onChange={setInput} className={style.inputToAdd} />
                <button onClick={()=>{
                    addliste(inputValue);
                    clearInput();
                    }} className={style.inputToAdd}>Add</button>
            </div>
        </div>
        )
};

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
  