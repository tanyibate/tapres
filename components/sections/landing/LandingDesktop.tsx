import styles from "./landing-styles.module.scss";

export default function Landing() {
  const arrayOfTwentyFour = Array.from(Array(24).keys());
  const arrayOfBlankSqaures = [0, 1, 2, 6, 7, 8, 12, 13, 14, 18, 19];
  const arrayOfBlankTextBackgroundSquares = Array.from(Array(12).keys());
  const returnSquares = (squares: any) => {
    let oddColour = "darker-square";
    let evenColour = "lighter-square";
    let rowLength = 3;
    for (let i = 0; i < squares.length; i++) {
      if (arrayOfBlankSqaures.includes(i)) {
        squares[i] = <div key={"square" + i}></div>;
      } else {
        if (i === 17) rowLength += 1;
        if (i % rowLength === 0) {
          let oddColourTemp = oddColour;
          oddColour = evenColour;
          evenColour = oddColourTemp;
        }
        let squareColor = oddColour;
        if (i % 2 === 0) squareColor = evenColour;
        squares[i] = <div className={squareColor} key={"square" + i}></div>;
      }
    }
    return squares;
  };
  return (
    <div
      className="w-full relative hidden xl:block"
      style={{ backgroundColor: "#282828" }}
    >
      <div className={styles.square_container}>
        <div className={styles.grid_layout}>
          <div></div>
          <div></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div></div>
          <div></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div></div>
          <div></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
          <div className="lighter-square"></div>
          <div className="darker-square"></div>
        </div>
      </div>
      <img
        src="/assets/landing-background.jpg"
        alt=""
        className="w-full opacity-25"
      />
      <div className={styles.text_background_square_container}>
        <div className={styles.text_background_layout}>
          {arrayOfBlankTextBackgroundSquares.map((square, index) => {
            return square != arrayOfBlankTextBackgroundSquares.length - 1 ? (
              <div
                className={styles.text_background_square}
                key={"squares" + index}
              ></div>
            ) : (
              <div key={"squares" + index}></div>
            );
          })}
        </div>
        <div className={styles.text_container}>
          <div>
            <p className={styles.company_title}>Tapres</p>
            <p className={styles.company_slogan + " title"}>
              Next Generation<br></br> Homes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
