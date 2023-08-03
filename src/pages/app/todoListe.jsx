import { useState } from "react";
import style from "../../styles/Home.module.css"

export default function ListeTodo({ liste, removeInListe, updateInListe }) {
    const [inputValue, setInput, clearInput] = useInput()

    return (
        <>
            <div className={style.updateDiv}>
                <div className={style.inputUpdate}>
                    <p>Pour mettre a jour la tache de votre choix, remplir ici</p>
                    <input type="text" value={inputValue} onChange={setInput} />
                </div>
                <p>Ensuite il faut choisir la tache a mettre a jour</p>
            </div>
            <ul className={style.todoListe}>
                {liste.map((item, index) => {
                    return <li key={index} className={style.listeStyle}>
                        <p>Todo n°{index} <br />A faire : {item}</p>
                        <div className={style.buttonSection}>
                            <button onClick={()=>removeInListe(index)}>Delete</button>
                            <button onClick={()=>{
                                updateInListe(index, inputValue);
                                clearInput();
                                }}>Update this</button>
                        </div>
                        <p>---------------------------------------------------------------------------</p>
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
  