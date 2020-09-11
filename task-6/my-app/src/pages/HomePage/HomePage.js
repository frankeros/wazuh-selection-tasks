import React from 'react';
import styles from './HomePage.module.css';
import BasePage from '../BasePage/BasePage';
import { EuiImage, EuiTitle } from "@elastic/eui";

const HomePage = () => (
  <BasePage pageTitle='Home Page' pageId='home'
    content={
      <div className={styles.HomePage} data-testid="HomePage">
        <EuiTitle size='m'><h2>It is a DEMO page</h2></EuiTitle>
        <EuiImage
          hasShadow
          allowFullScreen
          size="fullWidth"
          alt="It is a demo"
          url="/images/home.png"
        />
      </div>
    }></BasePage>
);

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
