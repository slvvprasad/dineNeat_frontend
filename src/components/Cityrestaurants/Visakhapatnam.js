import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../Navbar';

const cardStyle = {
  maxWidth: 345,
  flexBasis: 'calc(33.33% - 16px)', // one-third of the container width minus margin
  margin: '8px',
  padding:'10px',
  maxHeight: 400
};

const imageStyle = {
  height: '200px',
  objectFit: 'cover', // resize image to cover the container
};

const data = [
  {
    id: 1,
    title: 'Barbeque Nation',
    image: '/vskprestimg/vskp_barbeque.jpg',
    description:
      'North Indian, BBQ, Biryani, Kebab, Beverages, Desserts',
    button1: 'Book A Table',
   
  },
  {
    id: 2,
    title: 'Spicy Venue',
    image: '/vskprestimg/vskp_spicyvenue.png',
    description:
      'North Indian, Chinese, Andhra, Biryani, Sichuan',
    button1: 'Book A Table'
  },
  {
    id: 3,
    title: 'Hotel Kamat',
    image: '/vskprestimg/vskp_kamat.png',
    description:
      'Biryani, North Indian, Chinese, Seafood, Andhra, Sichuan',
    button1: 'Book A Table',
  },
  {
    id: 4,
    title: 'Celebrations',
    image: '/vskprestimg/vskp_celebrations.jpg',
    description:
      'Biryani, North Indian, South Indian, Beverages',
    button1: 'Book A Table',
  },
  {
    id: 5,
    title: 'Ethnic Restaurant',
    image: '/vskprestimg/vskp_ethnic.jpg',
    description:
      'South Indian, Desserts',
      button1: 'Book A Table',
      // button2: '4.4★',
  },
  {
    id: 6,
    title: 'Kebab Chef',
    image: '/vskprestimg/vskp_kebabchef.png',
    description:
      'North Indian, Biryani, Chinese, Mughlai, Pizza, Fast Food, Bakery, Beverages',
    button1: 'Book A Table',
  },
  
];

export default function CardContainer() {
  return (
    <div>
        <Navbar/>
        <div style={{ display: 'flex', flexWrap: 'wrap', paddingTop: '100px',paddingLeft:'200px',paddingRight:'100px' }}>
      {data.map((card) => (
        <Card key={card.id} sx={cardStyle}>
          <CardMedia
            component="img"
            alt={card.title}
            image={process.env.PUBLIC_URL + card.image}
            sx={imageStyle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" href='/book'>{card.button1}</Button>
            <Button size="large">{card.button2}</Button>
          </CardActions>
        </Card>
      ))}
    </div>
    </div>
  );
}
