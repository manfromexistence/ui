import { Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";

const PreviewSlider = ({
  title = '',
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  valueUnit = '',
  width = 150,
  isDisabled = false,
  onChange
}) => {
  return (
    <Flex gap={4} align="center" mt={4}>
      <Text fontSize="sm">{title}</Text>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(val) => onChange(val)}
        isDisabled={isDisabled}
        width={`${width}px`}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text fontSize="sm">{value}{valueUnit && valueUnit}</Text>
    </Flex>
  );
}

export default PreviewSlider;