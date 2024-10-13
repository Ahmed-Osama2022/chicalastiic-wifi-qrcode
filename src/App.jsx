import { useState } from 'react';
// import QRCode from 'qrcode.react';
import { QRCodeSVG } from 'qrcode.react';

import './App.css';
import logo from './assets/logo.jpg';

function App() {
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [encryptionType, setEncryptionType] = useState('WPA');
  const [hidden, setHidden] = useState(false);

  const [value, setValue] = useState('');

  const wifiQRCodeValue = `WIFI:T:${encryptionType};S:${wifiSSID};P:${wifiPassword};H:${hidden};`;
  return (
    <>
      {/* <div className="p-5 mt-5">TEST Bootstrap...</div> */}
      {/* ----------- Header -----------*/}
      <header className="container-fluid py-3 rounded-bottom-3 shadow">
        <h1 className="p-3 text-center text-md-start ">Chicalastiic</h1>
      </header>
      {/* ----------- Banner for the App -----------*/}
      <main className="container-sm banner shadow rounded-3 mt-4 p-3">
        {/* LOGO */}
        <div className="text-center">
          <div className="img-wrapper ">
            <img src={logo} className="img-fluid" alt="Logo" />
          </div>

          {/* Help message */}
          <h3 className="mt-2">Qr-code generator for Wi-fi password</h3>
        </div>

        <div className="row justify-content-between">
          {/* FORM */}
          <form className="mt-3 col-md-7">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                WI-FI Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type your wi-fi network name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setValue(e.target.value)}
              />
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                WI-FI Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Type your wi-fi network password"
              />
            </div>

            <div className="mb-3">
              <p className="">Select your password encryption type:</p>
              <select className="form-select" aria-label="Default select example">
                <option value="WPA" selected>
                  WPA/WPA2
                </option>
                <option value="WEP">WEP</option>
                <option value="nopass">No password</option>
              </select>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Hidden Network
              </label>
            </div>
            <button type="submit" className="btn submit-btn">
              Create
            </button>
          </form>
          {/* QR - IMAGE */}
          <div className="col-md-4 col-12 text-center mt-3">
            <p>Scan me & join the WIFI</p>
            <div className="img-wrapper m-auto">
              {/* <img src={logo} className="img-fluid m-auto" alt="Logo" /> */}
              <QRCodeSVG
                value={value}
                title={'WI-FI QR-Code Network'}
                size={140}
                bgColor={'#f1f1f1'}
                fgColor={'#121212'}
                level={'H'}
                marginSize={0}
                imageSettings={{
                  src: logo,
                  x: undefined,
                  y: undefined,
                  height: 30,
                  width: 30,
                  opacity: 1,
                  excavate: true,
                }}
              />
            </div>
          </div>
        </div>
      </main>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default App;
