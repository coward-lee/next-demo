export default function Page({params}:
{
    params: {
        slug: string ,
        slug2: string ,
    }
}) {
    return (
        <div>
            <h1>slug page {params.slug}</h1>
            <h1>slug2 page {params.slug2}</h1>
        </div>
    )
}