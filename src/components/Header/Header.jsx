import React from "react"
import { Button } from "../Button/Button"
// import { useTelegram } from "../../hooks/useTelegram"

export const Header = () => {
    // const {username} = useTelegram()
    return(
        <header>
            {/* <h1>{username}</h1> */}
            <Button text={'Закрыть'}/>

        </header>
    )
} 