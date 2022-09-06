import * as React from "react";
import { HeadFC, Link } from "gatsby";
import {
  Box,
  Container,
  UnorderedList,
  ListItem,
  Text,
  Image,
} from "@chakra-ui/react";

import "../css/style.css";
import {
  faInstagram,
  faFacebook,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import logoImg from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "@reach/router";

const MainLayout = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  return (
    <Box display={"flex"} flexDirection="column" height={"100vh"}>
      <Box textAlign={"center"} color="white" padding={"16px"}>
        Thank YOU for making us #1 in Fairfax (according to Yelp and Trip
        Advisor)
      </Box>
      <Container
        backgroundColor="#f5f3ec"
        maxW={1200}
        flexGrow="1"
        display={"flex"}
        flexDir="column"
      >
        <nav>
          <UnorderedList
            padding={8}
            listStyleType={"none"}
            display="flex"
            gap={"20px"}
            justifyContent="center"
            fontWeight="bold"
            alignItems={"center"}
          >
            {!isHomepage && (
              <ListItem>
                <Link to="/">
                  <Image width="72px" src={logoImg}></Image>
                </Link>
              </ListItem>
            )}
            <ListItem>
              <Link to="/location">Hours & Location</Link>
            </ListItem>
            <ListItem>
              <Link to="/menu">Menu</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">Our Story</Link>
            </ListItem>
            <ListItem>
              <Link to="/fundraising">Fundraising</Link>
            </ListItem>
            <ListItem padding={"8px"} border={"2px solid #1f2c5a"}>
              <Link to="https://www.fortnite.com">Fortnite</Link>
            </ListItem>
          </UnorderedList>
        </nav>
        {children}
        <footer>
          <Text textAlign={"center"} fontWeight={200}>
            11208 Lee Hwy, Fairfax, VA 22030
          </Text>
          <Box
            display={"flex"}
            justifyContent={"center"}
            color="#1f2c5a"
            gap="20px"
            padding={"24px"}
          >
            <FontAwesomeIcon icon={faInstagram} fontSize="24" color="#1f2c5a" />
            <FontAwesomeIcon icon={faFacebook} fontSize="24" color="#1f2c5a" />
            <Link to="https://www.yelp.com/biz/sugar-mamas-fairfax">
              <FontAwesomeIcon icon={faYelp} fontSize="24" color="#1f2c5a" />
            </Link>
          </Box>
        </footer>
      </Container>
    </Box>
  );
};

export default MainLayout;
