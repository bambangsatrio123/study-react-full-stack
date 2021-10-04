import React from 'react'

export default function DetailComp(props) {
    return (
        <div>
            <h3>{props.location.state.judul}</h3>
            <p>{props.location.state.tanggal}</p>
        </div>
    )
}
