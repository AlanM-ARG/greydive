import React, { useState } from "react";
import json from '../db.json'
import { async } from "@firebase/util";
import {
    getFirestore,
    collection,
    addDoc
  } from "firebase/firestore";
  import greydive from "../firebase-config";
  import Swal from "sweetalert2";
import './Form.css'

const questions = json.items;
const db = getFirestore(greydive);

const Form = () => {
  const formData = {
    full_name: "",
    email: "",
    birth_date: "",
    country_of_origin: "",
  };

  const [client, setClient] = useState(formData);

  const data = (event) => {
    const { name, value } = event.target;
    setClient({ ...client, [name]: value });
  };

  const onSubmitEvent = async (event) => {
    event.preventDefault();
    let id;
    try {
      await addDoc(collection(db, "challenge-greydive-1291f"), {
        ...client,
      }).then((response) => {
        id = response.id;
      });
    } catch (error) {
      console.error(error);
    }
    setClient({ ...formData });
    Swal.fire({
      html: `<a href="/client?id=${id}">Ver Respuestas</a>`,
    });
  };

  return (
    <>
      <img
        className="logo"
        src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"
        alt="greydive"
      />
      <form className="formContainer" onSubmit={onSubmitEvent}>
        <h1><b>Challenge greydive</b></h1>
        {questions.map((question) => (
          <div className="question">
            {question.type === "select" && (
              <>
                <label className="labelText">{question.label}</label>
                <div className="select">
                  <select
                    name={question.name}
                    id={question.name}
                    required={question.required}
                    onChange={data}
                    value={client.country_of_origin}
                  >
                    <option defaultValue disabled></option>
                    {question.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {question.type === "checkbox" && (
              <div className="checkboxContainer">
                <label className="labelText" htmlFor={question.name}>
                  {question.label}
                </label>
                <label>
                  <input
                    className="inputText"
                    name={question.name}
                    type={question.type}
                    id={question.name}
                    required={question.required}
                  />
                  <div className="checkmark"></div>
                </label>
              </div>
            )}
            {question.type === "submit" && (
              <input type={question.type} value={question.label} />
            )}
            {question.type === "text" && (
              <>
                <label className="labelText" htmlFor={question.name}>
                  {question.label}
                </label>
                <input
                  className="inputText"
                  type={question.type}
                  id={question.name}
                  required={question.required}
                  name={question.name}
                  onChange={data}
                  value={client.full_name}
                />
              </>
            )}
            {question.type === "email" && (
              <>
                <label className="labelText" htmlFor={question.name}>
                  {question.label}
                </label>
                <input
                  className="inputText"
                  type={question.type}
                  id={question.name}
                  required={question.required}
                  name={question.name}
                  onChange={data}
                  value={client.email}
                />
              </>
            )}
            {question.type === "date" && (
              <>
                <label className="labelText" htmlFor={question.name}>
                  {question.label}
                </label>
                <input
                  className="inputText"
                  type={question.type}
                  id={question.name}
                  required={question.required}
                  name={question.name}
                  onChange={data}
                  value={client.birth_date}
                />
              </>
            )}
          </div>
        ))}
      </form>
    </>
  );
};

export default Form;
