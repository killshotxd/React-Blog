import React from "react";
import styles from "./Body.module.css";
import { Image, Box, Badge } from "@chakra-ui/react";
const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <Box boxSize="sm" height="auto">
            <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
          </Box>
        </div>
        <div className={styles.cardBadge}>
          <Badge colorScheme="purple">Default</Badge>
        </div>
        <div className={styles.cardContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            aperiam ullam reiciendis commodi incidunt, quod voluptatibus facilis
            dicta? Qui hic officia ullam unde recusandae, eveniet fugit
            molestiae dolores dignissimos explicabo, ad id. Pariatur assumenda
            ad veniam vitae illum obcaecati iusto, autem, quo, voluptatem et
            mollitia dolores! Tenetur porro necessitatibus ex.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
