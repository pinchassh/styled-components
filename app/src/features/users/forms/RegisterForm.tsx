import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { regiter } from '../services/regiter';
import { toastError, toastSuccess } from '../../global/utils/toast';
import { Form } from '../../global/styles/FormStyle';
import { Div } from "../../global/styles/DivStyle";
import { TextField } from "../../global/styles/TextFieldStyled";
import { Typography } from "../../global/styles/TypographyStyled";
import { ButtonStyled } from "../../global/styles/ButtonStyled";
import UserFromClientInterface from "../types/UserFromClientInterface";
import RegisterInterface from "../types/RegisterInterface";


const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(12).required(),
  phone: yup.string().required(),
  name: yup.object({
    first: yup.string().max(12).required(),
    middle: yup.string(),
    last: yup.string().max(12).required(),
  }).required(),
  address: yup.object({
    state: yup.string(),
    country: yup.string().required(),
    city: yup.string().required(),
    street: yup.string().required(),
    houseNumber: yup.number().required(),
    zip: yup.number(),
  }).required(),
  image: yup.object({
    url: yup.string().required(),
    alt: yup.string().required(),
  }).required(),
  cityBoard: yup.object({
    country: yup.string().oneOf(['IL', 'UK', 'USA']).required(),
    city: yup.string().oneOf(['Jerusalem', 'Tel Aviv', 'Safed', 'London', 'Borough Park', 'Beer Sheva']).required(),
  }).required(),
}).required();

const RegisterForm: React.FC = () => {
  const navigate = useNavigate();

  const textFieldStyle = { padding: '2px', margin: '4px auto ' }

  const { register, formState: { errors }, handleSubmit } = useForm<UserFromClientInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<RegisterInterface> = async (data) => {
    const moveToLogin = () => navigate(`/login`);
    const handelClickSignUp = () => navigate(`/register`);

    const user: UserFromClientInterface = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      name: {
        first: data.name.first,
        middle: data.name.middle || '',
        last: data.name.last,
      },
      address: {
        state: data.address.state || '', // Optional state
        country: data.address.country,
        city: data.address.city,
        street: data.address.street,
        houseNumber: data.address.houseNumber,
        zip: data.address.zip || undefined, // Optional zip code
      },
      image: {
        url: data.image.url,
        alt: data.image.alt,
      },
      cityBoard: {
        country: data.cityBoard.country,
        city: data.cityBoard.city,
      },
    };

    try {
      const responseData = await regiter(user);

      if (responseData) {
        toastSuccess(responseData.name.first);

        setTimeout(() => {
          window.location.reload();
          moveToLogin();
        }, 2000);
      }
    } catch (err) {
      toastError('Sign up failed - try again');

      setTimeout(() => {
        handelClickSignUp();
      }, 2000);
    }
  }


  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Div sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField sx={textFieldStyle} label="First Name" placeholder="Enter first name"
              {...register("firstName", { required: true, maxLength: 20 })}
              aria-invalid={errors.name?.first ? "true" : "false"} />
            <Typography sx={{ color: 'red' }} component='caption'>{errors.name?.first?.message}</Typography>
          </Div>

          <Div sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField sx={textFieldStyle} label="Last Name" placeholder="Enter last name"
              {...register("lastName", { required: true, maxLength: 20 })}
              aria-invalid={errors.lastName ? "true" : "false"} />
            <Typography sx={{ color: 'red' }} component='caption'>{errors.lastName?.message}</Typography>
          </Div>
        </Div>

        <Div sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField sx={textFieldStyle} label="Email" placeholder="Enter your email"
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            aria-invalid={errors.email ? "true" : "false"} />
          <Typography sx={{ color: 'red' }} component='caption'>{errors.email?.message}</Typography>
        </Div>

        <Div sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField sx={textFieldStyle} label="Password" placeholder="Enter your password"
            {...register("password", { required: true, min: 4, max: 12 })}
            aria-invalid={errors.password ? "true" : "false"} />
          <Typography sx={{ color: 'red' }} component='caption'>{errors.password?.message}</Typography>
        </Div>
        <Div sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField sx={textFieldStyle} label="Confirm Password" placeholder="Confirm your password"
            {...register("confirmPassword", { required: true })}
            aria-invalid={errors.password ? "true" : "false"} />
          <Typography sx={{ color: 'red' }} component='caption'>{errors.confirmPassword?.message}</Typography>
        </Div>

        <ButtonStyled
          type='submit'
          // component="contained"
          color="primary"

        >
          sign up
        </ButtonStyled>
      </Form >
    </>
  )
}

export default RegisterForm