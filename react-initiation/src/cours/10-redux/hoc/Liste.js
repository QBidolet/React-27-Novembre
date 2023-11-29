import React from "react";
import withData from './withData';

function Liste({ data }) {
    return (
        <ul>
            {data.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
        )
}

export default withData(Liste, "https://jsonplaceholder.typicode.com/posts")

