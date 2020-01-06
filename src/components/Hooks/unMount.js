import React, {useState, useEffect} from 'react';

const usePlanetInfo = (id) => {
  const [name, setName] = useState(null);
  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.co/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name));
    return () => cancelled = true;
  }, [id]);
  return name;
};

const UnMount = props => {

  const [visible, setVisible] = useState(true);
  const name = usePlanetInfo(props.someValue)


  useEffect(() => {
    console.log('mount UnMount comp');
    let notification = setTimeout(() => setVisible(false), 5000);
    return () => {
      console.log('componentWillUnmount UnMount comp');
      clearTimeout(notification);
    }
  }, []);



  return(
    <div>
      <p>{props.someValue} - {name}</p>
      {visible ? <div>Notification</div> : null}
    </div>
  )
};

export default UnMount