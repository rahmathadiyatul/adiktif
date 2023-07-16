import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ text, url, acro }) {
    return (
        <Card sx={{ height: "80%", maxWidth: 345, borderRadius: 12, backgroundColor: 'yellow', boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)" }}>
            <CardActionArea sx={{ backgroundColor: 'yellow' }}>
                <CardMedia
                    component="img"
                    height="70"
                    width="100"
                    image={url}
                    alt={acro}
                />
                <CardContent sx={{ padding: '4% 8%' }}>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4" component="div">
                        {acro}
                    </Typography>
                    <Typography variant="body2" color="black">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}