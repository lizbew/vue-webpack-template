import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App.vue'
import ContentView from './components/ContentView.vue'

Vue.use(Router)

var router = new Router()


router.map({
	'/': {
		component: ContentView
	}
})


router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.redirect({
  '*': '/'
})


router.start(App, '#app')

