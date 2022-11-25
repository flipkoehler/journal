// import { dataEntries } from "./data";

export default function Tabbar() {
  return (
    <ul>
      <li>
        <a href="#">
          All Entries <span class="count count-active">2</span>
        </a>
      </li>
      <a href="#">
        Favorites <span class="count count-inactive">1</span>
      </a>
    </ul>
  );
}

// const countAllEntries = dataEntries.length;
// const countFavorites = 1;
