import React, {useState} from 'react'

const HeaderListItem = ({src, alt, title}) => {

  let [liHover, setLiHover] = useState(false)

  const mouseEnterLi = () => {
    console.log('li open')
    setLiHover(true);
  };
  const mouseLeaveLi = () => {
    console.log('li closed')
    setLiHover(false);
  };

  return (
    <>
      <li
      onMouseEnter={mouseEnterLi}
      onMouseLeave={mouseLeaveLi}
      >
        <img
          style={liHover ? {boxShadow: '0px 0px 1px 1px gold'} : null}
          src={src}
          alt={alt}
        />
        <p className='li-p' style={liHover ? {color: 'gold'} : null}>{title}</p>
      </li>
    </>
  )
}

export default HeaderListItem