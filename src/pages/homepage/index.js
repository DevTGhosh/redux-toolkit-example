import React from 'react';
import { VStack } from '@chakra-ui/core';
import AddTodo from '../../components/addTodo';
import TodoList from '../../components/todoList';

export default function Home() {
  return (
    <VStack
      gridRow="2 / 3"
      gridColumn="2 / 3"
      alignSelf="start"
      mt="5rem"
      spacing={10}
    >
      <AddTodo />
      <TodoList />
    </VStack>
  );
}
