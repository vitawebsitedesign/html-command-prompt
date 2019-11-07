Vue.component('terminal-window', {
    template: '<div class="terminal-window" v-bind:style="styles"><slot /></div>',
    props: {
        lines: Array,
        styles: Object
    }
  });
  