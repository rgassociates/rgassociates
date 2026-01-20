import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <DisclaimerModal />
            <WhatsAppButton />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}
