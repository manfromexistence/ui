import { Table, Thead, Tbody, Tr, Th, Td, Box, Text } from '@chakra-ui/react';

const CodeCell = ({ content = '' }) => {
  return (
    <Box
      fontFamily='monospace'
      py={1} px={2}
      borderRadius='5px'
      width='fit-content'
      fontWeight={500}
      color='#e9e9e9'
      backgroundColor='#222'
    >
      {content}
    </Box>
  )
}

const PropTable = ({ data }) => {
  return (
    <Box mt={12}>
      <h2 className="demo-title-extra">Props</h2>
      <Box overflowX="auto" mt={6}>
        <Table variant="unstyled" colorScheme="whiteAlpha" size="sm" className='props-table'>
          <Thead borderBottom='1px solid #222'>
            <Tr backgroundColor='#0D0D0D' borderRadius='20px'>
              <Th letterSpacing='-.5px' borderRight="1px solid #222" textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Property</Th>
              <Th letterSpacing='-.5px' borderRight="1px solid #222" textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Type</Th>
              <Th letterSpacing='-.5px' borderRight="1px solid #222" textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Default</Th>
              <Th letterSpacing='-.5px' textTransform={'capitalize'} fontSize={'l'} py={4} color="white">Description</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((prop, index) => (
              <Tr key={index} borderBottom={index === data.length - 1 ? 'none' : '1px solid #222'}>
                <Td borderColor="#222" py={4} color="white" width={0} pr={8} borderRight="1px solid #222">
                  <CodeCell rightJustified content={prop.name} />
                </Td>
                <Td borderColor="#222" py={4} color="white" whiteSpace='nowrap' width={'120px'} borderRight="1px solid #222">
                  <Text fontFamily='monospace' fontWeight={500}>{prop.type}</Text>
                </Td>
                <Td borderColor="#222" py={4} color="white" borderRight="1px solid #222" whiteSpace='nowrap'>
                  <CodeCell content={prop.default && prop.default.length ? prop.default : '—'} />
                </Td>
                <Td borderColor="#222" py={4} color="white">
                  <Text maxW={300}>{prop.description}</Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default PropTable;
