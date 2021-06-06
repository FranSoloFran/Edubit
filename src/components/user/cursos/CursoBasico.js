import React from 'react';
import { Carousel } from '3d-react-carousal';

export const CursoBasico = () => {

    let slides = [
        <iframe width="720" height="460" src="https://www.youtube.com/embed/GkAQH-1ezEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>,
        <iframe width="720" height="460" src="https://www.youtube.com/embed/3UvIrt-rDxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>,
        <iframe width="720" height="460" src="https://www.youtube.com/embed/9HgyJYndiA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>,
        <iframe width="720" height="460" src="https://www.youtube.com/embed/KlzzlQBDBfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    ];

    return (
        <div className="cursos__container">
            <Carousel slides={slides} autoplay={false} interval={3000} />
            <div className="cursos__container_title">
                <h1>Curso Basico:</h1>
                <button className="cursos__button_inscribir">Inscribirme</button>
            </div>
            <div className="cursos__container_item">
                <div className="cursos__text_item">
                    <h2 className="cursos__title_item f2">Criptomonedas. ¿Qué son?</h2>
                    <p className="cursos__paragraph_item f4">
                        Una criptomoneda es un activo digital que emplea un cifrado criptográfico para garantizar su titularidad y asegurar la integridad de las transacciones, y controlar la creación de unidades adicionales, es decir, evitar que alguien pueda hacer copias como haríamos, por ejemplo, con una foto. Estas monedas no existen de forma física: se almacenan en una cartera digital.
                    </p>
                </div>
                <div className="cursos__img_item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/GkAQH-1ezEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
            </div>
            <div className="cursos__container_item">
                <div className="cursos__img_item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3UvIrt-rDxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
                <div className="cursos__text_item">
                    <h2 className="cursos__title_item f2">Errores comunes al invertir en criptomonedas</h2>
                    <p className="cursos__paragraph_item f4">
                        ¿Cuáles son los errores que se deben evitar para invertir en Bitcoin?
                        No tener conocimientos sobre Bitcoin y el funcionamiento de criptomonedas
                        Sin una formación sobre cómo funciona Bitcoin y el mundo de las criptomonedas en general se está expuesto a creer en todo lo que dicen los medios, sin tener capacidad para crearse un criterio propio.
                    </p>
                </div>
            </div>
            <div className="cursos__container_item">
                <div className="cursos__text_item">
                    <h2 className="cursos__title_item f2">Criptomonedas más populares</h2>
                    <p className="cursos__paragraph_item f4">
                        ¿Cuántas criptomonedas existen? Más de 2000 y subiendo. Cada semana se crea alguna nueva divisa virtual en un proceso que se denomina ICO y que más adelante resumiremos. Entre las mas conocidas estan: Bitcoin, Ethereum, Litecoin, Cardano, Bitcoincash, Iota, Ripple, Tron, entre otras.
                    </p>
                </div>
                <div className="cursos__img_item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9HgyJYndiA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
            </div>
            <div className="cursos__container_item">
                <div className="cursos__img_item">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KlzzlQBDBfI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
                </div>
                <div className="cursos__text_item">
                    <h2 className="cursos__title_item f2">¿Qué es el Bitcoin?</h2>
                    <p className="cursos__paragraph_item f4">
                        Bitcoin es una moneda virtual o un medio de intercambio electrónico que sirve para adquirir productos y servicios como cualquier otra moneda. Pero esta moneda es descentralizada, es decir que no existe una autoridad o ente de control que sea responsable de su emisión y registro de sus movimientos. Consiste en una clave criptográfica que se asocia a un monedero virtual, el cual descuenta y recibe pagos.
                    </p>
                </div>
            </div>
        </div>
    )
}