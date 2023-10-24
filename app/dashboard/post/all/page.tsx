import { LoginForm } from "@/components";
import PostsList from "@/components/postsList";

const Posts = () => {
    const items = [
        {
          title: "Item 1",
          content: "vxcvxcvxc cv xcv xcv xcvxc xcv xcv xcv xcv xcvxcv xcv xcv xcv xcvxcv cx",
        },
        {
          title: "Item 2",
          content: "vxcvxcvxc cv xcv xcv xcvxc xcv xcv xcv xcv xcvxcv xcv xcv xcv xcvxcv cx",
        },
        {
          title: "Item 3",
          content: "vxcvxcvxc cv xcv xcv xcvxc xcv xcv xcv xcv xcvxcv xcv xcv xcv xcvxcv cx",
        },
      ];

    return (
        <main className=" overflow-hidden">
            <PostsList  items={items} />
        </main>
    );
};

export default Posts;