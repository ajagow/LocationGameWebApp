import React from 'react';
import styled from "styled-components";

import { getAttempts } from "../../utils/apiCalls";

import { Terrene_H3 } from "../base_components/typography";

import { red } from '../base_components/colors';

export const AttemptFilled = styled.div`
    height: 25px;
  width: 25px;
  background-color: ${red};
  border-radius: 50%;
  display: inline-block;
  margin: 8px;

`;

export const AttemptEmpty = styled.div`
    height: 25px;
  width: 25px;
  border: 2px solid ${red};
  border-radius: 50%;
  display: inline-block;
  margin: 8px;

`;

export const AttemptCircleContainer = styled.div`
    display: flex;
    justify-content: center;

`;

export const AttemptContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-right: 8px;
    padding-top: 8px;
    z-index: 10;
    background: white;

`;

const Terrene_H3_Left = styled(Terrene_H3)`
    text-align: left;
`;


export class Attempts extends React.Component {
    state = {
        attempts: []
    };

    createAttemptCircles() {
        let ans = [];
        const numAttempts = this.state.attempts.length > 0 ? this.state.attempts.length : 0;
        const attemptsLeft = 3 - numAttempts;

        for (let i = 0; i < numAttempts; i++) { 
            ans.push(<AttemptFilled/>);
        }
        for (let i = 0; i < attemptsLeft; i++) { 
            ans.push(<AttemptEmpty/>);
        }


        return ans;
    }

    componentDidMount() {
        fetch('`${process.env.TERRENE_API}/attempts')
        .then(res => res.json())
        .then((data) => {
            this.setState({ attempts: data });
        })
        .catch(console.log)
    }

    render() {
        const { attempts } = this.state;
        const { update} = this.props;
        const num_attempts = attempts.length;
        const attempts_left = 3 - num_attempts;
        const message = attempts_left > 1 || attempts_left === 0 ? attempts_left + " guesses left" : attempts_left + " attempt left";
        if (update != 0) {
            this.componentDidMount();
        }

        return(
            <AttemptContainer>
            <Terrene_H3_Left>Attempts</Terrene_H3_Left>
            <AttemptCircleContainer>
            {this.createAttemptCircles()}
            </AttemptCircleContainer>
            <Terrene_H3>{message}</Terrene_H3>
            </AttemptContainer>
        );
    }
}