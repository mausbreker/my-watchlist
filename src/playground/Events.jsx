const Events = () => {
    const handleClick = () => {alert("Alert")};

    const handleInputChange = (event) => {console.log(event.target.value)};

    return (
        <>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleClick}>Click...</button>
            <button onClick={() => alert('Test alert')}>
                Okini alert inline
            </button>
            <h1 onMouseOver={() => console.log('Naslov hoveran')}>ReactJS events - vježba</h1>
        </>
    )
}

export default Events;