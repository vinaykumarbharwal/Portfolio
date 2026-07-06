"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import { portfolioData } from './data';

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0); 
    
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true, 
        alpha: true 
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    const geometry = new THREE.IcosahedronGeometry(2.2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.08 });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(0, 0, 0); 
    scene.add(sphere);

    const pointsGeometry = new THREE.BufferGeometry();
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for(let i=0; i<count*3; i++) positions[i] = (Math.random() - 0.5) * 12;
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pointsMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff, transparent: true, opacity: 0.6 });
    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(particles);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.001;
      particles.rotation.y += mouseX * 0.05;
      particles.rotation.x += mouseY * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      renderer.setSize(width, height, false); 
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // --- Audio Autoplay Logic ---
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.volume = 0.2;
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          const playOnInteract = () => {
            audio.play();
            setIsPlaying(true);
            document.removeEventListener('click', playOnInteract);
          };
          document.addEventListener('click', playOnInteract, { once: true });
        });
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // REMOVED bg-[#050505] from here so it doesn't swallow the canvas
    <main className="text-white min-h-screen font-sans selection:bg-white selection:text-black scroll-smooth relative overflow-x-hidden">
      
      {/* 1. DEEPEST LAYER: Solid Black Background (-z-50) */}
      <div className="fixed inset-0 bg-[#050505] -z-50 pointer-events-none"></div>

      {/* 2. MIDDLE LAYER: 3D Canvas (-z-40) */}
        <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 pointer-events-none -z-40 outline-none" 
        style={{ opacity: 0.5 }} 
        />
      
      <audio ref={audioRef} loop src="/images/deathofbluebird.mp3" />

      {/* 3. TOP LAYER: Portfolio Content (z-10) */}
      <div className="max-w-[1150px] mx-auto px-8 relative z-10">
        
        {/* Navigation */}
        <nav className="flex justify-between items-center py-[2rem] uppercase text-[0.75rem] tracking-[2px]">
          <div className="font-black text-[1rem] not-italic">Builder | AI | Full-Stack</div>
          <div className="flex items-center">
            <a href="#arsenal" className="opacity-70 hover:opacity-100 transition-opacity ml-[2rem]">Expertise</a>
            <a href="#work" className="opacity-70 hover:opacity-100 transition-opacity ml-[2rem]">Work</a>
            <a href="#contact" className="opacity-70 hover:opacity-100 transition-opacity ml-[2rem]">Contact</a>
            
            <button 
              onClick={toggleMusic}
              title="Play Music"
              className={`w-[35px] h-[35px] border rounded-full flex items-center justify-center ml-[2rem] cursor-pointer transition-all duration-300 ${isPlaying ? 'border-[#4ade80] text-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.2)] opacity-100' : 'border-[#222] text-white opacity-70 hover:opacity-100 hover:border-white hover:bg-white/10'}`}
            >
              <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} id="music-icon"></i>
            </button>
          </div>
        </nav>

        {/* Hero */}
        <header className="py-[10vh]">
          <h1 className="text-[clamp(5rem,12vw,9rem)] font-black leading-[0.85] uppercase tracking-[-4px]">
            Vinay<br/>Kumar
            <span className="block mt-[0.5rem] text-[0.5em] tracking-[4px] text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
              Python Full-Stack Developer
            </span>
          </h1>
          <div className="flex justify-end mt-[2rem]">
            <p className="max-w-[400px] text-[#888] text-[1.1rem] leading-relaxed">
                I am a Python full-stack web developer building modern, scalable web applications.
                Skilled in frontend, backend, databases, and AI-assisted development workflows.
            </p>
          </div>
        </header>

       {/* --- Full-Width Video Showcase --- */}
      <section id="videos" className="mt-[6rem] mb-[2rem] w-full">
        <div className="text-[0.7rem] uppercase text-[#888] tracking-[2px] border-b border-[#222] pb-[1rem] mb-[3rem]">
          Featured Demonstrations
        </div>
        
        <div className="flex flex-col gap-12">
          {portfolioData.videos.map((vid, index) => (
            <div 
              key={index} 
              className="group relative w-full border border-[#222] bg-[#050505] overflow-hidden"
            >
              <div className="relative w-full h-[50vh] md:h-[70vh]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                  poster={vid.thumbnail}
                >
                  <source src={vid.videoSrc} type="video/mp4" />
                </video>
                
                <div className="absolute top-8 left-8 z-20">
                  <div className="text-[0.6rem] tracking-[4px] uppercase text-white/40 mb-2">Project Preview {"//"} 0{index + 1}</div>
                  <h4 className="text-[1.5rem] md:text-[2.5rem] font-black uppercase leading-none tracking-tighter">
                    {vid.title}
                  </h4>
                </div>

                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
                  <div className="max-w-[450px] hidden md:block">
                    <p className="text-[#888] text-[0.9rem] md:text-[1.1rem] leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Technical Arsenal */}
        <section id="arsenal" className="mt-[4rem] mb-[2rem]">
          <div className="text-[0.7rem] uppercase text-[#888] tracking-[2px] border-b border-[#222] pb-[1rem] mb-[2rem]">Technical Arsenal</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[2rem]">
            {portfolioData.skills.map((cat) => (
              <div key={cat.id}>
                <h3 className="text-[0.8rem] text-[#888] mb-[1rem] tracking-[1px] uppercase">{cat.id} {"//"} {cat.category}</h3>
                <div className="flex flex-wrap gap-[0.5rem]">
                  {cat.items.map(skill => (
                    <span key={skill} className="font-mono text-[0.75rem] px-[0.6rem] py-[0.3rem] bg-white/5 border border-white/15 text-[#ccc] hover:bg-white hover:text-[#050505] hover:border-white transition-colors duration-200 cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Log */}
        <section className="mt-[4rem] mb-[2rem]">
            <div className="text-[0.7rem] uppercase text-[#888] tracking-[2px] border-b border-[#222] pb-[1rem] mb-[2rem]">Experience Log</div>
            {portfolioData.experience.map((exp, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-[2rem] border-b border-[#222] gap-[2rem]">
                    <div className="font-mono text-[0.8rem] text-[#888] font-bold pt-[0.3rem]">{exp.year}</div>
                    <div>
                        <h4 className="text-[1.5rem] uppercase font-bold mb-[0.2rem]">{exp.company}</h4>
                        <span className="block text-white/90 font-semibold mb-[0.8rem]">{exp.role}</span>
                        <ul className="text-[#888]">
                            {exp.points.map((p, i) => (
                                <li key={i} className="text-[0.9rem] relative pl-[1rem] mb-[0.5rem] before:content-['›'] before:absolute before:left-0 before:text-white">
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </section>

        {/* Education Row */}
        <section className="mt-[4rem] mb-[2rem]">
          <div className="text-[0.7rem] uppercase text-[#888] tracking-[2px] border-b border-[#222] pb-[1rem] mb-[2rem]">Education</div>
          {portfolioData.education.map((edu) => (
            <div key={`${edu.school}-${edu.year}`} className="grid grid-cols-1 md:grid-cols-[160px_1fr] py-[2rem] border-b border-[#222] gap-[2rem]">
              <div className="font-mono text-[0.8rem] text-[#888] font-bold pt-[0.3rem]">{edu.year}</div>
              <div>
                <h4 className="text-[1.5rem] uppercase font-bold mb-[0.2rem]">{edu.school}</h4>
                <span className="block text-white/90 font-semibold">{edu.degree}</span>
                <p className="text-[#888] text-[0.9rem] mt-[0.5rem]">{edu.university}</p>
                <p className="text-[#888] text-[0.9rem] mt-[0.2rem]">{edu.location}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Selected Projects */}
        <section id="work" className="mt-[4rem] mb-[2rem]">
          <div className="text-[0.7rem] uppercase text-[#888] tracking-[2px] border-b border-[#222] pb-[1rem] mb-[2rem]">Selected Projects</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[1.5rem]">
            {portfolioData.projects.map((proj) => (
              <a href={proj.link} target="_blank" key={proj.title} className="group border border-[#222] bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#555] hover:-translate-y-[5px] transition-all duration-400 flex flex-col">
                <div className="relative h-[200px] w-full bg-[#111] overflow-hidden border-b border-[#222]">
                  <Image 
                    src={proj.image} 
                    alt={proj.title} 
                    fill 
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-[1.5rem] flex-grow">
                  <h4 className="uppercase text-[1.1rem] mb-[0.5rem] tracking-[0.5px] font-bold">{proj.title}</h4>
                  <p className="text-[#888] text-[0.85rem] mb-[1rem] leading-[1.5]">{proj.desc}</p>
                  <div className="flex gap-[0.5rem] flex-wrap">
                    {proj.tags.map(tag => (
                        <span key={tag} className="font-mono text-[0.75rem] px-[0.6rem] py-[0.3rem] bg-white/5 border border-white/15 text-[#ccc]">
                            {tag}
                        </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <div className="flex flex-col gap-6 overflow-hidden no-scrollbar pb-4 mt-[4rem]">
          <div className="flex gap-6 animate-marquee whitespace-nowrap">
            {[...portfolioData.certificates, ...portfolioData.certificates].map((cert, i) => (
              <a 
                key={i} 
                href={cert.link} 
                className="flex-shrink-0 w-[350px] p-8 border border-[#222] bg-white/[0.02] hover:border-white/40 transition-all duration-300"
              >
                <span className="block text-[0.55rem] text-[#666] uppercase mb-3 tracking-[3px] font-bold">{cert.issuer}</span>
                <h4 className="text-[0.8rem] font-bold uppercase text-white/80 whitespace-normal leading-relaxed">
                  {cert.title}
                </h4>
              </a>
            ))}
          </div>

          <div className="flex gap-6 animate-marquee-reverse whitespace-nowrap">
            {[...portfolioData.certificates, ...portfolioData.certificates].map((cert, i) => (
              <a 
                key={i} 
                href={cert.link} 
                className="flex-shrink-0 w-[350px] p-8 border border-[#222] bg-white/[0.02] hover:border-white/40 transition-all duration-300"
              >
                <span className="block text-[0.55rem] text-[#666] uppercase mb-3 tracking-[3px] font-bold">{cert.issuer}</span>
                <h4 className="text-[0.8rem] font-bold uppercase text-white/80 whitespace-normal leading-relaxed">
                  {cert.title}
                </h4>
              </a>
            ))}
          </div>
        </div>

        {/* Distinctions */}
        <section className="mt-[4rem] mb-[2rem]">
          <div className="text-[0.7rem] uppercase text-[#888] tracking-[2px] border-b border-[#222] pb-[1rem] mb-[2rem]">Distinctions</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-[2.5rem] border border-[#222] p-[3rem]">
            {portfolioData.distinctions.map((dist) => (
              <div key={dist.title} className="flex gap-[1.5rem] items-start pb-[1.5rem] border-b border-white/5 last:border-0">
                <div className="relative w-[80px] h-[80px] flex-shrink-0 border border-[#222] bg-[#222] overflow-hidden">
                  <Image src={dist.image} alt="Award" fill className="object-cover opacity-80" />
                </div>
                <div>
                  <h5 className="font-bold text-[1rem] mb-[0.3rem] text-white">{dist.title}</h5>
                  <p className="text-[0.85rem] text-[#888]">{dist.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="pt-[8rem] pb-[3rem] border-t border-[#222] mt-[6rem]">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-[4rem] mb-[5rem] items-end">
            <div>
              <h2 className="text-[clamp(3rem,7vw,6rem)] font-black uppercase leading-[0.9] tracking-[-2px] mb-[1.5rem]">LET&apos;S BUILD<br/>THE FUTURE.</h2>
              <p className="text-[#888] text-[1rem] max-w-[400px] leading-[1.6]">Open for internships, freelance projects, and collaborations.</p>
            </div>
            <div className="flex flex-col items-start pb-[10px]">
               <a href={`mailto:${portfolioData.contact.email}`} className="font-mono text-[1.1rem] border-b border-white/30 pb-[5px] hover:border-white hover:text-[#ccc] transition-all duration-300 inline-flex items-center gap-[12px] mb-[2rem] tracking-[0.5px]">
                 {portfolioData.contact.email} <i className="fas fa-arrow-right text-[1rem]"></i>
               </a>
               <div className="flex gap-[2rem] text-[1.4rem]">
                    <a href={portfolioData.contact.links.linkedin} target="_blank" className="opacity-70 hover:opacity-100 hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-linkedin"></i></a>
                    <a href={portfolioData.contact.links.twitter} target="_blank" className="opacity-70 hover:opacity-100 hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-x-twitter"></i></a>
                    <a href={portfolioData.contact.links.github} target="_blank" className="opacity-70 hover:opacity-100 hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-github"></i></a>
                    <a href={portfolioData.contact.links.instagram} target="_blank" className="opacity-70 hover:opacity-100 hover:-translate-y-[3px] transition-all duration-300"><i className="fab fa-instagram"></i></a>
               </div>
            </div>
          </div>
          <div className="flex justify-between text-[0.8rem] font-mono text-[#888] pt-[2rem] border-t border-[#222]">
            <span>{portfolioData.contact.location}</span>
            <span>© 2026 Vinay Kumar</span>
          </div>
        </footer>
      </div>
    </main>
  );
}