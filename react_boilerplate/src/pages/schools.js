import React, { useEffect } from 'react'

import schoolsAPI from "../plugins/schoolsAPI";

const Schools = () => {

    useEffect(() => {
        const getSchools = async () => {
            try {
                await schoolsAPI.get('schools')
            } catch (error) {
                console.log("Request failed!")
            }
        }

        getSchools()
    }, [])

    return (
        <div>
            Bala blu umbreleda agbado eba corn different broooom electricty broooom youths electricty broooom blu cassava
            army pdapc bala tia-tia recruit blu electricty tia-tia bala 50million blu broooom transmission line corn
        </div>
    )
}

export default Schools;