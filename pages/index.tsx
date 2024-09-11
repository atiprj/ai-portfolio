import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

// Define the Work type
type Work = {
  id: number;
  title: string;
  description: string;
  tool: string;
  date: string;  // Aggiunto campo per la data
  type: 'image' | 'audio' | 'text' | 'video' | 'embed';
  content: string;
}

// Simulated data for AI-generated works
const works: Work[] = [
  {
    id: 1,
    title: "Text-to-Image - ARC - GreenFacade",
    description: "A stunning BAUBAUBAU created by our Stable Diffusion Test AI model.",
    tool: "xxx",
    date: "2023.10.24",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.10.24_SD-00105-2857680428.jpg?raw=true",
  },
  {
    id: 2,
    title: "Text-to-Image - ARC - Skyscraper",
    description: "A stunning BAUBAUBAU created by our Stable Diffusion Interpoaltion Test AI model.",
    tool: "xxx",
    date: "2023.06.22",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.06.22_SD-Dint-00074-2613490247.0.jpg?raw=true",
  },
  {
    id: 3,
    title: "AI Music Composition",
    description: "A beautiful melody composed by our AI music generator.",
    tool: "xxx",
    date: "2021.10.24",
    type: "audio",
    content: "https://example.com/ai-generated-music.mp3",
  },
  {
    id: 4,
    title: "AI-Written Short Story",
    description: "A compelling short story written by our language model.",
    tool: "xxx",
    date: "2022.11.24",
    type: "text",
    content: "Once upon a time in a digital realm, an AI dreamed of electric sheep...",
  },
  {
    id: 5,
    title: "AI Sketch To Image - InterpolationV2",
    description: "A mesmerizing video sequence created by our AI video model interpolazion from sketch ",
    tool: "SD+Runway",
    date: "2023.11.03",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.11.3_SDK1_SketchToRender_DRAFT02.mp4",
  },
  {
    id: 6,
    title: "AI Sketch To Image - InterpolationV1",
    description: "A mesmerizing video sequence created by our AI video model interpolazion from ",
    tool: "xxx",
    date: "2023.10.25",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.10.24_ATI_SD-SketchToImage.mp4",
  },
  {
    id: 7,
    title: "Biennale 2024 - Lucca",
    description: "An interactive piece of art generated clustering by our AI, hosted on spackl platform.",
    tool: "xxx",
    date: "2024.06.29",
    type: "embed",
    content: "https://app.speckle.systems/projects/602f74e444/models/8de5ac4c1f#embed=%7B%22isEnabled%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22hideControls%22%3Atrue%2C%22hideSelectionInfo%22%3Atrue%7D",
  },
  {
    id: 8,
    title: "AI-Generated Portrait",
    description: "A unique portrait created by our AI image generation model.",
    tool: "xxx",
    date: "2021.06.24",
    type: "image",
    content: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | Work['type']>("all")
  const [modalContent, setModalContent] = useState<Work | null>(null)

  // Filtra le card e ordina per data
  const filteredWorks = activeTab === "all" 
    ? works.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Ordina per data decrescente
    : works.filter(work => work.type === activeTab).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const openModal = (work: Work) => {
    setModalContent(work)
  }

  const closeModal = () => {
    setModalContent(null)
  }

  // Funzione per assegnare colori tenui in scala di grigi in base al tipo di card
  const getCardColor = (type: Work['type']) => {
    switch (type) {
      case 'image':
        return 'bg-gray-900'; // Grigio chiaro
      case 'video':
        return 'bg-gray-800'; // Un po' più scuro
      case 'audio':
        return 'bg-gray-700'; // Ancora più scuro
      case 'text':
        return 'bg-gray-600'; // Grigio scuro
      case 'embed':
        return 'bg-gray-500'; // Grigio molto scuro
      default:
        return 'bg-gray-400'; // Il più scuro
    }
  }

  return (
    <div className="min-h-screen bg-base-100">
      <Head>
        <title>Generative AI - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Generative AI - Portfolio</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold hover:text-blue-500 hover:scale-105 hover:text-shadow-lg transition-all duration-300 hover:animate-bounce">
            Creative Generative AI - Dev Team
          </h1>
          <p className="mb-6 text-xl">Research & Development Department</p>
          <p className="mx-auto max-w-2xl">
            Explore our diverse collection of AI-generated content, spanning across various mediums including images, 
            videos, audio, and interactive experiences.
          </p>
        </section>

        <div className="tabs tabs-boxed justify-center mb-8">
          <a className={`tab ${activeTab === "all" ? "tab-active" : ""}`} onClick={() => setActiveTab("all")}>All</a>
          <a className={`tab ${activeTab === "image" ? "tab-active" : ""}`} onClick={() => setActiveTab("image")}>Images</a>
          <a className={`tab ${activeTab === "video" ? "tab-active" : ""}`} onClick={() => setActiveTab("video")}>Videos</a>
          <a className={`tab ${activeTab === "audio" ? "tab-active" : ""}`} onClick={() => setActiveTab("audio")}>Audio</a>
          <a className={`tab ${activeTab === "text" ? "tab-active" : ""}`} onClick={() => setActiveTab("text")}>Text</a>
          <a className={`tab ${activeTab === "embed" ? "tab-active" : ""}`} onClick={() => setActiveTab("embed")}>Interactive</a>
        </div>

        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredWorks.map((work) => (
              <div 
                key={work.id} 
                className={`card shadow-xl ${getCardColor(work.type)}`} // Applica il colore in base al tipo
                onClick={() => openModal(work)}
              >
                <figure className="px-10 pt-10">
                  {work.type === "image" && (
                    <Image src={work.content} alt={work.title} width={400} height={300} objectFit="cover" className="rounded-xl" />
                  )}
                  {work.type === "video" && (
                    <video src={work.content} className="h-64 w-full object-cover rounded-xl" muted loop playsInline />
                  )}
                  {work.type === "audio" && (
                    <div className="flex h-64 items-center justify-center bg-base-300 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                  )}
                  {work.type === "text" && (
                    <div className="flex h-64 items-center justify-center bg-base-300 rounded-xl p-4">
                      <p className="text-center line-clamp-5">{work.content}</p>
                    </div>
                  )}
                  {work.type === "embed" && (
                    <div className="flex h-64 items-center justify-center bg-base-300 rounded-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </figure>
                <div className="card-body text-left space-y-4"> {/* Allinea il testo a sinistra e imposta spaziatura uniforme */}
                  <p className="text-sm text-gray-500">{work.date}</p> {/* Data sopra il titolo */}
                  <h2 className="card-title">{work.title}</h2>
                  <p>{work.description}</p>
                  <p className="text-sm text-gray-500">Tools: {work.tool}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>© 2023 John Doe. All rights reserved.</p>
        </div>
      </footer>

      {modalContent && (
        <div className="modal modal-open">
          <div className="modal-box">
            {modalContent.type === "image" && (
              <Image src={modalContent.content} alt={modalContent.title} width={800} height={600} objectFit="contain" />
            )}
            {modalContent.type === "video" && (
              <video src={modalContent.content} controls className="w-full" />
            )}
            {modalContent.type === "audio" && (
              <audio src={modalContent.content} controls className="w-full" />
            )}
            {modalContent.type === "text" && (
              <div className="max-h-96 overflow-y-auto">
                <p>{modalContent.content}</p>
              </div>
            )}
            {modalContent.type === "embed" && (
              <iframe src={modalContent.content} className="w-full h-96" title={modalContent.title} />
            )}
            <h3 className="font-bold text-lg mt-4">{modalContent.title}</h3>
            <p className="py-4">{modalContent.description}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}