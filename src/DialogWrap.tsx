import React from 'react';
import Portal from 'rc-util/lib/PortalWrapper';
import Dialog from './Dialog';
import IDialogPropTypes from './IDialogPropTypes';

export interface IDialogChildProps extends IDialogPropTypes {
  getOpenCount: () => number;
  switchScrollingEffect?: () => void;
}

function noop() {
}

export default class DialogWrap extends React.Component<IDialogPropTypes, any> {
  static defaultProps = {
    visible: false,
    prefixCls: 'rmc-dialog',
    onClose: noop,
  };

  _component: any;
  container: any;

  shouldComponentUpdate({ visible }) {
    return !!(this.props.visible || visible);
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  saveRef = (node) => {
    this._component = node;
  }

  getComponent = (visible, childProps) => {
    const props = {...this.props};
    ['visible', 'onAnimateLeave'].forEach(key => {
      if (props.hasOwnProperty(key)) {
        delete props[key];
      }
    });
    return (
      <Dialog {...props} visible={visible} {...childProps} onAnimateLeave={this.removeContainer} ref={this.saveRef} />
    );
  }

  removeContainer = () => {
    if (this.container) {
      (this.container as any).parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  render() {
    const { visible, getContainer, forceRender } = this.props;
    return (
      <Portal
        visible={visible}
        forceRender={forceRender}
        getContainer={getContainer}
      >
        {(childProps: IDialogChildProps) => {
          return this.getComponent(visible, childProps);
        }}
      </Portal>
    );
  };
}
