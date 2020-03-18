import React, { Component, useState, useRef } from "react";

import { geolocated } from "react-geolocated";

import { Terrene_H1 } from "./typography";
import { PrimaryButton } from "./buttons";

import { isLocationMatch } from "../../utils/locationChecker";

const LocationButton = (props) => {

  const [quests, setQuests] = useState({});

  const btnRef = useRef(null);

  const logAttempt = () => {
        fetch(`${process.env.TERRENE_API}/attempts/1/2`)
        .then(res => res.json())
        .then((data) => {
            setQuests(data);
        })
        .catch(console.log)
  }

  const logSuccess = () => {
        const { id } = props;
        fetch(`${process.env.TERRENE_API}/quests/1/` + id)
        .then(res => res.json())
        .then((data) => {
          setQuests(data);
        })
        .catch(console.log)
  }

  const onClickButton = () => {

        //   if(!isMatch) {
          if(props.id === 1) {
            if (props.attempts.length < 2) {
              console.log(props.attempts.length)
            logAttempt();
            props.rerenderParentCallback(false);
            alert('Failure. Keep on trying!');
            }
            else {
              alert('Failure. Your attempts are up!');
            props.setStory(0);
            props.open(btnRef);
            }
          }
          else {
            props.rerenderParentCallback(true);
            logSuccess();
            alert('Success! Go to the clue menu to see the clue you unlocked!');
          }

    //   }

    // if (this.props.coords) {
    //   const lat = this.props.coords.latitude;
    //   const long = this.props.coords.longitude;
    //   const isMatch = isLocationMatch(lat, long, 42.3292336, -71.0854208);

    //   if(!isMatch) {
    //     this.logAttempt();
    //     this.props.rerenderParentCallback();
    //   }

    //   const message = isMatch ? 'Your location is a match!' : 'Try again lol';
    //   alert('hello!! ' + message);
    // }

    // else {
    //   alert('No location available');
    // }

  }

    console.log("available: " + props.isGeolocationAvailable);
    console.log("enabled: " + props.isGeolocationEnabled);
    console.log("coord: " + props.coords);
    if (props.coords) {
      console.log("coord: " + props.coords.latitude);
      console.log("coord: " + props.coords.longitude);
    }

    const isMatch = isLocationMatch(42.3292356, -71.0854208, 42.3292336, -71.0854208);
    console.log('dfljklsdfj: ' + isMatch);

    return (
        <PrimaryButton openModalRef={btnRef} type="primary" onClickFnc={onClickButton} title={"Guess Location"}/>

    );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(LocationButton);
