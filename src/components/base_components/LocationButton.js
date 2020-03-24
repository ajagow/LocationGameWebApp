import React, { Component, useState, useRef } from "react";

import { geolocated } from "react-geolocated";

import { Terrene_H1 } from "./typography";
import { PrimaryButton } from "./buttons";

import { isLocationMatch } from "../../utils/locationChecker";

const LocationButton = props => {
  const [quests, setQuests] = useState({});

  const btnRef = useRef(null);

  const logAttempt = () => {
    fetch(`${process.env.TERRENE_API}/attempts/1/2`)
      .then(res => res.json())
      .then(data => {
        setQuests(data);
      })
      .catch(console.log);
  };

  const logSuccess = () => {
    const { id } = props;
    fetch(`${process.env.TERRENE_API}/quests/1/` + id)
      .then(res => res.json())
      .then(data => {
        setQuests(data);
      })
      .catch(console.log);
  };

  const onClickButton = () => {


    if (!isLocationMatch(props.id, props.guess)) {
      if (props.attempts.length < 2) {
        console.log(props.attempts.length);
        logAttempt();
        props.rerenderAttemptsCallback();
        props.rerenderParentCallback(false);
        alert("Failure. Keep on trying!");
      } else {
        alert("Failure. Your attempts are up!");
        if (props.attempts.length == 2) {
          logAttempt();
        }

        props.rerenderAttemptsCallback();
        props.open(btnRef);
      }
    } else {
      props.rerenderParentCallback(true);
      alert("Success! Go to the clue menu to see the clue you unlocked!");
      if (props.quests.length <= 7) {
        props.setStory(1);
        props.open(btnRef);
      }
      logSuccess();
    }
  };

  return (
    <PrimaryButton
      openModalRef={btnRef}
      type="primary"
      onClickFnc={onClickButton}
      title={"Guess Location"}
    />
  );
};

export default LocationButton;
