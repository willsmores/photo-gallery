import "./Login.scss";

export default function Login(props) {
  return (
    <form className="Login">
      <h1>Photo Gallery</h1>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" placeholder="Enter your email" id="email" />
      <button>Login</button>
    </form>
  );
}