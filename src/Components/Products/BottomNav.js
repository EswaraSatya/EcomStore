import React, { useState } from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CottageIcon from '@mui/icons-material/Cottage';
import { Avatar, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from 'react-router';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import prasad from "./Prasad.jpeg"
const useStyles = makeStyles({
    root: {
        position: "fixed",
        bottom: "0px",
        left: "0px",
        right: "0px",
        marginBottom: "0px",
        width: "100vw",
    }
});
const BottomNav = () => {

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));


    const classes = useStyles();
    const navigate = useNavigate();

    const [value, setValue] = useState(0);
    const HomePage = () => {
        navigate("/EcomStore");
    };
    const FlipCard = () => {
        navigate("/BusinessCard");
    };
    const Avatarpage = () => {
        navigate("/ContactUs");
    }
    return (
        <div>
            {window.screen.width < 1280 ?
                <BottomNavigation
                    showLabels
                    // value={value}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    className={classes.root}

                >
                    <BottomNavigationAction label="Home" icon={<CottageIcon onClick={HomePage} />} />
                    <BottomNavigationAction label="Business Card" icon={<CreditCardIcon onClick={FlipCard} />} />
                    <BottomNavigationAction icon={
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                        >
                            <Avatar
                                src={prasad} onClick={Avatarpage} /></StyledBadge>
                    } />
                </BottomNavigation> : ""
            }
        </div>
    )
}

export default BottomNav