import { CSSProperties } from "react";

export function ChevronTopIcon(props: {className?: string, style?: CSSProperties}) {
  return (
    <svg className={props.className} style={props.style} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
        <path d="M260.811-366.051q-11.021-11.021-11.355-26.521-.333-15.5 10.689-26.522l193.333-193.333q5.892-5.892 12.475-8.457 6.583-2.565 14.047-2.565t14.047 2.565q6.583 2.565 12.475 8.457l193.667 193q11.021 10.514 10.981 26.054-.039 15.54-11.315 26.656-11.021 11.021-26.855 11.021-15.833 0-26.855-11.021L480-532.196 313.521-365.051q-10.355 11.022-25.894 10.649-15.54-.373-26.816-11.649Z"/>
    </svg>
  )
}
