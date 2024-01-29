import { ToastContainer } from "react-toastify";
// import Calendary from "./features/calander/pages/Calandry";
import Routs from "./features/global/router/Routs";
// import { ButtonStyled } from "./features/global/styles/ButtonStyled";
// import { useTheme } from "./features/global/styles/theme/ThemeProvider";
// import { LoginForm } from "./features/users/components/loginForm";

function App() {
  // const { mode, toggleTheme } = useTheme();
localStorage.setItem('x-auth-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFjZGI5MDk0ZTNhZjFjN2QxN2U1MjkiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDU4MjcyNTd9.CUVLpD_VSfZLIk2i06rRwdfRunZMEsZlYARLjWOX_Ns')
  return (
    <>
      {/* <div style={{ backgroundColor: mode === "dark" ? "black" : "white" }}> */}

      {/* <ButtonStyled
        variant="outline"
        disabled
        style={{ marginInlineStart: 12 }}
      >
        outline
      </ButtonStyled>
      <ButtonStyled variant="outline" style={{ margin: 12 }}>
        outline
      </ButtonStyled>
      <ButtonStyled>plane</ButtonStyled>
      <ButtonStyled onClick={toggleTheme}>
        {mode === "light" ? "light" : "dark"}
      </ButtonStyled> */}
      {/* </div> */}
      {/* <Typography>
      my typography:{" "}
      <Typography
        sx={{ fontWeight: "bolder", color: "green" }}
        component="span"
      >
        child
      </Typography>{" "}
      bla bla
    </Typography> */}
      {/* <LoginForm/> */}
      <Routs />
      <ToastContainer />  </>
  );
}

export default App;
