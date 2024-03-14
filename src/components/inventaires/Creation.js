import { useState } from "react";
import FilAriane from "../../common/FilAriane";
import { INVENTAIRES } from "../../common/Constantes";
import { postInventaire } from "../../services/InventaireService";

export default function Creation() {
    const [nomLot, setNomLot] = useState("");
    const [nomOrganisation, setNomOrganisation] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target); 
        postInventaire(formData)
    }

    return (
        <>
            <FilAriane/>
            <div class="text-center">
                <div >
                    <p class="h2 m-0">{INVENTAIRES.CREATION.TITRE}</p>
                    <p class="mb-1">{INVENTAIRES.CREATION.SOUS_TITRE}</p>
                    <p class="fz-16">{INVENTAIRES.CREATION.INFO}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="formInput">{INVENTAIRES.CREATION.NOM_INVENTAIRE}</label>
                        <button type="button" data-toggle="tooltip" data-placement="right" data-html="true" title={`<p>${INVENTAIRES.TITRE.INFOBULLE}</p>`}>
                            <svg class="svg-icon svg-question-circle" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#question-circle"></use></svg>
                        </button>
                        <input class="form-control" name="nomLot" type="text" id="nomLot" onChange={(e) => setNomLot(e.target.value)}/>
                        <label class="mt-2" for="formInput">{INVENTAIRES.CREATION.NOM_ETABLISSEMENT}</label>
                        <button type="button" data-toggle="tooltip" data-placement="right" data-html="true" title={`<p>${INVENTAIRES.TITRE.INFOBULLE}</p>`}>
                            <svg class="svg-icon svg-question-circle" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#question-circle"></use></svg>
                        </button>
                        <input class="form-control" name="nomOrganisation" type="text" id="nomOrganisation" onChange={(e) => setNomOrganisation(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn--plain btn--primary">{INVENTAIRES.CREATION.BOUTON}</button>
                </form>
            </div>
        </>
    )
}