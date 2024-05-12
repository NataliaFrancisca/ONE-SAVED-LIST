'use client'
import style  from './Header.module.css';
import Input from '../Input/Input';
import { useToggleInput } from '@/hooks/useRedux';
import { type IUserInfo } from '@/ts/interface';

const HeaderDashboard = (props: {userData: IUserInfo}) => {

  const { toggleInput, onToggleInput } = useToggleInput();
  const { displayName, photo } = props.userData;

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