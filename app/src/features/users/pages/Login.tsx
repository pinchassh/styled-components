// import { Typography, Avatar, Button, Grid, Paper, Link, Box } from '@mui/material';
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
// import LoginForm from '../../components/loginANDregister/LoginForm';
import { Link, useNavigate } from 'react-router-dom';
import { Div } from '../../global/styles/DivStyle';
import { Typography } from '../../global/styles/TypographyStyled';
import LoginForm from '../forms/LoginForm';
import { ButtonStyled } from '../../global/styles/ButtonStyled';

const Login = () => {

    const navigate = useNavigate();
    const handelClickSignUp = () => navigate(`/banner/register`)

    const paperStyle = {
        padding: 20,
        margin: '0 auto ',
        boxShadow: '0',
        display: 'flex',
        alignItems: 'center'
    };
    const avatarStyle = { backgroundColor: 'green' };

    return (
        <Div
            sx={{ justifyContent: "center", alignItems: "center", minHeight: '70vh', display: 'flex' }}  >
            <Div sx={paperStyle}>
                <Div sx={{ padding: '20px' }}>
                    <Div
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}

                    >
                        {/* <Grid item>
                            <Avatar style={avatarStyle}>
                                <LockOpenOutlinedIcon />
                            </Avatar>
                        </Grid> */}
                        <Div >
                            <Typography component="h4" >
                                login
                            </Typography>
                        </Div>
                    </Div>
                </Div>
                <Div sx={{
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: 'column'
                }}>
                    <LoginForm />
                    <Typography>
                        <Link to='#'>
                            Forgot password?
                        </Link>
                    </Typography>
                    <Typography>
                        <ButtonStyled onClick={handelClickSignUp} >
                            sign Up
                        </ButtonStyled>
                    </Typography>
                </Div>
            </Div>
        </Div>
    );
};

export default Login;