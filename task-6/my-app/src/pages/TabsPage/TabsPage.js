import React, { Fragment } from 'react';
import styles from './TabsPage.module.css';
import BasePage from '../BasePage/BasePage';
import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui';

const TabsPage = () => {
  const tabs = [
    {
      id: 'cobalt--id',
      name: 'Cobalt',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>Cobalt</h3>
          </EuiTitle>
          <EuiText>
            Cobalt is a chemical element with symbol Co and atomic number 27.
            Like nickel, cobalt is found in the Earth&rsquo;s crust only in
            chemically combined form, save for small deposits found in alloys of
            natural meteoric iron. The free element, produced by reductive
            smelting, is a hard, lustrous, silver-gray metal.
          </EuiText>
        </Fragment>
      ),
    },
    {
      id: 'dextrose--id',
      name: 'Dextrose',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>Dextrose</h3>
          </EuiTitle>
          <EuiText>
            Intravenous sugar solution, also known as dextrose solution, is a
            mixture of dextrose (glucose) and water. It is used to treat low
            blood sugar or water loss without electrolyte loss.
          </EuiText>
        </Fragment>
      ),
    },
    {
      id: 'hydrogen--id',
      name: (
        <span>
          <EuiIcon type="heatmap" />
          &nbsp;Hydrogen
        </span>
      ),
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>Hydrogen</h3>
          </EuiTitle>
          <EuiText>
            Hydrogen is a chemical element with symbol H and atomic number 1.
            With a standard atomic weight of 1.008, hydrogen is the lightest
            element on the periodic table
          </EuiText>
        </Fragment>
      ),
    },
    {
      id: 'monosodium_glutammate--id',
      name: 'Monosodium Glutamate',
      content: (
        <Fragment>
          <EuiSpacer />
          <EuiTitle>
            <h3>Monosodium Glutamate</h3>
          </EuiTitle>
          <EuiText>
            Monosodium glutamate (MSG, also known as sodium glutamate) is the
            sodium salt of glutamic acid, one of the most abundant naturally
            occurring non-essential amino acids. Monosodium glutamate is found
            naturally in tomatoes, cheese and other foods.
          </EuiText>
        </Fragment>
      ),
    },
  ];

  return (
    <BasePage pageTitle='Navigation Tabs Page' pageId='tabs'
      content={
        <div className={styles.TabPage} data-testid="TabPage">
          <EuiTitle size='m'><h2>It is a DEMO page</h2></EuiTitle>
          <EuiTabbedContent
            tabs={tabs}
            initialSelectedTab={tabs[1]}
            autoFocus="selected"
            onTabClick={tab => {
              console.log('clicked tab', tab);
            }}
          />
        </div>
      }></BasePage>
  );
};

TabsPage.propTypes = {};

TabsPage.defaultProps = {};

export default TabsPage;
