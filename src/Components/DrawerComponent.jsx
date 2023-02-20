import React,{useState} from 'react'
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from "@mui/icons-material/Menu";
import "./Drawer.css"

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);



    return (
      <>
        <Drawer
          open={openDrawer}
          anchor={"right"}
          onClose={() => setOpenDrawer(false)}
        >
          <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <img className='drawerImg' src="https://spaalon.com/images/SpaalonLogoRed.jpg" alt=''/>
              </ListItemText>
            </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="/" className="drawerA">Hair <ArrowForwardIcon/></a>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="/about" className="drawerA">Body <ArrowForwardIcon/></a>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="/contact" className="drawerA">Spa <ArrowForwardIcon/></a>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="/about" className="drawerA">Nail <ArrowForwardIcon/></a>
              </ListItemText>
            </ListItem>
            <Divider/>
            <ListItem onClick={() => setOpenDrawer(false)}>
              <ListItemText>
                <a href="/about" className="drawerA">Face <ArrowForwardIcon/></a>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}className="{classes.icon}">
          <MenuIcon />
        </IconButton>
      </>
    )
}

export default DrawerComponent