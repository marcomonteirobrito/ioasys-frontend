import React from 'react';
import PropTypes from 'prop-types';

import { LoadingContainer } from './styles';

/**
 * @param {string} className - ClassName do elemento
 */

const Loading = ({ className }) => <LoadingContainer className={className} />;

Loading.propTypes = {
  className: PropTypes.string,
};

Loading.defaultProps = {
  className: 'loading-container',
};

export default Loading;
