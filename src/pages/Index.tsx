import { DashboardLayout } from '@/layouts/DashboardLayout';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
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