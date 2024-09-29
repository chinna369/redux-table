import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { fetchPosts } from '../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  debugger;
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Body', dataIndex: 'body', key: 'body' },
  ];

  return <Table dataSource={posts} columns={columns} rowKey="id" />;
};

export default Home;
