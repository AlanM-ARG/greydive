import React from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import greydive from "../firebase-config";
import "./Client.css";

const db = getFirestore(greydive);
const queryString = window.location.search;

const searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");
let docSnap;
let a;
if (queryString != "") {
  const docRef = doc(db, "challenge-greydive-1291f", id);
  docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    a = docSnap.data();
  } else {
    console.log("No such document!");
  }
}



const Client = () => {
  return (
    <>
    <a href="/">
      <img
        className="logo"
        src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"
        alt="greydive"
      />
    </a>
      <div className="d-flex justify-content-center align-items-center">
        <div className="card1">
          <div className="banner">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9311/9311224.png"
              alt="person"
            />
          </div>
          <div className="menu"></div>
          <h2 className="name">{a.full_name}</h2>
          <h6>
            <b className="d-block">Email:</b> {a.email}
          </h6>
          <h6>
            <b className="d-block">Fecha de Nacimiento:</b> {a.birth_date}
          </h6>
          <h6>
            <b className="d-block">Nacionalidad:</b>{" "}
            {a.country_of_origin.charAt(0).toUpperCase() +
              a.country_of_origin.slice(1)}
          </h6>
        </div>
      </div>
    </>
  );
};

export default Client;
