import style from "../../styles/Home.module.css"

export default function ListeTodo({ liste, removeInListe, updateInListe, clearInput, inputValue }) {
    return (
        <>
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
  