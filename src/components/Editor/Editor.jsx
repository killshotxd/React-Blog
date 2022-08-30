import React, { useState } from "react";
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
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./Editor.module.css";

import { addBlogsInDb } from "../../Firebase";

const Editor = () => {
  const [values, setValues] = useState({
    title: "",
    name: "",
    content: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const [editButtonDisabled, setEditButtonDisabled] = useState(false);

  const handleSubmission = async (event, property) => {
    setEditButtonDisabled(true);
    await addBlogsInDb({ ...values });
    toast({
      title: "Blog created.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setEditButtonDisabled(false);
    navigate("/");
  };

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
                  value={values.title}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      title: event.target.value,
                    }))
                  }
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
                  value={values.name}
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      name: event.target.value,
                    }))
                  }
                  isRequired
                  type="text"
                  placeholder="Enter your Name"
                  width="40vw"
                />
              </FormControl>
            </div>

            <div className={styles.title}>
              <FormLabel>Content</FormLabel>
              <Textarea
                value={values.content}
                onChange={(event) =>
                  setValues((prev) => ({
                    ...prev,
                    content: event.target.value,
                  }))
                }
                width="40vw"
                isRequired
                type="text"
                placeholder="Enter Content for blog."
              />
            </div>

            <Button
              disabled={editButtonDisabled}
              onClick={handleSubmission}
              colorScheme="teal"
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editor;
