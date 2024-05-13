'use client'
import style from './Input.module.css';
import { useInputSearch } from './useInputSearch';

const Input = () => {

  const { inputSearchValue, setInputSearchValue, onSubmit, onCloseInputSearch } = useInputSearch();

  return(
    <form className={style['input-component']} onSubmit={() => { onSubmit(); }}>
     
      <input
        type="text"
        placeholder="TYPE SOMETHING"
        onChange={(e) => { setInputSearchValue(e.target.value); }}
      />

      {inputSearchValue === ''
        ? <img src="icon/search.svg" alt="search icon" /> 
        : <button type="button" onClick={() => { onCloseInputSearch(); }}>
          <img src="icon/cancel.svg" alt="cancel icon" />
        </button>
      }

    </form>
  )
}

export default Input;