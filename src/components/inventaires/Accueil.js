import { INVENTAIRES } from "../../common/Constantes";

export default function Accueil({ onClick }) {

    return (
        <>
            <div class="m-6 text-left">
                <p class="h1 m-0">{INVENTAIRES.TITRE.INTITULE}
                    <button type="button" data-toggle="tooltip" data-placement="right" data-html="true" title={`<p>${INVENTAIRES.TITRE.INFOBULLE}</p>`}>
                        <svg class="svg-icon svg-question-circle" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#question-circle"></use></svg>
                        <span class="sr-only">Aide</span>
                    </button>
                </p>
                <p class="m-0">{INVENTAIRES.TITRE.SOUS_TITRE}</p>
                <hr class="m-2" />
            </div>
            <div class="text-center">
                <div >
                    <p class="h2 m-0">{INVENTAIRES.CONTENU.TITRE}</p>
                    <p>{INVENTAIRES.CONTENU.TEXTE}</p>
                    <img src="./img/Voir_nouvelles_demandes.svg" alt="Créer un inventaire" width="166" height="50" />
                </div>
                <button type="button" onClick={onClick} class="btn btn--plain btn--primary">{INVENTAIRES.CONTENU.BOUTON}</button>
            </div>
        </>
    )
}