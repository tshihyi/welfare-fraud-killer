import {h} from 'web-app-scripts'

const header = () =>
<div class="header ui-layout-north">
  <div class="topNav">
    <ul>
      <li>
        <span class="login-info">
          <span class="sys-name">
            <a href="/FarmerOrg/Profile">凌誠農會</a>
          </span>{' '}
          您好!
        </span>
      </li>
      <li>
        <form
          name="SearchAbnormalForm"
          action="/Insure/List"
          id="SearchAbnormalForm"
          method="post"
          novalidate="novalidate">
          {' '}
          <a style="color:red;" href="#" onclick="SearchAbnormal();">
            您有 605 筆二次現勘的資料尚未處理
          </a>
          <input type="hidden" name="SearchIsError" value="true" />
          <input type="hidden" name="SearchAbnormal" value="6" />
        </form>
      </li>
      <li class="logout">
        <a href="/Account/Logout">登出</a>
      </li>
      <li class="line" />
      <li class="home">
        <a href="/Insure">回首頁</a>
      </li>
      <li class="line" />
      <li class="contactUs">
        <a href="/Home/Manual">操作手冊下載</a>
      </li>
    </ul>
  </div>
  <h1 id="logo">
    <a href="/Insure" />
  </h1>

  <div class="buttom_gu">
    <ul>
      <li>字體大小：</li>

      <li>
        <a href="#" id="font_s" data-font-size="s" class="">
          小
        </a>
      </li>
      <li>
        <a href="#" id="font_m" data-font-size="m" class="is_active">
          中
        </a>
      </li>
      <li>
        <a href="#" id="font_l" data-font-size="l" class="">
          大
        </a>
      </li>
    </ul>
  </div>

  <div class="QA">
    <a href="http://get.teamviewer.com/FWSTool" target="_blank">
      <img src="https://fws.coa.gov.tw/Contents/images/QA.png" width="50" height="49" />
    </a>
  </div>

</div>

export default header
