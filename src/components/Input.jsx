import { useState } from "react";

// Array di articoli
const Article = ['il miei viaggi', 'i miei pensieri', 'le mie recensioni']

export default function input() {

    // Stato dell'articolo
    const [listArticle, setListAricle] = useState(Article);
    // Inserimento nuovo articolo
    const [newArticle, setNewArticle] = useState('');

    //preventDefault per non inviare il Form
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newArticle}
                onChange={e => { setNewArticle(e.target.value) }} />
            <button>INVIA</button>
        </form>
    )

}