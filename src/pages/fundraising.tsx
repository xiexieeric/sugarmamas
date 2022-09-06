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
        flexGrow="1"
      >
        <Box width="600px">
          <Text>
            Looking for a way to earn money for your school, club, organization,
            or participation in a good cause (walks/runs/etc)?
          </Text>
          <br />
          <Text>
            Pick a day. Send in all your friends and family. We'll collect the
            receipts from those that say they are with your group, and at the
            end of the day you get 20% of those collect receipt sales.
          </Text>
          <br />
          <Text>It's a win-win for everyone.</Text>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
