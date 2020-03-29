import React, { useState } from "react";
import { Link } from "gatsby";
import ReactCodeInput from "react-code-input";
import styled from "styled-components";

import { Input } from "antd";

import Layout from "../components/layout";
import SEO from "../components/seo";

import TopBar from "../components/top_bar/topBar";
import { darkBlue } from "../components/base_components/colors";

import {
  Terrene_H5,
  Terrene_H3,
  Terrene_H2,
} from "../components/base_components/typography";

const StartButton = styled.div`
  width: 343px;
  height: 55px;
  left: 16px;
  top: 679px;

  background: #f95738;
  mix-blend-mode: normal;
  border-radius: 3px;

  text-align: center;
`;

const BackButton = styled.div`
  width: 343px;
  height: 55px;
  left: 16px;
  top: 679px;

  text-align: center;
`;

const T_H2 = styled(Terrene_H2)`
  color: white;
  line-height: 3;
  margin-bottom: 0;
`;

const T_H3 = styled(Terrene_H3)`
  color: white;
`;

const T_H5 = styled(Terrene_H5)`
  color: white;
`;

const Background = styled.div`
  background-color: ${darkBlue};
  min-height: 100vh;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 12px;
`;

const ButtonContaiiner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 3em;
`;

const StyledInput = styled(Input)`
  height: 48px;
`;

const logUser = (name, id) => {
  let apiCall = `${process.env.TERRENE_API}/users/` + id + "/" + name;
  fetch(apiCall)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(console.log);

  
  if (typeof window !== 'undefined') {
    document.cookie = "visit=true"+"; path=/";
    document.cookie = "firstTime=true"+"; path=/";
    setTimeout(function() {
      window.location.replace(`/`);
    }, 1000);
  }
};

const SecondPage = () => {
  const [name, setName] = useState("");
  const [playerNum, setPlayerNum] = useState("");

  console.log(playerNum);

  return (
    <Background>
      <SEO title="Page two" />
      <TopBar showLogout={false} />
      <FormContainer>
        <T_H5>Welcome to Terrene!</T_H5>
        <T_H3>
          Please begin by either joining an existing lobby or creating your own.
        </T_H3>
      </FormContainer>
      <FormContainer>
        <T_H2>Player Code:</T_H2>
        <ReactCodeInput type="text" fields={6} />
      </FormContainer>

      <FormContainer>
        <T_H2>Player Number:</T_H2>
        <StyledInput onChange={e => setPlayerNum(e.target.value)} />
      </FormContainer>

      <FormContainer>
        <T_H2>Player Name:</T_H2>
        <StyledInput onChange={e => setName(e.target.value)} />
      </FormContainer>

      <ButtonContaiiner>
        <StartButton onClick={() => logUser(name, playerNum)}>
          <T_H2>Start</T_H2>
        </StartButton>
        {/* <BackButton>
          <T_H2>Go back</T_H2>
        </BackButton> */}
      </ButtonContaiiner>

      {/* <Link to="/">Go back to the homepage</Link> */}
    </Background>
  );
};

export default SecondPage;
