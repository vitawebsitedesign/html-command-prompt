<template>
    <div v-bind:style="styles" class="terminal-window">
        <TerminalTaskbar>
            <template v-slot:icon>
                >_
            </template>
            <template v-slot:title>
                <div>
                    {{title}}
                </div>
            </template>
        </TerminalTaskbar>
        <TerminalLines v-bind:lines="lines" />
    </div>
</template>

<script>
import TerminalTaskbar from './TerminalTaskbar.vue';
import TerminalLines from './TerminalLines.vue';
export default {
    props: {
        lines: Array,
        styles: Object,
        title: String
    },
    components: {
        TerminalTaskbar,
        TerminalLines
    }
}
</script>

<style scoped>
.terminal-window {
	background: #000000;
	border: 1px solid #eaeaea;
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	font-size: 1rem;
}
</style>
