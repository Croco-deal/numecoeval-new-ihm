import { Component } from 'react';
import { HEADER } from '../../common/Constantes';
import { Outlet } from 'react-router-dom';

export default class Header extends Component {
    render() {
      return(
        <>
          <header className="header header-principal" role="banner">
            <div className="header-principal__inner">
              <div className="header-principal-left">
                <div className="logos">        <div className="logo logo--0">
                  <a href="https://solidarites-sante.gouv.fr/">
                    <img src="img/logo-ministere.svg" alt="Ministère de la Santé et de la Prévention" width="107" height="62"/>
                  </a>
                </div>
                  <div className="logo logo--1">
                    <a href="/#">
                      <img src="./img/logo-ANS.svg" alt="Accueil Design System ANS" width="166" height="50"/>
                    </a>
                  </div>
                </div>
                <p class="header__title">{HEADER.TITRE}</p>
              </div>
              <div className="header-principal-right">
                <div className="header-principal__nav">
                  <div className="navbar navbar-expand-xl navbar-light" tabIndex="-1" id="menuPrincipalTarget">
                    <button type="button" className="navbar-toggler btn btn--icon-only btn-icon--header" data-toggle="collapse" data-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false">
                      <svg className="svg-icon svg-menu" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#menu"></use></svg>
                      <span className="sr-only">Menu</span>
                    </button>
                    <div className="collapse navbar-collapse" id="menuPrincipal">
                      <button type="button" className="navbar-toggler-close d-xl-none btn btn--icon-only btn-icon--header" data-toggle="collapse" data-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false">
                        <svg className="svg-icon svg-close" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#close"></use></svg>
                        <span className="sr-only">Fermer le menu</span>
                      </button>
                      <nav role="navigation" aria-label="Menu principal">
                        <ul className="navbar-nav nav-lvl--1">
                          <li id="referentiels" className={`nav-item common-nav-item ${window.location.pathname==="/inventaires" ? "is-active" : ""}`}>
                            <a className="nav-link" href="/inventaires">{HEADER.ONGLET_1}</a>
                          </li>
                        </ul>
                      </nav>
                      <ul className="nav-right">
                        <li className="nav-right-item collapse-wrapper common-nav-item">
                          <div className="collapse nav-collapse nav-collapse--right" id="collapseAccess">
                            <section aria-labelledby="widget-access-title">
                              <h2 className="o-widget-access__intro" id="widget-access-title">Options d'accessibilité</h2>
                              <div className="o-widget-access">
                                <div className="form-group form-group-custom-control">
                                  <fieldset id="contrast-id">
                                    <legend>Contrastes :</legend>
                                    <div className="o-widget-access__option">
                                      <input id="default-c" value="default-c" name="contrast" onChange="checked" type="radio" className="sr-only"/>
                                        <label className="o-widget-access__label btn btn--ghost btn--primary btn-sm" htmlFor="default-c"><span className="sr-only">Contrastes</span> Standards</label>
                                    </div>
                                    <div className="o-widget-access__option">
                                      <input id="high-c" value="high-c" name="contrast" type="radio" className="sr-only"/>
                                        <label className="o-widget-access__label btn btn--ghost btn--primary btn-sm" htmlFor="high-c"><span className="sr-only">Contrastes</span> Renforcés</label>
                                    </div>
                                  </fieldset>
                                </div>
                              </div>
                            </section>                                </div>
                        </li>
                      </ul>
                    </div>
                    <div className="collapse-wrapper common-nav-item">
                      <button type="button" className="btn btn--icon-only btn-icon--header" aria-label="Menu utilisateur" data-toggle="collapse" data-target="#collapseUser" aria-controls="collapseUser" aria-expanded="false">
                        <svg className="svg-icon svg-user" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#user"></use></svg>
                        <span className="sr-only">Menu utilisateur</span>
                      </button>
                      <div className="collapse nav-collapse nav-collapse--right" id="collapseUser">
                        <div className="m-user">
                          <div className="m-user__icon">
                            <svg className="svg-icon svg-user" aria-hidden="true" focusable="false"><use xlinkHref="svg-icons/icon-sprite.svg#user"></use></svg>
                          </div>
                          <p className="m-user__name">Bernard Morin</p>
                          <ul className="navbar-nav m-user__nav">
                            <li className="nav-item">
                              <a className="nav-link" href="/#">Mes informations personnelles</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="/#">Modifier mon compte</a>
                            </li>
                          </ul>
                          <a href="/#" className="btn btn--ghost btn--default btn-xs">Déconnexion</a>                            </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Outlet />
        </>
      )
    }
}