import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, VStack, Text, Checkbox } from '@chakra-ui/core';
import { fetchTodos } from '../../redux/slices/todoSlice';

export default function TodoList() {
  const dispatch = useDispatch();
  const todoListdata = useSelector(state => state.todos.todoList);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleCheck = event => {
    //TODO: When checkbox is checked remove the todo from the redux store
    console.count('Checkbox function');
  };

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
