async function load() {
  const response = await fetch("./data.json");
  const data = await response.json();

  const team = data.team;
  const page = data.page;
  const link = data.link;

  console.log(team);
  console.log(page);
  console.log(link);

  const contTop = document.querySelector(".top");
  contTop.innerHTML = `
    <img src="/img/people/me.png" alt="Moch. Zamroni Fahreza" />
    <h2>Moch. Zamroni Fahreza</h2>
    <p>Pengembang Web Game: Transaksi & Konten</p>
    `;

  const contNav = document.querySelector("ul");
  contNav.innerHTML = `
    <li class="active">
      <a href="#tentang"><span></span>Tentang</a>
    </li>
    <li>
      <a href="#team"><span></span>Team</a>
    </li>
    <li>
      <a href="#project"><span></span>Project</a>
    </li>
    `;

  const navListItems = document.querySelectorAll("main .left ul li");
  navListItems.forEach((liItem) => {
    liItem.addEventListener("click", (event) => {
      navListItems.forEach((item) => {
        item.classList.remove("active");
      });
      liItem.classList.add("active");
    });
  });

  const contTnng = document.getElementById("tentang");
  contTnng.innerHTML = `
    <p>
      Saya adalah mahasiswa semester dua <span>Teknik Informatika</span> di
      <span>Universitas Trunojoyo Madura</span>. Saat ini, saya sangat antusias
      mempelajari pengembangan <span>aplikasi web top-up game</span> sebagai bagian
      dari eksplorasi saya di bidang ini. Untuk <span>frontend</span>, saya
      mengandalkan fondasi kuat <span>HTML, CSS, dan JavaScript (vanilla)</span>.
      Saya mendesain antarmuka dengan memadukan estetika <span>UI retro dan modern</span>,
      menciptakan tampilan yang fungsional sekaligus menarik.
    </p>
    <p>
      Di sisi <span>backend</span>, saya menggunakan <span>Express.js</span> untuk
      mengatur navigasi dan pemuatan halaman dinamis. Saya belajar
      mengimplementasikan <span>routing</span> agar setiap permintaan pengguna,
      misalnya ketika ingin melihat halaman detail artikel melalui
      <span class="code">/artikel/:id</span> atau detail game di
      <span class="code">/top-up/:idGame</span>, diarahkan untuk menampilkan
      file HTML yang sesuai dengan data yang relevan. Selain itu, saya juga
      mengimplementasikan endpoint <span class="code">/simpan-transaksi</span>
      untuk menerima dan menyimpan data transaksi. Pemilihan Express.js didasarkan
      pada fleksibilitas dan kemampuannya untuk mengelola server web secara efektif.
      Proyek ini menjadi ajang saya untuk mengaplikasikan teori dan praktik
      pengembangan web yang saya pelajari sejauh ini.
    </p>
    `;

  const contLink = document.querySelector(".bottom");
  contLink.innerHTML = ``;
  link.forEach((el) => {
    contLink.innerHTML += `
      <a href="${el.link}" target="_blank"><i class="${el.ikon}"></i> <span>${el.text}</span></a>
      `;
  });

  const contTeam = document.getElementById("team");
  contTeam.innerHTML = ``;
  team.forEach((el) => {
    contTeam.innerHTML += `
      <a href="${el.link}">
        <div class="left">
          <img src="${el.image}" alt="${el.name}" />
        </div>
        <div class="right">
          <p>${el.name} <i class="bi bi-arrow-up-short"></i></p>
          <p>${el.nim}</p>
        </div>
      </a>
      `;
  });

  const contProject = document.getElementById("project");
  contProject.innerHTML = ``;
  page.forEach((el) => {
    contProject.innerHTML += `
      <a href="${el.link}" class="card" target="_blank">
        <div class="left">
          <img src="${el.image}" alt="${el.name}" />
        </div>
        <div class="right">
          <p>
            ${el.name}
              <i class="bi bi-arrow-up-short"></i>
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
      </a>
      `;
  });
}

load();
