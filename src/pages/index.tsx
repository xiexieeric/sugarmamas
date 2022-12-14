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
        flexDir="column"
        alignItems={"center"}
        color="#1f2c5a"
        fontFamily={"logo"}
        flexGrow="1"
      >
        <Image width="200px" src={logoImg}></Image>
        <Text fontSize={"100px"}>Sugar Mama's</Text>
        <Box>
          <Box backgroundColor={"#88aaa8"} height="4px"></Box>
          <Text fontSize={"36px"}>Since 1993</Text>
          <Box backgroundColor={"#88aaa8"} height="4px"></Box>
        </Box>

        <Box
          display={"flex"}
          gap="36px"
          mt="24px"
          fontFamily={"body"}
          fontWeight="bold"
        >
          <span>CREAM</span>
          <FontAwesomeIcon icon={faDiamond} color="#f6b944" />
          <span>CANDY</span>
          <FontAwesomeIcon icon={faDiamond} color="#f6b944" />
          <span>CAKE</span>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
