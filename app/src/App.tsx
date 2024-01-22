import Calendary from "./features/global/components/Calandry";
import { ButtonStyled } from "./features/global/global/styles/ButtonStyled";
import { Typography } from "./features/global/global/styles/TypographyStyled";
import { useTheme } from "./features/global/styles/theme/ThemeProvider";
import { LoginForm } from "./features/users/components/loginForm";

function App() {
  const { mode, toggleTheme } = useTheme();

  return (<>
    <div style={{ backgroundColor: mode === "dark" ? "black" : "white" }}>

      <ButtonStyled
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
      </ButtonStyled>
    </div>
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
    <LoginForm/>
    <Calendary/>
  </>
  );
}

export default App;
