import React from 'react';

export interface ILazyRenderBoxPropTypes {
  className?: string;
  visible?: boolean;
  hiddenClassName?: string;
  role?: string;
  style?: {};
  forceRender?: boolean;
}

export default class LazyRenderBox extends React.Component<ILazyRenderBoxPropTypes, any> {
  shouldComponentUpdate(nextProps) {
    if (nextProps.forceRender) {
      return true;
    }
    return !!nextProps.hiddenClassName || !!nextProps.visible;
  }
  render() {
    let className = this.props.className;
    if (!!this.props.hiddenClassName && !this.props.visible) {
      className += ` ${this.props.hiddenClassName}`;
    }
    const props: any = {...this.props};
    delete props.hiddenClassName;
    delete props.visible;
    delete props.forceRender;
    props.className = className;
    return <div {...props} />;
  }
}
