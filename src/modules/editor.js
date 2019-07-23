const controlKey = process.platform === 'win32' ? 'Ctrl' : 'Cmd';

export default {
  mode: {
    name: 'markdown',
    highlightFormatting: true,
  },
  theme: 'markdown',
  autofocus: true,
  autoCloseTags: true,
  showCursorWhenSelecting: true,
  inputStyle: 'textarea',
  lineNumbers: true,
  lineWrapping: true,
  foldGutter: true,
  tabSize: 2,
  indentUnit: 4,
  electricChars: true,
  styleActiveLine: true,
  matchBrackets: true,
  dragDrop: false,
  autoCloseBrackets: true,
  autoRefresh: true,
  extraKeys: {
    Enter: 'newlineAndIndentContinueMarkdownList',
    // **bold**
    [`${controlKey}-B`]: function(cm) {
      let s = cm.getSelection();
      let t = s.slice(0, 2) === '**' && s.slice(-2) === '**';
      cm.replaceSelection(t ? s.slice(2, -2) : '**' + s + '**', 'around');
    },
    // _italic_
    [`${controlKey}-I`]: function(cm) {
      let s = cm.getSelection();
      let t = s.slice(0, 1) === '_' && s.slice(-1) === '_';
      cm.replaceSelection(t ? s.slice(1, -1) : '_' + s + '_', 'around');
    },
    // `code`
    'Shift-@': function(cm) {
      let s = cm.getSelection();
      let t = s.slice(0, 1) === '`' && s.slice(-1) === '`';
      cm.replaceSelection(t ? s.slice(1, -1) : '`' + s + '`', 'around');
    },
  },
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  styleSelectedText: true,
  // highlightSelectionMatches: {
  // showToken: /\w/, annotateScrollbar: true
  // },
};
