import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";


function Item({item}){
    return(
        <Col key={item.id}>
            <Card className='card_img'>
              <Card.Img   variant="top" src={item.thumbnail} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.category}
                </Card.Text><Card.Text>
                  {item.description}
                </Card.Text>
                <Button>Ver detalles</Button>
              </Card.Body>
            </Card>
          </Col>
    )
}
export default Item