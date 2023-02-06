import Movie from './Movie';
import batman from './img/batman.jpg'
import superman from './img/superman.jpg'
import spiderman from './img/spiderman.jpg'
import UserImage from './UserImage';
import ClassSample from './ClassSample';
import Person from './Person';
import Student from './Student';

function Playground () {
    const students = [
        {
            fullName: 'Ivan Horvat',
            average: 4.2,
            passed: ['fizika', 'OOP', 'TZK'],
            jmbg: 82367826582
        },
        {
            fullName: 'Stipe Mesić',
            average: 3.1,
            passed: ['PiG', 'sociologija'],
            jmbg: 9834768134
        },
        {
            fullName: 'Miroslav Papić',
            average: 4.7,
            passed: ['matematika', 'biologija', 'kemija', 'likovni'],
            jmbg: 837468728
        },
    ]

    return (
        <>
            {
                students.map((student) => { 
                    return (
                        <div key={student.jmbg}>
                            <Student 
                                fullName={student.fullName}
                                average={student.average}
                                passed={student.passed}
                                jmbg={student.jmbg}
                            />
                            <br />
                        </div>
                    )
                })
            }
            
            {/* <Movie 
                title="Batman"
                image={batman}
            />

            <Movie 
                title="Superman"
                image={superman}
            />

            <Movie 
                title="Spiderman"
                image={spiderman}
            />

            <UserImage />
            <ClassSample />
   
            <Person 
                name="Frane" 
                surname="Bilić" 
                birthday="16.04.1989" 
                address="Špičkovina 2"
                parties={["HNS", "HSLS", "HSS"]}
            />
      
            <Person 
                name="Stipe" 
                surname="Mesić" 
                birthday="23.12.1947" 
                address="Pantovčak 67"
                parties={["HDZ", "SDP", "Možemo"]}
            /> */}
        </>
    )
}

export default Playground;