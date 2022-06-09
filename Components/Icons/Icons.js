import React from 'react'
import { Facebook, Instagram, Twitter, LinkedIn, GitHub } from '@material-ui/icons'

export default function Icons( socialNetwork )
{
    const [ actual, setActual ] = React.useState( null )
    const icons = {
        facebook: <Facebook />,
        instagram: <Instagram />,
        twitter: <Twitter />,
        linkedIn: <LinkedIn />,
        github: <GitHub />
    }
    React.useEffect(() => {
        setActual( icons[socialNetwork] )

    }, [ socialNetwork ])

    return actual
}