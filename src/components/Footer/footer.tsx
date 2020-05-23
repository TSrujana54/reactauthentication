import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(() => {
//     createStyles({
//         footerStyle: {
//             alignItems: 'center',
//             marginTop: 570
//         },

//     }),
// )
const useStyles = makeStyles(() =>
  createStyles({
    footerStyle: {
      alignItems: "center",
      marginTop:570
    },   
   
  }),
);


const Footer = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.footerStyle} >
            <Toolbar>
                <Typography>
                    KeepNote@2020
                </Typography>
            </Toolbar>
        </AppBar>

    )
}



export default Footer