<template>
    <div class="terminal-taskbar">
        <div class="icon">
            <slot name="icon">
            </slot>
        </div>
        <transition name="fade" appear>
            <div class="title">
                <slot name="title">
                </slot>
            </div>
        </transition>
    </div>    
</template>

<script>
export default {
    props: {
        lines: []
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
  .icon {
      margin-right: 15px;
  }
  .terminal-taskbar {
      align-items: center;
      background: white;
      display: flex;
      padding: 0.6% 1%;
  }
  .title {
      color: #2B2928;
      font-size: 0.8em;
  }
</style>
