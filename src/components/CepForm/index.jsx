import React from "react";
import { Container, Title } from "./styled";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import API from "../../services/axios";

const CepForm = () => {
  const [locate, setLocate] = useState("");
  const [cep, setCep] = useState("");
  useEffect(() => {
    API.get(`/${cep}/json/`)
      .then(async (response) => {
        setLocate(response.data);
      })
      .catch(async (error) => {
        console.log(error);
      });
  }, [cep]);
  const handleCep = (e) => {
    setCep(e.target.value);
  };
  const handleKeyPress = (e) => {
    e.key == "Enter" && setCep(e.target.value);
  };
  return (
    <Container>
      <Title>CEP Search</Title>
      <TextField
        style={{ margin: "10px" }}
        pattern="[0-9]*"
        size="small"
        onBlur={handleCep}
        onKeyDown={handleKeyPress}
        label="CEP"
        placeholder="1100100"
      />
      {locate !== "" && (
        <>
          <TextField
            style={{ margin: "10px" }}
            value={locate.localidade}
            size="small"
            label="Cidade"
            placeholder="Piraporinha do Oeste"
          />
          <TextField
            style={{ margin: "10px" }}
            value={locate.uf}
            size="small"
            label="Estado"
            placeholder="RJ"
          />
          <Stack direction="row-reverse">
            <Button
              style={{ margin: "5px" }}
              variant="contained"
              color="success"
              size="large"
            >
              Continuar
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
};

export default CepForm;
