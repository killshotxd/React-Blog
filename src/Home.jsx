import React from "react";
import styles from "./Home.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import Body from "./components/Body/Body";

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftPart}>
          <ul>Blog</ul>
          <ul>New Post</ul>
          <ul>List</ul>
        </div>
        <div className={styles.rightPart}>
          <Button colorScheme="teal" variant="solid">
            <a href="https://github.com/killshotxd">Github</a>
          </Button>
        </div>
      </div>
      <Body />
    </>
  );
};

export default Home;
