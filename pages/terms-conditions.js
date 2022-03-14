import { Fragment } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const TermsConditions = () => {
  return (
    <Fragment>
      <Navbar />
      <PageBanner
        pageTitle='Terms &amp; Conditions'
        homePageUrl='/'
        homePageText='Home'
        activePageText='Terms &amp; Conditions'
      />

      <div className='terms-conditions-area ptb-100'>
        <div className='container'>
          <div className='terms-conditions'>
            <div className='title'>
              <span>Information &amp; Notices</span>
              <h2>Nezox Terms of Service</h2>
            </div>

            <ol>
              <li>
                <div className='conditions-content'>
                  <h3>AGREEMENT TO TERMS</h3>
                  <p>
                    These Terms of Use constitute a legally
                    binding agreement made between you,
                    whether personally or on behalf of an
                    entity ("you") and Noteworthy
                    Productions, LLC, doing business as
                    MyLifeAboard (
                    <b>
                      "MyLifeAboard," "we," "us," or "our"
                    </b>
                    ), concerning your access to and use of
                    the mylifeaboard.com website as well as
                    any other media form, media channel
                    mobile website or mobile application
                    related, linked, or otherwise connected
                    there to (collectively the "Site"). We
                    are registered in Oregon, United States
                    and have our registered office at 6635
                    N. Baltimore ave., 8A, Portland, OR
                    97203. You agree that by accessing the
                    Site, you have read, understood, and
                    agreed to be bound by all of these Terms
                    of Use. IF YOU DO NOT AGREE WITH ALL OF
                    THE THESE TERMS OF USE, THEN YOU ARE
                    EXPRESSLY PROHIBITED FROM USING THE SITE
                    AND YOU MUST DISCONTINUE USE
                    IMMEDIATELY.
                  </p>
                  <p>
                    Supplemental terms and conditions or
                    documents that may be posted on the Site
                    from time to time are hereby expressly
                    incorporated herein by reference. We
                    reserve the right, in our sole
                    discretion, to make changes or
                    modifications to these Terms of Use from
                    time to time. We will alert you about
                    any changes by update the "last update"
                    date of these Terms of Use, and you
                    waive any right to receive specific
                    notice of each such change. Please
                    ensure that you check the applicable
                    Terms every time you use our Site so
                    that you understand which Terms apply.
                    You will be subject to, and will be
                    deemed to have been made aware of and to
                    have accepted, the changes in any
                    revised Terms of Use by your continued
                    use of the Site after the date such
                    revised Terms of Use are posted.
                  </p>
                  <p>
                    The information provided on the Site is
                    not intended for distribution to or use
                    by any person or entity in any
                    jurisdiction or country where such
                    distribution or use would be contrary to
                    lay or regulation or which should
                    subject us to any registration
                    requirement within such jurisdiction or
                    country. Accordingly, those persons who
                    choose to access the Site from other
                    location do so on their own initiative
                    and are solely responsible for
                    compliance with local laws, if and to
                    the extent local laws are applicable.
                  </p>
                  <p>
                    The Site is not tailored to comply with
                    industry-specific regulations (Heath
                    Insurance Portability and Accountability
                    Act (HIPAA), Federal Information
                    Security Management Act (FISMA), etc.),
                    so if your interactions would be
                    subjected to such laws, you many not use
                    the Site. You many not use the Site in a
                    way that would violate the
                    Gramm-Leach-Billey Act (GLBA).
                  </p>
                  <p>
                    The Site is intended for users who are
                    at least 18 years old. Persons under the
                    age of 18 are not permitted to use or
                    register for the site.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>INTELLECTUAL PROPERTY RIGHTS</h3>
                  <p>
                    Unless otherwise indicated, the Site is
                    our proprietary property and all source
                    code, databases, functionality,
                    software, website designs, audio, video,
                    text, photographs, and graphics on the
                    Site (collective, the "Content") and the
                    trademarks, service marks, and logos
                    contained therein (the "Marks") are
                    owned or controlled by us or licensed to
                    use, and are protected by copyright and
                    trademark laws and various other
                    intellectual property rights and unfair
                    competition laws of the United States,
                    international copyright laws, and
                    international conventions. The Content
                    and Marks are provided on the Site "AS
                    IS" for your information and personal
                    use only. Except as expressly provided
                    in the Terms of Use, no part of the Site
                    and no Content or Marks may be copied,
                    reproduced, aggregated, republished,
                    uploaded, posted, publicly displayed,
                    encoded, translated, transmitted,
                    distributed, sold, licensed, or
                    otherwise exploited for any commercial
                    purpose whatsoever, without our express
                    prior written permission.
                  </p>
                  <p>
                    Provided that you are eligible to use
                    the Site, you are granted a limited
                    license to access and use the Site and
                    to download or print a copy of any
                    portion of the Content to which you have
                    properly gained access solely for your
                    personal, non-commercial use. We reserve
                    all rights not expressly granted to you
                    in and to the Site, the Content and the
                    Marks.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>USER REPRESENTATIONS</h3>
                  <p>
                    By using the site, you represent and
                    warrant that:
                    <ol>
                      <li>
                        all registration information you
                        submit will be true, accurate,
                        current, and complete;
                      </li>
                      <li>
                        you will maintain the accuracy of
                        such information and promptly update
                        such registration information as
                        necessary;
                      </li>
                      <li>
                        you have the legal capacity and you
                        agree to comply with these Terms of
                        Use;
                      </li>
                      <li>
                        you are not a minor in the
                        jurisdiction in which you reside;
                      </li>
                      <li>
                        you will not access the Site through
                        automated or non-human means,
                        whether through a bot, script, or
                        otherwise;
                      </li>
                      <li>
                        you will not use the Site for any
                        illegal or unauthorized purpose; and
                      </li>
                      <li>
                        your use of the Site will not
                        violate any applicable law or
                        regulation.
                      </li>
                    </ol>
                    <p>
                      If you provide any information that is
                      untrue, inaccurate, not current, or
                      incomplete, we have the right to
                      suspend or terminate your account and
                      refuse any and all currently or future
                      use of the Site (or any portion
                      thereof).
                    </p>
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>USER REGISTRATION</h3>
                  <p>
                    You may be required to register with the
                    Site. You agree to keep your password
                    confidential and will be responsible for
                    all use of your account and password. We
                    reserve the right to remove, reclaim, or
                    change a username you select if we
                    determine, in our sole discretion, that
                    such a username is inappropriate,
                    obscene, or otherwise objectionable.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>PROHIBITED ACTIVITIES</h3>
                  <p>
                    You may not access or use the Site for
                    any purpose other than the for which we
                    make the Site available. The Site may
                    note be used in connection with any
                    commercial endeavors except those that
                    are specifically endorsed or approved by
                    us.
                  </p>
                  <p>
                    As a user of this Site, you agree not
                    to:
                  </p>
                  <ul>
                    <li>
                      Systematically retrieve data or other
                      content from the Site to create or
                      compile, directly or indirectly, a
                      collection, compilation, database, or
                      directory without written permission
                      from us.
                    </li>
                    <li>
                      Trick, defraud, or mislead us and
                      other users, especially in any attempt
                      to learn sensitive account information
                      such as user passwords.
                    </li>
                    <li>
                      Circumvent, disable, or otherwise
                      interfere with security-related
                      features of the Site, including
                      features that prevent or restrict the
                      use or copying of any Content or
                      enforce limitation on the use of the
                      Site and/or the Content contained
                      therein.
                    </li>
                    <li>
                      Disparage, tarnish, or otherwise harm,
                      in our opinion, us and/or the Site
                    </li>
                    <li>
                      Make improper use of our support
                      services or submit false reports of
                      abuse or misconduct.
                    </li>
                    <li>
                      Use the Site in a manner inconsistent
                      with any applicable laws or
                      regulations.
                    </li>
                    <li>
                      Engage in unauthorized framing of or
                      linking to the Site.
                    </li>
                    <li>
                      Upload or transmit (or attempt to
                      upload or to transmit) viruses, Trojan
                      horses, or other material, including
                      excessive use of capital letters and
                      spamming (continuous posting of
                      repetitive text), that interferes with
                      any party's uninterrupted use and
                      enjoyment of the Site or modifies,
                      impairs, disrupts, alters, or
                      interferes with the use, features,
                      functions, operation, or maintenance
                      of the Site.
                    </li>
                    <li>
                      Engaging any automated use of the
                      system, such using scripts to send
                      comments or messages, or using any
                      data mining robots, or similar data
                      gathering and extraction tools.
                    </li>
                    <li>
                      Delete the copyright or other
                      proprietary rights notice from any
                      Content.
                    </li>
                    <li>
                      Attempt to impersonate another user or
                      person or use the username of another
                      user.
                    </li>
                    <li>
                      Upload or transmit (or attempt to
                      upload or to transmit) any material
                      that acts as a passive or active
                      information collection or transmission
                      mechanism, including without
                      limitation, clear graphics interchange
                      formats ("gifs"), 1x1 pixels, web
                      bugs, cookies, or other similar
                      devices (sometimes referred to as
                      "spyware" or "passive collection
                      mechanisms" or "pcms").
                    </li>
                    <li>
                      Interfere with, disrupt, or create an
                      undue burden on the Site or the
                      networks or services connected to the
                      Site.
                    </li>
                    <li>
                      Harass, annoy, intimidate, or threaten
                      any of our employees or agents engaged
                      in providing any portion of the Site
                      to you.
                    </li>
                    <li>
                      Attempt to bypass any measures of the
                      Site designed to prevent or restrict
                      access to the Site, or any portion of
                      the Site.
                    </li>
                    <li>
                      Copy or adapt the Site's software,
                      including by not limited t Flash, PHP,
                      HTML, JavaScript, or other code.
                    </li>
                    <li>
                      Except as permitted by applicable
                      laws, decipher, decompile,
                      disassemble, or reverse engineer any
                      of the software compromising or in any
                      way making up a part of the Site.
                    </li>
                    <li>
                      Except as may be the result of
                      standard search engine or Internet
                      browser usage, use, launch, develop,
                      or distribute any automated system,
                      including without limitation, any
                      spider, robot, cheat utility, scraper,
                      or offline reader that accesses the
                      Site, or using or launching any
                      unauthorized script or other software.
                    </li>
                    <li>
                      Use a buying agent or purchasing agent
                      to make purchases on the Site.
                    </li>
                    <li>
                      Make any unauthorized use of the Site,
                      including collecting usernames and/or
                      email addresses of users by electronic
                      or other means for the purpose of
                      sending unsolicited email, or creating
                      user accounts by automated means or
                      under false pretenses.
                    </li>
                    <li>
                      Use the Site as part of any effort to
                      compete with us or otherwise use the
                      Site and/or the Content for any
                      revenue=generating endeavor or
                      commercial enterprise.
                    </li>
                    <li>
                      Use the Site to advertise or offer to
                      sell goods and services.
                    </li>
                    <li>
                      Sell or otherwise transfer your
                      profile.
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>USER GENERATED CONTRIBUTIONS</h3>
                  <p>
                    The Site may invite you to chat,
                    contribute to, or participate in blogs,
                    message boards, online forums, and other
                    functionality, and may provide you with
                    the opportunity to create, submit post,
                    display, transmit, perform, publish,
                    distribute, or broadcast content and
                    materials to us or on the Site,
                    including but not limited to text,
                    writings, video, audio, photography,
                    graphics, comments, suggestions, or
                    personal information other material
                    (collectively, "Contributions").
                    Contributions may be viewable by other
                    users of the Site and through
                    third-party websites. As such, any
                    Contributions you transmit may be
                    treated as non-confidential and
                    non-proprietary. When you create or make
                    available any Contributions, you thereby
                    represent and warranty that:
                  </p>
                  <ul>
                    <li>
                      The creation, distribution,
                      transmission, public display, or
                      performance, and the accessing,
                      downloading, or copying fo your
                      Contributions do not and will not
                      infringe the proprietary rights,
                      including but not limited to the
                      copyright, patent, trademark, trade
                      secret, or moral rights of any third
                      party.
                    </li>
                    <li>
                      You are the creator and owner of or
                      have the necessary licenses, rights,
                      consents, releases, and permissions to
                      use and to authorize us, the Site, and
                      other users of the Site to the sue of
                      your Contributions in any manner
                      contemplated by the Site and these
                      Terms of Use.
                    </li>
                    <li>
                      You have the written consent, release,
                      and/or permission of each and every
                      identifiable individual person in your
                      Contributions in any manner
                      contemplated by the Site and these
                      Terms of Use.
                    </li>
                    <li>
                      Your Contributions are not false,
                      inaccurate, or misleading.
                    </li>
                    <li>
                      Your Contributions are not unsolicited
                      or unauthorized advertising, promotion
                      materials, pyramid schemes, chain
                      letter, spam, mass mailings, or other
                      forms of socialization.
                    </li>
                    <li>
                      Your Contributions are not obscene,
                      lewd, lascivious, filthy, violent,
                      harassing, libelous, slanderous, or
                      otherwise objectional (as determined
                      by us).
                    </li>
                    <li>
                      Your Contributions do not ridicule,
                      mock, disparage, intimidate, or abuse
                      anyone.
                    </li>
                    <li>
                      Your Contributions are not used to
                      harass or threaten (in the legal sense
                      of those terms) any other persona and
                      to promote violence against a specific
                      person or class of people.
                    </li>
                    <li>
                      Your Contributions do not violate any
                      applicable law, regulation, or rule.
                    </li>
                    <li>
                      Your Contributions do not violate the
                      privacy or publicity rights of any
                      third party.
                    </li>
                    <li>
                      Your Contributions do not violate any
                      applicable law concerning child
                      pornography, or otherwise intended to
                      protect the health or well-being of
                      minors.
                    </li>
                    <li>
                      Your Contributions do not include any
                      offensive comments that are connected
                      to race, national origin, gender,
                      sexual reference, oor physical
                      handicap.
                    </li>
                    <li>
                      Your Contributions do not otherwise
                      violate, or link to material that
                      violates, any provision of the Terms
                      of Use, or any applicable law or
                      regulation.
                    </li>
                  </ul>
                  <p>
                    Any use of the Site in violation of the
                    foregoing violates these Terms of Use
                    and my result in, among other things,
                    termination or suspension of your rights
                    to use the Site.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>CONTRIBUTION LICENSE</h3>
                  <p>
                    By posting your Contributions to any
                    part of the Site, you automatically
                    grant, and you represent and warrant
                    that you have the right to grant, to us
                    as unrestricted, unlimited, irrevocable,
                    perpetual, non-exclusive, transferable,
                    royalty-free, fully-paid, worldwide
                    right, and license to hose, use copy,
                    reproduce, disclose, sell resell,
                    publish, broadcast, retitle, archive,
                    store, cache, publicly perform, publicly
                    display, reformat, translate, transmit,
                    excerpt (in whole or in part), and
                    distribute such Contributions
                    (including, without limitation, your
                    image and voice) for any purpose,
                    commercial, advertising, or otherwise,
                    and to prepare derivative works of, or
                    incorporate into other works, such
                    Contributions, and grand and authorize
                    sublicenses of the foregoing. The use
                    and distribution may occur in any media
                    formats and through any media channels.
                  </p>
                  <p>
                    This license will apply to any form,
                    media, or technology now known or
                    hereafter developed, and includes our
                    use of your name, company name, and
                    franchise name, as applicable, and any
                    of the trademarks, services marks, trade
                    names, logos, and personal and
                    commercial images you provide. You waive
                    all moral rights in your Contributions,
                    and you warrant that your moral rights
                    have not otherwise been asserted in your
                    Contributions.
                  </p>
                  <p>
                    We do not assert any ownership over your
                    Contributions. You retain full ownership
                    of all of your Contributions and any
                    intellectual property rights or other
                    proprietary rights associated with your
                    Contributions. We are not liable for any
                    statements or representations in your
                    Contributions provided by you in any
                    area on the Site. You are solely
                    responsible for your Contributions to
                    the Site and you expressly agree to
                    exonerate us from any and all
                    responsibility and to refrain from any
                    legal action against us regarding your
                    Contributions.
                  </p>
                  <p>
                    We have the right, in our sole and
                    absolute discretion, (1) to edit redact,
                    or otherwise change any Contributions;
                    (2) to re-categorize any Contributions
                    to place them in a more appropriate
                    locations on the Site; and (3) to
                    pre-screen or delete any Contributions
                    at any time and for any reason, without
                    notice. We have no obligation to monitor
                    your Contributions.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>MOBILE APPLICATION LICENSE</h3>
                  <h3>Use License</h3>
                  <p>
                    If you access the Site via a mobile
                    application, then we grant you a
                    revocable, non-exclusive,
                    non-transferrable, limited right to
                    install and use the mobile application
                    on wireless electronic devices owned or
                    controlled by you, and to access and use
                    the mobile application on such devices
                    strictly in accordance with the terms
                    and conditions of this mobile
                    application license contained in these
                    Terms of Use. You shall not: (1) except
                    as permitted by applicable law,
                    decompile, reverse engineer,
                    disassemble, attempt to derive the
                    source code of, or decrypt the
                    application; (2) make any modification,
                    adaptation, improvement, enhancement,
                    translation, or derivative works from
                    the application; (3) violate any
                    applicable laws, rules, or regulations
                    in connection with your accessor use of
                    the application; (4) remove, alter, or
                    obscure any proprietary notice
                    (including any notice of copyright or
                    trademark) posted by us or the licensors
                    of the application; (5) use the
                    application for any revenue generating
                    endeavor,commercial enterprise, or other
                    purpose for which it is not designed or
                    intended; (6) make the application
                    available over a network or other
                    environment permitting access or use by
                    multiple devices or users at the same
                    time; (7) use the application for
                    creating a product, service, mor
                    software that is, directly or
                    indirectly, competitive with or in any
                    way a substitute for the application;
                    (8) use the application to send
                    automated queries to any website or to
                    send any unsolicited commercial email;
                    or (9) use any proprietary information
                    or any of our interfaces or our other
                    intellectual property in the design,
                    development, manufacture, licensing, or
                    distribution of any applications,
                    accessories, or devices for use with the
                    application.
                  </p>
                  <h3>Apple and Android Devices</h3>
                  <p>
                    The following terms apply when you use a
                    mobile application from either the Apple
                    Store or Google Play (each an "App
                    Distributor") to access the Site: (1)
                    the license granted to you for our
                    mobile application is limited to a
                    non-transferrable license to use the
                    application on a device that utilized
                    the Apple iOS or Android operating
                    systems, as applicable, and in
                    accordance with the usage rules set
                    forth in the applicable App
                    Distributor's terms of service; (2) we
                    are responsible for providing any
                    maintenance and support services with
                    respect to the mobile application as
                    specified in the terms and conditions of
                    this mobile application license
                    contained in these Terms of Use or as
                    otherwise required under applicable law,
                    an you acknowledge that each App
                    Distributor has no obligation whatsoever
                    to furnish any maintenance and support
                    services with respect to the mobile
                    application; (3) in the event of any
                    failure of the mobile application to to
                    conform to any applicable warranty, you
                    may notify the applicable App
                    Distributor, and the App Distributor, in
                    accordance with its terms and policies,
                    may refund the purchase price, if any,
                    paid or the mobile application, and to
                    the maximum extent permitted by
                    applicable law, the App Distributor will
                    have no other warranty obligation
                    whatsoever with respect to the mobile
                    application; (4) you represent and
                    warrant that (i) your are not located
                    ina country that is subject to a U.S.
                    government embargo, or that has been
                    designated by the U.S. government as a
                    "terrorist supporting" country and (ii)
                    you are not listed on any U.S.
                    government list of prohibited or
                    restricted parties; (5) you must comply
                    with applicable third-party terms of
                    agreement when using the mobile
                    application, e.g., if you have a VoIP
                    application, then you must not be in
                    violation of their wireless data service
                    agreement when using the mobile
                    application; and (6) you acknowledge and
                    agree that the App Distributors are
                    third-party beneficiaries of the terms
                    and conditions in this mobile
                    application license contained in these
                    Terms of Use, and that each App
                    Distributor will have the right (and
                    will be deemed to have accepted the
                    right) to enforce the terms and
                    conditions in this mobile application
                    license contained in these Terms of Ue
                    against you as a third-party beneficiary
                    thereof.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>SUBMISSION</h3>
                  <p>
                    You acknowledge and agree that any
                    questions, comments, suggestions, ideas,
                    feedback, or other information regarding
                    the Site ("Submissions") provided by you
                    to us are non-confidential and shall
                    become our sole property. We shall own
                    exclusive rights, including all
                    intellectual property rights, and shall
                    be entitled to the unrestricted use and
                    dissemination of these Submissions for
                    any lawful purpose, commercial or
                    otherwise, without acknowledgement or
                    compensation to you. You hereby waive
                    all moral rights to any such
                    Submissions, and you hereby warrant that
                    any such Submissions are original with
                    you or that you have the right to submit
                    such Submissions. You agree there shall
                    be no recourse against us for any
                    alleged or actual infringement or
                    misappropriation of any proprietary
                    right in your Submissions.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>THIRD-PARTY WEBSITE AND CONTENT</h3>
                  <p>
                    The Site may contain (or you may be sent
                    via the Site) links to other websites
                    ("Third-Party Websites") as well as
                    articles, photographs, text, graphics,
                    picture, designs, music, sound, video,
                    information, applications, software, and
                    other content or items belonging to or
                    originating from third parties
                    ("Third-Party Content"). Such
                    Third-Party Websites and Third-Party
                    Content are not investigated, monitored,
                    or checked for accuracy,
                    appropriateness, or completeness by us,
                    and we are not responsible for any
                    Third-Party Websites accessed through
                    the Site or any Third-Party Content
                    posted on, available through, or
                    installed from the Site, including the
                    content, accuracy, offensiveness,
                    opinions, reliability, privacy
                    practices, or other policies of or
                    contained in the Third-Party Websites or
                    the Third-Party Content. Inclusion of,
                    linking to, or permitting the use or
                    installation of ny Third-Party Websites
                    or any Third-Party Content does not
                    imply approval or endorsement thereof by
                    us. If you decide to leave the Site and
                    access the Third-Party Websites or to
                    use or install any Third-Party Content,
                    you do so at your won risk, and you
                    should be aware these Terms of Use no
                    longer govern. You should review the
                    applicable terms and policies, including
                    privacy and data gathering practices, of
                    any website to which you navigate from
                    the Site or relating to any application
                    you use or install from the Site. Any
                    purchases you make through Third-Party
                    Websites will be through other websites
                    and from other companies, and we take
                    not responsibility whatsoever in
                    relation to such purchases which are
                    exclusively between you and the
                    applicable third party. you agree and
                    acknowledge that we do not endorse the
                    products or services offered on
                    Third-Party Websites and you shall hold
                    us harmless from any harm caused by your
                    purchase of such products or services.
                    Additionally, you shall hold us harmless
                    from any losses sustained by you or harm
                    caused to you related to or resulting in
                    any way from any Third-Party Content or
                    any contact with Third-Party Websites.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>ADVERTISERS</h3>
                  <p>
                    We allow advertisers to display their
                    advertisements and other information in
                    certain areas of the Site, such as
                    sidebar advertisement or banner
                    advertisements. If you are an
                    advertiser, you shall take full
                    responsibility for any advertisements
                    you place on the Site and any services
                    provided on the Site or products sold
                    through those advertisements. Further,
                    as and advertiser, you warrant and
                    represent that you posses all rights and
                    authority to place advertisements on the
                    Site, including, but not limited to,
                    intellectual property right, publicity
                    rights, and contractual rights. We
                    simply provide the space to place such
                    advertisements, and we have no other
                    relationship with advertisers.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>SITE MANAGEMENT</h3>
                  <p>
                    We reserve the right, but not the
                    obligation, to: (1) monitor the Site for
                    violations of these Terms of use; (2)
                    take appropriate legal action against
                    anyone who, in our sole discretion,
                    violates the law or these Terms of Use,
                    including without limitation, reporting
                    such user to law enforcement
                    authorities; (3) in our sole discretion
                    and without limitation, refuse, restrict
                    access to, limit the availability of, or
                    disable (to the extent technologically
                    feasible) any of your Contributions or
                    any portion thereof: (4) in our sole
                    discretion and without limitation,
                    notice, or liability, to remove from the
                    Site or otherwise disable all files and
                    content that are excessive in size or
                    are in any way burdensome to our
                    systems; and (5) otherwise manage the
                    Site in ta manner designed to protect
                    our rights and property and to
                    facilitate the proper functioning of the
                    Site.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>PRIVACY POLICY</h3>
                  <p>
                    We are about data privaacy and security.
                    Please review our Privacy Policy:
                    <Link href='privacy-policy'>
                      <a>
                        http://www.mylifeaboard.com/privacy-policy/
                      </a>
                    </Link>
                    . By using this Site, you agree to be
                    bound by our Privacy Policy, which is
                    incorporate into these Terms of Use.
                    Please be advised the Site is hosted in
                    the United States. If you access the
                    Site from any other region of the world
                    with laws or other requirements
                    governing personal data collection, use,
                    or disclosure that differ from
                    applicable laws in the United States,
                    then through your continued use of the
                    ISte, you are transferring your data to
                    the United States, and you agree to have
                    your data transferred to and processed
                    int he United States.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>COPYRIGHT INFRINGEMENT</h3>
                  <p>
                    We respect the intellectual propery
                    rights of others. If you believe that
                    any material available on or through the
                    Site infringes upon any copyright you
                    own or control, please immediately
                    notify us using the content information
                    provided below (a "Notification"). A
                    copy of your Notification will be sent
                    to the person who posted or stored the
                    material addressed in the Notification.
                    Please be advised that pursuant to
                    applicable law you may be held liable
                    for damages if you make material
                    misrepresentations in a Notification.
                    Thus, if you are not sure that material
                    located on or linked to by the Site
                    infringes your copyright, you should
                    consider first contacting an attorney.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>TERM AND TERMINATION</h3>
                  <p>
                    These Terms of Use shall remain in full
                    force and effect wil you are using the
                    Site. WITHOUT LIMITED ANY OTHER
                    PROVISION OF THESE TERMS OF USE, WE
                    RESERVE THE FIGHT TO, IN OUR SOLE
                    DISCRETION AND WITHOUT NOTICE OR
                    LIABILITY, DENY ACCESS TO AND USE OF THE
                    SITE (INCLUDING BLOCKING CERTAIN IP
                    ADDRESSES), TA ANY PERSON FOR ANY REASON
                    OR FOR NO REASON, INCLUDING WITHOUT
                    LIMITATION FOR BREACH OF ANY
                    REPRESENTATION, WARRANTY, OR COVENANT
                    CONTAINED IN THESE TERMS OF USE OR AF
                    ANY APPLICABLE LAW OR REGULATION. WE MAY
                    TERMINATE YOUR USE OR PARTICIPATION IN
                    THE SITE OR DELETE YOUR ACCOUNT AND ANY
                    CONTENT OR INFORMATION THAT YOU POSTED
                    AT ANY TIME, WITHOUT WARNING, IN OUR
                    SOLE DISCRETION.
                  </p>
                  <p>
                    If we terminate or suspend your account
                    for any reason, you are prohibited from
                    registering and creating a new account
                    under your name, a fake or borrowed
                    name, or the name of any third party,
                    even if you may be acting on behalf of
                    the third party. In addition to
                    terminating or suspending your account,
                    we reserve the right to take appropriate
                    legal action, including without
                    limitation pursuing civil, criminal, and
                    injunctive redress.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>MODIFICATIONS AND INTERRUPTIONS</h3>
                  <p>
                    We reserve the right to change modify,
                    or remove the contents of the Site at
                    any time or for any reason at our sole
                    discretion without notice. However, we
                    have no obligation to update any
                    information on our Site. We also reserve
                    the right to modify or discontinue all
                    or part of the Site without notice at
                    any time. We well not be liable to you
                    or any third party for any modification,
                    price change, suspension, or
                    discontinuance of the Site.
                  </p>
                  <p>
                    We cannot guarantee the Site will be
                    available at all times. We may
                    experience hardware, software, or other
                    problems or need to perform maintenance
                    related to theSite, resulting in
                    interruptions, delays, or errors,. We
                    reserve the right to change, revise,
                    update, suspend, discontinue, or
                    otherwise modify the Site at any time or
                    for any reason without notice to you.
                    You agree that we have no liability
                    whatsoever for any loss, damage, or
                    inconvenience caused by your inability
                    to access or use the Site during any
                    downtime or discontinuance of the Site.
                    Nothing in the Terms of Use will be
                    construed to obligated us to maintain
                    and support the Site or to supply any
                    corrections, updates, or releases in
                    connection therewith
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>GOVERNING LAW</h3>
                  <p>
                    These Terms of Use and your use of the
                    Site are governed by and construed in
                    accordance with the laws of the State of
                    Oregon applicable to agreements made and
                    to be entirely performed withing the
                    State of Oregon, without regard to its
                    conflict of law principles.
                  </p>
                </div>
              </li>
              <li>
                <div className='conditions-content'>
                  <h3>DISPUTE RESOLUTION</h3>
                  <h3>Binding Arbitration</h3>
                  <p>
                    If the Parties are unable to resolve a
                    Dispute through information
                    negotiations, the Dispute (except those
                    Disputes expressly excluded below) will
                    be finally and exclusively resolve by
                    binding arbitration. YOU UNDERSTAND THAT
                    WITHOUT HIS PROVISION, YOU WOULD HAVE
                    THE RIGHT TO SUE IN COURT AND HAV EA
                    JURY TRIAL. The arbitration shall be
                    commenced and conducted under the
                    Commercial Arbitration Rules of the
                    American Arbitration Association ("AAA")
                    and, where appropriate, The AAA's
                    Supplementary Procedures for Consumer
                    Related Disputes("AAA Consumer Rules"),
                    both of which are available at the AAA
                    website:
                    <Link href='www.adr.org'>
                      <a>www.adr.org</a>
                    </Link>
                    . Your arbitration fees and your share
                    of arbitration compensation shall be
                    governed by the AAA Consumer Rules and,
                    where appropriate, limited by the AAA
                    Consumer Rules. The arbitration my be
                    conducted in person, through the
                    submission of documents, by phone, or
                    online. The arbitrator will make a
                    decision in wiring, but need to provide
                    a statement of reasons unless requested
                    by either Party. The arbitrator must
                    follow applicable law, and may awarded
                    may be challenged if the arbitrator
                    fails to do so. Except where otherwise
                    required by the applicable AAA rules or
                    applicable law, the arbitration will
                    take place in Multnomah County, Oregon.
                    Except as otherwise provide herein, the
                    Parties may litigate in court to compel
                    arbitration, stay proceedings pending
                    arbitration, or to confirm, modify,
                    vacate, or enter judgement on the award
                    entered by the arbitrator
                  </p>
                  <p>
                    If for any reason, a Dispute proceeds in
                    courter rather than arbitration, the
                    Dispute shall be commenced or prosecuted
                    in the state and federal courts located
                    in Multnomah County, Oregon, and the
                    Parties hereby concent to, and waive all
                    defenses of lack of personal
                    jurisdiction, and forum non conveniens
                    with respect to venue and jurisdiction
                    in such state and federal courts.
                    Application of the United Nations
                    Convention of Contract for the
                    International Sale of Goods and the
                    Uniform Computer Information Transaction
                    Act (UCITA) are excluded from the Terms
                    of Use.
                  </p>
                  <p>
                    In no event shall any Dispute brought be
                    either Party related in any way to the
                    Site be commence more than one (1) year
                    after the cause of action arose. If this
                    provision is found to be illegal or
                    unenforeable, then neither Party will
                    elect to arbitrate any Dispute falling
                    within that portion of this provision to
                    found to be illegal or unenforceable and
                    such Dispute shall be decided by a court
                    of competent jurisdiction within the
                    courts listed for jurisdiction above,
                    and the Parties agree to submit to the
                    personal jurisdiction onf that court.
                  </p>
                  <h3>Restrictions</h3>
                  <p>
                    The Parties agree that any arbitration
                    shall be limited to the Dispute between
                    the Parties individually. To the full
                    extent permitted by law, (a) no
                    arbitration shall be joined with any
                    other proceeding; (b) there is no right
                    or authority for any Dispute to be
                    brought in a purported representative
                    capacity on behalf o the general public
                    or any other persons.
                  </p>
                  <h3>Exceptions to Arbitration</h3>
                  <p>
                    the Parties agree that the following
                    Disputes are not subject to the above
                    provisions concerning binding
                    arbitration: (a) any Disputes seeking to
                    enforce or protect, or concerning the
                    validity of, any of the intellectual
                    property rights of a Party; (b) any
                    Dispute related to, or arising from,
                    allegations of theft, piracy, invasion
                    of privacy, or unauthorized use; and (c)
                    any claim for injunctive relief. If this
                    provisions is found to be illegal or
                    unenforceable, then neither Party will
                    elect to arbitrate any Dispute falling
                    within that portion of this provision
                    found to be illegal or unenforeceable
                    and such Dispute shall be decided by a
                    court of competent jurisdiction within
                    the courts listed for jurisdiction
                    above, and the Parties agree to submit
                    to the personal jurisdiction of that
                    court.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>CORRECTIONS</h3>
                  <p>
                    There may be information on the Site
                    that contains typographical errors,
                    inaccuracies, or omissions, including
                    descriptions, pricing, availability, and
                    various other information. We reserve
                    the right to correct any errors,
                    inaccuracies, or omissions and to change
                    or update the information the Site at
                    any time, without prior notice.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>DISCLAIMER</h3>
                  <p>
                    THE SITE IS PROVIDE ON AN AS-IS AND
                    AS-AVAILABLE BASIS. YOU AGREE THAT YOUR
                    USE OF THE SITE AND OUR SERVICES WILL BE
                    AT YOUR SOLE RISK. TO THE FULLEST EXTENT
                    PERMITTED BY LAW, WE DISCLAIM ALL
                    WARRANTIES, EXPRESS OR IMPLIED, IN
                    CONNECTION WITH THE SITE AND YOUR USE
                    THEREOF, INCLUDING, WITHOUT LIMITATION,
                    THE IMPLIED WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND
                    NON-INFRINGEMENT. WE MAKE NO WARRANTIES
                    OR REPRESENTATIONS ABOUT THE ACCURACY OR
                    COMPLETENESS OF THE SITE'S CONTENT OR
                    THE CONTENT OF ANY WEBSITES LINKED TO
                    THE SITE AND WE WILL ASSUME NO LIABILITY
                    OR RESPONSIBILITY FOR ANY (1) ERRORS,
                    MISTAKES, OR INACCURACIES OF CONTENT AND
                    MATERIALS, (2) PERSONAL INJURY OR
                    PROPERTY DAMAGE, OF ANY NATURE
                    WHATSOEVER, RESULTING FROM YOUR ACCESS
                    TO AND USE OF THE SITE, (3) ANY
                    UNAUTHORIZED ACCESS TO OR USE OF OUR
                    SECURE SERVERS AND/OR ANY AND ALL
                    PERSONALLY INFORMATION AND/OR FINANCIAL
                    INFORMATION STORED THEREIN, (4) ANY
                    INTERRUPTION OF CESSATION OF
                    TRANSMISSION TO OR FROM THE SITE, (5)
                    ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
                    LIKE WHICH MAY BE TRANSMITTED TO OR
                    THROUGH THE SITE BY ANY THIRD PARTY,
                    AND/OR (6) ANY ERRORS OR OMISSIONS IN
                    ANY CONTENT AND MATERIALS OR FOR ANY
                    LOSS OR DAMAGE OF ANY KIND INCURRED AS A
                    RESULT OF THE USE OF ANY CONTENT POSTED,
                    TRANSMITTED, OR OTHERWISE MADE AVAILABLE
                    VIA THE SITE. WE DO NOT WARRANT,
                    ENDORSE, GUARANTEE OR ASSUME
                    RESPONSIBILITY FOR ANY PRODUCTION OR
                    SERVICE ADVERTISED OR OFFERED BY A THIRD
                    PARTY THROUGH THE SITE, ANY HYPERLINKED
                    WEBSITE, OR ANY WEBSITE OR MOBILE
                    APPLICATION FEATURED IN ANY BANNER OR
                    OTHER ADVERTISING, AND WE WILL NOT BE A
                    PARTY TO OR IN ANY WAY BE RESPONSIBILITY
                    FOR MONITORING ANY TRANSACTION BETWEEN
                    YOU AND ANY THIRD-PARTY PROVIDERS OF
                    PRODUCTS AND SERVICES. AS WITH THE
                    PURCHASE OF A PRODUCT OR SERVICE THROUGH
                    ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
                    SHOULD USE YOUR BEST JUDGEMENT AND
                    EXERCISE CAUTION WHERE APPROPRIATE.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>LIMITATIONS OF LIABILITY</h3>
                  <p>
                    IN NO EVENT WILL WE OR OUR DIRECTORS,
                    EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR
                    ANY THIRD PARTY FOR ANY DIRECT,
                    INDIRECT, CONSEQUENTIAL, EXEMPLARY,
                    INCIDENTAL, SPECIAL, OR PUNITIVE
                    DAMAGES, INCLUDING LOST PROFIT, LOST
                    REVENUE, LOSS OF DATA, OR OTHER DAMAGES
                    ARISING FROM YOUR USE OF THE SITE, EVEN
                    IF WE HAVE BEEN ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGE.
                    NOTWITHSTANDING ANYTHING TO THE CONTRARY
                    CONTAINED HEREIN, OUR LIABILITY TO YOU
                    FOR ANY CAUSE WHATSOEVER AND REGARDLESS
                    OF THE FORM OF THE ACTION, WILL AT ALL
                    TIMES BE LIMITED TO THE AMOUNT PAID, IF
                    ANY, BY YOU TO US DURING THE ONE (1)
                    MONTH PERIOD PRIOR TO ANY CAUSE OF
                    ACTION ARISING. CERTAIN US STATE LAWS
                    AND INTERNATIONAL LAWS DO NOT ALLOW
                    LIMITATIONS ON IMPLIED WARRANTIES OR THE
                    EXCLUSION OR LIMITATION OF CERTAIN
                    DAMAGES. IF THESE LAWS APPLY TO YOU,
                    SOME OR ALL OF THE ABOVE DISCLAIMERS OR
                    LIMITATIONS MAY NOT APPLY TO YOU, AND
                    YOU MAY HAVE ADDITIONAL RIGHTS.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>INDEMNIFICATION</h3>
                  <p>
                    You agree to defend, indemnify, and hold
                    us harmless, including our subsidiaries,
                    affiliates, and all of our respective
                    officers, agents, partners, and
                    employees, from and gainst any loss,
                    damage, liability, claim, or demand,
                    including reasonably attorneys' fees and
                    expenses, made by any third party due to
                    or arising out of: (1) your
                    Contributions; (2) use of the Site; (3)
                    breach of these Terms of Use; (4) any
                    breach of your representations and
                    warranties set forth in these Terms of
                    Use: (5) your violation of the rights of
                    a third party, including but not limited
                    to intellectual property rights; or (6)
                    any overt harmful act toward any other
                    user of the Site with whom you connected
                    via the Site. Nothwithstanding the
                    foregoing, we reserve the right, at your
                    expense, to assume the exclusive defense
                    and control of any matter for which you
                    are required to indemnify us, and you
                    agree to cooperate, at your expense,
                    with our defense of such claims. We will
                    use reasonable efforts to notify you of
                    any such claim, action, or proceeding
                    which is subject to this indemnification
                    upon becoming aware of it.
                  </p>
                </div>
              </li>

              <li>
                <div className='conditions-content'>
                  <h3>USER DATA</h3>
                  <p>
                    We will maintain certain data that you
                    transmit to the Site for the purpose of
                    managing the performance of the Site, as
                    well as data relating to your use of the
                    Site. Although we perform regular
                    routine backups of data, you are solely
                    responsible for all data that you
                    transmit or that relate to any activity
                    you have undertaken using the Site. You
                    agree to that we shall have no liability
                    to you for any loss or corruption of any
                    such data, and you hereby waive any
                    right of action against us arising from
                    any such loss or corruption of such
                    data.
                  </p>
                </div>
              </li>
              <li>
                <div className='conditions-content'>
                  <h3>
                    ELECTRONIC COMMUNICATIONS, TRANSACTIONS,
                    AND SIGNATURES
                  </h3>
                  <p>
                    Visiting the Site, sending us emails,
                    and completing online forms constitute
                    electronic communications. You consent
                    to receive electronic communications,
                    and you agree that all agreements,
                    notices, disclosures, and other
                    communications we provide to you
                    electronically, via email and on the
                    SIte satisfy any legal requirement that
                    such communication be in writing. YOU
                    HEREBY AGREE TO THE USE OF ELECTRONIC
                    SIGNATURES, CONTRACTS, ORDERS, AND OTHER
                    RECORDS, AND TO ELECTRONIC DELIVERY OF
                    NOTICES, POLICES, AND RECORDS OF
                    TRANSACTION INITIATED OR COMPLETED BY US
                    OR VI THE SITE. You hereby waive any
                    rights or requirements under any
                    statues, regulations, rules, ordinances,
                    or other laws in any jurisdiction which
                    require an original signature or deliver
                    or retention of non-electronic records,
                    or to payments or the granting of
                    credits by any means other than
                    electronic means.
                  </p>
                </div>
              </li>
              <li>
                <div className='conditions-content'>
                  <h3>CALIFORNIA USERS AND RESIDENTS</h3>
                  <p>
                    If any complain with us in not
                    satisfactorily resolve, you can contact
                    the Complaint Assistance Unit of the
                    Division of Consumer Services of the
                    California Department of Consumer
                    Affairs in writing at 1625 North Market
                    Blvd., Suite N 112 Sacramento CAlifornia
                    95834 or by telephone at (800) 952-5210
                    or (916) 445-1254.
                  </p>
                </div>
              </li>
              <li>
                <div className='conditions-content'>
                  <h3>MISCELLANEAOUS</h3>
                  <p>
                    These Terms of Use and any policies or
                    operating rules posted by us on the Site
                    or in respect to the Site constitute the
                    entire agreement and understanding
                    between you and us. Our failure to
                    exercise or enforce any right or
                    provision of these Terms of Use shall
                    not operate as a waiver of such right or
                    provision. These Terms of Use operate to
                    the fullest extent permissible by law.
                    We may assign any or all of our rights
                    and obligations to others at any time.
                    We shall not be responsible or liable
                    for any loss, damage, delay, or failure
                    to act caused by any cause beyond our
                    reasonable control. If any provision or
                    part of a provision is determined to be
                    unlawful, void, or unenforceable, that
                    provision or part of the provision is
                    deemed severable from these Terms of Use
                    and does not affect the validity nad
                    enforceability of any remaining
                    provisions. There is no join venture,
                    partnership, employment or agency
                    relations created between you and us as
                    a result of these Terms of Use or use of
                    the Site. YOu agree that these Terms of
                    Use will not be construed against us by
                    virtue of having drafted them. You
                    hereby waive any and all defenses you my
                    have abased on the electronic form of
                    these Terms of Use and the lack of
                    signing by the parties hereto to execute
                    these Terms of Use.
                  </p>
                </div>
              </li>
              <li>
                <div className='conditions-content'>
                  <h3>CONTACT US</h3>
                  <p>
                    In oder to resolve a complaining
                    regarding the Site or to receive furhter
                    information regarding use of the Site,
                    please contact us at:
                  </p>
                  <p>
                    <b>Noteworthy Productions, LLC</b>
                  </p>
                  <p>
                    <b>6635 N. Baltimore Ave., Suite 8A</b>
                  </p>
                  <p>
                    <b>Portland, OR 97203</b>
                  </p>
                  <p>
                    <b>United States</b>
                  </p>
                  <p>
                    <b>Phone: 503-770-0382</b>
                  </p>
                  <p>
                    <b>
                      email: admin@noteworthyproductions.us
                    </b>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default TermsConditions;
