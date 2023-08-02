import { useState } from "react";
import style from "../../styles/Home.module.css"

export default function ListeTodo({ liste, removeInListe, updateInListe }) {
    const [inputValue, setInput, clearInput] = useInput()

    return (
        <>
            <div className={style.updateDiv}>
                <div className={style.inputUpdate}>
                    <p>Pour mettre a jour la tache de votre choix : </p>
                    <input type="text" value={inputValue} onChange={setInput} />
                </div>
                <p>Ensuite il faut choisir la tache a mettre a jour</p>
            </div>
            <ul className={style.todoListe}>
                {liste.map((item, index) => {
                    return <li key={index} className={style.listeStyle}>
                        <p>{index} - {item}</p>
                        <button onClick={()=>removeInListe(index)}>X</button>
                        <button onClick={()=>{
                            updateInListe(index, inputValue);
                            clearInput();
                            }}>U</button>
                    </li>;
                })}
            </ul>
        </>
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
  