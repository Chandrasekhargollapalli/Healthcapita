import React, { useEffect, useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './MultiSlider.css';

const MultiSlider = ({
  id,
  min,
  max,
  step = 1,
  minValue: propMinValue,
  maxValue: propMaxValue,
  showRuler = false,
  showLabel = false,
  onChange, // Callback for value changes
}) => {
  const [minValue, setMinValue] = useState(propMinValue || min);
  const [maxValue, setMaxValue] = useState(propMaxValue || max);

  // Update internal state if props change
  useEffect(() => {
    setMinValue(propMinValue || min);
  }, [propMinValue, min]);

  useEffect(() => {
    setMaxValue(propMaxValue || max);
  }, [propMaxValue, max]);

  const handleInput = (e) => {
    const newMinValue = e.minValue;
    const newMaxValue = e.maxValue;

    setMinValue(newMinValue);
    setMaxValue(newMaxValue);

    if (onChange) {
      onChange({ id, minValue: newMinValue, maxValue: newMaxValue });
    }
  };

  return (
    <div>
      <MultiRangeSlider
        min={min}
        max={max}
        step={step}
        ruler={showRuler}
        label={showLabel}
        minValue={minValue}
        maxValue={maxValue}
        onInput={handleInput} // Use `onInput` to capture slider changes
      />
    </div>
  );
};

export default MultiSlider;
