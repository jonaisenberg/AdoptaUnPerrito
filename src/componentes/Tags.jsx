/* eslint-disable react/prop-types */
import Badge from 'react-bootstrap/Badge';


const BadgeBoostrap = (props) => {
    return (
        <>
            <Badge className="boton" bg={props.colorButton} >{props.textoButton}</Badge>
        </>
    )
}

export default BadgeBoostrap;