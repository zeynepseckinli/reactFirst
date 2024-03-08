import Box from '@mui/material/Box';

export default function PageBox({ props, children }) {
  return (
    <>
      <Box
        height={'auto'}
        width={'auto'}
        my={4}
        p={2}
        mx={'auto'}
        display="flex"
        flexDirection={props.flexDirection}
        alignItems={props.flexDirection === 'column' ? 'start' : 'center'}
        gap={4}
        borderRadius="25px">
        {children}
      </Box>
    </>
  );
}