export default function ListeTodo({ liste, removeInListe, updateInListe }) {
    return (
        <ul>
            {liste.map((item, index) => {
                return <li key={index}>
                    <p>{index} - {item}</p>
                    <button onClick={()=>removeInListe(index)}>X</button>
                    <button onClick={()=>updateInListe(index, input)}>U</button>
                </li>;
            })}
        </ul>
    );
}