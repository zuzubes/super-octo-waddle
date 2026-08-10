import { PropsWithChildren } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';

const DashboardLayout = ({ children }: PropsWithChildren<{ children: React.ReactNode }>) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="border-b border-slate-200/80 px-4 py-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/hypatos-logo.jpeg"
              alt="Hypatos"
              className="h-9 w-9 rounded-xl object-cover"
            />
            <span className="text-base font-semibold tracking-tight text-slate-900">Hypatos</span>
          </Link>
        </SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={location.pathname === '/'}>
              <Link to="/">Dashboard</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={location.pathname === '/migration'}>
              <Link to="/migration">Migration</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
      <SidebarInset className="p-6">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;