import { Box, Flex } from "@chakra-ui/react";

const Dependencies = ({ dependencyList = [] }) => {
  return (
    <Box mt={12}>
      <h2 className="demo-title-extra">Dependencies</h2>
      <Flex wrap='wrap' className="demo-details">
        {dependencyList.map(d =>
          <span key={d}>{d}</span>
        )}
      </Flex>
    </Box>
  );
}

export default Dependencies;