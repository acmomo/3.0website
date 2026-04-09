import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Mail, Link as LinkIcon, ExternalLink } from 'lucide-react';
import ScrollToTopButton from '../components/ScrollToTopButton';
import ProjectShowcase from '../components/ProjectShowcase';

const PeopleProfile = () => {
  const { id } = useParams();
  const personId = parseInt(id);

  // 测试文字: 人员详细信息数据
  const peopleData = [
  {
    id: 1,
    name: "Clea von Chamier-Waite",
    position: "Associate Professor",
    website: "clea-t.de",
    bio: "Clea von Chamier-Waite, Ph.D. (aka Clea T. Waite) is an internationally exhibited intermedia artist, scholar, engineer, and experimental filmmaker investigating the material poetics that emerge at the intersection of art, science, and technology. She is a pioneer of immersive, cinematic artworks engaging embodied perception, dynamic composition, and sensual interfaces – and one inter-species collaboration with several hundred tropical spiders. Her multidisciplinary practice is modeled on the experimental laboratory, combining research, art-making, and scientific collaborations. Waite’s research encompasses the areas of science-art as media-specific practice; spatial cinema/ immersive cinema, including: 360°-cinema, fulldome, multi-channel video installation, and alternative and emerging screen technologies; embodied form and somatic interfaces; xr/vr; experimental cinema; and data poetics. Her projects thematically examine climate change, water ecology, astronomy, particle physics, feminism, and popular culture.\n\nWaite received her PhD from the University of Southern California in Media Arts + Practice, School of Cinematic Arts. She received her SMVis from the MIT Media Lab, 3D Computer Graphics and Animation Group, and her SB from the Massachusetts Institute of Technology, Department of Architecture, in Physics and Electrical Engineering.\n\nWaite’s artworks have been exhibited and awarded internationally, notably the National Academies Keck Futures Initiative, IBM Innovation Prize for Artistic Creation in Art and Technology, Ars Electronica, SIGGRAPH, The China-Hangzhou Biennale of Art and Technology, the GC3 at the Miraikan National Museum of Emerging Science and Innovation, the Lumen Prize, and the Open Sky Project for ICC Hong Kong. Waite’s fellowships include an Alexander von Humboldt Foundation Fellow, a Radcliffe Institute for Advanced Studies Fellow, CERN European Laboratory for Particle Physics artist-in-residence, ISEA AiR, Artists-in-Labs HKGZ, and fellow at the Academy of Media Arts Cologne.",
    projects: [
    {
      id: 1,
      title: "Neural Cinema",
      author: "Clea von Chamier-Waite",
      medium: "Interactive Installation",
      keyword: "neural network visualization"
    },
    {
      id: 2,
      title: "Quantum Narratives",
      author: "Alex Morgan",
      medium: "VR Experience",
      keyword: "quantum physics art"
    },
    {
      id: 3,
      title: "Bioluminescent Stories",
      author: "Sam Chen",
      medium: "Bio-Art",
      keyword: "bioluminescent organisms"
    }],

    videoUrl: "#"
  },
  {
    id: 2,
    name: "Isaac Joseph Clarke",
    position: "PhD Candidate",
    expected: "Expected summer 2026",
    email: "so.long@thanks.fish",
    website: "isaacclarke.com",
    github: "github.com/isaac-art",
    bio: "My interests are in contemporary art, the search for alien intelligences, the ways artists make their own tools, and artist-run spaces. Previously projects include http://theinstituteofjamaisvu.com/ https://blackshuck.co/ https://theoneoffsproject.com/ https://shireenscreams.bandcamp.com/ https://serfleeds.co.uk/",
    projects: [
      {
        id: 1,
        title: "Tom Petty's Quantum AI Alignment Jacket",
        author: "Isaac Joseph Clarke",
        year: "2025",
        medium: "E-textile garment (for a performance)",
        description: "An embroidered jacket with embedded BLE micro-contollers that I use to steer control vectors of language models and control audio playback. (Based on the suit Tom Petty wore at Live Aid 1985.)",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "For the Purposes of Rational Amusements",
        author: "Isaac Joseph Clarke",
        year: "2025",
        medium: "Digital kaleidoscope",
        description: "A custom made digital kaleidoscope that explores computer vision (YOLO) segmentation through fleeting images.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 3,
        title: "Vector Oscillation Studies",
        author: "Isaac Joseph Clarke",
        year: "2026",
        medium: "Light-sensitive ink on paper",
        description: "Texts generated whilst oscillating control vectors in an llm, combined with drawings, and exposed using light sensitive inks on paper",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 3,
    name: "Zhiwan Cheung",
    position: "PhD Candidate",
    bio: "Zhiwan Cheung is a practice-based artist and PhD candidate in Computational Media and Arts at Hong Kong University of Science and Technology (Guangzhou). His research investigates AI as a creative collaborator, with attention to how machine learning systems shape representation and memory. Working across video and multi-media installation, he develops AI-driven workflows that treat generative models as co-authors within the studio. His current projects explore predictive drift in image-to-video systems, the politics of training data, and digital reconstruction using Gaussian splatting and neural radiance fields. Across these methods, he studies how computational systems translate lived environments into synthetic images, and how traces of personal and cultural history persist through technical infrastructures. received his BFA from Cornell University and his MFA from Carnegie Mellon University. He has exhibited work nationally and internationally in venues such as NURTUREart Gallery in New York, Pica Pica Gallery in Berlin, and The Andy Warhol Museum in Pittsburgh. Zhiwan also received a Fulbright grant to research the Fluxus art group in Berlin, Germany. His work connects artistic practice with critical AI research, foregrounding questions on authorship, embodiment, and the cultural implications of generative systems.",
    website: "https://zhiwan.is/",
    projects: [
      {
        id: 1,
        title: "A Matter of Orientation",
        author: "Zhiwan Cheung",
        year: "2023",
        medium: "VR Installation",
        description: "\"A Matter of Orientation\" translates Edward Said’s critique of Orientalism into a new digital reality configured by large language models and gamification of storytelling. Players are immersed in an interactive VR temple that recontextualizes Oriental objects from San Francisco’s Asian Art Museum (AAM) into deep-fake videos, image-to-3D models, text-to-image stories and architecture, and generative script writing. In their algorithmic recreation, these historical artifacts amplify the cultural distance already traveled away from their geographic home.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "Dong Xuan",
        author: "Zhiwan Cheung",
        year: "2024",
        medium: "Single-channel Video",
        description: "“Dong Xuan” reinterprets the classic German fairy tale, Hansel and Gretel, blending physical, geographical, digital, and linguistic landscapes. Named after a Berlin-based Vietnamese market, inspired by Vietnam’s largest indoor market in Hanoi, the video captures performances within a culturally hybrid space. Performers of German-Asian heritage traverse an ersatz forest of synthetic plants, reflecting a melding of worlds. The production integrates artificial intelligence, reimagining transitions, cuts, and the notion of cultural artificiality. Processed through an AI neural network, the footage undergoes a transformation where images degrade and morph into each other, symbolizing a journey through digital limbo. Embracing Legacy Russell’s concept of glitching, “Dong Xuan” challenges the structural norms of technology, consequently disrupting the social and cultural norms upheld by these systems. The glitches not only mirror the characters’ disorientation as they wander into an abstract, latent space but also signify the blurring boundaries in an increasingly digital future. The film’s geopolitical scrambling of site, place, people, and time not only offers insights into navigating and interpreting histories but also demonstrates how new technologies can obscure yet illuminate the complex networks of our diverse narratives and cultures.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 3,
        title: "18th Wenyuan Street",
        author: "Zhiwan Cheung",
        year: "2024",
        medium: "Two Channel Video Installation",
        description: "“18th Wenyuan” involved scanning my grandparents’ home in Guangzhou, China, now replaced by an elementary school, and creating a virtual environment from the scans in Unreal Engine 5, a video-game engine. From certain angles, the digital scans loose perspective accuracy, resulting in abstraction. This digital space represents the memory of a place that no longer exists. Expanding on this idea, I plan to cast physical fragments from these scans, bridging the gap between the ephemeral nature of digital reconstruction and the tangible weight of sculpture.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 4,
    name: "Zoe Qi-Jing Li",
    position: "PhD Candidate",
    bio: "Zoe Li is an interdisciplinary artist specializing in new media art. She investigates the abstract roles of human beings in a technological world, exploring the position of \"self\" within a system, which might be its cultural and historical heritage, a virtual space, or the physical world. Her goal is to shift perspectives away from normality as well as to raise questions to the public. The viewer is confronted with questions regarding preconceived ideas and the superficial aesthetic we take for granted. Currently she is a PhD candidate researching creative robotics. She exhibited her project in venues such as Ming Contemporary Art Museum, Shanghai, Shenzhen Art Museum, Song Art Museum, Beijing, 2022 Beijing Biennial, Wuhan Biennale 2022, Macao International Art Biennale 2023, Latitude Gallery, NYC, and xCoAx 2021, TEI 2024, SIGGRAPH Art Gallery 2024. She was a visiting research fellow at Creative Robotics Lab, UNSW, Sydney, and CAMlab, Harvard University, USA.",
    website: "li-zoe.com",
    projects: [
      {
        id: 1,
        title: "I tell the Moon my secret and the Moon tells me yours",
        author: "Zoe Qi-Jing Li",
        year: "2024",
        medium: "robot arm, video, Moon, light-painting photography, interactive installation",
        description: "The robotic arm repeatedly depicts the waveform of the collected secrets. Only when the Moon appears within its field of view can the waveform of this sentence be successfully captured with a slow shutter speed. That is to say, whether the trace of the waveform can be revealed is determined by the natural environment — only when the Moon is bright and clear in the night sky can this secret possibly be conveyed. The project experiments on the synergic dynamics among uncontrollable natural environments, a precise data-driven robot system and humans, fostering new discourse on their relationships through synergistic visual imagery.",
        videoUrl: "https://vimeo.com/906985010?fl=pl&fe=ti"
      },
      {
        id: 2,
        title: "Comb Machine: Almost Intimate",
        author: "Zoe Qi-Jing Li",
        year: "2025",
        medium: "robot arm, combs, Vision Pro, performance, interactive installation",
        description: "Comb Machine: Almost Intimate, created in Sydney in 2025, continues the exploration of the act of hair combing. Unlike the previous iteration, which focused on power dynamics, this version places greater emphasis on the intimate meaning embedded in the gesture of hair combing. The work invites audience participation: viewers can experience having their hair combed by a robot arm. This robot arm does not act autonomously—it is remotely controlled in real time by a human operator, whose own wrist and hand movements are mirrored by the machine. This gives rise to a subtle question: is it the machine that is combing the participant’s hair, or is it the distant operator? In this piece, distance carries particular significance. The operator is located in Shanghai, China, and controls the combing machine in Sydney via a real-time connection, performing an act of \"overseas combing.\" Comb Machine 2025 asks: When people are separated by great distances, can an interaction that would typically signify closeness still retain its intimacy? When a fundamentally interpersonal gesture is mediated—translated—through a robotic interface, does its nature change?",
        videoUrl: "https://vimeo.com/1093342997?fl=pl&fe=ti"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 5,
    name: "Ary-Yue HUANG",
    position: "PhD Candidate",
    email: "hydesign97@gmail.com",
    bio: "Huang Yue is a media artist and researcher whose current work focuses on agent-based art, encompassing software agents and physical robots, with an interest in the modelling behavior, evolution, aesthetic of behavior. His earlier artistic practice centred around speculative fiction, kinetic installation, and machine learning.",
    website: "aryyuehuang.com",
    projects: [
      {
        id: 1,
        title: "Drift of the Uncharted",
        author: "Ary-Yue HUANG",
        year: "2024-2025",
        medium: "Custom Programs, Quadruped Robot, edge computer, lidar, computer, projector",
        description: "Drift of the Uncharted is a robotic performance that interweaves climate prediction, real-world landscape scanning, scene reconstruction, game engines, and virtual projection. It features a quadruped robot carrying a projection device, which projects cityscapes submerged by seawater in a dark environment, simulating a future world reshaped by rising sea levels. As the robot moves through the space, it controls the perspective of a virtual camera, guiding the audience through this imaginative environment and inviting them to collectively reflect on the potential consequences of climate change.",
        videoUrl: "https://vimeo.com/1058903108?fl=pl&fe=sh"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 6,
    name: "Azure Qianwen Zhang",
    position: "PhD Student",
    bio: "Azure Zhang is having her PhD study in HKUST-GZ. She completed her master studies at the Royal College of Art and University College London. With expanding knowledge in computer science, HCI, and material craft, she demonstrates a strong interest in interdisciplinary research. Her current research interest is examining the anthropomorphism embedded in both scientific research and art practice, challenging claims to non-human perspectives, with a thematic focus on geological contexts. She has exhibited in various international locations, including Museu Nacional Da República Brazil, Munich Jewellery Week, London Wellcome Collection, and Shanghai M50 Art Zone, K11 and The Bund, etc. Azure Zhang is a Leonardo LASER talk featured speaker, her master thesis was invited to present at FIT New York during a symposium. Additionally, in 2021, she held two solo exhibitions on her physical artwork UNFOLD YOUR BODY 1.0 and 2.0 in Shanghai. As a technical curator, Azure has been well known for her virtual online exhibition curatorial practice – Earth Core Gazing. It was invited by several big group exhibitions in China and Italy in 2022.",
    website: "azurezhang.com",
    instagram: "_azure_zhang",
    projects: [
      {
        id: 1,
        title: "Thermal Pareidolia",
        author: "Azure Qianwen Zhang",
        year: "2025",
        medium: "Lenticular prints, Video installation",
        description: "\"Thermal Pareidolia,\" a series of artworks exploring the phenomenon of pattern recognition across thermal and visual spectrums, examining how both human and machine vision systems interpret heat signatures as meaningful forms. The project is initiated from the phenomenon of face pareidolia—the profound human tendency to perceive faces in ambiguous stimuli—to question what constitutes a \"face\" when viewed by different perceptual systems. This juxtaposition research investigates how thermal imaging equalizes identity across human and non-human boundaries. Drawing from neuroscientific understanding of pareidolia and contemporary art practices that challenge anthropocentric vision, this project demonstrates that thermal signatures dissolve traditional taxonomic boundaries through shared heat patterns and create a universal language that transcends visible perceptions.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "Mycelial Memories: A Living Archive of Human Civilization",
        author: "Azure Qianwen Zhang",
        year: "",
        medium: "VR/AR installation",
        description: "Mycelial Memories is an immersive virtual reality installation that reimagines mycelial networks as living archives bridging temporal boundaries through VR immersive experience. Drawing on anthropomorphism as a methodological framework, this work translates non-human fungal perception into human perceivable language, creating an experiential meditation on memory, time, and ecological interconnection. Participants navigate a bioluminescent digital forest where diverse mushroom species preserve and present fragments of human civilization across across AI-mediated representations of human civilization. By positioning mycelial networks as alternative models of documentation and memory, the installation challenges anthropocentric narratives and proposes multi-species perspective to understanding human history within broader ecological timescales.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 7,
    name: "Xinyu Ma",
    position: "PhD Student",
    bio: "Xinyu Ma is an art practitioner and researcher based in Shenzhen and Hangzhou. He is currently pursuing a PhD in the CMA at the Hong Kong University of Science and Technology (Guangzhou). Previously, he earned his Master of Fine Arts degree from the Department of Fine Art at Goldsmiths, University of London, and his Bachelor's degree from the Sculpture Department at the China Academy of Art. His research investigates questions of materiality through the lens of the New materialism, Speculative realism, and technology.",
    projects: [
      {
        id: 1,
        title: "Becoming Space",
        author: "Xinyu Ma",
        year: "2025",
        medium: "Sculpture",
        description: "Becoming Spaces explores a series of transformations between humans and animals drawing inspiration from Ovid’s Metamorphoses. This work, comprising sculptures and video, reflects on how this transformation reshapes the relationships between humans and animals. Drawing on Deleuze and Guattari’s concept of “becoming-animals,” those myths reveal that these transformations are processes in which individuals amplify their existing powers and identities or gain new capacities through becoming animals. The 3D generative AI models used in the artwork are active participants in the process of transformation, reflecting on the complex relationship as a continuous process of becoming between human and non- human beings that are influenced by digital technologies.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 8,
    name: "Jue Wang",
    position: "PhD Student",
    bio: "Jue Wang is a research-based artist and Ph.D. student in Computational Media and Arts at the Hong Kong University of Science and Technology (Guangzhou). Central to her work are themes of synthesis, entanglement, and ontological boundaries. Her practice explores media expression across scales and in states of superposition. Through expanded cinema, hybrid installation and placemaking, she constructs immersive spatial narratives that bridge digital media and non-human temporalities. Methodologically, her work advances a framework of \"generative translation,\" transposing ancient cosmotechnics into contemporary \"bio–computational–cosmic \" paradigms. Her research contributes to the theoretical and aesthetic foundation for projects that interrogate imperceptible cosmic and ecological phenomena.",
    website: "wang-jue.com",
    projects: [
      {
        id: 1,
        title: "The Unseen Realm",
        author: "Jue Wang",
        year: "2026",
        medium: "Interactive Mapping Projection",
        description: "The Unseen Realm draws on ancient mountain cosmologies—practices that use the body to probe invisible orders. It translates a participant’s real-time gaze into forces that perturb a 64,000-particle cosmological N-body simulation and generative geological textures. Through a “generative translation” pipeline, biological signals (fixation, saccade, blink) are mapped onto macro-scale cosmic and geological dynamics. Installed in a quarry as a site-responsive mapping projection, the work frames the mountain as a cosmotechnical device, creating a cybernetic interface where gaze becomes a fluid, co-authored narrative with deep time, dark matter and dark energy.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 2,
        title: "Poetic symbiosis",
        author: "Jue Wang",
        year: "2025",
        medium: "Video Art",
        description: "Poetic Symbiosis is a dual-screen audiovisual installation rooted in Actor-Network Theory. The work centers on the slime mold as an \"actant\": an ancient, non-human entity that embodies collective intelligence. Here, the slime mold's agency generates a relational network, rendering its very existence both materially and symbolically significant. The artwork stages a dialogue between reductive machine logic and holistic organismic logic, their synthesis generating systemic entanglement and ongoing emergence. How does intelligence emerge across scales in a universe fundamentally woven together by interconnection?",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        id: 3,
        title: "FLUID: Time/Memory/Life",
        author: "Jue Wang",
        year: "2025",
        medium: "Multichannel video art",
        description: "When we speak of memory, what do we typically think of? Time, events, stories, or emotions? As the material basis for memory carriers, is there a memory carrier in fluids similar to the neural network in the brain? Or is it something else entirely? With these questions in mind, I embarked on a nearly three-month shooting and creating journey. Starting from macroscopic scenes such as coastlines, beaches, waterfalls, wetlands, and marine aquaculture bases, and then delving into microscopic perspectives under the microscope, including human tears, aquatic biological specimens, single-celled paramecia, and water fleas. I try to explore the connections between time, memory, and life. By integrating immersive imagery with the embodiment of spatial exhibition, I hope to amplify the temporal and auditory artistic experiences from a non-human perspective.",
        videoUrl: "https://pan.baidu.com/s/1-mlZtS3WRYiO8F3f8pBjqQ?pwd=nqfm"
      }
    ],
    videoUrl: "#"
  },
  {
    id: 9,
    name: "Wenjue Yang",
    position: "Research Assistant",
    bio: "Wenjue Yang is currently the research assistant of Prof. Clea von Chamier-Waite. Wenjue holds a Bachelor's degree in Philosophy from Sun Yat-sen University and a Master's degree in Digital Anthropology from UCL. Her research lies at the intersection of her philosophical training in aesthetics and phenomenology and her engagement with digital anthropology. She focuses on data–human relationships within the digital infrastructures of rural-urban environments and technical industries, while also exploring how sensory experiences shed light on immigrants' material culture and its ties to identity and politics. Using a multi-sensory approach, she examines how people experience these changes through sight, sound and everyday activities, and how they shape identity, sense of place and ties to power across different groups. She sees sensory artwork as a way of doing philosophy, and is interested in philosophizing through artistic interaction and immersive experience, inviting viewers to encounter questions of technology, culture and personal existence.",
    projects: [
    {
      id: 1,
      title: "Neural Cinema",
      author: "Clea von Chamier-Waite",
      medium: "Interactive Installation",
      keyword: "neural network visualization"
    },
    {
      id: 2,
      title: "Quantum Narratives",
      author: "Alex Morgan",
      medium: "VR Experience",
      keyword: "quantum physics art"
    },
    {
      id: 3,
      title: "Bioluminescent Stories",
      author: "Sam Chen",
      medium: "Bio-Art",
      keyword: "bioluminescent organisms"
    }],

    videoUrl: "#"
  },
  {
    id: 10,
    name: "Xindi Kang",
    position: "PhD Student",
    bio: "Xindi Kang is a media artist and PhD researcher in Computational Media and Arts at HKUST-GZ. Her work explores interactive storytelling, multimodal perception, and human–AI collaboration through computational media art. Combining artistic practice with research, she creates installations, narrative systems, and audiovisual interfaces that translate abstract signals such as voice, memory, and cultural patterns into sensory experiences.",
    projects: [
      {
        id: 1,
        title: "Viu",
        author: "Xindi Kang",
        year: "2025",
        medium: "Video, Mixed Media Installation",
        description: "Viu is an interactive projection artwork inspired by Li (Hlai) cultural heritage, developed during a residency in Hainan. The installation is composed of real footage of life in the Li villages and generated visual overlays based on sketches of Li brocade motifs. The work explores how computational media can reinterpret intangible cultural heritage through audiovisual translation, connecting traditional pattern-making, storytelling, and generative visual systems.",
        videoUrl: "https://photos.app.goo.gl/Katw3TJkRxwbS8Ai6"
      },
      {
        id: 2,
        title: "Algorithmic Textile Matrix",
        author: "Xindi Kang",
        year: "2025",
        medium: "Computational Embroidery, Microcontroller, Acrylic",
        description: "Algorithmic Textile Matrix is a computationally embroidered capacitive touch interface that combines textile fabrication, sensing, and light-based feedback. Constructed from layered organza with conductive thread patterns, the fabric acts as a programmable sensor surface connected to an Arduino-controlled LED matrix. The project explores textiles as computational material, where algorithmically generated stitch paths become both functional circuitry and visual structure. By merging embroidery, electronics, and physical computing, the work investigates how soft interfaces can translate touch into responsive illumination and interactive audiovisual behavior.",
        videoUrl: "https://photos.app.goo.gl/RXiCimtD13W93Weq9"
      },
      {
        id: 3,
        title: "Gestalt",
        author: "Xindi Kang",
        year: "2025",
        medium: "Video",
        description: "Gestalt is a contemplative time-lapse video installation that explores the imperceptible rhythms of plant life and the living behavior of light. Initiated through daily observation of a houseplant, the project captures subtle movements shaped by time, temperature, and light. Through technical improvisations and long-duration filming, the work reveals how stillness holds emergent motion. Named after the cognitive idea of a unified whole, Gestalt reflects how distinct elements such as time, space, light, intertwine to shape the complex realities we perceive.",
        videoUrl: "https://photos.app.goo.gl/NRrM3J8QNqjUgu1s7"
      }
    ],
    videoUrl: "#"
  }];


  const person = peopleData.find((p) => p.id === personId) || peopleData[0];

  // 计算上一个和下一个人员ID
  const prevId = personId > 1 ? personId - 1 : 10;
  const nextId = personId < 10 ? personId + 1 : 1;

  // 判断是否应该显示项目和视频板块 (ID为1和9的人员不显示)
  const shouldShowProjectsAndVideos = person.id !== 1 && person.id !== 9;

  return (
    <div className="pt-20 min-h-screen">
      <div className="py-16 px-4 max-w-7xl mx-auto">
        {/* 第一部分 - 肖像、姓名和简介 */}
        <div className="flex flex-col md:flex-row gap-16 mb-32">
          {/* 左列 - 肖像 */}
          <div className="md:w-2/5">
            <div className="aspect-[3/4] overflow-hidden rounded-none">
              {/* 测试文字: 人员肖像图片 */}
              <img
                src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=portrait+person+${personId}&width=600&height=800&random=portrait_person_${personId}_600_800`}
                alt={person.name}
                className="w-full h-full object-cover" />

            </div>
          </div>
          
          {/* 右列 - 姓名和简介 */}
          <div className="md:w-3/5 !mt-[200px]">
            {/* 测试文字: 人员姓名 */}
            <h1 className="text-4xl font-avenir mb-2">{person.name}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {person.position}
              {person.expected &&
              <>
                  <br />
                  {/* 测试文字: 预期毕业时间 */}
                  <span className="text-base">{person.expected}</span>
                </>}

            </p>
            
            {/* 联系信息 */}
            <div className="flex flex-wrap gap-4 mb-8">
              {person.email &&
              <a
                href={`mailto:${person.email}`}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">

                  <Mail size={18} />
                  <span>{person.email}</span>
                </a>}

              
              {person.website &&
              <a
                href={`https://${person.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">

                  <LinkIcon size={18} />
                  <span>{person.website}</span>
                  <ExternalLink size={14} />
                </a>}

              
              {person.github &&
              <a
                href={`https://${person.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">

                  <LinkIcon size={18} />
                  <span>{person.github}</span>
                  <ExternalLink size={14} />
                </a>}

              
              {person.instagram &&
              <a
                href={`https://instagram.com/${person.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">

                  <LinkIcon size={18} />
                  <span>{person.instagram}</span>
                  <ExternalLink size={14} />
                </a>}

            </div>
            
            <div className="prose max-w-none mt-12">
              {/* 测试文字: 人员简介 */}
              <p className="text-gray-700 whitespace-pre-line">
                {person.bio}
              </p>
            </div>
          </div>
        </div>
        
        {/* 项目展示板块 */}
        {person.projects && person.projects.length > 0 && shouldShowProjectsAndVideos && (
          <div className="mb-32">
            {/* 测试文字: 项目标题 */}
            <h2 className="text-3xl font-avenir mb-12 text-center">Projects</h2>
            {/* 测试文字: 项目展示组件 */}
            <ProjectShowcase projects={person.projects} />
          </div>
        )}
        
        {/* 视频展示板块 */}
        {person.videoUrl && person.videoUrl !== "#" && shouldShowProjectsAndVideos && (
          <div className="mb-32">
            {/* 测试文字: 视频展示标题 */}
            <h2 className="text-3xl font-avenir mb-12 text-center">Video Presentation</h2>
            <div className="w-full aspect-video bg-gray-200 rounded-none flex items-center justify-center">
              <iframe 
                src={person.videoUrl} 
                title="Video Presentation" 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        )}
        
        {/* 新板块 - 全宽长图 - 仅在id为1的人员页面显示 */}
        {person.id === 1 && (
          <div className="mb-32 w-full">
            <div className="w-full h-96 overflow-hidden rounded-none">
              {/* 测试文字: 艺术作品展示图片 */}
              <img
                src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=art+long+wide&width=1200&height=400&random=art_long_wide_1200_400`}
                alt="Artwork showcase"
                className="w-full h-full object-cover" />
            </div>
          </div>
        )}
        
        {/* 导航按钮 */}
        <div className="flex justify-between mt-24">
          <Link
            to={`/people/${prevId}`}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-none hover:bg-gray-50 transition-colors">

            <ChevronLeft size={20} />
            <span>Previous</span>
          </Link>
          
          <Link
            to={`/people/${nextId}`}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-none hover:bg-gray-50 transition-colors">

            <span>Next</span>
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
      {/* 测试文字: 返回顶部按钮 */}
      <ScrollToTopButton />
    </div>);

};

export default PeopleProfile;