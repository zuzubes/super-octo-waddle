import { PropsWithChildren } from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';

const DashboardLayout = ({ children }: PropsWithChildren<{ children: React.ReactNode }>) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <span className="text-xs font-medium">Hypatos</span>
        </SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem isActive>
            Dashboard
          </SidebarMenuItem>
          <SidebarMenuItem>
            Migration
          </SidebarMenuItem>
          {/* Add more menu items as needed */}
        </SidebarMenu>
        <SidebarFooter>
          <span className="text-xs text-muted-foreground">v1.0.0</span>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-6">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;