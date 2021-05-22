import React from 'react';


export const FooterHome = () => {

    return (
        <footer className="home__footer">

            <section className="home__footer-first">
                <section className="home__contact">
                    <h3>Contactos</h3>
                    <ol className="home_contact-ol">
                        <li>
                            <span className="icon-mail2"></span>
                        contacto@edubit.com
                    </li>
                        <li>
                            <span className="icon-whatsapp"></span>
                        +54 9 1163908000
                    </li>
                        <li>
                            <span className="icon-location"></span>
                        Avenida Córdoba 4673, CABA, Argentina
                    </li>
                    </ol>
                </section>
            </section>


            <section className="home__social-media">
                <span className="icon-facebook home__icons"></span>
                <span className="icon-instagram home__icons"></span>
                <span className="icon-twitter home__icons"></span>
                <span className="icon-youtube home__icons"></span>
            </section>

            <section className="home__Copyright">
                <p>© 2021 Copyright Edubit S.A.</p>
            </section>
        </footer>
    )
}