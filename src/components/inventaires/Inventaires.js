import { useState } from "react";
import Creation from "../inventaires/Creation";
import Accueil from "../inventaires/Accueil";

export default function Inventaires() {
    const [isCreation, setIsCreation] = useState(false);
    
    return (
        <>
            { isCreation ? 
                <Creation/> : 
                    <Accueil onClick={() => setIsCreation(true)} /> }
        </>
    )
}