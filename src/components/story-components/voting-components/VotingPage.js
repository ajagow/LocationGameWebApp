import styled from "styled-components";
import React from "react";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { PrimaryButton } from "../../base_components/buttons";


const VotingPageWrapper = styled.div``;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  position: absolute:
  bottom: 5px;
  justify-content: space-around;
`;

export const VotingPage = props => {

  const [value, setValue] = React.useState(null);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <VotingPageWrapper>
      <FormControl component="fieldset">
        <FormLabel component="legend">Time to Vote</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="fail" control={<Radio />} label="Option 1 Fail" />
          <FormControlLabel value="success" control={<Radio />} label="Option 2 Success" />
          <FormControlLabel value="fail" control={<Radio />} label="Option 3 Fail" />
          <FormControlLabel value="fail" control={<Radio />} label="Option 4 Fail" />
        </RadioGroup>
      </FormControl>
      <ButtonsWrapper>
          {/*TODO: <PrimaryButton onClickFnc={() => props.prevSlide()} title="Prev" /> */}
          <PrimaryButton onClickFnc={()=> console.log("blah")} title="Cast Vote" />
      </ButtonsWrapper>
    </VotingPageWrapper>

  );
};