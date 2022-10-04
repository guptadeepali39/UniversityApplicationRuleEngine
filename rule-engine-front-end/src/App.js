import './App.css';
import {GoogleLoginButton} from 'react-social-login-buttons';
import {LoginSocialGoogle} from 'reactjs-social-login';

function App() {

  return (
    <div>
      <LoginSocialGoogle
      client_id={'574239648970-70jrb5es9jna7l9c08a19nh7c33moudh.apps.googleusercontent.com'}
      scope='openid profile email'
      discoveryDocs='claims_supported'
      access_type='offline'
      onResolve={({
        provider, data
      })=>{
        console.log(provider, data);
      }}
      onReject={(err)=>{
        console.log(err)
      }}>
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  );
}

export default App;
