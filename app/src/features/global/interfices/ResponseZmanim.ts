export interface Zmanim {
  alos16: string;
  alos72Minutes: string;
  civilDate: string;
  day: string;
  jewishDate: string;
  parshasHashavuaOrYomTov: string;
  candleLighting18Minutes: string;
  chatzos: string;
  minchaGedolaGRA: string;
  misheyakir: string;
  plag: string;
  sofZmanShmaGRA: string;
  sofZmanShmaMGA: string;
  sofZmanTfilaGRA: string;
  sofZmanTfilaMGA: string;
  sunrise: string;
  sunset: string;
  tzais16: string;
  tzais72: string;
  tzaisGeonim: string;
  _id?: string;
}
export interface ZmanimCitys {
  BeerSheva: Zmanim[];
  BoroPark: Zmanim[];
  Jerusalem: Zmanim[];
  London: Zmanim[];
  Tlv: Zmanim[];
  Zefat: Zmanim[];
}