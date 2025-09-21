export default function WikiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex'>
            <section className='flex flex-col flex-1 gap-4'>{children}</section>
            <aside>Sidebar </aside>
        </div>
    );
}
