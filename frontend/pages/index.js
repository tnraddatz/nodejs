import React from 'react'
import Link from 'next/link'

export default () => (
  <div>
    <h1>Welcome to our Next.js website!</h1>
    <p> Which car do you think has the best MPG?</p>
    <ul>
      <li><Link href="/cars/porsche"><a>Porsche</a></Link></li>
      <li><Link href="/cars/Mercedes"><a>Mercedes</a></Link></li>
      <li><Link href="/cars/BMW"><a>BMW</a></Link></li>
    </ul>
  </div>
)
