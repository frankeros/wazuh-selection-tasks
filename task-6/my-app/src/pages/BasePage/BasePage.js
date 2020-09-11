import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './BasePage.module.css';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
} from '@elastic/eui';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {
  increment,
  selectPageView,
} from '../../features/pages/pagesSlice';


const BasePage = (props) => {
  const count = useSelector(state => selectPageView(state, props.pageId), shallowEqual);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(increment(props.pageId));
  }, []);

  return (
    <div className={styles.BasePage} data-testid="BasePage">
      <EuiPage>
        <EuiPageBody component="div">
          <EuiPageHeader>
            <EuiPageHeaderSection>
              <EuiTitle size="l">
                <h1>{props.pageTitle}</h1>
              </EuiTitle>
            </EuiPageHeaderSection>
            <EuiPageHeaderSection>
              You saw this page {count} times during this session.
            </EuiPageHeaderSection>
          </EuiPageHeader>
          <EuiPageContent verticalPosition="center" horizontalPosition="center" className={styles.PageContent}>
            <EuiPageContentBody>{props.content}</EuiPageContentBody>
          </EuiPageContent>
        </EuiPageBody>
      </EuiPage>
    </div>
  );
};

BasePage.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  pageId: PropTypes.string.isRequired,
};

BasePage.defaultProps = {};

export default BasePage;
