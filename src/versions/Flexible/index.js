import React from 'react'

import TabLayout from './layouts/TabLayout'
import Tab from './components/TabLayout/Tab'

import Page from './components/TabLayout/Page'
import One from '../../pages/One'
import Two from '../../pages/Two'

const Flexible = () => (
  <TabLayout>
    <TabLayout.Nav>
      <Tab label="one" />
      <Tab label="two" />
    </TabLayout.Nav>
    <TabLayout.Content>
      <Page render={() => <One />} />
      <Page render={() => <Two />} />
    </TabLayout.Content>
  </TabLayout>
)

export default Flexible