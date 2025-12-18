import {useRef} from 'react'


const Welcome = () => {

    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

  return (
    <section id='welcome'>
        <p ref={subtitleRef}> Hello I'm ola! Welcome to my</p>
        <h1 ref={titleRef}>Portfolio</h1>
    </section>
  )
}

export default Welcome