import React from 'react';
import { useState } from 'react';
import '../css/footer.css';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


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
                                <i class="bi bi-facebook "></i>
                                 Facebook
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i class="bi bi-instagram "></i>
                                 Instagram
                            </a>
                        </li>
                        <li className="footer-list-item">
                            <a href="" className="footer-list-item-link">
                                <i class="bi bi-linkedin "></i>
                                 Linkedin
                            </a>
                        </li>
                    </ul>
            </div>
            <div className='grid__colum-2-4'>
              <h3 className='footer-heading'>Map</h3>
            </div>
        </div>
      </div>
      <p className='c1'>&copy; Copyright 2023 My App. All rights reserved.</p>
      <p className='c2'>{time}</p>
    </footer>
  );
};

export default Footer;