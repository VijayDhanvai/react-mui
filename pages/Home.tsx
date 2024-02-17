//import React from 'react';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SimpleChart from '../components/SimpleChart';
import SimpleLineChart from '../components/SimpleLineChart';

import StackingAreaChart from '../components/StackingAreaChart';
import TinyAreaChart from '../components/TinyAreaChart';
import MissingLineChart from '../components/MissingLineChart';
import { StyledEngineProvider } from '@mui/material/styles';

const Home = () => {
  return (
    <section>
      <StyledEngineProvider injectFirst>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid xs={4}>
              <Item>
                <TinyAreaChart />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                {' '}
                <TinyAreaChart />
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                {/* <TinyAreaChart /> */}
                <SimpleChart />
              </Item>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid xs={6}>
              <Item>
                {' '}
                <SimpleLineChart />
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                {' '}
                <StackingAreaChart />
              </Item>
            </Grid>
            {/* <Grid xs={4}>
            <Item>
              {' '}
              <TinyAreaChart />
            </Item>
          </Grid> */}
          </Grid>

          <Grid container spacing={3}>
            <Grid xs={12}>
              <Item>
                <MissingLineChart />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </StyledEngineProvider>

      <h2>home</h2>
    </section>
  );
};
export default Home;
