import { useForm,
    //  SubmitHandler
     } from "react-hook-form";
import { ButtonStyled } from "../../global/styles/ButtonStyled";
import { FlexContainer } from "../../global/styles/FlexContainer";
import { FormContainer } from "../../global/styles/FormStyle";
import { TextFieldContainer } from "../../global/styles/TextFieldStyled";
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"
// import { useNavigate } from 'react-router-dom';
// import { toastError, toastSuccess } from "../../global/global/utils/toast";

// import { ErrorMessageContainer } from "../../global/global/styles/ErrorMessageStyle";
// import { CSSProperties } from "react";
// import { ErrorMessageContainer } from "../../global/global/styles/ErrorMessageContainerStyle";
// import { toastError, toastSuccess } from '../../utils/toast';

// const schema = yup.object({
//     firstName: yup.string().max(12).required(),
//     lastName: yup.string().max(12).required(),
//     email: yup.string().email().required(),
//     password: yup.string().min(4).max(12).required()
// })
    // .required();

export const LoginForm = () => {
    // const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm({
        // resolver: yupResolver(schema),
    });

    const onSubmit = async () => {

        // const email = data.email
        // const password = data.password

        // const user = JSON.stringify({
        //     email: email,
        //     password: password
        // });

        // const handelClickHomePage = () => {
        //     navigate(`/banner/`)
        //     window.location.reload();
        // }

        // const handelClickLogIn = () => navigate(`/banner/login`)

        // try {
        // const data = await loginFetch(user)

        // if (data.success === true) {
        //     toastSuccess(data.message)

        //     setTimeout(() => {
        //         handelClickHomePage()
        //     }, 2000);
        // }
        //     } catch (err) {
        //         toastError('login error - try again')
        //         setTimeout(() => {
        //             handelClickLogIn()
        //         }, 2000);
        //         console.log(err);
        //     }
    }
    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>

            <FlexContainer justify="center" direction="column" alignItems= "center">

            <FlexContainer justify="center" direction="column">
                <TextFieldContainer
                    placeholder="Enter your email"
                    fullWidth
                    {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    aria-invalid={errors.email ? "true" : "false"}
                    />
                <TextFieldContainer
                    placeholder="Enter your password"
                    fullWidth
                    {...register("password", { required: true, min: 4, max: 12 })}
                    aria-invalid={errors.password ? "true" : "false"}
                    />

            </FlexContainer>
            <FlexContainer justify="center" >
            <ButtonStyled type="submit" variant="contained" color="primary" >
                Sign In
            </ButtonStyled>

            <ButtonStyled type="submit" variant="contained" color="primary"  >
                Sign up
            </ButtonStyled>
            </FlexContainer>
                    </FlexContainer>
        </FormContainer>
    );
}

