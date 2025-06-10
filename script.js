async function load() {
  const response = await fetch("./data.json");
  const data = await response.json();

  const team = data.team;
  const page = data.page;
  const link = data.link;

  console.log(team);
  console.log(page);
  console.log(link);

  // left top
  const contTop = document.querySelector(".top");
  contTop.innerHTML = `
  <img src="/img/people/me.png" alt="Moch. Zamroni Fahreza" />
  <p>Moch. Zamroni Fahreza</p>
  <p>deskripsi</p>
  `;

  // ==============list nav
  const contNav = document.querySelector("ul");
  contNav.innerHTML = `
  <li>
    <p>
      <a href="#tentang">Tentang</a>
    </p>
  </li>
  <li>
    <p>
      <a href="#team">Team</a>
    </p>
  </li>
  <li>
    <p>
      <a href="#project">Project</a>
    </p>
  </li>
  `;

  // ===========tentnag
  const contTnng = document.getElementById("tentang");
  contTnng.innerHTML = `
  <p>
    Saya adalah mahasiswa <span>Teknik Informatika</span> di
    <span>Universitas Trunojoyo Madura</span>. Saat ini saya sedang
    menyelesaikan tugas akhir untuk mata kuliah
    <span>Dasar Pemrograman Web</span>. Fokus utama saya adalah
    membangun <span>aplikasi web top-up game</span> menggunakan
    <span>HTML, CSS, dan JavaScript (vanilla)</span>. Seluruh tampilan
    antarmuka dibuat <span>menggunakan ui retro dan modern</span>,
    memanfaatkan kombinasi <span>CSS Flexbox</span> dan
    <span>JavaScript DOM</span> untuk pengalaman pengguna yang optimal.
  </p>
  `;

  // ======== left bottom
  const contLink = document.querySelector(".bottom");
  contLink.innerHTML = ``;
  link.forEach((el) => {
    contLink.innerHTML += `
    <a href="${el.link}" target="_blank"><i class="${el.ikon}"></i> <span>${el.text}</span></a>
    `;
  });

  // ======= team
  const contTeam = document.getElementById("team");
  contTeam.innerHTML = ``;
  team.forEach((el) => {
    contTeam.innerHTML += `
    <a href="${el.link}">
      <div class="left">
        <img src="${el.image}" alt="${el.name}" />
      </div>
      <div class="right">
        <p>${el.name}</p>
        <p>${el.nim}</p>
      </div>
    </a>
    `;
  });

  // =========== project
  const contProject = document.getElementById("project");
  contProject.innerHTML = ``;
  page.forEach((el) => {
    contProject.innerHTML += `
    <div class="left">
      <img src="${el.image}" alt="${el.name}" />
    </div>
    <div class="right">
      <p>
        ${el.name}
        <a href="${el.link}">
          <i class="bi bi-arrow-up-right"></i>
        </a>
      </p>
      <p>
        ${el.description}
      </p>
      <div class="tech">
        <div class="card-tech">
          ${el.tech.map((techStack) => `<span>${techStack}</span>`).join("")}
        </div>
      </div>
    </div>
    `;
  });
}
load();
