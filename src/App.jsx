import './App.css';
import logo from './assets/logo.jpg';

function App() {
  return (
    <>
      {/* <div className="p-5 mt-5">TEST Bootstrap...</div> */}
      {/* ----------- Header -----------*/}
      <header className="container-fluid py-3 rounded-bottom-3 shadow">
        <h1 className="p-3  text-center text-md-start ">Chicalastiic</h1>
      </header>
      {/* ----------- Banner for the App -----------*/}
      <main className="container-sm banner mt-4">
        {/* LOGO */}
        <div className="text-center text-md-start">
          <div className="img-wrapper ">
            <img src={logo} className="img-fluid" alt="Logo" />
          </div>

          {/* Help message */}
          <h3 className="mt-2">Qr-code generator for Wi-fi password</h3>
        </div>

        <div className="row justify-content-between ">
          {/* FORM */}
          <form className="col-md-7">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn submit-btn">
              Create
            </button>
          </form>
          {/* QR - IMAGE */}
          <div className="col-md-4 col-12 text-center">
            <p>Scan me & join the WIFI</p>
            <div className="img-wrapper m-auto ">
              <img src={logo} className="img-fluid m-auto" alt="Logo" />
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
