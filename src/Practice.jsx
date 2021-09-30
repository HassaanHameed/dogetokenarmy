import React from "react";

import {
  Paper,
  Stack,
  Container,
  Grid,
  styled,
  Button,
  Link,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import doglogo from "./img/header/doglogo.svg";
import twitterlogo from "./img/header/twittericon.svg";
import telegramlogo from "./img/header/telegramicon.svg";
import headerbackground from "./img/header/headerbackground.png";
import Countdown from "react-countdown";
import tokenomics from "./img/body1/TOKENOMICS.png";
import first from "./img/body1/first.png";
import second from "./img/body1/second.png";
import third from "./img/body1/third.png";
import fourth from "./img/body1/fourth.png";
import fifth from "./img/body1/fifth.png";
import sixth from "./img/body1/sixth.png";
import roadmap from "./img/body1/ROADMAP.png";
import moon from "./img/body1/moon.png";
import year from "./img/body1/year.png";
import circle from "./img/body1/circle.png";
import rectangle from "./img/body1/rectangel.png";
import bar from "./img/body1/Bar.png";
import year2022 from "./img/body1/year2022.png";
import tokendistribution from "./img/body1/tokendistribution.png";
import presale from "./img/body1/presale.png";
import { PieChart } from "react-minimal-pie-chart";
import playbtn from "./img/body1/playbtn.png";
import pdfdog from "./img/body1/pdfdog.png";
import line1 from "./img/body1/line1.png";
import "./App.css";
const menuFontDefaultStyle = {
  fontSize: "14px",
  fontWeight: "500",
};
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <span
      style={{
        color: "#1F2641",
        fontSize: "35px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {days} : {hours} : {minutes} : {seconds}
    </span>
  );
};
const Practice = () => {
  return (
    <>
      <div className="header-div">
        <Container>
          <Stack
            sx={{ minHeight: "80px" }}
            justifyContent="center"
            alignItems="center"
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 0, sm: 0, md: 3, lg: 4 }}
          >
            <Link href="#" underline="none">
              <img src={doglogo} alt="logo" />
            </Link>
            <Link
              className="header-logotext"
              href="#"
              underline="none"
              color="white"
            >
              doge army <br />
              token
            </Link>
            <Link
              sx={{
                fontSize: "14px",
                fontWeight: "900",
              }}
              href="#"
              underline="none"
              color="white"
            >
              tokenomics
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              roadmap
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              distribution
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              presale
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              giveaway
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              team
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              faq
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              <img src={twitterlogo} alt="twitter icon" />
            </Link>
            <Link
              sx={menuFontDefaultStyle}
              href="#"
              underline="none"
              color="white"
            >
              <img src={telegramlogo} alt="telegram icon" />
            </Link>
            <Link
              sx={{
                width: "125px",
                height: "30px",
                backgroundColor: "#FBB829",
                borderRadius: "15px",
                textAlign: "center",
                padding: "3px 1px 0 1px",
                "&:hover": {
                  color: "#FBB829",
                  backgroundColor: "#5e3500",
                },
              }}
              href="#"
              underline="none"
              color="white"
            >
              Connect
            </Link>
          </Stack>
        </Container>
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
          <Container
            sx={{
              paddingTop: "119px",
            }}
          >
            <Typography
              variant="h4"
              sx={{ marginBottom: "20px", fontWeight: "900" }}
            >
              doge army token
            </Typography>
            <Typography variant="h6">comming soon</Typography>
            <Typography variant="body2" className="body-paragraph-font">
              A unique community token for doge fans We are built by doge fans,
              for doge fans, and our goal is to create a community where every
              doge fan can come together. We will continuously reward our
              community through weekly giveaways events and redistributions. Our
              mission is: Rewarding Holders, Helping Dogs and Killing Zeros!
            </Typography>
            <Grid container justifyContent="space-between">
              <Grid item xs={11} md={5}>
                <Typography
                  sx={{
                    margin: "30px 0 0 10px",
                  }}
                  variant="h6"
                >
                  join our community
                </Typography>

                <Button
                  sx={{
                    width: "135px",
                    height: "30px",
                    backgroundColor: "#FBB829",
                    borderRadius: "15px",
                    textAlign: "center",
                    padding: "5px 2px 0 2px",
                    "&:hover": {
                      color: "#FBB829",
                      backgroundColor: "#5e3500",
                    },
                    margin: "10px",
                  }}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  twitter
                </Button>

                <Button
                  sx={{
                    width: "135px",
                    height: "30px",
                    backgroundColor: "#FBB829",
                    borderRadius: "15px",
                    textAlign: "center",
                    padding: "5px 2px 0 2px",
                    "&:hover": {
                      color: "#FBB829",
                      backgroundColor: "#5e3500",
                    },
                    margin: "10px",
                  }}
                  href="#"
                  underline="none"
                  color="inherit"
                >
                  telegram
                </Button>
              </Grid>

              <Grid item xs={11} md={5}>
                <Typography
                  sx={{
                    textShadow: "1px 1px 9px #0f121e",
                    textAlign: "center",
                  }}
                  variant="h6"
                >
                  Presale comming soon
                </Typography>
                <Box className="body-box-timer">
                  <Countdown
                    date={Date.now() + 1113600000}
                    renderer={renderer}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ marginTop: "10px" }}
        >
          <Grid
            sx={{
              width: "100%",
              height: "5px",
              backgroundColor: "#FBB829",
              textAlign: "center",
            }}
            item
            xs={12}
            md={4}
          ></Grid>
          <Grid
            sx={{
              width: "100%",
              height: "auto",

              textAlign: "center",
            }}
            item
            xs={12}
            md={4}
          >
            created by doge fans, fans doge fans
          </Grid>
          <Grid
            sx={{
              width: "100%",
              height: "5px",
              backgroundColor: "#FBB829",
              textAlign: "center",
            }}
            item
            xs={12}
            md={4}
          ></Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundImage: `url(${tokenomics})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              md: "40% 8%",
              xs: "38% 3.5%",
              sm: "50% 3%",
              lg: "50% 6%",
            },
            backgroundSize: "89%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              paddingTop: "80px",
              fontWeight: "bold",
              paddingBottom: "120px",
            }}
            variant="h5"
          >
            tokenomics
          </Typography>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "black",
                    margin: "auto",
                  }}
                  width={{ xs: "210px", sm: "300px", md: "300px" }}
                  // fontSize={{ xs: "10px", md: "35px" }}
                >
                  <div style={{ paddingTop: "60px" }}></div>
                  <img src={first} alt="first" />
                  <h4>2% redistribtution</h4>
                  <p>
                    2% of every transaction will be redistributed among our
                    holders.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "black",
                    margin: "auto",
                  }}
                  width={{ xs: "210px", sm: "300px", md: "300px" }}
                  // fontSize={{ xs: "10px", md: "35px" }}
                >
                  <div style={{ paddingTop: "60px" }}></div>
                  <img src={second} alt="second" />
                  <h4>2% Liquidity Pool</h4>
                  <p>
                    Our liquidity pool will continuously grow with 2% of each
                    transaction.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "black",
                    margin: "auto",
                  }}
                  width={{ xs: "210px", sm: "300px", md: "300px" }}
                  // fontSize={{ xs: "10px", md: "35px" }}
                >
                  <div style={{ paddingTop: "60px" }}></div>
                  <img src={third} alt="third" />
                  <h4>2% Giveaways</h4>
                  <p>
                    Every week 2% of all transactions will be distributed to
                    winners of the weekly giveaway.
                  </p>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2} mt={3}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "black",
                    margin: "auto",
                  }}
                  width={{ xs: "210px", sm: "300px", md: "300px" }}
                  // fontSize={{ xs: "10px", md: "35px" }}
                >
                  <div style={{ paddingTop: "60px" }}></div>
                  <img src={fourth} alt="fourth" />
                  <h4>1% Burn</h4>
                  <p>
                    1% of all transactions will be burned resulting in an ever
                    increasing price floor.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "black",
                    margin: "auto",
                  }}
                  width={{ xs: "210px", sm: "300px", md: "300px" }}
                  // fontSize={{ xs: "10px", md: "35px" }}
                >
                  <div style={{ paddingTop: "60px" }}></div>
                  <img src={fifth} alt="fifth" />
                  <h4>1% Doge Army Foundation</h4>
                  <p>
                    We will use 1% of the transactions to donate to charities
                    chosen by our community.
                  </p>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    height: "350px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    color: "black",
                    margin: "auto",
                  }}
                  width={{ xs: "210px", sm: "300px", md: "300px" }}
                  // fontSize={{ xs: "10px", md: "35px" }}
                >
                  <div style={{ paddingTop: "60px" }}></div>
                  <img src={sixth} alt="sixth" />
                  <h4>1% Marketing</h4>
                  <p>
                    1% of the transactions will be used to continuously build
                    our brand awareness.
                  </p>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            backgroundImage: `url(${roadmap})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: {
              md: "58% 3%",
              xs: "58% 3%",
              sm: "58% 3%",
              lg: "58% 2%",
            },

            backgroundSize: "90%",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              paddingTop: "80px",
              fontWeight: "bold",
              paddingBottom: "120px",
            }}
            variant="h5"
          >
            roadmaps
          </Typography>
          <Container>
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: "50px",

                paddingBottom: "120px",
              }}
              variant="body2"
            >
              We are working as hard as we can to make DGAT the best and most
              unique community token and build the biggest doge fans community,
              welcoming fans of all doge meme coins. You can read here how we
              are lanning to achieve that goal.
            </Typography>

            <Box
              sx={{
                width: "100%",
                height: "100px",
                backgroundImage: `url(${year})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: {
                  md: "4% 99%",
                  xs: "50% 99%",
                  sm: "50% 99%",
                },
                backgroundSize: { sm: "25%", md: "15%", xs: "34%" },
              }}
            ></Box>
            <Stack direction={{ xs: "column", md: "row" }}>
              <Box textAlign="center" pt={18}>
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={6} sm={6} md={12}>
                    <img src={circle} alt="circle" />
                  </Grid>
                  <Grid item xs={6} sm={6} md={12}>
                    <h4>mar - april</h4>
                    <p style={{ color: "#FBB829" }}>|</p>
                    <p>idea is born</p>
                    <p>tokenomics creation</p>
                    <p>smart contracts</p>
                  </Grid>
                </Grid>
              </Box>
              <Box textAlign="center" pt={18}>
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={6} sm={6} md={12}>
                    <h4>mar - april</h4>
                    <p style={{ color: "#FBB829" }}>|</p>
                    <p>idea is born</p>
                    <p>tokenomics creation</p>
                    <p>smart contracts</p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={12}>
                    <img src={circle} alt="circle" />
                  </Grid>
                </Grid>
              </Box>
              <Box textAlign="center" pt={18}>
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={6} sm={6} md={12}>
                    <img src={circle} alt="circle" />
                  </Grid>
                  <Grid item xs={6} sm={6} md={12}>
                    <h4>mar - april</h4>
                    <p style={{ color: "#FBB829" }}>|</p>
                    <p>idea is born</p>
                    <p>tokenomics creation</p>
                    <p>smart contracts</p>
                  </Grid>
                </Grid>
              </Box>
              <Box textAlign="center" pt={18}>
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={6} sm={6} md={12}>
                    <h4>mar - april</h4>
                    <p style={{ color: "#FBB829" }}>|</p>
                    <p>idea is born</p>
                    <p>tokenomics creation</p>
                    <p>smart contracts</p>
                  </Grid>
                  <Grid item xs={6} sm={6} md={12}>
                    <img src={circle} alt="circle" />
                  </Grid>
                </Grid>
              </Box>
              <Box textAlign="center" pt={18}>
                <Grid
                  container
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item xs={6} sm={6} md={12}>
                    <img src={circle} alt="circle" />
                  </Grid>
                  <Grid item xs={6} sm={6} md={12}>
                    <h4>mar - april</h4>
                    <p style={{ color: "#FBB829" }}>|</p>
                    <p>idea is born</p>
                    <p>tokenomics creation</p>
                    <p>smart contracts</p>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
            <Box
              sx={{
                marginTop: "130px",
              }}
              textAlign="right"
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  backgroundImage: `url(${year2022})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: {
                    md: "77% -1%",
                    xs: "55% 6%",
                    sm: "71% 4%",
                    lg: "80% 0%",
                  },
                  backgroundSize: {
                    sm: "18%",
                    md: "15%",
                    xs: "19%",
                    lg: "12%",
                  },
                }}
              >
                <h4>jan - feb</h4>
                <h3>comming soon</h3>
                <Box
                  sx={{
                    position: "absolute",
                    right: "0",
                    width: "40%",
                    height: "18px",
                    backgroundColor: "#FBB829",
                    borderRadius: "12px",
                    backgroundPosition: {
                      md: "78% 7%",
                      xs: "52% 2%",
                      sm: "66% 2%",
                    },
                    backgroundSize: { sm: "13%", md: "15%", xs: "13%" },
                  }}
                ></Box>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                backgroundImage: `url(${tokendistribution})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: {
                  md: "58% 37%",
                  xs: "58% 40%",
                  sm: "58% 37%",
                },

                backgroundSize: "100%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  paddingTop: "80px",
                  fontWeight: "bold",
                  paddingBottom: "120px",
                }}
                variant="h6"
              >
                token distribution
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  textAlign: "center",
                  paddingTop: "50px",

                  paddingBottom: "120px",
                }}
                variant="body2"
              >
                When we launch, only a maximum 10% of the total supply will be
                on the market. Our token distribution plan is the result of a
                well thought through process. The liquidity will be locked and
                we will do our best to prevent dumping.
              </Typography>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent={{
                  sm: "flex-start",
                  md: "flex-start",
                  xs: "flex-start",
                }}
                alignItems={{
                  xs: "flex-start",
                  sm: "flex-start",
                  md: "flex-end",
                }}
                direction={{
                  xs: "column-reverse",
                  sm: "column-reverse",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                m={2}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#020080",
                    borderRadius: "12px",
                  }}
                ></Grid>
                <Grid item>Ecosystem</Grid>
                <Grid item>General operational costs</Grid>
                <Grid item>
                  <PieChart
                    data={[
                      { title: "One", value: 10, color: "#003F5C" },
                      { title: "Two", value: 5, color: "#FFA600" },
                      { title: "Three", value: 20, color: "#FF7C43" },
                      { title: "One", value: 25, color: "#F95D6A" },
                      { title: "Two", value: 10, color: "#D45087" },
                      { title: "Three", value: 5, color: "#D45087" },
                      { title: "Two", value: 10, color: "#A05195" },
                      { title: "Three", value: 10, color: "#A05195" },
                    ]}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#2F4B7C",
                    borderRadius: "12px",
                  }}
                ></Grid>
                <Grid item>Reserve</Grid>
                <Grid item>Emergency fund for unexpected exenses</Grid>
              </Grid>

              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#665191",
                    borderRadius: "12px",
                    marginTop: "20px",
                  }}
                ></Grid>
                <Grid item>adviser</Grid>
                <Grid item>Compensation for advisors and consultants </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#A05195",
                    borderRadius: "12px",
                    marginTop: "30px",
                  }}
                ></Grid>
                <Grid item>events</Grid>
                <Grid item>
                  Organizing live exclusive events for our community
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#D45087",
                    borderRadius: "12px",
                    marginTop: "30px",
                  }}
                ></Grid>
                <Grid item>burn</Grid>
                <Grid item>Biweekly burns of 2.5% for 25% in total</Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#F95D6A",
                    borderRadius: "12px",
                    marginTop: "30px",
                  }}
                ></Grid>
                <Grid item>liquidity</Grid>
                <Grid item>
                  Reserve liquidity for strenghtening pool and creating new
                  pools
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#F95D6A",
                    borderRadius: "12px",
                    marginTop: "30px",
                  }}
                ></Grid>
                <Grid item>marketing</Grid>
                <Grid item>
                  Creating brand awareness and continuing to expand our
                  community
                </Grid>
              </Grid>
              <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
                justifyContent="flex-start"
                alignItems="center"
                direction={{
                  xs: "row",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                }}
                mt={3}
              >
                <Grid
                  item
                  sx={{
                    width: "90px",
                    height: "20px",
                    backgroundColor: "#FFA600",
                    borderRadius: "12px",
                    marginTop: "30px",
                  }}
                ></Grid>
                <Grid item>team</Grid>
                <Grid item>Compensation for the team</Grid>
              </Grid>
            </Box>
            <Box
              mt={8}
              sx={{
                width: "100%",
                height: "auto",
                backgroundImage: `url(${presale})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: {
                  md: "50% 34%",
                  xs: "50% 38%",
                  sm: "50% 36%",
                  lg: "50% 32%",
                },

                backgroundSize: "90%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  paddingTop: "80px",
                  fontWeight: "bold",
                  paddingBottom: "120px",
                }}
                variant="h5"
              >
                presale
              </Typography>
            </Box>

            <Grid
              container
              spacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
              justifyContent={{ sm: "center" }}
              direction={{
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
                lg: "row",
              }}
            >
              <Grid item xs={12} sm={12} md={6} lg={6}>
                <p>
                  The presale of Doge Army Token will start very soon. The
                  presale will last for 2 weeks. There will be no whitelist, so
                  first come first served. Be on time and don't miss this
                  opportunity to moon.
                </p>
                <h4>Contact Address</h4>
                <Box
                  sx={{
                    width: "100%",
                    maxHeight: "50px",
                    backgroundColor: "#FBB829",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Id tortor sit a ac viverra lacus interdum purus
                </Box>
                <Box
                  sx={{
                    maxWidth: "510px",
                    maxHeight: "50px",
                    backgroundColor: "#FBB829",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                ></Box>
                <Box>
                  <Grid
                    container
                    mt={3}
                    spacing={1}
                    justifyContent="space-between"
                    direction="row"
                  >
                    <Grid
                      item
                      sx={{
                        width: "5px",
                        maxHeight: "50px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: "2px",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      hello
                    </Grid>
                    <Grid
                      item
                      sx={{
                        width: "5px",
                        maxHeight: "50px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      hello
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    mt={3}
                    spacing={1}
                    justifyContent="space-between"
                    direction="row"
                  >
                    <Grid
                      item
                      sx={{
                        width: "5px",
                        maxHeight: "50px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: "2px",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      hello
                    </Grid>
                    <Grid
                      item
                      sx={{
                        width: "5px",
                        maxHeight: "50px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      hello
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    mt={3}
                    spacing={1}
                    justifyContent="space-between"
                    direction="row"
                  >
                    <Grid
                      item
                      sx={{
                        width: "5px",
                        maxHeight: "50px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: "2px",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      hello
                    </Grid>
                    <Grid
                      item
                      sx={{
                        width: "5px",
                        maxHeight: "50px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      hello
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                  sx={{
                    width: "100%",
                    height: "290px",
                    backgroundColor: "#ffead1",
                    borderRadius: "12px",
                    textAlign: "center",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ margin: "auto", display: "block" }}
                    src={playbtn}
                    alt="playbtn"
                  />
                </Box>
                <Box>
                  <Grid
                    container
                    mt={3}
                    spacing={1}
                    justifyContent="space-around"
                    direction="row"
                  >
                    <Grid
                      item
                      sx={{
                        width: "181px",
                        height: "96px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                        margin: "2px",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      <img src={pdfdog} alt="dog pdf" />
                      <p style={{ fontSize: "10px" }}>document</p>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        width: "181px",
                        height: "96px",
                        backgroundColor: "#FBB829",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                      xs={12}
                      sm={5}
                      md={5}
                      lg={5}
                      xl={5}
                    >
                      <img src={pdfdog} alt="dog pdf" />
                      <p style={{ fontSize: "10px" }}>document</p>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Box mt={5} pb={5}>
              <Grid container spacing={2} justifyContent="space-around">
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <h1>giveaway</h1>
                  <Grid container item justifyContent="space-between">
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <p style={{ fontSize: "13px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mus eget sed aliquet rutrum, there we go
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <Box
                        sx={{
                          width: "196px",
                          height: "136px",
                          backgroundColor: "#C4C4C4",
                          borderRadius: "12px",
                        }}
                      ></Box>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    mt={4}
                    item
                    justifyContent="space-between"
                    spacing={2}
                  >
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <Box
                        sx={{
                          width: "135px",
                          height: "40px",
                          backgroundColor: "#FBB829",
                          borderRadius: "12px",
                        }}
                      >
                        <Stack direction="row" p={0.7} spacing={1}>
                          <p>follow</p>
                          <img src={twitterlogo} alt="twitter" />
                        </Stack>
                      </Box>
                      <Box
                        mt={3}
                        sx={{
                          width: "135px",
                          height: "40px",
                          backgroundColor: "#FBB829",
                          borderRadius: "12px",
                        }}
                      >
                        <Stack direction="row" p={0.7} spacing={1}>
                          <p>follow</p>
                          <img src={telegramlogo} alt="twitter" />
                        </Stack>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                      <p style={{ fontSize: "13px", width: "150px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mus eget sed aliquet rutrum, there we go
                      </p>
                    </Grid>
                  </Grid>
                </Grid>

                {/* <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                  <img src={line1} alt="vertical line" />
                </Grid> */}
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                  <h1>charity</h1>
                  <Grid container item justifyContent="space-between">
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <p style={{ fontSize: "13px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mus eget sed aliquet rutrum let support us
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                      <Box
                        sx={{
                          width: "196px",
                          height: "136px",
                          backgroundColor: "#C4C4C4",
                          borderRadius: "12px",
                        }}
                      ></Box>
                    </Grid>
                  </Grid>
                  <Box
                    mt={4}
                    sx={{
                      width: "100%",
                      height: "150px",
                      backgroundColor: "#ffead1",
                      borderRadius: "12px",
                      textAlign: "center",
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{ margin: "auto", display: "block" }}
                      src={playbtn}
                      alt="playbtn"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default Practice;
