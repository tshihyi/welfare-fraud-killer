import {h} from 'web-app-scripts'
import content from './content'

const insuranceFee = ({children}) =>
<content trail={[
  <span>保費管理</span>, ' > ',
  <span>保費資料</span>
]}>
  保費資料
</content>

export default insuranceFee
