import { useState } from "react";

export default function InputTodo ({addliste}) {
    const [inputValue, setInput, clearInput] = useInput()

    return (
        <div>
        <input type="text" value={inputValue} onChange={setInput} />
        <button onClick={()=>{
            addliste(inputValue);
            clearInput();
            }}>Add</button>
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
  