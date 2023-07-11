import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const navigate=useNavigate();
  const cardhandler=()=>{
    navigate(`/carddetail/${productdetail.id}`)
    // console.log("card click");
  }
  const productdetail = props.product;
  console.log(props);

  return (
    <>
      <Card onClick={cardhandler} sx={{ maxWidth: 345, marginBottom: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={productdetail.thumbnail}
            alt="hotel"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {productdetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <CurrencyRupeeIcon sx={{ fontSize: 13 }} />
              {productdetail.price} Price
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={productdetail.rating}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
