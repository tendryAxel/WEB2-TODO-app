import styles from '@/styles/Home.module.css'
import { useState } from 'react';

import ListeTodo from './app/todoListe';

/**
 * 
 *   <div className={styles.modif}>
 *     <div className={styles.id}>Hello word</div>
 *    <Hello name="axel"/>
 *   </div>
 */




const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>
};



////////////////////////////////////////////

  
  
function manipListe (){
    const [liste, setliste] = useState([])

    const add = (input) => {
      if (input != ""){
        let newListe = [...liste];
        newListe.push(input);
        setliste(newListe);
      }
    }

    const removeInListe = (index) => {
      let newListe = [...liste];
      setliste([...newListe.slice(0, index), ...newListe.slice(index+1, liste.length)]);
    }

    const updateInListe = (index, input, e) => {
      if (input != ""){
        let newListe = [...liste];
        newListe[index] = input;
        setliste(newListe);
      } else {
        alert("Pour mettre a jour il faut remplir le champs de texte en haut")
      }
    }

    return [liste, add, removeInListe, updateInListe]
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

export default function Home() {
  const [liste, addliste, removeInListe, updateInListe] = manipListe()
  const [inputValue, setInput, clearInput] = useInput()

  return (
    <div className={styles.todo}>
      <div className={styles.inputTodo}>
          <p>Manage Your Task</p>
          <div className={styles.inputDiv} onKeyDown={(e)=>{
            if (e.key == "Enter"){
              addliste(inputValue);
              clearInput();
            }
          }}>
              <input type="text" value={inputValue} onChange={setInput} className={styles.inputToAdd} />
              <button onClick={()=>{
                  addliste(inputValue);
                  clearInput();
                  }} className={styles.inputToAddButton}>+</button>
          </div>
      </div>
      <ListeTodo 
        liste={liste}
        removeInListe={removeInListe}
        updateInListe={updateInListe}
        inputValue={inputValue}
        clearInput={clearInput}
        />
    </div>
  )
}