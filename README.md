# open-text-editor
Opens a file in a text editor


## Configuration

Create a file `~/.open-text-editor` with the command to open your favorite editor. Example for Sublime Text 2 on a Mac:

```
/Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl %s:%s
```

The first `%s` will be replaced with the file path to open and the second `%s` will be replaced with the line number.

## Usage

```javascript
require('open-text-editor').open('/path/to/file', 20, callback)
```

The callback is optional.
