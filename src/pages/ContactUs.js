import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class CardInfo {
    constructor(heading, description) {
        this.heading = heading;
        this.description = description;
    }
} 

const cardsInfo = [
    new CardInfo('Location', 'EYD Building, Balderama street, Barangay Bambang, Pasig City 1501'),
    new CardInfo('Contact Number', '+63 917 751 1020'),
    new CardInfo('Email', 'enricodelarosa01@gmail.com')
];

export default function ContactUs() {
  return (
    <div>
        <h1 style={{marginTop: '40px', marginBottom: '40px', textAlign: 'center'}}>Contact Us</h1>
        <div style={{display: 'flex', rowGap: '20px', columnGap: '20px', justifyContent: 'center'}}>
            {cardsInfo.map(cardInfo => {
                return <CreateCard heading={cardInfo.heading} description={cardInfo.description} />
            })}
        </div>
    </div>
  );
}

function CreateCard({heading, description}) {
    return (
        <Card sx={{ width: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    )
}
