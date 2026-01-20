import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | RG Legal Solutions',
    description: 'Privacy Policy for RG Legal Solutions. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-[#051427] sm:text-4xl font-serif mb-10">
                    Privacy Policy
                </h1>
                <div className="text-base leading-7 text-gray-700 space-y-6">
                    <p>
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p>
                        At RG Legal Solutions ("we," "us," or "our"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or engage our legal services.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name, email address, phone number, and other contact details.</li>
                        <li>Information relevant to your legal inquiries or case details.</li>
                        <li>Any other information you choose to provide through our contact forms or communications.</li>
                    </ul>
                    <p>
                        We may also automatically collect non-personal information such as your IP address, browser type, and operating system for website analytics and security purposes.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>To respond to your inquiries and provide legal consultation.</li>
                        <li>To represent you in legal matters and provide requested services.</li>
                        <li>To communicate with you regarding case updates, appointments, or important notices.</li>
                        <li>To improve our website functionality and user experience.</li>
                        <li>To comply with legal obligations and regulatory requirements.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">3. Data Security and Confidentiality</h2>
                    <p>
                        As a law firm, we adhere to strict standards of attorney-client privilege and confidentiality. We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">4. Sharing of Information</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>With your explicit consent.</li>
                        <li>To comply with court orders, laws, or legal processes.</li>
                        <li>With trusted service providers who assist us in operating our website or conducting our business, subject to confidentiality agreements.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">5. Cookies</h2>
                    <p>
                        Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of certain parts of our website.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">6. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or request the deletion of your personal information held by us. If you wish to exercise these rights, please contact us using the details provided below.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">7. Changes to This Policy</h2>
                    <p>
                        We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">8. Contact Us</h2>
                    <p>
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <p className="mt-2">
                        <strong>RG Legal Solutions</strong><br />
                        Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033<br />
                        Email: <a href="mailto:rgassociatesjaipur@gmail.com" className="text-[#D4A646] hover:underline">rgassociatesjaipur@gmail.com</a><br />
                        Phone: <a href="tel:09309212401" className="text-[#D4A646] hover:underline">093092 12401</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
