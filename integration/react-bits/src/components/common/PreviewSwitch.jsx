import { Flex, Switch, Text } from "@chakra-ui/react";

const PreviewSwitch = ({ title, isChecked, onChange, isDisabled }) => {
  return (
    <Flex gap={4} align="center" mt={4}>
      <Text fontSize="sm">{title}</Text>
      <Switch
        isDisabled={isDisabled}
        isChecked={isChecked}
        onChange={(e) => onChange(e)}
      />
    </Flex>
  );
}

export default PreviewSwitch;