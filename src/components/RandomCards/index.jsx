import './styles.css'

export const RandomCards = (props) => {

  const {id, name, img, url, click, refresh} = props;

  const styles = {
    backgroundImage: "url(" + img + ")",
  };


  return (
    <div id={id} className='RandomCards'>
      <img src={img} alt="" />
        <h3>
          {name}
        </h3>

      <div className='options-card'>
        <div className='close' onClick={click}><button></button></div>    
        <button className='refresh' onClick={() => refresh(id)}/>
        <button><a className='link' target='_blank' href={url}></a></button>
      </div>
    </div>
  );
}

