import { ReactNode } from 'react';

type IStringOrHtmlElement = string | HTMLElement;

interface IDialogPropTypes {
  className?: string;
  style?: {};
  mask?: boolean;
  children?: any;
  afterClose?: () => void;
  onClose?: (e: any) => void;
  closable?: boolean;
  maskClosable?: boolean;
  visible?: boolean;
  title?: ReactNode;
  footer?: ReactNode;
  transitionName?: string;
  maskTransitionName?: string;
  animation?: any;
  maskAnimation?: any;
  wrapStyle?: {};
  bodyStyle?: {};
  maskStyle?: {};
  prefixCls?: string;
  wrapClassName?: string;
  onAnimateLeave?: () => void;
  zIndex?: number;
  maskProps?: any;
  wrapProps?: any;
  getContainer?: IStringOrHtmlElement | (() => IStringOrHtmlElement);
  forceRender?: boolean;
}

export default IDialogPropTypes;
