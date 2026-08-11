import { PropsWithChildren } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  BarChart3,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from 'lucide-react';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const navigationItems = [
  { label: 'Dashboard', href: '/', icon: LayoutDashboard },
  { label: 'Migration', href: '/migration', icon: BarChart3 },
  { label: 'Documents', href: '/documents', icon: FileText },
  { label: 'Contact Us', href: '/contact-us', icon: MessageCircle },
];

const DashboardLayout = ({
  children,
}: PropsWithChildren<{ children: React.ReactNode }>) => {
  const location = useLocation();

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader className="flex h-14 items-center border-b border-slate-200/80 px-4 group-data-[collapsible=icon]:px-2">
          <Link to="/" className="flex w-full items-center justify-start gap-3">
            <img
              src="/hypatos-logo.jpeg"
              alt="Hypatos"
              className="h-9 w-9 shrink-0 rounded-xl object-cover"
            />
            <span className="text-base font-semibold tracking-tight text-slate-900 group-data-[collapsible=icon]:hidden">
              Hypatos
            </span>
          </Link>
        </SidebarHeader>

        <SidebarMenu className="px-2 py-4">
          {navigationItems.map(({ label, href, icon: Icon }) => (
            <SidebarMenuItem key={label}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === href}
                className="h-10 rounded-xl text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-700"
              >
                <Link to={href} title={label}>
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden">
                    {label}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <div className="mt-auto border-t border-slate-200/80 px-2 py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === '/settings'}
                className="h-10 rounded-xl text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-700"
              >
                <Link to="/settings" title="Settings">
                  <Settings className="h-5 w-5 shrink-0" />
                  <span className="group-data-[collapsible=icon]:hidden">
                    Settings
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <p className="mt-3 px-3 text-xs font-medium text-slate-400 group-data-[collapsible=icon]:hidden">
            v14.34.0
          </p>
        </div>
      </Sidebar>

      <SidebarInset className="min-w-0">
        <div className="flex h-14 items-center border-b border-slate-200/80 px-4 sm:px-6">
          <SidebarTrigger
            className="rounded-lg text-slate-600 hover:bg-blue-50 hover:text-blue-700"
            aria-label="Toggle navigation menu"
          />
        </div>
        <main className="p-4 sm:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;