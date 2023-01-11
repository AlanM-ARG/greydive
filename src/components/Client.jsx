import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import greydive from "../firebase-config";
import "./Client.css";
import { async } from "@firebase/util";

const db = getFirestore(greydive);



const queryString = window.location.search;
const searchParams = new URLSearchParams(queryString);
const id = searchParams.get("id");





const Client = () => {
  const [client, setClient] = useState({})
  useEffect(()=>{
    const getClient = async()=>{
      try {
        const querySnapshot = await getDoc(doc(db, "challenge-greydive-1291f", id))
        const clientDoc = querySnapshot.data()
        setClient(clientDoc)
      } catch (error) {
        console.error(error);
      }
    }
    getClient()
  }, [client])
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
          <h2 className="name">{client.full_name}</h2>
          <h6>
            <b className="d-block">Email:</b> {client.email}
          </h6>
          <h6>
            <b className="d-block">Fecha de Nacimiento:</b> {client.birth_date}
          </h6>
          <h6>
            <b className="d-block">Nacionalidad: </b>
            {client.country_of_origin}
          </h6>
        </div>
      </div>
    </>
  );
}

export default Client;
