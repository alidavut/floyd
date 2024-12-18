import { Card } from '@floyd/ui/components';
import { Head } from 'components';

const pages = {
  terms: (
    <div>
      <Head
        title="Terms of Service"
      />
      <h1>Terms of Service</h1>
      <p>Welcome to Floyd. These Terms of Service (&quot;Terms&quot;, &quot;Agreement&quot;) governs your use of our &quot;Software as a Service&quot; (SaaS) system (&quot;Service&quot;, &quot;Product&quot;) provided by Floyd (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;).</p>
      <p>By using our Service, you agree to be bound by these Terms. Please read them carefully.</p>
      <h2 id="use-of-the-service">USE OF THE SERVICE</h2>
      <p>By entering into this Agreement, you acknowledge that our Service is a subscription management system providing a platform for community owners to manage their subscribers.</p>
      <p>You represent to us that you are lawfully able to enter into contracts. If you’re agreeing to these terms on behalf of an entity, you represent to us that you have legal authority to bind that entity.</p>
      <h2 id="restrictions">RESTRICTIONS</h2>
      <p>You agree not to:</p>
      <ul>
      <li>Use our Service for any illegal activity or to violate laws in your jurisdiction.</li>
      <li>Use our Service to distribute unsolicited promotional or commercial content.</li>
      <li>Use our Service to harass, harm or abuse others.</li>
      <li>Use automated or other means to access our Service, or interfere with, disrupt, or create an undue burden on the Service.</li>
      </ul>
      <h2 id="payment">PAYMENT</h2>
      <p>You will pay all fees as specified in the pricing section of our website, in the currency specified by us. All fees are non-refundable except as required by law or as otherwise specifically permitted in this Agreement.</p>
      <h2 id="termination">TERMINATION</h2>
      <p>We may terminate your access to the Service, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. In case of a breach by you, we have the right to end this agreement immediately.</p>
      <h2 id="downtime-and-service-suspensions">DOWNTIME AND SERVICE SUSPENSIONS</h2>
      <p>Your access to and use of our Service may be suspended for the duration of unanticipated or unscheduled downtime or unavailability of any portion or all of the services for any reason.</p>
      <h2 id="changes">CHANGES</h2>
      <p>We may revise these Terms from time to time, and will always post the most current version on our website. If a revision meaningfully reduces your rights, we will notify you. By continuing to use or access the Services after the revisions come into effect, you agree to be bound by the revised Terms.</p>
      <h2 id="governing-law">GOVERNING LAW</h2>
      <p>This Agreement shall be governed by the laws of Turkey, without regard to its conflict of laws rules.</p>
      <h2 id="contact">CONTACT</h2>
      <p>If you have any questions regarding these Terms, please email us at support@floyd.so.</p>
      <h3 id="date-of-last-modification">Date of Last Modification</h3>
      <p>This policy was last modified on September 23, 2024.</p>
      <p>**By using our Service, you are stating that you have read and understood, and agree to be bound by these Terms.</p>
    </div>
  ),
  privacy: (
    <div>
      <Head
        title="Privacy Policy"
      />

      <h1>Privacy Policy</h1>

      <p>We, at Floyd (&quot;We&quot;, “Our”, &quot;Company&quot;), respect every user&#39;s personal information and prioritize protecting your privacy. This Privacy Policy (&quot;Policy&quot;) explains how we collect, use, disclose, and protect your information when you use our software as a service (SaaS) product, manage subscriptions and/or access our website (collectively, the &quot;Services&quot;).</p>
      <h3 id="acceptance-of-privacy-policy">Acceptance of Privacy Policy</h3>
      <p>By accessing and using our Services, you agree to the terms outlined in this Policy. If you do not agree with these terms, we advise not to use our Services.</p>
      <h3 id="changes-to-this-policy">Changes to this Policy</h3>
      <p>We may modify this Policy at any time, and when required by law, we will notify you. Constant use of our Services after such modifications indicates your acceptance.</p>
      <h3 id="the-information-we-collect">The Information We Collect</h3>
      <p>We collect information necessary to facilitate our Services. This may include:</p>
      <ul>
      <li>Personal Identification Information (Name, email address, phone number, etc.)</li>
      <li>Payment Information (credit card numbers, billing address, etc.)</li>
      <li>Other relevant details to help deliver our Services</li>
      </ul>
      <h3 id="how-we-use-your-information">How We Use Your Information</h3>
      <p>We use the information we collect to provide, test, improve, promote and personalize our Services.</p>
      <h3 id="how-we-share-your-information">How We Share Your Information</h3>
      <p>We value your information and we shall only share your information under the following circumstances:</p>
      <ul>
      <li>To comply with applicable laws,</li>
      <li>To protect any person from death or serious bodily injury,</li>
      <li>To prevent fraud or abuse against us or our users,</li>
      <li>With third-party service providers who help with our business operations.</li>
      </ul>
      <h3 id="security">Security</h3>
      <p>We implement a variety of security measures to safeguard your personal information. However, no method of transmission or storage is entirely secure, hence we cannot fully guarantee absolute security.</p>
      <h3 id="your-rights">Your Rights</h3>
      <p>You can review, rectify, or erase your personal information at any time by contacting us. However, if the request conflicts with legal obligations or legitimate interests, we may not be able to process it fully.</p>
      <h3 id="contact-us">Contact Us</h3>
      <p>For any questions or concerns about this Privacy Policy, please contact us:</p>
      <p>Email: support@floyd.so</p>
      <h3 id="date-of-last-modification">Date of Last Modification</h3>
      <p>This policy was last modified on September 23, 2024.</p>
      <p>*This Privacy Policy does not apply to the practices of third parties that we do not own or control.</p>
    </div>
  )
}

export function StaticView({ page }: { page: string }) {
  return (
    <div className="my-12">
      <div className="container">
        <Card>
          <Card.Body>
            <div className="prose max-w-full m-4">
              {pages[page]}
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
