import DashboardLayout from '@/layouts/DashboardLayout';
import AnnouncementBanner from '@/components/AnnouncementBanner';

const Index = () => {
  return (
    <DashboardLayout>
      <AnnouncementBanner />
      <div className="flex min-h-[70vh] items-center justify-center rounded-2xl bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Hypatos</h1>
          <p className="text-xl text-gray-600">
            Your enterprise document processing platform.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;