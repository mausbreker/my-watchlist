import { useState } from "react";

const Accordion = () => {
    const styles = {
        border: '1px solid black',
        margin: 30,
        marginTop: 0,
        marginBottom: 0,
        textAlign: 'left'
    }

    const [isActive, setIsActive] = useState();

    return (
        <div style={styles}>
            <div 
                style={{padding: '8px 16px'}} 
                onClick={() => setIsActive(!isActive)}
                >Pitanje ↓
            </div>
            {
                isActive && 
                    <div style={{borderTop: '1px solid silver', padding: '8px 16px'}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis magnam, molestias nulla error velit maxime tempora, odio quas aut amet ex nesciunt hic ipsam! Doloremque laborum cupiditate cumque consequatur iure!
                    </div>
            }
        </div>
    );
}
 
export default Accordion;