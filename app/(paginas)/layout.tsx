export default function WikiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='flex'>
            <section className='flex flex-col flex-1 gap-4'>{children}</section>
            {/* Placeholder caso pretenda adicionar sidebar em cada route no futuro - documentation nav style 
                <aside>Sidebar </aside> */}
        </div>
    );
}
