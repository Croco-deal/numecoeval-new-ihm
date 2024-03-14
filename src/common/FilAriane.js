import { INVENTAIRES } from "../common/Constantes";

export default function FilAriane() {
    
    return (
        <>
            <div class="ml-5">
                <nav class="breadcrumb-wrapper" role="navigation" aria-label="Fil d'ariane">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">{INVENTAIRES.FIL_ARIANE.TITRE_1}<svg class="svg-icon svg-angle-right" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#angle-right"></use></svg></a></li>
                        <li class="breadcrumb-item"><a href="#">{INVENTAIRES.FIL_ARIANE.TITRE_2}<use xlinkHref="svg-icons/icon-sprite.svg#angle-right"></use></a></li>
                    </ol>
                </nav>
            </div>
        </>
    )
}