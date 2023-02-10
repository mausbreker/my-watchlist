import { useState } from 'react';
import batman from './img/batman.jpg'

const Iskaznica = () => {
    const styles = {
        border: '1px solid black',
        borderRadius: 8,
        width: 300,
        height: 180,
        padding: 20,
        margin: 20,
        textAlign: 'left',
        display: "flex",
        alignItems: "flex-start",
        gap: 20
    };

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [age, setAge] = useState();

    return (
        <>
            <input type="text" placeholder='Ime' onChange={(e) => setName(e.target.value)}/>
            <br />
            <input type="text" placeholder='Prezime' onChange={(e) => setSurname(e.target.value)}/>
            <br />
            <input type="text" placeholder='Dob' onChange={(e) => setAge(e.target.value)}/>
            <br />
            
            <div style={styles}>
                <img src={batman} alt="" />
                <div>
                    <h3 style={{marginTop: 0}}>
                        <i>SDP</i>
                    </h3>
                    <div>Ime: {name}</div>
                    <div>Prezime: {surname}</div>
                    <div>Dob: {age}</div>
                </div>
            </div>
        </>
    );
}
 
export default Iskaznica;