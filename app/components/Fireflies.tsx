import style from "../styles/fireflies.module.sass";

const FireFliesEffect = function ({ quantity = 15 }) {
  const arr: number[] = new Array(quantity).fill(1);

  return (
    <>
      {arr.map((el, i) => {
        return <div key={i} className={style.firefly}></div>;
      })}
    </>
  );
};

export default FireFliesEffect;
