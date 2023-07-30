import styles from '@/styles/Home.module.css'
import { useState } from 'react';

import InputTodo from "./app/inputTodo";
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
      let newListe = [...liste];
      newListe.push(input);
      setliste(newListe);
    }

    const removeInListe = (index) => {
      let newListe = [...liste];
      setliste([...newListe.slice(0, index), ...newListe.slice(index+1, liste.length)]);
    }

    const updateInListe = (index, input) => {
      let newListe = [...liste];
      newListe[index] = input;
      setliste(newListe);
    }

    return [liste, add, removeInListe, updateInListe]
}

export default function Home() {
  const [liste, addliste, removeInListe, updateInListe] = manipListe()

  return (
    <div>
      <InputTodo addliste={addliste}/>
      <ListeTodo 
        liste={liste}
        removeInListe={removeInListe}
        updateInListe={updateInListe}
        />
    </div>
  )
}