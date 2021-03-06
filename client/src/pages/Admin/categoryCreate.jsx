import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CategoryCreate = (props) => {
  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
      <TextInput source="id" />
        <TextInput source="title" />
        <TextInput source="imgSrc" /> 
      </SimpleForm>
    </Create>
  );
};

export default CategoryCreate;