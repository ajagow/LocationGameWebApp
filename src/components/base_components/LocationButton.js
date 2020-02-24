import React, { Component } from "react";

import { geolocated } from "react-geolocated";

import { Terrene_H1 } from "./typography";
import { PrimaryButton } from "./buttons";

import { isLocationMatch } from "../../utils/locationChecker";

class LocationButton extends Component {

  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  logAttempt() {
        fetch(`${process.env.TERRENE_API}/attempts/1/2`)
        .then(res => res.json())
        .then((data) => {
            this.setState({ quests: data });
        })
        .catch(console.log)
  }

  logSuccess() {
        const { id } = this.props;
        fetch(`${process.env.TERRENE_API}/quests/1/` + id)
        .then(res => res.json())
        .then((data) => {
            this.setState({ quests: data });
        })
        .catch(console.log)
  }

  onClickButton() {

        //   if(!isMatch) {
          if(this.props.id === 1) {
            this.logAttempt();
            this.props.rerenderParentCallback(false);
            alert('Failure. Keep on trying!');
          }
          else {
            this.props.rerenderParentCallback(true);
            this.logSuccess();
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
  render() {
    console.log("available: " + this.props.isGeolocationAvailable);
    console.log("enabled: " + this.props.isGeolocationEnabled);
    console.log("coord: " + this.props.coords);
    if (this.props.coords) {
      console.log("coord: " + this.props.coords.latitude);
      console.log("coord: " + this.props.coords.longitude);
    }

    const isMatch = isLocationMatch(42.3292356, -71.0854208, 42.3292336, -71.0854208);
    console.log('dfljklsdfj: ' + isMatch);

    return (
        <PrimaryButton type="primary" onClickFnc={this.onClickButton} title={"Guess Location"}/>

    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  watchPosition: true,
  userDecisionTimeout: 5000,
})(LocationButton);
