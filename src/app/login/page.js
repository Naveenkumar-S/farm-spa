'use client'
import { login } from '@/app/actions'
import Image from 'next/image'

export default function Login() {

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5 py-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Farm Management</a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Farms</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Main content */}
      {/* https://codepen.io/norven/pen/dyjNwBJ?anon=true&view=pen */}
      <main>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">Farmingg</h1>
              <p className="col-lg-10 fs-4">Let's Do Farming!</p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              {/* https://everythingcs.dev/blog/get-form-values-react-nextjs/ */}
              <form action={login} className="p-4 p-md-5 border rounded-3 bg-light">
                <div className="form-floating mb-3">
                  <input type="email" name="userId" className="form-control" id="userId" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" name="pwd" className="form-control" id="pwd" placeholder="Password" />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                <hr className="my-4" />
                <small className="text-muted">
                  <center>Every user who becomes a member accepts the <i>terms</i> agreement.</center>
                </small>
              </form>
            </div>
          </div>
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-muted">© 2025 Farmingg</p>
            <a href="#"
              className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              data-bs-toggle="modal" data-bs-target="#exampleModal">
              <Image src="https://img.icons8.com/ios/2x/t-key.png" width={30} height={30} alt='T&C' />
            </a>
            <ul className="nav col-md-4 justify-content-end">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Terms</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Policy</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Help</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact</a></li>
            </ul>
          </footer>
        </div>
      </main>
      {/* Model Block */}
      {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body p-4 text-center">
              <h5 className="mb-0">Are u feeling good?</h5>
              <p className="mb-0">Codepen: @norven.</p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button type="button"
                className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"><strong>I like
                  this</strong></button>
              <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0"
                data-bs-dismiss="modal">No thanks</button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
