// **** CSS **** //
import cssTag from "./Tag_Span.module.css";

export const Tag_Span = (props) => <span className={cssTag.span}>{props.keys}: <h3> {props.values} </h3> </span>
