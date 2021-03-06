import Navbar from './Navbar'
import * as React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode,
  noPadding?: boolean,
  whiteNavbar?: boolean,
  selectedRoute?: string,
}
interface State { }

export default class HomePage extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="alc-page">
        <Navbar whiteNavbar={this.props.whiteNavbar} selectedRoute={this.props.selectedRoute} />
        <div className={cx('alc-page-body', { 'no-padding': this.props.noPadding })} >
          {this.props.children}
        </div>
      </div>
    );
  }
}
