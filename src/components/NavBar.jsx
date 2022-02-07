import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles (theme => ({
    offset: theme.mixins.Toolbar

}))


const NavBar =()=>{

    const classes = useStyles()
    return(
        <div>
           <AppBar position="fixed" color="primary">
             <Toolbar>
               <Typography variant="h6">
                 Augusto Gadea
               </Typography>
             </Toolbar>
           </AppBar>
        <div className={classes.offset}>

        </div>


        </div>
    )
}
export default NavBar;