import "./Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/Chart";
// import Chart from '../charts/Chart'
const Main = () => {
  return (
    <main>
      <div className='main__container'>
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className='main__title'>
          <img src={hello} alt='hello' />
          <div className='main__greeting'>
            <h1>Hello Codersbite</h1>
            <p>Welcome to your admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className='main__cards'>
          <div className='cardDashboard'>
            <i
              className='fa fa-user-o fa-2x text-lightblue'
              aria-hidden='true'
            ></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Number of Happy Customers</p>
              <span className='font-bold text-title'>578</span>
            </div>
          </div>

          <div className='cardDashboard'>
            <i
              className='fa fa-balance-scale fa-2x text-red'
              aria-hidden='true'
            ></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Total Sale</p>
              <span className='font-bold text-title'>&#x20B9; 45000 </span>
            </div>
          </div>

          <div className='cardDashboard'>
            <i
              className='fa fa-product-hunt fa-2x text-yellow'
              aria-hidden='true'
            ></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Total Products</p>
              <span className='font-bold text-title'>340</span>
            </div>
          </div>

          <div className='cardDashboard'>
            <i
              className='fa fa-thumbs-up fa-2x text-green'
              aria-hidden='true'
            ></i>
            <div className='card_inner'>
              <p className='text-primary-p'>Shop Rating</p>
              <span className='font-bold text-title'>4.5</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className='charts'>
          <div className='charts__left'>
            <div className='charts__left__title'>
              <div>
                <h1>Daily Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className='fa fa-usd' aria-hidden='true'></i>
            </div>
            <Chart />
          </div>

          <div className='charts__right'>
            <div className='charts__right__title'>
              <div>
                <h1>Stats Reports</h1>
                <p>Cupertino, California, USA</p>
              </div>
              <i className='fa fa-usd' aria-hidden='true'></i>
            </div>

            <div className='charts__right__cards'>
              <div className='card1'>
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className='card2'>
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className='card3'>
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className='card4'>
                <h1>Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>

        {/* showing all products */}
        <h2 style={{textAlign:center}} className="allProducts">All Products</h2>

        <div class='list-group'>
          <div className="row">
            <div className="col"> <img src="" alt=""/> </div>
            <div className="col">Product</div>
            <div className="col">Sale</div>
          </div>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        <div class='list-group'>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        <div class='list-group'>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        <div class='list-group'>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        <div class='list-group'>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        <div class='list-group'>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        <div class='list-group'>
          <a href='#' class='list-group-item list-group-item-action active'>
            Cras justo odio
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Dapibus ac facilisis in
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Morbi leo risus
          </a>
          <a href='#' class='list-group-item list-group-item-action'>
            Porta ac consectetur ac
          </a>
          <a href='#' class='list-group-item list-group-item-action disabled'>
            Vestibulum at eros
          </a>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  )
};

export default Main;
