import useLocalStorageState from 'use-local-storage-state';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';
import logo from './assets/logo.jpg';

function App() {
  const [wifiSSID, setWifiSSID] = useLocalStorageState('wifiSSID', {
    defaultValue: '',
  });
  const [wifiPassword, setWifiPassword] = useLocalStorageState('wifiPASS', {
    defaultValue: '',
  });
  const [encryptionType, setEncryptionType] = useState('WPA');
  const [hidden, setHidden] = useState(false);

  const [wifiQRCodeValue, setWifiQRCodeValue] = useLocalStorageState('wifiQrVal', {
    defaultValue: '',
  });
  const [done, setDone] = useState(false);

  setTimeout(() => {
    !done ? done : setDone(false);
  }, 3500);

  // console.log(hidden);

  function submitHandler(e) {
    e.preventDefault();
    setWifiQRCodeValue(`WIFI:T:${encryptionType};S:${wifiSSID};P:${wifiPassword};H:${hidden};`);
    setDone(true);
  }

  return (
    <>
      {/* <div className="p-5 mt-5">TEST Bootstrap...</div> */}
      {/* ----------- Header -----------*/}
      <header className="container-fluid py-2 rounded-bottom-3 shadow">
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
                placeholder="Type your wi-fi network name"
                className="form-control"
                id="exampleInputEmail1"
                required
                value={wifiSSID}
                onChange={(e) => setWifiSSID(e.target.value)}
              />
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
                value={wifiPassword}
                required
                onChange={(e) => setWifiPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <p className="">Select your password encryption type:</p>
              <select
                value={encryptionType}
                onChange={(e) => setEncryptionType(e.target.value)}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="WPA" selected>
                  WPA/WPA2
                </option>
                <option value="WEP">WEP</option>
                <option value="nopass">No password</option>
              </select>
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                checked={hidden}
                onChange={(e) => setHidden(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Hidden Network
              </label>
            </div>
            <button type="submit" className="btn submit-btn" onClick={submitHandler}>
              Create
            </button>
            <p
              className={`mt-2 ${!done ? 'd-none' : 'd-block'}`}
              style={{ color: 'rgba(0 ,0 ,0 ,0.45)' }}
            >
              Done with success, scan now!
            </p>
          </form>
          {/* QR - IMAGE */}
          <div className="col-md-4 col-12 text-center mt-3">
            <p>Scan me & join the WIFI</p>
            <div className="img-wrapper m-auto">
              {/* <img src={logo} className="img-fluid m-auto" alt="Logo" /> */}
              <QRCodeSVG
                value={wifiQRCodeValue}
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
