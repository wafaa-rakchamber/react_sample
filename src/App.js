import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';



function GetCompanyData({ company_name, company_code }) {
  return (
    <div>
      <h1>{company_name}</h1>
      <h1>{company_code}</h1>

    </div>

  );

}





function App() {

  const [data, setData] = useState(null);
  const [companyCode, setCompanyCode] = useState('650');
  const [dayNumber, setDayNumber] = useState(15);



  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);


  useEffect(() => {
    // fetch(`https://api.github.com/users/saadcs7`)
    // https://chamber-test.com/ords/admin/view_all_req_list/pending_request_list?company_code=undefined&day_number=15
    setLoading(true);
    fetch(`https://chamber-test.com/ords/admin/view_all_req_list/pending_request_list?company_code${companyCode}&day_number=${dayNumber}`)

      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);

  }, []);

  if (loading) return <h1>Loading . . . </h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;

  if (!data) return null;

  return (

    <GetCompanyData
      company_name={data.coo_list_CR[0].company_name}
      company_code={data.coo_list_CR[0].company_code}

    />


  )



}

export default App;
