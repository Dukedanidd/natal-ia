import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function LayoutLanding({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
