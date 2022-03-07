import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="price" />
        <TextField source="desc" />
        <TextField source="weight" />
        <TextField source="spicinessLevel" />
        <TextField source="imgSrc" />
        <TextField source="category" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;
