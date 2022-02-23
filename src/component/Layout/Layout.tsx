import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="relative">
        <main>
          <Container>{children}</Container>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
