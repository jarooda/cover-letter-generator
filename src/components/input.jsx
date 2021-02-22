import React from 'react'

function Input ({input, setInput}) {

  const formChange = (e) => {
    const {name, value} = e.target
    const newInput = {...input}
    newInput[name] = value
    setInput(newInput)
    localStorage.setItem(name, value)
  }

  const copyTexts = (containerid) => {
    if (document.selection) {
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      const range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
    }
  }

  return (
    <div className="col-6">
      <div className="form-group">
        <label>Hiring Manager Name</label>
        <input type="text" className="form-control" onChange={formChange} name="hiringManager" value={input.hiringManager}/>
      </div>
      <div className="form-group">
        <label>Applied Position</label>
        <input type="text" className="form-control" onChange={formChange} name="appliedPosition" value={input.appliedPosition}/>
      </div>
      <div className="form-group">
        <label>Company Name</label>
        <input type="text" className="form-control" onChange={formChange} name="companyName" value={input.companyName}/>
      </div>
      <div className="form-group">
        <label>Applied City</label>
        <input type="text" className="form-control" onChange={formChange} name="appliedCity" value={input.appliedCity}/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-5"></div>
          <div className="btn btn-success col-2" onClick={() => copyTexts('copied')}>COPY !</div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  )
}

export default Input