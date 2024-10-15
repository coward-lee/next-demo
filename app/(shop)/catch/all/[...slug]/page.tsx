
export default function Page({params}: {params: {slug: string}}) {
    return (
        <h1>slug catch all optional page {params.slug}</h1>
    )
}