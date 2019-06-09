const fetchCompanies = (companies) => ({type: 'FETCH_COMPANIES', payload: companies})

export const getCompanies = () => {
  return (dispatch) => {
    return fetch("http://localhost:3000/companies")
      .then(res => res.json())
      .then(companiesJSON => dispatch(fetchCompanies(companiesJSON)) )
  }
}
