import { useState } from 'react'
// import '../BaseAssets/sellerDashboardPage.css';
import Main from './SellerDashboard/dashboardComponents/main/Main'
import Navbar from './SellerDashboard/dashboardComponents/navbar/Navbar'
import Sidebar from './SellerDashboard/dashboardComponents/sidebar/Sidebar'
const SellerDashboardPage = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }
  return (
    <section>
      {/* <div className='containerDashboard'> */}
      {/* <div
          className='baseDashboardContainer container'
        >
          <div
            className='leftside'
          >
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          </div>
          <div
            className='rightside'
          >
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
            <Main />
          </div>
        </div> */}
      <div
        style={{ marginLeft: '0', marginTop: '-30px' }}
        className='BasecontainerDashboard'
      >
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <div  className="dashboardContent">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              width: '100vw',
              marginBottom:'-2.9vh'
            }}
            className='dashboardDivision'
          >
            <Main />
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
}

export default SellerDashboardPage;
