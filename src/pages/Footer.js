import React from 'react';
import { useState } from 'react';
import '../css/footer.css';


// import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
  let day = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  const [time, setTime] = useState(`${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`);

  setInterval(() => {
    currentDate = new Date();
    year = currentDate.getFullYear();
    month = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    day = currentDate.getDate();
    hours = currentDate.getHours();
    minutes = currentDate.getMinutes();
    seconds = currentDate.getSeconds();

    setTime(`${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`);
  }, 1000)
  const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.1991288208391!2d105.77892893781716!3d10.033643724782094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881f9a732075%3A0xfa43fbeb2b00ca73!2sCUSC%20-%20Cantho%20University%20Software%20Center!5e0!3m2!1svi!2s!4v1739939858544!5m2!1svi!2s";

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
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">Tuyển dụng</a>
                        </li>
                        <li className="footer-list-item">
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
                                <i className="bi bi-facebook "></i>
                                 Facebook
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i className="bi bi-instagram "></i>
                                 Instagram
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i className="bi bi-linkedin "></i>
                                 Linkedin
                            </a>
                        </li>
                    </ul>
            </div>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Map</h3>
              <div className="footer-map">
              <iframe title="Contact" src={mapLocation} width="100%" height="300%" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
              </div>
            </div>
        </div>
      </div>
      <p className='c1'>&copy; Copyright 2023 My App. All rights reserved.</p>
      <p className='c2'>{time}</p>
    </footer>
  );
};

export default Footer;