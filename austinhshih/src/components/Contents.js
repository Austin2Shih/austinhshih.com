import React from 'react'

const Contents = ({refs}) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className='toc-container'>
        <p onClick={() => handleScroll(refs.welcomeRef)}>welcome</p>
        <p onClick={() => handleScroll(refs.aboutRef)}>about</p>
      </div>
      <style> {`
        .toc-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .toc-container>p {
          margin-bottom: var(--smallSpacer);
          cursor: pointer;
        }
      `} </style>
    </>
  )
}

export default Contents;