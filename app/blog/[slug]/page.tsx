

export default function Page({params}: {params: {slug: string}}) {
    return (
        <h1>slug page {params.slug}</h1>
    )
}