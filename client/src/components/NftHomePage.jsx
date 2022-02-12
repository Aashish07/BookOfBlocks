import React from 'react'
import Banner from './Banner'
import { Grid } from '@material-ui/core'
import Categories from './Categories'
import Article from './Article'

const NftHomePage = () => {
  return (
    <React.Fragment>
      <Banner />
      <Grid container>
          <Grid item lg={2} xs={12} sm={2}>
              <Categories />
          </Grid>
          <Grid container item lg={10} xs={12} sm={10}>
              <Article />
          </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default NftHomePage