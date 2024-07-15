import React from 'react'

const Profil = (props) => {

return (
<div>
<img src={props.data.image} alt='avatar' />
<h1>{props.data.name} </h1>


</div>


)


}

export default Profil