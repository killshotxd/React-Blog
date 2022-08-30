import React from "react";
import styles from "./Body.module.css";
import { Image, Box, Badge, SimpleGrid, Button } from "@chakra-ui/react";
const Body = () => {
  return (
    <>
      <div className={styles.container}>
        {/* Card Start */}
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <div className={styles.deleteBtn}>
              <Button>Delete</Button>
            </div>
            <Box
              boxSize="xs"
              height="auto"
              objectFit="cover"
              display="flex"
              justifyContent="center"
            >
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Box>
          </div>
          <div className={styles.cardBadge}>
            <Badge colorScheme="purple">Default</Badge>
          </div>
          <div className={styles.cardContent}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              aperiam ullam reiciendis commodi incidunt, quod voluptatibus
              facilis dicta? Qui hic officia ullam unde recusandae, eveniet .
            </p>
          </div>
        </div>
        {/* ---------Card End------------- */}
      </div>
    </>
  );
};

export default Body;
