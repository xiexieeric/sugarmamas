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
        <Box
          display={"flex"}
          backgroundColor="white"
          padding={"16px"}
          borderRadius="4%"
          gap="48px"
        >
          <Box minW="200px">
            <Text fontSize={"2xl"} fontWeight="bold">
              Scoops
            </Text>
            <Box display={"flex"} justifyContent="space-between">
              <span>1 Scoop</span>
              <span>$3.75</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>2 Scoops</span>
              <span>$6.25</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>3 Scoops</span>
              <span>$8.50</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Mini Scoops (1 1/2 inch)</span>
              <span>$0.75</span>
            </Box>
            <Text fontSize={"2xl"} fontWeight="bold" mt="16px">
              Specialties
            </Text>
            <Box display={"flex"} justifyContent="space-between">
              <span>Sundae</span>
              <span>$3.75</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Banana Split</span>
              <span>$6.25</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Banana Baby</span>
              <span>$8.50</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Brownie Sundae</span>
              <span>$8.50</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Fried Ice Cream</span>
              <span>$8.50</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Turtle Sundae</span>
              <span>$8.50</span>
            </Box>
          </Box>
          <Box minW="200px">
            <Text fontSize={"2xl"} fontWeight="bold">
              Drinks
            </Text>
            <Box display={"flex"} justifyContent="space-between">
              <span>Milkshake</span>
              <span>$6.00</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Malt</span>
              <span>$6.50</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Root Beer Float</span>
              <span>$5.75</span>
            </Box>
            <Text fontSize={"2xl"} fontWeight="bold" mt="16px">
              By the Tub
            </Text>
            <Box display={"flex"} justifyContent="space-between">
              <span>Pint</span>
              <span>$5.50</span>
            </Box>
            <Box display={"flex"} justifyContent="space-between">
              <span>Quart</span>
              <span>$8.00</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
