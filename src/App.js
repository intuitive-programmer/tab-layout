import React from 'react'

import TabLayout from './layouts/TabLayout'
import Tab from './components/TabLayout/Tab'

import One from './pages/One'
import Two from './pages/Two'

const App = () => (
  <TabLayout>
    <TabLayout.Nav>
      <Tab label="one" />
      <Tab label="two" />
    </TabLayout.Nav>
    <TabLayout.Content>
      <One />
      <Two />
    </TabLayout.Content>
  </TabLayout>
)

export default App