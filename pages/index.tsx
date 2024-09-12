import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronUpIcon, GithubIcon, LinkedinIcon, ZoomInIcon } from 'lucide-react'

// Define the Work type
type Work = {
  id: number;
  title: string;
  description: string;
  tool: string;
  date: string;
  type: 'image' | 'audio' | 'text' | 'video' | 'embed';
  content: string;
  previewImage?: string; // New property for preview images
}

// Simulated data for AI-generated works
const works: Work[] = [
  {
    id: 1,
    title: "Text-to-Image - ARC - GreenFacade",
    description: "Preliminary approaches to using controlnet to generate images from freehand sketches",
    tool: "StableDiffusion+ControlNet",
    date: "2023.10.24",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.10.24_SD-00105-2857680428.jpg?raw=true",
  },
  {
    id: 2,
    title: "Text-to-Image - ARC - Skyscraper",
    description: "Approaches to using controlnet to generate images from 3D mass concept geometry",
    tool: "StableDiffusion+ControlNet",
    date: "2023.06.22",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.06.22_SD-Dint-00074-2613490247.0.jpg?raw=true",
  },
  {
    id: 3,
    title: "Beats of the Cosmos",
    description: "Techno Ambient Blend",
    tool: "Loudly",
    date: "2024.08.24",
    type: "audio",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/audio/Beats_of_the_Cosmos.mp3",
    previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_cover_vinyl_of_techno_ambient_track_song_title_Beats_of__1.jpg?raw=true",
  },
  {
    id: 4,
    title: "Image-to-Video - ARC - Facade Variation",
    description: "A stunning variation of architecture facades created by multiple images created by Midjourney and mixed by an AI Interpolation model",
    tool: "Midjourney+Runway",
    date: "2023.11.13",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/13.11.23_AI Image to Video - Building Vary Region.mp4",
  },
  {
    id: 5,
    title: "Sketch-To-Image - InterpolationV2",
    description: "A mesmerizing video sequence created by our AI video model interpolazion from sketch",
    tool: "StableDiffusion+Runway+AfterEffect",
    date: "2023.11.03",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.11.3_SDK1_SketchToRender_DRAFT02.mp4",
  },
  {
    id: 6,
    title: "Sketch-To-Image - InterpolationV1",
    description: "First testing video sequence created by batch image interpolazion from sketch",
    tool: "StableDiffusion+Runway",
    date: "2023.10.25",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.10.24_ATI_SD-SketchToImage.mp4",
  },
  {
    id: 7,
    title: "Design Temporariness! - Biennale 2024 - Lucca",
    description: "Placed within the historical context of Palazzo Guinigi in the center of Lucca, the exhibition pavilion, Effimero, works as a communication medium for sustainability and circularity, becoming a catalyst for innovation. ‘‘Design Temporariness’’ integretes computational + AI design and the digital fabrication to obtain an adatable system that improves quality and predictability of the final outcome.",
    tool: "Rhino+Grasshopper+Lunchbox+Speckle",
    date: "2024.06.29",
    type: "embed",
    content: "https://app.speckle.systems/projects/602f74e444/models/8de5ac4c1f#embed=%7B%22isEnabled%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22hideControls%22%3Atrue%2C%22hideSelectionInfo%22%3Atrue%7D",
    previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/Cover-biennalelubica.PNG?raw=true"
  },
  {
    id: 8,
    title: "Mass+Sketch-To-Video - Prompt Animation",
    description: "Testing approaches for creating video animations from formatted text for time-based prompt sequences in JSON",
    tool: "StableDiffusion+Deforum+AfterEffect",
    date: "2023.06.28",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/IG_TB-A_60sec.mp4",
  },
  {
    id: 9,
    title: "Image-to-Video - Multi Color Environment",
    description: "A wonderful change of colors on the image from day to night generated with an AI GEN-2 model",
    tool: "Midjourney+Runway",
    date: "2023.09.23",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/20.09.23_AI Image to Video - Multi Color Environment.mp4",
  },
  {
    id: 10,
    title: "Image-to-Video - Urban Plans Generation",
    description: "The incredible possibility to change the face of buildings with a simple description on Midjourney",
    tool: "Midjourney+Runway",
    date: "2024.01.26",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/26.01.24_AI Image to Video - Urban Plans Generation.gif?raw=true",
  },
  {
    id: 11, 
    title: "Sketch-To-Image - New Hospital Concpet", 
    description: "A final concept render created by a text2img from sketch", 
    tool: "StableDiffusion+Runway", 
    date: "2024.01.19", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.01.19_AI Sketch To Image_Project Jan1.mp4",
  },
  {    
    id: 12, 
    title: "Text-To-Gif - Uncontrol Animation test", 
    description: "A concept of a building entrance created by a text2img", 
    tool: "StableDiffusion+AnimeDiff", 
    date: "2024.01.25", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2024.01.025_AI Text To Gif_Project Jan2.gif?raw=true",
  },
  {    
    id: 13, 
    title: "3D-To-Image - Masterplan Massing test",
    description: "A preliminary project concept design render created by a text2img from sketch", 
    tool: "Revit+PSD+StableDiffusion+Runway", 
    date: "2024.02.12", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.02.12_AI 3D To Image_Project Feb1.mp4",
  },
  {    
    id: 14, 
    title: "Segmentation-To-Image - From Color to Skyscraper", 
    description: "A concept design render created by a img2img from segmentation", 
    tool: "PSD+StableDiffusion+Runway",
    date: "2024.02.15",
    type: "video",
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.02.15_AI Segmentation To Image_Project Feb2.mp4",
  },
  {    
    id: 15, 
    title: "3D-To-Image - New University Interpolation", 
    description: "A concept design render created by a text2img from sketch", 
    tool: "Revit+PSD+StableDiffusion+Runway", 
    date: "2024.03.01", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.03.01_AI 3D To Image_Project Mar1.mp4",
  },
  {        
    id: 16, 
    title: "VisualProgramming-To-Image - Loop Interation proposal", 
    description: "A real time render created by a img2img from grasshopper, for Biennale intallations concept", 
    tool: "GrassHopper+StableDiffusion+COMFYUI", 
    date: "2024.03.25", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2024.03.25_AI Grass hopper To Image_Project Mar2.gif?raw=true",
  },
  {        
    id: 17, 
    title: "RealImage-To-Image - Futuristic Painting Blend", 
    description: "An imaginary design of Milan most famous areas blended with famous Futuristic paintings",
    tool: "GoogleEarth+COMFYUI", 
    date: "2024.04.04", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/Image20240912193247.png?raw=true",
  },
  {          
    id: 18, 
    title: "Logo-to-Image - Logo Bulding metamorphosis", 
    description: "A video generation blending a logo to an image with an img2img process", 
    tool: "MidJourney+COMFYUI", 
    date: "2024.04.12", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2024.04.12_AI Logo to Image_Project Apr2.gif?raw=true",
  },
  {      
    id: 19, 
    title: "Image-Composition - Sperimental", 
    description: "An image blending between the building, subject, and the surrounding", 
    tool: "MidJourney+COMFYUI+Runway", 
    date: "2024.05.20", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.05.20_AI image composition_Project May1.mp4",
  },
  {      
    id: 20, 
    title: "3D-To-video - RealTime Capturing", 
    description: "Generation of frames of the subject from Blender and smarten up in Comfy UI",
    tool: "Blender+COMFYUI", 
    date: "2024.07.02", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.07.02_AI Blender2video_Project Jul1.mp4",
  },
  {          
    id: 21, 
    title: "Image-to-video - External School view", 
    description: "A video moving around the input image without changing volumes and subjects", 
    tool: " StableDiffusion+LUMA", 
    date: "2024.07.25", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.07.25_AI img2video_Project Jul2.mp4",
  },
  {      
    id: 22, 
    title: "Image batcher Img2Img -  Material Facade Proposal", 
    description: " A workflow that keep the subject by generating a batcher with different materials in an Img2Img", 
    tool: "SWARMUI+COMFYUI+Runway",
    date: "2024.08.31", 
    type: "video", 
    content: "https://github.com/atiprj/aiportfolio/raw/main/media/video/2024.08.31_AI batcher img2Img_Project Agu1.mp4",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | Work['type']>('all')
  const [modalContent, setModalContent] = useState<Work | null>(null)

  const sortedWorks = [...works].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const filteredWorks = activeTab === 'all'
    ? sortedWorks
    : sortedWorks.filter(work => work.type === activeTab)

  const openModal = (work: Work) => setModalContent(work)
  const closeModal = () => setModalContent(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white bg-opacity-95 backdrop-blur">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">GenAI Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2">
              <GithubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2">
              <LinkedinIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Creative Generative AI - Dev Team</h1>
          <p className="mb-6 text-xl text-gray-600">ATIproject - Research & Development Department</p>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our diverse collection of generative AI content, spanning across various mediums including images, 
            videos, audio, and interactive experiences. Analysis and developments focused on the field of design and architecture, 
            mixed with data management and artistic and installation creations for the recreation of immersive and innovative environments.
          </p>
        </section>

        <div className="mb-8 flex justify-center space-x-2">
          {['all', 'image', 'video', 'audio', 'text', 'embed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'all' | Work['type'])}
              className={`px-4 py-2 rounded-md ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredWorks.map((work) => (
              <div key={work.id} className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:z-10 hover:scale-105 hover:shadow-xl">
                <button onClick={() => openModal(work)} className="w-full text-left">
                  <div className="relative aspect-video w-full overflow-hidden">
                    {(work.type === 'image' || work.previewImage) && (
                      <Image
                        src={work.type === 'image' ? work.content : work.previewImage!}
                        alt={work.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    {work.type === 'video' && !work.previewImage && (
                      <video
                        src={work.content}
                        className="h-full w-full object-cover"
                        muted
                        loop
                        playsInline
                        onMouseOver={(e) => e.currentTarget.play()}
                        onMouseOut={(e) => e.currentTarget.pause()}
                      />
                    )}
                    {work.type === 'audio' && !work.previewImage && (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <ZoomInIcon className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                    {work.type === 'text' && !work.previewImage && (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <span className="text-2xl font-bold text-gray-400">Aa</span>
                      </div>
                    )}
                    {work.type === 'embed' && !work.previewImage && (
                      <div className="flex h-full w-full items-center justify-center bg-gray-200">
                        <span className="text-2xl font-bold text-gray-400">&lt;/&gt;</span>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold text-white">{work.title}</h3>
                    <p className="text-sm text-gray-200">{work.description}</p>
                    <div className="mt-2 flex justify-between text-xs text-gray-300">
                      <span>{work.date}</span>
                      <span>{work.tool}</span>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-16 border-t py-6 text-center text-gray-600">
        <p>© 2022 ATIproject - R&D Dep. All rights reserved.</p>
      </footer>

      <button
        className="fixed bottom-4 right-4 rounded-full bg-blue-500 p-2 text-white shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="h-5 w-5" />
      </button>

      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={closeModal}>
          <div className="max-w-3xl w-full bg-white p-4 rounded-lg" onClick={(e) => e.stopPropagation()}>
            {modalContent.type === 'image' && (
              <Image
                src={modalContent.content}
                alt={modalContent.title}
                width={800}
                height={600}
                layout="responsive"
                objectFit="contain"
              />
            )}
            {modalContent.type === 'video' && (
              <video src={modalContent.content} controls className="w-full" />
            )}
            {modalContent.type === 'audio' && (
              <div>
                {modalContent.previewImage && (
                  <Image
                    src={modalContent.previewImage}
                    alt={modalContent.title}
                    width={800}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
                <audio src={modalContent.content} controls className="w-full mt-4" />
              </div>
            )}
            {modalContent.type === 'text' && (
              <div>
                {modalContent.previewImage && (
                  <Image
                    src={modalContent.previewImage}
                    alt={modalContent.title}
                    width={800}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
                <div className="max-h-96 overflow-y-auto mt-4">
                  <p>{modalContent.content}</p>
                </div>
              </div>
            )}
            {modalContent.type === 'embed' && (
              <div>
                {modalContent.previewImage && (
                  <Image
                    src={modalContent.previewImage}
                    alt={modalContent.title}
                    width={800}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                  />
                )}
                <iframe src={modalContent.content} className="w-full h-96 mt-4" title={modalContent.title} />
              </div>
            )}
            <h3 className="mt-4 text-lg font-semibold">{modalContent.title}</h3>
            <p className="text-sm text-gray-600">{modalContent.description}</p>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>{modalContent.date}</span>
              <span>{modalContent.tool}</span>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}