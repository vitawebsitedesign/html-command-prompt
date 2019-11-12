# What
This NPM package allows you to show command prompt output using responsive HTML5 instead of bitmap images:

* HTML5 markup provides better storage efficiency
* HTML5 elements provide better rendering performance for browser layout engines
* HTML5 components are easier to change in the future, compared to bitmap images
* HTML5 responsive elements render sharper than scaled bitmap

A Vue implementation was chosen to allow easy incremental migration.

# Install
```console
npm i --save html-command-prompt
```

# Usage
This component only needs 3 optional parameters:

* title: a title for the command prompt
* lines: array of strings, which will show as lines in the command prompt
* styles: allows you to apply your own CSS to the component

The below example shows usage from a ES2015 Single Component File:
```javascript
<template>
    <TerminalWindow v-bind:title="my-title.exe" v-bind:lines="lines" />
</template>

<script>
import TerminalWindow from 'html-command-prompt';
export default {
    props: {
        lines: ["line 1", "line 2", "line 3"]
    }
};
</script>
```

# Usage (responsive example)
Just give the parent element "flex" & the component will handle itself.

```
<template>
    <div class="parent">
        <TerminalWindow v-bind:title="my-title.exe" v-bind:lines="lines" />
    </div>
</template>

<script>
import TerminalWindow from 'html-command-prompt';
export default {
    props: {
        lines: ["line 1", "line 2", "line 3"]
    }
};
</script>

<style scoped>
.parent {
    display: flex;
    height: 150px;
    width: 50vw;
}
</style>
```

When theres not enough height to show all lines, the terminal will show a vertical scrollbar.

# Usage (specifying extra styles)
```javascript
<template>
    <TerminalWindow ... v-bind:styles="styles" />
</template>

<script>
import TerminalWindow from 'html-command-prompt';
export default {
    props: {
        ...
        styles: {
            fontFamily: "'Roboto Mono', monospace";
        }
    }
};
</script>
```

# Contributing
Pull requests are welcome.
