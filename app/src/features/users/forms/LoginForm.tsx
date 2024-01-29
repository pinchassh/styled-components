// import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import LoginInterface from "../types/LoginInterface";
import { toastError, toastSuccess } from "../../global/utils/toast";
import { login } from "../services/login";
import { Div } from "../../global/styles/DivStyle";
import { TextField } from "../../global/styles/TextFieldStyled";
import { Typography } from "../../global/styles/TypographyStyled";
import { ButtonStyled } from "../../global/styles/ButtonStyled";
// import { loginFetch } from '../../api/users/loginFetch';
// import { Response } from '../../types/UserInterface';
// import { useNavigate } from 'react-router-dom';
// import { toastError, toastSuccess } from '../../utils/toast';
// import { UserFormInput } from '../../types/UserInterface';

const schema = yup.object({
    // firstName: yup.string().max(12).required(),
    // lastName: yup.string().max(12).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required()
})
    .required();

const LoginForm = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm<LoginInterface>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<LoginInterface> = async (data) => {

        const email = data.email
        const password = data.password

        const user = JSON.stringify({
            email: email,
            password: password
        });

        const handelClickHomePage = () => {
            // navigate(`/banner/`)
            window.location.reload();
        }

        const handelClickLogIn = () => navigate(`/banner/login`)

        try {
            const data = await login(user)

            if (data.success === true) {
                toastSuccess(data.message)

                localStorage.setItem('token', data.data!.name)
                localStorage.setItem('name', data.data!.name)
                localStorage.setItem('userID', data.data!.id)
                localStorage.setItem('email', data.data!.email)
                setTimeout(() => {
                    handelClickHomePage()
                }, 2000);
            }
        } catch (err) {
            toastError('login error - try again')
            setTimeout(() => {
                handelClickLogIn()
            }, 2000);
            console.log(err);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Div>
                {/* <Div
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                    <Div
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <TextField
                            sx={textFieldStyle}
                            label="First Name"
                            placeholder="Enter first name"
                            {...register("firstName",
                                { required: true, maxLength: 20 }
                            )}
                            aria-invalid={errors.firstName ? "true" : "false"} />
                        <Typography sx={{color:'red' }} component='caption'>
                            {errors.firstName?.message}
                        </Typography>
                    </Div>
                    <Div
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <TextField sx={textFieldStyle}
                            label="Last Name"
                            placeholder="Enter last name"
                            {...register("lastName", {
                                required: true, maxLength: 20
                            })}
                            aria-invalid={errors.lastName ? "true" : "false"} />
                        <Typography  sx={{color:'red' }}  component='caption' >
                            {errors.lastName?.message}
                        </Typography>
                    </Div>
                </Div> */}

                <Div
                    sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        sx={textFieldStyle}
                        label="Email"
                        placeholder="Enter your email"
                        // fullWidth
                        {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                        aria-invalid={errors.email ? "true" : "false"} />
                    <Typography sx={{ color: 'red' }} component='caption'>
                        {errors.email?.message}
                    </Typography>
                </Div>

                <Div
                    sx={{
                        display: 'flex', flexDirection: 'column'
                    }}>
                    <TextField
                        sx={textFieldStyle}
                        label="Password"
                        placeholder="Enter your password"
                        // fullWidth
                        {...register("password", { required: true, min: 4, max: 12 })}
                        aria-invalid={errors.password ? "true" : "false"} />
                    <Typography sx={{ color: 'red' }} component='caption'>
                        {errors.password?.message}
                    </Typography>
                </Div>
            </Div>
            <ButtonStyled type='submit' variant="contained" color="primary" >
                sign in
            </ButtonStyled>
        </form >
    )
}

export default LoginForm

const textFieldStyle = { padding: '2px', margin: '4px auto ' }