import React, { useRef, useState } from "react";
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
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { addBlogsInDb, uploadImage } from "../../Firebase";

const Editor = (props) => {
  const blogDetails = props.blogDetails;
  const fileInputRef = useRef();
  const [values, setValues] = useState({
    thumbnail:
      "https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png",
    title: "",
    name: "",
    content: "",
    refBlog: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const [imageUploadStarted, setImageUploadStarted] = useState(false);

  const [imageUploadProgress, setImageUploadProgress] = useState(0);
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

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageUploadStarted(true);
    uploadImage(
      file,
      (progress) => {
        console.log(file);
        setImageUploadProgress(progress);
      },
      (url) => {
        console.log(url);
        setImageUploadStarted(false);
        setImageUploadProgress(0);
        setValues((prev) => ({ ...prev, thumbnail: url }));
      },
      (error) => {
        console.log("Error->", errorMessage);
        setImageUploadStarted(false);
        setErrorMessage(error);
      }
    );
  };

  return (
    <>
      <Header />
      <div className={styles.masterCont}>
        <RoughNotation type="underline" show={true} animationDelay={1000}>
          <div className={styles.heading}>Create a Blog</div>
        </RoughNotation>
        <div className={styles.container}>
          <div className={styles.containerContent}>
            <div className={styles.imgInput}>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <FormLabel>Thumbnail</FormLabel>
              <img
                src={values.thumbnail}
                onClick={() => fileInputRef.current.click()}
                style={{ cursor: "pointer" }}
              />

              {imageUploadStarted && (
                <div className={styles.progress}>
                  <p>
                    <span>{imageUploadProgress.toFixed(2)}%</span>{" "}
                    <span>Uploaded...</span>
                  </p>
                </div>
              )}
            </div>
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
                  width="60vw"
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
                  width="60vw"
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
                width="60vw"
                isRequired
                type="text"
                placeholder="Enter Content for blog."
              />
            </div>
            <div className={styles.errorMsg}>
              <p style={{ color: "red" }}>{errorMessage}</p>
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
