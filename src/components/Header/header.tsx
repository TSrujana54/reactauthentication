import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography id="keepid" variant="h1" >
                    Google Keep
          </Typography>
            </Toolbar>
        </AppBar>
    )

}


export default Header