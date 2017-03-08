import Home from './components/Home.vue'
import User from './components/user/User.vue'
import Item from './components/item/Item.vue'

export const routes = [
  { path : '', component: Home},
  { path : '/users', component: User},
  { path : '/items', component:Item}
]
