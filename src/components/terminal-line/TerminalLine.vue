<template>
    <div class="terminal-line">{{ line }}</div>
</template>

<script>
export default {
    props: {
        line: null
    }    
}
</script>

<style scoped>
.terminal-line {
	color: #AAA6A5;
}
</style>
