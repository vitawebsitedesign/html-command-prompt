<template>
  <transition name="fade" appear>
    <div class="terminal-lines">
      <TerminalLine v-for="(line, index) in lines" v-bind:key="index" v-bind:line="line" />
      <TerminalLine line="_" class="terminal-cursor" />
    </div>
  </transition>  
</template>

<script>
import TerminalLine from '../terminal-line/TerminalLine.vue';

export default {
    props: {
      lines: Array
    },
    components: {
      TerminalLine
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .terminal-lines {
      overflow-y: auto;
      padding: 1%;
  }
  .terminal-cursor {
      animation: blink 1s linear 0s infinite;
      font-weight: bold;
  }
  
  @keyframes blink {
      0%, 49% {
          opacity: 0;
      }
      50%, 100% {
          opacity: 1;
      }
  }
</style>