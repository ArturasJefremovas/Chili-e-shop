import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
      <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="price" />
        <TextInput source="desc" />
        <TextInput source="weight" />
        <TextInput source="spicinessLevel" />
        <TextInput source="imgSrc" />
        <TextInput source="category" /> 
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
