import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../redux/actions'; // adjust the import path accordingly

const UserDetailsPage = () => {
  const { id } = useParams();  // Get the ID from URL params
  const dispatch = useDispatch();
  
  // Get the state from the Redux store
  const { user, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUserById(id));  // Dispatch action to fetch user data by ID
  }, [dispatch, id]);

  // Check if the data is still loading
  if (loading) return <p>Loading...</p>;

  // Check for any errors
  if (error) return <p>{error}</p>;

  // Check if the user is null or undefined
  if (!user) return <p>No User Found</p>;

  // Render user data
  return (
    <div>
      <h2>{user.name} (ID: {user.id})</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <h3>Address</h3>
      <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      <h3>Company</h3>
      <p><strong>Name:</strong> {user.company.name}</p>
      <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company.bs}</p>
    </div>
  );
};

export default UserDetailsPage;
