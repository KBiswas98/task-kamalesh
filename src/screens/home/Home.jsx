import React, { useEffect, useState } from "react";
import HC1Generator from "../../components/HC1/HC1Generator";
import HC3Generator from "../../components/HC3/HC3Generator";
import HC5Generator from "../../components/HC5/HC5Generator";
import HC6Generator from "../../components/HC6/HC6Generator";
import HC9Generator from "../../components/HC9/HC9Generator";
import Navbar from "../../components/Navbar/Navbar";
import { BounceLoader } from "react-spinners";
import styled from "styled-components";

const url = "https://run.mocky.io/v3/04a04703-5557-4c84-a127-8c55335bb3b4";

export default function Home() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        setData(response.card_groups)
        setError('')
      })
      .catch(err => setError('unable to fetch data.'))
  });

  const dataMapping = (design_type, schema, index) => {
    switch (design_type) {
      case "HC1":
        return <HC1Generator key={index} schema={schema} />;
      case "HC3":
        return <HC3Generator key={index} schema={schema} />;
      case "HC5":
        return <HC5Generator key={index} schema={schema} />;
      case "HC6":
        return <HC6Generator key={index} schema={schema} />;
      case "HC9":
        return <HC9Generator key={index} schema={schema} />;
      default:
        return <p>No Design match found.</p>;
    }
  };

  return (
    <Navbar>
      {
        data.length === 0 && <Center><BounceLoader color="#fabe55"/></Center>
      }
      { data.length === 0 && !!error &&
        <Card>
          <IconContainer src="assets/error.png"/>
          <ErrorText>
            {error}
          </ErrorText>
        </Card>
      }
      {
        !error &&data.length > 0  && data.map((row, index) => (dataMapping(row.design_type, row, index)))
      }
    </Navbar>
  );
}

const Card = styled.div`
  height: 300px;
  width: 250px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.img`
  height: 70px;
  width: 70px;
`

const ErrorText = styled.p`
  margin-top: 30px;
  color: #ff4b4b;
  font-size: 20px;
  font-weight: 400;
  text-transform: capitalize;
`

const Center = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;
  transform: translate(-50%, -50%);
`