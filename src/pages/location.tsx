import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  Box,
  Container,
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";

import "../css/style.css";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import logoImg from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLayout from "../components/MainLayout";

const IndexPage = () => {
  return (
    <MainLayout>
      <Box
        display={"flex"}
        flexDir="row"
        justifyContent={"center"}
        color="#1f2c5a"
        gap="40px"
        flexGrow={"1"}
      >
        <Box>
          <Box backgroundColor="white" padding={"16px"} borderRadius="4%">
            <Text fontWeight={"bold"}>Location</Text>
            <Text>1600 20th St, Denver, CO 80202 720.769.1414</Text>
            <Text fontWeight={"bold"} mt="24px">
              Phone
            </Text>
            <Text>703-272-8797</Text>
            <Text fontWeight={"bold"} mt="24px">
              Hours
            </Text>
            <Text>Mon: closed </Text>
            <Text>Tues - Sat: 11am - 9pm</Text>
            <Text>Sun: 12pm - 6pm</Text>
          </Box>
        </Box>
        <Box className="mapouter">
          <Box className="gmap_canvas">
            <iframe
              width="400"
              height="600"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=11208%20Lee%20Hwy,%20Fairfax,%20VA%2022030&t=&z=15&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
            ></iframe>
            <a href="https://123movies-to.org"></a>
            <br />
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
