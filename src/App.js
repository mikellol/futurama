import React, {useEffect, useState} from 'react';
import "98.css";

function App() {

  const url = 'http://futuramaapi.herokuapp.com/api/v2/characters'
  const [info, setInfo] = useState()

  const fetchCharacters = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setInfo(responseJSON)
  };
  const divStyle = {
    backgroundImage: 'url(https://wallpaperaccess.com/full/2448937.jpg',
  };
  useEffect(() => {
      fetchCharacters()
  }, [])
  
  return (
    <div className='app' style={divStyle}>
      <div className="title-bar">
        <div className="title-bar-text">Futurama API v2</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="container mt-5">
        <div className="container">
          <div className='row'>
            {!info ? 'Loading...' :
              info.map((info, index) => {
                return (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                    <div style={{ width: 270 }} className="window">
                      <div className="title-bar">
                        <div className="title-bar-text">{info.Name}</div>
                        <div className="title-bar-controls">
                          <button aria-label="Minimize" />
                          <button aria-label="Maximize" />
                          <button aria-label="Close" />
                        </div>
                      </div>
                      <div className="window-body">
                        <div className="field-row" style={{ justifyContent: "center" }}>
                          <div className="card" style={{maxWidth: "300px"}}>
                              <img src={info.PicUrl} alt="" />
                              <div className="card-body">
                                  <hr />
                                  <div className="field-row-stacked" style={{width: "200px"}}>
                                    <label>Age</label>
                                    <textarea oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' readOnly value={info.Age}></textarea>
                                    <label>Planet</label>
                                    <input type="text" value={info.Planet} readOnly/>
                                    <label>Status</label>
                                    <input type="text" value={info.Status} readOnly />
                                  </div>
                              </div>    
                          </div>
                        </div>
                      </div>
                    </div>
                </div> 
                )
            })}
          </div>
        </div>
      </div>
      <div className="status-bar bg-secondary text-white">
        <p className="status-bar-field">Page Done By: </p>
        <p className="status-bar-field">Daniel Flores</p>
        <p className="status-bar-field">Isaac Lopez</p>
        <p className="status-bar-field">Miguel Velardez</p>
      </div>
    </div>
  );
}

export default App;
