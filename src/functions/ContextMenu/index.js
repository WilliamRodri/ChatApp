import React from "react";

export default function ContextMenu(){
    const [eventoClick, setEventoClick] = React.useState(false);


    const openEvento = () => {
        setEventoClick(true);
    }

    const closeEvento = () => {
        setEventoClick(false);
    }

    return(
        <>
            <h1>Teste</h1>
        </>
    );
}