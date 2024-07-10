import { useEffect } from "react"

export const Score = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const score = urlParams.get('score');
    }, [])
    return(
        <div>
            Hello from score
        </div>
    )
}