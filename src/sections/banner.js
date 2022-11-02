/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import ShapeLeft from "assets/shape-left.svg";
import ShapeRight from "assets/shape-right.png";
import BrushStroke from "assets/stroke-yellow.svg";
import ImageSwapper from 'components/imageSwapper';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            You make a {/* <span sx={styles.banner.paintBrush}>  */}
            positive impact
            {/* </span> */}, let your website make one too
          </Heading>
          <Text as="p" variant="heroSecondary">
            Helping sustainable brands creating a bigger impact by developing
            high quality web-applications.
          </Text>
          <a href="#contact">
            <Button variant="primary">Contact us</Button>
          </a>
          <Button variant="secondary" sx={styles.banner.scheduleLink}>Schedule a call</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          {/* <Image src={BannerImg} alt="banner" /> */}
          {/* <Image src={BannerImgCoffee} alt="banner" /> */}
          <ImageSwapper />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "75%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "-10px",
      right: 0,
      height: "100%",
      width: "85%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: ["100%", "90%", "60vw", null, "57%", "80%", "68%", "60vw"],
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
    paintBrush: {
      backgroundImage: `url(${BrushStroke})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom",
      backgroundSize: "contain",
    },
    scheduleLink: {
      marginLeft: '20px',
      textDecoration: 'none',
    }
  },
};
