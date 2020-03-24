import styled from "styled-components";
import React from "react";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';


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
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');

  const handleRadioChange = event => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value === 'success') {
      setHelperText('');
      props.setStory(2);
      props.setVoting(false);
    } else if (value === 'fail') {
      setHelperText('');
      props.setStory(3);
      props.setVoting(false);
    } else {
      setHelperText('Please select an option.');
      setError(true);
    }
  };

  return (
    <VotingPageWrapper>
      <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" error={error}>
        <FormLabel component="legend">Time to Vote</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleRadioChange}>
          <FormControlLabel value="fail" control={<Radio />} label="Option 1 Fail" />
          <FormControlLabel value="success" control={<Radio />} label="Option 2 Success" />
          <FormControlLabel value="fail" control={<Radio />} label="Option 3 Fail" />
          <FormControlLabel value="fail" control={<Radio />} label="Option 4 Fail" />
        </RadioGroup>
      </FormControl>
      <FormHelperText>{helperText}</FormHelperText>
      <ButtonsWrapper>
          {/*TODO: <PrimaryButton onClickFnc={() => props.prevSlide()} title="Prev" /> */}
          <Button type="submit"> Cast Vote </Button>
      </ButtonsWrapper>
      </form>
    </VotingPageWrapper>

  );
};