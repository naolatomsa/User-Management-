import React from 'react'
import { useEffect, useState } from 'react';
import TopBar from './Topbar'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import './edituser.css'




const UserUpdateProfile = () => {

    const [location, setLocation] = useState('');
    const [countries, setCountries] = useState([]);
    const [showCountriesList, setShowCountriesList] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const fetchCountries = async () => {
          try {
            const response = await axios.get('https://restcountries.com/v2/all');
            setCountries(response.data);
          } catch (error) {
            console.error('Error fetching countries:', error);
          }
        };
    
        fetchCountries();
      }, []);
      const handleIconClick = () => {
        setShowCountriesList(!showCountriesList);
      };
    
      const handleCountryChange = (selectedCountry) => {
        setLocation(selectedCountry.name);
        setShowCountriesList(false);
      };
      const handleUserUpdateProfile = () => {

        navigate('/userpro')
    
      };
    
  return (
    <>
    <TopBar />
    <div className="form-container adduser">

        <form className='form editform' action='#'>
        <div className='userprofile'>

            <a onClick={handleUserUpdateProfile} className='mypro'>My profile</a>
            <a className='updatepro'>Update profile</a>
            </div>
            <div></div>
        <div className='input3'>
            <input type='text' placeholder='first name' required/>
            </div>
        <div className='input2'>
        <input type="text" placeholder="last name" required/>
        </div>
        <div className='input1' style={{width:'300px', border: 'solid 1px #38A899 '}} >
          <label htmlFor="gender">Gender:<br></br></label>
        <select id="gender" name="gender">
            <option value="male" >Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
          </div>
            <div className='input3'>
            <input type='tel' placeholder='phone' required/>
            </div>
            <div className='input-containeradduser'>
              <div className='inputcountry'>
                <input
                  type='text'
                  placeholder='Location'
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <span className='icon' style={{cursor: 'pointer'}}onClick={handleIconClick}>
                  &#x25BC;
                </span>
              </div>
              {showCountriesList && (
                <select  style={{width: '50px'}}
                  className='countries-list'
                  onChange={(e) =>
                    handleCountryChange(
                      countries.find((country) => country.name === e.target.value)
                    )
                  }
                >
                  {countries
                    .filter((country) =>
                      country.name.toLowerCase().includes(location.toLowerCase())
                    )
                    .map((country) => (
                      <option key={country.alpha3Code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                </select>
              )}
            </div>

            <div className='input2'>
            <input type='content' placeholder='user name' required/>
            </div>
            <div className='input3'>
            <input type='password' placeholder='password' required/>
            </div>
        <div className='input2'>
        <input type="password" placeholder="confirm password" required/>
        </div>
            <div className='input6'>
            <button>Update</button>
            </div>
        </form>

    </div>
    </>
  )
}

export default UserUpdateProfile