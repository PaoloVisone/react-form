import { useState } from "react";


export default function input() {

    const [listArticle, setListAricle] = useState('Articolo del Blog');

    return (
        <input type="text" value={listArticle} />
    )

}