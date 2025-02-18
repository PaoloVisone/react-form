import { useState } from "react";


export default function input() {

    const [listArticle, setListAricle] = useState('Articolo del Blog');

    //preventDefault per non inviare il Form
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={listArticle}
                onChange={e => { setListAricle(e.target.value) }} />
            <button>INVIA</button>
        </form>
    )

}