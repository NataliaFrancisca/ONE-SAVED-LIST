import style from "./Loader.module.css";

const Loader = (props: { color: string }) => {
  return <span className={`${style.loader} ${style[`_${props.color}`]}`}></span>;
};
  
export default Loader;
  