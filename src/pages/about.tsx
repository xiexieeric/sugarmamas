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
            Located in <strong>Fairfax, VA</strong>, we're serving up delicious
            handmade ice cream. It's the old fashion scoop-able kind we all grew
            up on. No soft serve or frozen yogurt here!
          </Text>
          <br />
          <Text>
            Local family owned and operated, we are open ALL YEAR LONG*! You
            don't shut down in the winter, why should we? Ice cream is yummy
            anytime or season.
          </Text>
          <br />
          <Text>
            YES! We can handle a bus full of folks. We've done it a few times!
            Charter bus groups are welcome, just please call and give us a heads
            up.
          </Text>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
