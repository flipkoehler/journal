export default function Form() {
  return (
    <>
      <form>
        <fieldset>
          <label htmlFor="motto">Motto</label>
          <input
            type="text"
            name="motto"
            id="motto"
            class="input motto"
          ></input>
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" class="input notes"></textarea>
          <button type="submit" value="Submit">
            Create
          </button>
        </fieldset>
      </form>
    </>
  );
}

// function handleSendClick(event) {
//   event.preventDefault();
//   console.log(event.target.elements.notes.value);
// }
