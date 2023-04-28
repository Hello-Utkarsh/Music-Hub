import React from 'react'

export default function Connect() {

    const [token, set_token] = useState(undefined)

    const getToken = async () => {


        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + clientSecret)

            },
            body: 'grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret'
        })
        let parsed_data = await result.json()
        set_token(parsed_data)
        console.log(parsed_data)
    }

    getToken()

    return (
        <div>

        </div>
    )
}

