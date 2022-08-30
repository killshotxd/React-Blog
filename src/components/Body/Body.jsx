import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { getAllBlogs } from "../../Firebase";
import { Image, Box, Badge, SimpleGrid, Button } from "@chakra-ui/react";
import { deleteBlog } from "../../Firebase";
const Body = () => {
  const [blogs, setBlogs] = useState([]);

  // -----------FetchBlogs-----------------
  const fetchAllProjects = async () => {
    const result = await getAllBlogs();

    if (!result) {
      return;
    }
    const tempBlogs = [];

    result.forEach((doc) => tempBlogs.push({ ...doc.data(), bid: doc.id }));

    setBlogs(tempBlogs);
    console.log(blogs);
  };
  // ---------------------------------------------

  const handleDeletion = async (bid) => {
    await deleteBlog(bid);
    fetchAllProjects();
  };

  // ---------------------------------------------
  useEffect(() => {
    fetchAllProjects();
  }, []);

  const handleProjectCardClick = (project) => {
    setShowProjectModal(true);
    setProjectDetails(project);
  };

  return (
    <>
      <div className={styles.container}>
        {blogs.map((item, index) => (
          <div className={styles.card} key={item.name + index}>
            <div className={styles.cardImg}>
              <div className={styles.deleteBtn}>
                <Button onClick={() => handleDeletion(item.bid)}>Delete</Button>
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
              <Badge colorScheme="purple">{item.name}</Badge>
            </div>
            <strong>{item.title}</strong>
            <div className={styles.cardContent}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Body;
