



export default function Page({params}: { params: { slug: string[] } }) {
    console.log(params)
    return (
        <h1>slug catch all page {
            params.slug.map((slug, index) => {
                return (<div key={index}>{slug}</div>)
            })
        }</h1>

    )
}