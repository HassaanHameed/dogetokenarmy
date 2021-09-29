import React from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItem,
  Stack,
  Container,
  Grid,
  ListItemIcon,
  Link,
  Typography,
  Box,
  Button,
} from "@mui/material";
import "./App.css";
import doglogo from "./img/header/doglogo.svg";
import twittericon from "./img/header/twittericon.svg";
import telegramicon from "./img/header/telegramicon.svg";
import headerbackground from "./img/header/headerbackground.png";
import Countdown from "react-countdown";
const headerFontStyles = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontSize: "14px",
  lineHeight: "21px",
  color: "white",
  textTransform: "uppercase",
};
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <span
      style={{
        color: "#1F2641",
        fontSize: "40px",
        fontWeight: "bold",
      }}
    >
      {days} : {hours} : {minutes} : {seconds} <br />
      <span
        style={{
          fontSize: "16px",
          fontWeight: "normal",
        }}
      >
        Days : Hours : Minutes : Seconds
      </span>
    </span>
  );
};

const Header = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0F121E",
          width: "100%",
          height: "80px",
          padding: "0",
          margin: "0",
          top: "0",
          position: "fixed",
        }}
      >
        <Container>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columns={14}
            sx={headerFontStyles}
          >
            <Grid item>
              <img style={{ height: "70px" }} src={doglogo} alt="logo" />
            </Grid>
            <Grid item>
              <h3>
                DOGE ARMY
                <br />
                TOKEN
              </h3>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <h4>TOKENOMICS</h4>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <p>roadmap</p>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <p>distribution</p>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <p>presale</p>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <p>giveaway</p>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <p>team</p>
              </Link>
            </Grid>

            <Grid item>
              <Link href="#" color="inherit" underline="none">
                <p>faq</p>
              </Link>
            </Grid>
            <Grid item>
              <Link href="www.twitter.com">
                <img
                  style={{ height: "inherit" }}
                  src={twittericon}
                  alt="twitter"
                />
              </Link>
            </Grid>
            <Grid item>
              <Link href="www.telegram.com">
                <img
                  style={{ height: "inherit" }}
                  src={telegramicon}
                  alt="telegram"
                />
              </Link>
            </Grid>
            <Grid item>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#FBB829",

                  width: "135px",
                  height: "40px",
                  borderRadius: "15px",
                  "&:hover": {
                    color: "#FBB829",
                    backgroundColor: "inherit",
                    fontSize: "18px",
                  },
                }}
              >
                Connect
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Grid
        container
        sx={{
          backgroundImage: `url(${headerbackground})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          width: "100%",
          height: "819px",
        }}
      >
        <Grid container alignItems="center" sx={{ margin: "190px 0 0 80px" }}>
          <Grid item>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              doge army token
            </p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                textTransform: "uppercase",
                color: "white",
                margin: "20px 0 20px 0",
              }}
            >
              comming soon
            </p>
            <p
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "300",
                width: "450px",
              }}
            >
              A unique community token for doge fans We are built by doge fans,
              for doge fans, and our goal is to create a community where every
              doge fan can come together. We will continuously reward our
              community through weekly giveaways events and redistributions. Our
              mission is: Rewarding Holders, Helping Dogs and Killing Zeros!
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          columns={12}
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ margin: "0 0 0 80px" }}
        >
          <Grid item xs={12} md={6}>
            <p
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              join our community
            </p>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#FBB829",
                width: "135px",
                height: "40px",
                borderRadius: "15px",
                "&:hover": {
                  color: "#FBB829",
                  backgroundColor: "inherit",
                  fontSize: "18px",
                },
              }}
            >
              Twitter
            </Button>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#FBB829",
                width: "135px",
                height: "40px",
                borderRadius: "15px",
                marginLeft: "15px",
                "&:hover": {
                  color: "#FBB829",
                  backgroundColor: "inherit",
                  fontSize: "18px",
                },
              }}
            >
              Telegram
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <p
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
                marginLeft: "20px",
                textTransform: "uppercase",
              }}
            >
              presale comming soon
            </p>
            <div
              style={{
                width: "465px",
                height: "135px",
                borderRadius: "40px",
                backgroundColor: "white",
                textAlign: "center",
                justifyItems: "center",
              }}
            >
              <Countdown date={Date.now() + 1113600000} renderer={renderer} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
