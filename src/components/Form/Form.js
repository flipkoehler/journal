export default function Form() {
  return (
    <>
      <p>test</p>
      <form>
        <fieldset>
          <label>Motto</label>
          <input class="input motto"></input>
          <label>Notes</label>
          <input class="input notes"></input>
          <button type="submit">Create</button>
        </fieldset>
      </form>
    </>
  );
}
