'use client'
import style  from './Header.module.css';
import Input from '../Input/Input';
import { useToggleInput } from '@/hooks/useRedux';
import { getCookie } from '@/service/cookies';

const HeaderDashboard = () => {

  const { toggleInput, onToggleInput } = useToggleInput();
  const { displayName, photo } = getCookie()

  return(
    <header className={style['header-component']}>

      <section className={style['header-menu']}>

        <button onClick={() => { onToggleInput(); }}>
          <img src='icon/search.svg' />
        </button>

        <img className={style['user-photo']} src={`${photo}`} />

        <button>
          <img src='icon/menu.svg' />
        </button>

      </section>

      <h1>Olá, {displayName}</h1>

      {toggleInput && <Input />}
    </header>
  )
}

export default HeaderDashboard;