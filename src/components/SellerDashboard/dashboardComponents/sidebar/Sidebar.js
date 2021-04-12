import "./Sidebar.css";
import logo from "../../assets/logo.png";
import {Link} from 'react-router-dom';
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? 'sidebar_responsive' : ''} id='sidebar'>
      <div className='sidebar__title'>
        <div className='sidebar__img'>
          <img src={logo} alt='logo' />
          <h1>Codersbite</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className='fa fa-times'
          id='sidebarIcon'
          aria-hidden='true'
        ></i>
      </div>

      <div className='sidebar__menu'>
        <div className='sidebar__link active_menu_link'>
          <i className='fa fa-home'></i>
          <a href='#'>Dashboard</a>
        </div>
        <h2>Info</h2>
        <div className='sidebar__link'>
          <i className='fa fa-user-secret' aria-hidden='true'></i>
          <a href='#'>Name: ravindra</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-building-o'></i>
          <a href='#'>Address: 34/6 ranipur khas kauz delhi</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-archive'></i>
          <a href='#'>
            Pickup Location: <br /> 34/6 ranipur khas kauz delhi{' '}
          </a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-handshake-o'></i>
          <a href='#'>
            Contracts: 7710288283 <br />
            ravindrayadav@gmail.com
          </a>
        </div>
        <h2>Add Products</h2>
        <div className='sidebar__link'>
          <i className='fa fa-question'></i>
          <a href='#'>Requests</a>
        </div>
        <div className='sidebar__link'>
          <Link to='/addProduct'>
            <i className='fa fa-sign-out'></i>
            <a href='#'>Add New Product</a>
          </Link>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-calendar-check-o'></i>
          <a href='#'>Special Days</a>
        </div>

        <h2>Sales Report</h2>
        <div className='sidebar__link'>
          <i className='fa fa-money'></i>
          <a href='#'>total Sale &#x20B9; 4556666</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-briefcase'></i>
          <a href='#'>Total Profit: &#x20B9; 4556666</a>
        </div>
        <div className='sidebar__link'>
          <i className='fa fa-files-o'></i>
          <a href='#'>Policy of working</a>
        </div>
        <div className='sidebar__logout'>
          <i className='fa fa-power-off'></i>
          <a href='#'>Log out</a>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
