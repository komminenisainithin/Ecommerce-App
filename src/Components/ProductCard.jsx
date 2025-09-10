import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function ProductCard({ product }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Link to={`/Product/${product.id}`}>
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Price: ${product.price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Link>
        </Card>
    );
}

export default ProductCard;