import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './Loading.less';

export default class Loading extends Component {
  render() {
    let { tip } = this.props;

    return (
      <div className={styles.loading}>
        <div className={styles.loading_mask}>
          <div className={styles.loading_outter}>
            <div className={styles.loading_ring} />
            <div className={styles.loading_text}>{ tip }</div>
          </div>
        </div>
      </div>
    );
  }
}

Loading.propTypes = {
  tip: PropTypes.string,
};

Loading.newInstance = function newNotificationInstance(properties) {
  let props = properties || {};
  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(React.createElement(Loading, props), div);
  
  return {
    destroy() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
  };
};