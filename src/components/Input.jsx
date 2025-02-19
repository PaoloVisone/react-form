import { useState } from "react";

// Array di articoli
const listArticles = ['il miei viaggi', 'i miei pensieri', 'le mie recensioni']

export default function input() {

    // Stato dell'articolo
    const [articles, setListArticles] = useState(listArticles);
    // Inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState('');

    //preventDefault per non inviare il Form
    const handleSubmit = e => {
        e.preventDefault();
        // Creazione di un nuovo array
        const updatedArticle = [...articles, newArticle];
        setListArticles(updatedArticle);
        // Svuto la cella
        setNewArticle('');
    }

    // Cancello elemento
    const removeArticle = i => {
        const updatedArticle = articles.filter((article, index) => {
            return index !== i
        });
        setListArticles(updatedArticle);
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
                {articles.map((article, i) => (
                    <li key={i}>
                        {article}
                        <button onClick={() => removeArticle(i)}>
                            Elimina
                        </button>
                    </li>
                ))}
            </ul></>
    )

}