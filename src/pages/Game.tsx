import Square from "../components/Square";
interface Props {
  board: string[];
  handleClick(index: number): void;
  handleReset(): void;
}
const Game = (props: Props) => {
  const { board, handleClick, handleReset } = props;
  const styles = {
    board: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      width: "300px"
    }
  };
  return (
    <>
    <button onClick={()=>handleReset()} type="submit">Reset</button>
    <div style={styles.board}>
      {board.map((value, index) => (
        <Square
          key={index}
          value={value}
          index={index}
          handleClick={handleClick}
        />
      ))}
    </div>
    </>
  );
};
export default Game;
