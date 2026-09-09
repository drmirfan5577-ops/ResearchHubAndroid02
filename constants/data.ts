// Research & Analytics Hub – Curated Global Data

export interface ResourceItem {
  id: string;
  name: string;
  url: string;
  description: string;
  tags?: string[];
  type?: string;
  category?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  url: string;
  source: string;
  date: string;
  icon: string;
  color: string;
  category: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  description: string;
  url: string;
  channel: string;
  category: string;
  subCategory: string;
  duration: string;
  level: string;
  icon: string;
  color: string;
  tags: string[];
  resolution: string;
  keyPoints: string[];
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  items: ResourceItem[];
}

// ─── RESEARCH INSTITUTES ───────────────────────────────────────────────
export const researchInstitutes: ResourceItem[] = [
  { id: 'ri1', name: 'MIT – Massachusetts Institute of Technology', url: 'https://www.mit.edu', description: 'World-leading science, engineering & technology research university.', tags: ['Science', 'Engineering', 'Tech'], category: 'Engineering' },
  { id: 'ri2', name: 'Stanford Research Institute (SRI International)', url: 'https://www.sri.com', description: 'Independent R&D institute pioneering transformational technologies.', tags: ['R&D', 'Innovation'], category: 'Tech' },
  { id: 'ri3', name: 'Harvard University Research', url: 'https://research.harvard.edu', description: 'Premier multidisciplinary research spanning all academic fields.', tags: ['Multidisciplinary'], category: 'Multidisciplinary' },
  { id: 'ri4', name: 'Max Planck Society', url: 'https://www.mpg.de/en', description: 'German network of 86 research institutes in natural & social sciences.', tags: ['Germany', 'Basic Science'], category: 'Physics' },
  { id: 'ri5', name: 'CERN – European Organization for Nuclear Research', url: 'https://home.cern', description: 'Home of the Large Hadron Collider and particle physics breakthroughs.', tags: ['Physics', 'Particle'], category: 'Physics' },
  { id: 'ri6', name: 'RIKEN – Japan Research Institute', url: 'https://www.riken.jp/en', description: "Japan's largest comprehensive research institution.", tags: ['Japan', 'Science'], category: 'Multidisciplinary' },
  { id: 'ri7', name: 'Chinese Academy of Sciences', url: 'https://english.cas.cn', description: "China's highest academic institution for natural sciences.", tags: ['China', 'Sciences'], category: 'Multidisciplinary' },
  { id: 'ri8', name: 'Indian Institute of Science (IISc)', url: 'https://www.iisc.ac.in', description: "India's premier research institution in science and engineering.", tags: ['India', 'Engineering'], category: 'Engineering' },
  { id: 'ri9', name: 'ETH Zurich', url: 'https://ethz.ch/en.html', description: "Switzerland's leading STEM university and research powerhouse.", tags: ['Switzerland', 'STEM'], category: 'Engineering' },
  { id: 'ri10', name: 'Oxford University Research', url: 'https://www.ox.ac.uk/research', description: 'Research across humanities, sciences, medicine, and social sciences.', tags: ['UK', 'Humanities'], category: 'Multidisciplinary' },
  { id: 'ri11', name: 'Cambridge University Research', url: 'https://www.cam.ac.uk/research', description: "Research with global impact from one of the world's oldest universities.", tags: ['UK', 'History'], category: 'Multidisciplinary' },
  { id: 'ri12', name: 'Caltech – California Institute of Technology', url: 'https://www.caltech.edu', description: 'Science and engineering research with Nobel laureate tradition.', tags: ['USA', 'Physics'], category: 'Physics' },
  { id: 'ri13', name: 'NASA – National Aeronautics and Space Administration', url: 'https://www.nasa.gov', description: 'Space exploration, aeronautics research and earth science.', tags: ['Space', 'Aeronautics'], category: 'Tech' },
  { id: 'ri14', name: 'National Institutes of Health (NIH)', url: 'https://www.nih.gov', description: 'Primary US federal agency for biomedical and public health research.', tags: ['Biomedical', 'Health'], category: 'Medical' },
  { id: 'ri15', name: 'EMBL – European Molecular Biology Laboratory', url: 'https://www.embl.org', description: "Europe's flagship molecular biology research organization.", tags: ['Biology', 'Europe'], category: 'Biology' },
  { id: 'ri16', name: 'Brookhaven National Laboratory', url: 'https://www.bnl.gov', description: 'US DOE national lab for nuclear, particle and energy research.', tags: ['Nuclear', 'Energy'], category: 'Physics' },
  { id: 'ri17', name: 'Fraunhofer Society', url: 'https://www.fraunhofer.de/en.html', description: "Europe's largest applied research organization (76 institutes).", tags: ['Applied', 'Germany'], category: 'Engineering' },
  { id: 'ri18', name: "CSIRO – Australia's National Science Agency", url: 'https://www.csiro.au', description: "Australia's national science agency, innovating for industry.", tags: ['Australia', 'Applied'], category: 'Multidisciplinary' },
  { id: 'ri19', name: 'Los Alamos National Laboratory', url: 'https://www.lanl.gov', description: 'Multidisciplinary research institution, US DOE national lab.', tags: ['Nuclear', 'USA'], category: 'Physics' },
  { id: 'ri20', name: 'Alan Turing Institute', url: 'https://www.turing.ac.uk', description: 'UK national institute for data science and artificial intelligence.', tags: ['AI', 'Data Science'], category: 'Tech' },
];

// ─── R&D FORUMS ────────────────────────────────────────────────────────
export const rdForums: ResourceItem[] = [
  { id: 'f1', name: 'ResearchGate', url: 'https://www.researchgate.net', description: 'Global professional network for scientists to share & discover research.', tags: ['Networking', 'Papers'], category: 'Open Access' },
  { id: 'f2', name: 'Academia.edu', url: 'https://www.academia.edu', description: 'Platform for academics to share and follow research.', tags: ['Academic', 'Sharing'], category: 'Open Access' },
  { id: 'f3', name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org', description: 'Digital library for IEEE technical literature in engineering & tech.', tags: ['Engineering', 'IEEE'], category: 'Engineering' },
  { id: 'f4', name: 'SSRN – Social Science Research Network', url: 'https://www.ssrn.com', description: 'Repository for scholarly research in social sciences.', tags: ['Social Science', 'Preprints'], category: 'Multidisciplinary' },
  { id: 'f5', name: 'arXiv.org', url: 'https://arxiv.org', description: 'Open-access preprint server for physics, math, CS, biology & more.', tags: ['Preprints', 'Open Access'], category: 'Open Access' },
  { id: 'f6', name: 'bioRxiv', url: 'https://www.biorxiv.org', description: 'Preprint server for life sciences research.', tags: ['Biology', 'Preprints'], category: 'Biology' },
  { id: 'f7', name: 'medRxiv', url: 'https://www.medrxiv.org', description: 'Preprint server for health science research.', tags: ['Medical', 'Preprints'], category: 'Medical' },
  { id: 'f8', name: 'Zenodo', url: 'https://zenodo.org', description: 'CERN open research data repository for all research outputs.', tags: ['Data', 'Open Access'], category: 'Open Access' },
  { id: 'f9', name: 'OSF – Open Science Framework', url: 'https://osf.io', description: 'Open platform supporting open science practices and collaboration.', tags: ['Open Science', 'Collaboration'], category: 'Open Access' },
  { id: 'f10', name: 'ORCID', url: 'https://orcid.org', description: 'Unique researcher identifier system connecting scholars globally.', tags: ['Identity', 'Researchers'], category: 'Multidisciplinary' },
  { id: 'f11', name: 'Loop – Frontiers Research Network', url: 'https://loop.frontiersin.org', description: 'Open science platform connecting authors, reviewers and editors.', tags: ['Frontiers', 'Collaboration'], category: 'Open Access' },
];

// ─── SCIENTIFIC JOURNALS ───────────────────────────────────────────────
export const scientificJournals: ResourceItem[] = [
  { id: 'j1', name: 'Nature', url: 'https://www.nature.com', description: 'International multidisciplinary science journal, founded 1869.', tags: ['Multidisciplinary', 'Top-Tier'], category: 'Multidisciplinary' },
  { id: 'j2', name: 'Science (AAAS)', url: 'https://www.science.org', description: 'Peer-reviewed academic journal of the American Association for Advancement of Science.', tags: ['AAAS', 'Top-Tier'], category: 'Multidisciplinary' },
  { id: 'j3', name: 'Cell', url: 'https://www.cell.com', description: 'Leading journal in molecular and cell biology research.', tags: ['Cell Biology', 'Molecular'], category: 'Biology' },
  { id: 'j4', name: 'The Lancet', url: 'https://www.thelancet.com', description: "One of the world's oldest and most prestigious medical journals.", tags: ['Medical', 'Clinical'], category: 'Medical' },
  { id: 'j5', name: 'NEJM – New England Journal of Medicine', url: 'https://www.nejm.org', description: "World's most widely read and influential general medical journal.", tags: ['Medical', 'Clinical'], category: 'Medical' },
  { id: 'j6', name: 'PLOS ONE', url: 'https://journals.plos.org/plosone', description: 'Peer-reviewed open access journal covering all science disciplines.', tags: ['Open Access', 'Multidisciplinary'], category: 'Open Access' },
  { id: 'j7', name: 'PNAS – Proceedings of the National Academy of Sciences', url: 'https://www.pnas.org', description: 'Multidisciplinary scientific journal of the National Academy of Sciences.', tags: ['NAS', 'Multidisciplinary'], category: 'Multidisciplinary' },
  { id: 'j8', name: 'BMJ – British Medical Journal', url: 'https://www.bmj.com', description: 'Peer-reviewed medical journal from the British Medical Association.', tags: ['Medical', 'UK'], category: 'Medical' },
  { id: 'j9', name: 'JAMA – Journal of the American Medical Association', url: 'https://jamanetwork.com', description: 'Peer-reviewed medical journal published by AMA.', tags: ['Medical', 'Clinical'], category: 'Medical' },
  { id: 'j10', name: 'Frontiers in Science', url: 'https://www.frontiersin.org', description: 'Open access journals across all areas of science and humanities.', tags: ['Open Access', 'Multidisciplinary'], category: 'Open Access' },
  { id: 'j11', name: 'Physical Review Journals (APS)', url: 'https://journals.aps.org', description: 'American Physical Society peer-reviewed physics journals.', tags: ['Physics', 'APS'], category: 'Physics' },
  { id: 'j12', name: 'Annual Reviews', url: 'https://www.annualreviews.org', description: 'Authoritative reviews synthesizing the most significant primary research.', tags: ['Review', 'Synthesis'], category: 'Multidisciplinary' },
  { id: 'j13', name: 'Scientific Reports (Nature)', url: 'https://www.nature.com/srep', description: 'Open access multidisciplinary journal published by Nature.', tags: ['Open Access', 'Nature'], category: 'Open Access' },
  { id: 'j14', name: 'eLife Sciences', url: 'https://elifesciences.org', description: 'Non-profit publishing for outstanding advances in life science & biomedicine.', tags: ['Life Science', 'Non-profit'], category: 'Biology' },
];

// ─── INTERNATIONAL SEMINARS / CONFERENCES ──────────────────────────────
export const seminarsVideos: ResourceItem[] = [
  { id: 'sv1', name: 'TED Talks – Science', url: 'https://www.ted.com/topics/science', description: 'Renowned science lectures from world-leading researchers and thinkers.', tags: ['Lectures', 'Science', 'Video'], category: 'Multidisciplinary' },
  { id: 'sv2', name: 'CERN Academic Training Lectures', url: 'https://www.youtube.com/@CERN/playlists', description: 'Free physics and CERN research seminar recordings on YouTube.', tags: ['Physics', 'Video'], category: 'Physics' },
  { id: 'sv3', name: 'NIH VideoCasting & Podcasting', url: 'https://videocast.nih.gov', description: 'Live and archived NIH research seminars and conferences.', tags: ['Biomedical', 'Video'], category: 'Medical' },
  { id: 'sv4', name: 'MIT OpenCourseWare Video Lectures', url: 'https://ocw.mit.edu', description: 'Free MIT course materials and video lectures for all disciplines.', tags: ['Courses', 'Video'], category: 'Engineering' },
  { id: 'sv5', name: 'World Science Forum', url: 'https://worldscienceforum.org', description: 'International biennial event on science and society – archived sessions.', tags: ['Global', 'Policy'], category: 'Multidisciplinary' },
  { id: 'sv6', name: 'Perimeter Institute – PIRSA', url: 'https://pirsa.org', description: 'Perimeter Institute Recorded Seminar Archive – theoretical physics talks.', tags: ['Physics', 'Archive'], category: 'Physics' },
  { id: 'sv7', name: 'Coursera Research Courses', url: 'https://www.coursera.org', description: 'MOOCs from top universities covering research methods and sciences.', tags: ['Courses', 'MOOC'], category: 'Multidisciplinary' },
  { id: 'sv8', name: 'edX Research Programs', url: 'https://www.edx.org', description: 'Online courses from MIT, Harvard, and 160+ partner institutions.', tags: ['Courses', 'MOOC'], category: 'Engineering' },
  { id: 'sv9', name: 'Springer Nature Webinars', url: 'https://www.springernature.com/gp/researchers/webinars', description: 'Free researcher webinars on publishing, methodology and science topics.', tags: ['Webinar', 'Publishing'], category: 'Multidisciplinary' },
  { id: 'sv10', name: 'Nature Research Webinars', url: 'https://www.nature.com/webcast', description: 'Live and on-demand webcasts featuring researchers from Nature journals.', tags: ['Nature', 'Webcast'], category: 'Multidisciplinary' },
  { id: 'sv11', name: 'WHO Health Emergencies Webinars', url: 'https://www.who.int/emergencies/events', description: 'WHO webinars on global health emergencies and public health.', tags: ['WHO', 'Public Health'], category: 'Medical' },
];

// ─── R&D COMMUNITIES ───────────────────────────────────────────────────
export const rdCommunities: ResourceItem[] = [
  { id: 'c1', name: 'Reddit r/science', url: 'https://www.reddit.com/r/science', description: 'Global science discussion community with peer-reviewed study links.', tags: ['Community', 'Discussion'], category: 'Open Access' },
  { id: 'c2', name: 'Stack Exchange – Science Sites', url: 'https://stackexchange.com/sites#science', description: 'Q&A communities for physics, biology, chemistry, math and more.', tags: ['Q&A', 'Technical'], category: 'Multidisciplinary' },
  { id: 'c3', name: 'ResearchGate Community', url: 'https://www.researchgate.net', description: 'Connect with 20M+ researchers worldwide, share findings and ask questions.', tags: ['Networking', 'Global'], category: 'Open Access' },
  { id: 'c4', name: 'Mendeley Community', url: 'https://www.mendeley.com', description: 'Reference manager and academic social network for researchers.', tags: ['Reference', 'Social'], category: 'Multidisciplinary' },
  { id: 'c5', name: 'Zotero Community Forums', url: 'https://forums.zotero.org', description: 'Open-source reference management tool community forums.', tags: ['Reference', 'Open Source'], category: 'Open Access' },
  { id: 'c6', name: 'Scientists Without Borders', url: 'https://scientistswithoutborders.org', description: 'Connecting scientists with development challenges in the Global South.', tags: ['Global South', 'Development'], category: 'Multidisciplinary' },
  { id: 'c7', name: 'International Science Council', url: 'https://council.science', description: 'Global non-governmental body representing scientific communities.', tags: ['Policy', 'Global'], category: 'Multidisciplinary' },
  { id: 'c8', name: 'Global Young Academy', url: 'https://globalyoungacademy.net', description: 'Outstanding young scientists from developed and developing nations.', tags: ['Young Scientists', 'Global'], category: 'Multidisciplinary' },
  { id: 'c9', name: 'The Royal Society', url: 'https://royalsociety.org', description: "UK's national academy of sciences, promoting excellence in science.", tags: ['UK', 'Academy'], category: 'Multidisciplinary' },
  { id: 'c10', name: 'American Association for the Advancement of Science', url: 'https://www.aaas.org', description: "AAAS is the world's largest multidisciplinary scientific society.", tags: ['AAAS', 'USA'], category: 'Multidisciplinary' },
];

// ─── PUBLIC DOMAINS / OPEN ACCESS ─────────────────────────────────────
export const openAccessPlatforms: ResourceItem[] = [
  { id: 'oa1', name: 'PubMed Central (PMC)', url: 'https://www.ncbi.nlm.nih.gov/pmc', description: 'Free full-text archive of biomedical and life sciences literature.', tags: ['Biomedical', 'Free'], category: 'Medical' },
  { id: 'oa2', name: 'Directory of Open Access Journals (DOAJ)', url: 'https://doaj.org', description: 'Community-curated online directory of open access journals.', tags: ['Directory', 'Open Access'], category: 'Open Access' },
  { id: 'oa3', name: 'CORE – Open Access Research', url: 'https://core.ac.uk', description: "World's largest collection of open access research papers.", tags: ['Repository', 'Global'], category: 'Open Access' },
  { id: 'oa4', name: 'Semantic Scholar', url: 'https://www.semanticscholar.org', description: 'AI-powered research tool with 200M+ academic papers indexed.', tags: ['AI', 'Search'], category: 'Tech' },
  { id: 'oa5', name: 'Google Scholar', url: 'https://scholar.google.com', description: 'Free web search engine for scholarly literature across all disciplines.', tags: ['Search', 'Google'], category: 'Open Access' },
  { id: 'oa6', name: 'OpenDOAR', url: 'https://v2.sherpa.ac.uk/opendoar', description: 'Quality-assured directory of open access repositories worldwide.', tags: ['Repositories', 'Directory'], category: 'Open Access' },
  { id: 'oa7', name: 'BASE – Bielefeld Academic Search Engine', url: 'https://www.base-search.net', description: "One of the world's most voluminous search engines for academic web resources.", tags: ['Search', 'Academic'], category: 'Open Access' },
  { id: 'oa8', name: 'JSTOR Open Access', url: 'https://www.jstor.org', description: 'Digital library of academic journals, books and primary sources.', tags: ['Library', 'Digital'], category: 'Open Access' },
  { id: 'oa9', name: 'Unpaywall', url: 'https://unpaywall.org', description: 'Browser tool that finds free legal versions of research papers.', tags: ['Tool', 'Free Access'], category: 'Open Access' },
  { id: 'oa10', name: 'Europe PMC', url: 'https://europepmc.org', description: 'Free access to 42M+ abstracts and 7M+ full-text research articles.', tags: ['Europe', 'Biomedical'], category: 'Medical' },
  { id: 'oa11', name: 'ERIC – Education Resources Information Center', url: 'https://eric.ed.gov', description: 'US federal database of education research and information.', tags: ['Education', 'Federal'], category: 'Multidisciplinary' },
];

// ─── COPYRIGHT-FREE CONTENT PROVIDERS ─────────────────────────────────
export const copyrightFreeProviders: ResourceItem[] = [
  { id: 'cf1', name: 'Wikimedia Commons', url: 'https://commons.wikimedia.org', description: 'Free media repository – images, videos, audio for educational use.', tags: ['Images', 'Video', 'Audio'], category: 'Open Access' },
  { id: 'cf2', name: 'Creative Commons Search', url: 'https://search.creativecommons.org', description: 'Search engine for openly licensed and public domain works.', tags: ['License', 'Search'], category: 'Open Access' },
  { id: 'cf3', name: 'Pixabay – Science Images', url: 'https://pixabay.com/images/search/science', description: 'Free science images, videos and illustrations for any project.', tags: ['Images', 'Free'], category: 'Open Access' },
  { id: 'cf4', name: 'Unsplash – Research & Science', url: 'https://unsplash.com/s/photos/science', description: 'Beautiful free science photography under Unsplash license.', tags: ['Photography', 'Free'], category: 'Open Access' },
  { id: 'cf5', name: 'PhysioNet – Open Health Data', url: 'https://physionet.org', description: 'Repository of freely available medical research data and software.', tags: ['Medical Data', 'Research'], category: 'Medical' },
  { id: 'cf6', name: 'UCI Machine Learning Repository', url: 'https://archive.ics.uci.edu', description: 'Collection of databases for empirical analysis of ML algorithms.', tags: ['ML', 'Datasets'], category: 'Tech' },
  { id: 'cf7', name: 'Pexels – Science Videos', url: 'https://www.pexels.com/search/videos/science', description: 'Free stock science and medical videos for presentations.', tags: ['Video', 'Stock'], category: 'Open Access' },
  { id: 'cf8', name: 'Khan Academy', url: 'https://www.khanacademy.org', description: 'Free educational content for science, math and humanities globally.', tags: ['Education', 'Free'], category: 'Open Access' },
  { id: 'cf9', name: 'OpenStax', url: 'https://openstax.org', description: 'Peer-reviewed, openly licensed free textbooks for college courses.', tags: ['Textbooks', 'Free'], category: 'Open Access' },
  { id: 'cf10', name: 'Public Library of Science (PLOS)', url: 'https://plos.org', description: 'Nonprofit open access publisher for scientific and medical research.', tags: ['Open Access', 'Publishing'], category: 'Open Access' },
  { id: 'cf11', name: 'NASA Image & Video Library', url: 'https://images.nasa.gov', description: "NASA's official image and video library – public domain.", tags: ['NASA', 'Space', 'Free'], category: 'Tech' },
  { id: 'cf12', name: 'Biodiversity Heritage Library', url: 'https://www.biodiversitylibrary.org', description: 'Digitized natural history literature – open access biodiversity content.', tags: ['Biology', 'Heritage'], category: 'Biology' },
];

// ─── SCIENTIFIC LIBRARIES ──────────────────────────────────────────────
export const scientificLibraries: ResourceItem[] = [
  { id: 'sl1', name: 'Library of Congress – Science', url: 'https://www.loc.gov/collections/science', description: 'US national library with vast science collections and rare historical texts.', tags: ['Library', 'History'], category: 'Multidisciplinary' },
  { id: 'sl2', name: 'British Library – Science', url: 'https://www.bl.uk/science', description: "UK national library with one of the world's largest science collections.", tags: ['Library', 'UK'], category: 'Multidisciplinary' },
  { id: 'sl3', name: 'National Library of Medicine (NLM)', url: 'https://www.nlm.nih.gov', description: "World's largest biomedical library, part of NIH, USA.", tags: ['Medical', 'Biomedical'], category: 'Medical' },
  { id: 'sl4', name: 'Springer eBooks & Journals', url: 'https://link.springer.com', description: 'Over 10 million scientific documents from books, journals, and protocols.', tags: ['eBooks', 'Journals'], category: 'Multidisciplinary' },
  { id: 'sl5', name: 'Elsevier ScienceDirect', url: 'https://www.sciencedirect.com', description: 'Leading platform for peer-reviewed literature from Elsevier.', tags: ['Journals', 'Elsevier'], category: 'Multidisciplinary' },
  { id: 'sl6', name: 'Wiley Online Library', url: 'https://onlinelibrary.wiley.com', description: 'Comprehensive collection of journals, books, and reference works.', tags: ['Journals', 'Books'], category: 'Multidisciplinary' },
  { id: 'sl7', name: 'Project MUSE – Humanities & Social Sciences', url: 'https://muse.jhu.edu', description: 'Digital platform for humanities and social sciences scholarship.', tags: ['Humanities', 'Social Sciences'], category: 'Multidisciplinary' },
  { id: 'sl8', name: 'Digital Public Library of America', url: 'https://dp.la', description: 'Free access to millions of items from US libraries, archives and museums.', tags: ['Free', 'USA'], category: 'Open Access' },
  { id: 'sl9', name: 'Internet Archive – Science', url: 'https://archive.org/details/science', description: 'Non-profit digital library offering millions of free books, movies and papers.', tags: ['Free', 'Archive'], category: 'Open Access' },
  { id: 'sl10', name: 'World Digital Library (WDL)', url: 'https://www.wdl.org/en', description: 'International digital library with cultural and scientific heritage items.', tags: ['Global', 'Heritage'], category: 'Multidisciplinary' },
  { id: 'sl11', name: 'Project Gutenberg', url: 'https://www.gutenberg.org', description: 'Volunteer-driven library of over 60,000 free eBooks including science classics.', tags: ['Free', 'eBooks'], category: 'Open Access' },
  { id: 'sl12', name: 'HathiTrust Digital Library', url: 'https://www.hathitrust.org', description: 'Collaborative digital library with 17+ million volumes from research libraries.', tags: ['Research', 'Academic'], category: 'Multidisciplinary' },
  { id: 'sl13', name: 'NCBI – National Center for Biotechnology Information', url: 'https://www.ncbi.nlm.nih.gov', description: 'Biomedical and genomic information database and search platform.', tags: ['Genomics', 'Biomedical'], category: 'Medical' },
  { id: 'sl14', name: 'Europeana – Digital Heritage', url: 'https://www.europeana.eu', description: "Europe's digital library for cultural heritage including science history.", tags: ['Heritage', 'Europe'], category: 'Multidisciplinary' },
  { id: 'sl15', name: 'Biodiversity Information Facility (GBIF)', url: 'https://www.gbif.org', description: 'Open access biological occurrence data from institutions worldwide.', tags: ['Biology', 'Data'], category: 'Biology' },
  { id: 'sl16', name: 'OpenLibrary', url: 'https://openlibrary.org', description: "Internet Archive's open library of over 3 million freely available books.", tags: ['Books', 'Free'], category: 'Open Access' },
  { id: 'sl17', name: 'Directory of Open Access Books (DOAB)', url: 'https://www.doabooks.org', description: 'Discovery service for peer-reviewed open access books.', tags: ['Books', 'Open Access'], category: 'Open Access' },
  { id: 'sl18', name: 'Max Planck Digital Library', url: 'https://www.mpdl.mpg.de/en', description: 'Digital library services for Max Planck Society researchers.', tags: ['Germany', 'Research'], category: 'Physics' },
  { id: 'sl19', name: 'CERN Document Server (CDS)', url: 'https://cds.cern.ch', description: "CERN's institutional repository for research papers and multimedia.", tags: ['Physics', 'CERN'], category: 'Physics' },
  { id: 'sl20', name: 'NASA Technical Reports Server', url: 'https://ntrs.nasa.gov', description: 'Free access to NASA technical documents, reports and publications.', tags: ['NASA', 'Engineering'], category: 'Engineering' },
  { id: 'sl21', name: 'Cochrane Library – Medical Reviews', url: 'https://www.cochranelibrary.com', description: 'Systematic reviews of healthcare interventions and medical evidence.', tags: ['Medical', 'Reviews'], category: 'Medical' },
  { id: 'sl22', name: 'PubChem – Chemical Library', url: 'https://pubchem.ncbi.nlm.nih.gov', description: 'Open chemistry database with 100M+ chemical substances.', tags: ['Chemistry', 'Database'], category: 'Biology' },
  { id: 'sl23', name: 'Protein Data Bank (PDB)', url: 'https://www.rcsb.org', description: 'Archive of 3D structural data for large biological molecules.', tags: ['Biology', 'Structures'], category: 'Biology' },
  { id: 'sl24', name: 'arXiv e-prints Library', url: 'https://arxiv.org', description: 'Open access archive with 2M+ scientific preprints.', tags: ['Preprints', 'Open Access'], category: 'Open Access' },
  { id: 'sl25', name: 'PhilPapers – Philosophy Research', url: 'https://philpapers.org', description: 'Comprehensive index and bibliography of philosophy research.', tags: ['Philosophy', 'Humanities'], category: 'Multidisciplinary' },
];

// ─── MEDICAL LIBRARIES ─────────────────────────────────────────────────
export const medicalLibraries: ResourceItem[] = [
  { id: 'ml1', name: 'PubMed – NCBI Biomedical Search', url: 'https://pubmed.ncbi.nlm.nih.gov', description: 'Free search engine accessing MEDLINE biomedical literature from NCBI.', tags: ['Biomedical', 'Search'], category: 'Medical' },
  { id: 'ml2', name: 'ClinicalTrials.gov', url: 'https://clinicaltrials.gov', description: 'Registry and results database of clinical studies globally.', tags: ['Clinical', 'Trials'], category: 'Medical' },
  { id: 'ml3', name: 'WHO Global Health Library', url: 'https://www.who.int/docs/default-source/documents/publications/ghl', description: "WHO's library of global health publications and databases.", tags: ['WHO', 'Global'], category: 'Medical' },
  { id: 'ml4', name: 'UpToDate Medical Reference', url: 'https://www.uptodate.com', description: 'Clinical decision support resource with evidence-based recommendations.', tags: ['Clinical', 'Evidence'], category: 'Medical' },
  { id: 'ml5', name: 'MedlinePlus – Health Information', url: 'https://medlineplus.gov', description: "NIH's authoritative health information library for patients and clinicians.", tags: ['NIH', 'Patient'], category: 'Medical' },
  { id: 'ml6', name: 'HINARI – Research for Health', url: 'https://www.who.int/hinari/en', description: 'WHO program providing free access to biomedical and health journals in developing countries.', tags: ['WHO', 'Developing'], category: 'Medical' },
  { id: 'ml7', name: 'Global Index Medicus (GIM)', url: 'https://www.globalindexmedicus.net', description: 'WHO database for health literature from developing regions.', tags: ['WHO', 'Developing'], category: 'Medical' },
  { id: 'ml8', name: 'Orphanet – Rare Diseases Library', url: 'https://www.orpha.net', description: 'Reference portal for rare diseases and orphan drugs information.', tags: ['Rare Diseases', 'Reference'], category: 'Medical' },
  { id: 'ml9', name: 'OMIM – Genetic Disease Catalog', url: 'https://www.omim.org', description: 'Online catalogue of human genes and genetic disorders.', tags: ['Genetics', 'Database'], category: 'Medical' },
  { id: 'ml10', name: 'DynaMed – Clinical Reference', url: 'https://www.dynamed.com', description: 'Point-of-care clinical reference with systematic evidence reviews.', tags: ['Clinical', 'Evidence'], category: 'Medical' },
  { id: 'ml11', name: 'Nursing Reference Center Plus', url: 'https://www.ebsco.com/products/research-databases/nursing-reference-center-plus', description: 'Evidence-based nursing practice information and procedures.', tags: ['Nursing', 'Evidence'], category: 'Medical' },
  { id: 'ml12', name: 'Emergency Medicine Journal', url: 'https://emj.bmj.com', description: 'International peer-reviewed journal for emergency medicine research.', tags: ['Emergency', 'BMJ'], category: 'Medical' },
];

// ─── MEDICAL INSTITUTES ─────────────────────────────────────────────────
export const medicalInstitutes: ResourceItem[] = [
  { id: 'mi1', name: 'World Health Organization (WHO)', url: 'https://www.who.int', description: 'UN agency coordinating global public health initiatives and guidelines.', tags: ['UN', 'Global Health'], category: 'Medical' },
  { id: 'mi2', name: 'UNICEF – Child Health', url: 'https://www.unicef.org/health', description: "UN children's agency health programs and research.", tags: ['Children', 'UN'], category: 'Medical' },
  { id: 'mi3', name: 'CDC – Centers for Disease Control', url: 'https://www.cdc.gov', description: 'US federal public health agency protecting health and safety.', tags: ['USA', 'Public Health'], category: 'Medical' },
  { id: 'mi4', name: 'ECDC – European Centre for Disease Prevention', url: 'https://www.ecdc.europa.eu', description: 'EU agency for disease prevention and control.', tags: ['Europe', 'Disease'], category: 'Medical' },
  { id: 'mi5', name: 'Johns Hopkins Medicine', url: 'https://www.hopkinsmedicine.org', description: 'Top-ranked US medical institution for research and clinical care.', tags: ['USA', 'Clinical'], category: 'Medical' },
  { id: 'mi6', name: 'Mayo Clinic Research', url: 'https://www.mayoclinic.org/research', description: 'Not-for-profit academic medical center and research institute.', tags: ['Clinical', 'USA'], category: 'Medical' },
  { id: 'mi7', name: 'Cleveland Clinic Research', url: 'https://my.clevelandclinic.org/research', description: 'Academic medical center known for cardiac and medical research.', tags: ['Cardiac', 'USA'], category: 'Medical' },
  { id: 'mi8', name: 'Wellcome Trust', url: 'https://wellcome.org', description: 'UK charitable foundation funding biomedical and public health research.', tags: ['UK', 'Funding'], category: 'Medical' },
  { id: 'mi9', name: 'IHME – Institute for Health Metrics', url: 'https://www.healthdata.org', description: 'Independent global health research center at University of Washington.', tags: ['Data', 'Global'], category: 'Medical' },
  { id: 'mi10', name: 'MSF – Médecins Sans Frontières Research', url: 'https://www.msf.org', description: 'International humanitarian medical organisation – field research.', tags: ['Humanitarian', 'Field'], category: 'Medical' },
  { id: 'mi11', name: 'GAVI – The Vaccine Alliance', url: 'https://www.gavi.org', description: 'Public-private global health partnership focused on vaccines.', tags: ['Vaccines', 'Global'], category: 'Medical' },
  { id: 'mi12', name: 'Global Fund to Fight AIDS, TB and Malaria', url: 'https://www.theglobalfund.org', description: 'International financing institution to combat three major diseases.', tags: ['AIDS', 'TB', 'Malaria'], category: 'Medical' },
  { id: 'mi13', name: 'UNAIDS', url: 'https://www.unaids.org', description: 'Joint UN programme on HIV/AIDS.', tags: ['HIV', 'AIDS', 'UN'], category: 'Medical' },
  { id: 'mi14', name: 'International Red Cross – Health', url: 'https://www.icrc.org', description: 'Humanitarian organization providing medical assistance globally.', tags: ['Humanitarian', 'Global'], category: 'Medical' },
];

// ─── PUBLIC HEALTH ORGANIZATIONS ───────────────────────────────────────
export const publicHealthOrgs: ResourceItem[] = [
  { id: 'ph1', name: 'WHO – Disease Outbreaks News', url: 'https://www.who.int/emergencies/disease-outbreak-news', description: 'Real-time WHO updates on global disease outbreaks.', tags: ['Outbreaks', 'Real-time'], category: 'Medical' },
  { id: 'ph2', name: 'Pan American Health Organization (PAHO)', url: 'https://www.paho.org', description: 'WHO regional office for the Americas.', tags: ['Americas', 'Regional'], category: 'Medical' },
  { id: 'ph3', name: 'Africa CDC', url: 'https://africacdc.org', description: 'African Union public health agency for disease surveillance.', tags: ['Africa', 'Surveillance'], category: 'Medical' },
  { id: 'ph4', name: 'SEARO – WHO South-East Asia', url: 'https://www.who.int/southeastasia', description: 'WHO Regional Office for South-East Asia health programs.', tags: ['South-East Asia', 'Regional'], category: 'Medical' },
  { id: 'ph5', name: 'Public Health England (UKHSA)', url: 'https://www.gov.uk/government/organisations/uk-health-security-agency', description: 'UK health security and public health agency.', tags: ['UK', 'Security'], category: 'Medical' },
  { id: 'ph6', name: 'NIAID – National Institute of Allergy & Infectious Diseases', url: 'https://www.niaid.nih.gov', description: 'NIH institute for immunology, infectious and allergic diseases.', tags: ['Immunology', 'Infectious'], category: 'Medical' },
  { id: 'ph7', name: 'Global Health Observatory (WHO)', url: 'https://www.who.int/data/gho', description: 'WHO data repository and health statistics portal.', tags: ['Statistics', 'Data'], category: 'Medical' },
  { id: 'ph8', name: 'Our World in Data – Health', url: 'https://ourworldindata.org/health-meta', description: 'Research and data visualizations for global health trends.', tags: ['Data Viz', 'Global'], category: 'Medical' },
];

// ─── NEWS FEED ──────────────────────────────────────────────────────────
export const newsFeed: NewsItem[] = [
  { id: 'n1', title: 'WHO Declares New Global Health Initiative on Antimicrobial Resistance', url: 'https://www.who.int/news', source: 'WHO', date: 'Jun 2026', icon: 'health-and-safety', color: '#FF6B9D', category: 'Medical' },
  { id: 'n2', title: 'CERN Scientists Detect Rare Particle Interaction at Large Hadron Collider', url: 'https://home.cern/news', source: 'CERN', date: 'Jun 2026', icon: 'science', color: '#00C9A7', category: 'Physics' },
  { id: 'n3', title: 'NIH Launches $500M Initiative for AI in Biomedical Research', url: 'https://www.nih.gov/news', source: 'NIH', date: 'Jun 2026', icon: 'biotech', color: '#7C6BFF', category: 'Medical' },
  { id: 'n4', title: 'Nature Journal: Breakthrough in mRNA Vaccine Platform Technology', url: 'https://www.nature.com/news', source: 'Nature', date: 'May 2026', icon: 'medication', color: '#4FC3F7', category: 'Medical' },
  { id: 'n5', title: 'arXiv Reaches 2 Million Preprints Milestone in Open Science', url: 'https://arxiv.org', source: 'arXiv', date: 'May 2026', icon: 'article', color: '#FFB800', category: 'Open Access' },
  { id: 'n6', title: "NASA Confirms Water Ice Deposits on Moon's South Pole", url: 'https://www.nasa.gov/news', source: 'NASA', date: 'May 2026', icon: 'explore', color: '#FF8C42', category: 'Tech' },
  { id: 'n7', title: 'UNICEF Report: Child Mortality Rates Hit Historic Low Globally', url: 'https://www.unicef.org/press-releases', source: 'UNICEF', date: 'Apr 2026', icon: 'child-care', color: '#00D4AA', category: 'Medical' },
  { id: 'n8', title: 'Lancet Commission: Urgent Call for Climate-Health Research Funding', url: 'https://www.thelancet.com/news', source: 'Lancet', date: 'Apr 2026', icon: 'eco', color: '#FF6B9D', category: 'Medical' },
  { id: 'n9', title: 'IEEE Announces New Open Access Policy for All Publications by 2027', url: 'https://ieeexplore.ieee.org/Xplore/home.jsp', source: 'IEEE', date: 'Apr 2026', icon: 'electrical-services', color: '#4FC3F7', category: 'Engineering' },
  { id: 'n10', title: 'MIT Researchers Develop New Carbon Capture Material Breakthrough', url: 'https://www.mit.edu/news', source: 'MIT', date: 'Mar 2026', icon: 'eco', color: '#00C9A7', category: 'Engineering' },
];

// ─── MEDICAL KNOWLEDGE VIDEOS ───────────────────────────────────────────
export const medicalVideoCategories: { id: string; title: string; icon: string; videos: ResourceItem[] }[] = [
  {
    id: 'mv_morphology', title: 'Living Systems Morphology', icon: 'biotech',
    videos: [
      { id: 'mv1', name: 'Cell Structure & Organelles – Khan Academy', url: 'https://www.khanacademy.org/science/ap-biology/cell-structure-and-function', description: 'Comprehensive video series on cell structure, organelles, and functions.', tags: ['Cell', 'Structure'] },
      { id: 'mv2', name: 'Histology Tutorial – University of Michigan', url: 'https://www.youtube.com/watch?v=SaGVxSjMkdE', description: 'Introduction to histological techniques and tissue classification.', tags: ['Histology', 'Tissue'] },
      { id: 'mv3', name: 'Cell Biology Lectures – iBiology', url: 'https://www.ibiology.org/cell-biology', description: 'High-quality cell biology seminars from leading research scientists.', tags: ['Cell Biology', 'Video'] },
      { id: 'mv_m4', name: 'Microanatomy – Virtual Microscopy (UMich)', url: 'https://histology.medicine.umich.edu', description: 'Virtual microscopy slides for learning microanatomy of all body tissues.', tags: ['Microscopy', 'Virtual'] },
    ]
  },
  {
    id: 'mv_anatomy', title: 'Human Anatomy', icon: 'accessibility',
    videos: [
      { id: 'mv4', name: 'Visible Body – 3D Human Anatomy', url: 'https://www.visiblebody.com/anatomy-and-physiology-videos', description: 'Interactive 3D anatomy videos covering all organ systems.', tags: ['3D', 'Anatomy'] },
      { id: 'mv5', name: 'Anatomy & Physiology – Khan Academy', url: 'https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology', description: 'Detailed anatomy and physiology video series for medical students.', tags: ['Physiology', 'Khan'] },
      { id: 'mv6', name: 'Armando Hasudungan – Anatomy Illustrations', url: 'https://www.youtube.com/@ArmandoHasudungan', description: 'Hand-drawn medical illustrations and anatomy explanation videos.', tags: ['Illustrations', 'Education'] },
      { id: 'mv7', name: "Acland's Atlas of Human Anatomy", url: 'https://www.aclandanatomy.com', description: 'Award-winning video atlas of human anatomy using real specimens.', tags: ['Atlas', 'Specimens'] },
      { id: 'mv_a5', name: 'AnatomyZone – 3D Atlas (YouTube)', url: 'https://www.youtube.com/@AnatomyZone', description: 'Free 3D anatomy tutorials using professional anatomical software.', tags: ['3D', 'YouTube'] },
      { id: 'mv_a6', name: 'TeachMeAnatomy – Complete Series', url: 'https://teachmeanatomy.info', description: 'Comprehensive anatomy resource with detailed illustrations and videos.', tags: ['Illustrated', 'Education'] },
    ]
  },
  {
    id: 'mv_physiology', title: 'Human Physiology', icon: 'favorite',
    videos: [
      { id: 'mv8', name: 'Cardiovascular Physiology – Osmosis', url: 'https://www.osmosis.org/learn/Cardiovascular_system', description: 'Comprehensive cardiovascular system physiology explainers and animations.', tags: ['Cardiovascular', 'Animation'] },
      { id: 'mv9', name: 'Neuroscience Lectures – MIT OpenCourseWare', url: 'https://ocw.mit.edu/courses/9-01-neuroscience-and-behavior-fall-2003', description: 'MIT free neuroscience course covering brain structure and behavior.', tags: ['Neuroscience', 'MIT'] },
      { id: 'mv10', name: 'Endocrine System – Ninja Nerd Science', url: 'https://www.youtube.com/@NinjaNerdScience', description: 'Medical school-level endocrine system and physiology lectures.', tags: ['Endocrine', 'Lectures'] },
      { id: 'mv11', name: 'Renal Physiology – Lecturio', url: 'https://www.lecturio.com/concepts/renal-physiology', description: 'Comprehensive kidney physiology video course for medical students.', tags: ['Renal', 'Kidney'] },
      { id: 'mv_p5', name: 'Respiratory Physiology – Zero to Finals', url: 'https://www.youtube.com/@zerotofinals', description: 'Respiratory system physiology and clinical medicine videos.', tags: ['Respiratory', 'Clinical'] },
      { id: 'mv_p6', name: 'GI Tract Physiology – Sketchy Medical', url: 'https://www.sketchy.com', description: 'Visual mnemonic-based physiology learning for gastrointestinal system.', tags: ['GI', 'Visual'] },
    ]
  },
  {
    id: 'mv_pathology', title: 'Pathology & Disease', icon: 'coronavirus',
    videos: [
      { id: 'mv12', name: 'Osmosis – Pathology Library', url: 'https://www.osmosis.org', description: 'Visual pathology explanations covering all major diseases and conditions.', tags: ['Pathology', 'Visual'] },
      { id: 'mv13', name: 'Pathoma – Fundamentals of Pathology', url: 'https://www.pathoma.com', description: 'Comprehensive pathology video course by Dr. Husain Sattar.', tags: ['Fundamentals', 'Course'] },
      { id: 'mv14', name: 'WHO – Disease Outbreak Videos', url: 'https://www.youtube.com/@WHO', description: 'WHO official YouTube channel with outbreak and disease videos.', tags: ['WHO', 'Outbreaks'] },
      { id: 'mv15', name: 'NEJM Video in Clinical Medicine', url: 'https://www.nejm.org/video', description: 'Clinical video articles from the New England Journal of Medicine.', tags: ['Clinical', 'NEJM'] },
      { id: 'mv_d5', name: 'Lecturio – General Pathology Series', url: 'https://www.lecturio.com/medical-courses/pathology.course', description: 'Complete general pathology video course for medical students.', tags: ['General', 'Course'] },
    ]
  },
  {
    id: 'mv_pharmacology', title: 'Medicinal Chronology & Pharmacology', icon: 'medication',
    videos: [
      { id: 'mv16', name: 'Pharmacology – Khan Academy MCAT', url: 'https://www.khanacademy.org/test-prep/mcat/chemical-processes/pharmacology', description: 'MCAT pharmacology and medicinal chemistry video series.', tags: ['Pharmacology', 'MCAT'] },
      { id: 'mv17', name: 'Drug Mechanisms – Osmosis Pharmacology', url: 'https://www.osmosis.org/learn/Pharmacology', description: 'Drug mechanisms, pharmacokinetics and pharmacodynamics video series.', tags: ['Drugs', 'Mechanisms'] },
      { id: 'mv18', name: 'History of Medicine – SciShow', url: 'https://www.youtube.com/playlist?list=PLSmBBGFloKXAlkiQpF6FBJTU7AhIGGWMt', description: 'SciShow playlist on the history of medical discoveries and treatments.', tags: ['History', 'SciShow'] },
      { id: 'mv_ph4', name: 'Pharmacokinetics – Sketchy Pharm', url: 'https://www.sketchy.com/subjects/pharmacology', description: 'Visual pharmacology and drug mechanism learning platform.', tags: ['Pharmacokinetics', 'Visual'] },
    ]
  },
  {
    id: 'mv_microbiology', title: 'Microbiology & Immunology', icon: 'bug-report',
    videos: [
      { id: 'mv_mb1', name: 'Microbiology – Ninja Nerd', url: 'https://www.youtube.com/playlist?list=PLTF9h-T1TcJh4jVFbQP4MDgnAnRkzLJsW', description: 'Complete microbiology series covering bacteria, viruses and fungi.', tags: ['Bacteria', 'Viruses'] },
      { id: 'mv_mb2', name: 'Immunology – Osmosis', url: 'https://www.osmosis.org/learn/Immune_system', description: 'Immune system, immunology and vaccines explainer video series.', tags: ['Immune', 'Vaccines'] },
      { id: 'mv_mb3', name: 'Virology Lectures – Columbia University', url: 'https://www.virology.ws/course', description: "Free online virology course from Columbia University's Prof. Racaniello.", tags: ['Virology', 'University'] },
      { id: 'mv_mb4', name: 'CDC Infectious Disease Videos', url: 'https://www.cdc.gov/media/index.html', description: 'CDC video library on infectious diseases, prevention and control.', tags: ['CDC', 'Prevention'] },
    ]
  },
];

// ─── SCIENTIFIC VIDEO COLLECTIONS ──────────────────────────────────────
export const scientificVideoCollections: { id: string; title: string; icon: string; videos: ResourceItem[] }[] = [
  {
    id: 'svc_physics', title: 'Physics & Astrophysics', icon: 'science',
    videos: [
      { id: 'svc_ph1', name: 'PBS Space Time – Astrophysics Channel', url: 'https://www.youtube.com/@pbsspacetime', description: 'Advanced astrophysics and cosmology explained by real scientists.', tags: ['Space', 'Physics'] },
      { id: 'svc_ph2', name: 'MIT OpenCourseWare – Physics Lectures', url: 'https://ocw.mit.edu/courses/physics', description: 'Complete MIT physics course videos – classical, quantum and more.', tags: ['MIT', 'Quantum'] },
      { id: 'svc_ph3', name: 'Leonard Susskind Lectures (Stanford)', url: 'https://www.youtube.com/playlist?list=PL6i60qoDQhQGaGbbg-4aSwXJvxOqO6o5e', description: 'Stanford theoretical physics lectures by Leonard Susskind.', tags: ['Theoretical', 'Stanford'] },
      { id: 'svc_ph4', name: 'CERN Physics Talks – YouTube', url: 'https://www.youtube.com/@CERN', description: 'CERN official channel with particle physics talks and seminars.', tags: ['CERN', 'Particle'] },
    ]
  },
  {
    id: 'svc_chemistry', title: 'Chemistry & Materials Science', icon: 'science',
    videos: [
      { id: 'svc_ch1', name: 'Periodic Videos – University of Nottingham', url: 'https://www.youtube.com/@periodicvideos', description: 'Videos about every element and amazing chemistry demonstrations.', tags: ['Elements', 'Demonstrations'] },
      { id: 'svc_ch2', name: 'MIT Chemistry Lectures', url: 'https://ocw.mit.edu/courses/chemistry', description: 'MIT free chemistry video lectures from undergraduate to advanced level.', tags: ['MIT', 'Lectures'] },
      { id: 'svc_ch3', name: 'Organic Chemistry – Khan Academy', url: 'https://www.khanacademy.org/science/organic-chemistry', description: 'Comprehensive organic chemistry video series for students.', tags: ['Organic', 'Khan'] },
    ]
  },
  {
    id: 'svc_biology', title: 'Biology & Life Sciences', icon: 'biotech',
    videos: [
      { id: 'svc_bl1', name: 'iBiology – Research Talks', url: 'https://www.ibiology.org', description: 'Talks by world-leading biologists on all areas of life sciences.', tags: ['Research', 'Scientists'] },
      { id: 'svc_bl2', name: 'HHMI BioInteractive', url: 'https://www.biointeractive.org', description: 'Howard Hughes Medical Institute free biology education videos.', tags: ['Education', 'HHMI'] },
      { id: 'svc_bl3', name: "Nature Video – Life Sciences", url: 'https://www.youtube.com/@NatureVideo', description: "Nature journal's video reports on groundbreaking biology research.", tags: ['Nature', 'Research'] },
      { id: 'svc_bl4', name: 'Crash Course Biology', url: 'https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF', description: 'Fast-paced engaging biology video series for all levels.', tags: ['Crash Course', 'Education'] },
    ]
  },
  {
    id: 'svc_ai', title: 'AI, Data Science & Technology', icon: 'memory',
    videos: [
      { id: 'svc_ai1', name: 'MIT Deep Learning Lectures', url: 'https://deeplearning.mit.edu', description: 'MIT free deep learning and AI video lectures by Lex Fridman.', tags: ['Deep Learning', 'MIT'] },
      { id: 'svc_ai2', name: 'Stanford CS229 – Machine Learning', url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU', description: "Stanford's famous machine learning course by Andrew Ng.", tags: ['ML', 'Stanford'] },
      { id: 'svc_ai3', name: '3Blue1Brown – Math & ML Visualized', url: 'https://www.youtube.com/@3blue1brown', description: 'Beautiful visual explanations of math, neural networks, and ML concepts.', tags: ['Visual', 'Math'] },
    ]
  },
];

// ─── 50+ VIDEO SHOWCASE COLLECTION ────────────────────────────────────
export const videoShowcaseCollection: VideoShowcaseItem[] = [
  // ── HUMAN ANATOMY & 3D VISUALIZATION ──
  {
    id: 'vs_001', title: 'Complete Human Heart – 3D Anatomy', description: 'Detailed 3D walkthrough of cardiac chambers, valves, coronary vessels and conduction system with real specimen correlation.',
    url: 'https://www.youtube.com/@AnatomyZone', channel: 'AnatomyZone', category: 'Medical', subCategory: 'Anatomy',
    duration: '28 min', level: 'Intermediate', icon: 'favorite', color: '#FF6B9D', resolution: 'Ultra HD 4K',
    tags: ['Heart', 'Cardiac', '3D', 'Anatomy'],
    keyPoints: ['4-chamber heart architecture', 'Coronary artery mapping', 'Valve mechanics', 'Conduction pathway']
  },
  {
    id: 'vs_002', title: 'Human Brain – Complete Neural Atlas', description: 'Comprehensive 3D tour of all brain regions, cranial nerves, ventricular system and functional cortical maps.',
    url: 'https://www.youtube.com/@AnatomyZone', channel: 'AnatomyZone', category: 'Medical', subCategory: 'Neuroscience',
    duration: '35 min', level: 'Advanced', icon: 'psychology', color: '#7C6BFF', resolution: 'Ultra HD 4K',
    tags: ['Brain', 'Neurology', '3D', 'Neural Atlas'],
    keyPoints: ['Cerebral cortex lobes', 'Limbic system', 'Basal ganglia', 'Cranial nerves I-XII']
  },
  {
    id: 'vs_003', title: 'Musculoskeletal System – Full Body', description: 'Complete skeletal and muscular system visualization with origin/insertion points, innervation, and functional movements.',
    url: 'https://www.visiblebody.com/anatomy-and-physiology-videos', channel: 'Visible Body', category: 'Medical', subCategory: 'Anatomy',
    duration: '42 min', level: 'Intermediate', icon: 'accessibility', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['Muscles', 'Skeleton', 'Movement', 'Kinesiology'],
    keyPoints: ['206 bones overview', 'Major muscle groups', 'Joint mechanics', 'Nerve supply maps']
  },
  {
    id: 'vs_004', title: 'Respiratory System – Gas Exchange at Alveolar Level', description: 'Microscopic to macroscopic view of oxygen-carbon dioxide exchange, surfactant function, and ventilation mechanics.',
    url: 'https://www.osmosis.org/learn/Cardiovascular_system', channel: 'Osmosis', category: 'Medical', subCategory: 'Physiology',
    duration: '22 min', level: 'Intermediate', icon: 'air', color: '#4FC3F7', resolution: 'Full HD',
    tags: ['Lungs', 'Gas Exchange', 'Alveoli', 'Breathing'],
    keyPoints: ['Alveolar structure', 'Surfactant role', 'V/Q ratio', 'Breathing mechanics']
  },
  {
    id: 'vs_005', title: 'Renal System – Nephron Function Animated', description: 'Animated journey through nephron filtration, reabsorption, secretion, and concentration mechanisms in ultra detail.',
    url: 'https://www.lecturio.com/concepts/renal-physiology', channel: 'Lecturio', category: 'Medical', subCategory: 'Physiology',
    duration: '31 min', level: 'Advanced', icon: 'water-drop', color: '#00D4AA', resolution: 'Ultra HD 4K',
    tags: ['Kidney', 'Nephron', 'Filtration', 'Homeostasis'],
    keyPoints: ['Glomerular filtration', 'Tubular reabsorption', 'Countercurrent mechanism', 'Acid-base balance']
  },
  {
    id: 'vs_006', title: 'Endocrine Glands – Hormonal Cascade Visualization', description: 'Visual map of all endocrine glands, hormone synthesis pathways, feedback loops, and target organ effects.',
    url: 'https://www.youtube.com/@NinjaNerdScience', channel: 'Ninja Nerd Science', category: 'Medical', subCategory: 'Physiology',
    duration: '48 min', level: 'Advanced', icon: 'biotech', color: '#FFB800', resolution: 'Full HD',
    tags: ['Hormones', 'Endocrine', 'Feedback', 'Glands'],
    keyPoints: ['Pituitary axis', 'Thyroid function', 'Adrenal hormones', 'Pancreatic regulation']
  },
  {
    id: 'vs_007', title: 'Lymphatic System & Immune Response 3D', description: 'Complete immune system walkthrough including innate and adaptive immunity, lymphocyte development, and antibody production.',
    url: 'https://www.osmosis.org/learn/Immune_system', channel: 'Osmosis', category: 'Medical', subCategory: 'Immunology',
    duration: '39 min', level: 'Intermediate', icon: 'shield', color: '#FF8C42', resolution: 'Ultra HD 4K',
    tags: ['Immune', 'Lymphocytes', 'Antibodies', 'Defense'],
    keyPoints: ['Innate vs adaptive immunity', 'T-cell activation', 'B-cell antibody production', 'Complement cascade']
  },
  {
    id: 'vs_008', title: 'Digestive System – Complete GI Tract Journey', description: 'Animated journey from oral cavity to anorectal junction covering absorption, secretion, and gut microbiome.',
    url: 'https://www.khanacademy.org/science/health-and-medicine', channel: 'Khan Academy', category: 'Medical', subCategory: 'Anatomy',
    duration: '33 min', level: 'Beginner', icon: 'restaurant', color: '#FF6B9D', resolution: 'Full HD',
    tags: ['Digestion', 'GI Tract', 'Absorption', 'Microbiome'],
    keyPoints: ['Enzyme secretion', 'Nutrient absorption sites', 'Hepatic portal system', 'Gut-brain axis']
  },
  // ── CELL BIOLOGY & MOLECULAR MEDICINE ──
  {
    id: 'vs_009', title: 'DNA Replication – Molecular Machinery in 3D', description: 'Stunning 3D animation of DNA helicase unwinding, polymerase action, and lagging strand Okazaki fragment synthesis.',
    url: 'https://www.ibiology.org/cell-biology', channel: 'iBiology', category: 'Medical', subCategory: 'Molecular Biology',
    duration: '19 min', level: 'Advanced', icon: 'science', color: '#7C6BFF', resolution: 'Ultra HD 4K',
    tags: ['DNA', 'Replication', 'Molecular', '3D Animation'],
    keyPoints: ['Helicase mechanism', 'Primase function', 'Leading vs lagging strand', 'Proofreading enzymes']
  },
  {
    id: 'vs_010', title: 'Protein Synthesis – From Gene to Protein', description: 'Complete transcription and translation process with ribosome 3D structure, tRNA charging, and polypeptide folding.',
    url: 'https://www.ibiology.org/cell-biology', channel: 'iBiology', category: 'Medical', subCategory: 'Molecular Biology',
    duration: '24 min', level: 'Advanced', icon: 'biotech', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['Protein', 'Ribosomes', 'mRNA', 'Translation'],
    keyPoints: ['mRNA transcription', 'Splicing and processing', 'Ribosome assembly', 'Protein folding chaperones']
  },
  {
    id: 'vs_011', title: 'Cell Division – Mitosis & Meiosis Compared', description: 'Side-by-side ultra HD animation of mitotic and meiotic division phases with chromosomal crossover events.',
    url: 'https://www.khanacademy.org/science/ap-biology', channel: 'Khan Academy', category: 'Medical', subCategory: 'Cell Biology',
    duration: '27 min', level: 'Intermediate', icon: 'blur-circular', color: '#FF8C42', resolution: 'Ultra HD 4K',
    tags: ['Mitosis', 'Meiosis', 'Chromosomes', 'Cell Division'],
    keyPoints: ['Prophase to telophase', 'Spindle assembly checkpoint', 'Crossing-over events', 'Genetic variation']
  },
  {
    id: 'vs_012', title: 'Cancer Cell Biology – Hallmarks of Cancer', description: 'Molecular mechanisms of oncogenesis, tumor suppressor loss, angiogenesis, metastasis cascade, and immunoevasion.',
    url: 'https://www.osmosis.org', channel: 'Osmosis', category: 'Medical', subCategory: 'Oncology',
    duration: '44 min', level: 'Advanced', icon: 'coronavirus', color: '#FF5A6A', resolution: 'Ultra HD 4K',
    tags: ['Cancer', 'Oncology', 'Metastasis', 'Molecular'],
    keyPoints: ['Proto-oncogene activation', 'Tumor suppressor loss', 'Angiogenesis (VEGF)', 'Immune checkpoint evasion']
  },
  // ── NEUROSCIENCE & BRAIN MECHANISMS ──
  {
    id: 'vs_013', title: 'Action Potential – Neuronal Firing in Ultra HD', description: 'Molecular-level visualization of sodium-potassium pump, membrane depolarization, and synaptic transmission.',
    url: 'https://ocw.mit.edu/courses/9-01-neuroscience-and-behavior-fall-2003', channel: 'MIT OCW', category: 'Medical', subCategory: 'Neuroscience',
    duration: '18 min', level: 'Intermediate', icon: 'electric-bolt', color: '#FFB800', resolution: 'Ultra HD 4K',
    tags: ['Neurons', 'Action Potential', 'Synapse', 'Electrophysiology'],
    keyPoints: ['Na+/K+ ATPase', 'Depolarization threshold', 'Refractory periods', 'Synaptic vesicle release']
  },
  {
    id: 'vs_014', title: 'Alzheimer Disease – Amyloid Pathology 3D', description: 'Detailed visualization of amyloid plaque formation, tau neurofibrillary tangles, and progressive neurodegeneration.',
    url: 'https://www.osmosis.org', channel: 'Osmosis', category: 'Medical', subCategory: 'Neurology',
    duration: '29 min', level: 'Advanced', icon: 'psychology', color: '#7C6BFF', resolution: 'Full HD',
    tags: ['Alzheimer', 'Amyloid', 'Neurodegeneration', 'Tau'],
    keyPoints: ['APP cleavage pathway', 'Beta-amyloid aggregation', 'Tau hyperphosphorylation', 'Neuroinflammation']
  },
  {
    id: 'vs_015', title: 'Stroke Pathophysiology – Ischemic Cascade', description: 'Real-time animated ischemic penumbra, glutamate excitotoxicity, free radical damage, and reperfusion injury.',
    url: 'https://www.lecturio.com', channel: 'Lecturio', category: 'Medical', subCategory: 'Neurology',
    duration: '26 min', level: 'Advanced', icon: 'warning', color: '#FF5A6A', resolution: 'Full HD',
    tags: ['Stroke', 'Ischemia', 'Brain', 'Emergency'],
    keyPoints: ['Core vs penumbra', 'Excitotoxicity cascade', 'tPA thrombolysis window', 'Neuroprotection targets']
  },
  // ── CARDIOVASCULAR MEDICINE ──
  {
    id: 'vs_016', title: 'Cardiac Cycle – Pressure-Volume Loops Animated', description: 'Complete hemodynamic analysis of cardiac cycle phases with Frank-Starling law and preload/afterload concepts.',
    url: 'https://www.osmosis.org/learn/Cardiovascular_system', channel: 'Osmosis', category: 'Medical', subCategory: 'Cardiology',
    duration: '32 min', level: 'Advanced', icon: 'monitor-heart', color: '#FF6B9D', resolution: 'Ultra HD 4K',
    tags: ['Cardiac Cycle', 'Hemodynamics', 'Frank-Starling', 'Preload'],
    keyPoints: ['Systole/diastole phases', 'PV loop analysis', 'Cardiac output determinants', 'Starling curve']
  },
  {
    id: 'vs_017', title: 'Atherosclerosis – Plaque Formation 3D', description: 'Step-by-step visualization of foam cell formation, fibrous cap development, plaque rupture, and thrombosis.',
    url: 'https://www.youtube.com/@NinjaNerdScience', channel: 'Ninja Nerd Science', category: 'Medical', subCategory: 'Cardiology',
    duration: '36 min', level: 'Advanced', icon: 'favorite-border', color: '#FF5A6A', resolution: 'Ultra HD 4K',
    tags: ['Atherosclerosis', 'Plaque', 'Cholesterol', 'Thrombosis'],
    keyPoints: ['LDL oxidation', 'Macrophage foam cells', 'Fibrous cap stability', 'ACS pathogenesis']
  },
  {
    id: 'vs_018', title: 'ECG Interpretation – From Signal to Diagnosis', description: 'Complete electrocardiogram generation, waveform analysis, and systematic approach to arrhythmia recognition.',
    url: 'https://www.youtube.com/@zerotofinals', channel: 'Zero to Finals', category: 'Medical', subCategory: 'Cardiology',
    duration: '41 min', level: 'Intermediate', icon: 'show-chart', color: '#00C9A7', resolution: 'Full HD',
    tags: ['ECG', 'Arrhythmia', 'Diagnosis', 'Cardiology'],
    keyPoints: ['P-QRS-T wave origin', 'Axis calculation', 'Bundle branch blocks', 'MI localization']
  },
  // ── INFECTIOUS DISEASES & MICROBIOLOGY ──
  {
    id: 'vs_019', title: 'Viral Replication – HIV Life Cycle 3D', description: 'Molecular 3D animation of HIV entry, reverse transcription, integration, and viral assembly with drug targets.',
    url: 'https://www.osmosis.org/learn/Immune_system', channel: 'Osmosis', category: 'Medical', subCategory: 'Virology',
    duration: '21 min', level: 'Advanced', icon: 'bug-report', color: '#FF8C42', resolution: 'Ultra HD 4K',
    tags: ['HIV', 'Virology', 'Retrovirus', 'Antiretroviral'],
    keyPoints: ['CD4 receptor binding', 'Reverse transcriptase', 'Integrase mechanism', 'HAART targets']
  },
  {
    id: 'vs_020', title: 'Bacterial Antibiotic Resistance Mechanisms', description: 'Molecular visualization of beta-lactamase action, efflux pumps, target modification, and horizontal gene transfer.',
    url: 'https://www.cdc.gov/media/index.html', channel: 'CDC', category: 'Medical', subCategory: 'Microbiology',
    duration: '23 min', level: 'Advanced', icon: 'security', color: '#FF5A6A', resolution: 'Full HD',
    tags: ['Antibiotics', 'Resistance', 'Bacteria', 'AMR'],
    keyPoints: ['Beta-lactamase hydrolysis', 'Efflux pump overexpression', 'Porin channel loss', 'Plasmid transfer']
  },
  {
    id: 'vs_021', title: 'SARS-CoV-2 – Spike Protein & Infection Mechanism', description: 'Atomic-resolution 3D structure of coronavirus spike protein binding to ACE2 and cell entry by membrane fusion.',
    url: 'https://www.youtube.com/@WHO', channel: 'WHO', category: 'Medical', subCategory: 'Virology',
    duration: '17 min', level: 'Intermediate', icon: 'coronavirus', color: '#7C6BFF', resolution: 'Ultra HD 4K',
    tags: ['COVID-19', 'Spike Protein', 'ACE2', 'Coronavirus'],
    keyPoints: ['ACE2 receptor binding', 'Membrane fusion', 'RNA replication complex', 'mRNA vaccine mechanism']
  },
  // ── GENETICS & GENOMICS ──
  {
    id: 'vs_022', title: 'CRISPR-Cas9 – Gene Editing in 3D', description: 'Precise molecular animation of guide RNA design, Cas9 cleavage, HDR repair, and therapeutic applications.',
    url: 'https://www.ibiology.org', channel: 'iBiology', category: 'Medical', subCategory: 'Genetics',
    duration: '25 min', level: 'Advanced', icon: 'content-cut', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['CRISPR', 'Gene Editing', 'Cas9', 'Genomics'],
    keyPoints: ['gRNA target design', 'DSB cleavage mechanism', 'NHEJ vs HDR pathways', 'Clinical applications']
  },
  {
    id: 'vs_023', title: 'Human Genome – Chromosome Architecture', description: 'Journey from nucleosome beads to chromosome territories, with epigenetic regulation and gene expression control.',
    url: 'https://www.ncbi.nlm.nih.gov', channel: 'NCBI', category: 'Medical', subCategory: 'Genomics',
    duration: '30 min', level: 'Advanced', icon: 'timeline', color: '#4FC3F7', resolution: 'Ultra HD 4K',
    tags: ['Genome', 'Chromatin', 'Epigenetics', 'Chromosomes'],
    keyPoints: ['Nucleosome packaging', 'Histone modifications', 'TAD domains', 'Enhancer-promoter loops']
  },
  // ── PHARMACOLOGY ──
  {
    id: 'vs_024', title: 'Drug-Receptor Interactions – Pharmacodynamics 3D', description: 'Molecular docking animations showing agonist/antagonist binding, conformational changes, and signal transduction.',
    url: 'https://www.sketchy.com/subjects/pharmacology', channel: 'Sketchy', category: 'Medical', subCategory: 'Pharmacology',
    duration: '28 min', level: 'Advanced', icon: 'medication', color: '#FFB800', resolution: 'Ultra HD 4K',
    tags: ['Pharmacology', 'Receptors', 'Drug Binding', 'Signaling'],
    keyPoints: ['Lock-and-key binding', 'GPCR signaling', 'Ion channel drugs', 'Dose-response curves']
  },
  {
    id: 'vs_025', title: 'mRNA Vaccine Technology – Mechanism & Immunity', description: 'Complete visualization of lipid nanoparticle delivery, spike protein expression, and humoral immune response.',
    url: 'https://www.osmosis.org/learn/Pharmacology', channel: 'Osmosis', category: 'Medical', subCategory: 'Pharmacology',
    duration: '20 min', level: 'Intermediate', icon: 'vaccines', color: '#00D4AA', resolution: 'Ultra HD 4K',
    tags: ['mRNA', 'Vaccine', 'Immunity', 'Nanoparticle'],
    keyPoints: ['LNP structure', 'Endosomal escape', 'Spike protein display', 'Memory cell formation']
  },
  // ── PHYSICS & ASTROPHYSICS ──
  {
    id: 'vs_026', title: 'Black Hole Physics – Event Horizon & Hawking Radiation', description: 'Spacetime curvature visualization, gravitational lensing, accretion disk dynamics, and quantum evaporation.',
    url: 'https://www.youtube.com/@pbsspacetime', channel: 'PBS Space Time', category: 'Science', subCategory: 'Astrophysics',
    duration: '38 min', level: 'Advanced', icon: 'brightness-1', color: '#7C6BFF', resolution: 'Ultra HD 4K',
    tags: ['Black Holes', 'Spacetime', 'Hawking Radiation', 'Relativity'],
    keyPoints: ['Schwarzschild radius', 'Gravitational time dilation', 'Penrose diagrams', 'Information paradox']
  },
  {
    id: 'vs_027', title: 'Quantum Mechanics – Wave-Particle Duality Visualized', description: 'Double-slit experiment, wavefunction collapse, quantum superposition, and entanglement demonstrated visually.',
    url: 'https://www.youtube.com/@3blue1brown', channel: '3Blue1Brown', category: 'Science', subCategory: 'Quantum Physics',
    duration: '45 min', level: 'Advanced', icon: 'waves', color: '#4FC3F7', resolution: 'Ultra HD 4K',
    tags: ['Quantum', 'Wave Function', 'Superposition', 'Entanglement'],
    keyPoints: ['Double-slit experiment', 'Born probability rule', 'Schrodinger equation', 'Bell inequality']
  },
  {
    id: 'vs_028', title: 'Standard Model of Particle Physics', description: 'Visual tour of quarks, leptons, bosons, fundamental forces, and the Higgs mechanism with CERN data.',
    url: 'https://www.youtube.com/@CERN', channel: 'CERN', category: 'Science', subCategory: 'Particle Physics',
    duration: '52 min', level: 'Advanced', icon: 'science', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['Quarks', 'Bosons', 'Higgs', 'Standard Model'],
    keyPoints: ['Quark color charge', 'Electroweak unification', 'Higgs field mechanism', 'Matter-antimatter asymmetry']
  },
  {
    id: 'vs_029', title: 'General Relativity – Spacetime Curvature 4D', description: 'Einstein field equations visualized as spacetime fabric deformation, geodesics, and gravitational wave propagation.',
    url: 'https://ocw.mit.edu/courses/physics', channel: 'MIT OCW', category: 'Science', subCategory: 'Physics',
    duration: '60 min', level: 'Advanced', icon: '360', color: '#FFB800', resolution: 'Ultra HD 4K',
    tags: ['Einstein', 'Relativity', 'Spacetime', 'Gravitational Waves'],
    keyPoints: ['Metric tensor', 'Geodesic equations', 'LIGO detection', 'Perihelion precession']
  },
  {
    id: 'vs_030', title: 'Big Bang Cosmology – 13.8 Billion Year Timeline', description: 'Cosmic history from Planck epoch through nucleosynthesis, recombination, dark age, galaxy formation to present.',
    url: 'https://www.youtube.com/@pbsspacetime', channel: 'PBS Space Time', category: 'Science', subCategory: 'Cosmology',
    duration: '55 min', level: 'Intermediate', icon: 'explore', color: '#FF8C42', resolution: 'Ultra HD 4K',
    tags: ['Cosmology', 'Big Bang', 'Universe', 'Timeline'],
    keyPoints: ['Planck epoch 10^-43s', 'Nucleosynthesis 3 min', 'CMB at 380,000 years', 'Dark energy acceleration']
  },
  // ── CHEMISTRY & MOLECULAR SCIENCE ──
  {
    id: 'vs_031', title: 'Enzyme Catalysis – Active Site 3D Mechanism', description: 'Molecular docking of substrate to enzyme active site, transition state stabilization, and product release animated.',
    url: 'https://www.ibiology.org', channel: 'iBiology', category: 'Science', subCategory: 'Biochemistry',
    duration: '22 min', level: 'Advanced', icon: 'science', color: '#00D4AA', resolution: 'Ultra HD 4K',
    tags: ['Enzymes', 'Catalysis', 'Biochemistry', 'Kinetics'],
    keyPoints: ['Induced-fit model', 'Transition state theory', 'Michaelis-Menten kinetics', 'Inhibitor types']
  },
  {
    id: 'vs_032', title: 'Chemical Bonding – Molecular Orbital Theory', description: 'Quantum mechanical treatment of sigma/pi bonds, hybrid orbitals, delocalization, and molecular geometry.',
    url: 'https://www.youtube.com/@periodicvideos', channel: 'Periodic Videos', category: 'Science', subCategory: 'Chemistry',
    duration: '34 min', level: 'Advanced', icon: 'bubble-chart', color: '#7C6BFF', resolution: 'Full HD',
    tags: ['Molecular Orbitals', 'Bonding', 'Hybridization', 'Quantum'],
    keyPoints: ['LCAO method', 'sp3/sp2/sp hybridization', 'Resonance structures', 'VSEPR geometry']
  },
  {
    id: 'vs_033', title: 'ATP Synthesis – Mitochondrial Electron Transport Chain', description: 'Ultra-detail animation of Complex I-IV, proton gradient, ATP synthase rotation, and chemiosmotic coupling.',
    url: 'https://www.ibiology.org/cell-biology', channel: 'iBiology', category: 'Science', subCategory: 'Biochemistry',
    duration: '26 min', level: 'Advanced', icon: 'bolt', color: '#FFB800', resolution: 'Ultra HD 4K',
    tags: ['ATP', 'Mitochondria', 'Metabolism', 'Energy'],
    keyPoints: ['NADH oxidation', 'Proton pump complexes', 'ATP synthase F0F1', 'Chemiosmosis P:O ratio']
  },
  // ── BIOLOGY & EVOLUTION ──
  {
    id: 'vs_034', title: 'Photosynthesis – Light & Dark Reactions 3D', description: 'Thylakoid membrane photosystems, Z-scheme electron flow, Calvin cycle carbon fixation in atomic detail.',
    url: 'https://www.hhmi.org/biointeractive', channel: 'HHMI BioInteractive', category: 'Science', subCategory: 'Biology',
    duration: '29 min', level: 'Intermediate', icon: 'local-florist', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['Photosynthesis', 'Chloroplast', 'Calvin Cycle', 'Light Reactions'],
    keyPoints: ['PSII water splitting', 'Z-scheme electron flow', 'ATP/NADPH production', 'RuBisCO carbon fixation']
  },
  {
    id: 'vs_035', title: 'Evolution – Natural Selection Mechanisms Visualized', description: 'Population genetics simulations showing genetic drift, selective sweep, speciation, and adaptive radiation.',
    url: 'https://www.hhmi.org/biointeractive', channel: 'HHMI BioInteractive', category: 'Science', subCategory: 'Evolution',
    duration: '37 min', level: 'Intermediate', icon: 'timeline', color: '#FF8C42', resolution: 'Full HD',
    tags: ['Evolution', 'Natural Selection', 'Genetics', 'Speciation'],
    keyPoints: ['Hardy-Weinberg equilibrium', 'Genetic bottleneck', 'Founder effect', 'Allopatric speciation']
  },
  {
    id: 'vs_036', title: 'Stem Cell Biology – Differentiation & Reprogramming', description: 'Pluripotency factors, epigenetic landscape Waddington model, tissue-specific differentiation, and iPSC generation.',
    url: 'https://www.ibiology.org', channel: 'iBiology', category: 'Science', subCategory: 'Cell Biology',
    duration: '33 min', level: 'Advanced', icon: 'grain', color: '#4FC3F7', resolution: 'Ultra HD 4K',
    tags: ['Stem Cells', 'Differentiation', 'iPSC', 'Epigenetics'],
    keyPoints: ['Oct4/Sox2/Klf4/c-Myc', 'Waddington epigenetic landscape', 'Lineage commitment', 'Therapeutic cloning']
  },
  // ── AI & COMPUTATIONAL SCIENCE ──
  {
    id: 'vs_037', title: 'Deep Neural Networks – Backpropagation Visualized', description: 'Layer-by-layer forward pass, loss computation, gradient flow, and weight update animation in real-time.',
    url: 'https://www.youtube.com/@3blue1brown', channel: '3Blue1Brown', category: 'Science', subCategory: 'AI & Machine Learning',
    duration: '43 min', level: 'Intermediate', icon: 'memory', color: '#7C6BFF', resolution: 'Ultra HD 4K',
    tags: ['Neural Networks', 'Backpropagation', 'Deep Learning', 'AI'],
    keyPoints: ['Forward propagation', 'Cross-entropy loss', 'Chain rule gradients', 'SGD optimization']
  },
  {
    id: 'vs_038', title: 'AlphaFold – Protein Structure Prediction Revolution', description: 'How DeepMind solved 50-year protein folding problem using transformer attention and end-to-end deep learning.',
    url: 'https://deeplearning.mit.edu', channel: 'MIT Deep Learning', category: 'Science', subCategory: 'AI & Machine Learning',
    duration: '39 min', level: 'Advanced', icon: 'auto-awesome', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['AlphaFold', 'Protein Folding', 'DeepMind', 'Bioinformatics'],
    keyPoints: ['Multiple sequence alignment', 'Evoformer architecture', 'Structure module', 'PDB benchmark']
  },
  {
    id: 'vs_039', title: 'Transformer Architecture – Attention is All You Need', description: 'Complete visual walkthrough of self-attention heads, positional encoding, multi-head attention, and GPT architecture.',
    url: 'https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU', channel: 'Stanford ML', category: 'Science', subCategory: 'AI & Machine Learning',
    duration: '58 min', level: 'Advanced', icon: 'hub', color: '#FFB800', resolution: 'Ultra HD 4K',
    tags: ['Transformers', 'Attention', 'GPT', 'NLP'],
    keyPoints: ['Scaled dot-product attention', 'Multi-head attention', 'Layer normalization', 'Positional encoding']
  },
  // ── EARTH & ENVIRONMENTAL SCIENCE ──
  {
    id: 'vs_040', title: 'Climate Change – Carbon Cycle & Tipping Points', description: 'Atmospheric CO2 modeling, ocean acidification, ice sheet collapse thresholds, and feedback amplification loops.',
    url: 'https://www.youtube.com/@NatureVideo', channel: 'Nature Video', category: 'Science', subCategory: 'Environmental Science',
    duration: '44 min', level: 'Intermediate', icon: 'eco', color: '#00D4AA', resolution: 'Full HD',
    tags: ['Climate', 'Carbon Cycle', 'Tipping Points', 'Environment'],
    keyPoints: ['CO2 radiative forcing', 'Ocean heat uptake', 'Ice-albedo feedback', 'Permafrost methane release']
  },
  {
    id: 'vs_041', title: 'Plate Tectonics – Earth Interior & Subduction 3D', description: 'Cross-section of mantle convection, seafloor spreading, subduction zone mechanics, and volcanic arc formation.',
    url: 'https://www.youtube.com/@pbsspacetime', channel: 'PBS Space Time', category: 'Science', subCategory: 'Earth Science',
    duration: '31 min', level: 'Intermediate', icon: 'public', color: '#FF8C42', resolution: 'Ultra HD 4K',
    tags: ['Plate Tectonics', 'Geology', 'Volcanoes', 'Earthquakes'],
    keyPoints: ['Mantle convection cells', 'Mid-ocean ridge spreading', 'Subduction geochemistry', 'Ring of Fire']
  },
  // ── MEDICAL IMAGING & DIAGNOSTICS ──
  {
    id: 'vs_042', title: 'MRI Physics – From Spin to Image', description: 'Proton spin alignment, RF excitation, T1/T2 relaxation, k-space acquisition, and image reconstruction explained.',
    url: 'https://www.lecturio.com', channel: 'Lecturio', category: 'Medical', subCategory: 'Radiology',
    duration: '36 min', level: 'Advanced', icon: 'medical-services', color: '#4FC3F7', resolution: 'Ultra HD 4K',
    tags: ['MRI', 'Radiology', 'Imaging', 'Physics'],
    keyPoints: ['Spin precession (Larmor)', 'T1 vs T2 contrast', 'k-space Fourier transform', 'Sequence types']
  },
  {
    id: 'vs_043', title: 'PET Scan – Metabolic Imaging in Oncology', description: 'FDG tracer uptake, positron-electron annihilation, coincidence detection, and SUV quantification in cancer staging.',
    url: 'https://www.nih.gov/news', channel: 'NIH', category: 'Medical', subCategory: 'Radiology',
    duration: '24 min', level: 'Advanced', icon: 'local-hospital', color: '#FF6B9D', resolution: 'Full HD',
    tags: ['PET Scan', 'Oncology', 'FDG', 'Nuclear Medicine'],
    keyPoints: ['FDG Warburg effect', '511 keV annihilation', 'Time-of-flight PET', 'SUV threshold criteria']
  },
  // ── SURGERY & PROCEDURES ──
  {
    id: 'vs_044', title: 'Laparoscopic Surgery – Techniques & Instruments', description: 'Minimally invasive surgery principles, trocar placement, pneumoperitoneum, and robotic-assisted da Vinci procedures.',
    url: 'https://www.nejm.org/video', channel: 'NEJM', category: 'Medical', subCategory: 'Surgery',
    duration: '47 min', level: 'Advanced', icon: 'content-cut', color: '#00C9A7', resolution: 'Ultra HD 4K',
    tags: ['Surgery', 'Laparoscopy', 'Robotic', 'Minimally Invasive'],
    keyPoints: ['Trocar placement', 'CO2 insufflation', 'Energy device types', 'da Vinci robotic system']
  },
  {
    id: 'vs_045', title: 'Cardiac Surgery – Bypass & Valve Replacement', description: 'Step-by-step coronary artery bypass graft, cardiopulmonary bypass, aortic valve replacement with 3D illustrations.',
    url: 'https://www.nejm.org/video', channel: 'NEJM', category: 'Medical', subCategory: 'Surgery',
    duration: '53 min', level: 'Advanced', icon: 'favorite', color: '#FF5A6A', resolution: 'Ultra HD 4K',
    tags: ['Cardiac Surgery', 'CABG', 'Valve', 'Bypass'],
    keyPoints: ['Saphenous vein graft', 'CPB circuit', 'Cardioplegia arrest', 'TAVI vs open AVR']
  },
  // ── EMBRYOLOGY & DEVELOPMENT ──
  {
    id: 'vs_046', title: 'Human Embryology – Week by Week Development', description: 'Fertilization, cleavage, gastrulation, organogenesis, and fetal development from conception to birth in 3D.',
    url: 'https://www.khanacademy.org/science/health-and-medicine', channel: 'Khan Academy', category: 'Medical', subCategory: 'Embryology',
    duration: '49 min', level: 'Intermediate', icon: 'child-care', color: '#FFB800', resolution: 'Ultra HD 4K',
    tags: ['Embryology', 'Development', 'Fetus', 'Organogenesis'],
    keyPoints: ['Blastocyst implantation', 'Trilaminar disc', 'Neural tube formation', 'Critical developmental periods']
  },
  {
    id: 'vs_047', title: 'Placental Physiology – Maternal-Fetal Exchange', description: 'Trophoblast invasion, spiral artery remodeling, placental barrier function, and oxygen/nutrient transfer mechanisms.',
    url: 'https://www.osmosis.org', channel: 'Osmosis', category: 'Medical', subCategory: 'Embryology',
    duration: '25 min', level: 'Advanced', icon: 'pregnant-woman', color: '#FF6B9D', resolution: 'Full HD',
    tags: ['Placenta', 'Fetal Circulation', 'Pregnancy', 'Trophoblast'],
    keyPoints: ['Syncytiotrophoblast', 'Placental hormones', 'Fetal shunts', 'Pre-eclampsia pathogenesis']
  },
  // ── NEUROPHARMACOLOGY & PSYCHIATRY ──
  {
    id: 'vs_048', title: 'Depression Neurobiology – Monoamine Hypothesis', description: 'Serotonin, dopamine, norepinephrine pathways, synaptic changes in depression, and SSRI/SNRI mechanism visualization.',
    url: 'https://www.osmosis.org/learn/Pharmacology', channel: 'Osmosis', category: 'Medical', subCategory: 'Psychiatry',
    duration: '27 min', level: 'Intermediate', icon: 'psychology', color: '#7C6BFF', resolution: 'Full HD',
    tags: ['Depression', 'Serotonin', 'SSRI', 'Neurotransmitters'],
    keyPoints: ['Monoamine deficiency', 'Serotonin reuptake transporter', 'Neuroplasticity hypothesis', 'Ketamine mechanism']
  },
  {
    id: 'vs_049', title: 'Pain Pathways – Nociception to Perception', description: 'Complete pain pathway from peripheral nociceptors, dorsal horn modulation, thalamic relay to cortical pain matrix.',
    url: 'https://www.lecturio.com', channel: 'Lecturio', category: 'Medical', subCategory: 'Neurology',
    duration: '31 min', level: 'Intermediate', icon: 'warning-amber', color: '#FF8C42', resolution: 'Ultra HD 4K',
    tags: ['Pain', 'Nociception', 'Analgesics', 'Opioids'],
    keyPoints: ['A-delta and C fibers', 'Gate control theory', 'Descending inhibition', 'Opioid receptor types']
  },
  // ── GLOBAL HEALTH & PUBLIC HEALTH ──
  {
    id: 'vs_050', title: 'Epidemiology – Disease Modeling & R0 Explained', description: 'SIR model mechanics, basic reproduction number, herd immunity threshold, and outbreak curve flattening strategies.',
    url: 'https://www.who.int/emergencies/events', channel: 'WHO', category: 'Medical', subCategory: 'Epidemiology',
    duration: '22 min', level: 'Intermediate', icon: 'public', color: '#00C9A7', resolution: 'Full HD',
    tags: ['Epidemiology', 'R0', 'SIR Model', 'Herd Immunity'],
    keyPoints: ['SIR compartmental model', 'R0 vs Rt', 'Herd immunity threshold', 'Non-pharmaceutical interventions']
  },
  {
    id: 'vs_051', title: 'Vaccine Immunology – Primary & Secondary Response', description: 'B-cell and T-cell priming, germinal center reactions, memory cell formation, and anamnestic response visualization.',
    url: 'https://www.osmosis.org/learn/Immune_system', channel: 'Osmosis', category: 'Medical', subCategory: 'Immunology',
    duration: '28 min', level: 'Intermediate', icon: 'vaccines', color: '#4FC3F7', resolution: 'Ultra HD 4K',
    tags: ['Vaccines', 'Immunology', 'Memory Cells', 'Immunity'],
    keyPoints: ['Follicular helper T cells', 'Germinal center affinity maturation', 'IgG class switching', 'Long-lived plasma cells']
  },
  {
    id: 'vs_052', title: 'Nutrition & Metabolism – Macronutrient Pathways', description: 'Glycolysis, citric acid cycle, beta-oxidation, gluconeogenesis, and metabolic integration across fed/fasted states.',
    url: 'https://www.khanacademy.org/science/ap-biology', channel: 'Khan Academy', category: 'Medical', subCategory: 'Biochemistry',
    duration: '40 min', level: 'Intermediate', icon: 'restaurant', color: '#FFB800', resolution: 'Full HD',
    tags: ['Metabolism', 'Nutrition', 'Glycolysis', 'Biochemistry'],
    keyPoints: ['Glycolysis 10 steps', 'TCA cycle intermediates', 'Beta-oxidation spirals', 'Insulin/glucagon signaling']
  },
  {
    id: 'vs_053', title: 'Nanotechnology in Medicine – Drug Delivery Systems', description: 'Liposomal encapsulation, polymeric nanoparticles, targeted delivery, EPR effect, and tumor accumulation mechanisms.',
    url: 'https://www.nature.com/srep', channel: 'Nature Scientific Reports', category: 'Medical', subCategory: 'Nanotechnology',
    duration: '35 min', level: 'Advanced', icon: 'science', color: '#00D4AA', resolution: 'Ultra HD 4K',
    tags: ['Nanoparticles', 'Drug Delivery', 'Targeted Therapy', 'Nanotechnology'],
    keyPoints: ['EPR effect', 'PEGylation stealth', 'Ligand-receptor targeting', 'pH-responsive release']
  },
  {
    id: 'vs_054', title: 'Regenerative Medicine – Tissue Engineering 3D', description: 'Scaffold design, bioreactor culture, decellularization, organoid formation, and 3D bioprinting of living tissues.',
    url: 'https://www.ibiology.org', channel: 'iBiology', category: 'Medical', subCategory: 'Regenerative Medicine',
    duration: '41 min', level: 'Advanced', icon: 'healing', color: '#FF6B9D', resolution: 'Ultra HD 4K',
    tags: ['Tissue Engineering', 'Organoids', '3D Bioprinting', 'Regeneration'],
    keyPoints: ['ECM scaffold materials', 'Bioreactor shear stress', 'Vascularization strategies', 'Clinical translation']
  },
  {
    id: 'vs_055', title: 'Nuclear Medicine – Radioisotope Therapy Mechanisms', description: 'Targeted radiotherapy using PSMA, DOTATATE, radioiodine with dosimetry calculations and radiation safety.',
    url: 'https://www.lecturio.com', channel: 'Lecturio', category: 'Medical', subCategory: 'Oncology',
    duration: '30 min', level: 'Advanced', icon: 'radio-button-checked', color: '#7C6BFF', resolution: 'Full HD',
    tags: ['Radiotherapy', 'Nuclear Medicine', 'PSMA', 'Theranostics'],
    keyPoints: ['Lutetium-177 decay', 'PSMA targeting', 'DOTATATE somatostatin', 'Absorbed dose calculation']
  },
];

// ─── VIDEO SHOWCASE CATEGORIES ──────────────────────────────────────────
export const videoShowcaseCategories = [
  { id: 'all', label: 'All Videos', icon: 'play-circle', color: '#00C9A7' },
  { id: 'Medical', label: 'Medical', icon: 'local-hospital', color: '#FF6B9D' },
  { id: 'Science', label: 'Science', icon: 'science', color: '#4FC3F7' },
  { id: 'Anatomy', label: 'Anatomy', icon: 'accessibility', color: '#FFB800' },
  { id: 'Neuroscience', label: 'Neurosci', icon: 'psychology', color: '#7C6BFF' },
  { id: 'Cardiology', label: 'Cardiology', icon: 'favorite', color: '#FF5A6A' },
  { id: 'Genetics', label: 'Genetics', icon: 'biotech', color: '#00D4AA' },
  { id: 'AI & Machine Learning', label: 'AI & ML', icon: 'memory', color: '#FF8C42' },
];

// ─── MEDICAL KNOWLEDGE VIDEOS (ORIGINAL) ─────────────────────────────────────
export const medicalVideoCategories_old = medicalVideoCategories;

// ─── ALL SECTIONS SUMMARY FOR HOME ─────────────────────────────────────
export const homeSections = [
  { id: 'research', title: 'Research Institutes', count: researchInstitutes.length, icon: 'science', color: '#00C9A7', route: '/(tabs)/research' },
  { id: 'forums', title: 'R&D Forums', count: rdForums.length, icon: 'forum', color: '#4FC3F7', route: '/(tabs)/research' },
  { id: 'journals', title: 'Scientific Journals', count: scientificJournals.length, icon: 'menu-book', color: '#7C6BFF', route: '/(tabs)/resources' },
  { id: 'seminars', title: 'Seminars & Lectures', count: seminarsVideos.length, icon: 'video-library', color: '#FF8C42', route: '/(tabs)/resources' },
  { id: 'libraries', title: 'Global Libraries', count: scientificLibraries.length + medicalLibraries.length, icon: 'local-library', color: '#7C6BFF', route: '/(tabs)/resources' },
  { id: 'communities', title: 'R&D Communities', count: rdCommunities.length, icon: 'groups', color: '#4FC3F7', route: '/(tabs)/research' },
  { id: 'openaccess', title: 'Open Access', count: openAccessPlatforms.length, icon: 'lock-open', color: '#FFB800', route: '/(tabs)/research' },
  { id: 'copyright', title: 'Copyright-Free', count: copyrightFreeProviders.length, icon: 'folder-open', color: '#00D4AA', route: '/(tabs)/resources' },
  { id: 'medical', title: 'Medical Institutes', count: medicalInstitutes.length, icon: 'local-hospital', color: '#FF6B9D', route: '/(tabs)/medical' },
  { id: 'publichealth', title: 'Public Health Orgs', count: publicHealthOrgs.length, icon: 'health-and-safety', color: '#FF6B9D', route: '/(tabs)/medical' },
  { id: 'medvideos', title: 'Medical Videos', count: 35, icon: 'play-circle', color: '#FF8C42', route: '/(tabs)/medical' },
  { id: 'scivideos', title: '55 Video Showcase', count: videoShowcaseCollection.length, icon: 'smart-display', color: '#00C9A7', route: '/(tabs)/videos' },
];
