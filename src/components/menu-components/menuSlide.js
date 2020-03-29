import styled from "styled-components";
import React, { useRef } from "react";

import Draggable from "react-draggable";
import { getCookie } from "../../utils/cookieUtils";

import { TabContent, TabBar } from "./tabMenu";

import locationIcon from "../../../public/icons/locationIcon.svg";
import { white } from "../base_components/colors";

export const MenuSlideStyle = styled.div`
  bottom: 0px;
  position: fixed;
  z-index: 1;
  width: 100vw;
`;

export const MenuContent = styled.div`
  height: 500px;
  background: white;
  position: absolute;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;

export const MenuSliderStyle = styled.div`
  position: fixed;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 50px;
`;

export class MenuSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    index: 0,
    attempts: [],
  };

  componentDidMount() {
    this.fetchQuests();
    this.fetchAttempts();
  }

  fetchQuests() {
    fetch(`http://45.77.222.45:3000/quests`)
      .then(res => res.json())
      .then(data => {
        this.props.setQuests(data);
      })
      .catch(console.log);
  }

  fetchAttempts() {
    fetch(`http://45.77.222.45:3000/attempts`)
      .then(res => res.json())
      .then(data => {
        this.setState({ attempts: data });
      })
      .catch(console.log);
  }

  rerenderParentCallback = () => {
    // time out because we have to wait for quest to be logged
    setTimeout(() => {
      this.fetchQuests();
    }, 1000);
  };

  rerenderAttemptsCallback = () => {
    // time out because we have to wait for quest to be logged
    setTimeout(() => {
      this.fetchAttempts();
    }, 1000);
  };

  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
    this.fetchQuests();
    this.fetchAttempts();
  };

  handleChangeIndex = index => {
    console.log(index);
    this.setState({
      index: index,
    });
    this.fetchQuests();
    this.fetchAttempts();
  };

  render() {
    return (
      <MenuSlideStyle>
        <Draggable
          axis="y"
          bounds={{ top: -500, bottom: 0 }}
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div>
            <MenuSliderStyle className="handle">
              <img src={locationIcon} alt="Logo" />
            </MenuSliderStyle>

            <TabBar
              index={this.state.index}
              handleIndexChange={this.handleChange}
            />
            <MenuContent>
              <TabContent
                open={this.props.open}
                setStory={this.props.setStory}
                attempts={this.state.attempts}
                rerenderParentCallback={this.rerenderParentCallback}
                rerenderAttemptsCallback={this.rerenderAttemptsCallback}
                quests={this.props.quests}
                index={this.state.index}
                handleChangeIndex={this.handleChangeIndex}
              />
            </MenuContent>
          </div>
        </Draggable>
      </MenuSlideStyle>
    );
  }
}
