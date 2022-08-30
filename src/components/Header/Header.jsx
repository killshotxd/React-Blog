import React from "react";
import styles from "./Header.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftPart}>
          <ul
            onClick={() => navigate("/")}
            style={{ cursor: "pointer", textDecorationLine: "underline" }}
          >
            Blog
          </ul>
          <ul
            onClick={() => navigate("/edit")}
            style={{ cursor: "pointer", textDecorationLine: "underline" }}
          >
            New Post
          </ul>
          <ul>List</ul>
        </div>
        <div className={styles.rightPart}>
          <Button colorScheme="teal" variant="solid">
            <a href="https://github.com/killshotxd">Github</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
