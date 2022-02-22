import { createApp } from 'vue'
// i18n （PS：导入放到 APP.vue 导入之前，因为后面我们会在 app.vue 中使用国际化内容）
import i18n from '@/i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

// 导入 svgIcon
import installIcons from '@/icons'
// 导入全局样式
import './styles/index.scss'
// 导入权限控制模块 登录鉴权
import './permission'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from './utils/toline'

const app = createApp(App)
installElementPlus(app)
installIcons(app)

for (const i in Icons) {
  app.component(`el-icon-${toLine(i)}`, Icons[i])
}
app.use(store).use(router).use(i18n).mount('#app')
