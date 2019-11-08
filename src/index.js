import Vue from 'vue';
import TerminalWindow from './components/terminal-window/TerminalWindow.vue';

new Vue({
	el: '#app',
	render: h => h(TerminalWindow, {
        props: {
            styles: {
                fontFamily: "'Roboto Mono', monospace"
            },
            lines: [
                'Took 1003ms',
                'Took 1004ms',
                'Took 1003ms',
                'Took 1004ms',
                'Took 1003ms',
                'Took 1004ms',
                'Took 1003ms',
                'Took 1004ms',
                'Took 1003ms',
                'Took 1004ms'
            ]
        }
    })
});
