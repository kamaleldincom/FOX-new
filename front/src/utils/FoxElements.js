import React from 'react'
import { CHeaderNavLink } from '@coreui/react'

const FoxHeaderNavLink = (props) => {
    return (
        <CHeaderNavLink {...props} >{props.linktext}</CHeaderNavLink>
    )
}

export { FoxHeaderNavLink }