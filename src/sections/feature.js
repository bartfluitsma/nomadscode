/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "components/section-header";
import FeatureCard from "components/feature-card.js";
import Fast from "assets/icons/fast.svg";
import Responsive from "assets/icons/responsive.svg";
import UX from "assets/icons/user-experience.svg";
import Custom from "assets/icons/custom-design.svg";

const data = [
  {
    id: 1,
    imgSrc: Fast,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Fast loading speed is essential for web applications, and we make sure yours will be incredibly fast.",
  }, // Don't let people wait.
  {
    id: 2,
    imgSrc: Responsive,
    altText: "Responsive design",
    title: "Responsive design",
    text: "Desktops, tablets, smartphones.. in all shapes and sizes. We will make sure your web application works on any device!",
  },

  {
    id: 4,
    imgSrc: Custom,
    altText: "Custom design",
    title: "Custom design",
    text: "We translate your unique brand style to your website so that visitors directly recognize your brand.",
  }, //, which helps to build trust.
  {
    id: 3,
    imgSrc: UX,
    altText: "Great user experience",
    title: "Great user experience",
    text: "We will ensure your web application is accessible and easy to use, to keep your visitors happy and engaged.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container>
        <SectionHeader slogan="Features" title="What you can expect" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
