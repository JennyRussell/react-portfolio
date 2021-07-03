import React from 'react';


function Link(props) {

    return(
<a href={props.goto} target="_blank">
     <div class="h-28 my-5 bg-blue-400 font-bold text-2xl p-2">{props.name}</div>
</a>
    )
}

export default Link;