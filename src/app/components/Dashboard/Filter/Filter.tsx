'use client'
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import style from './Filter.module.css';

const FilterDashboard = () => {

  const routerSearch = useSearchParams();
  const routerFilter = routerSearch.get('filter') ?? 'allcontent';

  const listFilterOptions = ['allcontent', 'article', 'music', 'podcast', 'video', 'book', 'others'];

  return(
    <nav className={style['filter-component']}>
      <ul className={`${style['list-of-link']} ${style[`filter-choice-${routerFilter}`]}`}>

        {listFilterOptions.map((filter, key) => (
          <Link
            key={key}
            href={{
              pathname: '/dashboard',
              query: { 
                filter
              }
            }}
            className={style[filter]}
          >
            {filter.toUpperCase()}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default FilterDashboard;