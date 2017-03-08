import Home from './components/Home.vue'
import User from './components/user/User.vue'
import Item from './components/item/Item.vue'
import ItemDetail from './components/item/ItemDetail.vue'
import ItemNew from './components/item/ItemNew.vue'
import ItemAll from './components/item/ItemAll.vue'
import ItemEdit from './components/item/ItemEdit.vue'

export const routes = [
  { path : '', component: Home},
  { path : '/users', component: User},
  { path : '/items', component:Item, children: [
    {path: '', component: ItemAll},
    {path: 'new', component: ItemNew},
    {path: ':id', component: ItemDetail},
    {path: ':id/edit', component: ItemEdit}
  ]}
]
