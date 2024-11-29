import { FC, ReactNode } from 'react';

import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
