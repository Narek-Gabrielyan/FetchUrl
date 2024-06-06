// // **** Installed libraries **** //
import { NavLink } from "react-router-dom";
// **** Relative hook **** //
import useRequest from "../../../Relative_Hook/RelativeHook";
// **** Component **** //
import { Tag_Span } from "../../Tag_Span/Tag_Span";
// **** CSS **** //
import cssPosts from "./Posts.module.css";

export default function Posts() {
  const posts = useRequest("posts");

  return posts.map((post) => (
    <NavLink to={`${post.id}`} className={cssPosts.box} key={"posts" + post.id}>
      <div className={cssPosts.box_item}>
        <Tag_Span keys="title" values={post.title} />
        <div className={cssPosts.box_item_2}>
          <Tag_Span keys="userId" values={post.userId} />
          <Tag_Span keys="id" values={post.id} />
        </div>
      </div>
      <Tag_Span keys="body" values={post.body} />
    </NavLink>
  ));
}