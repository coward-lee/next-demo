import Link from "next/link";
import {PostBlog} from "@/app/lib/postcc";


export default function PostLink({posts}:{
    posts:Array<PostBlog>
}) {
    return (
        <ul>
            {
                posts.map((item) => {
                        return <li key={item.id}>
                            <Link href={`/blog/${item.slug}`}>
                                {item.title}
                            </Link>
                        </li>
                    }
                )
            }
        </ul>
    )
}