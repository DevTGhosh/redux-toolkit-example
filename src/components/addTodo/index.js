import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input, HStack } from '@chakra-ui/core';
import { AddIcon } from '@chakra-ui/icons';
import { addTodo } from '../../redux/slices/todoSlice';

export default function AddTodo() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = event => setValue(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    if (value !== '') {
      dispatch(addTodo(value));
      setValue('');
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
