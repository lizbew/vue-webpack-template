<template>
<div id="content">
<h4>Some Title Here</h4>
<p>\{{ content }}</p>
</div>
</template>

<script>
export default {
	name: 'ContentView',
	data() {
		return {
			content: 'this is just some text'
		}
	}
}
</script>
