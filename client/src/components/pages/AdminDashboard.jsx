import React, { useState, useEffect } from 'react';
import { loadUser, logout } from '../../actions/auth';
import { createMenuItem, getAllMenuItems, removeMenuItem } from '../../actions/menuItems.js';
import Header from '../Header';
import '../../styles/adminDashboard.scss';
import ItalianButton from '../italianButton';
import MenuItem from '../menuItem.jsx';
import UpdateMenuItem from '../updateMenuItem';

import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

const AdminDashboard = ({
  user,
  isAuthenticated,
  allMenuItems,
  logout,
  isLoading,
  loadUser,
  getAllMenuItems,
  removeMenuItem,
  createMenuItem,
}) => {
  useEffect(() => {
    loadUser();
    getAllMenuItems();
  }, []);

  const [currItem, setCurrItem] = useState('');
  const [modal, setModal] = useState(false);
  const [menuItemFile, setMenuItemFile] = useState('');
  const [menuItem, setMenuItem] = useState({
    title: '',
    category: '',
    price: '',
    text: '',
    bestSeller: undefined,
  });

  if ((!isAuthenticated || !user) && isLoading === false) {
    return <Navigate to='/' />;
  }

  const onMenuItemChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
  };
  const onMenuFileChange = (e) => {
    setMenuItemFile(e.target.files[0]);
  };
  const onMenuCheckboxChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: !menuItem.bestSeller });
    console.log(menuItem[e.target.name]);
  };

  const onSubmitClick = () => {
    if (
      menuItem.title !== '' &&
      menuItem.category !== '' &&
      menuItem.price !== '' &&
      menuItem.text !== '' &&
      menuItemFile !== ''
    ) {
      createMenuItem(menuItem, menuItemFile);
    }
  };

  return (
    <div className='adminDashboard'>
      {modal && <UpdateMenuItem item={currItem} setModal={setModal} modal={modal} />}
      <Header />
      <div className='adminDashboardContainer'>
        <div className='adminDashboardLabelFlex LargeBlack'>
          <div className='adminDashboardLabel'>Admin Dashboard</div>
          <div className='logoutButton' onClick={(e) => logout(e)}>
            <Link to='/' className='linkStyle'>
              <ItalianButton text='Logout' width='100px' />
            </Link>
          </div>
        </div>

        <div className='updateAndDeleteMenuItemsContainer'>
          <div className='updateMenuItemsContainer'>
            <div className='MediumBlack'>Create Menu Item</div>
            <div className='createMenuItem'>
              <input
                className='createMenuItemInput'
                name='title'
                placeholder='title'
                type='text'
                onChange={(e) => onMenuItemChange(e)}
              />
              <input
                className='createMenuItemInput'
                name='category'
                placeholder='category'
                type='text'
                onChange={(e) => onMenuItemChange(e)}
              />
              <input
                className='createMenuItemInput'
                name='price'
                placeholder='price'
                type='text'
                onChange={(e) => onMenuItemChange(e)}
              />
              <input
                className='createMenuItemInput'
                name='text'
                placeholder='text'
                type='text'
                onChange={(e) => onMenuItemChange(e)}
              />
              <div className='createMenuItemLabelFlex'>
                <div className='SmallBlack '>BestSeller: </div>
                <input
                  className='createMenuItemCheckbox'
                  name='bestSeller'
                  placeholder='bestSeller'
                  checked={menuItem.bestSeller}
                  type='checkbox'
                  onChange={(e) => onMenuCheckboxChange(e)}
                />
              </div>
              <input
                className='createMenuItemFileInput'
                name='image_filename'
                placeholder='image'
                type='file'
                onChange={(e) => onMenuFileChange(e)}
              />
            </div>
            <div onClick={() => onSubmitClick()}>
              <ItalianButton text='Create' width='250px' />
            </div>
          </div>

          <div className='updateMenuItemsTable'>
            <div className='MediumBlack'>Update Menu Items</div>
            {allMenuItems.map((item) => {
              return (
                <div className='updateMenuItemFlex'>
                  <MenuItem item={item} />
                  <div
                    className='updateMenuItemButton'
                    onClick={() => {
                      setModal(true);
                      setCurrItem(item);
                    }}
                  >
                    <ItalianButton text='Update' width='70px' />
                  </div>
                  <div
                    className='updateMenuItemButton'
                    onClick={() => {
                      removeMenuItem(item);
                      console.log('hit');
                    }}
                  >
                    <ItalianButton text='Delete' width='70px' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className='updateSaleImages'></div>
        <div className='updateBlogs'></div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  allMenuItems: state.menuItems.allMenuItems,
});

export default connect(mapStateToProps, {
  loadUser,
  logout,
  getAllMenuItems,
  removeMenuItem,
  createMenuItem,
})(AdminDashboard);
