import {h} from 'web-app-scripts'
import content from './content'

const insuranceFee = ({children}) =>
<content trail={[
  <span>保費管理</span>, ' > ',
  <span>保費資料</span>
]}>
  <div class="search-box">
    <div class="top_search">
      <div class="top_search_icon" />
      <p>
        搜尋列<span>(請勿在此新增資料)</span>
      </p>
    </div>
    <form
      action="/InsureUsersFee"
      id="searchForm"
      method="post"
      novalidate="novalidate">
      <table class="search-list" style="margin:15px 0 10px 0;">
        <tbody>
          <tr>
            <th style="width: 150px;">期別：</th>
            <td>
              <select
                id="SearchByPeriodName"
                name="SearchByPeriodName"
                class="chosen-select"
                multiple="multiple"
                style="display: none;"
              />
              <div
                class="chosen-container chosen-container-multi"
                style="width: 200px;"
                title=""
                id="SearchByPeriodName_chosen">
                <ul class="chosen-choices">
                  <li class="search-field">
                    <input
                      type="text"
                      value="請選擇期別"
                      class="default"
                      autocomplete="off"
                      style="width: 90px;"
                    />
                  </li>
                </ul>
                <div class="chosen-drop">
                  <ul class="chosen-results" />
                </div>
              </div>
            </td>
            <th style="width: 100px;">保用別：</th>
            <td>
              <select name="SearchByInsureType" class="">
                <option value="">不拘</option>
                <option value="0">農保</option>
                <option value="1">健保</option>
              </select>
            </td>
            <th style="width: 100px;">費用別：</th>
            <td>
              <select name="SearchByFeeType" class="">
                <option value="0">繳費</option>
                <option value="1">退費</option>
              </select>
            </td>
            <td>
              <div class="search_show">
                <button
                  class="button-search yellow"
                  type="submit"
                  name="btnSearch">
                  送出查詢
                </button>
                <button
                  class="button-search"
                  type="submit"
                  name="btnSearchAll">
                  重新查詢
                </button>
                <button type="button" class="button-search more blue">
                  進階搜尋
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="search-list search_panel">
        <tbody>
          <tr>
            <th style="width: 150px;">身分證字號(主)：</th>
            <td style="width: 200px;">
              <input
                class="text_1"
                id="SearchByHouseKingIDCard"
                name="SearchByHouseKingIDCard"
                size="15"
                type="text"
                value=""
              />
            </td>
            <th style="width: 100px;">姓名(主)：</th>
            <td>
              <input
                id="SearchByHouseKingName"
                name="SearchByHouseKingName"
                size="10"
                type="text"
                value=""
              />
              <input name="SearchByIsContainFamily" type="checkbox" />
              <span>含眷屬</span>
            </td>
          </tr>
          <tr>
            <th>身分證字號(眷)：</th>
            <td>
              <input
                id="SearchByIDCard"
                name="SearchByIDCard"
                size="15"
                type="text"
                value=""
              />
            </td>
            <th>姓名(眷)：</th>
            <td>
              <input
                id="SearchByName"
                name="SearchByName"
                size="10"
                type="text"
                value=""
              />
            </td>
            <td style="width: 400px;">
              <button
                class="button-search yellow"
                type="submit"
                name="btnSearch">
                送出查詢
              </button>
              <button
                class="button-search"
                type="submit"
                name="btnSearchAll">
                重新查詢
              </button>
              <button type="button" class="button-search more blue">
                進階搜尋
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <input
        id="RouteValue_SortAction"
        name="RouteValue.SortAction"
        type="hidden"
        value="Asc"
      />
      <input
        id="RouteValue_SortField"
        name="RouteValue.SortField"
        type="hidden"
        value="ID"
      />
    </form>
  </div>
  <h1 class="list-title">保費資料列表</h1>
  <div style="color: red; margin-top: 20px; margin-left: 20px;">
    共計：0 筆 &nbsp; 總金額：0 元 &nbsp; 轉帳帳號無資料筆數：0
  </div>
  <form
    action="/InsureUsersFee"
    id="ListForm"
    method="post"
    novalidate="novalidate">
    <div class="research">
      <table style="width:100%" class="common-list alignC">
        <tbody>
          <tr class="">
            <th>編號</th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="HouseKingName"
                title="以「姓名(主)」遞增排序!!">
                姓名(主)△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="HouseKingIDCard"
                title="以「身分證字號(主)」遞增排序!!">
                身分證字號(主)△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="Name"
                title="以「姓名(眷)」遞增排序!!">
                姓名(眷)△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="IDCard"
                title="以「身分證字號(眷)」遞增排序!!">
                身分證字號(眷)△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="Period"
                title="以「期別」遞增排序!!">
                期別△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="InsureType"
                title="以「保用別」遞增排序!!">
                保用別△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="InsureHouseStatusName"
                title="以「戶況」遞增排序!!">
                戶況△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="Amount"
                title="以「應收金額」遞增排序!!">
                應收金額△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="PaidType"
                title="以「狀態」遞增排序!!">
                狀態△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="InsureUserProfile.TransAccount"
                title="以「轉帳帳號」遞增排序!!">
                轉帳帳號△
              </a>
            </th>
            <th>
              <a
                href="/InsureUsersFee"
                class="sortField"
                sortbyfield="InsureUserProfile.TransName"
                title="以「帳號姓名」遞增排序!!">
                帳號姓名△
              </a>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      第<span>1</span>/<span>0</span>頁，共<span id="TotalItemCount">
        0
      </span>筆<span class="disabled">上一頁</span>，<span class="disabled">
        下一頁
      </span>，每頁<select id="PageSize" name="PageSize">
        <option selected="" value="10">
          10
        </option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>筆 資料<input type="hidden" id="PageCount" value="0" />
    </div>

    <input type="hidden" name="SortField" value="ID" />
    <input type="hidden" name="SortAction" value="Asc" />
  </form>
</content>

export default insuranceFee
