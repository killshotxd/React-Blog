import React from "react";
import styles from "./Body.module.css";
import { Image, Box, Badge, SimpleGrid } from "@chakra-ui/react";
const Body = () => {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <div className={styles.container}>
        {/* Card Start */}
        <div className={styles.card}>
          <div className={styles.cardImg}>
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

        {/* Card Start */}
        <div className={styles.card}>
          <div className={styles.cardImg}>
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
