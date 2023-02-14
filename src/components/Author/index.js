import React from "react";
import { AuthorContainer } from "./styles";

function Author() {
  return (
    <AuthorContainer>
      Created By{" "}
      <a
        href="https://github.com/minthihalwin"
        target="_blank"
        rel="noreferrer"
      >
        Min Thiha Lwin
      </a>
    </AuthorContainer>
  );
}

export default Author;
