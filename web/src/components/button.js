import React from "react"
import "../styles/_button.scss"

export default function Button({children}) {
  return (
    <button class="c-btn__default">
      {children}
    </button>
  )
}