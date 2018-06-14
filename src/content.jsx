import {h} from 'web-app-scripts'

const content = ({trail, children}) =>
<div id="mainContent">
  <div class="breadcrumb">
    目前所在位置：<span>首頁</span> &gt; {trail}
  </div>
  <div id="content">
    {children}
  </div>
</div>

export default content
