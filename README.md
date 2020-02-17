# @gem-mine/rmc-dialog
---

react dialog component for mobile

fork from [m-dialog](https://github.com/react-component/m-dialog)

## Install
```
  yarn add @gem-mine/rmc-dialog
```

## Usage

```js
var Dialog = require('rmc-dialog');

ReactDOM.render(
  <Dialog title={title} onClose={callback1} visible>
      <p>first dialog</p>
  </Dialog>
), document.getElementById('t1'));

// use dialog
```

## API

### rmc-dialog(web)

| name     | description    | type     | default      |
|----------|----------------|----------|--------------|
| prefixCls | The dialog dom node's prefixCls | String | `rmc-dialog` |
| className | additional className for dialog | String |  |
| wrapClassName | additional className for dialog wrap | String |  |
| style | Root style for dialog element.Such as width, height | Object | {} |
| zIndex | z-index | Number |  |
| bodyStyle | body style for dialog body element.Such as height | Object | {} |
| maskStyle | style for mask element. | Object | {} |
| visible | current dialog's visible status | Boolean | false |
| animation | part of dialog animation css class name | String |  |
| maskAnimation | part of dialog's mask animation css class name | String |  |
| transitionName | dialog animation css class name | String |  |
| maskTransitionName | mask animation css class name | String |  |
| title | Title of the dialog | String|React.Element |  |
| footer | footer of the dialog | React.Element |  |
| closable | whether show close button | Boolean | true |
| mask | whether show mask | Boolean | true |
| maskClosable | whether click mask to close | Boolean | true |
| onClose | called when click close button or mask | function |  |
| forceRender | Create dialog dom node before dialog first show | Boolean | false |
| getContainer | to determine where Dialog will be mounted | (): HTMLElement | |

## Development

```
npm install
npm start
```

## License

rmc-dialog is released under the MIT license.
