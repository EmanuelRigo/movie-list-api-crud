"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";
import { PUT } from "@/app/api/movie/[id]/route";

const uri = "http://localhost:3000/api/movie";

const getDataById = async (id) => {
  try {
    const responose = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!responose.ok) {
      throw new Error("failed to update.");
    }
    return responose.json();
  } catch (error) {
    console.log("error:", error);
  }
};

const Edit = async ({ params }) => {
  const router = useRouter();
  const id = params.id;
  const { data } = await getDataById(id);
  console.log("documento: " + JSON.stringify(data));

  const onSubmitEdit = async (formData) => {
    const { name, age } = formData;
    try {
      const responose = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ nameL: name, age: age }),
      });
      if (!responose.ok) {
        throw new Error("Failed to update.");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Form onSubmitForm={onSubmitEdit} formValues={data}></Form>
    </div>
  );
};

export default Edit;
