import {h, route} from 'web-app-scripts'
import '../style'
import header from './header'
import menu from './menu'
import footer from './footer'
import insuranceFee from './insurance-fee'

export default props =>
<div class="wrap">
  <header />
  <menu />
  <route path="/" exact render={insuranceFee} />
  <route path="/insurance-fee" render={insuranceFee} />
  <footer />
</div>
