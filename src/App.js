import React from 'react'

import TabLayout from './layouts/TabLayout'
import Tab from './components/TabLayout/Tab'

const App = () => (
  <TabLayout>
    <TabLayout.Nav>
      <Tab label="one" />
      <Tab label="two" />
    </TabLayout.Nav>
  </TabLayout>
)

export default App