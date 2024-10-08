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
    title: "Text-to-Image - GreenFacade",
    description: "Preliminary approaches to using controlnet to generate images from freehand sketches",
    tool: "StableDiffusion+ControlNet",
    date: "2023.10.24",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.10.24_SD-00105-2857680428.jpg?raw=true",
  },
  {
    id: 2,
    title: "Text-to-Image - Skyscraper",
    description: "Approaches to using controlnet to generate images from 3D mass concept geometry",
    tool: "StableDiffusion+ControlNet",
    date: "2023.06.22",
    type: "image",
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/2023.06.22_SD-Dint-00074-2613490247.0.jpg?raw=true",
  },
  {
    id: 3,
    title: "Text-To-Music - Beats of the Cosmos",
    description: "Testing genration of a Techno Ambient Blend beat",
    tool: "Loudly",
    date: "2024.08.24",
    type: "audio",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/audio/Beats_of_the_Cosmos.mp3",
    previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_cover_vinyl_of_techno_ambient_track_song_title_Beats_of__1.jpg?raw=true",
  },
  {
    id: 4,
    title: "Image-to-Video - Facade Variation",
    description: "A stunning variation of architecture facades created by multiple images created by Midjourney and mixed by an AI Interpolation model",
    tool: "Midjourney+Runway",
    date: "2023.11.13",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/13.11.23_AI Image to Video - Building Vary Region.mp4",
  },
  {
    id: 5,
    title: "Sketch-To-Image - Interpolation-V2",
    description: "A mesmerizing video sequence created by our AI video model interpolazion from sketch",
    tool: "StableDiffusion+Runway+AfterEffect",
    date: "2023.11.03",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2023.11.3_SDK1_SketchToRender_DRAFT02.mp4",
  },
  {
    id: 6,
    title: "Sketch-To-Image - Interpolation-V1",
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
    title: "Sketch-To-Image - New Hospital Concept", 
    description: "A final concept render created by a text2img from sketch", 
    tool: "StableDiffusion+Runway", 
    date: "2024.01.19", 
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.01.19_AI_SketchToImage_ProjectJan1.mp4",
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
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.02.12_AI_3DToImage_ProjectFeb1.mp4",
  },
  {    
    id: 14, 
    title: "Segmentation-To-Image - From Color to Skyscraper", 
    description: "A concept design render created by a img2img from segmentation", 
    tool: "PSD+StableDiffusion+Runway",
    date: "2024.02.15",
    type: "video",
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.02.15_AI_SegmentationToImage_ProjectFeb2.mp4",
  },
  {    
    id: 15, 
    title: "3D-To-Image - New University Interpolation", 
    description: "A concept design render created by a text2img from sketch", 
    tool: "Revit+PSD+StableDiffusion+Runway", 
    date: "2024.03.01", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.03.01_AI_3DToImage_ProjectMar1.mp4",
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
    title: "Painting-To-Image - Futuristic Painting Blend", 
    description: "An imaginary design of Piazzale Loreto in Milan blended with Gerardo Dottori - 'Città in Fiamme' painting",
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
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.05.20_AI_imagecomposition_ProjectMay1.mp4",
  },
  {      
    id: 20, 
    title: "3D-To-video - RealTime Capturing", 
    description: "Generation of frames of the subject from Blender and smarten up in Comfy UI",
    tool: "Blender+COMFYUI", 
    date: "2024.07.02", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.07.02_AI_Blender2video_ProjectJul1.mp4",
  },
  {          
    id: 21, 
    title: "Image-to-video - External School view", 
    description: "A video moving around the input image without changing volumes and subjects", 
    tool: " StableDiffusion+LUMA", 
    date: "2024.07.25", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.07.25_AI_img2video_ProjectJul2.mp4",
  },
  {      
    id: 22, 
    title: "Image batcher Img2Img -  Material Facade Proposal", 
    description: "A workflow that keep the subject by generating a batcher with different materials in an Img2Img", 
    tool: "SWARMUI+COMFYUI+Runway",
    date: "2024.08.31", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/2024.08.31_AI_batcherimg2Img_ProjectAgu1.mp4",
  },
  {          
    id: 23, 
    title: "Chat-To-Image-To-Text-To-Image-To-Pixel-To3dForm - Loop AI Iteration-C1", 
    description: "Variation loop to achive design suggestion inspiration - building with coral shapes on a mountain ridge over an alpi", 
    tool: "MidJourney+Rhinoceros+Grasshopper", 
    date: "2023.03.15", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ATI_building_with_coral_shapes_on_a_mountain_ridge_over_an_alpi.png?raw=true",
  },
  {          
    id: 24, 
    title: "Chat-To-Image-To-Text-To-Image-To-Pixel-To3dForm - Loop AI Iteration-C2", 
    description: "Variation loop to achive design suggestion inspiration - internal spiral staircase double-height white environment", 
    tool: "MidJourney+Rhinoceros+Grasshopper", 
    date: "2023.03.25", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ATI_internal_spiral_staircase_double-height_white_environment_c.png?raw=true",
  },
  {          
    id: 25, 
    title: "Chat-To-Image-To-Text-To-Image-To-Pixel-To3dForm - Loop AI Iteration-C3", 
    description: "Variation loop to achive design suggestion inspiration - three Skyscrapers in the park with a modular glass facade", 
    tool: "MidJourney+Rhinoceros+Grasshopper", 
    date: "2023.03.30", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ATI_three_Skyscrapers_in_the_park_with_a_modular_glass_facade.png?raw=true",
  },
  {          
    id: 26, 
    title: "Chat-To-Image-To-Text-To-Image-To-Pixel-To3dForm - Loop AI Iteration-C4", 
    description: "Variation loop to achive design suggestion inspiration - view from the ocean of a long coast of a series of exploration", 
    tool: "MidJourney+Rhinoceros+Grasshopper", 
    date: "2023.04.15", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ATI_view_from_the_ocean_of_a_long_coast_of_a_series_of_explorat.png?raw=true",
  },
  {          
    id: 27, 
    title: "Chat-To-Image-To-Text-To-Image-To-Pixel-To3dForm - Loop AI Iteration-C5", 
    description: "Variation loop to achive design suggestion inspiration - view of buildings on a canal in a northern european city", 
    tool: "MidJourney+Rhinoceros+Grasshopper", 
    date: "2023.04.05", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ATI_view_of_buildings_on_a_canal_in_a_northern_european_city.png?raw=true",
  },
  {          
    id: 28, 
    title: "HumanMovements-To-Scan-To-Pixel-To-3Dform-To-Image - Loop AI Iteration-E1", 
    description: "Creation of suggestions of urban context project, created through laser scanning of human movements in possible new urban and natural locations. In collaboration with G", 
    tool: "MidJourney+Rhinoceros+Grasshopper+Recap+Leica+Nikon", 
    date: "2023.03.16", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/PP02-b.jpg?raw=true",
  },
  {          
    id: 29, 
    title: "HumanMovements-To-Scan-To-Pixel-To-3Dform-To-Image - Loop AI Iteration-E2", 
    description: "Creation of suggestions of urban context project, created through laser scanning of human movements in possible new urban and natural locations.", 
    tool: "MidJourney+Rhinoceros+Grasshopper+Recap+Leica+Nikon", 
    date: "2023.03.18", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/PP03-d.jpg?raw=true",
  },
  {          
    id: 30, 
    title: "HumanMovements-To-Scan-To-Pixel-To-3Dform-To-Image - Loop AI Iteration-E3", 
    description: "Creation of suggestions of urban context project, created through laser scanning of human movements in possible new urban and natural locations.", 
    tool: "MidJourney+Rhinoceros+Grasshopper+Recap+Leica+Nikon", 
    date: "2023.03.20", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/PP04.jpg?raw=true",
  },
  {          
    id: 31, 
    title: "Re-designing Space from Human Movements", 
    description: "Photography and architecture are linked together by experimenting with innovative techniques for the regeneration of enviroment. Scans in dynamic point clouds allow us to recreate new shapes from the human perception of the spaces, working on time strach creating an organic path to developing a futuristic master plan. This is how real and digital environments are built that artificial intelligence can reinterpret, Editing and photography by Gabriele Giussani", 
    tool: "MidJourney+Recap+AfterEfects", 
    date: "2023.04.17", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/PC_videoGG.mp4",
    previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/Cover-videoGG.PNG?raw=true"
  },
  {
    id: 32, 
    title: "MDW23 - Artificial Intuition: Design Inspired by AI - ImageIteration-D1", 
    description: "The art of mapping is to create a context in which others can think. In the context of Artificial Intelligence, a relationship map can be used to help generate responses to prompts or queries. By identifying the relationships between different concepts or entities, an AI model can provide more accurate and relevant responses to reach the results. This is our keywords connection relationship map for the development of the installations.", 
    tool: "MidJourney+Recap+AfterEfects", 
    date: "2023.04.17", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/ATI_MDW23_D1_IG-V.mp4",
  },
  {
    id: 33, 
    title: "MDW23 - Artificial Intuition: Design Inspired by AI - ImageIteration-I1", 
    description: "Suggestions created starting from our 'Dino Compagni' School Complex. Music by Orion", 
    tool: "MidJourney+Recap+AfterEfects", 
    date: "2023.04.17", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/ATI_MDW23_S1_IG-V.mp4",
  },
  {
    id: 34, 
    title: "MDW23 - Artificial Intuition: Design Inspired by AI - DataIteration-I2", 
    description: "Suggestions created starting from our an atrium view of our HT Campus Project, Music by Orion", 
    tool: "MidJourney+Recap+AfterEfects", 
    date: "2023.04.17", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/ATI_MDW23_S2_IG-V.mp4",
  },
  {
    id: 35, 
    title: "MDW23 - Artificial Intuition: Design Inspired by AI - ImageIteration-I3", 
    description: "Suggestions created starting from our an external elevation of our HT Campus Project, Music by Orion", 
    tool: "MidJourney+Recap+AfterEfects", 
    date: "2023.04.17", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/ATI_MDW23_S3_IG-V.mp4",
  },
  {          
    id: 36, 
    title: "Text-to-Image - Sperimental allegory", 
    description: "Sculptural, allegorical renaissance facades", 
    tool: "MidJourney-V3", 
    date: "2022.09.30", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_httpsi.mj_sculptural-min.png?raw=true",
  },
  {          
    id: 37, 
    title: "Text-to-Image - Sperimental Render", 
    description: "architecture hi tech, prospective view, realistic rendering, many people, external view", 
    tool: "MidJourney-V3", 
    date: "2022.09.27", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_httpsi_hitechexternal-min.png?raw=true",
  },
  {          
    id: 38, 
    title: "Text-to-Image - Sperimental Interior Simmetry", 
    description: "living in a forest, 2 inside a building, vegetation, CO2 absorption, vegetation for human well-being, people, high ceilings, 3, large glass and aluminum skylights, 4, very bright, light structures, fir wood finishes, wood inlays made by a sculptor, 4, symmetrical geometries, 5, perspective, innovative architecture", 
    tool: "MidJourney-V3", 
    date: "2022.09.26", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_httpsi_intsimmetry-min.png?raw=true",
  },
  {          
    id: 39, 
    title: "Text-to-Image - First Test", 
    description: "green, bamboo facade, Nordic trees, large windows, light, light structures, sustainability", 
    tool: "MidJourney-V3", 
    date: "2022.09.16", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_httpsi_bamboo.png?raw=true",
  },
  {          
    id: 40, 
    title: "Text-to-Image - Sperimental Entrance Red School", 
    description: "rendering, entrance in a school, red path in a green forest, autumn, sunrise", 
    tool: "MidJourney-V3", 
    date: "2022.10.05", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_rendering_redschool-min.png?raw=true",
  },
  {          
    id: 41, 
    title: "Text-to-Image - First Tender Won with AI!", 
    description: "wholesale under ground floor central canopy outside building profile, white opaque panel curtain wall, 3 storey building, glazed ground floor facade, visitors at entrance, exterior views, volumetric light, large windows on facade panels, central projecting roof at the ground floor entrance", 
    tool: "MidJourney-V3", 
    date: "2022.10.05", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_httpss_entrtender-min.png?raw=true",
  },
  {          
    id: 42, 
    title: "Text-to-Image - Temporary Organic Installation", 
    description: "innovative temporary installation, natural materials, bamboo wood, light reticular structure, square and triangular meshes, double-curved surfaces, adaptive shape, research, internal view, aseptic and symmetrical white environment, volumetric light, rendering", 
    tool: "MidJourney-V3", 
    date: "2023.02.02", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/atiprj_innovative_temporary_installation_natural.png?raw=true",
  },
  {          
    id: 43, 
    title: "Text-to-Image - Auditorium Elevation Evolution", 
    description: "large auditorium elevated on poles at the beach shore with a forest background, 2, dynamic panel facade, people walk along the beach, sunset, Photojournalism, sunrise, 8K, Ultra-HD, Global Illumination", 
    tool: "MidJourney-V4", 
    date: "2023.03.02", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/ATI_large_auditorium_elevated - Frame Interpolation-comp.mp4",
    previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ATI_large_auditorium_elevated_FrameInterpolation-comp.gif?raw=true"
  },
  {
    id: 44,
    title: "Generative Circularity - Lucca Biennale Cartasia 2022",
    description: "New spatial relations with the exceptional context of the Galleria del Palazzo Ducale - AI assistant for location aggregation",
    tool: "Rhino+Grasshopper+LB+Speckle",
    date: "2022.07.10",
    type: "embed",
    content: "https://app.speckle.systems/projects/ef36434858/models/a007471a0b#embed=%7B%22isEnabled%22%3Atrue%2C%22isTransparent%22%3Atrue%2C%22hideControls%22%3Atrue%2C%22hideSelectionInfo%22%3Atrue%7D",
    previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/Ph.-Gabriele-Giussani-5-16-9-2048x1152.jpg?raw=true"
  },
  {        
    id: 45, 
    title: "Painting-To-Image - Futuristic Painting Blend", 
    description: "An imaginary design of Piazzale Loreto in Milan blended with Tullio Crali - 'Città Futurista' painting",
    tool: "GoogleEarth+COMFYUI", 
    date: "2024.04.05", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ComfyUI_02133_-min.png?raw=true",
  }, 
  {        
    id: 46, 
    title: "Painting-To-Image - Futuristic Painting Blend", 
    description: "An imaginary design of Castello Sforzesco in Milan blended with Boccioni - 'Rissa in Galleria' painting",
    tool: "GoogleEarth+COMFYUI", 
    date: "2024.04.06", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ComfyUI_02106_-min.png?raw=true",
  },
  {        
    id: 47, 
    title: "Painting-To-Image - Futuristic Painting Blend", 
    description: "An imaginary design of Porta Garibarli in Milan blended with Sant'Elia - 'Città Futurista' painting",
    tool: "GoogleEarth+COMFYUI", 
    date: "2024.04.07", 
    type: "image", 
    content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/ComfyUI_02118_-min.png?raw=true",
  },  
  {    
  id: 48, 
    title: "Sketch-to-Image - Tablet Live Rendering", 
    description: "Implementation of real-time diffusive models by hand drawing on interconnected digital devices", 
    tool: "StableDiffusion+COMFYUI+ReMarkable", 
    date: "2024.05.15", 
    type: "video", 
    content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/Sketch-to-image Real Time.mp4",
  }, 
  {    
  id: 49, 
  title: "CaptureScreen-to-Image - Web 3D-Navigation Live Rendering", 
  description: "Development and testing of real-time rendering on projects in progress.", 
  tool: "StableDiffusion+COMFYUI+WebBrowser", 
  date: "2024.05.22", 
  type: "video", 
  content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/Web Model-to-image Real Time.mp4",
},
{        
  id: 50, 
  title: "PoinCloud-To-Image - LaserScans in social movements", 
  description: "Final restitution through the generative AI process of scanning human movements in real contexts, to recreate design proposals",
  tool: "MidJourney+Rhinocers+Grasshopper+Recap+Leica", 
  date: "2023.04.09", 
  type: "image", 
  content: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/pointcloudToGenAIplaza.png?raw=true",
},
{    
  id: 51, 
  title: "Streaming-to-Image - Setup VisualProgramming", 
  description: "Visualizing workflows in visual programming for live diffusion AI generation streaming from webcams", 
  tool: "StableDiffusion+ControlNet+TouchDesigner", 
  date: "2024.04.15", 
  type: "video", 
  content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/TD_Stream Diffusion workflow.mp4",
},   
{    
  id: 52, 
  title: "Streaming-to-Image - SpacePlanning", 
  description: "Live streaming creation of interior architectural floor plans from your body movements via webcam with AI generative rendering", 
  tool: "StableDiffusion+ControlNet+TouchDesigner", 
  date: "2024.04.16", 
  type: "video", 
  content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/StreamDiffusion-Test03.mp4",
},     
{    
  id: 53, 
  title: "Streaming-to-Image - BodyToBuilding", 
  description: "Live streaming creation of building shape from your body movements via webcam with AI generative rendering", 
  tool: "StableDiffusion+ControlNet+TouchDesigner", 
  date: "2024.04.17", 
  type: "video", 
  content: "https://github.com/atiprj/ai-portfolio/raw/main/media/video/StreamDiffusion-Test04.mp4",
},   
{
  id: 54,
  title: "Artificial Intuition: Design Inspired by AI - MDW23 - FuoriSalone 2023",
  description: "Images and videos create suggestions to inspire innovative design forms and approaches through the alternative use of already known tools, integrated by the exploration of AI. Fusing creativity, technology and photography, the exhibition introduces a way of exploring new possibilities for imagining objects and spaces of the future.",
  tool: "Various AI tools",
  date: "2023.04.12",
  type: "embed",
  content: "https://whimsical.com/embed/8pdfcP4dofpyDixHHFLzwB@or4CdLRbgrof8PTBen5GFwZ5QBDkgnjocuYAAxzce",
  previewImage: "https://github.com/atiprj/ai-portfolio/blob/main/media/image/covermdw23b.jpg?raw=true"
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
          <p className="mb-6 text-xl text-gray-600">atiprj - Research & Development Department</p>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore our diverse collection of generative AI content, spanning across various mediums including images, videos, audio, and interactive experiences.
            Analysis and developments focused on the field of design and architecture, mixed with data management and artistic and installation creations for the recreation of immersive and innovative environments.
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
        <p>© 2022 ATIproject - R&D Dep. All rights reserved. This site is created by AI tools</p>
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