import style from "../customCss/fireflies.module.sass";

const FireFliesEffect = function ({ quantity = 15 }) {
  const arr: number[] = new Array(quantity).fill(1);

  return (
    <>
      {arr.map(() => {
        return <div className={style.firefly}></div>;
      })}
    </>
  );
};

export default FireFliesEffect;
