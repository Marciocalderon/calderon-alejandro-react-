import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Item from "./Item";


function itemList({items}){
    return(
        <Container>
        <Row xs={1} md={2} className="g-5">
        {items.map(item =>(
            <Item item={item} key={item.id} />
        ))}
      </Row>
      </Container>
    )
}
export default itemList