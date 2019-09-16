import React, { useState, useEffect} from 'react';

export default function Employee() {
    const [dogName, setDogName ] = useState('Naruto');
    const [person, setPerson] = useState({
        firstName: '',
        lastName: ''
    });

    const handleClick = () => {
        setDogName('Kakashi');
    }

    useEffect(() => {
        setDogName('Yamcha');
        // const newPerson = { firstName: 'Hinata', lastName: 'Neiji' }
        // setPerson(newPerson);
        // HTTP Calls
    }, []);

    return <>
        <h2>state: {dogName}</h2>
        <h2>{person && person.firstName}</h2>
        <button onClick={handleClick} >Change</button>
    </>
}

/* class Employee extends React.Components {
    state = {name: "default name"}
    const handleClick = () => {
        setState({name: "new name!"})
    }
    componentDidMount() {

    }

    render() {
        return <>
            <button onClick={handleClick()}>Click</button>
        </>
    }
}


*/

