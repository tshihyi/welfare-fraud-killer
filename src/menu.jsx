import {h, navLink} from 'web-app-scripts'

const menuItem = ({name, path, type='', children}) =>
<li class={type}>
  <nav-link to={path}>{name}</nav-link>
  {children.length > 0 &&
    <ul>
      {children}
    </ul>
  }
</li>

const menu = () =>
<div class="mainNav">
  <ul class="jd_menu">
    <menu-item path="" name="最新公告" />
    <menu-item path="" name="保險業務管理" />
    <menu-item path="/" name="保費管理">
      <menu-item path="" name="保費基本設定" />
      <menu-item path="/insurance-fee" name="每月保費明細表" />
      <menu-item path="" name="保戶戶況異動列表" />
      <menu-item path="" name="批次扣款保費匯出" />
      <menu-item path="" name="保費扣款結果匯入" />
      <menu-item path="" name="每月扣款失敗表" />
      <menu-item path="" name="每月欠費明細表" type="list" />
      <menu-item path="" name="每月欠繳明細表" type="list"/>
      <menu-item path="" name="每月退費明細表" type="list"/>
      <menu-item path="" name="農健保費彙繳試算" />
      <menu-item path="" name="續保保費繳款明細" />
      <menu-item path="" name="每月農保投保狀態統計表" />
      <menu-item path="" name="每月健保彙繳結果統計表" />
    </menu-item>
  </ul>
  <div class="MenuBottom" />
</div>

export default menu
