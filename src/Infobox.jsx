import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";

export default function Infobox({ info }) { // ✅ Destructure props correctly
    return (
        <div id="Infobox">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg"
                    id="weather"
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }} component="span">
                        <ul>
                            <li>Feel Temp: {info.Feeltemp}°C</li>
                            <li>Humidity: {info.humidity}%</li>
                            <li>Max Temp: {info.maximumtemp}°C</li>
                            <li>Min Temp: {info.minimumtemp}°C</li>
                            <li>Temp: {info.temp}°C</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
