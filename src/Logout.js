import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Logout = () => {
  const koek = cookies.get('data');

  if (!koek) {
    console.log('Cookie data not found');
    window.location.href = "/Login";
  }

  cookies.remove('data');

  console.log(JSON.stringify({
    email: koek.email,
        password: koek.password,
        device_name: koek.device_name,
        token: koek.token,
  }));

fetch('http://127.0.0.1:8000/api/logout', {
      method: 'POST',
      headers: {
        'Accept': 'application/login',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: koek.email,
        device_name: koek.device_name,
        token: koek.token,
      })
    }).then((response) => response.json())
    .then((data) => {
      
      // zet je terug na inlog scherm
      window.location.href = "/Login";
    })
      .catch(error =>{
        console.log(error)
      })
    };
      export default Logout;