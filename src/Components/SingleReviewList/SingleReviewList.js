// import React from 'react';
// import { Card } from 'react-bootstrap';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const SingleReviewList = (props) => {
    const { index, name, description, price, img } = props.review || {};

    return (
        // <div className="col-md-4 mt-4">
        //     <Card style={{ width: '18rem', height: '100%' }}>
        //         <Card.Img variant="top" src={img} />
        //         <Card.Body>
        //             <Card.Title><span className="text-warning"> Travel Place-</span> {name}</Card.Title>
        //             <Card.Title><span className="text-warning"> Description-</span> {description}</Card.Title>
        //             <Card.Text>


        //                 {/* <span className="text-info"> About Doctor:-</span> : {about} */}
        //             </Card.Text>
        //             <Card.Title><span className="text-danger font-weight-bold"> Travel Cost-</span> {price} $</Card.Title>

        //         </Card.Body>
        //     </Card>


        // </div>



        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    );
};

export default SingleReviewList;