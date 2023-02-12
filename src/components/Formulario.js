import React from "react";
import { useState } from "react";
import styled from "styled-components";
import helpHttp from "../helpers/helpHttp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Title from "react-vanilla-tilt";

const colores = {
  borde: "#0075FF",
  error: "#FC5405",
  exito: "#1ed12d",
};

const Principal = styled.section`
  position: absolute;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const Form = styled.form`
  display: flex;
  z-index: 20;

  flex-direction: column;
  justify-content: center;
`;
const Input = styled.input`
  width: 250px;
  height: 50px;
  outline: none;
  padding: 1rem calc(0.5rem + 1vw);
  color: #fff;
  border-radius: 10px;
  border: none;
  font-family: "Raleway";
  font-size: 15px;

  margin-top: 10px;
  margin-bottom: 1rem;
  background: rgb(126, 126, 126);
  background: #202020;
  box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
  &::placeholder {
    color: #fff;
    font-family: "raleway", "sans-serif";
    font-size: 15px;
  }
  &:active,
  &:focus {
    color: #7dffaf;
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  margin-bottom: 15px;
  padding: 1rem calc(0.5rem + 1vw);
  font-family: "Raleway";
  font-size: 15px;
  background: rgb(126, 126, 126);
  background: #202020;

  color: #fff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
  &::placeholder {
    color: #fff;
    opacity: 0.6;
    font-family: "raleway", "sans-serif";
  }
  &:active,
  &:focus {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;
const Submit = styled.input`
  width: min-content;
  margin-left: 10px;
  padding: 14px 25px;
  border: 0;
  cursor: pointer;
  border-radius: 30px;
  background-color: #161616;
  box-shadow: 0px 0px 48px 0px rgb(218, 218, 218);
  color: white;
  margin-top: 10px;
  font-family: "Kaushan Script";
  font-size: 15px;
`;
const Titulo = styled.h1`
  font-family: "Kaushan Script";
  top: 1rem;
  font-size: 50px;
  display: inline-block;
  position: relative;
  font-weight: bold;
  margin-bottom: 5px;

  color: #fff;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
  }
`;
const MensajeExito = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: "raleway", "sans-serif";
  color: ${colores.exito};
`;
const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background-color: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;
const initialForm = {
  name: "",
  email: "",
  comments: "",
};

const Formulario = () => {
  const [form, setForm] = useState(initialForm);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    helpHttp("https://formsubmit.co/ajax/ pizarropabloandres@hotmail.com", {
      body: form,
      headers: {
        "Content-Type": "application/json",
        Accept: "Aplication/json",
      },
    })
      .post()
      .then((res) => {
        setForm(initialForm);
        setResponse(true);
      });
  };
  return (
    <Principal>
      <Title
        style={{ background: "transparent" }}
        className="js-tilt-glare"
        options={{
          scale: 2,
          max: 30,
          speed: 300,
          glare: true,
          " max-glare ": 0.5,
        }}
      >
        <Form action="" className="form" onSubmit={handleSubmit}>
          <Titulo className="titulo">Contactame</Titulo>
          <Input
            className="input"
            type="text"
            name="name"
            id=""
            placeholder="Escribe tu Nombre"
            title="El nombre solo acepta letras y espacios en blanco"
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
            onChange={handleChange}
            value={form.name}
            required
          />
          <Input
            className="input"
            type="email"
            name="email"
            id=""
            placeholder="Email"
            title="Email incorrecto"
            pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
            onChange={handleChange}
            value={form.email}
            required
          />
          <TextArea
            className="input"
            name="comments"
            id=""
            cols="30"
            rows="10"
            placeholder="Mensaje"
            title="Tu comentario no debe exceder los 255 caracteres"
            data-pattern=" ^.{1,255}$"
            onChange={handleChange}
            value={form.comments}
            required
          ></TextArea>
          <Submit className="input" type="submit" value="Enviar" />
        </Form>
        {response === false ? (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        ) : response === true ? (
          <MensajeExito>
            <p>
              <FontAwesomeIcon icon={faCheck} />
              Formulario enviado exitosamente
            </p>
          </MensajeExito>
        ) : null}
      </Title>
    </Principal>
  );
};

export default Formulario;
