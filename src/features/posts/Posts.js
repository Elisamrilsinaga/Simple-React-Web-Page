import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, data } from "./reducer";
import {
  Grid,
  Card,
  CardContent,
  Container,
  Button,
  Skeleton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const posts = useSelector(data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = () => {
    dispatch(getPosts());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/posts/${id}`);
  };

  console.log(posts.status);

  return (
    <Container>
      <Grid container spacing={3}>
        {posts?.data?.map((row, i) => (
          <Grid key={i} item xs={4}>
            <Card style={{ height: "120px" }}>
              <CardContent>{row?.title}</CardContent>
              <Button onClick={() => handleClick(row?.id)}>Detail</Button>
            </Card>
          </Grid>
        ))}
        {posts.status === "loading" && <Typography>Loading</Typography>}
      </Grid>
    </Container>
  );
};

export default Posts;
