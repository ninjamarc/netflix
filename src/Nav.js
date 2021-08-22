import { IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./Nav.css";
import Login from './Login';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SearchIcon from '@material-ui/icons/Search';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TableChartIcon from '@material-ui/icons/TableChart';
import { Link } from 'react-router-dom';



function Nav() {
    const [show, handleShow] = useState(false);
    const [open, setOpen] = useState(false)
    const [anchor, setAnchor] = useState('left')

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false);
      };

//sets nav bar to show after scroll past 100px on Y axis, then removes events listener
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
            });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        //if show is true then show nav with black background otherwise show no background
        <div className={`nav ${show && "nav__black"}`}>
            <IconButton 
                className='nav__button'
                onClick={handleDrawerOpen}
                color='inherit'
                edge='start'
                aria-label='menu'>
                    <MenuIcon style={{color: 'gray'}} fontSize='medium'/>
                </IconButton>
                   
           
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/1/15/Logonfx.png"
                alt="Netflix Logo"
                />
            
            <div>
                <Link to='/movies'><button className="banner__button">Movies</button></Link>
                <Link to='/tvshows'><button className="banner__button">Tv Shows</button></Link>
            </div>
            <Login />

            <Drawer
                className='drawer'
                anchor='left'
                variant='persistent'
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className= 'drawer__body'>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon style={{ color: 'white'}}/> 
                    </IconButton>
                <Divider />
                    <List component="nav" style={{color: 'white'}} aria-label="main mailbox folders">
                    <Link to='/search'>
                        <ListItem button>
                       
                            <ListItemIcon >
                                
                                    <SearchIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                                <ListItemText primary="Search" />
                                
                        </ListItem>
                    </Link>
                    <Link to='/movies'>
                        <ListItem button>
                        
                            <ListItemIcon>
                                <LocalMoviesIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Movies" />
                        </ListItem>
                        </Link>
                        <Link to='/tvshows'>
                        <ListItem button>
                            <ListItemIcon>
                                <LiveTvIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="TV Shows" />
                        </ListItem>
                        </Link>
                        <Link to='/table'>
                        <ListItem button>
                            <ListItemIcon>
                                <TableChartIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText primary="Data Table" />
                        </ListItem>
                        </Link>
                    </List>
                <Divider />
                    
                 </div>
               

            </Drawer>
            
        </div>
    );
}

export default Nav;
