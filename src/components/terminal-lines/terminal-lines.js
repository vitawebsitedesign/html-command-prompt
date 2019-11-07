Vue.component('terminal-lines', {
    template: '<transition name="fade" appear><div class="terminal-lines"><terminal-line v-for="(line, index) in lines" v-bind:key="index" v-bind:line="line"></terminal-line><terminal-line line="_" class="terminal-cursor"></terminal-line></div></transition>',
    props: {
      lines: Array
    }
  });
  