import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Use | RG Legal Solutions',
    description: 'Terms of Use for RG Legal Solutions website. Please read these terms carefully before using our website.',
};

export default function TermsOfUse() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-[#051427] sm:text-4xl font-serif mb-10">
                    Terms of Use
                </h1>
                <div className="text-base leading-7 text-gray-700 space-y-6">
                    <p>
                        <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <p>
                        Welcome to the website of RG Legal Solutions. By accessing or using this website, you agree to comply with and be bound by the following Terms of Use. If you do not agree with these terms, please do not use our website.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">1. No Legal Advice or Attorney-Client Relationship</h2>
                    <p>
                        The content provided on this website is for general informational purposes only and does not constitute legal advice. Accessing this website or communicating with RG Legal Solutions via email or through the website does not create an attorney-client relationship. You should not act or refrain from acting on the basis of any information included on this site without seeking appropriate legal advice from a qualified attorney.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">2. Compliance with Bar Council of India Rules</h2>
                    <p>
                        As per the rules of the Bar Council of India, we are not permitted to solicit work or advertise. By accessing this website, you acknowledge that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>You are seeking information about RG Legal Solutions of your own accord.</li>
                        <li>There has been no form of solicitation, advertisement, or inducement by us.</li>
                        <li>The information provided is solely for your personal information and use.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">3. Intellectual Property</h2>
                    <p>
                        All content, including text, graphics, logos, and images, on this website is the property of RG Legal Solutions and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this website without our prior written permission.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">4. Limitation of Liability</h2>
                    <p>
                        RG Legal Solutions assumes no liability for any interpretation and/or use of the information contained on this website, nor does it offer a warranty of any kind, either expressed or implied. We are not responsible for any loss or damage resulting from your reliance on the information provided herein.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">5. Third-Party Links</h2>
                    <p>
                        This website may contain links to third-party websites for your convenience. RG Legal Solutions does not endorse or control the content of these external sites and is not responsible for their privacy practices or accuracy.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">6. Governing Law</h2>
                    <p>
                        These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight text-[#051427] mt-8 mb-4">7. Contact Information</h2>
                    <p>
                        For any questions regarding these Terms of Use, please contact us at:
                    </p>
                    <p className="mt-2">
                        <strong>RG Legal Solutions</strong><br />
                        Vatsalya 2 Complex, NRI Circle, Sanganer, Pratap Nagar, Jaipur, Rajasthan 302033<br />
                        Email: <a href="mailto:info@rglegalsolutions.in" className="text-[#D4A646] hover:underline">info@rglegalsolutions.in</a><br />
                        Phone: <a href="tel:09309212401" className="text-[#D4A646] hover:underline">+91-9309212401</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
