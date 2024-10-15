export default function DashboardLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <section>
            <p> shop layout</p>
            <p>----------------------</p>
            {children}
        </section>
    )
}