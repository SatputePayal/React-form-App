import React from 'react'
import "../template/SubscriptionList.css"

function SubscriptionList(props) {
  return (
    <>
    <ul>
    {props.Subscriber.map((items, indx)=>(
        <li key={indx}>
            {items.name}
            <br />
            {items.pin}
        </li>
    ))}
    </ul>
    </>
  )
}

export default SubscriptionList