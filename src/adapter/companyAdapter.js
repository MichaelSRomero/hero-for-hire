const fetchCompanies = (companies) => ({type: 'FETCH_COMPANIES', payload: companies})

export const getCompanies = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/companies")
    // return fetch("http://004c4d7c.ngrok.io/companies")
      .then(res => res.json())
      .then(companiesJSON => dispatch(fetchCompanies(companiesJSON)) )
  }
}
