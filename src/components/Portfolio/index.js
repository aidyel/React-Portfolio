import React from 'react';

export default function Projects(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-sm">
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={require(`../../img/projects/dadabase.png`)} alt="" />
        <div className="card-body">
          <h5 className="card-title">Dadabase</h5>
          <p className="card-text">This application users can post jokes and interact with other users by commenting and liking the jokes.</p>
          <a href="https://github.com/Jesse-Lemieux/Dadabase" className="btn btn-primary">Repo Link</a>
        </div>
      </div>
      </div>
     
      
       <div className="col-sm">
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={require(`../../img/projects/budgetTracker.png`)} alt="" />
        <div className="card-body">
          <h5 className="card-title">Budget tracker</h5>
          <p className="card-text">Budget tracker is an application that allows users to access their bank information with offline functionality. .</p>
          <a href="https://github.com/aidyel/budget-tracker" className="btn btn-primary">Repo Link</a>
        </div>
      </div>
      </div>
    
            <div className="col-sm">
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={require(`../../img/projects/noteTaker.png`)} alt="" />
        <div className="card-body">
          <h5 className="card-title">Note Taker</h5>
          <p className="card-text"> This application allows users to write, save, and delete notes </p>
          <a href="https://github.com/aidyel/Note-Taker/blob/main/README.md" className="btn btn-primary">Repo Link</a>
        </div>
      </div>
      </div>
    
      <div className="col-sm">
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={require(`../../img/projects/genarator.png`)} alt="" />
        <div className="card-body">
          <h5 className="card-title">Team Profile Generator</h5>
          <p className="card-text"> This is a command line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.</p>
          <a href="https://github.com/aidyel/Team-Profile-Generator" className="btn btn-primary">Repo Link</a>
        </div>
      </div>
      </div>

    </div>
    </div>
    </div>
  );
}
