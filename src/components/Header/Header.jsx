import React from "react";
import styles from "./Header.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { GitHub } from "react-feather";
const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftPart}>
          <RoughNotation type="box" show={true} animationDelay={1000}>
            <ul
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",

                fontWeight: "bold",
              }}
            >
              Blog
            </ul>
          </RoughNotation>

          <RoughNotation type="box" show={true} animationDelay={1000}>
            <ul
              onClick={() => navigate("/edit")}
              style={{
                cursor: "pointer",

                fontWeight: "bold",
              }}
            >
              New Post
            </ul>
          </RoughNotation>
        </div>
        <div className={styles.rightPart}>
          <Button className={styles.Button} colorScheme="teal" variant="solid">
            <a href="https://github.com/killshotxd">
              Github{" "}
              <span>
                <GitHub />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
