export default function Inventaires() {
    return (
        <>
        <div class="mt-2 text-left">
            <div class="container">
                <div class="o-banner__content">                
                    <p class="h3">Inventaires
                        <button type="button" data-toggle="tooltip" data-placement="right" data-html="true" title="<p>Contenu de l'infobulle</p>">
                            <svg class="svg-icon svg-question-circle" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#question-circle"></use></svg>
                            <span class="sr-only">Aide</span>
                        </button>
                    </p>
                    <p>Retrouvez vos inventaires</p>
                    <hr/>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center o-banner o-banner--has-breadcrumb">
            <div class="container">
                <div class="o-banner__content">                
                    <h5>Créez l'inventaire de votre parc informatique</h5>
                    <p>Découvrez son impact environnemental et obtenez des conseils</p>
                </div>
            </div>
            <button type="button" class="btn btn--plain btn--primary">Créer un inventaire</button>
        </div>
        </>
    )
}