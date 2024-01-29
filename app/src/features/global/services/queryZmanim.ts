// import { gql } from "@apollo/client";


const obj = `{
    civilDate
    jewishDate
    day
    parshasHashavuaOrYomTov
    alos16
    alos72Minutes
    misheyakir
    sunrise
    sofZmanShmaMGA
    sofZmanShmaGRA
    sofZmanTfilaMGA
    sofZmanTfilaGRA
    chatzos
    minchaGedolaGRA
    plag
    candleLighting18Minutes
    sunset
    tzaisGeonim
    tzais72
    tzais16
    _id
}`

// export const QUERY = gql`
// query  {
//     allZmanim {
//       BeerSheva ${obj}
//       BoroPark ${obj}
//       Jerusalem ${obj}
//       London ${obj}
//       Tlv ${obj}
//       Zefat ${obj}
//     }}`

export const gqlBody = {
  query: `query {
    allZmanim {
      BeerSheva ${obj}
      BoroPark ${obj}
      Jerusalem ${obj}
      London ${obj}
      Tlv ${obj}
      Zefat ${obj}
    }
  }
  `,
  variables: {}
}