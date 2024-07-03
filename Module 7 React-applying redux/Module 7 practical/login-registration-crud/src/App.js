import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h3>User Management</h3>
        <UserForm />
        <UserList />
      </div>
    </Provider>
  );
};

export default App;
