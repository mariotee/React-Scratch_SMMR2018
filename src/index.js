import React from 'react'
import ReactDOM from 'react-dom'

import blockstyle from "css/someblock.css"
import otherblockstyle from "css/someotherblock.css"
import spanstyle from "css/somespan.css"
import otherspanstyle from "css/someotherspan.css"

class Index extends React.Component
{
  render()
  {
    return(
    <div>
      <div className={blockstyle.mains}>Some Block</div>
      <div className={otherblockstyle.mains}>Some Other Block</div>
      <span className={spanstyle.mains}>Some Span</span> <span className={otherspanstyle.mains}>Some Other Span</span>
    </div>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById("root"));
