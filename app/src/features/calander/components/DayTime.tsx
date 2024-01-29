import { CSSProperties, useEffect, useState } from "react";
import { Div } from "../../global/styles/DivStyle";
import { Typography } from "../../global/styles/TypographyStyled";
import { useTheme } from "styled-components";
import { tokens } from "../../global/themes/Calendarthemes";
import { getAllZmanim } from "../../global/services/getZmanim";
import { useParams } from "react-router-dom";
import { ZmanimCitys } from "../../global/interfices/ResponseZmanim";



function DayTime() {
  const [, setMessage] = useState('');
  const [zmanim, setZmanim] = useState<ZmanimCitys>()
  const [, setLoading] = useState(true);
  const strDate = useParams()
  console.log('strDatestrDate', strDate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllZmanim();
        console.log('resultresultresult', result);

        if (result) {
          setZmanim(result);
          console.log(zmanim);

        } else {
          // Handle the case where result is undefined
          setMessage('No data received from the server');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log('Updated zmanim:', zmanim);
  }, [zmanim]);

  // const  Jerusalem = zmanim!.Jerusalem;
  const theme = useTheme();
  const colors = theme.palette?.mode ? tokens(theme.palette.mode) : tokens("light");

  const divStyle: CSSProperties = {
    margin: '5px',
    backgroundColor: '#70d4f3',
    color: colors.primary[500],
    borderRadius: '8px',
    padding: '10px',
    width: '70%',
    marginBlock: '20px'
  };

  return (
    <Div sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Div sx={{ margin: '30px' }}>
        <Typography component="h1" >today time</Typography>
      </Div>
      <Div sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '75vh',

        flexDirection: 'row',
        width: '65vw',
        borderRadius: '45px',
        flexWrap: 'wrap',
      }}>{zmanim && zmanim.Jerusalem.map((day) => {
        return (<Div key={day.civilDate} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '75vh',
          flexDirection: 'column',
          border: '3px solid black',
          width: '25vw',
          borderRadius: '45px'
        }}>
          <Typography component="h4" sx={divStyle}>{`תאריך לועזי: ${day.civilDate}`}</Typography>
          <Typography component="h4" sx={divStyle}>{`יום: ${day.day}`}</Typography>
          <Typography component="h4" sx={divStyle}>{`חצות: ${day.chatzos}`}</Typography>
          <Typography component="h4" sx={divStyle}>{day.minchaGedolaGRA}</Typography>
          <Typography component="h4" sx={divStyle}>{day.plag}</Typography>
          <Typography component="h4" sx={divStyle}>{` $:עלות השחר 72 דקות`}</Typography>
        </Div>)
      })}

      </Div>
    </Div>
  )
}

export default DayTime