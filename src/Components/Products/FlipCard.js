import img from "./1.png"
import back from "./2.png"
import { CardMedia } from "@mui/material";

import BottomNav from "./BottomNav";

function BusinessCard() {
    return (
        <div style={{ paddingTop: "87px" }}>
            <CardMedia
                component="img"
                height="auto"
                image={img}
                alt="green iguana"
                style={{
                    borderRadius: "25px",
                }}
            />
            <div style={{
                paddingTop: "25px"
            }}>
                <CardMedia
                    component="img"
                    height="auto"
                    image={back}
                    alt="green iguana"
                    style={{
                        borderRadius: "25px",
                    }}
                /></div>
            <BottomNav />

        </div>
    );
}

export default BusinessCard;