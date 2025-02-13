import React from 'react';
import '../css/footer.css';


// import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  return (
    <footer className="footer">
      <div className='grid'>
        <div className='grid-row'>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Chăm sóc khách hàng</h3>
              <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">Trung tâm trợ giúp</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">ZTC Mall</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">Hướng dẫn mua hàng</a>
                        </li>
                    </ul>
            </div>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Giới thiệu</h3>
              <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">Giới thiệu</a>
                        </li>
                        <li class="footer-list-item">
                            <a href="" className="footer-list-item-link">Tuyển dụng</a>
                        </li>
                        <li class="footer-list-item">
                            <a href="" className="footer-list-item-link">Điều khoảng</a>
                        </li>
                    </ul>
            </div>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Danh mục</h3>
            </div>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Theo dõi</h3>
              <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i className="fa-brands fa-facebook"></i>
                                Facebook</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i className="fa-brands fa-instagram"></i>
                                Instagram</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i className="fa-brands fa-linkedin"></i>
                                Linkedin</a>
                        </li>
                    </ul>
            </div>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Map</h3>
            </div>
        </div>
      </div>
      <p className='c1'>&copy; 2023 My App. All rights reserved.</p>
      <p className='c2'> {hours}:{minutes}:{seconds} - {day}/{month}/{year} </p>
    </footer>
  );
};

export default Footer;