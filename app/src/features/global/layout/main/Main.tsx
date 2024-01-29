import { CSSProperties, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Div } from '../../styles/DivStyle';
// import { Div } from '../../styles/DivStyle';

const styleContainer: CSSProperties = {
  height: '99%',
  width: '99%',
  display: 'flex',
  flexDirection: 'column',
  margin: '0'
};

const styleHeaderDiv: CSSProperties = {
  order: 1,
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '60px',
  zIndex: '5000'
};

const styleMainDiv: CSSProperties = {
  flexDirection: 'row',
  marginLeft: '90px',
  marginRight: '50px',
  order: 2,
  flexGrow: 1,
  padding: '10px',
  display: 'flex',
  marginTop: '60px',
  marginBottom: '120px',
  maxWidth: '70wh',
};

const styleFooterDiv: CSSProperties = {
  marginBottom: '90px',
  order: 1,
  position: 'fixed',
  bottom: 2,
  width: '100%',
  height: '10px'
};

const Main = () => {
  const navigate = useNavigate();
  const handelClickLogin = () => navigate(`/banner/login`)
  useEffect(() => {
    if (localStorage.getItem('token') === null) { handelClickLogin() }
  }, [])

  return (
    <Div sx={styleContainer}>
      <Div sx={{ ...styleHeaderDiv }}>
        <Header />
      </Div>
      <Div sx={{ ...styleMainDiv, display: 'flex', justifyContent: 'center' }}>
        <Outlet />
      </Div>
      <Div sx={styleFooterDiv}>
        <Footer />
      </Div>
    </Div>
  )
}

export default Main