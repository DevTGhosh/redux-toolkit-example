import React from 'react';
import { Box, Grid, Text, Link } from '@chakra-ui/core';
import { ColorModeSwitcher } from '../colorModeSwitcher';

export default function Layout(props) {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid
        minH="100vh"
        p={3}
        direction="column"
        alignItems="center"
        justifyItems="center"
        templateRows=" 1fr 10fr 1fr"
        templateColumns=" 1fr 6fr 1fr"
      >
        <ColorModeSwitcher gridRow="1 / 1" gridColumn="3 / 4" />
        {props.children}
        <Box gridRow="3 / 4" gridColumn="2 / 3" alignSelf="end" mb={2}>
          <Text fontSize="sm">
            Redux Toolkit Example Created by{' '}
            <Link
              color="purple.500"
              href="https://twitter.com/DevTGhosh"
              isExternal
            >
              Devjyoti Ghosh
            </Link>
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
