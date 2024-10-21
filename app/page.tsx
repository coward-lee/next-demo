'use client';
import Link from "next/link";
import PostLink from "@/app/blog/PostList";
import {useRouter} from "next/navigation";
import {PostBlog} from "@/app/lib/postcc";


export default function Home() {

    const postData: Array<PostBlog> = [
        {id: 1, slug: "aaa", title: "111"},
        {id: 2, slug: "bbb", title: "222"},
        {id: 3, slug: "ccc", title: "333"},
        {id: 4, slug: "ddd", title: "444"},
    ];

    // 这个也是用来做路由跳转的
    const router = useRouter();
    return (
        <div className={"text-4xl text-orange-400"}>
            <div>Hello home page</div>
            <Link href={"/dashboard"}>dashboard</Link> <br/><br/>
            <PostLink posts={postData}/>


            <button type={'button'} onClick={() => {
                // 这个也是用来做路由跳转的
                // 基于router实例来进行路由跳转，使用push的这种方式就是为了放回返回按钮的使用
                // 也就是经典的进栈出栈
                router.push("/dashboard")
            }}>
                dashboard
            </button>

            <p> 测试部署 1 </p>
            <p> 测试部署 2 </p>
            <p> 测试部署 3 </p>

        </div>
    );
}
