import { Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";
import women from "./Data/women.json";
import accessories from "./Data/womenaccessories.json";
import men from "./Data/men.json";
import Poster from "./Poster";
import Poster2 from "./Poster2";
import { Link } from "react-router-dom";
import children from "./Data/Kids.json";
export default function Layout() {
  document.title="Violent Hope-Luxury Fashion & Designer Shopping"
  const kids = {
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_KIDS_DSK_2x_20220908102616.jpg?imwidth=1180&imdensity=1",
    title: "Kids",
  };
  const Life = {
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_LIFE_DSK_2x_20220908102608.jpg?imwidth=1180&imdensity=1",
    title: "Life",
  };
  const mens = {
    image:
      "https://img.mytheresa.com/media/static/raw/cms/l/Gate_page_upload_September_2022/Gatepage_Sep22_DSK_2x_20220908102600.jpg?imwidth=1180&imdensity=1",
    title: "Men",
    title2: "Women",
  };
  return (
    <Box>
      <Poster2 data={mens} />
      <Link to="/kids">
        <Poster data={kids} />
      </Link>
      <Poster data={Life} />

      <Carousel link={"/men"} title="Men's Collection" data={men} />
      <Carousel link={"/women"} title="Women's Collection" data={women} />
      <Carousel link={"/kids"} title="Kid's Collection" data={children} />

      <Carousel
        link={"/accessories"}
        title="Life New Arrivals"
        data={accessories.reverse()}
      />
      {/* <Poster4 image={image4} /> */}
    </Box>
  );
}
