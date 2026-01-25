// Modal Data
const modalData = {
    'asprak-web': {
      icon: 'fa-chalkboard-teacher',
      type: 'Teaching Assistant',
      title: 'Asisten Praktikum Pemrograman Berbasis Web',
      description: 'Sebagai asisten praktikum, saya bertanggung jawab membimbing mahasiswa dalam memahami konsep fundamental web development, mulai dari HTML, CSS, hingga JavaScript. Saya melakukan code review, memberikan feedback konstruktif, dan membantu troubleshooting issues yang dihadapi mahasiswa.',
      achievements: [
        {
          title: 'Membimbing 40+ Mahasiswa',
          description: 'Membantu mahasiswa memahami konsep front-end development dan best practices dalam coding.',
          image: '/assets/images/ASPRAK_PBW.jpeg'
        },
        {
          title: 'Materi Pembelajaran Interaktif',
          description: 'Membuat modul pembelajaran dan contoh project yang memudahkan mahasiswa untuk belajar.',
          image: '/assets/images/asprak-web-2.jpg'
        }
      ],
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Code Review', 'Mentoring']
    },
    'asprak-asd': {
      icon: 'fa-project-diagram',
      type: 'Teaching Assistant',
      title: 'Asisten Praktikum Algoritma Struktur Data',
      description: 'Membantu mahasiswa memahami konsep algoritma dan struktur data menggunakan C++. Mengajarkan teknik debugging, optimasi algoritma, dan penerapan struktur data dalam problem solving. Bertanggung jawab memeriksa dan memberikan feedback pada tugas praktikum.',
      achievements: [
        {
          title: 'Peningkatan Pemahaman Mahasiswa',
          description: 'Membantu mahasiswa meningkatkan kemampuan problem solving dan computational thinking.',
          image: '/assets/images/ASPRAK_ASD.jpg'
        },
        {
          title: 'Workshop Algoritma',
          description: 'Mengadakan sesi tambahan untuk membahas algoritma sorting dan searching secara mendalam.',
          image: '/assets/images/asprak-asd-2.jpg'
        }
      ],
      skills: ['C++', 'Data Structures', 'Algorithms', 'Problem Solving', 'Debugging', 'Teaching']
    },
    'asprak-design': {
      icon: 'fa-paint-brush',
      type: 'Teaching Assistant',
      title: 'Asisten Praktikum Desain Web',
      description: 'Mengajarkan prinsip-prinsip UI/UX design kepada mahasiswa, termasuk design thinking, user research, wireframing, dan prototyping. Membantu evaluasi proyek desain dan membimbing penggunaan tools seperti Figma.',
      achievements: [
        {
          title: 'Design Thinking Workshop',
          description: 'Menyelenggarakan workshop tentang metodologi design thinking dan user-centered design.',
          image: '/assets/images/ASPRAK_DW.jpeg'
        },
        {
          title: 'Portfolio Review Sessions',
          description: 'Membantu mahasiswa membangun portfolio design mereka dengan feedback yang konstruktif.',
          image: '/assets/images/asprak-design-2.jpg'
        }
      ],
      skills: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Thinking', 'Mentoring']
    },
    'internship': {
      icon: 'fa-briefcase',
      type: 'Internship',
      title: 'UI/UX Designer - PT Menara Indonesia',
      description: 'Sebagai UI/UX Designer intern di PT Menara Indonesia, saya bertanggung jawab dalam merancang user interface untuk berbagai platform digital, melakukan riset pengguna, dan berkolaborasi dengan tim developer untuk mengimplementasikan desain.',
      achievements: [
        {
          title: 'Website M-Knows Consulting',
          description: 'Merancang ulang website corporate untuk M-Knows Consulting dengan fokus pada user experience yang modern dan profesional. Meningkatkan engagement rate sebesar 45%.',
          image: 'assets/images/mknows.png'
        },
        {
          title: 'Website KerjaDiLuar.id',
          description: 'Mendesain platform job portal yang user-friendly untuk mempertemukan pencari kerja dengan perusahaan, lengkap dengan sistem filtering dan aplikasi yang intuitif.',
          image: '/assets/images/kerjadiluar.png'
        }
      ],
      skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'UI Design', 'UX Design', 'User Testing']
    },
    'brownis': {
      icon: 'fa-store',
      type: 'Project',
      title: 'Perancangan Bisnis Digital Brownis',
      description: 'Mengembangkan ekosistem digital lengkap untuk bisnis brownis, mulai dari website e-commerce, strategi digital marketing, hingga sistem manajemen inventory. Project ini mencakup full cycle dari perencanaan hingga deployment.',
      achievements: [
        {
          title: 'E-Commerce Platform',
          description: 'Membangun website e-commerce responsive dengan fitur shopping cart, payment gateway, dan order tracking system.',
          image: '/assets/images/BROWSTIME.png'
        },
        {
          title: 'Digital Marketing Strategy',
          description: 'Merancang strategi content marketing dan social media marketing yang meningkatkan brand awareness hingga 60%.',
          image: '/assets/images/brownis-marketing.jpg'
        }
      ],
      skills: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'E-Commerce', 'Digital Marketing', 'SEO', 'Content Strategy']
    },
    'upay': {
      icon: 'fa-mobile-alt',
      type: 'Project',
      title: 'Desain Platform Upay',
      description: 'Mendesain user interface untuk platform payment Upay dengan fokus pada security, ease of use, dan trust building. Melakukan extensive user testing dan iterasi design berdasarkan feedback.',
      achievements: [
        {
          title: 'Mobile App Design',
          description: 'Merancang interface mobile app yang intuitif dengan flow yang sederhana untuk transaksi payment.',
          image: '/assets/images/upay.png'
        },
        {
          title: 'Design System',
          description: 'Membuat design system komprehensif untuk konsistensi visual across all touchpoints.',
          image: '/assets/images/upay-design-system.jpg'
        }
      ],
      skills: ['Figma', 'Mobile UI Design', 'User Testing', 'Prototyping', 'Design System', 'Interaction Design']
    },
    'psup': {
      icon: 'fa-music',
      type: 'Music Division',
      title: 'Anggota Divisi Latihan PSUP',
      description: 'Sebagai bagian dari divisi latihan Paduan Suara Universitas Pancasila, saya bertanggung jawab mengatur partitur musik, membantu koordinasi latihan, dan memastikan semua anggota siap untuk perform. Peran ini mengajarkan saya tentang teamwork dan time management.',
      achievements: [
        {
          title: 'Koordinasi Latihan Rutin',
          description: 'Mengatur jadwal dan materi latihan untuk 50+ anggota paduan suara dengan koordinasi yang efektif.',
          image: '/assets/images/PSUP.jpg'
        },
        {
          title: 'Manajemen Partitur',
          description: 'Mengelola dan mendistribusikan partitur untuk berbagai jenis lagu dalam multiple voices.',
          image: '/assets/images/psup-partitur.jpg'
        }
      ],
      skills: ['Music Coordination', 'Team Management', 'Time Management', 'Communication', 'Leadership']
    },
    'sakka': {
      icon: 'fa-home',
      type: 'Management',
      title: 'Biro Rumah Tangga SAKKA',
      description: 'Mengelola semua aspek logistik dan operasional harian organisasi SAKKA (Senat Akademik Fakultas), termasuk inventory management, cleaning schedule, dan koordinasi acara besar. Posisi ini melatih kemampuan manajemen dan organizational skills.',
      achievements: [
        {
          title: 'Event Logistics Management',
          description: 'Mengelola logistik untuk 10+ event besar dengan rata-rata 200+ peserta per event.',
          image: '/assets/images/SAKKA.jpg'
        },
        {
          title: 'Operational Efficiency',
          description: 'Meningkatkan efisiensi operasional organisasi melalui sistem inventory dan scheduling yang lebih baik.',
          image: '/assets/images/sakka-ops.jpg'
        }
      ],
      skills: ['Logistics Management', 'Event Coordination', 'Inventory Management', 'Team Leadership', 'Problem Solving']
    },
    'baswara': {
      icon: 'fa-microphone',
      type: 'Performance',
      title: 'Penyanyi & Panitia Konser Baswara',
      description: 'Berperan ganda sebagai performer dan panitia logistik untuk konser Baswara. Sebagai penyanyi, saya tampil di depan ratusan penonton, sementara sebagai panitia, saya memastikan semua aspek teknis konser berjalan lancar.',
      achievements: [
        {
          title: 'Performance Excellence',
          description: 'Tampil sebagai soloist dan bagian dari ensemble dalam konser yang dihadiri 500+ penonton.',
          image: '/assets/images/Baswara.jpg'
        },
        {
          title: 'Technical Coordination',
          description: 'Mengelola sound system, lighting, dan stage management untuk memastikan kualitas performance optimal.',
          image: '/assets/images/baswara-technical.jpg'
        }
      ],
      skills: ['Vocal Performance', 'Stage Management', 'Sound System', 'Event Logistics', 'Public Speaking']
    },
    'reminiscentia': {
      icon: 'fa-guitar',
      type: 'Technical & Performance',
      title: 'Tim Teknis & Penyanyi Konser Reminiscentia',
      description: 'Berperan sebagai bagian dari divisi kepelatihan yang membina penyanyi junior, sekaligus tampil sebagai performer utama. Juga bertanggung jawab atas aspek teknis konser termasuk sound engineering dan stage setup.',
      achievements: [
        {
          title: 'Coaching & Mentoring',
          description: 'Melatih 30+ penyanyi junior dalam teknik vokal, harmonisasi, dan stage presence.',
          image: 'assets/images/REMINISCENTIA.jpeg'
        },
        {
          title: 'Concert Production',
          description: 'Mengelola produksi konser end-to-end dari rehearsal hingga show night dengan audience 600+ orang.',
          image: '/assets/images/reminiscentia-concert.jpg'
        }
      ],
      skills: ['Vocal Coaching', 'Sound Engineering', 'Stage Production', 'Leadership', 'Performance', 'Technical Management']
    },
    'padus': {
      icon: 'fa-shield-alt',
      type: 'Supervisor',
      title: 'Badan Pengawas PADUS Universitas Pancasila',
      description: 'Sebagai anggota Badan Pengawas, saya bertanggung jawab mengawasi dan mengevaluasi semua kegiatan organisasi PADUS, memastikan compliance dengan AD/ART, dan memberikan rekomendasi strategis untuk perbaikan organisasi.',
      achievements: [
        {
          title: 'Organizational Audit',
          description: 'Melakukan audit komprehensif terhadap program kerja dan keuangan organisasi dengan transparansi penuh.',
          image: 'assets/images/BP_PSUP.jpeg'
        },
        {
          title: 'Strategic Recommendations',
          description: 'Memberikan 15+ rekomendasi strategis yang berhasil meningkatkan efektivitas organisasi sebesar 40%.',
          image: '/assets/images/padus-strategy.jpg'
        }
      ],
      skills: ['Organizational Oversight', 'Strategic Planning', 'Compliance Management', 'Report Writing', 'Critical Thinking', 'Governance']
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
      
      /* ==================== 1. CUSTOM CURSOR ==================== */
      const cursor = document.querySelector('.cursor');
      const follower = document.querySelector('.cursor-follower');
      const links = document.querySelectorAll('a, button, .tab-btn, .exp-card, .contact-card');
  
      if (cursor && follower) {
          document.addEventListener('mousemove', (e) => {
              cursor.style.left = e.clientX + 'px';
              cursor.style.top = e.clientY + 'px';
              
              setTimeout(() => {
                  follower.style.left = e.clientX + 'px';
                  follower.style.top = e.clientY + 'px';
              }, 100);
          });
  
          links.forEach(link => {
              link.addEventListener('mouseenter', () => {
                  cursor.style.transform = 'scale(1.5)';
                  follower.style.transform = 'scale(1.5)';
                  follower.style.background = 'rgba(255, 215, 0, 0.1)';
              });
              link.addEventListener('mouseleave', () => {
                  cursor.style.transform = 'scale(1)';
                  follower.style.transform = 'scale(1)';
                  follower.style.background = 'transparent';
              });
          });
      }
  
      /* ==================== 2. NAVIGATION & BURGER MENU ==================== */
      const header = document.querySelector('header');
      const burger = document.getElementById('burger');
      const navLinks = document.getElementById('navLinks');
      const navLinksItems = document.querySelectorAll('.nav-links li a');
  
      window.addEventListener('scroll', () => {
          if (window.scrollY > 100) {
              header.classList.add('scrolled');
          } else {
              header.classList.remove('scrolled');
          }
      });
  
      if (burger && navLinks) {
          burger.addEventListener('click', () => {
              navLinks.classList.toggle('active');
              burger.classList.toggle('active');
          });
      }
  
      navLinksItems.forEach(item => {
          item.addEventListener('click', () => {
              navLinks.classList.remove('active');
              burger.classList.remove('active');
          });
      });
  
      /* ==================== 3. SCROLL ANIMATIONS ==================== */
      const observerOptions = {
          threshold: 0.2
      };
  
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  
                  if (entry.target.classList.contains('hero-stats')) {
                      animateStats();
                  }
              }
          });
      }, observerOptions);
  
      document.querySelectorAll('.scroll-animate').forEach(el => {
          observer.observe(el);
      });
      
      const heroStats = document.querySelector('.hero-stats');
      if (heroStats) observer.observe(heroStats);
  
      /* ==================== 4. STATS COUNTER ANIMATION ==================== */
      let statsAnimated = false;
  
      function animateStats() {
          if (statsAnimated) return;
          
          const stats = document.querySelectorAll('.stat-number');
          
          stats.forEach(stat => {
              const target = parseFloat(stat.getAttribute('data-target'));
              const isFloat = target % 1 !== 0;
              const duration = 2000;
              const step = target / (duration / 16);
              
              let current = 0;
              
              const updateCount = () => {
                  current += step;
                  
                  if (current < target) {
                      stat.innerText = isFloat ? current.toFixed(2) : Math.ceil(current);
                      requestAnimationFrame(updateCount);
                  } else {
                      stat.innerText = target;
                  }
              };
              
              updateCount();
          });
          
          statsAnimated = true;
      }
  
      /* ==================== 5. EXPERIENCE TABS ==================== */
      const tabBtns = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
  
      tabBtns.forEach(btn => {
          btn.addEventListener('click', () => {
              tabBtns.forEach(b => b.classList.remove('active'));
              tabContents.forEach(c => c.classList.remove('active'));
  
              btn.classList.add('active');
  
              const target = btn.getAttribute('data-tab');
              document.getElementById(target).classList.add('active');
          });
      });
  
      /* ==================== 6. SIMPLE 3D TILT EFFECT ==================== */
      const tiltElement = document.querySelector('.about-image');
      
      if (tiltElement) {
          tiltElement.addEventListener('mousemove', (e) => {
              const rect = tiltElement.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const xRotation = -((y - rect.height / 2) / rect.height * 20);
              const yRotation = (x - rect.width / 2) / rect.width * 20;
              
              tiltElement.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
          });
  
          tiltElement.addEventListener('mouseleave', () => {
              tiltElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
          });
          
          tiltElement.style.transition = 'transform 0.1s ease';
      }
  
      /* ==================== 7. ACTIVE LINK ON SCROLL ==================== */
      const sections = document.querySelectorAll('section');
      
      window.addEventListener('scroll', () => {
          let current = '';
          
          sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;
              
              if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                  current = section.getAttribute('id');
              }
          });
  
          navLinksItems.forEach(li => {
              li.classList.remove('active');
              li.classList.remove('active');
              if (li.getAttribute('href').includes(current)) {
                  li.classList.add('active'); 
              }
          });
      });
  
      /* ==================== 8. MODAL FUNCTIONALITY (FIXED COLOR & LAYOUT) ==================== */
      const modal = document.getElementById('experienceModal');
      const modalOverlay = modal?.querySelector('.modal-overlay');
      const modalClose = modal?.querySelector('.modal-close');
      const modalBody = document.getElementById('modalBody');
      const expCards = document.querySelectorAll('.exp-card[data-modal]');
  
      function generateModalContent(data) {
          if (!data) return '<p>Error: Data not found</p>';
  
          const isInternship = (data.type === 'Internship');
          
          // --- Header ---
          let html = `
              <div class="modal-header">
                  <div class="modal-icon">
                      <i class="fas ${data.icon}"></i>
                  </div>
                  <div>
                      <span class="modal-type">${data.type}</span>
                      <h2 class="modal-title">${data.title}</h2>
                  </div>
              </div>`;
  
          // --- LOGIKA UTAMA ---
          if (isInternship) {
              // === LAYOUT MAGANG (Default) ===
              html += `
                  <div class="modal-description">
                      <h3 style="color: #003366;">Deskripsi</h3>
                      <p style="color: #333;">${data.description}</p>
                  </div>
                  <div class="modal-achievements">
                      <h3 style="color: #003366;">Pencapaian & Hasil Kerja</h3>
                      <div class="achievement-grid">
              `;
              
              if (data.achievements) {
                  data.achievements.forEach((achievement, index) => {
                      html += `
                          <div class="achievement-item">
                              <div class="achievement-number">${index + 1}</div>
                              <h4>${achievement.title}</h4>
                              <p>${achievement.description}</p>
                              ${achievement.image ? `
                              <div class="achievement-image">
                                  <img src="${achievement.image}" alt="${achievement.title}">
                              </div>` : ''}
                          </div>
                      `;
                  });
              }
              html += `</div></div>`;
  
          } else {
              // === LAYOUT NON-MAGANG (Side-by-Side & Warna Fixed) ===
              
              // Ambil 1 foto pertama
              let firstImage = null;
              if (data.achievements) {
                  const foundItem = data.achievements.find(a => a.image);
                  if (foundItem) firstImage = foundItem.image;
              }
  
              // Flex Container
              html += `<div style="display: flex; gap: 20px; align-items: flex-start; margin-bottom: 30px; flex-wrap: wrap;">`;
  
              // 1. Kolom Gambar
              if (firstImage) {
                  html += `
                      <div style="flex: 1; min-width: 280px;">
                          <div style="border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.2); width: 100%;">
                              <img src="${firstImage}" style="width: 100%; height: auto; display: block; object-fit: cover;" alt="${data.title}">
                          </div>
                      </div>
                  `;
              }
  
              // 2. Kolom Deskripsi (Warna Header #003366, Warna Teks #333)
              html += `
                  <div style="flex: 1.5; min-width: 280px;">
                      <h3 style="margin-top: 0; color: #003366; font-size: 1.4rem; margin-bottom: 1rem;">Deskripsi</h3>
                      <p style="line-height: 1.6; color: #333; font-size: 1rem;">${data.description}</p>
                  </div>
              </div>`; 
  
              // 3. Achievements (Header #003366)
              html += `
                  <div class="modal-achievements">
                      <h3 style="color: #003366;">Pencapaian</h3>
                      <div class="achievement-grid">
              `;
              
              if (data.achievements) {
                  data.achievements.forEach((achievement, index) => {
                      html += `
                          <div class="achievement-item">
                              <div class="achievement-number">${index + 1}</div>
                              <h4>${achievement.title}</h4>
                              <p>${achievement.description}</p>
                          </div>
                      `;
                  });
              }
              html += `</div></div>`;
          }
  
          // --- Skills (Header #003366) ---
          html += `
              <div class="modal-skills">
                  <h3 style="color: #003366;">Teknologi & Skills</h3>
                  <div class="modal-tags">
                      ${data.skills.map(skill => `<span>${skill}</span>`).join('')}
                  </div>
              </div>
          `;
  
          return html;
      }
  
      function openModal(modalId) {
          const data = modalData[modalId];
          if (data) {
              modalBody.innerHTML = generateModalContent(data);
              modal.classList.add('active');
              document.body.style.overflow = 'hidden';
          }
      }
  
      function closeModal() {
          modal.classList.remove('active');
          document.body.style.overflow = '';
      }
  
      expCards.forEach(card => {
          card.addEventListener('click', () => {
              const modalId = card.getAttribute('data-modal');
              openModal(modalId);
          });
      });
  
      if (modalClose) {
          modalClose.addEventListener('click', closeModal);
      }
  
      if (modalOverlay) {
          modalOverlay.addEventListener('click', closeModal);
      }
  
      document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modal.classList.contains('active')) {
              closeModal();
          }
      });
  });