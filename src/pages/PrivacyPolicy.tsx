import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { apps } from '../data/apps';

const PrivacyPolicy: React.FC = () => {
    const [searchParams] = useSearchParams();
    const appId = searchParams.get('appId');

    const app = useMemo(() => apps.find(v => v.id === appId), [appId]);
    const appName = app?.name || 'Application';

    // Generic "One Policy Fits All" approach but with dynamic names, 
    // mirroring the logic from the old project.

    return (
        <div className="privacy-page">
            <header className="main-header fade-in">
                <div className="header-content">
                    <Link to="/" className="logo">Ziby Apps</Link>
                    <Link to="/" className="btn" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        ← Back to Home
                    </Link>
                </div>
            </header>

            <div className="container">
                <main className="privacy-content fade-in">
                    <h1>Privacy Policy</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>
                        {appName}
                    </p>

                    <p>
                        This <strong>Privacy Policy</strong> describes how your personal information is collected, used, and shared when you use the <strong>{appName}</strong> application.
                    </p>

                    <p>
                        The <strong>{appName}</strong> app is provided by Yashin Pavlo as a Freemium service. This Service is provided at no cost and is intended for use "AS IS".
                    </p>

                    <p>
                        If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
                    </p>

                    <p>
                        The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, unless otherwise defined in this Privacy Policy.
                    </p>

                    <h2>Information Collection and Use</h2>
                    <p>
                        For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained on your device and is not collected by us in any way.
                    </p>
                    <p>
                        The app does use third-party services that may collect information used to identify you.
                    </p>

                    {(app?.withAdmob || app?.withAnalytics || app?.withCrashlytics) && (
                        <>
                            <p>Link to the privacy policy of third-party service providers used by the app:</p>
                            <div style={{ marginBottom: '1.5rem', background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', borderRadius: '8px' }}>
                                <ul>
                                    {app?.withAdmob && (
                                        <li>
                                            <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer">AdMob</a>
                                        </li>
                                    )}
                                    {app?.withAnalytics && (
                                        <li>
                                            <a href="https://www.google.com/analytics/terms/" target="_blank" rel="noopener noreferrer">Google Analytics</a>
                                        </li>
                                    )}
                                    {app?.withCrashlytics && (
                                        <li>
                                            <a href="https://firebase.google.com/terms/crashlytics" target="_blank" rel="noopener noreferrer">Firebase Crashlytics</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </>
                    )}

                    <h2>Log Data</h2>
                    <p>
                        We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                    </p>

                    <h2>Cookies</h2>
                    <p>
                        Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
                    </p>
                    <p>
                        This Service does not use these "cookies" explicitly. However, the app may use third-party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                    </p>

                    <h2>Service Providers</h2>
                    <p>
                        We may employ third-party companies and individuals due to the following reasons:
                    </p>
                    <ul>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>To assist us in analyzing how our Service is used.</li>
                    </ul>
                    <p>
                        We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                    </p>

                    <h2>Security</h2>
                    <p>
                        We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                    </p>

                    <h2>Data Deletion</h2>
                    <p>
                        Since we do not collect or store any personal data on our servers, there is generally no data for us to delete. However, if you have any concerns or wish to inquire about data privacy, you may contact us at <a href="mailto:yashin.ziby@icloud.com">yashin.ziby@icloud.com</a>.
                    </p>

                    <h2>Links to Other Sites</h2>
                    <p>
                        This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                    </p>

                    <h2>Children’s Privacy</h2>
                    {app?.forChild ? (
                        <p>
                            Our Application is designed for children and families. We are committed to protecting the privacy of children. We do not knowingly collect, store, or process any personal information from children under the age of 13. If you believe that we have inadvertently collected such information, please contact us immediately, and we will take steps to remove it.
                        </p>
                    ) : (
                        <p>
                            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
                        </p>
                    )}

                    <h2>Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <p style={{ fontStyle: 'italic', marginTop: '2rem', opacity: 0.7 }}>
                        This policy is effective as of 2025-12-11
                    </p>

                    <div style={{ marginTop: '3rem', borderTop: '1px solid var(--card-border)', paddingTop: '2rem' }}>
                        <h2>Contact Us</h2>
                        <p>
                            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
                            <a href="mailto:yashin.ziby@icloud.com">yashin.ziby@icloud.com</a>.
                        </p>
                    </div >
                </main>

                <footer className="main-footer">
                    <p>&copy; {new Date().getFullYear()} Yashin Pavlo. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
