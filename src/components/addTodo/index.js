import React, { useState } from 'react';
import { Button, Input, HStack } from '@chakra-ui/core';
import { AddIcon } from '@chakra-ui/icons';

export default function AddTodo() {
  const [value, setValue] = useState('');
  const handleChange = event => setValue(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    if (value !== '') {
      // TODO: When Todo isn't an empty string dispatch the input value to the Redux Store
      console.count('Add Todo Function');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing={3}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Todo"
          size="lg"
          w="30vw"
        />
        <Button
          colorScheme="purple"
          variant="solid"
          rightIcon={<AddIcon mb={1} />}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}
