import parse from 'html-react-parser';
import '../style/Testimonio.css'

const Testimonio = (props) => {

    const testimonioJSX = parse(props.testimonio);
    return (
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={props.img} alt={props.altImg} />


            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><b>{props.nombre}</b> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <b>{props.empresa}</b></p>
                <p className="texto-testimonio">{testimonioJSX}</p>
            </div>
        </div>
    );
};

export default Testimonio;
