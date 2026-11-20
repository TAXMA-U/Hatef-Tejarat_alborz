import { Outlet } from 'react-router-dom';
import NetworkBackground from '@/components/layout/NetworkBackground';
import DesktopNavigation from '@/components/layout/DesktopNavigation';
import SiteFooter from '@/components/layout/SiteFooter';

export default function AppLayout() {
  return (
    <div className="relative min-h-screen bg-bg-main z-0 overflow-x-hidden">
      <NetworkBackground />
      <DesktopNavigation />
      <main className="relative z-10">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}