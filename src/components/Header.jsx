import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme, Button } from '@mui/material';
import { PiHamburgerBold } from "react-icons/pi";
import homeal from '../assets/homeal.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const theme = useTheme();
    const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            {isMediumOrSmaller ? (
                <>
                    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #2D2D56, #0047AB)' }} className='bar'>
                        <Toolbar>
                            <Typography variant="h6" component="div" className='logod' sx={{ flexGrow: 1 }}>
                                <img src={homeal} alt="Homeal" className='logo' /> Homeal</Typography>
                                <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer}
                                sx={{ mr: 2 }}
                            >
                                <PiHamburgerBold />
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                        <List>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>} />
                            </ListItemButton>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register as Chef</Link>} />
                            </ListItemButton>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link>} />
                            </ListItemButton>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link>} />
                            </ListItemButton>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/chef-stories" style={{ textDecoration: 'none', color: 'inherit' }}>Chef Stories</Link>} />
                            </ListItemButton>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</Link>} />
                            </ListItemButton>
                            <ListItemButton onClick={toggleDrawer}>
                                <ListItemText primary={<Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link>} />
                            </ListItemButton>
                        </List>
                    </Drawer>
                </>
            ) : (
                <AppBar position="static" sx={{ background: 'linear-gradient(to right, #2D2D56, #0047AB)' }} className='bar'>
                    <Toolbar>
                        <Typography variant="h6" component="div" className='logod' sx={{ flexGrow: 1 }}>
                            <img src={homeal} alt="Homeal" className='logo' /> Homeal</Typography>
                        <Button color="inherit"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link></Button>
                        <Button color="inherit"><Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>Register as Chef</Link></Button>
                        <Button color="inherit"><Link to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</Link></Button>
                        <Button color="inherit"><Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>About Us</Link></Button>
                        <Button color="inherit"><Link to="/chef-stories" style={{ textDecoration: 'none', color: 'inherit' }}>Chef Stories</Link></Button>
                        <Button color="inherit"><Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>FAQ</Link></Button>
                        <Button color="inherit"><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us</Link></Button>
                    </Toolbar>
                </AppBar>
            )}
        </>
    );
};

export default Header;
