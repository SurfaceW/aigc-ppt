import React from 'react';

export const ImpressStyles: React.FC = () => {
  return (
    <style jsx global>{`
      body {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: #fff;
        color: #333;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
      
      .impress-demo {
        width: 100%;
        height: 100vh;
        overflow: hidden;
      }
      
      #impress {
        width: 100%;
        height: 100%;
      }
      
      .step {
        width: 900px;
        padding: 40px;
        background: white;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0,0,0,0.15);
        text-align: center;
        transition: opacity 0.5s;
      }
      
      .step:not(.active) {
        opacity: 0.3;
      }
      
      h1, h2 {
        color: #2c3e50;
        margin-bottom: 30px;
      }
      
      h1.title {
        font-size: 60px;
        color: #3498db;
        margin-bottom: 20px;
      }
      
      h2 {
        font-size: 40px;
        border-bottom: 2px solid #3498db;
        padding-bottom: 10px;
        display: inline-block;
      }
      
      p {
        color: #555;
        font-size: 24px;
        line-height: 1.5;
      }
      
      p.subtitle {
        font-size: 30px;
        color: #7f8c8d;
      }
      
      .content-box {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
      }
      
      .text-content {
        flex: 1;
        text-align: left;
        padding-right: 20px;
      }
      
      .image-content {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .historical-image {
        max-width: 100%;
        max-height: 300px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transition: transform 0.3s;
      }
      
      .historical-image:hover {
        transform: scale(1.05);
      }
      
      .double-image {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      
      .double-image img {
        max-height: 140px;
      }
      
      .sas-diagram {
        width: 300px;
        height: 300px;
        position: relative;
        background: #f8f9fa;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .triangle {
        width: 200px;
        height: 200px;
        position: relative;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        background: linear-gradient(135deg, #3498db, #2980b9);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .angle {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: 40px;
        color: white;
        text-shadow: 0 2px 5px rgba(0,0,0,0.3);
      }
      
      .clay-tablet {
        width: 300px;
        height: 200px;
        background: #d2b48c;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.3);
      }
      
      .tablet-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .cuneiform {
        font-size: 50px;
        margin-bottom: 20px;
      }
      
      .triangle-symbol {
        font-size: 40px;
      }
      
      .modern-apps {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      
      .app-image {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-size: cover;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
      
      .gps {
        background-color: #3498db;
        position: relative;
      }
      
      .gps:after {
        content: "GPS";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
      }
      
      .building {
        background-color: #e74c3c;
        position: relative;
      }
      
      .building:after {
        content: "建筑";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
      }
      
      .graphics {
        background-color: #2ecc71;
        position: relative;
      }
      
      .graphics:after {
        content: "3D";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: bold;
      }
      
      ul {
        text-align: left;
        font-size: 20px;
        line-height: 1.5;
      }
      
      .overview-title {
        font-size: 100px;
        color: #3498db;
        text-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }
    `}</style>
  );
}; 