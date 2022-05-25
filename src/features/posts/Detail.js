import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost, data, updatePost } from "./reducer";
import {
  Grid,
  Card,
  CardContent,
  Container,
  Box,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Detail = () => {
  const show = useSelector(data);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    dispatch(getPost(id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (show?.show) {
      setTitle(show.show.title);
    }
  }, [show?.show]);

  const handleSubmit = () => {
    const payload = { id: show?.show?.id, title: show?.show?.title };
    dispatch(updatePost(payload));
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h4">Detail</Typography>
              <Box> {show?.show?.title}</Box>
              <Box> {show?.show?.body}</Box>
              <Button onClick={handleOpen}>Edit</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h4">Edit</Typography>
          <br></br>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
          <Button onClick={handleSubmit}>Submit</Button>
        </Box>
      </Modal>
    </Container>
  );
};

export default Detail;
