/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Badge from "./Tags";

const Cards = ({url, titulo, texto, colorButton, textoButton}) => {
    const imagenEstilos = {
        height: "180px"
    };
    return (
        <>
            <Card style={{widht: '18rem'}}>
                <Card.Img variant="top" src={url} style={imagenEstilos} />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{texto}</Card.Text>
                    <Badge
                    colorButton={colorButton}
                    textoButton={textoButton}
                    />
                </Card.Body>
            </Card>
        </>
    );
};

export default Cards;
