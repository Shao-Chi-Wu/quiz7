
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'

import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/Styles'

import road from './road.jpg'




const useStyles = makeStyles({
    root:{
        height: '100vh',
        width: '100vw',
    },
    image:{
        backgroundImage:'url('+road+')',
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // width : '100vw',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'grid',
        'grid-auto-flow': 'column',
    },
    cardOutside:{
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    logoOutside:{
        display: 'grid',
        height: '100vh',        
    },
    text:{
        left : '3vw',
        position:'relative',
    },
    logoLine:{
        color:'white',
        display: 'grid',
        opacity: '0.6',
    },
    card:{
        background:'gray',
        height:'90vh',
        width:'40vw',        
        //position: 'relative',
        // right:'3vw',
        margin:'3vw',
        opacity:'0.8',
        display: 'grid',
        borderRadius:'25%',
    },
    word:{
        color:'white',
        justifyContent: 'center',
        display: 'grid',
        position:'relative',
    },
    inputText:{
        top:'8vh',
        margin:'2vw',
        width:'36vw',
        background:'white',
        opacity:'0.8',
    },
    normalDistance:{
        top:'5vh',
    },
    cardButton:{
        justifyContent: 'center',
        width : '20vw',
        left:'10vw',
        borderRadius:'10px',
    },
})

export default function LoginPage(props){
    const classes =  useStyles();
    return (
        <div className={"LoginPage"}>
          {/* <Container> */}
            <Grid container component='main' justify='center' className={classes.root} >
              {/* <CssBaseline /> */}
              <Grid item xs={false} sm={8} md={true} className={classes.image}>
                <Box display={{ xs: "none", sm: "none", md:"block"}}> 
                <div className={classes.logoOutside}>
                <Typography className={classes.logoLine} xs={false} sm={false}
                  component="h2" 
                  variant="h2"
                  style={{position:'relative',left:'7vw',top:'43vh'}}                >
                </Typography>  
                <Typography className={classes.logoLine} xs={false} sm={false}
                  component="h3" 
                  variant="h3"
                  style={{position:'relative',left:'12vw',top:'3vh'}}                >
                </Typography>
                </div>
                </Box>
                <div className={classes.cardOutside}>         
                <Card variant="outlined" className={classes.card}>
                  <Typography className={classes.word}
                    component="h1" 
                    variant="h3"
                    style={{top:'6vh'}}
                  >
                    Login
                  </Typography>
                  <form style={{height:'80vh'}}>
                    <div>
                      <TextField
                        className={classes.inputText}
                        variant="outlined"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        className={[classes.inputText,classes.normalDistance].join(' ')}
                        variant="outlined"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <Button className={[classes.cardButton].join(' ')}
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{top:'7vh'}}  
                        onClick={props.onLogin}                  
                      >
                        Sign In
                      </Button>
                    </div>                    
                    <Divider 
                      variant="middle"
                    />
                    <Typography className={classes.word}
                      component="h5" 
                      variant="h6"
                      style={{top:'14vh'}}
                    >
                      Don't have account?
                    </Typography>
                    <Button className={[classes.cardButton].join(' ')}
                      type="submit"
                      variant="contained"
                      color="secondary"
                      style={{top:'14vh'}}              
                    >
                      Register
                    </Button>
                  </form>
                </Card>   
                </div>                               
              </Grid>
            </Grid>
            
          {/* </Container> */}
        </div>
    );
}