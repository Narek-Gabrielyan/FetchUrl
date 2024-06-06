// **** Component **** //
import { Tag_Span } from "../Tag_Span/Tag_Span";
// **** CSS **** //
import cssComments_Comp from "./Comments_Components.module.css";

export const Comments_Components = function ({com}) {
  return (
    <div className={cssComments_Comp.container}>
      <div className={cssComments_Comp.first}>
        <Tag_Span keys="name" values={com.name} />
        <Tag_Span keys="id" values={com.id} />
      </div>
      <div className={cssComments_Comp.first}>
        <Tag_Span keys="email" values={com.email} />
        <Tag_Span keys="postId" values={com.postId} />
      </div>
      <Tag_Span keys="body" values={com.body} />
    </div>
  );
};
