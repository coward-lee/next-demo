
export default function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <p> dashboard layout</p>
            <p>----------------------</p>
            {children}
        </section>
    )
}