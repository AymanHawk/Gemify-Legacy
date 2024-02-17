import React from 'react';
import Slider from '@mui/material/Slider';

const marks = [
    {
        value: 0,
        label: 'Short Range',
    },
    {
        value: 50,
        label: 'Medium Range',
    },
    {
        value: 100,
        label: 'Long Range',
    },
];

const RangeSlider = ({onChange}) => {

    const handleChange = (_, value) => {
        // Call the provided onChange function with the current value
        onChange(value);
    };

    return (
        <Slider
            defaultValue={0} 
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={null}  // The step is set to null to disable free movement
            marks={marks}
            onChange={handleChange}
        />
    );
};

export default RangeSlider;
