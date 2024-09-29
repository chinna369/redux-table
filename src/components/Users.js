import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { fetchUsers} from '../redux/actions';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';

const Users = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector(state => state);



  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', render: (text, record) => <a onClick={() => navigate(`/user/${record.id}`)}>{text}</a> },
    { title: 'Name', dataIndex: 'name', key: 'name', render: (text, record) => <a onClick={() => navigate(`/user/${record.id}`)}>{text}</a> },
  ];

//   const columns = [
//     { title: 'Email', dataIndex: 'email', key: 'email' },
//     { title: 'Name', dataIndex: 'name', key: 'name' },
//     { title: 'UserName', dataIndex: 'username', key: 'username' },
//     {
//         title: 'Address',
//         key: 'address',
//         render: (record) => (
//           <span>
//             {record.address.street}, {record.address.suite}, {record.address.city}, {record.address.zipcode}
//           </span>
//         ),
//       },
//       {
//         title: 'Map',
//         key: 'map',
//         render: (record) => (
//           <MapContainer
//             center={[record.address.geo.lat, record.address.geo.lng]}
//             zoom={13}
//             style={{ height: '20px', width: '20px' }}
//           >
//             <TileLayer
//               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
//             />
//             <Marker position={[record.address.geo.lat, record.address.geo.lng]}>
//               <Popup>{record.address.city}</Popup>
//             </Marker>
//           </MapContainer>
//         ),
//       },
//   ];

if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <Table columns={columns} dataSource={users} rowKey="id" />;

//   return <Table dataSource={users} columns={columns} rowKey="id" />;
};

export default Users;
