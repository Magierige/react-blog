import Cookies from 'universal-cookie';

const cookies = new Cookies();
const data = cookies.get('data');



const Dash = () => {
  if (!data) {
    window.location.href = "/Login";
  }
  console.log(data);
    return(
      <div>
        <h1 className='text-center text-xl'>Dashboard</h1>
        <h1 className='text-center text-l'>Hi {data.name} en welkom</h1>
      </div>
    ); 
  };
  
  export default Dash;