import React, { useEffect, useState } from "react";
import styles from "./Body.module.css";
import { getAllBlogs } from "../../Firebase";
import { Image, Box, Badge, SimpleGrid, Button } from "@chakra-ui/react";
import { deleteBlog } from "../../Firebase";
import { useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Route, useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Loader from "../Loader/Loader";
import PostBody from "../PostBody/PostBody";

// -----------Imports End-------------------

const Body = () => {
  const [blogs, setBlogs] = useState([]);

  const [blogsLoaded, setBlogsLoaded] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);
  const navigate = useNavigate();
  // ---------Read More------------------

  // -----------FetchBlogs-----------------
  const fetchAllProjects = async () => {
    const result = await getAllBlogs();
    setBlogsLoaded(true);
    if (!result) {
      return;
    }
    const tempBlogs = [];

    result.forEach((doc) => tempBlogs.push({ ...doc.data(), bid: doc.id }));

    setBlogs(tempBlogs);
    console.log(blogs);
  };
  // ---------------------------------------------
  const toast = useToast();
  const handleDeletion = async (bid) => {
    await deleteBlog(bid);
    toast({
      title: "Deletion Completed.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
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
      <h1 className={styles.heading}>Blogs</h1>
      <div className={styles.container}>
        {blogs && blogsLoaded ? (
          blogs.length > 0 ? (
            blogs.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className={styles.card}
                key={item.name + index}
              >
                <div className={styles.cardImg}>
                  <Box
                    boxSize="xs"
                    height="auto"
                    objectFit="cover"
                    display="flex"
                    justifyContent="center"
                  >
                    <Image src={item.thumbnail} alt="Thumbnail" />
                  </Box>
                </div>
                <div className={styles.cardBadge}>
                  <Badge colorScheme="purple">{item.name}</Badge>
                </div>
                <strong>{item.title}</strong>
                <div className={styles.cardContent}>
                  <p>
                    <Button
                      onClick={() => (
                        <Route path="/post" element={<PostBody />} />
                      )}
                      colorScheme="teal"
                    >
                      Read Here
                    </Button>
                  </p>

                  <div className={styles.deleteBtn}>
                    <Button
                      colorScheme="teal"
                      onClick={() => handleDeletion(item.bid)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className={styles.alert}>
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>No Blogs Found!</AlertTitle>
                <AlertDescription>
                  Create New One from New Post.
                </AlertDescription>
              </Alert>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Body;
