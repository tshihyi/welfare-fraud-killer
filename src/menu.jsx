import {h, navLink} from 'web-app-scripts'

const menuItem = ({name, path, children}) =>
<li>
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
      <menu-item path="" name="戶況設定" />
      <menu-item path="/insurance-fee" name="保費資料" />
      <menu-item path="" name="保費匯出" />
      <menu-item path="" name="保費結果匯入" />
      <menu-item path="" name="臨櫃現金繳退費" />
      <menu-item path="" name="保費清冊" />
      <menu-item path="" name="保費繳款單" />
    </menu-item>
  </ul>
  <div class="MenuBottom" />
</div>

export default menu
