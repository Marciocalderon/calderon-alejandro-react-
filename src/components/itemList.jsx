import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Item from "./Item";


function itemList({items}){
    return(
        <Container>
        <Row xs={2} md={3} className="g-1">
        {items.map(item =>(
            <Item item={item} key={item.id} />
        ))}
      </Row>
      </Container>
    )
}
export default itemList