---
title: Portfolio
---

Portfolio
=========


[Credit Expert][credit-expert]
------------------------------

<dl>
	<dt>Responsibilities</dt>
	<dd>Front-end development</dd>

	<dt>Technologies used</dt>
	<dd>JavaScript, SCSS, Angular.js, Node.js, Gulp, Swig</dd>
</dl>

Experian is the UK's leading credit reference agency, and Credit Expert is their flagship consumer product. It enables members of the public to explore their credit history and understand how they are seen by potential lenders. Experian wanted to refresh the existing site, both to provide a better experience to their customers and to better reflect modern web development practices.

Despite the site's complexity, our team insisted on making adaptive design a cornerstone of our development, ensuring that users could access their credit history regardless of their circumstances.

The most complex part of the site is the credit report page, which downloads a JSON payload which is then rendered by Angular.js. Due to its complexity, performance was critical, and one of my roles was to find ways to improve this.

### Specific achievements

- Built a complete, flexible validation framework compatible with ASP.NET MVC's unobtrusive validation attributes.
- Developed the comprehensive help section using AJAX and the History API.
- Streamlined our production builds using Gulp and PowerShell.
- Leveraged my full-stack experience to act as a liason between our front-end and back-end teams.
- Discovered&mdash;then helped to eliminate&mdash;a significant gap in our existing sign-up journey.


ShP Portal
----------

<dl>
	<dt>Responsibilities</dt>
	<dd>UX, design, front-end and back-end development</dd>

	<dt>Technologies used</dt>
	<dd>CoffeeScript, SCSS, ASP.NET MVC, C#, Entity Framework, Web API</dd>
</dl>

<figure>
	<img alt="Two rows of order information, one with an expanded list of documents visible." src="/img/portfolio/portal-orders.png">
	<figcaption>Customers have on-demand access to their transaction history and documents.</figcaption>
</figure>

ShP Limited is an electronics recycling company based in Lancaster, UK. Their most significant business asset is an exceptional and dedicated team of account managers, much of whose time was taken up with common account-related enquiries.

<figure class="left">
	<img alt="A mobile view of the ShP Portal dashboard" src="/img/portfolio/portal-dashboard.png">
	<figcaption>Responsive dashboards provide up-to-date statistics.</figcaption>
</figure>

ShP Portal provides clients with on-demand access to their account history, important documents and transaction status. It also offers a responsive dashboard with up-to-date statistics on their accounts and allowed clients to know and communicate with their account managers.

<figure class="right">
	<img alt="Three different input states: default, focused and invalid." src="/img/portfolio/portal-inputs.png">
	<figcaption>Exceptional user experience is the key to Portal&rsquo;s success.</figcaption>
</figure>

Exceptional user experience is the key to Portal&rsquo;s success. Features were selected based on clients&rsquo; most common queries to their account managers, and the site was designed to provide obvious and immediate resolution to these user needs.

As well as adapting elegantly to mobile and tablet display sizes, the site degrades gracefully to meet the needs of our clients limited to older browsers&mdash;even those still using IE 6!&mdash;while rewarding users of modern browsers through progressive enhancement.

ShP Portal had a threefold impact:

- Account managers have more time to dedicate to more complex account issues and finding new leads.
- Existing clients get immediate access to important account information and documentation and new insight into their recycling history.
- Prospective clients are impressed by an exceptionally well-designed and comprehensive account management tool.


[UK Transport app][uk-transport-app]
------------------------------------

<dl>
	<dt>Responsibilities</dt>
	<dd>Design, front-end development</dd>

	<dt>Technologies used</dt>
	<dd>JavaScript, CSS</dd>
</dl>

<figure>
	<img alt="The header of the UK Transport website." src="/img/portfolio/uk-transport-header.png">
	<figcaption>The website showcases the app in harmony with the existing brand identity.</figcaption>
</figure>

<figure class="left">
	<img alt="A detail from the UK Transport site header." src="/img/portfolio/uk-transport-person.png">
	<figcaption>Bold, energetic branding gives a sense of empowerment.</figcaption>
</figure>

UK Transport is a journey planning app that covers nearly any form of public transport, from trains and trams to ferries and buses. The developer wanted a website which would showcase the app and fit in with its pre-existing brand identity.

<figure class="right">
	<img alt="A detail from the UK Transport site header." src="/img/portfolio/uk-transport-geometric.png">
	<figcaption>Simple geometric elements invoke the language of transport maps.</figcaption>
</figure>

The existing branding was bold and energetic. This was recruited into a metaphor for empowerment. Bright, sweeping headings cut fearlessly across the page, declaring that users need &ldquo;never get lost again&rdquo;. A lone commuter, gazing at his phone, glows with assurance amidst a dim train station. Simple geometric elements invoke the language of transport maps, such as the London Tube map, conveying a sense of reassuring clarity.

Naturally the site is fully responsive, elegantly adapting to the screen sizes of UK Transport&rsquo;s target audience.


Whitelabel recycling services
-----------------------------

<dl>
	<dt>Responsibilities</dt>
	<dd>UX, design, front-end and back-end development</dd>

	<dt>Technologies used</dt>
	<dd>JavaScript, CoffeeScript, SCSS, ASP.NET MVC, C#, VB.NET, WCF, SQL Server</dd>
</dl>

In addition to their corporate accounts team, ShP provides partners with the option of providing B2C whitelabel services to their clients. This could be done through a branded iframe embedded on the partner's website or by building a complete, whitelabeled recycling site tailored to their brand and requirements. Partners included T-Mobile, Marks & Spencer, Avios, DSGi and Trinity Mirror.

When I started at ShP, branded iframes were built by a third party and took several days to produce. They can now be made live in under an hour with some basic branding information, and require no technical expertise.

In addition, the ShP Limited retail platform provides bricks-and-mortar retailers to offer over-the-counter recycling services to their customers. At its peak, the site operated in over two hundred outlets across the UK and several more internationally, which was also whitelabeled. Notable customisations include:

- Spanish language with integrated reporting for Media Markt in Spain.
- English and Arabic internationalisation for a partner operating throughout the Middle East.
- Redesigned to integrate with touch-based POS hardware in partnership with Flex-e-card.


Open source
-----------

My most interesting project is [`WebApiContrib.Formatting.Xlsx`][github-xlsx] (formerly XLSX for Web API), a highly-configurable XSLX (Excel) MediaTypeFormatter for the ASP.NET Web API written in C#. My current—but stalled—project is a [CSS animation timeline][github-animation-timeline], which will provide a visual representation of CSS animations on a page and controls to adjust, play, rewind and skip through them.

If you want some short and sweet examples of code I've written, here's a few of my more interesting Gists:

- [StringPluralisation.cs][gist-string-pluralisation]
- [TypeUtil.js][gist-type-util]
- [jquery.shimFormAction.coffee][gist-shim-form-action]



<!-- References -->

[credit-expert]: https://www.creditexpert.co.uk/

[uk-transport-app]: http://uktransportapp.com/

[github-xlsx]: http://webapicontrib.github.io/WebApiContrib.Formatting.Xlsx/

[github-animation-timeline]: https://github.com/jordangray/css-animation-timeline/

[gist-string-pluralisation]: https://gist.github.com/jordangray/bdb3aa1db6f74a625bfe

[gist-type-util]: https://gist.github.com/jordangray/f0ece13c3959d0387a81

[gist-shim-form-action]: https://gist.github.com/jordangray/5910582