import SideBar from './_components/SideBar';
import DashboardHeader from './_components/DashboardHeader';
//import WelcomeBanner from './_components/WelcomeBanner';

export default function DashboardLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 hidden md:block fixed inset-y-0 bg-white shadow-md">
                <SideBar />
            </aside>

            {/* Main content area with margin to accommodate sidebar */}
            <div className="flex-1 md:ml-65 px-2">
                <DashboardHeader />

                <main className="p-5">
                    {children}
                </main>
            </div>
        </div>
    );
}
