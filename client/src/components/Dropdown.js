import React from "react";

function Dropdown({ options, handleDropDownClick }) {
  return (
    <ul className="MP-movie-DropDownContainer">
      {options.map((movie) => {
        return (
          <li key={movie.id} onClick={() => handleDropDownClick(movie.title)}>
            <div>
              {movie.title} ({movie.genre}) ({movie.released}년작)
            </div>
            <div> 감독 : {movie.director}</div>
            <div className="MP-movie-dropdown-hr"></div>
          </li>
        );
      })}
      <li id="dropdown">원하시는 결과가 없을 경우 단어를 추가해주세요.</li>
    </ul>
  );
}

export default Dropdown;
