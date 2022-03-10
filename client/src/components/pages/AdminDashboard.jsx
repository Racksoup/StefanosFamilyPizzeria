import React, { useState, useEffect } from 'react';
import { loadUser, logout } from '../../actions/auth.js';
import { createMenuItem, getAllMenuItems, removeMenuItem } from '../../actions/menuItems.js';
import { getAllBlogs, updateBlog, removeBlog, createBlog } from '../../actions/blogs.js';
import { createSaleImage, removeSaleImage, getSaleImages } from '../../actions/saleImages.js';
import Header from '../Header';
import '../../styles/adminDashboard.scss';
import ItalianButton from '../italianButton';
import MenuItem from '../menuItem.jsx';
import UpdateMenuItem from '../updateMenuItem';
import BlogItem from '../blogItem.jsx';

import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

const AdminDashboard = ({
  user,
  isAuthenticated,
  allMenuItems,
  isLoading,
  blogs,
  saleImages,
  logout,
  loadUser,
  getAllMenuItems,
  removeMenuItem,
  createMenuItem,
  getAllBlogs,
  updateBlog,
  removeBlog,
  createBlog,
  createSaleImage,
  removeSaleImage,
  getSaleImages,
}) => {
  useEffect(() => {
    loadUser();
    getAllMenuItems();
    getAllBlogs();
    getSaleImages();
  }, []);
  const [modal, setModal] = useState(false);
  const [toggleDashboard, setToggleDashboard] = useState(0);

  // MenuItem State
  const [currItem, setCurrItem] = useState('');
  const [menuItemFile, setMenuItemFile] = useState('');
  const [menuItem, setMenuItem] = useState({
    title: '',
    category: '',
    price: '',
    text: '',
    bestSeller: undefined,
  });
  // MenuItem Funcs
  const onMenuItemChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
  };
  const onMenuFileChange = (e) => {
    setMenuItemFile(e.target.files[0]);
  };
  const onMenuCheckboxChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: !menuItem.bestSeller });
  };
  const onSubmitMenuItemClick = () => {
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

  // Blogs State
  const [currBlog, setCurrBlog] = useState('');
  const [newBlogFile, setNewBlogFile] = useState('');
  const [newBlog, setNewBlog] = useState({
    title: '',
    poster: '',
    category: '',
    date: '',
    text: '',
    favorite: undefined,
  });
  // Blogs Funcs
  const onBlogChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };
  const onBlogFileChange = (e) => {
    setNewBlogFile(e.target.files[0]);
  };
  const onBlogCheckboxChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: !newBlog.favorite });
  };
  const onSubmitBlogClick = () => {
    if (
      newBlog.title !== '' &&
      newBlog.category !== '' &&
      newBlog.price !== '' &&
      newBlog.text !== '' &&
      newBlogFile !== ''
    ) {
      createBlog(newBlog, newBlogFile);
    }
  };

  // Sale Images State
  const [newSaleImageFile, setNewSaleImageFile] = useState('');
  // Sale Images Funcs
  const onSaleImageChange = (e) => {
    setNewSaleImageFile(e.target.files[0]);
  };
  const onSubmitSaleImageClick = () => {
    if (newSaleImageFile !== '') {
      createSaleImage(newSaleImageFile);
    }
  };

  if (isAuthenticated === false) {
    return <Navigate to='/admin' />;
  }
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

        <div className='adminDashboardSelectorBox'>
          <div className='adminDashboardSelectors'>
            {toggleDashboard !== 0 ? (
              <div
                className='adminDashboardSelectorItem SmallBlack'
                onClick={() => setToggleDashboard(0)}
              >
                Menu Items
              </div>
            ) : (
              <div className='adminDashboardSelectorItemSelected SmallWhite'>Menu Items</div>
            )}
            {toggleDashboard !== 1 ? (
              <div
                className='adminDashboardSelectorItem SmallBlack'
                onClick={() => setToggleDashboard(1)}
              >
                Blogs
              </div>
            ) : (
              <div className='adminDashboardSelectorItemSelected SmallWhite'>Blogs</div>
            )}
            {toggleDashboard !== 2 ? (
              <div
                className='adminDashboardSelectorItem SmallBlack'
                onClick={() => setToggleDashboard(2)}
              >
                Sale Images
              </div>
            ) : (
              <div className='adminDashboardSelectorItemSelected SmallWhite'>Sale Images</div>
            )}
          </div>
          <div className='adminDashboardSelectorBar' />
        </div>

        {toggleDashboard === 0 && (
          <div className='updateAndDeleteMenuItemsContainer'>
            <div className='updateMenuItemsContainer'>
              <div className='createMenuItem'>
                <div className='MediumBlack'>Create Menu Item</div>
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
                  className='createMenuItemFileInput'
                  name='image_filename'
                  placeholder='image'
                  type='file'
                  onChange={(e) => onMenuFileChange(e)}
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
                <Textarea
                  className='createMenuItemInput createMenuItemTextBox'
                  name='text'
                  placeholder='text'
                  type='text'
                  onChange={(e) => onMenuItemChange(e)}
                />
              </div>
              <div onClick={() => onSubmitMenuItemClick()}>
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
                      }}
                    >
                      <ItalianButton text='Delete' width='70px' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {toggleDashboard === 1 && (
          <div className='updateAndDeleteMenuItemsContainer'>
            <div className='updateMenuItemsContainer'>
              <div className='createMenuItem'>
                <div className='MediumBlack'>Create Blog</div>
                <input
                  className='createMenuItemInput'
                  name='title'
                  placeholder='title'
                  type='text'
                  onChange={(e) => onBlogChange(e)}
                />
                <input
                  className='createMenuItemInput'
                  name='category'
                  placeholder='category'
                  type='text'
                  onChange={(e) => onBlogChange(e)}
                />
                <input
                  className='createMenuItemInput'
                  name='poster'
                  placeholder='poster'
                  type='text'
                  onChange={(e) => onBlogChange(e)}
                />
                <input
                  className='createMenuItemFileInput'
                  name='image_filename'
                  placeholder='image'
                  type='file'
                  onChange={(e) => onBlogFileChange(e)}
                />

                <div className='createMenuItemLabelFlex'>
                  <div className='SmallBlack '>Favorite: </div>
                  <input
                    className='createMenuItemCheckbox'
                    name='favorite'
                    placeholder='favorite'
                    checked={menuItem.favorite}
                    type='checkbox'
                    onChange={(e) => onBlogCheckboxChange(e)}
                  />
                </div>
                <Textarea
                  className='createMenuItemInput createMenuItemTextBox'
                  name='text'
                  placeholder='text'
                  type='text'
                  onChange={(e) => onBlogChange(e)}
                />
              </div>
              <div onClick={() => onSubmitBlogClick()}>
                <ItalianButton text='Create' width='250px' />
              </div>
            </div>

            <div className='updateMenuItemsTable'>
              <div className='MediumBlack'>Update Blogs</div>
              {blogs.map((blog) => {
                return (
                  <div className='updateMenuItemFlex'>
                    <BlogItem blog={blog} />
                    <div
                      className='updateMenuItemButton'
                      onClick={() => {
                        setModal(true);
                        setCurrItem(blog);
                      }}
                    >
                      <ItalianButton text='Update' width='70px' />
                    </div>
                    <div
                      className='updateMenuItemButton'
                      onClick={() => {
                        removeBlog(blog);
                      }}
                    >
                      <ItalianButton text='Delete' width='70px' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {toggleDashboard === 2 && (
          <div className='updateAndDeleteMenuItemsContainer'>
            <div className='updateMenuItemsContainer'>
              <div className='createMenuItem'>
                <div className='MediumBlack'>Create Sale Image</div>
                <input
                  className='createMenuItemFileInput'
                  name='image_filename'
                  placeholder='image'
                  type='file'
                  onChange={(e) => onSaleImageChange(e)}
                />
              </div>
              <div onClick={() => onSubmitSaleImageClick()}>
                <ItalianButton text='Create' width='250px' />
              </div>
            </div>

            <div className='updateMenuItemsTable'>
              <div className='MediumBlack'>Delete Sale Image</div>
              {saleImages.map((image) => {
                return (
                  <div className='updateMenuItemFlex'>
                    <img
                      className='updateSaleImageImage'
                      src={`/api/saleimages/image/${image.image_filename}`}
                    />

                    <div
                      className='updateMenuItemButton'
                      onClick={() => {
                        removeSaleImage(image);
                      }}
                    >
                      <ItalianButton text='Delete' width='70px' />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
  allMenuItems: state.menuItems.allMenuItems,
  blogs: state.blogs.blogs,
  saleImages: state.saleImages.saleImages,
});

export default connect(mapStateToProps, {
  loadUser,
  logout,
  getAllMenuItems,
  removeMenuItem,
  createMenuItem,
  getAllBlogs,
  createBlog,
  updateBlog,
  removeBlog,
  createSaleImage,
  removeSaleImage,
  getSaleImages,
})(AdminDashboard);
