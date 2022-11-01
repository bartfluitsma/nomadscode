/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx } from "theme-ui";
import { Container, Flex, Box, Button, Input, Text, Heading } from "theme-ui";
import { NetlifyForm, Honeypot } from "react-netlify-forms";

export default function Contact() {
  
  return (
    <section>
      <Container>
        <Box sx={styles.contentBox}>
          <Box sx={styles.contentBoxInner}>
            <Heading as="h2" sx={styles.title}>
              Contact Us
            </Heading>
            <Text as="p" sx={styles.description}>
              Please use the form below to contact us or send a message to 
              <a sx={styles.link} href="mailto:hello@nomadscode.digital"> hello@nomadscode.digital</a>
            </Text>
            <NetlifyForm name="Contact" action="/thanks" honeypotName="bot-field">
    {({ handleChange, success, error }) => (
      <>
        <Honeypot />
        {success && <p>Thanks for contacting us!</p>}
        {error && (
          <p>Sorry, we could not reach our servers. Please try again later.</p>
        )}
        <div sx={styles.inputForm}>
          {/* <label htmlFor="name">Name</label> */}
          <input sx={styles.InputContainer} type="text" name="name" id="name" placeholder='Name' onChange={handleChange} />
        </div>
        <div sx={styles.inputForm}>
          {/* <label htmlFor="name">Name</label> */}
          <input sx={styles.InputContainer} type="email" name="email" id="email" placeholder='Email' required onChange={handleChange} />
        </div>
        <div sx={styles.inputForm}>
          {/* <label htmlFor="message">Message</label> */}
          <textarea sx={styles.InputContainer}
            type="text"
            name="message"
            id="message"
            rows="4"
            onChange={handleChange}
            required
            placeholder='Message'
          />
        </div>
        <div>
          <button sx={styles.buttonForm} type="submit">Send message</button>
        </div>
      </>
    )}
  </NetlifyForm>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  contentBox: {
    backgroundColor: "primary",
    textAlign: "center",
    borderRadius: 10,
    py: ["60px", null, 8],
  },
  contentBoxInner: {
    width: ["100%", null, "540px", "600px"],
    mx: "auto",
    mt: -1,
    px: [3, 5],
  },
  title: {
    fontSize: ["24px", null, "28px", null, null, "32px", null, "36px"],
    color: "white",
    lineHeight: [1.3, null, null, 1.25],
    fontWeight: "700",
    letterSpacing: ["-.5px", null, "-1.5px"],
    mb: [2, 3],
  },
  description: {
    fontSize: ["15px", 2, null, null, null, "17px", null, 3],
    color: "white",
    lineHeight: [1.85, null, null, 2],
    px: [0, null, 5],
  },
  contactForm: {
    mt: [6, null, null, 7],
    backgroundColor: ["transparent", "white"],
    borderRadius: [0, 50],
    overflow: "hidden",
    p: [0, 1],
    flexDirection: ["column", "row"],
    '[type="email"]': {
      border: 0,
      borderRadius: 50,
      fontFamily: "body",
      fontSize: ["14px", null, 2],
      fontWeight: 500,
      color: "heading",
      py: 1,
      px: [4, null, 6],
      backgroundColor: ["white", "transparent"],
      height: ["52px", null, "60px"],
      textAlign: ["center", "left"],
      "&:focus": {
        boxShadow: "0 0 0 0px",
      },
      "::placeholder": {
        color: "primary",
        opacity: 1,
      },
    },
    ". contact__btn": {
      flexShrink: 0,
      ml: [0, 2],
      backgroundColor: ["text", "primary"],
      mt: [2, 0],
      py: ["15px"],
    },
  },
  InputContainer: {
    borderRadius: '10px',
    minHeight: '40px',
    padding: '15px 20px',
    border: 'none',
    minWidth: '100%',
    margin: '10px 0px',
    fontFamily: 'Lato'
  },
  inputForm: {
    display: 'grid',
    textAlign: 'left',
    fontFamily: 'Lato'
  },
  link: {
    color: 'white'
  },
  buttonForm: {
    backgroundColor: 'yellow',
    color: 'white',
    padding: '17px 30px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '600',
  },
};
