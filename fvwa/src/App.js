import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import Navbar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
        <div className="row">
          <div className="col-1 bg-dark text-white">
            <Navbar></Navbar>
          </div>
          <div className="col-11">
            <br></br>
            <br></br>
            <h1>Inyección de código</h1>
            <br></br>
            <br></br>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default App;
