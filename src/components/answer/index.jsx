function Answer({ numbers, updateScore, updateStatusMsg }) {
  function handleSubmit(event) {
    event.preventDefault();
    let sum = numbers[0] + numbers[1];
    let inputValue = Number(event.target.answer.value);
    updateScore(sum === inputValue ? 1 : 0);
    updateStatusMsg(sum === inputValue ? "Right answer" : "Wrong Answer");
  }

  return (
    <form
      style={{ marginTop: "15px", autocomplete: "off" }}
      onSubmit={handleSubmit}
    >
      <input
        style={{
          backgroundColor: "#f6c2c3",
          maxWidth: "50px",
          padding: "15px",
          border: "none",
          fontSize: "18px",
          borderRadius: "8px 0px 0px 8px",
        }}
        type="text"
        name="answer"
      />
      <button
        style={{
          backgroundColor: "#a1d2e8",
          padding: "15px",
          border: "none",
          fontSize: "18px",
          borderRadius: "0px 8px 8px 0px",
          fontWeight: "500",
          cursor: "pointer",
        }}
        type="submit"
      >
        submit
      </button>
    </form>
  );
}
export default Answer;
