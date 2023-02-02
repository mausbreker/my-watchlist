function Person(props) {
    console.log(props);
    return (
        <>
            <div>
                My name is {props.name}
            </div>
            <div>
                My surname is {props.surname}
            </div>
            <div>
                Birthday: {props.birthday}
            </div>
            <div>
                Address: {props.address}
            </div>
            <div>
                Parties: {props.parties.map((party, index) => <div key={index}>{party}</div>)} 
            </div>
            <hr />
        </>
    )
}

export default Person;