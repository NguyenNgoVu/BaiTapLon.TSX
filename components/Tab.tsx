import { useState } from 'react'

import New from './Tabs/New'
import Novel from './Tabs/Novel'
import Sale from './Tabs/Sale'
import Trending from './Tabs/Trending'

export const pages = {
  New: <New />,
  Trending: <Trending />,
  Novel: <Novel />,
  Sale: <Sale />
}

function Tab({ selected }: { selected: keyof typeof pages }) {
  return pages[selected]
}

export default Tab
