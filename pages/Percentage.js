import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import { Grid, TextField } from '@mui/material';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 0,
  },
  {
    value: 20,
  },
  {
    value: 37,
  },
  {
    value: 100,
  },
];


const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});



function AirbnbThumbComponent(props) {
  const { children, ...other } = props;

  // function Calculate(amount,percentage){
  //   return console.log(amount*percentage/100)
  // }
  function Calculate(props) {
     console.log(props.amount)
  }


  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};


export default function CustomizedSlider() {
  return (
    <Box sx={{ width: 4 / 4 }}>

      <Grid color="white" sx={{ m: 1 }} />

      <TextField

        fullWidth
        onChange={(e) => (console.log(e.target.value))}
        label="Principal Amount"
        type="number"
        color='secondary'
        maxRows={1}
        // backgroundColor='white'

        InputLabelProps={{
          // style: { color: 'white' },
          shrink: true,

        }}

      />
      <br />
      <br />
      <br />

      <TextField

        fullWidth
        id="%"
        label="%"
        type="number"
        color="primary"
        maxRows={1}
        // backgroundColor='white'

        InputLabelProps={{
          // style: { color: 'white' },
          shrink: true,
          bgcolor:"white",


        }}

      />

      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={10 }
        // step={0.1}
        // marks
        // min={0.02}
        // max={10000}
        onc
        onChange={(e) => {

          document.getElementById('%').value = (e.target.value)
          // this.Calculate(props)
          
          }}
      />

    </Box>
  );
}
