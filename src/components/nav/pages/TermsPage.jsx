import React from 'react';
import { Container } from 'react-bootstrap';

export default function TermsPage() {
  return (
    <Container className="py-5">
      <section className="mb-8 mt-12 pt-8">
        <h1 className="mb-4">Terms and Conditions</h1>
        <p className="mb-4">Effective Date: November 26, 2024</p>
        
        <section className="mb-5">
          <h2 className="h4 mb-3">TERMS OF USE</h2>
          <p className="mb-4">
            These Terms of Use (the "Terms") establish the terms and conditions that apply when you use the Service (as defined below), 
            which is made available to you by Hetyra Networks, Inc. ("Hetyra", "we", "our", or "us") and its affiliates. By using the Service, 
            you indicate your acceptance of these Terms and your agreement to be bound by them, as well as all applicable laws and regulations. 
            If you do not agree to these Terms, you are not permitted to use the Service.
          </p>
          
          <p className="mb-4">
            Hetyra may change, modify, supplement, and/or update these Terms at any time. While we will attempt to provide prior notice 
            of any material changes, your continued use of the Service after the modification of these Terms means that you accept all such changes. 
            Therefore, we advise you to review these Terms each time you access the Service to stay informed of any changes. These Terms were last 
            modified as of the date indicated above.
          </p>

          <div className="alert alert-warning mb-4">
            <h3 className="h5 mb-3">Dispute Resolution</h3>
            <p className="mb-2">
              As described in Section 5(g) below, these Terms require the use of arbitration on an individual basis to resolve disputes, 
              rather than through jury trials or class actions, and may limit the remedies available to you in the event of a dispute.
            </p>
          </div>

          <div className="alert alert-warning mb-4">
            <h3 className="h5 mb-3">Refund Policy for Treatments and Medical Treatments</h3>
            <p className="mb-2">
              As detailed in Section 5(g), Hetyra will not refund you for any reason if you receive a Treatment or Medical Treatment 
              (as defined below), except as determined at Hetyra's sole discretion. Specifically, if you engage in conduct deemed inappropriate 
              or unsafe by a Provider (e.g., making inappropriate requests or engaging in inappropriate behavior), including inappropriate touching 
              or perceived threats to the Provider's safety or well-being, and this leads to the Provider ending the Treatment or Medical Treatment 
              early, Hetyra will not provide a refund.
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="h4 mb-3">Table of Contents</h2>
          <ol className="mb-5">
            <li>
              <a 
                href="#use-of-service" 
                className="text-decoration-none"
                onClick={(e) => scrollToSection(e, 'use-of-service')}
              >
                Use of Website, Mobile Applications, and Our Service
              </a>
            </li>
            <li><a href="#registration" className="text-decoration-none">Registration, Accounts, Passwords, and Security</a></li>
            <li><a href="#responsibilities" className="text-decoration-none">Your Responsibilities</a></li>
            <li><a href="#medical-disclaimers" className="text-decoration-none">Medical-Related Disclaimers</a></li>
            <li><a href="#incident-reporting" className="text-decoration-none">Incident Reporting and Legal Support</a></li>
            <li><a href="#service-scope" className="text-decoration-none">Service Scope and Compliance</a></li>
            <li><a href="#anti-poaching" className="text-decoration-none">No-Poaching Agreement</a></li>
            <li><a href="#limitations-liability" className="text-decoration-none">Limitations of Liability</a></li>
            <li><a href="#booking" className="text-decoration-none">Booking Treatments and Medical Treatments</a></li>
            <li><a href="#referral-program" className="text-decoration-none">Referral Program</a></li>
            <li><a href="#providing-treatments" className="text-decoration-none">Providing Treatments</a></li>
            <li><a href="#text-messaging" className="text-decoration-none">Text Messaging</a></li>
            <li><a href="#content-submission" className="text-decoration-none">Content Submitted to Hetyra</a></li>
            <li><a href="#contests" className="text-decoration-none">Contests</a></li>
            <li><a href="#term-and-termination" className="text-decoration-none">Term and Termination</a></li>
            <li><a href="#intellectual-property" className="text-decoration-none">Intellectual Property Rights</a></li>
            <li><a href="#disclaimers" className="text-decoration-none">Disclaimers</a></li>
            <li><a href="#indemnification" className="text-decoration-none">Indemnification and Release</a></li>
            <li><a href="#warranty-disclaimer" className="text-decoration-none">Disclaimer of Warranty</a></li>
            <li><a href="#limitation-liability" className="text-decoration-none">Limitation of Liability</a></li>
            <li><a href="#third-party-disputes" className="text-decoration-none">Third-Party Disputes</a></li>
            <li><a href="#force-majeure" className="text-decoration-none">Force Majeure</a></li>
            <li><a href="#indemnification-release" className="text-decoration-none">Indemnification and Release</a></li>
            <li><a href="#additional-features" className="text-decoration-none">Additional Service Features</a></li>
            <li><a href="#dispute-resolution" className="text-decoration-none">Dispute Resolution</a></li>
            <li><a href="#feedback" className="text-decoration-none">Feedback</a></li>
            <li><a href="#entire-agreement" className="text-decoration-none">Entire Agreement; Modification</a></li>
            <li><a href="#severability" className="text-decoration-none">Severability</a></li>
            <li><a href="#relationship" className="text-decoration-none">Relationship of the Parties</a></li>
            <li><a href="#waiver" className="text-decoration-none">Waiver</a></li>
            <li><a href="#assignment" className="text-decoration-none">Assignment</a></li>
            <li><a href="#third-party-beneficiaries" className="text-decoration-none">Third-Party Beneficiaries</a></li>
          </ol>
          <a href="#apple-notice" className="text-decoration-none">Notice Regarding Apple</a>
        </section>

        <section id="use-of-service" className="mb-5">
          <h2 className="h4 mb-3">1. Use of Website, Mobile Applications, and Our Service</h2>
          <p className="mb-4">
            a. The "Service" refers to Hetyra's website located at www.hetyra.com, mobile applications, and any related services or platforms 
            (including through networks, embeddable widgets, downloadable software, and tablet computer applications), and all intellectual 
            property contained therein. The Service connects health and wellness professionals ("Providers") with consumers, facilitating the 
            delivery of Treatments (each referred to as a "Treatment"). These Treatments may be provided in-person or virtually, through a video 
            communications platform. Any person who accesses or uses the Service to book a Treatment, either for themselves or on behalf of others, 
            will be referred to as a "Hetyra Member".
          </p>
          <p className="mb-4">
            Please note that the Services, including Telehealth Services, are not intended for medical emergencies. If you are experiencing a 
            medical emergency, you should immediately dial "911".
          </p>
          <p className="mb-4">
            b. License to Use the Service. Subject to the terms and conditions of these Terms, Hetyra grants you a limited, revocable, non-exclusive, 
            non-transferable license to access and use the Service, solely for its intended purpose. Unless otherwise specified in writing, the Service 
            is for your personal use only and not for resale. Hetyra reserves the right, at its sole discretion, to:
            <ul>
              <li>(i) restrict or terminate your access to the Service (or any part thereof); and</li>
              <li>(ii) modify or discontinue providing the Service (or any part thereof), with or without notice.</li>
            </ul>
          </p>
          <p className="mb-4">
            c. Privacy Policy. Hetyra's policy regarding the collection and use of your personally identifiable information is outlined in our Privacy 
            Policy. By agreeing to these Terms, you acknowledge your acceptance of Hetyra's Privacy Policy.
          </p>
        </section>

        <section id="registration" className="mb-5">
          <h2 className="h4 mb-3">2. Registration, Accounts, Passwords, and Security</h2>
          
          <p className="mb-4">
            a. Hetyra Members. To become a Hetyra Member, you must complete the registration process by providing Hetyra with current, complete, 
            and accurate information, as prompted by the applicable registration form.
          </p>

          <p className="mb-4">
            b. Providers. To become a Provider, you must enter into the Agreement Between Hetyra and Provider for Use of Hetyra Services 
            (the "Provider Agreement") and provide any necessary information to Hetyra to verify your identity and credentials, or as otherwise 
            outlined in the Provider Agreement. Providers offering virtual wellness services must also sign an addendum governing audiovisual usage.
          </p>

          <p className="mb-4">
            c. Accuracy of Information. You acknowledge that if you provide any untrue, inaccurate, outdated, or incomplete information to Hetyra, 
            Hetyra may terminate these Terms and your continued access to the Service.
          </p>

          <p className="mb-4">
            d. Eligibility
          </p>
          <p className="mb-4 ps-4">
            i. You represent and warrant that you are at least eighteen (18) years of age, that you have not been previously suspended or removed 
            from the Service, and that you possess the legal right and ability to enter into these Terms. THE SERVICE IS NOT FOR PERSONS UNDER 
            HETYRA'S STATED AGE MINIMUMS OR ANY USERS WHO HAVE BEEN PREVIOUSLY SUSPENDED OR REMOVED FROM THE SERVICE BY HETYRA.
          </p>

          <p className="mb-4 ps-4">
            Treatments may be booked for minors by a parent or legal guardian, who must be present in the same room during the entire appointment. 
            Guardians booking for minors must indicate they are booking for a dependent and provide the minor's age at the time of booking. For 
            massage therapy, physical therapy, and assisted stretching appointments, minors must wear T-shirts and shorts throughout the appointment.
          </p>

          <p className="mb-4 ps-4">
            Treatments may be booked for minors as follows:
            <ul className="mt-2">
              <li>16 and older for massage and assisted stretching</li>
              <li>10 and older for physical therapy</li>
            </ul>
          </p>

          <p className="mb-4 ps-4">
            ii. If you are using the Service on behalf of a Guest (an individual, company, entity, or organization), you represent and warrant that:
            <ul className="mt-2">
              <li>(A) You are an authorized representative of the Guest with the authority to bind the Guest to these Terms.</li>
              <li>(B) You agree to be bound by these Terms on behalf of the Guest.</li>
              <li>(C) Your Guest meets the eligibility requirements for the Service as outlined in these Terms.</li>
            </ul>
            You will also be responsible for ensuring that your Guest complies with these Terms.
          </p>

          <p className="mb-4">
            e. Credentials. As part of the registration process, you will be asked to select a username and password. You are entirely responsible 
            for maintaining the security and confidentiality of your account and password. You agree to notify Hetyra immediately of any unauthorized 
            use of your account or any other breach of security. To notify us, contact us at www.hetyra.com. You are responsible for all activities 
            under your username. If your password is hacked or stolen, you must notify Hetyra immediately. Hetyra is not liable for any loss incurred 
            due to someone else using your password or account, with or without your knowledge. You may be held liable for any losses incurred by 
            Hetyra or any other party due to unauthorized use of your account or password.
          </p>
        </section>

        <section id="responsibilities" className="mb-5">
          <h2 className="h4 mb-3">3. Your Responsibilities</h2>
          <p className="mb-3">
            You are permitted to use the Service only for lawful, non-commercial purposes (unless you are a Provider or Concierge Member), 
            in accordance with the intended functionality of the Service. By using the Service, you agree not to (and not to permit or assist 
            any third party in) doing the following:
          </p>

          <ul className="mb-4">
            <li className="mb-2">a. Use, copy, install, transfer, or distribute the Service except as explicitly authorized by these Terms;</li>
            <li className="mb-2">b. Modify, adapt, translate, reverse engineer, decompile, or disassemble any part of the Service or its content;</li>
            <li className="mb-2">c. Remove or alter any copyright, trademark, or proprietary rights notices contained within the Service;</li>
            <li className="mb-2">d. Create user accounts using automated processes or under false or fraudulent pretenses;</li>
            <li className="mb-2">e. Use any robots, spiders, scrapers, search tools, or other automated means to access, retrieve, or index any part of the Service;</li>
            <li className="mb-2">f. Probe, scan, or test the vulnerability of any system or network or breach any security or authentication measures;</li>
            <li className="mb-2">g. Reformat, mirror, or frame any part of the Service's web pages;</li>
            <li className="mb-2">h. Imply or state that any of your statements are endorsed by us, without prior written consent;</li>
            <li className="mb-2">i. Transmit any content that is unlawful, fraudulent, abusive, libelous, defamatory, obscene, or otherwise harmful;</li>
            <li className="mb-2">j. Transmit any harmful software or materials, including viruses, worms, Trojan horses, or other malicious components;</li>
            <li className="mb-2">k. Harvest or collect personal information about other users without their consent;</li>
            <li className="mb-2">l. Engage in or authorize any reverse engineering, disassembly, or hacking of the Service;</li>
            <li className="mb-2">m. Access or tamper with non-public areas of the Service or Hetyra's systems;</li>
            <li className="mb-2">n. Harass, abuse, harm, or incite harm to any individual or group, including Hetyra employees or other users;</li>
            <li className="mb-2">o. Create a new account if your previous account was disabled by Hetyra, without prior written consent;</li>
            <li className="mb-2">p. Solicit personal information from other users, except as allowed through the Service's features;</li>
            <li className="mb-2">q. Restrict, discourage, or inhibit anyone from using the Service;</li>
            <li className="mb-2">r. Gain unauthorized access to the Service, other users' accounts, or linked websites;</li>
            <li className="mb-2">s. Violate any applicable laws, regulations, or these Terms;</li>
            <li className="mb-2">t. Use the Service for illegal, inappropriate, or unauthorized conduct;</li>
            <li className="mb-2">u. Use or access the Service to build a competing service.</li>
          </ul>

          <p className="mb-4">
            We reserve the right to take legal action and implement technical measures to prevent violations of these Terms and enforce compliance.
          </p>
        </section>

        <section id="medical-disclaimers" className="mb-5">
          <h2 className="h4 mb-3">4. Medical-Related Disclaimers</h2>
          
          <p className="mb-4">
            a. The claims made in connection with the mobile application or through the service have not been evaluated by the Food and Drug 
            Administration and are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
          </p>

          <p className="mb-4">
            b. The content and information made available through the service, including materials (collectively, the "Content"), are provided 
            for informational purposes only. None of the content available through the service should be construed as professional medical advice 
            or consultation. The content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. By using the 
            service, you agree that you will not rely on the service as a substitute for professional medical advice and that you will always seek 
            the advice of your physician or other qualified health provider with any questions you may have regarding medical matters. In no event 
            will a medical professional/patient relationship be created by using the service.
          </p>

          <p className="mb-4">
            c. Hetyra does not recommend or endorse any specific tests, products, procedures, opinions, or other information that may be mentioned 
            on the service. You acknowledge and agree that the use of any information provided by Hetyra or other visitors to the service is solely 
            at your own risk. The service may contain health- or medical-related materials that some may consider sexually explicit. If you find these 
            materials offensive, you may not want to use the service.
          </p>

          <p className="mb-4">
            d. The service is continually updated, and Hetyra makes no warranty of any kind, implied or express, as to its accuracy or completeness. 
            Hetyra makes no warranty that the information available on the service includes the most recent findings.
          </p>

          <p className="mb-4">
            e. You acknowledge that your reliance on any information provided by the service or by any provider to you is solely at your own risk, 
            and you assume full responsibility for all risk associated therewith, as allowable to the extent of the law. The service is not for 
            medical emergencies. If you think you have an emergency, call 911 immediately.
          </p>

          <p className="mb-4">
            f. Although Hetyra provides information about various providers on the service, Hetyra does not recommend any of the providers and does 
            not provide the services rendered by such providers. Hetyra requests copies of providers' licenses, certifications, and other background 
            information, but Hetyra does not and cannot guarantee the accuracy or completeness of any such information-gathering or that a particular 
            provider is qualified to perform any given service.
          </p>

          <p className="mb-4">
            g. It is solely the responsibility of each Hetyra member, and not Hetyra, to determine whether a given provider is qualified and capable 
            of rendering services. Further, Hetyra does not and cannot guarantee that its identity verification processes (whether of Hetyra members 
            or providers) are accurate, and, to the fullest extent permitted by law, Hetyra disclaims any liability arising out of Hetyra's failure 
            to accurately verify the identity of a Hetyra member or provider. You should exercise common sense and caution to protect your and others' 
            personal property and personal safety. You agree that it is your responsibility to take reasonable precautions in all actions and 
            interactions with any third party you interact with in or through the service.
          </p>

          <p className="mb-4">
            h. You agree that treatment and medical treatment appointments may carry inherent risks, and by requesting a treatment or medical treatment, 
            you choose to assume those risks voluntarily. For example, the treatments and medical treatments may carry the risk of illness, bodily injury, 
            disability, or death, and you freely and willfully assume those risks by requesting such treatments or medical treatments. You assume full 
            responsibility for the choices you make before, during, and after your appointment. You represent that you have independently investigated 
            the advisability of using the service or receiving the treatments or medical treatments made available to you by Hetyra and the possible 
            risks involved in using such services. You agree to maintain your own insurance covering such risks and will look solely to such insurance 
            for reimbursement of any resulting damages.
          </p>
        </section>

        <section id="incident-reporting" className="mb-5">
          <h2 className="h4 mb-3">5. Incident Reporting and Legal Support</h2>
          
          <p className="mb-4">
            Hetyra takes the safety of users and providers seriously. In the event of any criminal activity during a session, including but not limited to 
            assault, harassment, or abuse, Hetyra will cooperate with law enforcement and provide relevant data to support legal proceedings. Additionally, 
            we will assist in seeking compensation for the victim from the responsible party. Any user or provider reported for such conduct will face 
            immediate and permanent account termination.
          </p>
        </section>

        <section id="service-scope" className="mb-5">
          <h2 className="h4 mb-3">6. Service Scope and Compliance</h2>
          
          <p className="mb-4">
            Providers are strictly limited to offering the services they have listed on the platform. All services must be lawful and accurately represented. 
            Any attempt to provide unlisted or unauthorized services—whether during or outside of a booked session—without explicit agreement from the client 
            is a violation. For example, if a provider offers additional services outside the scope of a scheduled 60-minute relaxation massage, this constitutes 
            a breach of policy. Such actions may result in an immediate account ban or financial penalties.
          </p>
        </section>

        <section id="anti-poaching" className="mb-5">
          <h2 className="h4 mb-3">7. No-Poaching Agreement</h2>
          
          <p className="mb-4">
            To protect the integrity of the platform, poaching—defined as offering or accepting services for payment outside the platform with clients met 
            through Hetyra—is strictly prohibited. If poaching is identified, both the user and provider will face permanent account suspension. Additionally, 
            violators may be subject to a financial penalty and potential legal action.
          </p>
        </section>

        <section id="limitations-liability" className="mb-5">
          <h2 className="h4 mb-3">8. Limitations of Liability</h2>
          
          <p className="mb-4">
            Hetyra is not responsible for any interactions or incidents that occur between users and providers outside of officially booked sessions on the 
            platform. We will not intervene, take action, or assume any liability for matters that arise beyond the scope of our services.
          </p>
        </section>

        <section id="booking" className="mb-5">
          <h2 className="h4 mb-3">9. Booking Treatments and Medical Treatments</h2>
          
          <p className="mb-4">
            As a condition of being permitted to make appointments for Treatments or Medical Treatments through the Service, 
            Hetyra Members agree to the following terms for all appointments booked on the Service.
          </p>

          <p className="mb-4">
            a. Treatments Booked Through the Service<br />
            Hetyra Members understand that Providers and Healthcare Providers providing the Services are highly trained, certified, 
            and licensed and specialize in medical, massage therapy, personal training, assisted stretch, yoga, mindfulness, and other 
            health and wellness techniques, as applicable. Hetyra does not tolerate any requests deemed sexual or inappropriate in nature. 
            Users reported for inappropriate behavior will be immediately removed from the Service. Hetyra Members agree that Treatments 
            are for therapeutic purposes only and should not be used if the person who will receive the Treatment is on any medication 
            that would be expected to weaken bone structure and/or connective tissue or lead to enhanced bleeding; have edema due to 
            chronic heart failure or kidney failure; have an inflammatory condition in the acute stage; have acute phlebitis and/or deep 
            venous thrombosis; have had an acute trauma or recent surgery; are in the first trimester of pregnancy; or where Treatment 
            is otherwise contraindicated. A Hetyra Member who uses the Service to book a Treatment or Medical Treatment on his or her own 
            behalf should consult a physician if uncertain as to whether a Treatment or Medical Treatment is appropriate for such Hetyra 
            Member, and a Hetyra Member who uses the Service to book a Treatment or Medical Treatment on behalf of a third party should 
            encourage that third party to do the same.
          </p>

          <p className="mb-4">
            b. Prices<br />
            The fees listed on the Service are the standard fees for the listed service, which Hetyra may change at any time in its sole 
            discretion by posting it on the Service. In addition, fees for services provided by a Provider or Healthcare Provider may vary 
            depending on a variety of factors such as length, day, time, or location of appointment. The fee you are ultimately charged is 
            the "Fee."
          </p>

          <p className="mb-4">
            c. No Liability<br />
            To the fullest extent permitted by law, Hetyra will not have any liability whatsoever for any of the services provided by 
            Providers or Healthcare Providers. Providers and Healthcare Providers bear sole liability for all of the services provided, 
            including those services that are booked through the Service.
          </p>

          <p className="mb-4">
            d. Exclusive Booking through Hetyra<br />
            In order to receive pre-negotiated rates with Providers or Healthcare Providers, Hetyra Members agree that once a Hetyra Member 
            has made an appointment with a Provider through the Hetyra Network, all subsequent appointments with the Provider or Healthcare 
            Provider will be made through Hetyra, for as long as: (i) the Provider or Healthcare Provider is an active participant in the 
            Hetyra Network, and (ii) the Hetyra Member continues to keep its account with Hetyra active and in good standing.
          </p>

          <p className="mb-4">
            e. Responsibility for Payment<br />
            You will be charged the Fee following your receipt of a Treatment by a Provider. You agree to pay to Hetyra all Fees, whether 
            or not you dispute the amount of the charge or the quality or nature of the services provided. You acknowledge that Treatments 
            obtained through the Service in all likelihood will not be covered under your health insurance plan, whether government-sponsored 
            or private. Notwithstanding the foregoing, Medical Treatments may be reimbursable under your benefit plan or any health insurance 
            plan, whether government-sponsored or private, although reimbursement is solely up to the applicable plan or program. Hetyra will 
            have no liability in connection with your ability to secure reimbursement for any such Medical Treatment. You acknowledge and agree 
            that Hetyra will not file any claims with your insurance benefit plan, the Medicare program or any other third-party medical 
            benefits program, and that the services you receive from or through Hetyra may not be eligible for reimbursement under such plans. 
            You acknowledge, understand, and agree that when using the Service, you may be responsible for standard phone, data, and messaging 
            charges from your wireless carrier. Under no circumstances will Hetyra be responsible for any wireless email, data, phone, or text 
            messaging charges incurred by you or by a person that has access to your wireless device, telephone number, or email address.
          </p>

          <p className="mb-4">
            f. Cancellations<br />
            If you cancel before your scheduled Treatment or Medical Treatment, then Hetyra may charge you a cancellation fee, which will be 
            set forth in the Cancellation Policy.
          </p>

          <p className="mb-4">
            g. Dispute Resolution<br />
            Although Hetyra retains the right to mediate any dispute between you and a Provider or a Healthcare Provider, all disputes between 
            you and such Provider or Healthcare Provider must ultimately be resolved between you and the Provider or Healthcare Provider directly. 
            All sales booked through the Service are final and Hetyra provides no refunds, except as determined in Hetyra's sole discretion. For 
            the avoidance of doubt, Hetyra will not refund you for any reason if you receive a Treatment or Medical Treatment, except as determined 
            in its sole discretion. If you engage in conduct deemed inappropriate or unsafe by a Provider or Healthcare Provider, as determined in 
            the Provider's sole discretion, including, but not limited to, making inappropriate requests, engaging in inappropriate touching, or the 
            Provider or Healthcare Provider perceives a threat to his/her safety or well-being, and such conduct results in a Provider or Healthcare 
            Provider ending the Treatment or Medical Treatment prior to the end of the allotted time, Hetyra will not refund you.
          </p>

          <p className="mb-4">
            h. Concierge Bookings<br />
            If a Hetyra Member is a concierge that books Treatments on behalf of third parties, including Guests ("Concierge Member"), then this 
            paragraph applies to such Concierge Member's use of the Service in addition to all other terms and conditions in these Terms.
          </p>

          <p className="mb-4">
            i. No Conflicts<br />
            By accessing and/or using the Service as a Concierge Member, you hereby represent, warrant, and covenant to us that such access and/or 
            use of the Service does not and will not violate any contract or agreement between you and any third party, including, without limitation, 
            your employer.
          </p>

          <p className="mb-4">
            j. Concierge Tip<br />
            Concierge Members will receive a tip for any Treatments booked through the Service in an amount set forth on the Service, which amount 
            Hetyra may change from time to time in its sole discretion ("Concierge Tip"). The Concierge Member must provide to Hetyra any information 
            and/or documentation that Hetyra needs to pay the Concierge Tip to the Concierge Member (including, without limitation, a W-9 form and any 
            other tax-related information). Hetyra will pay the Concierge Tip to the Concierge Member on a weekly basis through the Automated Clearing 
            House. With respect to each Treatment the Concierge Member books through the Service, the Concierge Member must include all information 
            required by the Service and any other relevant information that would be necessary and/or helpful to enable the Provider to provide the 
            Treatment, which includes, without limitation, the Treatment recipient's name and address, any parking instructions, and whether the Provider 
            must supply a massage table, or any other equipment.
          </p>

          <p className="mb-4">
            k. Reserved Tables<br />
            You agree to use commercially reasonable efforts to determine whether your employer or commercial or residential building has stored massage 
            tables or other equipment for Hetyra. You further agree to promptly provide such information to Hetyra upon Hetyra's request. Hetyra may 
            retrieve any such tables or other equipment at any time in its sole discretion, without prior notice or liability to you.
          </p>
        </section>

        <section id="referral-program" className="mb-5">
          <h2 className="h4 mb-3">10. Referral Program</h2>
          
          <p className="mb-4">
            You may be able to earn free Treatments by inviting friends to book through Hetyra using the promo code assigned to you by Hetyra 
            ("Code"). Codes are for personal and non-commercial use only and may not be duplicated, sold, or transferred in any manner. This means 
            that you are welcome to share your Code with friends, family, and your social network, as long as you are the primary content owner of 
            such a network. Both you and each friend or family member who signs up with your Code and completes a Treatment will receive the credit 
            set forth on the Service ("Credit"); provided that you may not accrue more than $500 in Credit at any given time. The expiration date for 
            Credits will be stated on the Service. Codes are not intended for distribution on public sites, such as Yelp or Facebook, coupon code 
            websites, such as RetailMeNot, or via search engines. We reserve the right to disable your Code at our sole discretion. Codes:
          </p>

          <ul className="mb-4">
            <li>(a) may only be used pursuant to the specific terms that Hetyra establishes for such Code;</li>
            <li>(b) are not valid for cash; and</li>
            <li>(c) may expire prior to your use.</li>
          </ul>

          <p className="mb-4">
            Hetyra reserves the right to withhold or deduct Credits or other features or benefits obtained through the use of Codes by you or any 
            other user in the event that Hetyra determines or believes that the use or redemption of the Code was in error, fraudulent, illegal, 
            or in violation of the applicable Code terms or these Terms.
          </p>
        </section>

        <section id="providing-treatments" className="mb-5">
          <h2 className="h4 mb-3">11. Providing Treatments</h2>
          
          <p className="mb-4">
            The terms governing Providers with respect to providing Treatments are set forth in the Provider Agreement. The terms governing 
            Healthcare Providers providing Medical Treatments are subject to a separate written agreement between Hetyra and the applicable Practice.
          </p>
        </section>

        <section id="electronic-communications" className="mb-5">
          <h2 className="h4 mb-3">12. Consent to Electronic Communications</h2>
          
          <p className="mb-4">
            a. Consent to Electronic Communications<br />
            By using the Service or providing Personal Information (as defined in the Privacy Policy) such as your email or phone number to us, 
            you agree that we may communicate with you electronically to receive transactional communications relating to the Service and/or regarding 
            security, privacy, and administrative issues relating to your use of the Service (i.e., update on the status of arrival, timing, and to 
            confirm appointments). If we learn of a security system's breach, we may attempt to notify you electronically by posting a notice on the 
            Service or sending an email to you, if we have your email address.
          </p>

          <p className="mb-4">
            b. SMS Text Messages and Push Notifications<br />
            When you register with Hetyra, Hetyra will send you an SMS text message containing a 6-digit code in order to verify your phone number and 
            will send SMS text messages and push notifications (Messages and Notifications) to keep you informed about the Service. For example, Hetyra 
            will send you a text message to confirm or remind you of your scheduled appointment(s). By using the Service, you agree to receive Messages 
            and Notifications regarding your use of the Service. SMS text messages are for transactional purposes only. While Messages and Notifications 
            are intended to enhance your use of the Service, you may (i) disable push notifications on your device, and/or (ii) remove yourself from our 
            text message database. You recognize and acknowledge that SMS messaging is an inherently less secure method of communication and agree to 
            receive text messages regardless of the level of security associated with them. Message and data rates may apply.
          </p>

          <p className="mb-4">
            c. Opt-Out of Communications<br />
            If you wish to remove yourself from any list (other than as set forth in Section 7.b), please email us with an "OPT-OUT", "UNSUBSCRIBE", 
            "STOP", or "REMOVE" in the subject line.
          </p>

          <p className="mb-4">
            d. Carrier Charges<br />
            Depending on your current carrier plan, you may incur charges for these Messages and Notifications and agree to not hold Hetyra liable for 
            any charges incurred. You acknowledge that any terms between you and any third-party provider (such as, for example, Apple®, Android™, or 
            Verizon) create no obligation or responsibility on the part of Hetyra, and that Hetyra is not responsible for any failure of warranty by any 
            such third party.
          </p>

          <p className="mb-4">
            e. Delivery Limitations<br />
            Hetyra cannot control certain factors relating to message delivery. You acknowledge that, depending on your mobile carrier's service, it may 
            not be possible to transmit a text message to you successfully. We have no liability for transmission delays or message failures.
          </p>

          <p className="mb-4">
            f. Marketing Text Messages<br />
            Consent to receive marketing text messages, which are subject to separate consent terms, are not a condition of purchasing any of Hetyra's 
            goods or Services, and you are free to opt-out at any time of marketing text messages as set forth immediately above in Section 12(c). Note 
            that we may confirm your opt-out by text message. If you subscribe to multiple types of text messages from us, we may unsubscribe you from 
            the service that most recently sent you a message or respond to your "STOP" message by texting you a request to identify the Service(s) that 
            you wish to stop. Keep in mind that if you stop receiving marketing or transactional text messages from us, you may not receive important and 
            helpful information and reminders.
          </p>
        </section>

        <section id="content-submission" className="mb-5">
          <h2 className="h4 mb-3">13. Content Submitted to Hetyra</h2>
          
          <p className="mb-4">
            a. Submission of Materials<br />
            By sending or transmitting to us information, opinions, creative suggestions, ideas, notes, concepts, or other materials (collectively, 
            "Materials"), or by posting such Materials to any area of the Service, you grant Hetyra and its designees a worldwide, non-exclusive, 
            sublicensable (through multiple tiers), assignable, royalty-free, perpetual, irrevocable right to use, reproduce, distribute (through 
            multiple tiers), create derivative works of, publicly perform, publicly display, digitally perform, make, have made, sell, offer for sale, 
            and import such Materials in any media now known or hereafter developed to enhance and develop the Service, including by marketing and 
            advertising the Service, without compensation to you. Provided that we will never use your name in connection with any of your Materials 
            that we use in our own advertising and marketing materials without obtaining your prior consent. Furthermore, if you are a Provider, the 
            use of certain Materials (for example, your biography, photo, and other information associated with your profile on the Service) will be 
            as set forth in the Provider Agreement. None of the Materials will be subject to any obligation, whether of confidentiality, attribution, 
            or otherwise, on our part, and we will not be liable for any use or disclosure of any Materials. Hetyra may remove or alter any Materials 
            at any time for any reason. We neither endorse nor are responsible for any opinion, advice, information, or statement made or displayed 
            on the Service by any user. We are not responsible for any errors or omissions in articles or postings, for hyperlinks embedded in messages, 
            or for any results obtained from the use of such information. Under no circumstances will Hetyra and/or its affiliates, suppliers, or agents 
            be liable for any loss or damage caused by your reliance on such information obtained through the Service. We cannot and do not take 
            responsibility for the veracity, reliability, or completeness of any opinion, advice, information, or statement available on the Service.
          </p>

          <p className="mb-4">
            b. User Opinions<br />
            The opinions expressed on the Service by users reflect solely the opinions of the users who post them and do not reflect the opinions of 
            Hetyra. You acknowledge and agree that we have the right (but not the obligation) to monitor the Service and Materials; to alter or remove 
            any Materials; and to disclose Materials and the circumstances surrounding their transmission to any third party in order to operate the 
            Service properly; to protect ourselves, our sponsors, and our members and visitors; and to comply with legal obligations or governmental 
            requests. If you believe a message violates our member policies, please contact Hetyra immediately at www.hetyra.com.
          </p>

          <p className="mb-4">
            c. Responsibility for Materials<br />
            You are solely responsible for your Materials and the consequences of posting them on the Service. By posting Materials, you represent, 
            warrant, and covenant that:
            <ul className="mt-2">
              <li>(i) you are the creator and owner of the Materials or otherwise have sufficient rights and authority to grant the rights granted herein;</li>
              <li>(ii) your Materials do not and will not:
                <ul>
                  <li>(A) infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, 
                  privacy right, right of publicity, or any other intellectual property or proprietary right, or</li>
                  <li>(B) slander, defame, or libel any other person;</li>
                </ul>
              </li>
              <li>(iii) your Materials do not contain any viruses, adware, spyware, worms, or other harmful or malicious code, or</li>
              <li>(iv) unless you have received prior written authorization, your Materials specifically do not contain any confidential information of any 
              third party.</li>
            </ul>
            We reserve all rights and remedies against any users who breach these representations and warranties.
          </p>

          <p className="mb-4">
            d. Sending Messages<br />
            The Service may allow Providers and Hetyra Members to exchange messages ("Messages") with each other. Sending Messages is a privilege, not a 
            right, and Hetyra may terminate such privileges of any user at any time and for any reason, without any liability to such user. Harmful, 
            obscene, or offensive communications are not welcome in any Messages. If a user sends you an objectionable Message, please notify us by 
            sending an email to help@hetyra.com. You should exercise discretion, good sense, and sound judgment when sending a Message. You are solely 
            responsible for the content of any Message you send. You agree that Hetyra may monitor Messages for compliance with these Terms, and therefore, 
            Messages should not be considered confidential or proprietary. You hereby grant us an assignable, sublicensable, irrevocable license to reproduce 
            and transmit your Messages in connection with facilitating transfer to the intended recipient through the Service and for such other purposes as 
            Hetyra may deem appropriate in its sole discretion.
          </p>
        </section>

        <section id="contests" className="mb-5">
          <h2 className="h4 mb-3">14. Contests</h2>
          
          <p className="mb-4">
            Hetyra may provide contests on the Service. The rules, regulations, and procedures governing such contests ("Contest Rules") will be 
            accessible through a hypertext link displayed on the web page where the contest or game may be located. By entering or participating 
            in any of our contests or games, you agree to be subject to those rules, regulations, and procedures as well as the terms and conditions 
            of these Terms. In the event of a conflict between any Contest Rules and these Terms, the applicable Contest Rules will govern.
          </p>
        </section>

        <section id="term-and-termination" className="mb-5">
          <h2 className="h4 mb-3">15. Term and Termination</h2>
          
          <p className="mb-4">
            a. Term of Agreement<br />
            The term of these Terms (the "Term") will commence on the date on which you first access or utilize the Service in any way (the 
            "Effective Date") and will continue as long as you continue to access or utilize the Service; provided that Hetyra reserves the right 
            to take whatever lawful actions it may deem appropriate in response to actual or suspected violations of these Terms, including, without 
            limitation, the suspension or termination of the user's access and/or account, or blocking the user from access to the Service. Hetyra 
            may cooperate with legal authorities and/or third parties in the investigation of any suspected or alleged crime or civil wrong. Except 
            as may be expressly limited by the Privacy Policy, Hetyra reserves the right at all times to disclose any information as Hetyra deems 
            necessary to satisfy any applicable law, regulation, legal process, or governmental request, or to edit, refuse to post, or remove any 
            information or materials, in whole or in part, at Hetyra's sole discretion.
          </p>

          <p className="mb-4">
            b. Effect of Termination<br />
            Payments by you, which accrue or are due before termination of your Massage Hetyra Membership, will continue to be payable by you, 
            and amounts owed to Hetyra at the time of such termination or expiration will continue to be owed by you, after such expiration or 
            termination.
          </p>
        </section>

        <section id="ownership" className="mb-5">
          <h2 className="h4 mb-3">16. Ownership</h2>
          
          <p className="mb-4">
            a. Proprietary Information<br />
            You acknowledge and agree that:
            <ul className="mt-2">
              <li>(i) the Service, including, without limitation, any Content, modifications, enhancements, and updates, and any originals and copies 
              thereof, in whole or in part, and all intellectual property rights therein (collectively, "Proprietary Information"), is owned by Hetyra 
              and its licensors, as applicable;</li>
              <li>(ii) the Proprietary Information contains valuable copyrighted and proprietary material of Hetyra;</li>
              <li>(iii) the Proprietary Information is licensed, rather than sold, to you pursuant to these Terms; and</li>
              <li>(iv) you have no rights in the Proprietary Information, other than the rights and licenses specifically granted to you pursuant to 
              these Terms.</li>
            </ul>
          </p>

          <p className="mb-4">
            b. Trademarks<br />
            You acknowledge that Hetyra has acquired, and is the owner of, trademark rights in the name and word mark "Hetyra"Ⓡ and in the other marks 
            and design marks displayed on the Service. You acknowledge that this name and these marks are famous and internationally known. You will not, 
            at any time or for any reason, challenge the validity of, or Hetyra's ownership of, the foregoing name and marks, and you waive any rights 
            you may have at any time to do so. All use of the foregoing name and marks by you will insure exclusively to the benefit of Hetyra. All marks 
            shown on the Service but not owned by Hetyra are the property of their respective owners.
          </p>
        </section>

        <section id="copyright-infringement" className="mb-5">
          <h2 className="h4 mb-3">17. Claims of Copyright Infringement</h2>
          
          <p className="mb-4">
            The Copyright Modernization Act (CMA) provides recourse for copyright owners who believe that material appearing on the Internet infringes 
            their rights under Canadian copyright law. If you believe in good faith that materials hosted by Hetyra infringe your copyright, you (or your 
            agent) may send us a notice requesting that the material be removed or access to it blocked. The notice must include the following information:
          </p>

          <p className="mb-4">
            <ul className="mb-3">
              <li>a. A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed;</li>
              <li>b. Identification of the copyrighted work claimed to have been infringed (or, if multiple copyrighted works located on the Service are 
              covered by a single notification, a representative list of such works);</li>
              <li>c. Identification of the material that is claimed to be infringing or the subject of infringing activity, along with information reasonably 
              sufficient to allow Hetyra to locate the material on the Service;</li>
              <li>d. The name, address, telephone number, and email address (if available) of the complaining party;</li>
              <li>e. A statement that the complaining party has a good faith belief that the use of the material in the manner complained of is not authorized 
              by the copyright owner, its agent, or the law; and</li>
              <li>f. A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized 
              to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            </ul>
          </p>

          <p className="mb-4">
            If you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the CMA permits you to send Hetyra a 
            counter-notice. Notices and counter-notices must meet the then-current statutory requirements imposed by the CMA. For more details, please 
            consult the appropriate legal guidelines. Notices and counter-notices with respect to the Service should be sent to Janice Bader, Symbus Law 
            Group, P.O. Box 933, Culpeper, Virginia 22701, or by email at jbader@symbus.com with the subject line "Hetyra CMA Notice" or "Hetyra CMA 
            Counter-notice," as applicable. We suggest that you consult your legal advisor before filing a notice or counter-notice. Also, be aware that 
            there can be penalties for false claims under the CMA.
          </p>
        </section>

        <section id="indemnification" className="mb-5">
          <h2 className="h4 mb-3">18. Indemnification and Release</h2>
          
          <p className="mb-4">
            a. To the fullest extent permitted by law, you agree to defend, indemnify, and hold harmless Hetyra, its parents, subsidiaries, affiliates, 
            officers, employees, agents, partners, suppliers, and licensors (each, a "Hetyra Party" and collectively, the "Hetyra Parties") from any loss 
            or damage of any kind (including, but not limited to, attorneys' fees and lost revenues) arising from: (i) any breaches by you of these Terms 
            or any representation, warranty, or covenant contained herein; (ii) any use of the Service not specifically authorized under these Terms or on 
            the Service; and (iii) any claims or actions against Hetyra by other parties to whom you provide access to the Service.
          </p>

          <p className="mb-4">
            b. To the fullest extent permitted by law, you also waive, release, and forever discharge the Hetyra Parties from any and all liability for 
            injuries or damages resulting from your Treatments, Medical Treatments, Telehealth Services, or any other service obtained through the use of 
            the Service, including injuries or damages caused by the negligent acts or omissions of the Hetyra Parties, or in any way arising out of or 
            connected with the Service.
          </p>

          <p className="mb-4">
            c. We reserve the right, at our own expense, to assume exclusive defense and control over any matter that would otherwise be subject to 
            indemnification by you. In such cases, you agree to cooperate with our defense of the claim. You may not settle any claim or matter without 
            our prior written consent.
          </p>
        </section>

        <section id="warranty-disclaimer" className="mb-5">
          <h2 className="h4 mb-3">19. Disclaimer of Warranty</h2>
          
          <p className="mb-4">
            a. For Individual Users of the Service (Including Hetyra Members)<br />
            Certain jurisdictions' laws may not permit the exclusion or limitation of legal warranties, conditions, liability, or certain damages, or may 
            impose additional rights. If these laws apply to you, some or all of the exclusions or limitations outlined below may not apply, and you may 
            have additional rights.
          </p>

          <p className="mb-4">
            Hetyra makes no representations, warranties, or conditions, express or implied, including but not limited to warranties of merchantability, 
            satisfactory quality, fitness for a particular purpose, title, compatibility, security, accuracy, non-infringement, or usefulness regarding 
            the products or services. We do not guarantee: (1) that the Services will meet your requirements; (2) that the information, content, or data 
            on the Services is accurate; (3) that your use of the Services will be uninterrupted, timely, secure, or error-free; or (4) that any errors 
            in the Services will be corrected.
          </p>

          <p className="mb-4">
            You agree that any claims or actions arising from the conduct of any providers (or healthcare providers) or Hetyra members will be exclusively 
            between you and the provider (or healthcare provider) or Hetyra member, and not Hetyra. The products and services are provided "as is," and 
            you agree to use them, including any telehealth services, at your own risk. You assume full responsibility and risk for any loss resulting 
            from your use of the Services. We are not liable for any damages or harm related to the foregoing.
          </p>

          <p className="mb-4">
            You understand and acknowledge that Hetyra merely provides a platform for communication between providers (or healthcare providers) and Hetyra 
            members, and therefore, Hetyra disclaims any liability regarding your interactions with any provider(s) (or healthcare provider(s)) or other 
            Hetyra member(s). Any representations made by providers (or healthcare providers) are solely at their discretion, and Hetyra has no obligation to monitor or validate, and is not responsible for, any 
            representations or statements made by them. You further understand and acknowledge that Hetyra shall not be 
            held liable for any statements or representations made by the provider(s) (or healthcare provider(s)) as a result of your use of the Service.
          </p>

          <p className="mb-4">
            You also acknowledge that the Service was not developed to meet your specific requirements, and it is your responsibility to ensure that the 
            Service meets your needs.
          </p>

          <p className="mb-4">
            b. For Corporate Hetyra Members and Providers<br />
            Hetyra makes no representations, warranties, or conditions, express or implied, including but not limited to warranties of merchantability, 
            satisfactory quality, fitness for a particular purpose, title, compatibility, security, accuracy, non-infringement, or usefulness regarding 
            the products or services. We do not guarantee: (1) that the Services will meet your requirements; (2) that the information, content, or data 
            on the Services is accurate; (3) that your use of the Services will be uninterrupted, timely, secure, or error-free; or (4) that any errors 
            in the Services will be corrected.
          </p>

          <p className="mb-4">
            You agree that any claims or actions arising from the conduct of any providers (or healthcare providers) or Hetyra members will be exclusively 
            between you and the provider or Hetyra member, and not Hetyra. The Services are provided "as is," and you agree to use them solely at your own 
            risk. You assume full responsibility and risk for any loss resulting from your use of the Services. You understand and acknowledge that Hetyra 
            merely provides a platform for communication between providers (or healthcare providers) and Hetyra members, and Hetyra disclaims any liability 
            regarding your interactions with any provider(s) (or healthcare provider(s)) or other Hetyra member(s). Any representations made by providers 
            (or healthcare providers) are solely at their discretion, and Hetyra has no obligation to monitor or validate, and is not responsible for, any 
            representations or statements made by the providers (or healthcare providers). You further understand and acknowledge that Hetyra shall not be 
            held liable for any statements or representations made by the provider(s) (or healthcare provider(s)) as a result of your use of the Service.
          </p>

          <p className="mb-4">
            Certain local laws may not permit limitations on implied warranties. If these laws apply to you, some or all of the disclaimers outlined here 
            may not apply, and you may have additional rights.
          </p>
        </section>

        <section id="limitation-of-liability" className="mb-5">
          <h2 className="h4 mb-3">20. Limitation of Liability</h2>
          
          <p className="mb-4">
            a. Disclaimer of Certain Damages<br />
            You acknowledge and agree that, under no circumstances, will Hetyra or its affiliates be liable for any loss of profits, revenue, data, or any 
            indirect, incidental, special, or consequential damages. This includes damages or costs due to loss of production, use, business interruptions, 
            or the procurement of substitute goods or services. This applies whether or not Hetyra was advised of the potential for such damages, and arises 
            from: (1) the use or inability to use the service; (2) the costs of obtaining substitute goods or services from transactions made through the 
            service; (3) unauthorized access to or alteration of your data or transmissions; (4) statements or actions of any third party, including healthcare 
            providers, available through the service; or (5) any other matter related to the service, whether based on warranty, copyright, contract, tort 
            (including negligence), or any other legal theory. The limitation on liability does not apply to Hetyra's liability for (a) death or personal 
            injury caused by Hetyra's negligence or (b) injury caused by Hetyra's fraud or fraudulent misrepresentation.
          </p>

          <p className="mb-4">
            b. Cap on Liability<br />
            Under no circumstances will Hetyra or its affiliates be liable to you for more than the greater of: (a) the total amount you have paid to Hetyra 
            in the one-month period before the event giving rise to the liability, or (b) the remedy or penalty required by the applicable statute under which 
            the claim arises. This limitation of liability does not apply to Hetyra's liability for (a) death or personal injury caused by Hetyra's negligence 
            or (b) injury caused by Hetyra's fraud or fraudulent misrepresentation.
          </p>

          <p className="mb-4">
            c. Basis of the Bargain<br />
            The limitations on damages outlined above are a fundamental part of the agreement between you and Hetyra.
          </p>
        </section>

        <section id="third-party-disputes" className="mb-5">
          <h2 className="h4 mb-3">21. Third-Party Disputes</h2>
          
          <p className="mb-4">
            Hetyra is not affiliated with any carrier, service provider, or third-party service. Any dispute you have with a carrier, service provider, 
            third-party service, or any other third party arising from your use of the service, including disputes with other users or your employer, is 
            solely between you and that third party. You hereby irrevocably release Hetyra, along with its officers, directors, agents, subsidiaries, joint 
            ventures, and employees, from any and all claims, demands, and damages (both actual and consequential), whether known or unknown, arising from 
            or related to such disputes.
          </p>
        </section>

        <section id="force-majeure" className="mb-5">
          <h2 className="h4 mb-3">22. Force Majeure</h2>
          
          <p className="mb-4">
            Hetyra shall not be held liable for any delay or failure to perform its obligations under these Terms if such delay or failure is caused by 
            unforeseen events beyond Hetyra's reasonable control, including but not limited to strikes, blockades, war, terrorism, riots, natural disasters, 
            epidemics, or government actions, to the extent that such events prevent or delay Hetyra from fulfilling its obligations.
          </p>
        </section>

        <section id="indemnification-release" className="mb-5">
          <h2 className="h4 mb-3">23. Indemnification and Release</h2>
          
          <p className="mb-4">
            a. To the fullest extent allowed by law, you agree to defend, indemnify, and hold Hetyra, its licensors, and their respective parent companies, 
            subsidiaries, affiliates, officers, directors, members, employees, attorneys, and agents harmless from any loss or damage, including but not 
            limited to legal fees and lost revenue, arising from: (i) any breach by you of these Terms or any representation, warranty, or covenant herein; 
            (ii) any unauthorized use of the Service; and (iii) any claims or actions brought against Hetyra by others to whom you provide access to the Service.
          </p>

          <p className="mb-4">
            b. To the fullest extent permitted by law, you also waive, release, and forever discharge the Hetyra Parties from any liability or responsibility 
            for injuries or damages resulting from your treatments or any other services obtained through the Service, including those caused by the negligence 
            of the Released Parties, or in any way connected with the Service.
          </p>

          <p className="mb-4">
            c. We reserve the right, at our expense, to assume exclusive control and defense of any matter that would otherwise be subject to your indemnification 
            obligations. In such cases, you agree to cooperate with our defense of the claim. You may not settle any claim or matter without our prior written consent.
          </p>
        </section>

        <section id="additional-features" className="mb-5">
          <h2 className="h4 mb-3">24. Additional Service Features</h2>
          
          <p className="mb-4">
            The Service may include information about products and services offered by third parties, including Providers, as well as links (including advertisements) 
            to third-party websites. These products, services, and links are provided solely for the convenience of users. Hetyra does not review, control, or endorse 
            this information, nor does it make any representations or warranties, either express or implied, regarding such products, services, or websites. The inclusion 
            of any third-party content in the Service does not signify Hetyra's endorsement, authorization, sponsorship, or affiliation with any third party, its website, 
            or its offerings. Hetyra is not obligated to maintain any link on the Service and may remove links at its sole discretion and for any reason.
          </p>
        </section>

        <section id="dispute-resolution" className="mb-5">
          <h2 className="h4 mb-3">25. Dispute Resolution</h2>
          
          <p className="mb-4">
            a. Mandatory Arbitration<br />
            Please read carefully, as this affects your rights. YOU AND Hetyra, ALONG WITH OUR RESPECTIVE CORPORATE PARENTS, SUBSIDIARIES, AFFILIATES, 
            SUCCESSORS, PREDECESSORS, AND ASSIGNS, AGREE TO ARBITRATION (EXCEPT FOR MATTERS THAT MAY BE TAKEN TO SMALL CLAIMS COURT) AS THE EXCLUSIVE 
            FORM OF DISPUTE RESOLUTION, UNLESS OTHERWISE STATED BELOW, FOR ALL DISPUTES AND CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR 
            USE OF THE SERVICE. Arbitration involves a neutral arbitrator instead of a judge or jury, allows for more limited discovery than in court, 
            and is subject to very limited judicial review.
          </p>

          <p className="mb-4">
            i. Commencing Arbitration<br />
            A party seeking arbitration must first send a written notice of intent to arbitrate (a "Notice") to the other party, either by mail or 
            electronic mail. If a mailing address is not provided by you to Hetyra, Hetyra may use any available method, including email. If you are 
            required to pay a filing fee to initiate arbitration, Hetyra will reimburse you promptly upon receipt of your Notice and filing fee receipt, 
            unless your Demand is over $1,000 or was filed in bad faith.
          </p>

          <p className="mb-4">
            ii. Arbitration Proceeding<br />
            The arbitration will be conducted in English. A single impartial arbitrator will be appointed according to the Rules, modified as per these 
            Terms. You and Hetyra agree to streamline the dispute resolution process by following these rules: (A) the arbitration may be conducted by 
            phone, online, or be based solely on written submissions, as chosen by the party initiating the arbitration; (B) no personal appearance will 
            be required unless mutually agreed in writing; and (C) any judgment from the arbitrator may be entered in any court of competent jurisdiction.
          </p>

          <p className="mb-4">
            iii. No Class Actions<br />
            YOU AND Hetyra AGREE THAT YOU AND Hetyra MAY ONLY BRING CLAIMS AGAINST EACH OTHER IN INDIVIDUAL CAPACITY, NOT AS A PLAINTIFF OR CLASS MEMBER 
            IN ANY CLASS OR REPRESENTATIVE PROCEEDING. FURTHER, YOU AGREE THAT THE ARBITRATOR CANNOT CONSOLIDATE CLAIMS OR PRESIDE OVER A REPRESENTATIVE 
            OR CLASS PROCEEDING, AND IF THIS IS FOUND TO BE UNENFORCEABLE, THE ENTIRE MANDATORY ARBITRATION SECTION WILL BE VOID.
          </p>

          <p className="mb-4">
            iv. Decision of the Arbitrator<br />
            The arbitrator will issue a decision within 120 days from the date of appointment, unless extended by 30 days in the interest of justice. 
            Arbitration proceedings will be confidential, and records will be sealed, except as necessary to confirm the award in court. The award will 
            include reasons for the decision and will apply Canadian law. You agree that the transaction is interstate commerce, governed by the Canadian 
            Arbitration Act. If the dispute is resolved in your favor, Hetyra will pay the highest of: (A) the amount awarded by the arbitrator; (B) the 
            last written settlement offer before the award; or (C) $1,000.
          </p>

          <p className="mb-4">
            b. Equitable Relief<br />
            The above provisions do not apply to claims where Hetyra seeks equitable relief. You acknowledge that, in the event of a breach by Hetyra or 
            a third party, your only remedy will be monetary damages, not injunctive or other equitable relief.
          </p>

          <p className="mb-4">
            c. Claims<br />
            Any cause of action related to these Terms or the Service, excluding indemnification claims, must be initiated within one year after the claim 
            arises. Claims not filed within one year are permanently barred.
          </p>

          <p className="mb-4">
            d. Improperly Filed Claims<br />
            All claims must be resolved in accordance with this Section 19. If a claim is filed contrary to this section, Hetyra may recover up to $5,000 
            in attorneys' fees and costs, provided Hetyra notified you in writing and you did not promptly withdraw the claim.
          </p>

          <p className="mb-4">
            e. Modifications<br />
            If Hetyra changes the Mandatory Arbitration provision (other than a change to Hetyra's address), you may reject the change by sending written 
            notice to Hetyra within 30 days. If you reject the change, your account and service access will be terminated, and this section will survive 
            termination.
          </p>

          <p className="mb-4">
            f. Enforceability<br />
            If Section 19.a.iii or the entire Section 19 is found unenforceable, the exclusive jurisdiction and venue described in Section 20 will apply.
          </p>
        </section>

        <section id="feedback" className="mb-5">
          <h2 className="h4 mb-3">26. Feedback</h2>
          
          <p className="mb-4">
            While our team continually works on developing and assessing our own product ideas and features, we value and carefully consider the interests, 
            feedback, comments, and suggestions provided by our users. If you send us, or our employees, any ideas or suggestions for products, services, 
            features, modifications, enhancements, content, promotions, strategies, product/feature names, or any related materials (collectively referred 
            to as "Feedback"), the following terms will apply, regardless of the content of your communication, to avoid any future misunderstandings. By 
            providing Feedback, you agree to the following:
          </p>

          <p className="mb-4">
            a. Hetyra will exclusively own all known or later discovered rights to the Feedback;
          </p>

          <p className="mb-4">
            b. Hetyra will not be bound by any obligation of confidentiality and will not be liable for any use or disclosure of the Feedback; and
          </p>

          <p className="mb-4">
            c. Hetyra will have the right to use the Feedback for any purpose, whether commercial or otherwise, without compensating you or any other party.
          </p>
        </section>

        <section id="entire-agreement" className="mb-5">
          <h2 className="h4 mb-3">27. Entire Agreement; Modification</h2>
          
          <p className="mb-4">
            These Terms, along with any licenses contained in Hetyra's products, represent the complete and exclusive agreement between Hetyra and you 
            regarding the Service. However, please note the following exceptions: (1) Providers must also agree to the Provider Agreement, and may sometimes 
            be required to sign an addendum to the Provider Agreement; (2) Hetyra may enter into additional agreements with you, such as the Massage Hetyra 
            Membership Program Agreement. In the event of a conflict between these Terms and the Provider Agreement, the Provider Agreement will take 
            precedence. Similarly, if there is a conflict between these Terms and the Massage Hetyra Membership Program Agreement, the Massage Hetyra 
            Membership Program Agreement will govern.
          </p>
        </section>

        <section id="severability" className="mb-5">
          <h2 className="h4 mb-3">28. Severability</h2>
          
          <p className="mb-4">
            If any provision of these Terms is found to be invalid, illegal, or unenforceable, that provision will be amended or, if modification is not 
            possible, severed, in order to reflect the intent of the parties as closely as possible in a valid, legal, and enforceable manner. The rest of 
            these Terms will remain unaffected.
          </p>
        </section>

        <section id="relationship" className="mb-5">
          <h2 className="h4 mb-3">29. Relationship of the Parties</h2>
          
          <p className="mb-4">
            Nothing in these Terms will be construed to establish an employer-employee relationship, nor create an agency, joint venture, or partnership 
            between Hetyra and you. Neither party has the authority to bind the other to any obligations or incur liabilities on behalf of the other.
          </p>
        </section>

        <section id="waiver" className="mb-5">
          <h2 className="h4 mb-3">30. Waiver</h2>
          
          <p className="mb-4">
            No delay, omission, or failure to exercise any right or remedy under these Terms will be considered a waiver of that right or remedy, nor an 
            acceptance of the circumstances that gave rise to it. Every right or remedy may be exercised at any time as deemed appropriate by the party 
            exercising it.
          </p>
        </section>

        <section id="assignment" className="mb-5">
          <h2 className="h4 mb-3">31. Assignment</h2>
          
          <p className="mb-4">
            You may not assign or transfer these Terms or any rights granted hereunder, either voluntarily or by operation of law, without Hetyra's prior 
            written consent. Any attempt to do so without permission will be void. Hetyra, however, may assign or transfer these Terms at any time without 
            your consent.
          </p>
        </section>

        <section id="third-party-beneficiaries" className="mb-5">
          <h2 className="h4 mb-3">32. Third-Party Beneficiaries</h2>
          
          <p className="mb-4">
            The provisions in these Terms that pertain to Hetyra's content providers are intended to benefit those providers, and they will be entitled to 
            enforce those provisions as third-party beneficiaries, even though they are not signatories to these Terms.
          </p>
        </section>

        <section id="apple-notice" className="mb-5">
          <h2 className="h4 mb-3">Notice Regarding Apple</h2>
          
          <p className="mb-4">
            You acknowledge that these Terms are between you and Hetyra only, and not with Apple. Apple is not responsible for the Service or its content. 
            Apple does not have any obligation to provide maintenance and support services for the Service. In the event of any failure of the Service to 
            meet applicable warranties, you may notify Apple, and Apple will refund the purchase price for the relevant Service. However, to the maximum 
            extent permitted by law, Apple has no further warranty obligation regarding the Service.
          </p>

          <p className="mb-4">
            Apple is not liable for addressing any claims made by you or any third party related to the Service, including but not limited to:
          </p>

          <ol className="mb-4">
            <li>Product liability claims.</li>
            <li>Claims that the Service fails to meet applicable legal or regulatory requirements.</li>
            <li>Claims arising under consumer protection or similar laws.</li>
          </ol>

          <p className="mb-4">
            Apple is also not responsible for investigating, defending, settling, or discharging any third-party claim regarding the Service or your use 
            of the Service, including intellectual property infringement claims.
          </p>

          <p className="mb-4">
            You agree to comply with any applicable third-party terms when using the Service. Apple, along with its subsidiaries, is a third-party 
            beneficiary of these Terms. Upon your acceptance of these Terms, Apple will have the right to enforce these Terms against you as a third-party 
            beneficiary.
          </p>

          <p className="mb-4">
            You represent and warrant that:
          </p>

          <ol className="mb-4">
            <li>You are not located in a country subject to a Canada Government embargo, or one designated by the Canada Government as a "terrorist-supporting" 
            country.</li>
            <li>You are not listed on any Canada Government list of prohibited or restricted parties.</li>
          </ol>

          <p className="mb-4">
            If Hetyra provides a translation of these Terms in a language other than English, the translation is for convenience only. The English version 
            of these Terms will prevail.
          </p>
        </section>
      </section>
    </Container>
  );
}

