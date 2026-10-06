// Code SubmitButton Component Here

function SubmitButton (){
    function handleSubmit(event){
        event.preventDefault();
    }

    const handleMouseEnter = () => {
        console.log('Mouse Entering');
    }

    const handleMouseLeave = () => {
        console.log('Mouse Exiting');
    }

    return(
        <>
        <button onClick={handleSubmit} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Submit Password</button>
        </>
    )
}

export default SubmitButton;