import React, { FC, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { toggleProfile } from "/src/store/profile/actions"
import { changeName } from "/src/store/profile/actions"
import { ProfileState } from "/src/store/profile/reducer"

export const Profile: FC = () => {

    const dispatch = useDispatch()

    const name = useSelector((state: ProfileState) => state.name)
    const visible = useSelector((state: ProfileState) => state.visible)
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