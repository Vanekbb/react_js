import style from './Form.css'



export const Form = () => {


    const messageList = [
        {
            author:'',
            text: ''
        }
    ]




        const handleChangeName = (event) => {
            messageList[0].author = event.target.value
        }

        const handleChangeText = (event) => {
            messageList[0].text = event.target.value
        }

        const robotSend = () => {
            const send = messageList[0].author
            const robotSend = document.getElementById('send')
            setTimeout(() => {
                robotSend.innerHTML = "Hi," + send + '!'
            }, 1500);
        }


        return <form className='form'>
        <p><input id='author' type="text" placeholder="Name" onChange={handleChangeName}/></p>
        <p><input type="text" placeholder="Text" onChange={handleChangeText}/></p>
        <p><button type="button" className='btn' onClick={robotSend}>Send</button></p>
        <p id="send"></p>
    </form>

} 