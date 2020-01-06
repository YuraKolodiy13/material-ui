import React from 'react'
import './Dropdown.scss'
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';



const Dropdown = () => {

  const [expanded, setExpanded] = React.useState(false);

  return(
    <div className='Dropdown'>
      <Button onClick={() => setExpanded(!expanded)} variant="contained" color="primary">Dropdown</Button>

      <Collapse in={expanded}>
        <ul>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
        </ul>
      </Collapse>

      <div className="container">
        <div className="row">
          <p>Search for your device</p>
          <div className="form-group">
            <input className="devname form-control" type="text"/>
          </div>
          <div className="form-group">
            <a href="/#" className="form-control btn btn-primary submit">Submit</a>
          </div>

          <div className="api">
            Api is ready to Run
          </div>
        </div>
      </div>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum dolor dolores fuga illo illum minima molestiae mollitia, neque nihil non, officiis quam quod temporibus veritatis? Optio ullam unde voluptatibus!</p>
    </div>
  )
};

export default Dropdown;