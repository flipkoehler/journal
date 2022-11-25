import { Fragment } from "react";
import { ReactComponent as Star } from "../../img/star.svg";
import { dataEntries } from "./data";
import { uselocalStorageState } from "use-local-storage-state"

export default function Entrylist() {
  return (
    //Each entry in the entry list has a title, a date, a text and a favorite icon button.
    <section class="entries">
      {dataEntries.map((data) => (
        <Fragment key={data.id}>
          <p class="date">{data.date}</p>
          <h3>
            {data.motto}
            <span class="star">
              <button class="starBTN">
                <Star />
              </button>
            </span>
          </h3>
          <p class="content">{data.notes}</p>
          <hr></hr>
        </Fragment>
      ))}
    </section>
  );
}
