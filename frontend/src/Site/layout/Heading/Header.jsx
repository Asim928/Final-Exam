import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import './Header.scss'
import { Box } from '@mui/material';

const Header = (anchor, open) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home'].map((text, index) => (
          <ListItem key={text} disablePadding>

            <ul>
              <li>
                <Link className='Link' to="/">Home</Link>
              </li>

              <li>
                <Link className='Link' to="/add">Add</Link>
              </li>

            </ul>

          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="headerBg">
        <div className="header">
          <div className="container">
            <div className="header_title">
              <h1>Podca</h1>
            </div>
            <div className="header_desc">
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon className='menuBtn' onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="header_content">
            <div className="title">
              <h3>Episode 09: How To Create</h3>
              <h3>Web Page Using Bootstrap 4</h3>
            </div>
            <div className="date">
              <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
            </div>
            <div className="button">
              <button className='btn'>READ THE TRANSCRIPTS</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header