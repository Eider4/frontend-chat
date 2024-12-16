import React from "react";
import Form from "../../components/collection/form/Form";
export default function LoginPage() {
  return (
    <div>
      <Form register={false} userVetification={() => "true"} />
    </div>
  );
}
