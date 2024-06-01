// // **** Installed libraries **** //
import { NavLink } from "react-router-dom";
// **** Relative hook **** //
import useRequest from "../../../Relative_Hook/RelativeHook";
// **** Component **** //
import { Tag_Span } from "../../Tag_Span/Tag_Span";
// **** CSS **** //
import cssPosts from "./Posts.module.css"

export default function Posts() {
  const posts = useRequest("posts")

  return posts.map((post) => (
    <NavLink to={`${post.id}`} className={cssPosts.box} key={"posts" + post.id}>
      <div className={cssPosts.box_item}>
        <Tag_Span keys={Object.keys(post)[2]} values={Object.values(post)[2]} />
        <div className={cssPosts.box_item_2}>
          <Tag_Span
            keys={Object.keys(post)[0]}
            values={Object.values(post)[0]}
          />
          <Tag_Span
            keys={Object.keys(post)[1]}
            values={Object.values(post)[1]}
          />
        </div>
      </div>
      <Tag_Span keys={Object.keys(post)[3]} values={Object.values(post)[3]} />
    </NavLink>
  ));
}