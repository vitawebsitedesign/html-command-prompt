Vue.component('terminal-taskbar', {
    template: '<div class="terminal-taskbar"><div class="icon"><slot name="icon"></slot></div><transition name="fade" appear><div class="title"><slot name="title"></slot></div></transition></div>',
    props: {
        lines: []
    }
  });
  