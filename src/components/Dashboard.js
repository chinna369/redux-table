import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { fetchPhotos } from '../redux/actions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Thumbnail', dataIndex: 'thumbnailUrl', key: 'thumbnailUrl', render: (url) => <img width={50} src={url} alt="thumbnail" /> },
  ];

  return <Table dataSource={photos} columns={columns} rowKey="id" />;
};

export default Dashboard;
