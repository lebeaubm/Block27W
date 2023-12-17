import { useState } from 'react'

const Form = () => {
    const [userName, setUsername] = useState("")

    return (
        <div>

            <form on submite="">

                <label>
                    Username:
                    <input

                        value={userName}
                        onChange={(event) => {
                            setUsername(event.target.value)
                            console.log(userName)
                        }}>

                    </input>


                </label>
                <button type="submit"> Submit </button>

            </form>

        </div>

    )






}

export default Form