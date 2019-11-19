# What
This NPM package allows you to show command prompt output using responsive HTML5 instead of bitmap images:

![command prompt example](https://media.githubusercontent.com/media/vitawebsitedesign/html-command-prompt/master/img/terminal.jpg "command prompt example")

* HTML5 markup provides better storage efficiency
* HTML5 elements provide better rendering performance for browser layout engines
* HTML5 components are easier to change in the future, compared to bitmap images
* HTML5 responsive elements render sharper than scaled bitmap

A Vue implementation was chosen to allow easy incremental migration.

# Install
```console
npm i -P html-command-prompt
```

[https://www.npmjs.com/package/html-command-prompt](https://www.npmjs.com/package/html-command-prompt)

# Usage
Example usage inside a ES2015 Vue Single Component File:
```javascript
<template>
    <TerminalWindow v-bind:title="title" v-bind:lines="lines" />
</template>

<script>
import TerminalWindow from 'html-command-prompt';

const output = `
Counting objects: 9, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 903 bytes | 43.00 KiB/s, done.
Total 9 (delta 5), reused 0 (delta 0)
`;

export default {
    data: function() {
        return {
            title: "MINGW64:/c/dev/html5-command-prompt-webpack-sandbox",
            lines: output.split('\n')
        };
    },
    components: {
        TerminalWindow
    }
};
</script>
```

## Options
* title: a title for the command prompt
* lines: array of strings, which will show as lines in the command prompt
* styles: allows you to apply your own CSS to the component. Example usage is shown further below.

# Usage (responsive example)
Just give the parent element "flex" & the component will handle itself.

```
<template>
    <div class="parent">
        <TerminalWindow ... />
    </div>
</template>

<script>
import TerminalWindow from 'html-command-prompt';

export default {
    data: function() {
        return {
            title: ...,
            lines: ...
        };
    },
    components: {
        TerminalWindow
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
    data: function() {
        return {
            title: ...,
            lines: ...,
            styles: {
                fontFamily: "'Roboto Mono', monospace";
            }
        };
    },
    components: {
        TerminalWindow
    }
};
</script>
```

# Contributing
Pull requests are welcome.
