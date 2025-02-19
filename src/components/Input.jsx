import { useState } from "react";

// Array di articoli
const listArticles = ['il miei viaggi', 'i miei pensieri', 'le mie recensioni']

export default function input() {

    // Stato dell'articolo
    const [Articles, setListArticles] = useState(listArticles);
    // Inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState('');

    //preventDefault per non inviare il Form
    const handleSubmit = e => {
        e.preventDefault();
        // Creazione di un nuovo array
        const updateArticle = [...Articles, newArticle];
        setListArticles(updateArticle);
        // Svuto la cella
        setNewArticle('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newArticle}
                    onChange={e => { setNewArticle(e.target.value) }} />
                <button>INVIA</button>
            </form>

            {/* //lista dei articoli */}

            <ul>
                {Articles.map((Article, i) => (
                    <li key={i}>
                        {Article}
                    </li>
                ))}
            </ul></>
    )

}