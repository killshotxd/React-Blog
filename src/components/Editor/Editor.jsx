import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Header from "../Header/Header";
import styles from "./Editor.module.css";
const Editor = () => {
  return (
    <>
      <Header />
      <div className={styles.masterCont}>
        <div className={styles.heading}>Create a Blog</div>
        <div className={styles.container}>
          <div className={styles.containerContent}>
            <div className={styles.title}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter Title for your Blog"
                  width="40vw"
                />
              </FormControl>
            </div>
            <div className={styles.title}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  isRequired
                  type="text"
                  placeholder="Enter Name for your Blog"
                  width="40vw"
                />
              </FormControl>
            </div>

            <div className={styles.title}>
              <FormLabel>Content</FormLabel>
              <Textarea
                width="40vw"
                isRequired
                type="text"
                placeholder="Enter Content for blog."
              />
            </div>

            <Button colorScheme="teal">Create</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
