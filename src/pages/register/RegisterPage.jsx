import React from "react";
import Form from "../../components/collection/form/Form";
// import { Form } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div>
      <Form register={true} userVetification={() => "true"} />
    </div>
  );
}
