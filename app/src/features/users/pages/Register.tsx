// import { Avatar, Box, Button, Div, Paper, Typography, } from '@mui/material';
// import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
// import RegisterForm from '../../components/loginANDregister/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { Div } from '../../global/styles/DivStyle';
import { Typography } from '../../global/styles/TypographyStyled';
import RegisterForm from '../forms/RegisterForm';
import { ButtonStyled } from '../../global/styles/ButtonStyled';

const Register = () => {
    const navigate = useNavigate();
    const handelClickLogin = () => navigate(`/banner/login`)

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
            sx={{
                justifyContent: "center",
                alignItems: "center", minHeight: '70vh', display: 'flex'
            }}
        >
            <Div
                sx={paperStyle}>
                <Div sx={{
                    padding: '20px'
                }}>
                    <Div
                        sx={{
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}

                    >
                        {/* <Div > */}
                        {/* <Avatar style={avatarStyle}> */}
                        {/* <LockOpenOutlinedIcon /> */}
                        {/* </Avatar> */}
                        {/* </Div> */}
                        <Div >
                            <Typography component="h4" >
                                Signup
                            </Typography>
                        </Div>
                    </Div>
                </Div>
                <Div sx={{
                    display: 'flex',
                    alignItems: "center",
                    flexDirection: 'column'
                }}>
                    <RegisterForm />
                    <ButtonStyled onClick={handelClickLogin} >
                        sign in
                    </ButtonStyled>
                </Div>
            </Div>
        </Div>
    );
};

export default Register;