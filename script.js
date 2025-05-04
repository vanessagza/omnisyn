// script.js
const pages = [
  {
    title: 'About',
    content: `
      <h1>About OmniSyn Technologies</h1>
      <p>OmniSyn Technologies is a Monterrey-based tech company specializing in cybersecurity, custom software, and information technology services. We help businesses protect their digital assets through services like penetration testing, risk assessments, and cyber defense planning. We also design tailored software solutions — including AI-powered tools — to support each client’s operational goals. At OmniSyn, we combine innovation and security to help organizations grow with confidence.</p>
      <h2>Mission</h2>
      <p>Deliver cutting-edge technology solutions with uncompromising security standards.</p>
      <h2>Vision</h2>
      <p>Be the leading partner in technology innovation and cyber resilience for businesses worldwide.</p>
    `
  },
  {
    title: 'Cybersecurity',
    content: `
      <h1>Cybersecurity Services</h1>
      <p>Protect your organization with our expert cybersecurity offerings:</p>
      <ul>
        <li>Basic Penetration Testing</li>
        <li>Advanced Penetration Testing</li>
        <li>Risk Assessment & Compliance</li>
        <li>Vulnerability Scanning</li>
        <li>Incident Response Planning</li>
      </ul>
    `
  },
  {
    title: 'AI',
    content: `
      <h1>AI & Big Data Services</h1>
      <p>Leverage artificial intelligence and big data analytics to optimize your business:</p>
      <ul>
        <li>Customized Machine Learning Integration</li>
        <li>Natural Language Processing Solutions</li>
        <li>Predictive & Prescriptive Analytics</li>
        <li>Big Data Strategy & Visualization</li>
      </ul>
    `
  },
  {
    title: 'Software',
    content: `
      <h1>Software Development</h1>
      <p>Build bespoke software solutions tailored to your unique needs:</p>
      <ul>
        <li>Custom SaaS Platforms</li>
        <li>Web, Mobile & Desktop Applications</li>
        <li>API & System Integration</li>
      </ul>
    `
  },
  {
    title: 'Prices',
    content: `
      <h1>Pricing</h1>
      <table>
        <thead>
          <tr><th>Service</th><th>Starting At</th></tr>
        </thead>
        <tbody>
          <tr><td>Basic Penetration Testing</td><td>$1,500 USD</td></tr>
          <tr><td>Advanced Penetration Testing</td><td>$3,000 USD</td></tr>
          <tr><td>Machine Learning Integration</td><td>$2,500 USD</td></tr>
          <tr><td>Custom SaaS Development</td><td>$5,000 USD</td></tr>
        </tbody>
      </table>
      <button class="pdf-btn" onclick="downloadPDF()">Download Price Sheet</button>
    `
  },
  {
    title: 'Contact Us',
    content: `
      <h1>Contact Us</h1>
      <form action="mailto:contact@omnisyn.com.mx" method="POST" enctype="text/plain">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
        <input type="submit" value="Send Message" />
      </form>
    `
  }
];

const navList     = document.getElementById('nav-list');
const mainContent = document.getElementById('main-content');
const yearSpan    = document.getElementById('year');

// Set current year
yearSpan.textContent = new Date().getFullYear();

// Build nav
pages.forEach((page, i) => {
  const li = document.createElement('li');
  li.textContent = page.title;
  li.addEventListener('click', () => activatePage(i));
  navList.appendChild(li);
});

function activatePage(idx) {
  // Highlight active
  Array.from(navList.children).forEach((li, i) => {
    li.classList.toggle('active', i === idx);
  });
  // Load content
  mainContent.innerHTML = pages[idx].content;
}

// PDF download stub
function downloadPDF() {
  window.open('prices.pdf', '_blank');
}

// Initialize
activatePage(0);
