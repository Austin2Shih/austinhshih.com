import React from 'react'
const Welcome = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} class="container">
        <h3 class='welcome-text'>WELCOME</h3>
        <h1 class="welcome-name">I'm Austin Shih.</h1>
        <h3 class="welcome-software-stack">Software Engineer | Full Stack</h3>
        <button></button>
      </div>
      <style> {`
          .container {
            position: relative;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            background-image: url(${require("../media/welcome/city-photo.jpg")});
            background-size: cover;
            background-position: bottom;

            display: flex;
            text-align: center;
            justify-content: center;
            flex-direction: column;
          }
          .welcome-text {
            color: var(--textTertiary);
            font-family: 'Poppins';
            font-weight: 700;
            font-size: 36px;
            line-height: 54px;
            letter-spacing: 0.06em;
          }
      `} </style>
    </>
  )
})

export default Welcome;