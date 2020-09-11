import React, {
  useEffect,
  useState,
} from 'react';
import styles from './ApiPage.module.css';
import BasePage from '../BasePage/BasePage';
import {
  EuiBasicTable,
  EuiSpacer,
  EuiAvatar,
  EuiTitle,
  EuiProgress
} from '@elastic/eui';

import { useSelector, useDispatch } from 'react-redux';
import {
  remove,
  selectUsers,
} from '../../features/users/usersSlice';
import { fetchUsers } from '../../features/users/usersService';


const ApiPage = () => {
  const users = useSelector(selectUsers);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(pageIndex + 1, pageSize));
  }, []);

  const onTableChange = ({ page = {} }) => {
    const { index: pageIndex, size: pageSize } = page;

    setPageIndex(pageIndex);
    setPageSize(pageSize);

    dispatch(fetchUsers(pageIndex + 1, pageSize));
  };

  const columns = [
    {
      field: 'avatar',
      name: 'Avatar',
      render: avatar => (
        <EuiAvatar
          size="xl"
          name="Cat"
          imageUrl={avatar}
        />
      ),
    },
    {
      field: 'first_name',
      name: 'First Name',
      truncateText: true,
    },
    {
      field: 'last_name',
      name: 'Last Name',
      truncateText: true,
    },
    {
      field: 'email',
      name: 'Email',
      truncateText: true,
    },
  ];

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: users.total,
    pageSizeOptions: [3, 5, 8],
  };

  return (
    <BasePage pageTitle='Api Calls Page' pageId='api'
      content={
        <div className={styles.ApiPage} data-testid="ApiPage">
          <EuiTitle size='m'><h2>Users</h2></EuiTitle>
          <EuiSpacer size="xl" />
          {users.isFetching ?
            <EuiProgress size="xs" color="accent" />
            :
            <EuiBasicTable
              items={users.data}
              columns={columns}
              pagination={pagination}
              onChange={onTableChange}
            />
          }
        </div>
      }></BasePage>
  );
};

ApiPage.propTypes = {};

ApiPage.defaultProps = {};

export default ApiPage;
