export default function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <p> marketing layout</p>
            <p>----------------------</p>
            {children}
        </section>
    )
}