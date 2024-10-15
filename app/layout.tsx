import React, {Suspense} from "react";
// import Loading from "@/app/loading";

export default function RootLayout(
    {
        children,
        team,
        analytics,
    } // 这个就是一个解构的过程
    :
        {
        children: React.ReactNode,
        team: React.ReactNode,
        analytics: React.ReactNode,
    }
) {
    return (
        <html>
        <body>
        <Suspense fallback={<p>loading</p>}>
            {/*<p>------------------------------</p>*/}
            {/*
            这个children表示，子级别的layout；
            比如说当前是 app/ 级别下的layout，
            然后有app/dashboard/ 的layout(我们称之为layout_c)，
            那么layout_c会出现的位置为下面 {children} 的位置。
            简单来说就是layout支持嵌套
        */}
            {children}
            {team}
            {analytics}
        </Suspense>
        </body>
        </html>
    )
}