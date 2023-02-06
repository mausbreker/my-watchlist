import propTypes from 'prop-types';

function Student (props) {
    return (
        <>
            <div>Ime i prezime: {props.fullName} </div>
            <div>Prosjek: {props.average}</div>
            <div>Položeni kolegiji: {props.passed.join(', ')}</div>
            <div>JMBG: {props.jmbg}</div>
        </>
    )
}

export default Student;

Student.propTypes = {
    fullName: propTypes.string,
    average: propTypes.number,
    passed: propTypes.arrayOf(propTypes.string),
    jmbg: propTypes.number
}