import React  from 'react';
import './App.css';
import CountryList from './CountryList';
import SearchBox from './SearchBox';
import Box from '@material-ui/core/Box'
import Logo3 from './Logo3.jpg';
class App extends React.Component{
  
  constructor(){
    super();
    this.state = {
     countries:[],
     stats:[],
     searchField:''
    }
  }
  
  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/countries')
    const countries = await resp.json()
    this.setState({countries})
    this.state.countries.forEach(async country => {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
      const data = await resp.json()
      if(data.length)
      this.setState(prevState => (
        {stats:prevState.stats.concat({...data[data.length - 100],CountryCode:country.ISO2})}
      ))
    })
  }
  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {stats,searchField} = this.state
    console.log(stats);
    const filtCountry1 = stats.filter(country =>(
      country.Country
    ))
    const filtCountry2 = stats.filter(country =>(
      country.Country.toLowerCase().includes(searchField.toLowerCase())
    ))
    return(
      <div className="navigation">
        <a href="https://www.linkedin.com/in/hritobrotosanyal/"><img src={Logo3} alt="Logo3"></img> </a>
        
      <div className="App">
        {/*<h1>Enter a country name to find</h1>*/}
        <div className="siteintro">
          <Box color="white"  p={3}>
            *This site displays the covid data for various countries but due to requests load it is unable to show all the countries<br></br>
            *These results are for a particular day and not the total, i.e., recovered is recovered that day and not in total
          </Box>
        </div>
        
        <SearchBox placeholder="_______________________________________________________ " handleChange={this.handleChange}/>
        <h1>Search Results shown here:</h1>
        <CountryList stats = {filtCountry2}/>
        <br></br>
        <h1>Actual List:</h1>
        <CountryList stats = {filtCountry1}/>
    </div>
    </div>
    )
  }
}

export default App;