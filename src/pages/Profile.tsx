import React, { FC, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { selectName, selectVisible } from "/src/store/profile/selectors"
import { toggleProfile } from "/src/store/profile/slice"
import { changeName } from "/src/store/profile/slice"

export const Profile: FC = () => {

    const dispatch = useDispatch()

    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)
    const [value, setValue] = useState('')

    return (
        <div>
            <h2>Profile page</h2>
            <p>name: {name}</p>
            <p>visible: </p>
            <input type="checkbox" checked={visible} />
            <button onClick={() => dispatch(toggleProfile())}>change visible</button>
            <p>
                <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
                <button onClick={() => dispatch(changeName(value))}>change name</button>
            </p>
        </div>
    )
}