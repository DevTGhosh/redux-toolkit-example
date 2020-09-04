import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/core';

export default function ErrorMessage({ error }) {
  return (
    <Alert
      status="error"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <AlertIcon />
      <AlertTitle mr={2}>An error has occurred!</AlertTitle>
      <AlertDescription mr={8}>{error}</AlertDescription>
      <CloseButton />
    </Alert>
  );
}
