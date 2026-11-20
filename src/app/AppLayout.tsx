import { Outlet } from 'react-router-dom';
import NetworkBackground from '@/components/layout/NetworkBackground';
import DesktopNavigation from '@/components/layout/DesktopNavigation';
import SiteFooter from '@/components/layout/SiteFooter';
import Preloader from '@/components/common/Preloader';
import FloatingContactButton from '@/components/common/FloatingContactButton';

export default function AppLayout() {
  return (
    <div className="relative min-h-screen bg-bg-main z-0 overflow-x-hidden">
      <Preloader />
      <NetworkBackground />
      <DesktopNavigation />
      <main className="relative z-10 pt-[72px] md:pt-[72px]">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingContactButton />
    </div>
  );
}
