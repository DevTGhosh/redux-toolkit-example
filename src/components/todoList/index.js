import React from 'react';
import { useSelector } from 'react-redux';
import { Box, VStack, Text, Checkbox } from '@chakra-ui/core';

export default function TodoList() {
  const handleCheck = event => {
    //TODO: When checkbox is checked remove the todo from the redux store
    console.count('Checkbox function');
  };

  const todoListdata = useSelector(state => state.todos.todoList);

  return (
    <>
      {todoListdata.map(todo => (
        <VStack spacing={8} key={todo.key}>
          <Box
            p={5}
            minW={750}
            shadow="md"
            borderWidth="1px"
            d="flex"
            justifyContent="flex-start"
          >
            <Checkbox
              colorScheme="purple"
              size="lg"
              spacing="2rem"
              onChange={handleCheck}
            >
              <Text>{todo.value}</Text>
            </Checkbox>
          </Box>
        </VStack>
      ))}
    </>
  );
}
