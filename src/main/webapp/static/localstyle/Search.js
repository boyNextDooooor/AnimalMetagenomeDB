// var that = null;
var tmpDown;
let index = 0;
const vm = new Vue({
    el:'#app',
    data:{
        anclick:'flase',//若是多个链接地址，即触发true
        webAddress: [],//临时缓存数据
        //临时缓存数据
        temporaryData:[],
        //需要打印的数据
        printResult:[],
        // webAddress:[],
        selectedRowKeys: [],
        result:[],
        results:[],
        columns:[
            {
                title:'Project ID',
                dataIndex:'bioprojectAccession',
                scopedSlots: { customRender: 'lianjieb' },
                sorter: true,
            },
            {
                title:'Experiment ID',
                dataIndex:'experimentAccession',
                scopedSlots: { customRender: 'lianjiee' },
                sorter: true,
            },
            {
                title:'Sample ID',
                dataIndex:'biosampleAccession',
                scopedSlots: { customRender: 'lianjienew' },
                sorter: true,
            },
            {
                title:'PubMed ID',
                dataIndex:'pubmedId',
                scopedSlots: { customRender: 'lianjiep' },
                sorter: true,
            },
            {
                title:'Project Title',
                dataIndex:'studyTitle',
                scopedSlots: { customRender: 'lianjies' },
                sorter: true,
            },
            {
                title:'Creation Date',
                dataIndex:'creationDate',
                sorter: true,
            },
            {
                title:'Study Purpose',
                dataIndex:'bioprojectType',
                sorter: true,
            },
            {
                title:'Project Description',
                dataIndex:'bioprojectDescription',
                sorter: true,
            },
            {
                title:'Sample Site1',
                dataIndex:'studyType',
                sorter: true,
            },
            {
                title:'Sample Site',
                dataIndex:'sampleSite',
                sorter: true,
            },
            {
                title:'Sex',
                dataIndex:'sex',
                sorter: true,
            },
            {
                title:'Age(Month)',
                dataIndex:'age',
                sorter: true,
            },
            {
                title:'Collection Date',
                dataIndex:'collectionDate',
                sorter: true,
            },
            {
                title:'Geographic Location',
                dataIndex:'geographicLocation',
                sorter: true,
            },
            {
                title:'Latitude',
                dataIndex:'latitude',
                sorter: true,
            },
            {
                title:'Longitude',
                dataIndex:'longitude',
                sorter: true,
            },
            {
                title:'Condition',
                dataIndex:'conditions',
                sorter: true,
            },
            {
                title:'Pheotype',
                dataIndex:'pheotype',
                sorter: true,
            },
            {
                title:'Breed',
                dataIndex:'breed',
                sorter: true,
            },
            {
                title:'DNA Extraction Method',
                dataIndex:'dnaextractionMethod',
                sorter: true,
            },
            // {
            //     title:'Study Type',
            //     dataIndex:'studyType',
            //     sorter: true,
            // },
            {
                title:'Instrument',
                dataIndex:'instrument',
                sorter: true,
            },
            {
                title:'Library Source',
                dataIndex:'librarySource',
                sorter: true,
            },
            {
                title:'Library Strategy',
                dataIndex:'libraryStrategy',
                sorter: true,
            },
            {
                title:'Total Size(Mb)',
                dataIndex:'totalSize',
                sorter: true,
            },
            {
                title:'Total Spots',
                dataIndex:'totalSpots',
                sorter: true,
            },
            {
                title:'Total Bases',
                dataIndex:'totalBases',
                sorter: true,
            },
            {
                title:'Species',
                dataIndex:'species',
                sorter: true,
            },
            {
                title:'Genus',
                dataIndex:'genus',
                sorter: true,
            },
            {
                title:'Family',
                dataIndex:'family',
                sorter: true,
            },
            {
                title:'Order',
                dataIndex:'orders',
                sorter: true,
            },
            {
                title:'Class',
                dataIndex:'outline',
                sorter: true,
            },
            {
                title:'Sample Type',
                dataIndex:'sampleType',
                sorter: true,
            },
            // hide
            /*{
                title:'Bioproject accession',
                dataIndex:'bioprojectAccession',
                scopedSlots: { customRender: 'lianjieb' },
                sorter: true,
            },
            {
                title:'Study accession',
                dataIndex:'studyAccession',
                scopedSlots: { customRender: 'lianjies' },
                sorter: true,
            },
            {
                title:'Experiment accession',
                dataIndex:'experimentAccession',
                scopedSlots: { customRender: 'lianjiee' },
                sorter: true,
            },
            {
                title:'PubMed ID',
                // dataIndex:'pubmedId',
                scopedSlots: { customRender: 'lianjie' },
                sorter: true,
            },
            {
                title:'Study title',
                dataIndex:'studyTitle',
                sorter: true,
            },
            {
                title:'Creation date',
                dataIndex:'creationDate',
                sorter: true,
            },
            {
                title:'Bioproject type',
                dataIndex:'bioprojectType',
                sorter: true,
            },
            {
                title:'Bioproject description',
                dataIndex:'bioprojectDescription',
                sorter: true,
            },
            {
                title:'Sample accession',
                dataIndex:'sampleAccession',
                sorter: true,
            },
            {
                title:'BioSample accession',
                dataIndex:'biosampleAccession',
                sorter: true,
            },
            {
                title:'Sample name',
                dataIndex:'sampleName',
                sorter: true,
            },
            {
                title:'Sample site',
                dataIndex:'sampleSite',
                sorter: true,
            },
            {
                title:'Sex',
                dataIndex:'sex',
                sorter: true,
            },
            {
                title:'Age',
                dataIndex:'age',
                sorter: true,
            },
            {
                title:'Collection date',
                dataIndex:'collectionDate',
                sorter: true,
            },
            {
                title:'Geographic location',
                dataIndex:'geographicLocation',
                sorter: true,
            },*/

            // {
            //     title:'Sample_number',
            //     dataIndex:'sampleNumber',
            // },
            // {
            //     title:'Experiment_Title',
            //     dataIndex:'experimentTitle',
            // },
            // {
            //     title:'Organism_Name',
            //     dataIndex:'organismName',
            // },
            // {
            //     title:'Submitter',
            //     dataIndex:'submitter',
            // },
            // {
            //     title:'Sample_Title',
            //     dataIndex:'sampleTitle',
            // },
            // {
            //     title:'Library_Selection',
            //     dataIndex:'librarySelection',
            // },
            // {
            //     title:'Lianjie(Bioproject_Accession)',
            //     dataIndex:'lianjieb',
            // },
            // {
            //     title:'Lianjie(PubMed_ID)',
            //     dataIndex:'lianjiep',
            // },
            // {
            //     title:'Source_database',
            //     dataIndex:'sourceDatabase',
            // }
        ],
        // columns:[
        //     {
        //         title:'',
        //         dataIndex:'',
        //         width: 50
        //     },
        //     {
        //         title:'Bioproject accession',
        //         dataIndex:'bioprojectAccession',
        //         scopedSlots: { customRender: 'lianjieb' },
        //     },
        //     {
        //         title:'Study accession',
        //         dataIndex:'studyAccession',
        //         scopedSlots: { customRender: 'lianjies' },
        //     },
        //     {
        //         title:'Experiment accession',
        //         dataIndex:'experimentAccession',
        //         scopedSlots: { customRender: 'lianjiee' },
        //     },
        //     {
        //         title:'Sample accession',
        //         dataIndex:'sampleAccession',
        //     },
        //     {
        //         title:'BioSample accession',
        //         dataIndex:'biosampleAccession',
        //     },
        //     {
        //         title:'PubMed ID',
        //         dataIndex:'pubmedId',
        //         scopedSlots: { customRender: 'lianjiep' },
        //     },
        //     // {
        //     //     title:'Study title',
        //     //     dataIndex:'studyTitle',
        //     // },
        //     {
        //         title:'Creation date',
        //         dataIndex:'creationDate',
        //     }
        //     // {
        //     //     title:'Bioproject type',
        //     //     dataIndex:'bioprojectType',
        //     // }
        // ],
        species:'',
        speciesList:[],
        sampleSite1:'',
        sampleSite1List:[],
        sampleSiteArr: [
            {
                "label": "Bio-fluid",
                "value": "Bio-fluid",
                "children": [
                    {
                        "label": "Blood",
                        "value": "Blood"
                    },
                    {
                        "label": "Colostrum",
                        "value": "Colostrum"
                    },
                    {
                        "label": "Fetal fluid",
                        "value": "Fetal fluid"
                    },
                    {
                        "label": "Milk",
                        "value": "Milk"
                    },
                    {
                        "label": "Saliva",
                        "value": "Saliva"
                    },
                    {
                        "label": "Semen",
                        "value": "Semen"
                    },
                    {
                        "label": "Serum",
                        "value": "Serum"
                    },
                    {
                        "label": "Urine",
                        "value": "Urine"
                    }
                ]
            },
            {
                "label": "Cloaca",
                "value": "Cloaca",
                "children": [
                    {
                        "label": "Cloaca",
                        "value": "Cloaca"
                    }
                ]
            },
            {
                "label": "Eye",
                "value": "Eye",
                "children": [
                    {
                        "label": "Eye",
                        "value": "Eye"
                    }
                ]
            },
            {
                "label": "Gill",
                "value": "Gill",
                "children": [
                    {
                        "label": "Gill",
                        "value": "Gill"
                    }
                ]
            },
            {
                "label": "Gland",
                "value": "Gland",
                "children": [
                    {
                        "label": "Lymph Node",
                        "value": "Lymph Node"
                    },
                    {
                        "label": "Spleen",
                        "value": "Spleen"
                    },
                    {
                        "label": "Tonsils",
                        "value": "Tonsils"
                    },
                    {
                        "label": "Uropygial gland",
                        "value": "Uropygial gland"
                    },
                    {
                        "label": "Venom gland",
                        "value": "Venom gland"
                    }
                ]
            },
            {
                "label": "Gut",
                "value": "Gut",
                "children": [
                    {
                        "label": "Anterior intestine",
                        "value": "Anterior intestine"
                    },
                    {
                        "label": "Appendix",
                        "value": "Appendix"
                    },
                    {
                        "label": "Cecum",
                        "value": "Cecum"
                    },
                    {
                        "label": "Colon",
                        "value": "Colon"
                    },
                    {
                        "label": "Duodenum",
                        "value": "Duodenum"
                    },
                    {
                        "label": "Feces",
                        "value": "Feces"
                    },
                    {
                        "label": "Gut",
                        "value": "Gut"
                    },
                    {
                        "label": "Hind gut",
                        "value": "Hind gut"
                    },
                    {
                        "label": "Ileum",
                        "value": "Ileum"
                    },
                    {
                        "label": "Jejunum",
                        "value": "Jejunum"
                    },
                    {
                        "label": "Large intestine",
                        "value": "Large intestine"
                    },
                    {
                        "label": "Meconium",
                        "value": "Meconium"
                    },
                    {
                        "label": "Mid intestine",
                        "value": "Mid intestine"
                    },
                    {
                        "label": "Posterior intestine",
                        "value": "Posterior intestine"
                    },
                    {
                        "label": "Precolostrum",
                        "value": "Precolostrum"
                    },
                    {
                        "label": "Rectum",
                        "value": "Rectum"
                    },
                    {
                        "label": "Rumen",
                        "value": "Rumen"
                    },
                    {
                        "label": "Small Intestine",
                        "value": "Small Intestine"
                    }
                ]
            },
            {
                "label": "NA",
                "value": "NA",
                "children": [
                    {
                        "label": "Abomasum",
                        "value": "Abomasum"
                    },
                    {
                        "label": "Cecum",
                        "value": "Cecum"
                    },
                    {
                        "label": "Colon",
                        "value": "Colon"
                    },
                    {
                        "label": "Duodenum",
                        "value": "Duodenum"
                    },
                    {
                        "label": "Esophagus",
                        "value": "Esophagus"
                    },
                    {
                        "label": "Heart",
                        "value": "Heart"
                    },
                    {
                        "label": "Hypothalamus",
                        "value": "Hypothalamus"
                    },
                    {
                        "label": "Kidney",
                        "value": "Kidney"
                    },
                    {
                        "label": "Liver",
                        "value": "Liver"
                    },
                    {
                        "label": "Lung",
                        "value": "Lung"
                    },
                    {
                        "label": "NA",
                        "value": "NA"
                    },
                    {
                        "label": "Omasum",
                        "value": "Omasum"
                    },
                    {
                        "label": "Reticulum",
                        "value": "Reticulum"
                    },
                    {
                        "label": "Skin",
                        "value": "Skin"
                    },
                    {
                        "label": "Spleen",
                        "value": "Spleen"
                    },
                    {
                        "label": "Subcutaneous fat",
                        "value": "Subcutaneous fat"
                    },
                    {
                        "label": "Tail fat",
                        "value": "Tail fat"
                    }
                ]
            },
            {
                "label": "Nasopharynx",
                "value": "Nasopharynx",
                "children": [
                    {
                        "label": "Laryngeal",
                        "value": "Laryngeal"
                    },
                    {
                        "label": "Nasopharynx",
                        "value": "Nasopharynx"
                    }
                ]
            },
            {
                "label": "Oral",
                "value": "Oral",
                "children": [
                    {
                        "label": "Mouth",
                        "value": "Mouth"
                    },
                    {
                        "label": "Oral cavity",
                        "value": "Oral cavity"
                    },
                    {
                        "label": "Tongue",
                        "value": "Tongue"
                    }
                ]
            },
            {
                "label": "Others",
                "value": "Others",
                "children": [
                    {
                        "label": "Abdomen",
                        "value": "Abdomen"
                    },
                    {
                        "label": "Brain",
                        "value": "Brain"
                    },
                    {
                        "label": "Bronchus",
                        "value": "Bronchus"
                    },
                    {
                        "label": "Esophagus",
                        "value": "Esophagus"
                    },
                    {
                        "label": "Gallbladder",
                        "value": "Gallbladder"
                    },
                    {
                        "label": "Gill",
                        "value": "Gill"
                    },
                    {
                        "label": "Heart",
                        "value": "Heart"
                    },
                    {
                        "label": "Joey",
                        "value": "Joey"
                    },
                    {
                        "label": "Kidney",
                        "value": "Kidney"
                    },
                    {
                        "label": "Liver",
                        "value": "Liver"
                    },
                    {
                        "label": "Lung",
                        "value": "Lung"
                    },
                    {
                        "label": "Meninges",
                        "value": "Meninges"
                    },
                    {
                        "label": "Mucosa",
                        "value": "Mucosa"
                    },
                    {
                        "label": "Muscle",
                        "value": "Muscle"
                    },
                    {
                        "label": "NA",
                        "value": "NA"
                    },
                    {
                        "label": "Spinal Cord",
                        "value": "Spinal Cord"
                    },
                    {
                        "label": "Synovial",
                        "value": "Synovial"
                    }
                ]
            },
            {
                "label": "Reproductive tract",
                "value": "Reproductive tract",
                "children": [
                    {
                        "label": "Birth Canal",
                        "value": "Birth Canal"
                    },
                    {
                        "label": "Reproductive tract",
                        "value": "Reproductive tract"
                    },
                    {
                        "label": "Respiratory tract",
                        "value": "Respiratory tract"
                    },
                    {
                        "label": "Vaginae",
                        "value": "Vaginae"
                    }
                ]
            },
            {
                "label": "Skin",
                "value": "Skin",
                "children": [
                    {
                        "label": "Brood Patch",
                        "value": "Brood Patch"
                    },
                    {
                        "label": "Hoof",
                        "value": "Hoof"
                    },
                    {
                        "label": "Pouch",
                        "value": "Pouch"
                    },
                    {
                        "label": "Skin",
                        "value": "Skin"
                    },
                    {
                        "label": "Teat",
                        "value": "Teat"
                    },
                    {
                        "label": "Udder",
                        "value": "Udder"
                    }
                ]
            },
            {
                "label": "Stomach",
                "value": "Stomach",
                "children": [
                    {
                        "label": "Abomasum",
                        "value": "Abomasum"
                    },
                    {
                        "label": "Omasum",
                        "value": "Omasum"
                    },
                    {
                        "label": "Reticulum",
                        "value": "Reticulum"
                    },
                    {
                        "label": "Rumen",
                        "value": "Rumen"
                    },
                    {
                        "label": "Stomach",
                        "value": "Stomach"
                    }
                ]
            },
            {
                "label": "The whole body",
                "value": "The whole body",
                "children": [
                    {
                        "label": "The whole body",
                        "value": "The whole body"
                    }
                ]
            }
        ],
        sampleSite2:'',
        sampleSite2List:[],
        instrument:'',
        instrumentList:[],
        libraryStrategy:'',
        libraryStrategyList:[],
        options: [],
        Bioprojecttype:'',
        BioProjectType: [],
        CurrentPage: '',
        total: null,
        pn: 1,
        pageSize: 10,
        pageNum: 0,
        pages: "",
        FAQ:true,
        items: ['jack', 'lucy'],
        AllInfo:[],
        nowOrder: {
            orderField: '',
            order: '',
        },
        newStudyType: '',
        studyTypeArr: [],
        newSex: '',
        newSexList: [
            'Female',
            'Male',
            'NA',
            'Neuter'
        ],
        newDna: '',
        newDnaList: [
            "AccuPrep Stool DNA Extraction Kit",
            "AGOWA mag Mini DNA Isolation Kit",
            "Bacterial Genomic DNA Isolation Kit",
            "Bead-beating and Phenol-chloroform",
            "Bioline Isolate II Genomic DNA kit",
            "BiOstic Bacteremia DNA Isolation Kit",
            "Cetyl Trimethyl Ammonium Bromide (CTAB) method",
            "DNA High sensitivity Chip kit",
            "DNeasy Blood & Cell Culture DNA Midi Kit",
            "DNeasy Blood & Tissue Kit",
            "DNeasy PowerFood Microbial DNA Isolation Kit",
            "Dneasy PowerLyzer PowerSoil DNA Isolation Kit ",
            "DNeasy PowerSoil kit",
            "DNeasy tissue kit",
            "E.Z.N.A Insect DNA Kit",
            "E.Z.N.A. Soil DNA Isolation Kit",
            "E.Z.N.A. Stool DNA Kit",
            "Epicentre DNA Isolation Kit",
            "Extraction buffer (Tris/EDTA/NaCl/SDS)",
            "Extraction buffer (Tris/EDTA/NaCl/SDS) ",
            "Ezup Genomic DNA Extraction Kit",
            "Fast DNA Soil Kit",
            "Fast DNA SPIN Kit",
            "GeneJET Genomic DNA Purication Kit",
            "GenElute Bacterial Genomic DNA Kit",
            "GeneMATRIX Stool DNA Purification Kit",
            "Gentra Puregene Yeast/Bac Kit ",
            "Invitrogen Easy-DNA Kit",
            "Invitrogen PureLink Genomic DNA Mini Kit",
            "KAPA HiFi HotStart PCR Kit ",
            "Kapa Library Preparation Kit",
            "Macherey–Nagel Nucleospin Soil Kit",
            "Machinery Nigel Kit",
            "Mag-Bind Universal Pathogen DNA Kit",
            "MagAttract Power Microbiome Kit",
            "MagMAXTM DNA Multi-Sample Ultra Kit",
            "MagMAXTM Pathogen RNA/DNA Kit",
            "MagNa Pure Compact Nucleic Acid Isolation Kit",
            "MasterPure Gram Positive DNA Isolation Kit",
            "Maxwell RSC Cultured Cell DNA Kit ",
            "MoBio Kit",
            "MoBio Power Viral DNA/RNA Isolation Kit™",
            "MoBio PowerFecal DNA Extraction Kit",
            "MoBio PowerFecal DNA Isolation Kit",
            "MoBio PowerFecal Kit",
            "MoBio PowerMag Microbiome RNA/DNA Isolation Kit",
            "MoBio PowerSoil 96 Well DNA isolation kit",
            "MoBio PowerSoil 96-Well Extraction Kit",
            "MoBio PowerSoil 96-Well Soil DNA Isolation Kit",
            "MoBio PowerSoil DNA Extraction Kit",
            "MoBio PowerSoil DNA Isolation Kit",
            "MoBio UltraClean Microbial DNA Isolation Kit",
            "MP Biomedical DNA Extraction and Purification Kit",
            "MP Biomedicals Fast DNA Spin Kit for Soil",
            "NA",
            "NEBNext Microbiome DNA Enrichment Kit",
            "Nextra DNA Flex kit",
            "NucleoSpin Blood kit ",
            "Nucleospin DNA Stool Kit",
            "NucleoSpin Soil Extraction Kit",
            "NucleoSpin Tissue Kit",
            "NZY Microbial gDNA Isolation kit",
            "PowerFecal DNA Isolation kit",
            "PowerFecal kit",
            "Powerfood Microbial DNA Isolation kit",
            "PowerLyzer PowerSoil DNA Isolation Kit",
            "PowerMag fecal DNA/RNA Extraction Kit",
            "PowerMag Microbiome RNA/DNA Isolation Kit",
            "PowerMax Soil DNA Isolation Kit",
            "PowerSoil 96-well DNA Isolation Kit",
            "PowerSoil DNA extraction kit ",
            "PowerSoil DNA Isolation Kit ",
            "Prep Man® Ultra  (Applied Biosystems)",
            "Prime Script II 1st Strand cDNA Synthesis Kit",
            "PSP Spin Stool DNA Kit",
            "Purelink Genomic DNA kit ",
            "Purelink Microbiome DNA Extraction Kit ",
            "PureLink Microbiome DNA Purification Kit",
            "QAIamp Detergent-based Faecal DNA Extraction Kit",
            "QIAamp Cador Pathogen Mini Kit",
            "QIAamp DNA Micro Kit",
            "QIAamp DNA Mini Kit",
            "QIAamp DNA Stool Kit",
            "QIAamp DNA Stool Mini Kit",
            "QIAamp Fast DNA Stool Kit",
            "QIAamp Fast DNA Stool Kit ",
            "QIAamp Fast DNA Stool Mini Kit",
            "QIAamp PowerFecal DNA Kit",
            "QIAamp PowerSoil Extraction Kit",
            "Qiagen  DNAeasy Tissue  Extraction Kit",
            "Qiagen AllPrep PowerFecal DNA/RNA Kit",
            "Qiagen BioSprint 96 One-For-All Vet kit",
            "Qiagen BioSprint 96 Workstation",
            "Qiagen Cador Pathogen Mini Kit",
            "Qiagen DNA Isolation Kit",
            "Qiagen DNA Stool Mini Kit",
            "Qiagen Genomic 500 DNA Kit",
            "Qiagen MagAttract PowerMicrobiome DNA/RNA KF Kit",
            "Qiagen PowerLyzer PowerSoil DNA Isolation kit",
            "Qiagen Powersoil kit",
            "Qiagen Stool kit",
            "QIAmp DNA Mini Kit ",
            "QIAmp DNA Mini Kit",
            "QIAmp DNA Stool Mini Kit",
            "Quant-iT PicoGreen dsDNA Assay Kit",
            "Quick Gene DNA Tissue kit",
            "Quick-DNA Fecal/Soil Microbe Kit",
            "Repeated Bead Beating Plus Column (RBB + C) Method",
            "Roche High Pure PCR Template Preparation Kit",
            "Silica-based DNA extraction method",
            "Soil Ezup DNA Extraction Kit",
            "Soil Genome DNA Isolation Kit",
            "Solid Phase Reversible Immobilization (SPRI) magnetic beads",
            "STAR DNA BTS Kit",
            "Stool DNA Isolation Kit",
            "Stool DNA kit",
            "Takara MiniBest Genomic DNA Extraction kit",
            "The  hot phenol method",
            "The cetyl trimethylammonium bromide (CTAB) method",
            "The combination of bead beating, Stool Transport and Recovery (STAR) buffer",
            "The PCBB Method",
            "The PCFI  Method",
            "The PCQI Method",
            "The PCSA Method",
            "The phenol-chloroform method",
            "The QIAG method",
            "The ZYMO method",
            "TIANamp stool DNA kit",
            "TruSeq DNA PCR-Free Library Preparation Kit",
            "TruSeq DNA PCR-Free Sample Preparation Kit ",
            "UltraClean  96 Well Swab DNA Kit",
            "UltraClean Fecal DNA Isolation Kit",
            "UltraClean Soil DNA Isolation Kit",
            "UltraClean Soil DNA Isolation Kit ",
            "Urelink Genomic DNA Mini Kit",
            "Wizard Genomic DNA Purification Kit",
            "ZR Fecal DNA Miniprep Kit",
            "Zymo BIOMICS DNA Miniprep Extraction Kit",
            "Zymo BIOMICS DNA Miniprep Kit",
            "Zymo Research Fecal DNA kit ",
            "Zymo Research Fecal DNA MiniPrep Extraction kit",
        ],
        startDate: '',
        endDate: '',
        startMonth: null,
        endMonth: null,
        speciesOptions: [
            {
                value: 'Wild animals',
                label: 'Wild animals',
                key: 'wild',
                children: [
                    {
                        "id": 5,
                        "gmksz": "Actinopteri",
                        "value": "Actinopteri",
                        "label": "Actinopteri",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 58,
                                "gmksz": "Characiformes",
                                "value": "Characiformes",
                                "label": "Characiformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 154,
                                        "gmksz": "Serrasalmidae",
                                        "value": "Serrasalmidae",
                                        "label": "Serrasalmidae",
                                        "parentId": 58,
                                        "children": [
                                            {
                                                "id": 393,
                                                "gmksz": "Pygocentrus",
                                                "value": "Pygocentrus",
                                                "label": "Pygocentrus",
                                                "parentId": 154,
                                                "children": [
                                                    {
                                                        "id": 851,
                                                        "gmksz": "Pygocentrus nattereri",
                                                        "value": "Pygocentrus nattereri",
                                                        "label": "Pygocentrus nattereri",
                                                        "parentId": 393,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 392,
                                                "gmksz": "Serrasalmus",
                                                "value": "Serrasalmus",
                                                "label": "Serrasalmus",
                                                "parentId": 154,
                                                "children": [
                                                    {
                                                        "id": 850,
                                                        "gmksz": "Serrasalmus maculatus",
                                                        "value": "Serrasalmus maculatus",
                                                        "label": "Serrasalmus maculatus",
                                                        "parentId": 392,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 54,
                                "gmksz": "Clupeiformes",
                                "value": "Clupeiformes",
                                "label": "Clupeiformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 145,
                                        "gmksz": "Clupeidae",
                                        "value": "Clupeidae",
                                        "label": "Clupeidae",
                                        "parentId": 54,
                                        "children": [
                                            {
                                                "id": 325,
                                                "gmksz": "Sardinella",
                                                "value": "Sardinella",
                                                "label": "Sardinella",
                                                "parentId": 145,
                                                "children": [
                                                    {
                                                        "id": 797,
                                                        "gmksz": "Sardinella aurita",
                                                        "value": "Sardinella aurita",
                                                        "label": "Sardinella aurita",
                                                        "parentId": 325,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 871,
                                                        "gmksz": "Sardinella zunasi",
                                                        "value": "Sardinella zunasi",
                                                        "label": "Sardinella zunasi",
                                                        "parentId": 325,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 40,
                                "gmksz": "Cypriniformes",
                                "value": "Cypriniformes",
                                "label": "Cypriniformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 152,
                                        "gmksz": "Cyprinidae",
                                        "value": "Cyprinidae",
                                        "label": "Cyprinidae",
                                        "parentId": 40,
                                        "children": [
                                            {
                                                "id": 585,
                                                "gmksz": "Carassius",
                                                "value": "Carassius",
                                                "label": "Carassius",
                                                "parentId": 152,
                                                "children": [
                                                    {
                                                        "id": 1134,
                                                        "gmksz": "Carassius gibelio",
                                                        "value": "Carassius gibelio",
                                                        "label": "Carassius gibelio",
                                                        "parentId": 585,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 499,
                                                "gmksz": "Cyprinus",
                                                "value": "Cyprinus",
                                                "label": "Cyprinus",
                                                "parentId": 152,
                                                "children": [
                                                    {
                                                        "id": 998,
                                                        "gmksz": "Cyprinus carpio",
                                                        "value": "Cyprinus carpio",
                                                        "label": "Cyprinus carpio",
                                                        "parentId": 499,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 366,
                                                "gmksz": "Gymnocypris",
                                                "value": "Gymnocypris",
                                                "label": "Gymnocypris",
                                                "parentId": 152,
                                                "children": [
                                                    {
                                                        "id": 820,
                                                        "gmksz": "Gymnocypris przewalskii",
                                                        "value": "Gymnocypris przewalskii",
                                                        "label": "Gymnocypris przewalskii",
                                                        "parentId": 366,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 500,
                                                "gmksz": "Tor",
                                                "value": "Tor",
                                                "label": "Tor",
                                                "parentId": 152,
                                                "children": [
                                                    {
                                                        "id": 999,
                                                        "gmksz": "Tor tambroides",
                                                        "value": "Tor tambroides",
                                                        "label": "Tor tambroides",
                                                        "parentId": 500,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 166,
                                        "gmksz": "Gobionidae",
                                        "value": "Gobionidae",
                                        "label": "Gobionidae",
                                        "parentId": 40,
                                        "children": [
                                            {
                                                "id": 359,
                                                "gmksz": "Coreius",
                                                "value": "Coreius",
                                                "label": "Coreius",
                                                "parentId": 166,
                                                "children": [
                                                    {
                                                        "id": 813,
                                                        "gmksz": "Coreius guichenoti",
                                                        "value": "Coreius guichenoti",
                                                        "label": "Coreius guichenoti",
                                                        "parentId": 359,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 162,
                                        "gmksz": "Leuciscidae",
                                        "value": "Leuciscidae",
                                        "label": "Leuciscidae",
                                        "parentId": 40,
                                        "children": [
                                            {
                                                "id": 564,
                                                "gmksz": "Abramis",
                                                "value": "Abramis",
                                                "label": "Abramis",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1101,
                                                        "gmksz": "Abramis brama",
                                                        "value": "Abramis brama",
                                                        "label": "Abramis brama",
                                                        "parentId": 564,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 601,
                                                "gmksz": "Alburnus",
                                                "value": "Alburnus",
                                                "label": "Alburnus",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1154,
                                                        "gmksz": "Alburnus alburnus",
                                                        "value": "Alburnus alburnus",
                                                        "label": "Alburnus alburnus",
                                                        "parentId": 601,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 490,
                                                "gmksz": "Blicca",
                                                "value": "Blicca",
                                                "label": "Blicca",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 989,
                                                        "gmksz": "Blicca bjoerkna",
                                                        "value": "Blicca bjoerkna",
                                                        "label": "Blicca bjoerkna",
                                                        "parentId": 490,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 541,
                                                "gmksz": "Chondrostoma",
                                                "value": "Chondrostoma",
                                                "label": "Chondrostoma",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1061,
                                                        "gmksz": "Chondrostoma nasus",
                                                        "value": "Chondrostoma nasus",
                                                        "label": "Chondrostoma nasus",
                                                        "parentId": 541,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 464,
                                                "gmksz": "Leuciscus",
                                                "value": "Leuciscus",
                                                "label": "Leuciscus",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1054,
                                                        "gmksz": "Leuciscus idus",
                                                        "value": "Leuciscus idus",
                                                        "label": "Leuciscus idus",
                                                        "parentId": 464,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1050,
                                                        "gmksz": "Leuciscus aspius",
                                                        "value": "Leuciscus aspius",
                                                        "label": "Leuciscus aspius",
                                                        "parentId": 464,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 615,
                                                "gmksz": "Rutilus",
                                                "value": "Rutilus",
                                                "label": "Rutilus",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1190,
                                                        "gmksz": "Rutilus rutilus",
                                                        "value": "Rutilus rutilus",
                                                        "label": "Rutilus rutilus",
                                                        "parentId": 615,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 542,
                                                "gmksz": "Scardinius",
                                                "value": "Scardinius",
                                                "label": "Scardinius",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1062,
                                                        "gmksz": "Scardinius erythrophthalmus",
                                                        "value": "Scardinius erythrophthalmus",
                                                        "label": "Scardinius erythrophthalmus",
                                                        "parentId": 542,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 562,
                                                "gmksz": "Squalius",
                                                "value": "Squalius",
                                                "label": "Squalius",
                                                "parentId": 162,
                                                "children": [
                                                    {
                                                        "id": 1099,
                                                        "gmksz": "Squalius cephalus",
                                                        "value": "Squalius cephalus",
                                                        "label": "Squalius cephalus",
                                                        "parentId": 562,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 160,
                                        "gmksz": "Tincidae",
                                        "value": "Tincidae",
                                        "label": "Tincidae",
                                        "parentId": 40,
                                        "children": [
                                            {
                                                "id": 352,
                                                "gmksz": "Tinca",
                                                "value": "Tinca",
                                                "label": "Tinca",
                                                "parentId": 160,
                                                "children": [
                                                    {
                                                        "id": 800,
                                                        "gmksz": "Tinca tinca",
                                                        "value": "Tinca tinca",
                                                        "label": "Tinca tinca",
                                                        "parentId": 352,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 73,
                                "gmksz": "Esociformes",
                                "value": "Esociformes",
                                "label": "Esociformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 219,
                                        "gmksz": "Esocidae",
                                        "value": "Esocidae",
                                        "label": "Esocidae",
                                        "parentId": 73,
                                        "children": [
                                            {
                                                "id": 515,
                                                "gmksz": "Esox",
                                                "value": "Esox",
                                                "label": "Esox",
                                                "parentId": 219,
                                                "children": [
                                                    {
                                                        "id": 1026,
                                                        "gmksz": "Esox lucius",
                                                        "value": "Esox lucius",
                                                        "label": "Esox lucius",
                                                        "parentId": 515,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 77,
                                "gmksz": "Labriformes",
                                "value": "Labriformes",
                                "label": "Labriformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 228,
                                        "gmksz": "Labridae",
                                        "value": "Labridae",
                                        "label": "Labridae",
                                        "parentId": 77,
                                        "children": [
                                            {
                                                "id": 539,
                                                "gmksz": "Labroides",
                                                "value": "Labroides",
                                                "label": "Labroides",
                                                "parentId": 228,
                                                "children": [
                                                    {
                                                        "id": 1058,
                                                        "gmksz": "Labroides dimidiatus",
                                                        "value": "Labroides dimidiatus",
                                                        "label": "Labroides dimidiatus",
                                                        "parentId": 539,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 42,
                                "gmksz": "Perciformes",
                                "value": "Perciformes",
                                "label": "Perciformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 204,
                                        "gmksz": "Percidae",
                                        "value": "Percidae",
                                        "label": "Percidae",
                                        "parentId": 42,
                                        "children": [
                                            {
                                                "id": 589,
                                                "gmksz": "Gymnocephalus",
                                                "value": "Gymnocephalus",
                                                "label": "Gymnocephalus",
                                                "parentId": 204,
                                                "children": [
                                                    {
                                                        "id": 1138,
                                                        "gmksz": "Gymnocephalus cernua",
                                                        "value": "Gymnocephalus cernua",
                                                        "label": "Gymnocephalus cernua",
                                                        "parentId": 589,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 551,
                                                "gmksz": "Sander",
                                                "value": "Sander",
                                                "label": "Sander",
                                                "parentId": 204,
                                                "children": [
                                                    {
                                                        "id": 1181,
                                                        "gmksz": "Lucioperca lucioperca",
                                                        "value": "Lucioperca lucioperca",
                                                        "label": "Lucioperca lucioperca",
                                                        "parentId": 551,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1149,
                                                        "gmksz": "Sander lucioperca",
                                                        "value": "Sander lucioperca",
                                                        "label": "Sander lucioperca",
                                                        "parentId": 551,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 593,
                                                "gmksz": "Zingel",
                                                "value": "Zingel",
                                                "label": "Zingel",
                                                "parentId": 204,
                                                "children": [
                                                    {
                                                        "id": 1143,
                                                        "gmksz": "Zingel zingel",
                                                        "value": "Zingel zingel",
                                                        "label": "Zingel zingel",
                                                        "parentId": 593,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 117,
                                        "gmksz": "Pomacentridae",
                                        "value": "Pomacentridae",
                                        "label": "Pomacentridae",
                                        "parentId": 42,
                                        "children": [
                                            {
                                                "id": 375,
                                                "gmksz": "Abudefduf",
                                                "value": "Abudefduf",
                                                "label": "Abudefduf",
                                                "parentId": 117,
                                                "children": [
                                                    {
                                                        "id": 906,
                                                        "gmksz": "Abudefduf sexfasciatus",
                                                        "value": "Abudefduf sexfasciatus",
                                                        "label": "Abudefduf sexfasciatus",
                                                        "parentId": 375,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 905,
                                                        "gmksz": "Abudefduf whitleyi",
                                                        "value": "Abudefduf whitleyi",
                                                        "label": "Abudefduf whitleyi",
                                                        "parentId": 375,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 436,
                                                "gmksz": "Acanthochromis",
                                                "value": "Acanthochromis",
                                                "label": "Acanthochromis",
                                                "parentId": 117,
                                                "children": [
                                                    {
                                                        "id": 900,
                                                        "gmksz": "Acanthochromis polyacanthus",
                                                        "value": "Acanthochromis polyacanthus",
                                                        "label": "Acanthochromis polyacanthus",
                                                        "parentId": 436,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 437,
                                                "gmksz": "Chromis",
                                                "value": "Chromis",
                                                "label": "Chromis",
                                                "parentId": 117,
                                                "children": [
                                                    {
                                                        "id": 904,
                                                        "gmksz": "Chromis atripectoralis",
                                                        "value": "Chromis atripectoralis",
                                                        "label": "Chromis atripectoralis",
                                                        "parentId": 437,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 374,
                                                "gmksz": "Dischistodus",
                                                "value": "Dischistodus",
                                                "label": "Dischistodus",
                                                "parentId": 117,
                                                "children": [
                                                    {
                                                        "id": 903,
                                                        "gmksz": "Dischistodus perspicillatus",
                                                        "value": "Dischistodus perspicillatus",
                                                        "label": "Dischistodus perspicillatus",
                                                        "parentId": 374,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 902,
                                                        "gmksz": "Dischistodus pseudochrysopoecilus",
                                                        "value": "Dischistodus pseudochrysopoecilus",
                                                        "label": "Dischistodus pseudochrysopoecilus",
                                                        "parentId": 374,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 378,
                                                "gmksz": "Pomacentrus",
                                                "value": "Pomacentrus",
                                                "label": "Pomacentrus",
                                                "parentId": 117,
                                                "children": [
                                                    {
                                                        "id": 901,
                                                        "gmksz": "Pomacentrus moluccensis",
                                                        "value": "Pomacentrus moluccensis",
                                                        "label": "Pomacentrus moluccensis",
                                                        "parentId": 378,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 917,
                                                        "gmksz": "Pomacentrus wardi",
                                                        "value": "Pomacentrus wardi",
                                                        "label": "Pomacentrus wardi",
                                                        "parentId": 378,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 373,
                                                "gmksz": "Stegastes",
                                                "value": "Stegastes",
                                                "label": "Stegastes",
                                                "parentId": 117,
                                                "children": [
                                                    {
                                                        "id": 899,
                                                        "gmksz": "Stegastes apicalis",
                                                        "value": "Stegastes apicalis",
                                                        "label": "Stegastes apicalis",
                                                        "parentId": 373,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 907,
                                                        "gmksz": "Stegastes nigricans",
                                                        "value": "Stegastes nigricans",
                                                        "label": "Stegastes nigricans",
                                                        "parentId": 373,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 28,
                                "gmksz": "Salmoniformes",
                                "value": "Salmoniformes",
                                "label": "Salmoniformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 102,
                                        "gmksz": "Salmonidae",
                                        "value": "Salmonidae",
                                        "label": "Salmonidae",
                                        "parentId": 28,
                                        "children": [
                                            {
                                                "id": 290,
                                                "gmksz": "Coregonus",
                                                "value": "Coregonus",
                                                "label": "Coregonus",
                                                "parentId": 102,
                                                "children": [
                                                    {
                                                        "id": 731,
                                                        "gmksz": "Coregonus clupeaformis",
                                                        "value": "Coregonus clupeaformis",
                                                        "label": "Coregonus clupeaformis",
                                                        "parentId": 290,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 592,
                                                "gmksz": "Oncorhynchus",
                                                "value": "Oncorhynchus",
                                                "label": "Oncorhynchus",
                                                "parentId": 102,
                                                "children": [
                                                    {
                                                        "id": 1142,
                                                        "gmksz": "Oncorhynchus mykiss",
                                                        "value": "Oncorhynchus mykiss",
                                                        "label": "Oncorhynchus mykiss",
                                                        "parentId": 592,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 275,
                                                "gmksz": "Salmo",
                                                "value": "Salmo",
                                                "label": "Salmo",
                                                "parentId": 102,
                                                "children": [
                                                    {
                                                        "id": 717,
                                                        "gmksz": "Salmo salar",
                                                        "value": "Salmo salar",
                                                        "label": "Salmo salar",
                                                        "parentId": 275,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 722,
                                                        "gmksz": "Salmo trutta",
                                                        "value": "Salmo trutta",
                                                        "label": "Salmo trutta",
                                                        "parentId": 275,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 581,
                                                "gmksz": "Salvelinus",
                                                "value": "Salvelinus",
                                                "label": "Salvelinus",
                                                "parentId": 102,
                                                "children": [
                                                    {
                                                        "id": 1129,
                                                        "gmksz": "Salvelinus fontinalis",
                                                        "value": "Salvelinus fontinalis",
                                                        "label": "Salvelinus fontinalis",
                                                        "parentId": 581,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 64,
                                "gmksz": "Spariformes",
                                "value": "Spariformes",
                                "label": "Spariformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 184,
                                        "gmksz": "Nemipteridae",
                                        "value": "Nemipteridae",
                                        "label": "Nemipteridae",
                                        "parentId": 64,
                                        "children": [
                                            {
                                                "id": 414,
                                                "gmksz": "Nemipterus",
                                                "value": "Nemipterus",
                                                "label": "Nemipterus",
                                                "parentId": 184,
                                                "children": [
                                                    {
                                                        "id": 872,
                                                        "gmksz": "Nemipterus randalli",
                                                        "value": "Nemipterus randalli",
                                                        "label": "Nemipterus randalli",
                                                        "parentId": 414,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 59,
                                "gmksz": "Syngnathiformes",
                                "value": "Syngnathiformes",
                                "label": "Syngnathiformes",
                                "parentId": 5,
                                "children": [
                                    {
                                        "id": 158,
                                        "gmksz": "Mullidae",
                                        "value": "Mullidae",
                                        "label": "Mullidae",
                                        "parentId": 59,
                                        "children": [
                                            {
                                                "id": 342,
                                                "gmksz": "Mullus",
                                                "value": "Mullus",
                                                "label": "Mullus",
                                                "parentId": 158,
                                                "children": [
                                                    {
                                                        "id": 940,
                                                        "gmksz": "Mullus barbatus",
                                                        "value": "Mullus barbatus",
                                                        "label": "Mullus barbatus",
                                                        "parentId": 342,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 821,
                                                        "gmksz": "Mullus surmuletus",
                                                        "value": "Mullus surmuletus",
                                                        "label": "Mullus surmuletus",
                                                        "parentId": 342,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 3,
                        "gmksz": "Amphibia",
                        "value": "Amphibia",
                        "label": "Amphibia",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 30,
                                "gmksz": "Anura",
                                "value": "Anura",
                                "label": "Anura",
                                "parentId": 3,
                                "children": [
                                    {
                                        "id": 130,
                                        "gmksz": "Bombinatoridae",
                                        "value": "Bombinatoridae",
                                        "label": "Bombinatoridae",
                                        "parentId": 30,
                                        "children": [
                                            {
                                                "id": 302,
                                                "gmksz": "Bombina",
                                                "value": "Bombina",
                                                "label": "Bombina",
                                                "parentId": 130,
                                                "children": [
                                                    {
                                                        "id": 747,
                                                        "gmksz": "Bombina orientalis",
                                                        "value": "Bombina orientalis",
                                                        "label": "Bombina orientalis",
                                                        "parentId": 302,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 163,
                                        "gmksz": "Bufonidae",
                                        "value": "Bufonidae",
                                        "label": "Bufonidae",
                                        "parentId": 30,
                                        "children": [
                                            {
                                                "id": 580,
                                                "gmksz": "Bufotes",
                                                "value": "Bufotes",
                                                "label": "Bufotes",
                                                "parentId": 163,
                                                "children": [
                                                    {
                                                        "id": 1128,
                                                        "gmksz": "Bufotes viridis",
                                                        "value": "Bufotes viridis",
                                                        "label": "Bufotes viridis",
                                                        "parentId": 580,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 360,
                                                "gmksz": "Duttaphrynus",
                                                "value": "Duttaphrynus",
                                                "label": "Duttaphrynus",
                                                "parentId": 163,
                                                "children": [
                                                    {
                                                        "id": 815,
                                                        "gmksz": "Duttaphrynus melanostictus",
                                                        "value": "Duttaphrynus melanostictus",
                                                        "label": "Duttaphrynus melanostictus",
                                                        "parentId": 360,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 187,
                                        "gmksz": "Ptychadenidae",
                                        "value": "Ptychadenidae",
                                        "label": "Ptychadenidae",
                                        "parentId": 30,
                                        "children": [
                                            {
                                                "id": 425,
                                                "gmksz": "Ptychadena",
                                                "value": "Ptychadena",
                                                "label": "Ptychadena",
                                                "parentId": 187,
                                                "children": [
                                                    {
                                                        "id": 885,
                                                        "gmksz": "Ptychadena mascareniensis",
                                                        "value": "Ptychadena mascareniensis",
                                                        "label": "Ptychadena mascareniensis",
                                                        "parentId": 425,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 111,
                                        "gmksz": "Ranidae",
                                        "value": "Ranidae",
                                        "label": "Ranidae",
                                        "parentId": 30,
                                        "children": [
                                            {
                                                "id": 538,
                                                "gmksz": "Glandirana",
                                                "value": "Glandirana",
                                                "label": "Glandirana",
                                                "parentId": 111,
                                                "children": [
                                                    {
                                                        "id": 1057,
                                                        "gmksz": "Glandirana rugosa",
                                                        "value": "Glandirana rugosa",
                                                        "label": "Glandirana rugosa",
                                                        "parentId": 538,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 575,
                                                "gmksz": "Lithobates",
                                                "value": "Lithobates",
                                                "label": "Lithobates",
                                                "parentId": 111,
                                                "children": [
                                                    {
                                                        "id": 1117,
                                                        "gmksz": "Lithobates catesbeianus",
                                                        "value": "Lithobates catesbeianus",
                                                        "label": "Lithobates catesbeianus",
                                                        "parentId": 575,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 391,
                                                "gmksz": "Odorrana",
                                                "value": "Odorrana",
                                                "label": "Odorrana",
                                                "parentId": 111,
                                                "children": [
                                                    {
                                                        "id": 848,
                                                        "gmksz": "Odorrana splendida",
                                                        "value": "Odorrana splendida",
                                                        "label": "Odorrana splendida",
                                                        "parentId": 391,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 284,
                                                "gmksz": "Rana",
                                                "value": "Rana",
                                                "label": "Rana",
                                                "parentId": 111,
                                                "children": [
                                                    {
                                                        "id": 831,
                                                        "gmksz": "Rana dalmatina",
                                                        "value": "Rana dalmatina",
                                                        "label": "Rana dalmatina",
                                                        "parentId": 284,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 817,
                                                        "gmksz": "Rana japonica",
                                                        "value": "Rana japonica",
                                                        "label": "Rana japonica",
                                                        "parentId": 284,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 784,
                                                        "gmksz": "Rana spectabilis",
                                                        "value": "Rana spectabilis",
                                                        "label": "Rana spectabilis",
                                                        "parentId": 284,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 780,
                                                        "gmksz": "Rana temporaria",
                                                        "value": "Rana temporaria",
                                                        "label": "Rana temporaria",
                                                        "parentId": 284,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 27,
                                "gmksz": "Caudata",
                                "value": "Caudata",
                                "label": "Caudata",
                                "parentId": 3,
                                "children": [
                                    {
                                        "id": 146,
                                        "gmksz": "Ambystomatidae",
                                        "value": "Ambystomatidae",
                                        "label": "Ambystomatidae",
                                        "parentId": 27,
                                        "children": [
                                            {
                                                "id": 327,
                                                "gmksz": "Ambystoma",
                                                "value": "Ambystoma",
                                                "label": "Ambystoma",
                                                "parentId": 146,
                                                "children": [
                                                    {
                                                        "id": 774,
                                                        "gmksz": "Ambystoma rivulare",
                                                        "value": "Ambystoma rivulare",
                                                        "label": "Ambystoma rivulare",
                                                        "parentId": 327,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 137,
                                        "gmksz": "Cryptobranchidae",
                                        "value": "Cryptobranchidae",
                                        "label": "Cryptobranchidae",
                                        "parentId": 27,
                                        "children": [
                                            {
                                                "id": 305,
                                                "gmksz": "Andrias",
                                                "value": "Andrias",
                                                "label": "Andrias",
                                                "parentId": 137,
                                                "children": [
                                                    {
                                                        "id": 753,
                                                        "gmksz": "Andrias japonicus",
                                                        "value": "Andrias japonicus",
                                                        "label": "Andrias japonicus",
                                                        "parentId": 305,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 98,
                                        "gmksz": "Salamandridae",
                                        "value": "Salamandridae",
                                        "label": "Salamandridae",
                                        "parentId": 27,
                                        "children": [
                                            {
                                                "id": 351,
                                                "gmksz": "Cynops",
                                                "value": "Cynops",
                                                "label": "Cynops",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 799,
                                                        "gmksz": "Cynops pyrrhogaster",
                                                        "value": "Cynops pyrrhogaster",
                                                        "label": "Cynops pyrrhogaster",
                                                        "parentId": 351,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 380,
                                                "gmksz": "Echinotriton",
                                                "value": "Echinotriton",
                                                "label": "Echinotriton",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 836,
                                                        "gmksz": "Echinotriton andersoni",
                                                        "value": "Echinotriton andersoni",
                                                        "label": "Echinotriton andersoni",
                                                        "parentId": 380,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 303,
                                                "gmksz": "Ichthyosaura",
                                                "value": "Ichthyosaura",
                                                "label": "Ichthyosaura",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 748,
                                                        "gmksz": "Ichthyosaura alpestris",
                                                        "value": "Ichthyosaura alpestris",
                                                        "label": "Ichthyosaura alpestris",
                                                        "parentId": 303,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 281,
                                                "gmksz": "Lissotriton",
                                                "value": "Lissotriton",
                                                "label": "Lissotriton",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 979,
                                                        "gmksz": "Lissotriton helveticus",
                                                        "value": "Lissotriton helveticus",
                                                        "label": "Lissotriton helveticus",
                                                        "parentId": 281,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 718,
                                                        "gmksz": "Lissotriton vulgaris",
                                                        "value": "Lissotriton vulgaris",
                                                        "label": "Lissotriton vulgaris",
                                                        "parentId": 281,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 594,
                                                "gmksz": "Salamandra",
                                                "value": "Salamandra",
                                                "label": "Salamandra",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 1144,
                                                        "gmksz": "Salamandra atra",
                                                        "value": "Salamandra atra",
                                                        "label": "Salamandra atra",
                                                        "parentId": 594,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 576,
                                                "gmksz": "Taricha",
                                                "value": "Taricha",
                                                "label": "Taricha",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 1118,
                                                        "gmksz": "Taricha granulosa",
                                                        "value": "Taricha granulosa",
                                                        "label": "Taricha granulosa",
                                                        "parentId": 576,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 280,
                                                "gmksz": "Triturus",
                                                "value": "Triturus",
                                                "label": "Triturus",
                                                "parentId": 98,
                                                "children": [
                                                    {
                                                        "id": 716,
                                                        "gmksz": "Triturus cristatus",
                                                        "value": "Triturus cristatus",
                                                        "label": "Triturus cristatus",
                                                        "parentId": 280,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 9,
                        "gmksz": "Arachnida",
                        "value": "Arachnida",
                        "label": "Arachnida",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 61,
                                "gmksz": "Araneae",
                                "value": "Araneae",
                                "label": "Araneae",
                                "parentId": 9,
                                "children": [
                                    {
                                        "id": 178,
                                        "gmksz": "Theraphosidae",
                                        "value": "Theraphosidae",
                                        "label": "Theraphosidae",
                                        "parentId": 61,
                                        "children": [
                                            {
                                                "id": 443,
                                                "gmksz": "Lasiodora",
                                                "value": "Lasiodora",
                                                "label": "Lasiodora",
                                                "parentId": 178,
                                                "children": [
                                                    {
                                                        "id": 913,
                                                        "gmksz": "Lasiodora parahybana",
                                                        "value": "Lasiodora parahybana",
                                                        "label": "Lasiodora parahybana",
                                                        "parentId": 443,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 456,
                                                "gmksz": "Poecilotheria",
                                                "value": "Poecilotheria",
                                                "label": "Poecilotheria",
                                                "parentId": 178,
                                                "children": [
                                                    {
                                                        "id": 939,
                                                        "gmksz": "Poecilotheria regalis",
                                                        "value": "Poecilotheria regalis",
                                                        "label": "Poecilotheria regalis",
                                                        "parentId": 456,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 2,
                        "gmksz": "Aves",
                        "value": "Aves",
                        "label": "Aves",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 38,
                                "gmksz": "Accipitriformes",
                                "value": "Accipitriformes",
                                "label": "Accipitriformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 147,
                                        "gmksz": "Accipitridae",
                                        "value": "Accipitridae",
                                        "label": "Accipitridae",
                                        "parentId": 38,
                                        "children": [
                                            {
                                                "id": 347,
                                                "gmksz": "Accipiter",
                                                "value": "Accipiter",
                                                "label": "Accipiter",
                                                "parentId": 147,
                                                "children": [
                                                    {
                                                        "id": 803,
                                                        "gmksz": "Accipiter cooperii",
                                                        "value": "Accipiter cooperii",
                                                        "label": "Accipiter cooperii",
                                                        "parentId": 347,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1085,
                                                        "gmksz": "Accipiter nisus",
                                                        "value": "Accipiter nisus",
                                                        "label": "Accipiter nisus",
                                                        "parentId": 347,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 517,
                                                "gmksz": "Circus",
                                                "value": "Circus",
                                                "label": "Circus",
                                                "parentId": 147,
                                                "children": [
                                                    {
                                                        "id": 1029,
                                                        "gmksz": "Circus aeruginosus",
                                                        "value": "Circus aeruginosus",
                                                        "label": "Circus aeruginosus",
                                                        "parentId": 517,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 489,
                                                "gmksz": "Haliaeetus",
                                                "value": "Haliaeetus",
                                                "label": "Haliaeetus",
                                                "parentId": 147,
                                                "children": [
                                                    {
                                                        "id": 988,
                                                        "gmksz": "Haliaeetus albicilla",
                                                        "value": "Haliaeetus albicilla",
                                                        "label": "Haliaeetus albicilla",
                                                        "parentId": 489,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 122,
                                        "gmksz": "Cathartidae",
                                        "value": "Cathartidae",
                                        "label": "Cathartidae",
                                        "parentId": 38,
                                        "children": [
                                            {
                                                "id": 329,
                                                "gmksz": "Cathartes",
                                                "value": "Cathartes",
                                                "label": "Cathartes",
                                                "parentId": 122,
                                                "children": [
                                                    {
                                                        "id": 776,
                                                        "gmksz": "Cathartes aura",
                                                        "value": "Cathartes aura",
                                                        "label": "Cathartes aura",
                                                        "parentId": 329,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 322,
                                                "gmksz": "Coragyps",
                                                "value": "Coragyps",
                                                "label": "Coragyps",
                                                "parentId": 122,
                                                "children": [
                                                    {
                                                        "id": 769,
                                                        "gmksz": "Coragyps atratus",
                                                        "value": "Coragyps atratus",
                                                        "label": "Coragyps atratus",
                                                        "parentId": 322,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 32,
                                "gmksz": "Anseriformes",
                                "value": "Anseriformes",
                                "label": "Anseriformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 110,
                                        "gmksz": "Anatidae",
                                        "value": "Anatidae",
                                        "label": "Anatidae",
                                        "parentId": 32,
                                        "children": [
                                            {
                                                "id": 287,
                                                "gmksz": "Anas",
                                                "value": "Anas",
                                                "label": "Anas",
                                                "parentId": 110,
                                                "children": [
                                                    {
                                                        "id": 1141,
                                                        "gmksz": "Anas crecca",
                                                        "value": "Anas crecca",
                                                        "label": "Anas crecca",
                                                        "parentId": 287,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 726,
                                                        "gmksz": "Anas platyrhynchos",
                                                        "value": "Anas platyrhynchos",
                                                        "label": "Anas platyrhynchos",
                                                        "parentId": 287,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 332,
                                                "gmksz": "Anser",
                                                "value": "Anser",
                                                "label": "Anser",
                                                "parentId": 110,
                                                "children": [
                                                    {
                                                        "id": 1226,
                                                        "gmksz": "Anser albifrons",
                                                        "value": "Anser albifrons",
                                                        "label": "Anser albifrons",
                                                        "parentId": 332,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 897,
                                                        "gmksz": "Anser anser",
                                                        "value": "Anser anser",
                                                        "label": "Anser anser",
                                                        "parentId": 332,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 811,
                                                        "gmksz": "Anser cygnoides",
                                                        "value": "Anser cygnoides",
                                                        "label": "Anser cygnoides",
                                                        "parentId": 332,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1167,
                                                        "gmksz": "Anser indicus",
                                                        "value": "Anser indicus",
                                                        "label": "Anser indicus",
                                                        "parentId": 332,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 496,
                                                "gmksz": "Branta",
                                                "value": "Branta",
                                                "label": "Branta",
                                                "parentId": 110,
                                                "children": [
                                                    {
                                                        "id": 1183,
                                                        "gmksz": "Barnacle Goose",
                                                        "value": "Barnacle Goose",
                                                        "label": "Barnacle Goose",
                                                        "parentId": 496,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1027,
                                                        "gmksz": "Branta leucopsis",
                                                        "value": "Branta leucopsis",
                                                        "label": "Branta leucopsis",
                                                        "parentId": 496,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 568,
                                                "gmksz": "Cairina",
                                                "value": "Cairina",
                                                "label": "Cairina",
                                                "parentId": 110,
                                                "children": [
                                                    {
                                                        "id": 1105,
                                                        "gmksz": "Cairina moschata",
                                                        "value": "Cairina moschata",
                                                        "label": "Cairina moschata",
                                                        "parentId": 568,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 597,
                                                "gmksz": "Cygnus",
                                                "value": "Cygnus",
                                                "label": "Cygnus",
                                                "parentId": 110,
                                                "children": [
                                                    {
                                                        "id": 1147,
                                                        "gmksz": "Cygnus olor",
                                                        "value": "Cygnus olor",
                                                        "label": "Cygnus olor",
                                                        "parentId": 597,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 41,
                                "gmksz": "Apodiformes",
                                "value": "Apodiformes",
                                "label": "Apodiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 114,
                                        "gmksz": "Trochilidae",
                                        "value": "Trochilidae",
                                        "label": "Trochilidae",
                                        "parentId": 41,
                                        "children": [
                                            {
                                                "id": 286,
                                                "gmksz": "Archilochus",
                                                "value": "Archilochus",
                                                "label": "Archilochus",
                                                "parentId": 114,
                                                "children": [
                                                    {
                                                        "id": 724,
                                                        "gmksz": "Archilochus colubris",
                                                        "value": "Archilochus colubris",
                                                        "label": "Archilochus colubris",
                                                        "parentId": 286,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 82,
                                "gmksz": "Caprimulgiformes",
                                "value": "Caprimulgiformes",
                                "label": "Caprimulgiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 241,
                                        "gmksz": "Caprimulgidae",
                                        "value": "Caprimulgidae",
                                        "label": "Caprimulgidae",
                                        "parentId": 82,
                                        "children": [
                                            {
                                                "id": 584,
                                                "gmksz": "Caprimulgus",
                                                "value": "Caprimulgus",
                                                "label": "Caprimulgus",
                                                "parentId": 241,
                                                "children": [
                                                    {
                                                        "id": 1132,
                                                        "gmksz": "Caprimulgus europaeus",
                                                        "value": "Caprimulgus europaeus",
                                                        "label": "Caprimulgus europaeus",
                                                        "parentId": 584,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 74,
                                "gmksz": "Casuariiformes",
                                "value": "Casuariiformes",
                                "label": "Casuariiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 220,
                                        "gmksz": "Dromaiidae",
                                        "value": "Dromaiidae",
                                        "label": "Dromaiidae",
                                        "parentId": 74,
                                        "children": [
                                            {
                                                "id": 518,
                                                "gmksz": "Dromaius",
                                                "value": "Dromaius",
                                                "label": "Dromaius",
                                                "parentId": 220,
                                                "children": [
                                                    {
                                                        "id": 1030,
                                                        "gmksz": "Dromaius novaehollandiae",
                                                        "value": "Dromaius novaehollandiae",
                                                        "label": "Dromaius novaehollandiae",
                                                        "parentId": 518,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 35,
                                "gmksz": "Charadriiformes",
                                "value": "Charadriiformes",
                                "label": "Charadriiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 230,
                                        "gmksz": "Charadriidae",
                                        "value": "Charadriidae",
                                        "label": "Charadriidae",
                                        "parentId": 35,
                                        "children": [
                                            {
                                                "id": 546,
                                                "gmksz": "Charadrius",
                                                "value": "Charadrius",
                                                "label": "Charadrius",
                                                "parentId": 230,
                                                "children": [
                                                    {
                                                        "id": 1115,
                                                        "gmksz": "Charadrius bicinctus",
                                                        "value": "Charadrius bicinctus",
                                                        "label": "Charadrius bicinctus",
                                                        "parentId": 546,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1240,
                                                        "gmksz": "Charadrius ruficapillus",
                                                        "value": "Charadrius ruficapillus",
                                                        "label": "Charadrius ruficapillus",
                                                        "parentId": 546,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 222,
                                        "gmksz": "Haematopodidae",
                                        "value": "Haematopodidae",
                                        "label": "Haematopodidae",
                                        "parentId": 35,
                                        "children": [
                                            {
                                                "id": 527,
                                                "gmksz": "Haematopus",
                                                "value": "Haematopus",
                                                "label": "Haematopus",
                                                "parentId": 222,
                                                "children": [
                                                    {
                                                        "id": 1168,
                                                        "gmksz": "Haematopus fuliginosus",
                                                        "value": "Haematopus fuliginosus",
                                                        "label": "Haematopus fuliginosus",
                                                        "parentId": 527,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1116,
                                                        "gmksz": "Haematopus longirostris",
                                                        "value": "Haematopus longirostris",
                                                        "label": "Haematopus longirostris",
                                                        "parentId": 527,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 118,
                                        "gmksz": "Laridae",
                                        "value": "Laridae",
                                        "label": "Laridae",
                                        "parentId": 35,
                                        "children": [
                                            {
                                                "id": 427,
                                                "gmksz": "Chroicocephalus",
                                                "value": "Chroicocephalus",
                                                "label": "Chroicocephalus",
                                                "parentId": 118,
                                                "children": [
                                                    {
                                                        "id": 889,
                                                        "gmksz": "Chroicocephalus ridibundus",
                                                        "value": "Chroicocephalus ridibundus",
                                                        "label": "Chroicocephalus ridibundus",
                                                        "parentId": 427,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 300,
                                                "gmksz": "Larus",
                                                "value": "Larus",
                                                "label": "Larus",
                                                "parentId": 118,
                                                "children": [
                                                    {
                                                        "id": 745,
                                                        "gmksz": "Larus ridibundus",
                                                        "value": "Larus ridibundus",
                                                        "label": "Larus ridibundus",
                                                        "parentId": 300,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 526,
                                                "gmksz": "Sterna",
                                                "value": "Sterna",
                                                "label": "Sterna",
                                                "parentId": 118,
                                                "children": [
                                                    {
                                                        "id": 1041,
                                                        "gmksz": "Sterna bernsteini",
                                                        "value": "Sterna bernsteini",
                                                        "label": "Sterna bernsteini",
                                                        "parentId": 526,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 602,
                                                "gmksz": "Thalasseus",
                                                "value": "Thalasseus",
                                                "label": "Thalasseus",
                                                "parentId": 118,
                                                "children": [
                                                    {
                                                        "id": 1158,
                                                        "gmksz": "Thalasseus sandvicensis",
                                                        "value": "Thalasseus sandvicensis",
                                                        "label": "Thalasseus sandvicensis",
                                                        "parentId": 602,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 148,
                                        "gmksz": "Scolopacidae",
                                        "value": "Scolopacidae",
                                        "label": "Scolopacidae",
                                        "parentId": 35,
                                        "children": [
                                            {
                                                "id": 567,
                                                "gmksz": "Arenaria",
                                                "value": "Arenaria",
                                                "label": "Arenaria",
                                                "parentId": 148,
                                                "children": [
                                                    {
                                                        "id": 1104,
                                                        "gmksz": "Arenaria interpres",
                                                        "value": "Arenaria interpres",
                                                        "label": "Arenaria interpres",
                                                        "parentId": 567,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 454,
                                                "gmksz": "Calidris",
                                                "value": "Calidris",
                                                "label": "Calidris",
                                                "parentId": 148,
                                                "children": [
                                                    {
                                                        "id": 1239,
                                                        "gmksz": "Calidris alba",
                                                        "value": "Calidris alba",
                                                        "label": "Calidris alba",
                                                        "parentId": 454,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1177,
                                                        "gmksz": "Calidris alpina",
                                                        "value": "Calidris alpina",
                                                        "label": "Calidris alpina",
                                                        "parentId": 454,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1040,
                                                        "gmksz": "Calidris ferruginea",
                                                        "value": "Calidris ferruginea",
                                                        "label": "Calidris ferruginea",
                                                        "parentId": 454,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1157,
                                                        "gmksz": "Calidris pusilla",
                                                        "value": "Calidris pusilla",
                                                        "label": "Calidris pusilla",
                                                        "parentId": 454,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 376,
                                                "gmksz": "Limosa",
                                                "value": "Limosa",
                                                "label": "Limosa",
                                                "parentId": 148,
                                                "children": [
                                                    {
                                                        "id": 833,
                                                        "gmksz": "Limosa lapponica",
                                                        "value": "Limosa lapponica",
                                                        "label": "Limosa lapponica",
                                                        "parentId": 376,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 560,
                                                "gmksz": "Scolopax",
                                                "value": "Scolopax",
                                                "label": "Scolopax",
                                                "parentId": 148,
                                                "children": [
                                                    {
                                                        "id": 1097,
                                                        "gmksz": "Scolopax rusticola",
                                                        "value": "Scolopax rusticola",
                                                        "label": "Scolopax rusticola",
                                                        "parentId": 560,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 516,
                                                "gmksz": "Tringa",
                                                "value": "Tringa",
                                                "label": "Tringa",
                                                "parentId": 148,
                                                "children": [
                                                    {
                                                        "id": 1028,
                                                        "gmksz": "Tringa glareola",
                                                        "value": "Tringa glareola",
                                                        "label": "Tringa glareola",
                                                        "parentId": 516,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 72,
                                "gmksz": "Ciconiiformes",
                                "value": "Ciconiiformes",
                                "label": "Ciconiiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 215,
                                        "gmksz": "Ciconiidae",
                                        "value": "Ciconiidae",
                                        "label": "Ciconiidae",
                                        "parentId": 72,
                                        "children": [
                                            {
                                                "id": 509,
                                                "gmksz": "Ciconia",
                                                "value": "Ciconia",
                                                "label": "Ciconia",
                                                "parentId": 215,
                                                "children": [
                                                    {
                                                        "id": 1048,
                                                        "gmksz": "Ciconia ciconia",
                                                        "value": "Ciconia ciconia",
                                                        "label": "Ciconia ciconia",
                                                        "parentId": 509,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 63,
                                "gmksz": "Columbiformes",
                                "value": "Columbiformes",
                                "label": "Columbiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 183,
                                        "gmksz": "Columbidae",
                                        "value": "Columbidae",
                                        "label": "Columbidae",
                                        "parentId": 63,
                                        "children": [
                                            {
                                                "id": 412,
                                                "gmksz": "Columba",
                                                "value": "Columba",
                                                "label": "Columba",
                                                "parentId": 183,
                                                "children": [
                                                    {
                                                        "id": 870,
                                                        "gmksz": "Columba livia",
                                                        "value": "Columba livia",
                                                        "label": "Columba livia",
                                                        "parentId": 412,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 76,
                                "gmksz": "Cuculiformes",
                                "value": "Cuculiformes",
                                "label": "Cuculiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 225,
                                        "gmksz": "Cuculidae",
                                        "value": "Cuculidae",
                                        "label": "Cuculidae",
                                        "parentId": 76,
                                        "children": [
                                            {
                                                "id": 623,
                                                "gmksz": "Chalcites",
                                                "value": "Chalcites",
                                                "label": "Chalcites",
                                                "parentId": 225,
                                                "children": [
                                                    {
                                                        "id": 1198,
                                                        "gmksz": "Chalcites basalis",
                                                        "value": "Chalcites basalis",
                                                        "label": "Chalcites basalis",
                                                        "parentId": 623,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 622,
                                                "gmksz": "Chrysococcyx",
                                                "value": "Chrysococcyx",
                                                "label": "Chrysococcyx",
                                                "parentId": 225,
                                                "children": [
                                                    {
                                                        "id": 1197,
                                                        "gmksz": "Chrysococcyx basalis",
                                                        "value": "Chrysococcyx basalis",
                                                        "label": "Chrysococcyx basalis",
                                                        "parentId": 622,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 577,
                                                "gmksz": "Cuculus",
                                                "value": "Cuculus",
                                                "label": "Cuculus",
                                                "parentId": 225,
                                                "children": [
                                                    {
                                                        "id": 1125,
                                                        "gmksz": "Cuculus optatus",
                                                        "value": "Cuculus optatus",
                                                        "label": "Cuculus optatus",
                                                        "parentId": 577,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 68,
                                "gmksz": "Falconiformes",
                                "value": "Falconiformes",
                                "label": "Falconiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 205,
                                        "gmksz": "Falconidae",
                                        "value": "Falconidae",
                                        "label": "Falconidae",
                                        "parentId": 68,
                                        "children": [
                                            {
                                                "id": 479,
                                                "gmksz": "Falco",
                                                "value": "Falco",
                                                "label": "Falco",
                                                "parentId": 205,
                                                "children": [
                                                    {
                                                        "id": 971,
                                                        "gmksz": "Falco tinnunculus",
                                                        "value": "Falco tinnunculus",
                                                        "label": "Falco tinnunculus",
                                                        "parentId": 479,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 51,
                                "gmksz": "Galliformes",
                                "value": "Galliformes",
                                "label": "Galliformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 134,
                                        "gmksz": "Phasianidae",
                                        "value": "Phasianidae",
                                        "label": "Phasianidae",
                                        "parentId": 51,
                                        "children": [
                                            {
                                                "id": 460,
                                                "gmksz": "Gallus",
                                                "value": "Gallus",
                                                "label": "Gallus",
                                                "parentId": 134,
                                                "children": [
                                                    {
                                                        "id": 948,
                                                        "gmksz": "Gallus gallus",
                                                        "value": "Gallus gallus",
                                                        "label": "Gallus gallus",
                                                        "parentId": 460,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 328,
                                                "gmksz": "Lagopus",
                                                "value": "Lagopus",
                                                "label": "Lagopus",
                                                "parentId": 134,
                                                "children": [
                                                    {
                                                        "id": 775,
                                                        "gmksz": "Lagopus muta",
                                                        "value": "Lagopus muta",
                                                        "label": "Lagopus muta",
                                                        "parentId": 328,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 621,
                                                "gmksz": "Lyrurus",
                                                "value": "Lyrurus",
                                                "label": "Lyrurus",
                                                "parentId": 134,
                                                "children": [
                                                    {
                                                        "id": 1196,
                                                        "gmksz": "Lyrurus tetrix",
                                                        "value": "Lyrurus tetrix",
                                                        "label": "Lyrurus tetrix",
                                                        "parentId": 621,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 508,
                                                "gmksz": "Meleagris",
                                                "value": "Meleagris",
                                                "label": "Meleagris",
                                                "parentId": 134,
                                                "children": [
                                                    {
                                                        "id": 1016,
                                                        "gmksz": "Meleagris gallopavo",
                                                        "value": "Meleagris gallopavo",
                                                        "label": "Meleagris gallopavo",
                                                        "parentId": 508,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 503,
                                                "gmksz": "Phasianus",
                                                "value": "Phasianus",
                                                "label": "Phasianus",
                                                "parentId": 134,
                                                "children": [
                                                    {
                                                        "id": 1004,
                                                        "gmksz": "Phasianus colchicus",
                                                        "value": "Phasianus colchicus",
                                                        "label": "Phasianus colchicus",
                                                        "parentId": 503,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 60,
                                "gmksz": "Gruiformes",
                                "value": "Gruiformes",
                                "label": "Gruiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 176,
                                        "gmksz": "Gruidae",
                                        "value": "Gruidae",
                                        "label": "Gruidae",
                                        "parentId": 60,
                                        "children": [
                                            {
                                                "id": 390,
                                                "gmksz": "Grus",
                                                "value": "Grus",
                                                "label": "Grus",
                                                "parentId": 176,
                                                "children": [
                                                    {
                                                        "id": 846,
                                                        "gmksz": "Grus monacha",
                                                        "value": "Grus monacha",
                                                        "label": "Grus monacha",
                                                        "parentId": 390,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 246,
                                        "gmksz": "Rallidae",
                                        "value": "Rallidae",
                                        "label": "Rallidae",
                                        "parentId": 60,
                                        "children": [
                                            {
                                                "id": 618,
                                                "gmksz": "Rallus",
                                                "value": "Rallus",
                                                "label": "Rallus",
                                                "parentId": 246,
                                                "children": [
                                                    {
                                                        "id": 1193,
                                                        "gmksz": "Rallus aquaticus",
                                                        "value": "Rallus aquaticus",
                                                        "label": "Rallus aquaticus",
                                                        "parentId": 618,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 23,
                                "gmksz": "Passeriformes",
                                "value": "Passeriformes",
                                "label": "Passeriformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 243,
                                        "gmksz": "Acanthizidae",
                                        "value": "Acanthizidae",
                                        "label": "Acanthizidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 624,
                                                "gmksz": "Acanthiza",
                                                "value": "Acanthiza",
                                                "label": "Acanthiza",
                                                "parentId": 243,
                                                "children": [
                                                    {
                                                        "id": 1200,
                                                        "gmksz": "Acanthiza uropygialis",
                                                        "value": "Acanthiza uropygialis",
                                                        "label": "Acanthiza uropygialis",
                                                        "parentId": 624,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 625,
                                                "gmksz": "Hylacola",
                                                "value": "Hylacola",
                                                "label": "Hylacola",
                                                "parentId": 243,
                                                "children": [
                                                    {
                                                        "id": 1201,
                                                        "gmksz": "Hylacola cauta",
                                                        "value": "Hylacola cauta",
                                                        "label": "Hylacola cauta",
                                                        "parentId": 625,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 196,
                                        "gmksz": "Corvidae",
                                        "value": "Corvidae",
                                        "label": "Corvidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 465,
                                                "gmksz": "Corvus",
                                                "value": "Corvus",
                                                "label": "Corvus",
                                                "parentId": 196,
                                                "children": [
                                                    {
                                                        "id": 1135,
                                                        "gmksz": "Corvus corone",
                                                        "value": "Corvus corone",
                                                        "label": "Corvus corone",
                                                        "parentId": 465,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 993,
                                                        "gmksz": "Corvus frugilegus",
                                                        "value": "Corvus frugilegus",
                                                        "label": "Corvus frugilegus",
                                                        "parentId": 465,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 620,
                                                "gmksz": "Pica",
                                                "value": "Pica",
                                                "label": "Pica",
                                                "parentId": 196,
                                                "children": [
                                                    {
                                                        "id": 1195,
                                                        "gmksz": "Pica pica",
                                                        "value": "Pica pica",
                                                        "label": "Pica pica",
                                                        "parentId": 620,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 153,
                                        "gmksz": "Estrildidae",
                                        "value": "Estrildidae",
                                        "label": "Estrildidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 337,
                                                "gmksz": "Taeniopygia",
                                                "value": "Taeniopygia",
                                                "label": "Taeniopygia",
                                                "parentId": 153,
                                                "children": [
                                                    {
                                                        "id": 786,
                                                        "gmksz": "Taeniopygia guttata",
                                                        "value": "Taeniopygia guttata",
                                                        "label": "Taeniopygia guttata",
                                                        "parentId": 337,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 226,
                                        "gmksz": "Fringillidae",
                                        "value": "Fringillidae",
                                        "label": "Fringillidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 531,
                                                "gmksz": "Chloris",
                                                "value": "Chloris",
                                                "label": "Chloris",
                                                "parentId": 226,
                                                "children": [
                                                    {
                                                        "id": 1051,
                                                        "gmksz": "Chloris chloris",
                                                        "value": "Chloris chloris",
                                                        "label": "Chloris chloris",
                                                        "parentId": 531,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 99,
                                        "gmksz": "Hirundinidae",
                                        "value": "Hirundinidae",
                                        "label": "Hirundinidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 619,
                                                "gmksz": "Delichon",
                                                "value": "Delichon",
                                                "label": "Delichon",
                                                "parentId": 99,
                                                "children": [
                                                    {
                                                        "id": 1194,
                                                        "gmksz": "Delichon urbicum",
                                                        "value": "Delichon urbicum",
                                                        "label": "Delichon urbicum",
                                                        "parentId": 619,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 269,
                                                "gmksz": "Hirundo",
                                                "value": "Hirundo",
                                                "label": "Hirundo",
                                                "parentId": 99,
                                                "children": [
                                                    {
                                                        "id": 746,
                                                        "gmksz": "Barn Swallow",
                                                        "value": "Barn Swallow",
                                                        "label": "Barn Swallow",
                                                        "parentId": 269,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 707,
                                                        "gmksz": "Hirundo rustica",
                                                        "value": "Hirundo rustica",
                                                        "label": "Hirundo rustica",
                                                        "parentId": 269,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 105,
                                        "gmksz": "Paridae",
                                        "value": "Paridae",
                                        "label": "Paridae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 606,
                                                "gmksz": "Cyanistes",
                                                "value": "Cyanistes",
                                                "label": "Cyanistes",
                                                "parentId": 105,
                                                "children": [
                                                    {
                                                        "id": 1164,
                                                        "gmksz": "Cyanistes caeruleus",
                                                        "value": "Cyanistes caeruleus",
                                                        "label": "Cyanistes caeruleus",
                                                        "parentId": 606,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 273,
                                                "gmksz": "Parus",
                                                "value": "Parus",
                                                "label": "Parus",
                                                "parentId": 105,
                                                "children": [
                                                    {
                                                        "id": 709,
                                                        "gmksz": "Parus major",
                                                        "value": "Parus major",
                                                        "label": "Parus major",
                                                        "parentId": 273,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 139,
                                        "gmksz": "Parulidae",
                                        "value": "Parulidae",
                                        "label": "Parulidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 308,
                                                "gmksz": "Parkesia",
                                                "value": "Parkesia",
                                                "label": "Parkesia",
                                                "parentId": 139,
                                                "children": [
                                                    {
                                                        "id": 756,
                                                        "gmksz": "Parkesia motacilla",
                                                        "value": "Parkesia motacilla",
                                                        "label": "Parkesia motacilla",
                                                        "parentId": 308,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 123,
                                        "gmksz": "Passerellidae",
                                        "value": "Passerellidae",
                                        "label": "Passerellidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 296,
                                                "gmksz": "Zonotrichia",
                                                "value": "Zonotrichia",
                                                "label": "Zonotrichia",
                                                "parentId": 123,
                                                "children": [
                                                    {
                                                        "id": 739,
                                                        "gmksz": "Zonotrichia leucophrys",
                                                        "value": "Zonotrichia leucophrys",
                                                        "label": "Zonotrichia leucophrys",
                                                        "parentId": 296,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 164,
                                        "gmksz": "Passeridae",
                                        "value": "Passeridae",
                                        "label": "Passeridae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 361,
                                                "gmksz": "Passer",
                                                "value": "Passer",
                                                "label": "Passer",
                                                "parentId": 164,
                                                "children": [
                                                    {
                                                        "id": 816,
                                                        "gmksz": "Passer montanus",
                                                        "value": "Passer montanus",
                                                        "label": "Passer montanus",
                                                        "parentId": 361,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 590,
                                                "gmksz": "Prunella",
                                                "value": "Prunella",
                                                "label": "Prunella",
                                                "parentId": 164,
                                                "children": [
                                                    {
                                                        "id": 1139,
                                                        "gmksz": "Prunella modularis",
                                                        "value": "Prunella modularis",
                                                        "label": "Prunella modularis",
                                                        "parentId": 590,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 239,
                                        "gmksz": "Phylloscopidae",
                                        "value": "Phylloscopidae",
                                        "label": "Phylloscopidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 565,
                                                "gmksz": "Phylloscopus",
                                                "value": "Phylloscopus",
                                                "label": "Phylloscopus",
                                                "parentId": 239,
                                                "children": [
                                                    {
                                                        "id": 1102,
                                                        "gmksz": "Phylloscopus collybita",
                                                        "value": "Phylloscopus collybita",
                                                        "label": "Phylloscopus collybita",
                                                        "parentId": 565,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 202,
                                        "gmksz": "Sittidae",
                                        "value": "Sittidae",
                                        "label": "Sittidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 471,
                                                "gmksz": "Sitta",
                                                "value": "Sitta",
                                                "label": "Sitta",
                                                "parentId": 202,
                                                "children": [
                                                    {
                                                        "id": 961,
                                                        "gmksz": "Sitta europaea",
                                                        "value": "Sitta europaea",
                                                        "label": "Sitta europaea",
                                                        "parentId": 471,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 211,
                                        "gmksz": "Sylviidae",
                                        "value": "Sylviidae",
                                        "label": "Sylviidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 532,
                                                "gmksz": "Acrocephalus",
                                                "value": "Acrocephalus",
                                                "label": "Acrocephalus",
                                                "parentId": 211,
                                                "children": [
                                                    {
                                                        "id": 1052,
                                                        "gmksz": "Acrocephalus scirpaceus",
                                                        "value": "Acrocephalus scirpaceus",
                                                        "label": "Acrocephalus scirpaceus",
                                                        "parentId": 532,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 591,
                                                "gmksz": "Sylvia",
                                                "value": "Sylvia",
                                                "label": "Sylvia",
                                                "parentId": 211,
                                                "children": [
                                                    {
                                                        "id": 1140,
                                                        "gmksz": "Sylvia atricapilla",
                                                        "value": "Sylvia atricapilla",
                                                        "label": "Sylvia atricapilla",
                                                        "parentId": 591,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 252,
                                        "gmksz": "Thamnophilidae",
                                        "value": "Thamnophilidae",
                                        "label": "Thamnophilidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 640,
                                                "gmksz": "Sakesphorus",
                                                "value": "Sakesphorus",
                                                "label": "Sakesphorus",
                                                "parentId": 252,
                                                "children": [
                                                    {
                                                        "id": 1220,
                                                        "gmksz": "Sakesphorus cristatus",
                                                        "value": "Sakesphorus cristatus",
                                                        "label": "Sakesphorus cristatus",
                                                        "parentId": 640,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 253,
                                        "gmksz": "Thraupidae",
                                        "value": "Thraupidae",
                                        "label": "Thraupidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 641,
                                                "gmksz": "Coryphospingus",
                                                "value": "Coryphospingus",
                                                "label": "Coryphospingus",
                                                "parentId": 253,
                                                "children": [
                                                    {
                                                        "id": 1221,
                                                        "gmksz": "Coryphospingus pileatus",
                                                        "value": "Coryphospingus pileatus",
                                                        "label": "Coryphospingus pileatus",
                                                        "parentId": 641,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 218,
                                        "gmksz": "Turdidae",
                                        "value": "Turdidae",
                                        "label": "Turdidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 513,
                                                "gmksz": "Turdus",
                                                "value": "Turdus",
                                                "label": "Turdus",
                                                "parentId": 218,
                                                "children": [
                                                    {
                                                        "id": 1043,
                                                        "gmksz": "Turdus merula",
                                                        "value": "Turdus merula",
                                                        "label": "Turdus merula",
                                                        "parentId": 513,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1192,
                                                        "gmksz": "Turdus philomelos",
                                                        "value": "Turdus philomelos",
                                                        "label": "Turdus philomelos",
                                                        "parentId": 513,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 251,
                                        "gmksz": "Vireonidae",
                                        "value": "Vireonidae",
                                        "label": "Vireonidae",
                                        "parentId": 23,
                                        "children": [
                                            {
                                                "id": 639,
                                                "gmksz": "Hylophilus",
                                                "value": "Hylophilus",
                                                "label": "Hylophilus",
                                                "parentId": 251,
                                                "children": [
                                                    {
                                                        "id": 1219,
                                                        "gmksz": "Hylophilus amaurocephalus",
                                                        "value": "Hylophilus amaurocephalus",
                                                        "label": "Hylophilus amaurocephalus",
                                                        "parentId": 639,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 48,
                                "gmksz": "Pelecaniformes",
                                "value": "Pelecaniformes",
                                "label": "Pelecaniformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 141,
                                        "gmksz": "Ardeidae",
                                        "value": "Ardeidae",
                                        "label": "Ardeidae",
                                        "parentId": 48,
                                        "children": [
                                            {
                                                "id": 549,
                                                "gmksz": "Ardea",
                                                "value": "Ardea",
                                                "label": "Ardea",
                                                "parentId": 141,
                                                "children": [
                                                    {
                                                        "id": 1074,
                                                        "gmksz": "Ardea cinerea",
                                                        "value": "Ardea cinerea",
                                                        "label": "Ardea cinerea",
                                                        "parentId": 549,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 355,
                                                "gmksz": "Egretta",
                                                "value": "Egretta",
                                                "label": "Egretta",
                                                "parentId": 141,
                                                "children": [
                                                    {
                                                        "id": 807,
                                                        "gmksz": "Egretta garzetta",
                                                        "value": "Egretta garzetta",
                                                        "label": "Egretta garzetta",
                                                        "parentId": 355,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 383,
                                                "gmksz": "Nycticorax",
                                                "value": "Nycticorax",
                                                "label": "Nycticorax",
                                                "parentId": 141,
                                                "children": [
                                                    {
                                                        "id": 838,
                                                        "gmksz": "Nycticorax nycticorax",
                                                        "value": "Nycticorax nycticorax",
                                                        "label": "Nycticorax nycticorax",
                                                        "parentId": 383,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 167,
                                        "gmksz": "Phalacrocoracidae",
                                        "value": "Phalacrocoracidae",
                                        "label": "Phalacrocoracidae",
                                        "parentId": 48,
                                        "children": [
                                            {
                                                "id": 363,
                                                "gmksz": "Phalacrocorax",
                                                "value": "Phalacrocorax",
                                                "label": "Phalacrocorax",
                                                "parentId": 167,
                                                "children": [
                                                    {
                                                        "id": 818,
                                                        "gmksz": "Phalacrocorax carbo",
                                                        "value": "Phalacrocorax carbo",
                                                        "label": "Phalacrocorax carbo",
                                                        "parentId": 363,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 80,
                                "gmksz": "Piciformes",
                                "value": "Piciformes",
                                "label": "Piciformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 234,
                                        "gmksz": "Picidae",
                                        "value": "Picidae",
                                        "label": "Picidae",
                                        "parentId": 80,
                                        "children": [
                                            {
                                                "id": 616,
                                                "gmksz": "Dendrocopos",
                                                "value": "Dendrocopos",
                                                "label": "Dendrocopos",
                                                "parentId": 234,
                                                "children": null,
                                                "slots": null
                                            },
                                            {
                                                "id": 583,
                                                "gmksz": "Picoides",
                                                "value": "Picoides",
                                                "label": "Picoides",
                                                "parentId": 234,
                                                "children": [
                                                    {
                                                        "id": 1080,
                                                        "gmksz": "Dendrocopos major",
                                                        "value": "Dendrocopos major",
                                                        "label": "Dendrocopos major",
                                                        "parentId": 583,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 57,
                                "gmksz": "Procellariiformes",
                                "value": "Procellariiformes",
                                "label": "Procellariiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 149,
                                        "gmksz": "Hydrobatidae",
                                        "value": "Hydrobatidae",
                                        "label": "Hydrobatidae",
                                        "parentId": 57,
                                        "children": [
                                            {
                                                "id": 333,
                                                "gmksz": "Oceanodroma",
                                                "value": "Oceanodroma",
                                                "label": "Oceanodroma",
                                                "parentId": 149,
                                                "children": [
                                                    {
                                                        "id": 779,
                                                        "gmksz": "Oceanodroma leucorhoa",
                                                        "value": "Oceanodroma leucorhoa",
                                                        "label": "Oceanodroma leucorhoa",
                                                        "parentId": 333,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 81,
                                "gmksz": "Psittaciformes",
                                "value": "Psittaciformes",
                                "label": "Psittaciformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 236,
                                        "gmksz": "Cacatuidae",
                                        "value": "Cacatuidae",
                                        "label": "Cacatuidae",
                                        "parentId": 81,
                                        "children": [
                                            {
                                                "id": 555,
                                                "gmksz": "Eolophus",
                                                "value": "Eolophus",
                                                "label": "Eolophus",
                                                "parentId": 236,
                                                "children": [
                                                    {
                                                        "id": 1092,
                                                        "gmksz": "Eolophus roseicapilla",
                                                        "value": "Eolophus roseicapilla",
                                                        "label": "Eolophus roseicapilla",
                                                        "parentId": 555,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 70,
                                "gmksz": "Sphenisciformes",
                                "value": "Sphenisciformes",
                                "label": "Sphenisciformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 207,
                                        "gmksz": "Spheniscidae",
                                        "value": "Spheniscidae",
                                        "label": "Spheniscidae",
                                        "parentId": 70,
                                        "children": [
                                            {
                                                "id": 483,
                                                "gmksz": "Spheniscus",
                                                "value": "Spheniscus",
                                                "label": "Spheniscus",
                                                "parentId": 207,
                                                "children": [
                                                    {
                                                        "id": 1214,
                                                        "gmksz": "Spheniscus humboldti",
                                                        "value": "Spheniscus humboldti",
                                                        "label": "Spheniscus humboldti",
                                                        "parentId": 483,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1010,
                                                        "gmksz": "Spheniscus magellanicus",
                                                        "value": "Spheniscus magellanicus",
                                                        "label": "Spheniscus magellanicus",
                                                        "parentId": 483,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 37,
                                "gmksz": "Strigiformes",
                                "value": "Strigiformes",
                                "label": "Strigiformes",
                                "parentId": 2,
                                "children": [
                                    {
                                        "id": 125,
                                        "gmksz": "Strigidae",
                                        "value": "Strigidae",
                                        "label": "Strigidae",
                                        "parentId": 37,
                                        "children": [
                                            {
                                                "id": 536,
                                                "gmksz": "Asio",
                                                "value": "Asio",
                                                "label": "Asio",
                                                "parentId": 125,
                                                "children": [
                                                    {
                                                        "id": 1055,
                                                        "gmksz": "Asio otus",
                                                        "value": "Asio otus",
                                                        "label": "Asio otus",
                                                        "parentId": 536,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 330,
                                                "gmksz": "Bubo",
                                                "value": "Bubo",
                                                "label": "Bubo",
                                                "parentId": 125,
                                                "children": [
                                                    {
                                                        "id": 777,
                                                        "gmksz": "Bubo virginianus",
                                                        "value": "Bubo virginianus",
                                                        "label": "Bubo virginianus",
                                                        "parentId": 330,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 340,
                                                "gmksz": "Strix",
                                                "value": "Strix",
                                                "label": "Strix",
                                                "parentId": 125,
                                                "children": [
                                                    {
                                                        "id": 1103,
                                                        "gmksz": "Strix aluco",
                                                        "value": "Strix aluco",
                                                        "label": "Strix aluco",
                                                        "parentId": 340,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 997,
                                                        "gmksz": "Strix uralensis",
                                                        "value": "Strix uralensis",
                                                        "label": "Strix uralensis",
                                                        "parentId": 340,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 806,
                                                        "gmksz": "Strix varia",
                                                        "value": "Strix varia",
                                                        "label": "Strix varia",
                                                        "parentId": 340,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 143,
                                        "gmksz": "Tytonidae",
                                        "value": "Tytonidae",
                                        "label": "Tytonidae",
                                        "parentId": 37,
                                        "children": [
                                            {
                                                "id": 318,
                                                "gmksz": "Tyto",
                                                "value": "Tyto",
                                                "label": "Tyto",
                                                "parentId": 143,
                                                "children": [
                                                    {
                                                        "id": 765,
                                                        "gmksz": "Tyto alba",
                                                        "value": "Tyto alba",
                                                        "label": "Tyto alba",
                                                        "parentId": 318,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 8,
                        "gmksz": "Cephalopoda",
                        "value": "Cephalopoda",
                        "label": "Cephalopoda",
                        "parentId": 0,
                        "children": null,
                        "slots": null
                    },
                    {
                        "id": 7,
                        "gmksz": "Chondrichthyes",
                        "value": "Chondrichthyes",
                        "label": "Chondrichthyes",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 47,
                                "gmksz": "Carcharhiniformes",
                                "value": "Carcharhiniformes",
                                "label": "Carcharhiniformes",
                                "parentId": 7,
                                "children": [
                                    {
                                        "id": 124,
                                        "gmksz": "Carcharhinidae",
                                        "value": "Carcharhinidae",
                                        "label": "Carcharhinidae",
                                        "parentId": 47,
                                        "children": [
                                            {
                                                "id": 297,
                                                "gmksz": "Carcharhinus",
                                                "value": "Carcharhinus",
                                                "label": "Carcharhinus",
                                                "parentId": 124,
                                                "children": [
                                                    {
                                                        "id": 740,
                                                        "gmksz": "Carcharhinus melanopterus",
                                                        "value": "Carcharhinus melanopterus",
                                                        "label": "Carcharhinus melanopterus",
                                                        "parentId": 297,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 65,
                                "gmksz": "Myliobatiformes",
                                "value": "Myliobatiformes",
                                "label": "Myliobatiformes",
                                "parentId": 7,
                                "children": [
                                    {
                                        "id": 186,
                                        "gmksz": "Dasyatidae",
                                        "value": "Dasyatidae",
                                        "label": "Dasyatidae",
                                        "parentId": 65,
                                        "children": [
                                            {
                                                "id": 420,
                                                "gmksz": "Dasyatis",
                                                "value": "Dasyatis",
                                                "label": "Dasyatis",
                                                "parentId": 186,
                                                "children": [
                                                    {
                                                        "id": 879,
                                                        "gmksz": "Dasyatis akajei",
                                                        "value": "Dasyatis akajei",
                                                        "label": "Dasyatis akajei",
                                                        "parentId": 420,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 11,
                        "gmksz": "Echinoidea",
                        "value": "Echinoidea",
                        "label": "Echinoidea",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 75,
                                "gmksz": "Temnopleuroida",
                                "value": "Temnopleuroida",
                                "label": "Temnopleuroida",
                                "parentId": 11,
                                "children": [
                                    {
                                        "id": 221,
                                        "gmksz": "Toxopneustidae",
                                        "value": "Toxopneustidae",
                                        "label": "Toxopneustidae",
                                        "parentId": 75,
                                        "children": [
                                            {
                                                "id": 519,
                                                "gmksz": "Tripneustes",
                                                "value": "Tripneustes",
                                                "label": "Tripneustes",
                                                "parentId": 221,
                                                "children": [
                                                    {
                                                        "id": 1032,
                                                        "gmksz": "Tripneustes gratilla",
                                                        "value": "Tripneustes gratilla",
                                                        "label": "Tripneustes gratilla",
                                                        "parentId": 519,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 10,
                        "gmksz": "Gastropoda",
                        "value": "Gastropoda",
                        "label": "Gastropoda",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 62,
                                "gmksz": "Stylommatophora",
                                "value": "Stylommatophora",
                                "label": "Stylommatophora",
                                "parentId": 10,
                                "children": [
                                    {
                                        "id": 182,
                                        "gmksz": "Helicidae",
                                        "value": "Helicidae",
                                        "label": "Helicidae",
                                        "parentId": 62,
                                        "children": [
                                            {
                                                "id": 405,
                                                "gmksz": "Cornu",
                                                "value": "Cornu",
                                                "label": "Cornu",
                                                "parentId": 182,
                                                "children": [
                                                    {
                                                        "id": 862,
                                                        "gmksz": "Cornu aspersum",
                                                        "value": "Cornu aspersum",
                                                        "label": "Cornu aspersum",
                                                        "parentId": 405,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 4,
                        "gmksz": "Insecta",
                        "value": "Insecta",
                        "label": "Insecta",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 56,
                                "gmksz": "Blattodea",
                                "value": "Blattodea",
                                "label": "Blattodea",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 173,
                                        "gmksz": "Blattidae",
                                        "value": "Blattidae",
                                        "label": "Blattidae",
                                        "parentId": 56,
                                        "children": [
                                            {
                                                "id": 379,
                                                "gmksz": "Periplaneta",
                                                "value": "Periplaneta",
                                                "label": "Periplaneta",
                                                "parentId": 173,
                                                "children": [
                                                    {
                                                        "id": 835,
                                                        "gmksz": "Periplaneta americana",
                                                        "value": "Periplaneta americana",
                                                        "label": "Periplaneta americana",
                                                        "parentId": 379,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 175,
                                        "gmksz": "Ectobiidae",
                                        "value": "Ectobiidae",
                                        "label": "Ectobiidae",
                                        "parentId": 56,
                                        "children": [
                                            {
                                                "id": 387,
                                                "gmksz": "Blattella",
                                                "value": "Blattella",
                                                "label": "Blattella",
                                                "parentId": 175,
                                                "children": [
                                                    {
                                                        "id": 842,
                                                        "gmksz": "Blattella germanica",
                                                        "value": "Blattella germanica",
                                                        "label": "Blattella germanica",
                                                        "parentId": 387,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 46,
                                "gmksz": "Coleoptera",
                                "value": "Coleoptera",
                                "label": "Coleoptera",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 119,
                                        "gmksz": "Carabidae",
                                        "value": "Carabidae",
                                        "label": "Carabidae",
                                        "parentId": 46,
                                        "children": [
                                            {
                                                "id": 344,
                                                "gmksz": "Anisodactylus",
                                                "value": "Anisodactylus",
                                                "label": "Anisodactylus",
                                                "parentId": 119,
                                                "children": null,
                                                "slots": null
                                            },
                                            {
                                                "id": 343,
                                                "gmksz": "Brachirus",
                                                "value": "Brachirus",
                                                "label": "Brachirus",
                                                "parentId": 119,
                                                "children": [
                                                    {
                                                        "id": 792,
                                                        "gmksz": "Brachinus elongatulus",
                                                        "value": "Brachinus elongatulus",
                                                        "label": "Brachinus elongatulus",
                                                        "parentId": 343,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 346,
                                                "gmksz": "Pterostichus",
                                                "value": "Pterostichus",
                                                "label": "Pterostichus",
                                                "parentId": 119,
                                                "children": [
                                                    {
                                                        "id": 794,
                                                        "gmksz": "Pterostichus serripes",
                                                        "value": "Pterostichus serripes",
                                                        "label": "Pterostichus serripes",
                                                        "parentId": 346,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 79,
                                "gmksz": "Diptera",
                                "value": "Diptera",
                                "label": "Diptera",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 231,
                                        "gmksz": "Tephritidae",
                                        "value": "Tephritidae",
                                        "label": "Tephritidae",
                                        "parentId": 79,
                                        "children": [
                                            {
                                                "id": 547,
                                                "gmksz": "Zeugodacus",
                                                "value": "Zeugodacus",
                                                "label": "Zeugodacus",
                                                "parentId": 231,
                                                "children": [
                                                    {
                                                        "id": 1070,
                                                        "gmksz": "Zeugodacus cucurbitae",
                                                        "value": "Zeugodacus cucurbitae",
                                                        "label": "Zeugodacus cucurbitae",
                                                        "parentId": 547,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 34,
                                "gmksz": "Hemiptera",
                                "value": "Hemiptera",
                                "label": "Hemiptera",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 133,
                                        "gmksz": "Delphacidae",
                                        "value": "Delphacidae",
                                        "label": "Delphacidae",
                                        "parentId": 34,
                                        "children": [
                                            {
                                                "id": 304,
                                                "gmksz": "Laodelphax",
                                                "value": "Laodelphax",
                                                "label": "Laodelphax",
                                                "parentId": 133,
                                                "children": [
                                                    {
                                                        "id": 750,
                                                        "gmksz": "Laodelphax striatellus",
                                                        "value": "Laodelphax striatellus",
                                                        "label": "Laodelphax striatellus",
                                                        "parentId": 304,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 126,
                                        "gmksz": "Reduviidae",
                                        "value": "Reduviidae",
                                        "label": "Reduviidae",
                                        "parentId": 34,
                                        "children": [
                                            {
                                                "id": 652,
                                                "gmksz": "Rhodnius",
                                                "value": "Rhodnius",
                                                "label": "Rhodnius",
                                                "parentId": 126,
                                                "children": [
                                                    {
                                                        "id": 1237,
                                                        "gmksz": "Rhodnius prolixus",
                                                        "value": "Rhodnius prolixus",
                                                        "label": "Rhodnius prolixus",
                                                        "parentId": 652,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 298,
                                                "gmksz": "Triatoma",
                                                "value": "Triatoma",
                                                "label": "Triatoma",
                                                "parentId": 126,
                                                "children": [
                                                    {
                                                        "id": 781,
                                                        "gmksz": "Triatoma lecticularia",
                                                        "value": "Triatoma lecticularia",
                                                        "label": "Triatoma lecticularia",
                                                        "parentId": 298,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 778,
                                                        "gmksz": "Triatoma gerstaeckeri",
                                                        "value": "Triatoma gerstaeckeri",
                                                        "label": "Triatoma gerstaeckeri",
                                                        "parentId": 298,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 39,
                                "gmksz": "Hymenoptera",
                                "value": "Hymenoptera",
                                "label": "Hymenoptera",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 112,
                                        "gmksz": "Apidae",
                                        "value": "Apidae",
                                        "label": "Apidae",
                                        "parentId": 39,
                                        "children": [
                                            {
                                                "id": 283,
                                                "gmksz": "Bombus",
                                                "value": "Bombus",
                                                "label": "Bombus",
                                                "parentId": 112,
                                                "children": [
                                                    {
                                                        "id": 733,
                                                        "gmksz": "Bombus pascuorum",
                                                        "value": "Bombus pascuorum",
                                                        "label": "Bombus pascuorum",
                                                        "parentId": 283,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 790,
                                                        "gmksz": "Bombus terrestris",
                                                        "value": "Bombus terrestris",
                                                        "label": "Bombus terrestris",
                                                        "parentId": 283,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 29,
                                "gmksz": "Lepidoptera",
                                "value": "Lepidoptera",
                                "label": "Lepidoptera",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 172,
                                        "gmksz": "Heliconiinae",
                                        "value": "Heliconiinae",
                                        "label": "Heliconiinae",
                                        "parentId": 29,
                                        "children": [
                                            {
                                                "id": 371,
                                                "gmksz": "Heliconius",
                                                "value": "Heliconius",
                                                "label": "Heliconius",
                                                "parentId": 172,
                                                "children": [
                                                    {
                                                        "id": 918,
                                                        "gmksz": "Heliconius cydno",
                                                        "value": "Heliconius cydno",
                                                        "label": "Heliconius cydno",
                                                        "parentId": 371,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1064,
                                                        "gmksz": "Heliconius erato",
                                                        "value": "Heliconius erato",
                                                        "label": "Heliconius erato",
                                                        "parentId": 371,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 929,
                                                        "gmksz": "Heliconius sara",
                                                        "value": "Heliconius sara",
                                                        "label": "Heliconius sara",
                                                        "parentId": 371,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 191,
                                        "gmksz": "Hesperiidae",
                                        "value": "Hesperiidae",
                                        "label": "Hesperiidae",
                                        "parentId": 29,
                                        "children": [
                                            {
                                                "id": 643,
                                                "gmksz": "Hasora",
                                                "value": "Hasora",
                                                "label": "Hasora",
                                                "parentId": 191,
                                                "children": null,
                                                "slots": null
                                            },
                                            {
                                                "id": 644,
                                                "gmksz": "Jemadia",
                                                "value": "Jemadia",
                                                "label": "Jemadia",
                                                "parentId": 191,
                                                "children": [
                                                    {
                                                        "id": 1227,
                                                        "gmksz": "Jemadia pseudognetus",
                                                        "value": "Jemadia pseudognetus",
                                                        "label": "Jemadia pseudognetus",
                                                        "parentId": 644,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 645,
                                                "gmksz": "Pythonides",
                                                "value": "Pythonides",
                                                "label": "Pythonides",
                                                "parentId": 191,
                                                "children": [
                                                    {
                                                        "id": 1228,
                                                        "gmksz": "Pythonides jovianus",
                                                        "value": "Pythonides jovianus",
                                                        "label": "Pythonides jovianus",
                                                        "parentId": 645,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 459,
                                                "gmksz": "Urbanus",
                                                "value": "Urbanus",
                                                "label": "Urbanus",
                                                "parentId": 191,
                                                "children": [
                                                    {
                                                        "id": 944,
                                                        "gmksz": "Urbanus teleus",
                                                        "value": "Urbanus teleus",
                                                        "label": "Urbanus teleus",
                                                        "parentId": 459,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 208,
                                        "gmksz": "Lycaenidae",
                                        "value": "Lycaenidae",
                                        "label": "Lycaenidae",
                                        "parentId": 29,
                                        "children": [
                                            {
                                                "id": 485,
                                                "gmksz": "Arawacus",
                                                "value": "Arawacus",
                                                "label": "Arawacus",
                                                "parentId": 208,
                                                "children": [
                                                    {
                                                        "id": 980,
                                                        "gmksz": "Arawacus togarna",
                                                        "value": "Arawacus togarna",
                                                        "label": "Arawacus togarna",
                                                        "parentId": 485,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 107,
                                        "gmksz": "Nymphalidae",
                                        "value": "Nymphalidae",
                                        "label": "Nymphalidae",
                                        "parentId": 29,
                                        "children": [
                                            {
                                                "id": 506,
                                                "gmksz": "Adelpha",
                                                "value": "Adelpha",
                                                "label": "Adelpha",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1014,
                                                        "gmksz": "Adelpha cytherea",
                                                        "value": "Adelpha cytherea",
                                                        "label": "Adelpha cytherea",
                                                        "parentId": 506,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 439,
                                                "gmksz": "Aeria",
                                                "value": "Aeria",
                                                "label": "Aeria",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 909,
                                                        "gmksz": "Aeria eurimedia",
                                                        "value": "Aeria eurimedia",
                                                        "label": "Aeria eurimedia",
                                                        "parentId": 439,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 450,
                                                "gmksz": "Anartia",
                                                "value": "Anartia",
                                                "label": "Anartia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 930,
                                                        "gmksz": "Anartia fatima",
                                                        "value": "Anartia fatima",
                                                        "label": "Anartia fatima",
                                                        "parentId": 450,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 573,
                                                "gmksz": "Antirrhea",
                                                "value": "Antirrhea",
                                                "label": "Antirrhea",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1111,
                                                        "gmksz": "Antirrhea philoctetes",
                                                        "value": "Antirrhea philoctetes",
                                                        "label": "Antirrhea philoctetes",
                                                        "parentId": 573,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 472,
                                                "gmksz": "Archaeoprepona",
                                                "value": "Archaeoprepona",
                                                "label": "Archaeoprepona",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 963,
                                                        "gmksz": "Archaeoprepona demophon",
                                                        "value": "Archaeoprepona demophon",
                                                        "label": "Archaeoprepona demophon",
                                                        "parentId": 472,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 356,
                                                "gmksz": "Caligo",
                                                "value": "Caligo",
                                                "label": "Caligo",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 882,
                                                        "gmksz": "Caligo atreus",
                                                        "value": "Caligo atreus",
                                                        "label": "Caligo atreus",
                                                        "parentId": 356,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 931,
                                                        "gmksz": "Caligo brasiliensis",
                                                        "value": "Caligo brasiliensis",
                                                        "label": "Caligo brasiliensis",
                                                        "parentId": 356,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1011,
                                                        "gmksz": "Caligo illioneus",
                                                        "value": "Caligo illioneus",
                                                        "label": "Caligo illioneus",
                                                        "parentId": 356,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 646,
                                                "gmksz": "Catoblepia",
                                                "value": "Catoblepia",
                                                "label": "Catoblepia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1230,
                                                        "gmksz": "Catoblepia orgetorix",
                                                        "value": "Catoblepia orgetorix",
                                                        "label": "Catoblepia orgetorix",
                                                        "parentId": 646,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 395,
                                                "gmksz": "Chlosyne",
                                                "value": "Chlosyne",
                                                "label": "Chlosyne",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 854,
                                                        "gmksz": "Chlosyne gaudialis",
                                                        "value": "Chlosyne gaudialis",
                                                        "label": "Chlosyne gaudialis",
                                                        "parentId": 395,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 384,
                                                "gmksz": "Cissia",
                                                "value": "Cissia",
                                                "label": "Cissia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 853,
                                                        "gmksz": "Cissia terrestris",
                                                        "value": "Cissia terrestris",
                                                        "label": "Cissia terrestris",
                                                        "parentId": 384,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 438,
                                                "gmksz": "Cithaerias",
                                                "value": "Cithaerias",
                                                "label": "Cithaerias",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 908,
                                                        "gmksz": "Cithaerias pireta",
                                                        "value": "Cithaerias pireta",
                                                        "label": "Cithaerias pireta",
                                                        "parentId": 438,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 608,
                                                "gmksz": "Colobura",
                                                "value": "Colobura",
                                                "label": "Colobura",
                                                "parentId": 107,
                                                "children": null,
                                                "slots": null
                                            },
                                            {
                                                "id": 544,
                                                "gmksz": "Dryas",
                                                "value": "Dryas",
                                                "label": "Dryas",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1066,
                                                        "gmksz": "Dryas iulia",
                                                        "value": "Dryas iulia",
                                                        "label": "Dryas iulia",
                                                        "parentId": 544,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 504,
                                                "gmksz": "Dulcedo",
                                                "value": "Dulcedo",
                                                "label": "Dulcedo",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1012,
                                                        "gmksz": "Dulcedo polita",
                                                        "value": "Dulcedo polita",
                                                        "label": "Dulcedo polita",
                                                        "parentId": 504,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 507,
                                                "gmksz": "Euptychia",
                                                "value": "Euptychia",
                                                "label": "Euptychia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1015,
                                                        "gmksz": "Euptychia westwoodi",
                                                        "value": "Euptychia westwoodi",
                                                        "label": "Euptychia westwoodi",
                                                        "parentId": 507,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 647,
                                                "gmksz": "Hamadryas",
                                                "value": "Hamadryas",
                                                "label": "Hamadryas",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1231,
                                                        "gmksz": "Hamadryas feronia",
                                                        "value": "Hamadryas feronia",
                                                        "label": "Hamadryas feronia",
                                                        "parentId": 647,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 607,
                                                "gmksz": "Hypoleria",
                                                "value": "Hypoleria",
                                                "label": "Hypoleria",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1165,
                                                        "gmksz": "Hypoleria lavinia",
                                                        "value": "Hypoleria lavinia",
                                                        "label": "Hypoleria lavinia",
                                                        "parentId": 607,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 416,
                                                "gmksz": "Marpesia",
                                                "value": "Marpesia",
                                                "label": "Marpesia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1065,
                                                        "gmksz": "Marpesia chiron",
                                                        "value": "Marpesia chiron",
                                                        "label": "Marpesia chiron",
                                                        "parentId": 416,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1039,
                                                        "gmksz": "Marpesia merops",
                                                        "value": "Marpesia merops",
                                                        "label": "Marpesia merops",
                                                        "parentId": 416,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 981,
                                                        "gmksz": "Marpesia petreus",
                                                        "value": "Marpesia petreus",
                                                        "label": "Marpesia petreus",
                                                        "parentId": 416,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 451,
                                                "gmksz": "Mechanitis",
                                                "value": "Mechanitis",
                                                "label": "Mechanitis",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1233,
                                                        "gmksz": "Mechanitis lysimnia",
                                                        "value": "Mechanitis lysimnia",
                                                        "label": "Mechanitis lysimnia",
                                                        "parentId": 451,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 943,
                                                        "gmksz": "Mechanitis polymnia",
                                                        "value": "Mechanitis polymnia",
                                                        "label": "Mechanitis polymnia",
                                                        "parentId": 451,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 609,
                                                "gmksz": "Nessaea",
                                                "value": "Nessaea",
                                                "label": "Nessaea",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1166,
                                                        "gmksz": "Nessaea aglaura",
                                                        "value": "Nessaea aglaura",
                                                        "label": "Nessaea aglaura",
                                                        "parentId": 609,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 486,
                                                "gmksz": "Opsiphanes",
                                                "value": "Opsiphanes",
                                                "label": "Opsiphanes",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1232,
                                                        "gmksz": "Opsiphanes bogotanus",
                                                        "value": "Opsiphanes bogotanus",
                                                        "label": "Opsiphanes bogotanus",
                                                        "parentId": 486,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1112,
                                                        "gmksz": "Opsiphanes cassina",
                                                        "value": "Opsiphanes cassina",
                                                        "label": "Opsiphanes cassina",
                                                        "parentId": 486,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 525,
                                                "gmksz": "Pareuptychia",
                                                "value": "Pareuptychia",
                                                "label": "Pareuptychia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1038,
                                                        "gmksz": "Pareuptychia ocirrhoe",
                                                        "value": "Pareuptychia ocirrhoe",
                                                        "label": "Pareuptychia ocirrhoe",
                                                        "parentId": 525,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 428,
                                                "gmksz": "Pierella",
                                                "value": "Pierella",
                                                "label": "Pierella",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 893,
                                                        "gmksz": "Pierella helvina",
                                                        "value": "Pierella helvina",
                                                        "label": "Pierella helvina",
                                                        "parentId": 428,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1229,
                                                        "gmksz": "Pierella luna",
                                                        "value": "Pierella luna",
                                                        "label": "Pierella luna",
                                                        "parentId": 428,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 648,
                                                "gmksz": "Prepona",
                                                "value": "Prepona",
                                                "label": "Prepona",
                                                "parentId": 107,
                                                "children": null,
                                                "slots": null
                                            },
                                            {
                                                "id": 445,
                                                "gmksz": "Pseudodebis",
                                                "value": "Pseudodebis",
                                                "label": "Pseudodebis",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 919,
                                                        "gmksz": "Pseudodebis zimri",
                                                        "value": "Pseudodebis zimri",
                                                        "label": "Pseudodebis zimri",
                                                        "parentId": 445,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 651,
                                                "gmksz": "Siproeta",
                                                "value": "Siproeta",
                                                "label": "Siproeta",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1235,
                                                        "gmksz": "Siproeta epaphus",
                                                        "value": "Siproeta epaphus",
                                                        "label": "Siproeta epaphus",
                                                        "parentId": 651,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 411,
                                                "gmksz": "Taygetis",
                                                "value": "Taygetis",
                                                "label": "Taygetis",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 869,
                                                        "gmksz": "Taygetis laches",
                                                        "value": "Taygetis laches",
                                                        "label": "Taygetis laches",
                                                        "parentId": 411,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 650,
                                                "gmksz": "Tigridia",
                                                "value": "Tigridia",
                                                "label": "Tigridia",
                                                "parentId": 107,
                                                "children": [
                                                    {
                                                        "id": 1234,
                                                        "gmksz": "Tigridia acesta",
                                                        "value": "Tigridia acesta",
                                                        "label": "Tigridia acesta",
                                                        "parentId": 650,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 254,
                                        "gmksz": "Papilionidae",
                                        "value": "Papilionidae",
                                        "label": "Papilionidae",
                                        "parentId": 29,
                                        "children": [
                                            {
                                                "id": 649,
                                                "gmksz": "Parides",
                                                "value": "Parides",
                                                "label": "Parides",
                                                "parentId": 254,
                                                "children": null,
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 171,
                                        "gmksz": "Pieridae",
                                        "value": "Pieridae",
                                        "label": "Pieridae",
                                        "parentId": 29,
                                        "children": [
                                            {
                                                "id": 524,
                                                "gmksz": "Aphrissa",
                                                "value": "Aphrissa",
                                                "label": "Aphrissa",
                                                "parentId": 171,
                                                "children": [
                                                    {
                                                        "id": 1037,
                                                        "gmksz": "Aphrissa boisduvalii",
                                                        "value": "Aphrissa boisduvalii",
                                                        "label": "Aphrissa boisduvalii",
                                                        "parentId": 524,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 523,
                                                "gmksz": "Eurema",
                                                "value": "Eurema",
                                                "label": "Eurema",
                                                "parentId": 171,
                                                "children": [
                                                    {
                                                        "id": 1036,
                                                        "gmksz": "Eurema albula",
                                                        "value": "Eurema albula",
                                                        "label": "Eurema albula",
                                                        "parentId": 523,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 452,
                                                "gmksz": "Phoebis",
                                                "value": "Phoebis",
                                                "label": "Phoebis",
                                                "parentId": 171,
                                                "children": [
                                                    {
                                                        "id": 932,
                                                        "gmksz": "Phoebis argante",
                                                        "value": "Phoebis argante",
                                                        "label": "Phoebis argante",
                                                        "parentId": 452,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 505,
                                                "gmksz": "Pyrisitia",
                                                "value": "Pyrisitia",
                                                "label": "Pyrisitia",
                                                "parentId": 171,
                                                "children": [
                                                    {
                                                        "id": 1013,
                                                        "gmksz": "Pyrisitia nise",
                                                        "value": "Pyrisitia nise",
                                                        "label": "Pyrisitia nise",
                                                        "parentId": 505,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 49,
                                "gmksz": "Odonata",
                                "value": "Odonata",
                                "label": "Odonata",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 131,
                                        "gmksz": "Libellulidae",
                                        "value": "Libellulidae",
                                        "label": "Libellulidae",
                                        "parentId": 49,
                                        "children": [
                                            {
                                                "id": 331,
                                                "gmksz": "Orthetrum",
                                                "value": "Orthetrum",
                                                "label": "Orthetrum",
                                                "parentId": 131,
                                                "children": [
                                                    {
                                                        "id": 840,
                                                        "gmksz": "Orthetrum pruinosum",
                                                        "value": "Orthetrum pruinosum",
                                                        "label": "Orthetrum pruinosum",
                                                        "parentId": 331,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 825,
                                                        "gmksz": "Orthetrum sabina",
                                                        "value": "Orthetrum sabina",
                                                        "label": "Orthetrum sabina",
                                                        "parentId": 331,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 385,
                                                "gmksz": "Pantala",
                                                "value": "Pantala",
                                                "label": "Pantala",
                                                "parentId": 131,
                                                "children": [
                                                    {
                                                        "id": 839,
                                                        "gmksz": "Pantala flavescens",
                                                        "value": "Pantala flavescens",
                                                        "label": "Pantala flavescens",
                                                        "parentId": 385,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 572,
                                                "gmksz": "Trithemis",
                                                "value": "Trithemis",
                                                "label": "Trithemis",
                                                "parentId": 131,
                                                "children": [
                                                    {
                                                        "id": 1110,
                                                        "gmksz": "Trithemis aurora",
                                                        "value": "Trithemis aurora",
                                                        "label": "Trithemis aurora",
                                                        "parentId": 572,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 604,
                                                "gmksz": "Urothemis",
                                                "value": "Urothemis",
                                                "label": "Urothemis",
                                                "parentId": 131,
                                                "children": [
                                                    {
                                                        "id": 1161,
                                                        "gmksz": "Urothemis signata",
                                                        "value": "Urothemis signata",
                                                        "label": "Urothemis signata",
                                                        "parentId": 604,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 571,
                                                "gmksz": "Zygonyx",
                                                "value": "Zygonyx",
                                                "label": "Zygonyx",
                                                "parentId": 131,
                                                "children": [
                                                    {
                                                        "id": 1109,
                                                        "gmksz": "Zygonyx iris",
                                                        "value": "Zygonyx iris",
                                                        "label": "Zygonyx iris",
                                                        "parentId": 571,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 52,
                                "gmksz": "Siphonaptera",
                                "value": "Siphonaptera",
                                "label": "Siphonaptera",
                                "parentId": 4,
                                "children": [
                                    {
                                        "id": 140,
                                        "gmksz": "Pulicidae",
                                        "value": "Pulicidae",
                                        "label": "Pulicidae",
                                        "parentId": 52,
                                        "children": [
                                            {
                                                "id": 313,
                                                "gmksz": "Synosternus",
                                                "value": "Synosternus",
                                                "label": "Synosternus",
                                                "parentId": 140,
                                                "children": [
                                                    {
                                                        "id": 761,
                                                        "gmksz": "Synosternus cleopatrae ",
                                                        "value": "Synosternus cleopatrae ",
                                                        "label": "Synosternus cleopatrae ",
                                                        "parentId": 313,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 1,
                        "gmksz": "Mammalia",
                        "value": "Mammalia",
                        "label": "Mammalia",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 22,
                                "gmksz": "Artiodactyla",
                                "value": "Artiodactyla",
                                "label": "Artiodactyla",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 168,
                                        "gmksz": "Balaenopteridae",
                                        "value": "Balaenopteridae",
                                        "label": "Balaenopteridae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 364,
                                                "gmksz": "Balaenoptera",
                                                "value": "Balaenoptera",
                                                "label": "Balaenoptera",
                                                "parentId": 168,
                                                "children": [
                                                    {
                                                        "id": 1084,
                                                        "gmksz": "Balaenoptera acutorostrata",
                                                        "value": "Balaenoptera acutorostrata",
                                                        "label": "Balaenoptera acutorostrata",
                                                        "parentId": 364,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 975,
                                                        "gmksz": "Balaenoptera borealis",
                                                        "value": "Balaenoptera borealis",
                                                        "label": "Balaenoptera borealis",
                                                        "parentId": 364,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1238,
                                                        "gmksz": "Balaenoptera musculus",
                                                        "value": "Balaenoptera musculus",
                                                        "label": "Balaenoptera musculus",
                                                        "parentId": 364,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 866,
                                                        "gmksz": "Balaenoptera physalus",
                                                        "value": "Balaenoptera physalus",
                                                        "label": "Balaenoptera physalus",
                                                        "parentId": 364,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 94,
                                        "gmksz": "Bovidae",
                                        "value": "Bovidae",
                                        "label": "Bovidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 417,
                                                "gmksz": "Aepyceros",
                                                "value": "Aepyceros",
                                                "label": "Aepyceros",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 876,
                                                        "gmksz": "Aepyceros melampus",
                                                        "value": "Aepyceros melampus",
                                                        "label": "Aepyceros melampus",
                                                        "parentId": 417,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 458,
                                                "gmksz": "Ammotragus",
                                                "value": "Ammotragus",
                                                "label": "Ammotragus",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 942,
                                                        "gmksz": "Ammotragus lervia",
                                                        "value": "Ammotragus lervia",
                                                        "label": "Ammotragus lervia",
                                                        "parentId": 458,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 381,
                                                "gmksz": "Antidorcas",
                                                "value": "Antidorcas",
                                                "label": "Antidorcas",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 837,
                                                        "gmksz": "Antidorcas marsupialis",
                                                        "value": "Antidorcas marsupialis",
                                                        "label": "Antidorcas marsupialis",
                                                        "parentId": 381,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 312,
                                                "gmksz": "Bos",
                                                "value": "Bos",
                                                "label": "Bos",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1034,
                                                        "gmksz": "Bos frontalis",
                                                        "value": "Bos frontalis",
                                                        "label": "Bos frontalis",
                                                        "parentId": 312,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1123,
                                                        "gmksz": "Bos gaurus",
                                                        "value": "Bos gaurus",
                                                        "label": "Bos gaurus",
                                                        "parentId": 312,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 768,
                                                        "gmksz": "Bos taurus",
                                                        "value": "Bos taurus",
                                                        "label": "Bos taurus",
                                                        "parentId": 312,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 432,
                                                "gmksz": "Budorcas",
                                                "value": "Budorcas",
                                                "label": "Budorcas",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 895,
                                                        "gmksz": "Budorcas taxicolor",
                                                        "value": "Budorcas taxicolor",
                                                        "label": "Budorcas taxicolor",
                                                        "parentId": 432,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 401,
                                                "gmksz": "Bufo",
                                                "value": "Bufo",
                                                "label": "Bufo",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 884,
                                                        "gmksz": "Bufo japonicus",
                                                        "value": "Bufo japonicus",
                                                        "label": "Bufo japonicus",
                                                        "parentId": 401,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1046,
                                                        "gmksz": "Bufo bufo",
                                                        "value": "Bufo bufo",
                                                        "label": "Bufo bufo",
                                                        "parentId": 401,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 368,
                                                "gmksz": "Capra",
                                                "value": "Capra",
                                                "label": "Capra",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1009,
                                                        "gmksz": "Capra aegagrus",
                                                        "value": "Capra aegagrus",
                                                        "label": "Capra aegagrus",
                                                        "parentId": 368,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 937,
                                                        "gmksz": "Capra hircus",
                                                        "value": "Capra hircus",
                                                        "label": "Capra hircus",
                                                        "parentId": 368,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 911,
                                                        "gmksz": "Capra ibex",
                                                        "value": "Capra ibex",
                                                        "label": "Capra ibex",
                                                        "parentId": 368,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 413,
                                                "gmksz": "Connochaetes",
                                                "value": "Connochaetes",
                                                "label": "Connochaetes",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1174,
                                                        "gmksz": "Connochaetes gnou",
                                                        "value": "Connochaetes gnou",
                                                        "label": "Connochaetes gnou",
                                                        "parentId": 413,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 877,
                                                        "gmksz": "Connochaetes taurinus",
                                                        "value": "Connochaetes taurinus",
                                                        "label": "Connochaetes taurinus",
                                                        "parentId": 413,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 626,
                                                "gmksz": "Eudorcas",
                                                "value": "Eudorcas",
                                                "label": "Eudorcas",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1203,
                                                        "gmksz": "Eudorcas thomsonii",
                                                        "value": "Eudorcas thomsonii",
                                                        "label": "Eudorcas thomsonii",
                                                        "parentId": 626,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 533,
                                                "gmksz": "Gazella",
                                                "value": "Gazella",
                                                "label": "Gazella",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1199,
                                                        "gmksz": "Gazella bennettii",
                                                        "value": "Gazella bennettii",
                                                        "label": "Gazella bennettii",
                                                        "parentId": 533,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1079,
                                                        "gmksz": "Gazella subgutturosa",
                                                        "value": "Gazella subgutturosa",
                                                        "label": "Gazella subgutturosa",
                                                        "parentId": 533,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 447,
                                                "gmksz": "Hippotragus",
                                                "value": "Hippotragus",
                                                "label": "Hippotragus",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1173,
                                                        "gmksz": "Hippotragus equinus",
                                                        "value": "Hippotragus equinus",
                                                        "label": "Hippotragus equinus",
                                                        "parentId": 447,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 936,
                                                        "gmksz": "Hippotragus niger",
                                                        "value": "Hippotragus niger",
                                                        "label": "Hippotragus niger",
                                                        "parentId": 447,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 334,
                                                "gmksz": "Oreamnos",
                                                "value": "Oreamnos",
                                                "label": "Oreamnos",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 782,
                                                        "gmksz": "Oreamnos americanus",
                                                        "value": "Oreamnos americanus",
                                                        "label": "Oreamnos americanus",
                                                        "parentId": 334,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 628,
                                                "gmksz": "Oryx",
                                                "value": "Oryx",
                                                "label": "Oryx",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1205,
                                                        "gmksz": "Oryx dammah",
                                                        "value": "Oryx dammah",
                                                        "label": "Oryx dammah",
                                                        "parentId": 628,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 455,
                                                "gmksz": "Ovis",
                                                "value": "Ovis",
                                                "label": "Ovis",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 938,
                                                        "gmksz": "Ovis aries",
                                                        "value": "Ovis aries",
                                                        "label": "Ovis aries",
                                                        "parentId": 455,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 512,
                                                "gmksz": "Rupicapra",
                                                "value": "Rupicapra",
                                                "label": "Rupicapra",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1022,
                                                        "gmksz": "Rupicapra rupicapra",
                                                        "value": "Rupicapra rupicapra",
                                                        "label": "Rupicapra rupicapra",
                                                        "parentId": 512,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 268,
                                                "gmksz": "Syncerus",
                                                "value": "Syncerus",
                                                "label": "Syncerus",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 705,
                                                        "gmksz": "Syncerus caffer",
                                                        "value": "Syncerus caffer",
                                                        "label": "Syncerus caffer",
                                                        "parentId": 268,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 444,
                                                "gmksz": "Taurotragus",
                                                "value": "Taurotragus",
                                                "label": "Taurotragus",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 916,
                                                        "gmksz": "Tragelaphus oryx",
                                                        "value": "Tragelaphus oryx",
                                                        "label": "Tragelaphus oryx",
                                                        "parentId": 444,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 637,
                                                "gmksz": "Tragelaphus",
                                                "value": "Tragelaphus",
                                                "label": "Tragelaphus",
                                                "parentId": 94,
                                                "children": [
                                                    {
                                                        "id": 1217,
                                                        "gmksz": "Tragelaphus strepsiceros",
                                                        "value": "Tragelaphus strepsiceros",
                                                        "label": "Tragelaphus strepsiceros",
                                                        "parentId": 637,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 169,
                                        "gmksz": "Camelidae",
                                        "value": "Camelidae",
                                        "label": "Camelidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 382,
                                                "gmksz": "Camelus",
                                                "value": "Camelus",
                                                "label": "Camelus",
                                                "parentId": 169,
                                                "children": [
                                                    {
                                                        "id": 865,
                                                        "gmksz": "Camelus bactrianus",
                                                        "value": "Camelus bactrianus",
                                                        "label": "Camelus bactrianus",
                                                        "parentId": 382,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1151,
                                                        "gmksz": "Camelus dromedarius",
                                                        "value": "Camelus dromedarius",
                                                        "label": "Camelus dromedarius",
                                                        "parentId": 382,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1088,
                                                        "gmksz": "Camelus ferus",
                                                        "value": "Camelus ferus",
                                                        "label": "Camelus ferus",
                                                        "parentId": 382,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 543,
                                                "gmksz": "Vicugna",
                                                "value": "Vicugna",
                                                "label": "Vicugna",
                                                "parentId": 169,
                                                "children": [
                                                    {
                                                        "id": 1108,
                                                        "gmksz": "Vicugna pacos",
                                                        "value": "Vicugna pacos",
                                                        "label": "Vicugna pacos",
                                                        "parentId": 543,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1210,
                                                        "gmksz": "Vicugna vicugna",
                                                        "value": "Vicugna vicugna",
                                                        "label": "Vicugna vicugna",
                                                        "parentId": 543,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 104,
                                        "gmksz": "Cervidae",
                                        "value": "Cervidae",
                                        "label": "Cervidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 642,
                                                "gmksz": "Alces",
                                                "value": "Alces",
                                                "label": "Alces",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 1224,
                                                        "gmksz": "Alces alces",
                                                        "value": "Alces alces",
                                                        "label": "Alces alces",
                                                        "parentId": 642,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 552,
                                                "gmksz": "Capreolus",
                                                "value": "Capreolus",
                                                "label": "Capreolus",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 1078,
                                                        "gmksz": "Capreolus capreolus",
                                                        "value": "Capreolus capreolus",
                                                        "label": "Capreolus capreolus",
                                                        "parentId": 552,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 277,
                                                "gmksz": "Cervus",
                                                "value": "Cervus",
                                                "label": "Cervus",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 962,
                                                        "gmksz": "Cervus albirostris",
                                                        "value": "Cervus albirostris",
                                                        "label": "Cervus albirostris",
                                                        "parentId": 277,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 801,
                                                        "gmksz": "Cervus canadensis",
                                                        "value": "Cervus canadensis",
                                                        "label": "Cervus canadensis",
                                                        "parentId": 277,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 795,
                                                        "gmksz": "Cervus elaphus",
                                                        "value": "Cervus elaphus",
                                                        "label": "Cervus elaphus",
                                                        "parentId": 277,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 720,
                                                        "gmksz": "Cervus nippon",
                                                        "value": "Cervus nippon",
                                                        "label": "Cervus nippon",
                                                        "parentId": 277,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 481,
                                                "gmksz": "Dama",
                                                "value": "Dama",
                                                "label": "Dama",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 973,
                                                        "gmksz": "Dama dama",
                                                        "value": "Dama dama",
                                                        "label": "Dama dama",
                                                        "parentId": 481,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 434,
                                                "gmksz": "Odocoileus",
                                                "value": "Odocoileus",
                                                "label": "Odocoileus",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 1160,
                                                        "gmksz": "Odocoileus hemionus",
                                                        "value": "Odocoileus hemionus",
                                                        "label": "Odocoileus hemionus",
                                                        "parentId": 434,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 927,
                                                        "gmksz": "Odocoileus virginianus",
                                                        "value": "Odocoileus virginianus",
                                                        "label": "Odocoileus virginianus",
                                                        "parentId": 434,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 367,
                                                "gmksz": "Rangifer",
                                                "value": "Rangifer",
                                                "label": "Rangifer",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 822,
                                                        "gmksz": "Rangifer tarandus",
                                                        "value": "Rangifer tarandus",
                                                        "label": "Rangifer tarandus",
                                                        "parentId": 367,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 299,
                                                "gmksz": "Rusa",
                                                "value": "Rusa",
                                                "label": "Rusa",
                                                "parentId": 104,
                                                "children": [
                                                    {
                                                        "id": 743,
                                                        "gmksz": "Rusa unicolor",
                                                        "value": "Rusa unicolor",
                                                        "label": "Rusa unicolor",
                                                        "parentId": 299,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 113,
                                        "gmksz": "Delphinidae",
                                        "value": "Delphinidae",
                                        "label": "Delphinidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 365,
                                                "gmksz": "Delphinus",
                                                "value": "Delphinus",
                                                "label": "Delphinus",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 819,
                                                        "gmksz": "Delphinus delphis",
                                                        "value": "Delphinus delphis",
                                                        "label": "Delphinus delphis",
                                                        "parentId": 365,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 369,
                                                "gmksz": "Globicephala",
                                                "value": "Globicephala",
                                                "label": "Globicephala",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 824,
                                                        "gmksz": "Globicephala macrorhynchus",
                                                        "value": "Globicephala macrorhynchus",
                                                        "label": "Globicephala macrorhynchus",
                                                        "parentId": 369,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 402,
                                                "gmksz": "Lagenorhynchus",
                                                "value": "Lagenorhynchus",
                                                "label": "Lagenorhynchus",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 914,
                                                        "gmksz": "Lagenorhynchus acutus",
                                                        "value": "Lagenorhynchus acutus",
                                                        "label": "Lagenorhynchus acutus",
                                                        "parentId": 402,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 969,
                                                        "gmksz": "Lagenorhynchus albirostris",
                                                        "value": "Lagenorhynchus albirostris",
                                                        "label": "Lagenorhynchus albirostris",
                                                        "parentId": 402,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 415,
                                                "gmksz": "Orcinus",
                                                "value": "Orcinus",
                                                "label": "Orcinus",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 873,
                                                        "gmksz": "Orcinus orca",
                                                        "value": "Orcinus orca",
                                                        "label": "Orcinus orca",
                                                        "parentId": 415,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 468,
                                                "gmksz": "Peponocephala",
                                                "value": "Peponocephala",
                                                "label": "Peponocephala",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 958,
                                                        "gmksz": "Peponocephala electra",
                                                        "value": "Peponocephala electra",
                                                        "label": "Peponocephala electra",
                                                        "parentId": 468,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 398,
                                                "gmksz": "Stenella",
                                                "value": "Stenella",
                                                "label": "Stenella",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 880,
                                                        "gmksz": "Stenella attenuata",
                                                        "value": "Stenella attenuata",
                                                        "label": "Stenella attenuata",
                                                        "parentId": 398,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1188,
                                                        "gmksz": "Stenella coeruleoalba",
                                                        "value": "Stenella coeruleoalba",
                                                        "label": "Stenella coeruleoalba",
                                                        "parentId": 398,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1083,
                                                        "gmksz": "Stenella longirostris",
                                                        "value": "Stenella longirostris",
                                                        "label": "Stenella longirostris",
                                                        "parentId": 398,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 520,
                                                "gmksz": "Steno",
                                                "value": "Steno",
                                                "label": "Steno",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 1033,
                                                        "gmksz": "Steno bredanensis",
                                                        "value": "Steno bredanensis",
                                                        "label": "Steno bredanensis",
                                                        "parentId": 520,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 389,
                                                "gmksz": "Tursiops",
                                                "value": "Tursiops",
                                                "label": "Tursiops",
                                                "parentId": 113,
                                                "children": [
                                                    {
                                                        "id": 844,
                                                        "gmksz": "Tursiops truncatus",
                                                        "value": "Tursiops truncatus",
                                                        "label": "Tursiops truncatus",
                                                        "parentId": 389,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 144,
                                        "gmksz": "Giraffidae",
                                        "value": "Giraffidae",
                                        "label": "Giraffidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 321,
                                                "gmksz": "Giraffa",
                                                "value": "Giraffa",
                                                "label": "Giraffa",
                                                "parentId": 144,
                                                "children": [
                                                    {
                                                        "id": 767,
                                                        "gmksz": "Giraffa camelopardalis",
                                                        "value": "Giraffa camelopardalis",
                                                        "label": "Giraffa camelopardalis",
                                                        "parentId": 321,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 200,
                                        "gmksz": "Hippopotamidae",
                                        "value": "Hippopotamidae",
                                        "label": "Hippopotamidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 638,
                                                "gmksz": "Hexaprotodon",
                                                "value": "Hexaprotodon",
                                                "label": "Hexaprotodon",
                                                "parentId": 200,
                                                "children": [
                                                    {
                                                        "id": 1218,
                                                        "gmksz": "Hexaprotodon liberiensis",
                                                        "value": "Hexaprotodon liberiensis",
                                                        "label": "Hexaprotodon liberiensis",
                                                        "parentId": 638,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 478,
                                                "gmksz": "Hippopotamus",
                                                "value": "Hippopotamus",
                                                "label": "Hippopotamus",
                                                "parentId": 200,
                                                "children": [
                                                    {
                                                        "id": 970,
                                                        "gmksz": "Hippopotamus amphibius",
                                                        "value": "Hippopotamus amphibius",
                                                        "label": "Hippopotamus amphibius",
                                                        "parentId": 478,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 197,
                                        "gmksz": "Phocoenidae",
                                        "value": "Phocoenidae",
                                        "label": "Phocoenidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 441,
                                                "gmksz": "Phocoena",
                                                "value": "Phocoena",
                                                "label": "Phocoena",
                                                "parentId": 197,
                                                "children": [
                                                    {
                                                        "id": 912,
                                                        "gmksz": "Phocoena phocoena",
                                                        "value": "Phocoena phocoena",
                                                        "label": "Phocoena phocoena",
                                                        "parentId": 441,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 193,
                                        "gmksz": "Physeteridae",
                                        "value": "Physeteridae",
                                        "label": "Physeteridae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 599,
                                                "gmksz": "Perca",
                                                "value": "Perca",
                                                "label": "Perca",
                                                "parentId": 193,
                                                "children": [
                                                    {
                                                        "id": 1152,
                                                        "gmksz": "Perca fluviatilis",
                                                        "value": "Perca fluviatilis",
                                                        "label": "Perca fluviatilis",
                                                        "parentId": 599,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 502,
                                                "gmksz": "Physeter",
                                                "value": "Physeter",
                                                "label": "Physeter",
                                                "parentId": 193,
                                                "children": [
                                                    {
                                                        "id": 1002,
                                                        "gmksz": "Physeter catodon",
                                                        "value": "Physeter catodon",
                                                        "label": "Physeter catodon",
                                                        "parentId": 502,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 120,
                                        "gmksz": "Suidae",
                                        "value": "Suidae",
                                        "label": "Suidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 476,
                                                "gmksz": "Phacochoerus",
                                                "value": "Phacochoerus",
                                                "label": "Phacochoerus",
                                                "parentId": 120,
                                                "children": [
                                                    {
                                                        "id": 967,
                                                        "gmksz": "Phacochoerus africanus",
                                                        "value": "Phacochoerus africanus",
                                                        "label": "Phacochoerus africanus",
                                                        "parentId": 476,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 293,
                                                "gmksz": "Sus",
                                                "value": "Sus",
                                                "label": "Sus",
                                                "parentId": 120,
                                                "children": [
                                                    {
                                                        "id": 736,
                                                        "gmksz": "Sus scrofa",
                                                        "value": "Sus scrofa",
                                                        "label": "Sus scrofa",
                                                        "parentId": 293,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 224,
                                        "gmksz": "Ziphiidae",
                                        "value": "Ziphiidae",
                                        "label": "Ziphiidae",
                                        "parentId": 22,
                                        "children": [
                                            {
                                                "id": 528,
                                                "gmksz": "Mesoplodon",
                                                "value": "Mesoplodon",
                                                "label": "Mesoplodon",
                                                "parentId": 224,
                                                "children": [
                                                    {
                                                        "id": 1044,
                                                        "gmksz": "Mesoplodon bidens",
                                                        "value": "Mesoplodon bidens",
                                                        "label": "Mesoplodon bidens",
                                                        "parentId": 528,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 24,
                                "gmksz": "Carnivora",
                                "value": "Carnivora",
                                "label": "Carnivora",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 250,
                                        "gmksz": "Ailuridae",
                                        "value": "Ailuridae",
                                        "label": "Ailuridae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 636,
                                                "gmksz": "Ailurus",
                                                "value": "Ailurus",
                                                "label": "Ailurus",
                                                "parentId": 250,
                                                "children": [
                                                    {
                                                        "id": 1216,
                                                        "gmksz": "Ailurus fulgens",
                                                        "value": "Ailurus fulgens",
                                                        "label": "Ailurus fulgens",
                                                        "parentId": 636,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 106,
                                        "gmksz": "Canidae",
                                        "value": "Canidae",
                                        "label": "Canidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 279,
                                                "gmksz": "Canis",
                                                "value": "Canis",
                                                "label": "Canis",
                                                "parentId": 106,
                                                "children": [
                                                    {
                                                        "id": 1122,
                                                        "gmksz": "Canis aureus",
                                                        "value": "Canis aureus",
                                                        "label": "Canis aureus",
                                                        "parentId": 279,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 757,
                                                        "gmksz": "Canis lupus",
                                                        "value": "Canis lupus",
                                                        "label": "Canis lupus",
                                                        "parentId": 279,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 770,
                                                        "gmksz": "Canis mesomelas",
                                                        "value": "Canis mesomelas",
                                                        "label": "Canis mesomelas",
                                                        "parentId": 279,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 752,
                                                        "gmksz": "Canis rufus",
                                                        "value": "Canis rufus",
                                                        "label": "Canis rufus",
                                                        "parentId": 279,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 463,
                                                "gmksz": "Lycaon",
                                                "value": "Lycaon",
                                                "label": "Lycaon",
                                                "parentId": 106,
                                                "children": [
                                                    {
                                                        "id": 951,
                                                        "gmksz": "Lycaon pictus",
                                                        "value": "Lycaon pictus",
                                                        "label": "Lycaon pictus",
                                                        "parentId": 463,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 431,
                                                "gmksz": "Nyctereutes",
                                                "value": "Nyctereutes",
                                                "label": "Nyctereutes",
                                                "parentId": 106,
                                                "children": [
                                                    {
                                                        "id": 894,
                                                        "gmksz": "Nyctereutes procyonoides",
                                                        "value": "Nyctereutes procyonoides",
                                                        "label": "Nyctereutes procyonoides",
                                                        "parentId": 431,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 362,
                                                "gmksz": "Vulpes",
                                                "value": "Vulpes",
                                                "label": "Vulpes",
                                                "parentId": 106,
                                                "children": [
                                                    {
                                                        "id": 964,
                                                        "gmksz": "Vulpes vulpes",
                                                        "value": "Vulpes vulpes",
                                                        "label": "Vulpes vulpes",
                                                        "parentId": 362,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 109,
                                        "gmksz": "Felidae",
                                        "value": "Felidae",
                                        "label": "Felidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 292,
                                                "gmksz": "Acinonyx",
                                                "value": "Acinonyx",
                                                "label": "Acinonyx",
                                                "parentId": 109,
                                                "children": [
                                                    {
                                                        "id": 735,
                                                        "gmksz": "Acinonyx jubatus",
                                                        "value": "Acinonyx jubatus",
                                                        "label": "Acinonyx jubatus",
                                                        "parentId": 292,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 317,
                                                "gmksz": "Felis",
                                                "value": "Felis",
                                                "label": "Felis",
                                                "parentId": 109,
                                                "children": [
                                                    {
                                                        "id": 764,
                                                        "gmksz": "Felis catus",
                                                        "value": "Felis catus",
                                                        "label": "Felis catus",
                                                        "parentId": 317,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 491,
                                                "gmksz": "Lynx",
                                                "value": "Lynx",
                                                "label": "Lynx",
                                                "parentId": 109,
                                                "children": [
                                                    {
                                                        "id": 990,
                                                        "gmksz": "Lynx lynx",
                                                        "value": "Lynx lynx",
                                                        "label": "Lynx lynx",
                                                        "parentId": 491,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 396,
                                                "gmksz": "Panthera",
                                                "value": "Panthera",
                                                "label": "Panthera",
                                                "parentId": 109,
                                                "children": [
                                                    {
                                                        "id": 829,
                                                        "gmksz": "Panthera leo",
                                                        "value": "Panthera leo",
                                                        "label": "Panthera leo",
                                                        "parentId": 396,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1076,
                                                        "gmksz": "Panthera pardus",
                                                        "value": "Panthera pardus",
                                                        "label": "Panthera pardus",
                                                        "parentId": 396,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1006,
                                                        "gmksz": "Panthera tigris",
                                                        "value": "Panthera tigris",
                                                        "label": "Panthera tigris",
                                                        "parentId": 396,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 244,
                                        "gmksz": "Herpestidae",
                                        "value": "Herpestidae",
                                        "label": "Herpestidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 627,
                                                "gmksz": "Helogale",
                                                "value": "Helogale",
                                                "label": "Helogale",
                                                "parentId": 244,
                                                "children": [
                                                    {
                                                        "id": 1204,
                                                        "gmksz": "Helogale parvula",
                                                        "value": "Helogale parvula",
                                                        "label": "Helogale parvula",
                                                        "parentId": 627,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 634,
                                                "gmksz": "Suricata",
                                                "value": "Suricata",
                                                "label": "Suricata",
                                                "parentId": 244,
                                                "children": [
                                                    {
                                                        "id": 1212,
                                                        "gmksz": "Suricata suricatta",
                                                        "value": "Suricata suricatta",
                                                        "label": "Suricata suricatta",
                                                        "parentId": 634,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 240,
                                        "gmksz": "Hyaenidae",
                                        "value": "Hyaenidae",
                                        "label": "Hyaenidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 570,
                                                "gmksz": "Crocuta",
                                                "value": "Crocuta",
                                                "label": "Crocuta",
                                                "parentId": 240,
                                                "children": [
                                                    {
                                                        "id": 1107,
                                                        "gmksz": "Crocuta crocuta",
                                                        "value": "Crocuta crocuta",
                                                        "label": "Crocuta crocuta",
                                                        "parentId": 570,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 150,
                                        "gmksz": "Mustelidae",
                                        "value": "Mustelidae",
                                        "label": "Mustelidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 603,
                                                "gmksz": "Lontra",
                                                "value": "Lontra",
                                                "label": "Lontra",
                                                "parentId": 150,
                                                "children": [
                                                    {
                                                        "id": 1159,
                                                        "gmksz": "Lontra canadensis",
                                                        "value": "Lontra canadensis",
                                                        "label": "Lontra canadensis",
                                                        "parentId": 603,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 480,
                                                "gmksz": "Lutra",
                                                "value": "Lutra",
                                                "label": "Lutra",
                                                "parentId": 150,
                                                "children": [
                                                    {
                                                        "id": 972,
                                                        "gmksz": "Lutra lutra",
                                                        "value": "Lutra lutra",
                                                        "label": "Lutra lutra",
                                                        "parentId": 480,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 377,
                                                "gmksz": "Martes",
                                                "value": "Martes",
                                                "label": "Martes",
                                                "parentId": 150,
                                                "children": [
                                                    {
                                                        "id": 976,
                                                        "gmksz": "Martes foina",
                                                        "value": "Martes foina",
                                                        "label": "Martes foina",
                                                        "parentId": 377,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 924,
                                                        "gmksz": "Martes zibellina",
                                                        "value": "Martes zibellina",
                                                        "label": "Martes zibellina",
                                                        "parentId": 377,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1180,
                                                        "gmksz": "Martes foina",
                                                        "value": "Martes foina",
                                                        "label": "Martes foina",
                                                        "parentId": 377,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1025,
                                                        "gmksz": "Martes martes",
                                                        "value": "Martes martes",
                                                        "label": "Martes martes",
                                                        "parentId": 377,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 440,
                                                "gmksz": "Meles",
                                                "value": "Meles",
                                                "label": "Meles",
                                                "parentId": 150,
                                                "children": [
                                                    {
                                                        "id": 934,
                                                        "gmksz": "Meles anakuma",
                                                        "value": "Meles anakuma",
                                                        "label": "Meles anakuma",
                                                        "parentId": 440,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1155,
                                                        "gmksz": "Meles meles",
                                                        "value": "Meles meles",
                                                        "label": "Meles meles",
                                                        "parentId": 440,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 214,
                                        "gmksz": "Otariidae",
                                        "value": "Otariidae",
                                        "label": "Otariidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 522,
                                                "gmksz": "Arctocephalus",
                                                "value": "Arctocephalus",
                                                "label": "Arctocephalus",
                                                "parentId": 214,
                                                "children": [
                                                    {
                                                        "id": 1222,
                                                        "gmksz": "Arctocephalus australis",
                                                        "value": "Arctocephalus australis",
                                                        "label": "Arctocephalus australis",
                                                        "parentId": 522,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1063,
                                                        "gmksz": "Arctocephalus tropicalis",
                                                        "value": "Arctocephalus tropicalis",
                                                        "label": "Arctocephalus tropicalis",
                                                        "parentId": 522,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 635,
                                                "gmksz": "Zalophus",
                                                "value": "Zalophus",
                                                "label": "Zalophus",
                                                "parentId": 214,
                                                "children": [
                                                    {
                                                        "id": 1213,
                                                        "gmksz": "Zalophus californianus",
                                                        "value": "Zalophus californianus",
                                                        "label": "Zalophus californianus",
                                                        "parentId": 635,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 127,
                                        "gmksz": "Phocidae",
                                        "value": "Phocidae",
                                        "label": "Phocidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 492,
                                                "gmksz": "Halichoerus",
                                                "value": "Halichoerus",
                                                "label": "Halichoerus",
                                                "parentId": 127,
                                                "children": [
                                                    {
                                                        "id": 991,
                                                        "gmksz": "Halichoerus grypus",
                                                        "value": "Halichoerus grypus",
                                                        "label": "Halichoerus grypus",
                                                        "parentId": 492,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 421,
                                                "gmksz": "Leptonychotes",
                                                "value": "Leptonychotes",
                                                "label": "Leptonychotes",
                                                "parentId": 127,
                                                "children": [
                                                    {
                                                        "id": 881,
                                                        "gmksz": "Leptonychotes weddellii",
                                                        "value": "Leptonychotes weddellii",
                                                        "label": "Leptonychotes weddellii",
                                                        "parentId": 421,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 400,
                                                "gmksz": "Mirounga",
                                                "value": "Mirounga",
                                                "label": "Mirounga",
                                                "parentId": 127,
                                                "children": [
                                                    {
                                                        "id": 856,
                                                        "gmksz": "Mirounga leonina",
                                                        "value": "Mirounga leonina",
                                                        "label": "Mirounga leonina",
                                                        "parentId": 400,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 324,
                                                "gmksz": "Phoca",
                                                "value": "Phoca",
                                                "label": "Phoca",
                                                "parentId": 127,
                                                "children": [
                                                    {
                                                        "id": 1187,
                                                        "gmksz": "Phoca largha",
                                                        "value": "Phoca largha",
                                                        "label": "Phoca largha",
                                                        "parentId": 324,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 772,
                                                        "gmksz": "Phoca vitulina",
                                                        "value": "Phoca vitulina",
                                                        "label": "Phoca vitulina",
                                                        "parentId": 324,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 192,
                                        "gmksz": "Procyonidae",
                                        "value": "Procyonidae",
                                        "label": "Procyonidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 630,
                                                "gmksz": "Nasua",
                                                "value": "Nasua",
                                                "label": "Nasua",
                                                "parentId": 192,
                                                "children": [
                                                    {
                                                        "id": 1207,
                                                        "gmksz": "Nasua nasua",
                                                        "value": "Nasua nasua",
                                                        "label": "Nasua nasua",
                                                        "parentId": 630,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 537,
                                                "gmksz": "Potos",
                                                "value": "Potos",
                                                "label": "Potos",
                                                "parentId": 192,
                                                "children": [
                                                    {
                                                        "id": 1056,
                                                        "gmksz": "Potos flavus",
                                                        "value": "Potos flavus",
                                                        "label": "Potos flavus",
                                                        "parentId": 537,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 514,
                                                "gmksz": "Procyon",
                                                "value": "Procyon",
                                                "label": "Procyon",
                                                "parentId": 192,
                                                "children": [
                                                    {
                                                        "id": 1023,
                                                        "gmksz": "Procyon lotor",
                                                        "value": "Procyon lotor",
                                                        "label": "Procyon lotor",
                                                        "parentId": 514,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 103,
                                        "gmksz": "Ursidae",
                                        "value": "Ursidae",
                                        "label": "Ursidae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 276,
                                                "gmksz": "Ailuropoda",
                                                "value": "Ailuropoda",
                                                "label": "Ailuropoda",
                                                "parentId": 103,
                                                "children": [
                                                    {
                                                        "id": 712,
                                                        "gmksz": "Ailuropoda melanoleuca",
                                                        "value": "Ailuropoda melanoleuca",
                                                        "label": "Ailuropoda melanoleuca",
                                                        "parentId": 276,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 388,
                                                "gmksz": "Tremarctos",
                                                "value": "Tremarctos",
                                                "label": "Tremarctos",
                                                "parentId": 103,
                                                "children": [
                                                    {
                                                        "id": 843,
                                                        "gmksz": "Tremarctos ornatus",
                                                        "value": "Tremarctos ornatus",
                                                        "label": "Tremarctos ornatus",
                                                        "parentId": 388,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 288,
                                                "gmksz": "Ursus",
                                                "value": "Ursus",
                                                "label": "Ursus",
                                                "parentId": 103,
                                                "children": [
                                                    {
                                                        "id": 953,
                                                        "gmksz": "Ursus arctos",
                                                        "value": "Ursus arctos",
                                                        "label": "Ursus arctos",
                                                        "parentId": 288,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 729,
                                                        "gmksz": "Ursus maritimus",
                                                        "value": "Ursus maritimus",
                                                        "label": "Ursus maritimus",
                                                        "parentId": 288,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1215,
                                                        "gmksz": "Ursus maritimus",
                                                        "value": "Ursus maritimus ",
                                                        "label": "Ursus maritimus ",
                                                        "parentId": 288,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 174,
                                        "gmksz": "Viverridae",
                                        "value": "Viverridae",
                                        "label": "Viverridae",
                                        "parentId": 24,
                                        "children": [
                                            {
                                                "id": 386,
                                                "gmksz": "Paguma",
                                                "value": "Paguma",
                                                "label": "Paguma",
                                                "parentId": 174,
                                                "children": [
                                                    {
                                                        "id": 841,
                                                        "gmksz": "Paguma larvata",
                                                        "value": "Paguma larvata",
                                                        "label": "Paguma larvata",
                                                        "parentId": 386,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 33,
                                "gmksz": "Chiroptera",
                                "value": "Chiroptera",
                                "label": "Chiroptera",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 181,
                                        "gmksz": "Hipposideridae",
                                        "value": "Hipposideridae",
                                        "label": "Hipposideridae",
                                        "parentId": 33,
                                        "children": [
                                            {
                                                "id": 403,
                                                "gmksz": "Hipposideros",
                                                "value": "Hipposideros",
                                                "label": "Hipposideros",
                                                "parentId": 181,
                                                "children": [
                                                    {
                                                        "id": 859,
                                                        "gmksz": "Hipposideros armiger",
                                                        "value": "Hipposideros armiger",
                                                        "label": "Hipposideros armiger",
                                                        "parentId": 403,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 151,
                                        "gmksz": "Molossidae",
                                        "value": "Molossidae",
                                        "label": "Molossidae",
                                        "parentId": 33,
                                        "children": [
                                            {
                                                "id": 335,
                                                "gmksz": "Mops",
                                                "value": "Mops",
                                                "label": "Mops",
                                                "parentId": 151,
                                                "children": [
                                                    {
                                                        "id": 783,
                                                        "gmksz": "Mops condylurus",
                                                        "value": "Mops condylurus",
                                                        "label": "Mops condylurus",
                                                        "parentId": 335,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 165,
                                        "gmksz": "Phyllostomidae",
                                        "value": "Phyllostomidae",
                                        "label": "Phyllostomidae",
                                        "parentId": 33,
                                        "children": [
                                            {
                                                "id": 358,
                                                "gmksz": "Desmodus",
                                                "value": "Desmodus",
                                                "label": "Desmodus",
                                                "parentId": 165,
                                                "children": [
                                                    {
                                                        "id": 810,
                                                        "gmksz": "Desmodus rotundus",
                                                        "value": "Desmodus rotundus",
                                                        "label": "Desmodus rotundus",
                                                        "parentId": 358,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 170,
                                        "gmksz": "Pteropodidae",
                                        "value": "Pteropodidae",
                                        "label": "Pteropodidae",
                                        "parentId": 33,
                                        "children": [
                                            {
                                                "id": 457,
                                                "gmksz": "Eidolon",
                                                "value": "Eidolon",
                                                "label": "Eidolon",
                                                "parentId": 170,
                                                "children": [
                                                    {
                                                        "id": 941,
                                                        "gmksz": "Eidolon helvum",
                                                        "value": "Eidolon helvum",
                                                        "label": "Eidolon helvum",
                                                        "parentId": 457,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 410,
                                                "gmksz": "Pteropus",
                                                "value": "Pteropus",
                                                "label": "Pteropus",
                                                "parentId": 170,
                                                "children": [
                                                    {
                                                        "id": 868,
                                                        "gmksz": "Pteropus giganteus",
                                                        "value": "Pteropus giganteus",
                                                        "label": "Pteropus giganteus",
                                                        "parentId": 410,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 180,
                                        "gmksz": "Rhinolophidae",
                                        "value": "Rhinolophidae",
                                        "label": "Rhinolophidae",
                                        "parentId": 33,
                                        "children": [
                                            {
                                                "id": 399,
                                                "gmksz": "Rhinolophus",
                                                "value": "Rhinolophus",
                                                "label": "Rhinolophus",
                                                "parentId": 180,
                                                "children": [
                                                    {
                                                        "id": 860,
                                                        "gmksz": "Rhinolophus ferrumequinum",
                                                        "value": "Rhinolophus ferrumequinum",
                                                        "label": "Rhinolophus ferrumequinum",
                                                        "parentId": 399,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1189,
                                                        "gmksz": "Rhinolophus hipposideros",
                                                        "value": "Rhinolophus hipposideros",
                                                        "label": "Rhinolophus hipposideros",
                                                        "parentId": 399,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 157,
                                        "gmksz": "Vespertilionidae",
                                        "value": "Vespertilionidae",
                                        "label": "Vespertilionidae",
                                        "parentId": 33,
                                        "children": [
                                            {
                                                "id": 579,
                                                "gmksz": "Eptesicus",
                                                "value": "Eptesicus",
                                                "label": "Eptesicus",
                                                "parentId": 157,
                                                "children": [
                                                    {
                                                        "id": 1127,
                                                        "gmksz": "Eptesicus sagittula",
                                                        "value": "Eptesicus sagittula",
                                                        "label": "Eptesicus sagittula",
                                                        "parentId": 579,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 448,
                                                "gmksz": "Nyctalus",
                                                "value": "Nyctalus",
                                                "label": "Nyctalus",
                                                "parentId": 157,
                                                "children": [
                                                    {
                                                        "id": 925,
                                                        "gmksz": "Nyctalus noctula",
                                                        "value": "Nyctalus noctula",
                                                        "label": "Nyctalus noctula",
                                                        "parentId": 448,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 469,
                                                "gmksz": "Pipistrellus",
                                                "value": "Pipistrellus",
                                                "label": "Pipistrellus",
                                                "parentId": 157,
                                                "children": [
                                                    {
                                                        "id": 959,
                                                        "gmksz": "Pipistrellus pipistrellus",
                                                        "value": "Pipistrellus pipistrellus",
                                                        "label": "Pipistrellus pipistrellus",
                                                        "parentId": 469,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 409,
                                                "gmksz": "Vespertilio",
                                                "value": "Vespertilio",
                                                "label": "Vespertilio",
                                                "parentId": 157,
                                                "children": [
                                                    {
                                                        "id": 867,
                                                        "gmksz": "Vespertilio sinensis",
                                                        "value": "Vespertilio sinensis",
                                                        "label": "Vespertilio sinensis",
                                                        "parentId": 409,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 53,
                                "gmksz": "Dasyuromorphia",
                                "value": "Dasyuromorphia",
                                "label": "Dasyuromorphia",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 142,
                                        "gmksz": "Dasyuridae",
                                        "value": "Dasyuridae",
                                        "label": "Dasyuridae",
                                        "parentId": 53,
                                        "children": [
                                            {
                                                "id": 316,
                                                "gmksz": "Sarcophilus",
                                                "value": "Sarcophilus",
                                                "label": "Sarcophilus",
                                                "parentId": 142,
                                                "children": [
                                                    {
                                                        "id": 762,
                                                        "gmksz": "Sarcophilus harrisii",
                                                        "value": "Sarcophilus harrisii",
                                                        "label": "Sarcophilus harrisii",
                                                        "parentId": 316,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 67,
                                "gmksz": "Didelphimorphia",
                                "value": "Didelphimorphia",
                                "label": "Didelphimorphia",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 203,
                                        "gmksz": "Didelphidae",
                                        "value": "Didelphidae",
                                        "label": "Didelphidae",
                                        "parentId": 67,
                                        "children": [
                                            {
                                                "id": 588,
                                                "gmksz": "Cryptonanus",
                                                "value": "Cryptonanus",
                                                "label": "Cryptonanus",
                                                "parentId": 203,
                                                "children": [
                                                    {
                                                        "id": 1098,
                                                        "gmksz": "Didelphis marsupialis",
                                                        "value": "Didelphis marsupialis",
                                                        "label": "Didelphis marsupialis",
                                                        "parentId": 588,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 617,
                                                "gmksz": "Didelphis",
                                                "value": "Didelphis",
                                                "label": "Didelphis",
                                                "parentId": 203,
                                                "children": null,
                                                "slots": null
                                            },
                                            {
                                                "id": 612,
                                                "gmksz": "Metachirus",
                                                "value": "Metachirus",
                                                "label": "Metachirus",
                                                "parentId": 203,
                                                "children": [
                                                    {
                                                        "id": 1047,
                                                        "gmksz": "Philander opossum",
                                                        "value": "Philander opossum",
                                                        "label": "Philander opossum",
                                                        "parentId": 612,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 561,
                                                "gmksz": "Philander",
                                                "value": "Philander",
                                                "label": "Philander",
                                                "parentId": 203,
                                                "children": null,
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 31,
                                "gmksz": "Diprotodontia",
                                "value": "Diprotodontia",
                                "label": "Diprotodontia",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 155,
                                        "gmksz": "Macropodidae",
                                        "value": "Macropodidae",
                                        "label": "Macropodidae",
                                        "parentId": 31,
                                        "children": [
                                            {
                                                "id": 418,
                                                "gmksz": "Macropus",
                                                "value": "Macropus",
                                                "label": "Macropus",
                                                "parentId": 155,
                                                "children": [
                                                    {
                                                        "id": 926,
                                                        "gmksz": "Macropus fuliginosus",
                                                        "value": "Macropus fuliginosus",
                                                        "label": "Macropus fuliginosus",
                                                        "parentId": 418,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1031,
                                                        "gmksz": "Macropus giganteus",
                                                        "value": "Macropus giganteus",
                                                        "label": "Macropus giganteus",
                                                        "parentId": 418,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 558,
                                                "gmksz": "Notamacropus",
                                                "value": "Notamacropus",
                                                "label": "Notamacropus",
                                                "parentId": 155,
                                                "children": [
                                                    {
                                                        "id": 1095,
                                                        "gmksz": "Notamacropus eugenii",
                                                        "value": "Notamacropus eugenii",
                                                        "label": "Notamacropus eugenii",
                                                        "parentId": 558,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 404,
                                                "gmksz": "Osphranter",
                                                "value": "Osphranter",
                                                "label": "Osphranter",
                                                "parentId": 155,
                                                "children": [
                                                    {
                                                        "id": 861,
                                                        "gmksz": "Osphranter rufus",
                                                        "value": "Osphranter rufus",
                                                        "label": "Osphranter rufus",
                                                        "parentId": 404,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 569,
                                                "gmksz": "Wallabia",
                                                "value": "Wallabia",
                                                "label": "Wallabia",
                                                "parentId": 155,
                                                "children": [
                                                    {
                                                        "id": 1106,
                                                        "gmksz": "Wallabia bicolor",
                                                        "value": "Wallabia bicolor",
                                                        "label": "Wallabia bicolor",
                                                        "parentId": 569,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 213,
                                        "gmksz": "Phalangeridae",
                                        "value": "Phalangeridae",
                                        "label": "Phalangeridae",
                                        "parentId": 31,
                                        "children": [
                                            {
                                                "id": 498,
                                                "gmksz": "Trichosurus",
                                                "value": "Trichosurus",
                                                "label": "Trichosurus",
                                                "parentId": 213,
                                                "children": [
                                                    {
                                                        "id": 996,
                                                        "gmksz": "Trichosurus vulpecula",
                                                        "value": "Trichosurus vulpecula",
                                                        "label": "Trichosurus vulpecula",
                                                        "parentId": 498,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 156,
                                        "gmksz": "Phascolarctidae",
                                        "value": "Phascolarctidae",
                                        "label": "Phascolarctidae",
                                        "parentId": 31,
                                        "children": [
                                            {
                                                "id": 339,
                                                "gmksz": "Phascolarctos",
                                                "value": "Phascolarctos",
                                                "label": "Phascolarctos",
                                                "parentId": 156,
                                                "children": [
                                                    {
                                                        "id": 789,
                                                        "gmksz": "Phascolarctos cinereus",
                                                        "value": "Phascolarctos cinereus",
                                                        "label": "Phascolarctos cinereus",
                                                        "parentId": 339,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 108,
                                        "gmksz": "Vombatidae",
                                        "value": "Vombatidae",
                                        "label": "Vombatidae",
                                        "parentId": 31,
                                        "children": [
                                            {
                                                "id": 278,
                                                "gmksz": "Lasiorhinus",
                                                "value": "Lasiorhinus",
                                                "label": "Lasiorhinus",
                                                "parentId": 108,
                                                "children": [
                                                    {
                                                        "id": 713,
                                                        "gmksz": "Lasiorhinus latifrons",
                                                        "value": "Lasiorhinus latifrons",
                                                        "label": "Lasiorhinus latifrons",
                                                        "parentId": 278,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 50,
                                "gmksz": "Eulipotyphla",
                                "value": "Eulipotyphla",
                                "label": "Eulipotyphla",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 217,
                                        "gmksz": "Erinaceidae",
                                        "value": "Erinaceidae",
                                        "label": "Erinaceidae",
                                        "parentId": 50,
                                        "children": [
                                            {
                                                "id": 511,
                                                "gmksz": "Erinaceus",
                                                "value": "Erinaceus",
                                                "label": "Erinaceus",
                                                "parentId": 217,
                                                "children": [
                                                    {
                                                        "id": 1021,
                                                        "gmksz": "Erinaceus europaeus",
                                                        "value": "Erinaceus europaeus",
                                                        "label": "Erinaceus europaeus",
                                                        "parentId": 511,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 136,
                                        "gmksz": "Soricidae",
                                        "value": "Soricidae",
                                        "label": "Soricidae",
                                        "parentId": 50,
                                        "children": [
                                            {
                                                "id": 442,
                                                "gmksz": "Crocidura",
                                                "value": "Crocidura",
                                                "label": "Crocidura",
                                                "parentId": 136,
                                                "children": [
                                                    {
                                                        "id": 1001,
                                                        "gmksz": "Crocidura somalica",
                                                        "value": "Crocidura somalica",
                                                        "label": "Crocidura somalica",
                                                        "parentId": 442,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1081,
                                                        "gmksz": "Crocidura suaveolens",
                                                        "value": "Crocidura suaveolens",
                                                        "label": "Crocidura suaveolens",
                                                        "parentId": 442,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 315,
                                                "gmksz": "Sorex",
                                                "value": "Sorex",
                                                "label": "Sorex",
                                                "parentId": 136,
                                                "children": [
                                                    {
                                                        "id": 1086,
                                                        "gmksz": "Sorex alpinus",
                                                        "value": "Sorex alpinus",
                                                        "label": "Sorex alpinus",
                                                        "parentId": 315,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 812,
                                                        "gmksz": "Sorex araneus",
                                                        "value": "Sorex araneus",
                                                        "label": "Sorex araneus",
                                                        "parentId": 315,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 947,
                                                        "gmksz": "Sorex cinereus",
                                                        "value": "Sorex cinereus",
                                                        "label": "Sorex cinereus",
                                                        "parentId": 315,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 883,
                                                        "gmksz": "Sorex monticolus",
                                                        "value": "Sorex monticolus",
                                                        "label": "Sorex monticolus",
                                                        "parentId": 315,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 25,
                                "gmksz": "Lagomorpha",
                                "value": "Lagomorpha",
                                "label": "Lagomorpha",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 115,
                                        "gmksz": "Leporidae",
                                        "value": "Leporidae",
                                        "label": "Leporidae",
                                        "parentId": 25,
                                        "children": [
                                            {
                                                "id": 309,
                                                "gmksz": "Lepus",
                                                "value": "Lepus",
                                                "label": "Lepus",
                                                "parentId": 115,
                                                "children": [
                                                    {
                                                        "id": 758,
                                                        "gmksz": "Lepus europaeus",
                                                        "value": "Lepus europaeus",
                                                        "label": "Lepus europaeus",
                                                        "parentId": 309,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1191,
                                                        "gmksz": "Lepus tolai",
                                                        "value": "Lepus tolai",
                                                        "label": "Lepus tolai",
                                                        "parentId": 309,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 320,
                                                "gmksz": "Oryctolagus",
                                                "value": "Oryctolagus",
                                                "label": "Oryctolagus",
                                                "parentId": 115,
                                                "children": [
                                                    {
                                                        "id": 766,
                                                        "gmksz": "Oryctolagus cuniculus",
                                                        "value": "Oryctolagus cuniculus",
                                                        "label": "Oryctolagus cuniculus",
                                                        "parentId": 320,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 484,
                                                "gmksz": "Sylvilagus",
                                                "value": "Sylvilagus",
                                                "label": "Sylvilagus",
                                                "parentId": 115,
                                                "children": [
                                                    {
                                                        "id": 977,
                                                        "gmksz": "Sylvilagus floridanus",
                                                        "value": "Sylvilagus floridanus",
                                                        "label": "Sylvilagus floridanus",
                                                        "parentId": 484,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 96,
                                        "gmksz": "Ochotonidae",
                                        "value": "Ochotonidae",
                                        "label": "Ochotonidae",
                                        "parentId": 25,
                                        "children": [
                                            {
                                                "id": 266,
                                                "gmksz": "Ochotona",
                                                "value": "Ochotona",
                                                "label": "Ochotona",
                                                "parentId": 96,
                                                "children": [
                                                    {
                                                        "id": 763,
                                                        "gmksz": "Ochotona curzoniae",
                                                        "value": "Ochotona curzoniae",
                                                        "label": "Ochotona curzoniae",
                                                        "parentId": 266,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 725,
                                                        "gmksz": "Ochotona dauurica",
                                                        "value": "Ochotona dauurica",
                                                        "label": "Ochotona dauurica",
                                                        "parentId": 266,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 710,
                                                        "gmksz": "Ochotona thibetana",
                                                        "value": "Ochotona thibetana",
                                                        "label": "Ochotona thibetana",
                                                        "parentId": 266,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 69,
                                "gmksz": "Monotremata",
                                "value": "Monotremata",
                                "label": "Monotremata",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 206,
                                        "gmksz": "Tachyglossidae",
                                        "value": "Tachyglossidae",
                                        "label": "Tachyglossidae",
                                        "parentId": 69,
                                        "children": [
                                            {
                                                "id": 482,
                                                "gmksz": "Tachyglossus",
                                                "value": "Tachyglossus",
                                                "label": "Tachyglossus",
                                                "parentId": 206,
                                                "children": [
                                                    {
                                                        "id": 974,
                                                        "gmksz": "Tachyglossus aculeatus",
                                                        "value": "Tachyglossus aculeatus",
                                                        "label": "Tachyglossus aculeatus",
                                                        "parentId": 482,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 26,
                                "gmksz": "Perissodactyla",
                                "value": "Perissodactyla",
                                "label": "Perissodactyla",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 95,
                                        "gmksz": "Equidae",
                                        "value": "Equidae",
                                        "label": "Equidae",
                                        "parentId": 26,
                                        "children": [
                                            {
                                                "id": 265,
                                                "gmksz": "Equus",
                                                "value": "Equus",
                                                "label": "Equus",
                                                "parentId": 95,
                                                "children": [
                                                    {
                                                        "id": 875,
                                                        "gmksz": "Equus africanus",
                                                        "value": "Equus africanus",
                                                        "label": "Equus africanus",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 828,
                                                        "gmksz": "Equus asinus",
                                                        "value": "Equus asinus",
                                                        "label": "Equus asinus",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 896,
                                                        "gmksz": "Equus burchellii",
                                                        "value": "Equus burchellii",
                                                        "label": "Equus burchellii",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 732,
                                                        "gmksz": "Equus caballus",
                                                        "value": "Equus caballus",
                                                        "label": "Equus caballus",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 744,
                                                        "gmksz": "Equus ferus",
                                                        "value": "Equus ferus",
                                                        "label": "Equus ferus",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1042,
                                                        "gmksz": "Equus grevyi",
                                                        "value": "Equus grevyi",
                                                        "label": "Equus grevyi",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 814,
                                                        "gmksz": "Equus hemionus",
                                                        "value": "Equus hemionus",
                                                        "label": "Equus hemionus",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 874,
                                                        "gmksz": "Equus kiang",
                                                        "value": "Equus kiang",
                                                        "label": "Equus kiang",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 708,
                                                        "gmksz": "Equus przewalskii",
                                                        "value": "Equus przewalskii",
                                                        "label": "Equus przewalskii",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 952,
                                                        "gmksz": "Equus quagga",
                                                        "value": "Equus quagga",
                                                        "label": "Equus quagga",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1018,
                                                        "gmksz": "Equus zebra",
                                                        "value": "Equus zebra",
                                                        "label": "Equus zebra",
                                                        "parentId": 265,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 135,
                                        "gmksz": "Rhinocerotidae",
                                        "value": "Rhinocerotidae",
                                        "label": "Rhinocerotidae",
                                        "parentId": 26,
                                        "children": [
                                            {
                                                "id": 370,
                                                "gmksz": "Ceratotherium",
                                                "value": "Ceratotherium",
                                                "label": "Ceratotherium",
                                                "parentId": 135,
                                                "children": [
                                                    {
                                                        "id": 827,
                                                        "gmksz": "Ceratotherium simum",
                                                        "value": "Ceratotherium simum",
                                                        "label": "Ceratotherium simum",
                                                        "parentId": 370,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 357,
                                                "gmksz": "Diceros",
                                                "value": "Diceros",
                                                "label": "Diceros",
                                                "parentId": 135,
                                                "children": [
                                                    {
                                                        "id": 808,
                                                        "gmksz": "Diceros bicornis",
                                                        "value": "Diceros bicornis",
                                                        "label": "Diceros bicornis",
                                                        "parentId": 357,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 429,
                                                "gmksz": "Rhinoceros",
                                                "value": "Rhinoceros",
                                                "label": "Rhinoceros",
                                                "parentId": 135,
                                                "children": [
                                                    {
                                                        "id": 892,
                                                        "gmksz": "Rhinoceros unicornis",
                                                        "value": "Rhinoceros unicornis",
                                                        "label": "Rhinoceros unicornis",
                                                        "parentId": 429,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 247,
                                        "gmksz": "Tapiridae",
                                        "value": "Tapiridae",
                                        "label": "Tapiridae",
                                        "parentId": 26,
                                        "children": [
                                            {
                                                "id": 629,
                                                "gmksz": "Tapirus",
                                                "value": "Tapirus",
                                                "label": "Tapirus",
                                                "parentId": 247,
                                                "children": [
                                                    {
                                                        "id": 1206,
                                                        "gmksz": "Tapirus terrestris",
                                                        "value": "Tapirus terrestris",
                                                        "label": "Tapirus terrestris",
                                                        "parentId": 629,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 71,
                                "gmksz": "Pholidota",
                                "value": "Pholidota",
                                "label": "Pholidota",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 212,
                                        "gmksz": "Manidae",
                                        "value": "Manidae",
                                        "label": "Manidae",
                                        "parentId": 71,
                                        "children": [
                                            {
                                                "id": 545,
                                                "gmksz": "Manis",
                                                "value": "Manis",
                                                "label": "Manis",
                                                "parentId": 212,
                                                "children": [
                                                    {
                                                        "id": 1067,
                                                        "gmksz": "Manis javanica",
                                                        "value": "Manis javanica",
                                                        "label": "Manis javanica",
                                                        "parentId": 545,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 582,
                                                "gmksz": "Smutsia",
                                                "value": "Smutsia",
                                                "label": "Smutsia",
                                                "parentId": 212,
                                                "children": [
                                                    {
                                                        "id": 1130,
                                                        "gmksz": "Smutsia temminckii",
                                                        "value": "Smutsia temminckii",
                                                        "label": "Smutsia temminckii",
                                                        "parentId": 582,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 55,
                                "gmksz": "Pilosa",
                                "value": "Pilosa",
                                "label": "Pilosa",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 185,
                                        "gmksz": "Bradypodidae",
                                        "value": "Bradypodidae",
                                        "label": "Bradypodidae",
                                        "parentId": 55,
                                        "children": [
                                            {
                                                "id": 419,
                                                "gmksz": "Bradypus",
                                                "value": "Bradypus",
                                                "label": "Bradypus",
                                                "parentId": 185,
                                                "children": [
                                                    {
                                                        "id": 878,
                                                        "gmksz": "Bradypus variegatus",
                                                        "value": "Bradypus variegatus",
                                                        "label": "Bradypus variegatus",
                                                        "parentId": 419,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 179,
                                        "gmksz": "Megalonychidae",
                                        "value": "Megalonychidae",
                                        "label": "Megalonychidae",
                                        "parentId": 55,
                                        "children": [
                                            {
                                                "id": 397,
                                                "gmksz": "Choloepus",
                                                "value": "Choloepus",
                                                "label": "Choloepus",
                                                "parentId": 179,
                                                "children": [
                                                    {
                                                        "id": 1148,
                                                        "gmksz": "Choloepus didactylus",
                                                        "value": "Choloepus didactylus",
                                                        "label": "Choloepus didactylus",
                                                        "parentId": 397,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 849,
                                                        "gmksz": "Choloepus hoffmanni",
                                                        "value": "Choloepus hoffmanni",
                                                        "label": "Choloepus hoffmanni",
                                                        "parentId": 397,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 189,
                                        "gmksz": "Myrmecophagidae",
                                        "value": "Myrmecophagidae",
                                        "label": "Myrmecophagidae",
                                        "parentId": 55,
                                        "children": [
                                            {
                                                "id": 475,
                                                "gmksz": "Myrmecophaga",
                                                "value": "Myrmecophaga",
                                                "label": "Myrmecophaga",
                                                "parentId": 189,
                                                "children": [
                                                    {
                                                        "id": 966,
                                                        "gmksz": "Myrmecophaga tridactyla",
                                                        "value": "Myrmecophaga tridactyla",
                                                        "label": "Myrmecophaga tridactyla",
                                                        "parentId": 475,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 497,
                                                "gmksz": "Tamandua",
                                                "value": "Tamandua",
                                                "label": "Tamandua",
                                                "parentId": 189,
                                                "children": [
                                                    {
                                                        "id": 995,
                                                        "gmksz": "Tamandua mexicana",
                                                        "value": "Tamandua mexicana",
                                                        "label": "Tamandua mexicana",
                                                        "parentId": 497,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 20,
                                "gmksz": "Primates",
                                "value": "Primates",
                                "label": "Primates",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 245,
                                        "gmksz": "Aotidae",
                                        "value": "Aotidae",
                                        "label": "Aotidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 605,
                                                "gmksz": "Aotus",
                                                "value": "Aotus",
                                                "label": "Aotus",
                                                "parentId": 245,
                                                "children": [
                                                    {
                                                        "id": 1163,
                                                        "gmksz": "Aotus nancymaae",
                                                        "value": "Aotus nancymaae",
                                                        "label": "Aotus nancymaae",
                                                        "parentId": 605,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 101,
                                        "gmksz": "Atelidae",
                                        "value": "Atelidae",
                                        "label": "Atelidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 271,
                                                "gmksz": "Alouatta",
                                                "value": "Alouatta",
                                                "label": "Alouatta",
                                                "parentId": 101,
                                                "children": [
                                                    {
                                                        "id": 847,
                                                        "gmksz": "Alouatta caraya",
                                                        "value": "Alouatta caraya",
                                                        "label": "Alouatta caraya",
                                                        "parentId": 271,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 719,
                                                        "gmksz": "Alouatta palliata",
                                                        "value": "Alouatta palliata",
                                                        "label": "Alouatta palliata",
                                                        "parentId": 271,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 714,
                                                        "gmksz": "Alouatta pigra",
                                                        "value": "Alouatta pigra",
                                                        "label": "Alouatta pigra",
                                                        "parentId": 271,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 855,
                                                        "gmksz": "Alouatta seniculus",
                                                        "value": "Alouatta seniculus",
                                                        "label": "Alouatta seniculus",
                                                        "parentId": 271,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 350,
                                                "gmksz": "Ateles",
                                                "value": "Ateles",
                                                "label": "Ateles",
                                                "parentId": 101,
                                                "children": [
                                                    {
                                                        "id": 888,
                                                        "gmksz": "Ateles belzebuth",
                                                        "value": "Ateles belzebuth",
                                                        "label": "Ateles belzebuth",
                                                        "parentId": 350,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1072,
                                                        "gmksz": "Ateles fusciceps",
                                                        "value": "Ateles fusciceps",
                                                        "label": "Ateles fusciceps",
                                                        "parentId": 350,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1020,
                                                        "gmksz": "Ateles geoffroyi",
                                                        "value": "Ateles geoffroyi",
                                                        "label": "Ateles geoffroyi",
                                                        "parentId": 350,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 915,
                                                        "gmksz": "Ateles hybridus",
                                                        "value": "Ateles hybridus",
                                                        "label": "Ateles hybridus",
                                                        "parentId": 350,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 426,
                                                "gmksz": "Lagothrix",
                                                "value": "Lagothrix",
                                                "label": "Lagothrix",
                                                "parentId": 101,
                                                "children": [
                                                    {
                                                        "id": 887,
                                                        "gmksz": "Lagothrix lagotricha",
                                                        "value": "Lagothrix lagotricha",
                                                        "label": "Lagothrix lagotricha",
                                                        "parentId": 426,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 132,
                                        "gmksz": "Cebidae",
                                        "value": "Cebidae",
                                        "label": "Cebidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 310,
                                                "gmksz": "Callithrix",
                                                "value": "Callithrix",
                                                "label": "Callithrix",
                                                "parentId": 132,
                                                "children": [
                                                    {
                                                        "id": 920,
                                                        "gmksz": "Callithrix aurita",
                                                        "value": "Callithrix aurita",
                                                        "label": "Callithrix aurita",
                                                        "parentId": 310,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 983,
                                                        "gmksz": "Callithrix geoffroyi",
                                                        "value": "Callithrix geoffroyi",
                                                        "label": "Callithrix geoffroyi",
                                                        "parentId": 310,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 933,
                                                        "gmksz": "Callithrix jacchus",
                                                        "value": "Callithrix jacchus",
                                                        "label": "Callithrix jacchus",
                                                        "parentId": 310,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 982,
                                                        "gmksz": "Callithrix penicillata",
                                                        "value": "Callithrix penicillata",
                                                        "label": "Callithrix penicillata",
                                                        "parentId": 310,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 633,
                                                "gmksz": "Leontopithecus",
                                                "value": "Leontopithecus",
                                                "label": "Leontopithecus",
                                                "parentId": 132,
                                                "children": [
                                                    {
                                                        "id": 1211,
                                                        "gmksz": "Leontopithecus rosalia",
                                                        "value": "Leontopithecus rosalia",
                                                        "label": "Leontopithecus rosalia",
                                                        "parentId": 633,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 433,
                                                "gmksz": "Saguinus",
                                                "value": "Saguinus",
                                                "label": "Saguinus",
                                                "parentId": 132,
                                                "children": [
                                                    {
                                                        "id": 1176,
                                                        "gmksz": "Saguinus geoffroyi",
                                                        "value": "Saguinus geoffroyi",
                                                        "label": "Saguinus geoffroyi",
                                                        "parentId": 433,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 910,
                                                        "gmksz": "Saguinus imperator",
                                                        "value": "Saguinus imperator",
                                                        "label": "Saguinus imperator",
                                                        "parentId": 433,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 90,
                                        "gmksz": "Cercopithecidae",
                                        "value": "Cercopithecidae",
                                        "label": "Cercopithecidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 611,
                                                "gmksz": "Cercocebus",
                                                "value": "Cercocebus",
                                                "label": "Cercocebus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 1171,
                                                        "gmksz": "Cercocebus torquatus",
                                                        "value": "Cercocebus torquatus",
                                                        "label": "Cercocebus torquatus",
                                                        "parentId": 611,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 319,
                                                "gmksz": "Cercopithecus",
                                                "value": "Cercopithecus",
                                                "label": "Cercopithecus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 826,
                                                        "gmksz": "Cercopithecus ascanius",
                                                        "value": "Cercopithecus ascanius",
                                                        "label": "Cercopithecus ascanius",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 890,
                                                        "gmksz": "Cercopithecus cephus",
                                                        "value": "Cercopithecus cephus",
                                                        "label": "Cercopithecus cephus",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1068,
                                                        "gmksz": "Cercopithecus diana",
                                                        "value": "Cercopithecus diana",
                                                        "label": "Cercopithecus diana",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1017,
                                                        "gmksz": "Cercopithecus mitis",
                                                        "value": "Cercopithecus mitis",
                                                        "label": "Cercopithecus mitis",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1071,
                                                        "gmksz": "Cercopithecus neglectus",
                                                        "value": "Cercopithecus neglectus",
                                                        "label": "Cercopithecus neglectus",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1069,
                                                        "gmksz": "Cercopithecus nictitans",
                                                        "value": "Cercopithecus nictitans",
                                                        "label": "Cercopithecus nictitans",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1172,
                                                        "gmksz": "Cercopithecus pogonias",
                                                        "value": "Cercopithecus pogonias",
                                                        "label": "Cercopithecus pogonias",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1175,
                                                        "gmksz": "Cercopithecus wolfi",
                                                        "value": "Cercopithecus wolfi",
                                                        "label": "Cercopithecus wolfi",
                                                        "parentId": 319,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 422,
                                                "gmksz": "Chlorocebus",
                                                "value": "Chlorocebus",
                                                "label": "Chlorocebus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 986,
                                                        "gmksz": "Chlorocebus aethiops",
                                                        "value": "Chlorocebus aethiops",
                                                        "label": "Chlorocebus aethiops",
                                                        "parentId": 422,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 954,
                                                        "gmksz": "Chlorocebus pygerythrus",
                                                        "value": "Chlorocebus pygerythrus",
                                                        "label": "Chlorocebus pygerythrus",
                                                        "parentId": 422,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 336,
                                                "gmksz": "Colobus",
                                                "value": "Colobus",
                                                "label": "Colobus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 1120,
                                                        "gmksz": "Colobus angolensis",
                                                        "value": "Colobus angolensis",
                                                        "label": "Colobus angolensis",
                                                        "parentId": 336,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 788,
                                                        "gmksz": "Colobus guereza",
                                                        "value": "Colobus guereza",
                                                        "label": "Colobus guereza",
                                                        "parentId": 336,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 474,
                                                "gmksz": "Lophocebus",
                                                "value": "Lophocebus",
                                                "label": "Lophocebus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 965,
                                                        "gmksz": "Lophocebus albigena",
                                                        "value": "Lophocebus albigena",
                                                        "label": "Lophocebus albigena",
                                                        "parentId": 474,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 282,
                                                "gmksz": "Macaca",
                                                "value": "Macaca",
                                                "label": "Macaca",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 798,
                                                        "gmksz": "Macaca fuscata",
                                                        "value": "Macaca fuscata",
                                                        "label": "Macaca fuscata",
                                                        "parentId": 282,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 723,
                                                        "gmksz": "Macaca mulatta",
                                                        "value": "Macaca mulatta",
                                                        "label": "Macaca mulatta",
                                                        "parentId": 282,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 488,
                                                "gmksz": "Miopithecus",
                                                "value": "Miopithecus",
                                                "label": "Miopithecus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 987,
                                                        "gmksz": "Miopithecus ogouensis",
                                                        "value": "Miopithecus ogouensis",
                                                        "label": "Miopithecus ogouensis",
                                                        "parentId": 488,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 267,
                                                "gmksz": "Papio",
                                                "value": "Papio",
                                                "label": "Papio",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 773,
                                                        "gmksz": "Papio anubis",
                                                        "value": "Papio anubis",
                                                        "label": "Papio anubis",
                                                        "parentId": 267,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 706,
                                                        "gmksz": "Papio cynocephalus",
                                                        "value": "Papio cynocephalus",
                                                        "label": "Papio cynocephalus",
                                                        "parentId": 267,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 858,
                                                        "gmksz": "Papio hamadryas",
                                                        "value": "Papio hamadryas",
                                                        "label": "Papio hamadryas",
                                                        "parentId": 267,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 751,
                                                        "gmksz": "Papio kindae",
                                                        "value": "Papio kindae",
                                                        "label": "Papio kindae",
                                                        "parentId": 267,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 834,
                                                        "gmksz": "Papio ursinus",
                                                        "value": "Papio ursinus",
                                                        "label": "Papio ursinus",
                                                        "parentId": 267,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 341,
                                                "gmksz": "Piliocolobus",
                                                "value": "Piliocolobus",
                                                "label": "Piliocolobus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 791,
                                                        "gmksz": "Piliocolobus badius",
                                                        "value": "Piliocolobus badius",
                                                        "label": "Piliocolobus badius",
                                                        "parentId": 341,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 295,
                                                "gmksz": "Presbytis",
                                                "value": "Presbytis",
                                                "label": "Presbytis",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 738,
                                                        "gmksz": "Presbytis phayrei",
                                                        "value": "Presbytis phayrei",
                                                        "label": "Presbytis phayrei",
                                                        "parentId": 295,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 289,
                                                "gmksz": "Pygathrix",
                                                "value": "Pygathrix",
                                                "label": "Pygathrix",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 728,
                                                        "gmksz": "Pygathrix nemaeus",
                                                        "value": "Pygathrix nemaeus",
                                                        "label": "Pygathrix nemaeus",
                                                        "parentId": 289,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 473,
                                                "gmksz": "Rhinopithecus",
                                                "value": "Rhinopithecus",
                                                "label": "Rhinopithecus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 1169,
                                                        "gmksz": "Rhinopithecus bieti",
                                                        "value": "Rhinopithecus bieti",
                                                        "label": "Rhinopithecus bieti",
                                                        "parentId": 473,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 984,
                                                        "gmksz": "Rhinopithecus roxellana",
                                                        "value": "Rhinopithecus roxellana",
                                                        "label": "Rhinopithecus roxellana",
                                                        "parentId": 473,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 323,
                                                "gmksz": "Semnopithecus",
                                                "value": "Semnopithecus",
                                                "label": "Semnopithecus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 1184,
                                                        "gmksz": "Semnopithecus entellus",
                                                        "value": "Semnopithecus entellus",
                                                        "label": "Semnopithecus entellus",
                                                        "parentId": 323,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 771,
                                                        "gmksz": "Semnopithecus priam",
                                                        "value": "Semnopithecus priam",
                                                        "label": "Semnopithecus priam",
                                                        "parentId": 323,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 263,
                                                "gmksz": "Theropithecus",
                                                "value": "Theropithecus",
                                                "label": "Theropithecus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 703,
                                                        "gmksz": "Theropithecus gelada",
                                                        "value": "Theropithecus gelada",
                                                        "label": "Theropithecus gelada",
                                                        "parentId": 263,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 430,
                                                "gmksz": "Trachypithecus",
                                                "value": "Trachypithecus",
                                                "label": "Trachypithecus",
                                                "parentId": 90,
                                                "children": [
                                                    {
                                                        "id": 1082,
                                                        "gmksz": "Trachypithecus delacouri",
                                                        "value": "Trachypithecus delacouri",
                                                        "label": "Trachypithecus delacouri",
                                                        "parentId": 430,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1087,
                                                        "gmksz": "Trachypithecus hatinhensis",
                                                        "value": "Trachypithecus hatinhensis",
                                                        "label": "Trachypithecus hatinhensis",
                                                        "parentId": 430,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 978,
                                                        "gmksz": "Trachypithecus vetulus",
                                                        "value": "Trachypithecus vetulus",
                                                        "label": "Trachypithecus vetulus",
                                                        "parentId": 430,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 242,
                                        "gmksz": "Galagidae",
                                        "value": "Galagidae",
                                        "label": "Galagidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 600,
                                                "gmksz": "Otolemur",
                                                "value": "Otolemur",
                                                "label": "Otolemur",
                                                "parentId": 242,
                                                "children": [
                                                    {
                                                        "id": 1153,
                                                        "gmksz": "Otolemur crassicaudatus",
                                                        "value": "Otolemur crassicaudatus",
                                                        "label": "Otolemur crassicaudatus",
                                                        "parentId": 600,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 92,
                                        "gmksz": "Hominidae",
                                        "value": "Hominidae",
                                        "label": "Hominidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 264,
                                                "gmksz": "Gorilla",
                                                "value": "Gorilla",
                                                "label": "Gorilla",
                                                "parentId": 92,
                                                "children": [
                                                    {
                                                        "id": 704,
                                                        "gmksz": "Gorilla gorilla",
                                                        "value": "Gorilla gorilla",
                                                        "label": "Gorilla gorilla",
                                                        "parentId": 264,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 262,
                                                "gmksz": "Pan",
                                                "value": "Pan",
                                                "label": "Pan",
                                                "parentId": 92,
                                                "children": [
                                                    {
                                                        "id": 1162,
                                                        "gmksz": "Pan paniscus",
                                                        "value": "Pan paniscus",
                                                        "label": "Pan paniscus",
                                                        "parentId": 262,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 702,
                                                        "gmksz": "Pan troglodytes",
                                                        "value": "Pan troglodytes",
                                                        "label": "Pan troglodytes",
                                                        "parentId": 262,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 326,
                                                "gmksz": "Pongo",
                                                "value": "Pongo",
                                                "label": "Pongo",
                                                "parentId": 92,
                                                "children": [
                                                    {
                                                        "id": 823,
                                                        "gmksz": "Pongo abelii",
                                                        "value": "Pongo abelii",
                                                        "label": "Pongo abelii",
                                                        "parentId": 326,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1007,
                                                        "gmksz": "Pongo pygmaeus",
                                                        "value": "Pongo pygmaeus",
                                                        "label": "Pongo pygmaeus",
                                                        "parentId": 326,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 227,
                                        "gmksz": "Hylobatidae",
                                        "value": "Hylobatidae",
                                        "label": "Hylobatidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 535,
                                                "gmksz": "Nomascus",
                                                "value": "Nomascus",
                                                "label": "Nomascus",
                                                "parentId": 227,
                                                "children": [
                                                    {
                                                        "id": 1131,
                                                        "gmksz": "Nomascus gabriellae",
                                                        "value": "Nomascus gabriellae",
                                                        "label": "Nomascus gabriellae",
                                                        "parentId": 535,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1133,
                                                        "gmksz": "Nomascus siki",
                                                        "value": "Nomascus siki",
                                                        "label": "Nomascus siki",
                                                        "parentId": 535,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 93,
                                        "gmksz": "Indriidae",
                                        "value": "Indriidae",
                                        "label": "Indriidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 406,
                                                "gmksz": "Indri",
                                                "value": "Indri",
                                                "label": "Indri",
                                                "parentId": 93,
                                                "children": [
                                                    {
                                                        "id": 863,
                                                        "gmksz": "Indri indri",
                                                        "value": "Indri indri",
                                                        "label": "Indri indri",
                                                        "parentId": 406,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 261,
                                                "gmksz": "Propithecus",
                                                "value": "Propithecus",
                                                "label": "Propithecus",
                                                "parentId": 93,
                                                "children": [
                                                    {
                                                        "id": 701,
                                                        "gmksz": "Propithecus verreauxi",
                                                        "value": "Propithecus verreauxi",
                                                        "label": "Propithecus verreauxi",
                                                        "parentId": 261,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 100,
                                        "gmksz": "Lemuridae",
                                        "value": "Lemuridae",
                                        "label": "Lemuridae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 270,
                                                "gmksz": "Eulemur",
                                                "value": "Eulemur",
                                                "label": "Eulemur",
                                                "parentId": 100,
                                                "children": [
                                                    {
                                                        "id": 1121,
                                                        "gmksz": "Eulemur flavifrons",
                                                        "value": "Eulemur flavifrons",
                                                        "label": "Eulemur flavifrons",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 730,
                                                        "gmksz": "Eulemur fulvus",
                                                        "value": "Eulemur fulvus",
                                                        "label": "Eulemur fulvus",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 785,
                                                        "gmksz": "Eulemur macaco",
                                                        "value": "Eulemur macaco",
                                                        "label": "Eulemur macaco",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1236,
                                                        "gmksz": "Eulemur mongoz",
                                                        "value": "Eulemur mongoz",
                                                        "label": "Eulemur mongoz",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 741,
                                                        "gmksz": "Eulemur rubriventer",
                                                        "value": "Eulemur rubriventer",
                                                        "label": "Eulemur rubriventer",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 721,
                                                        "gmksz": "Eulemur rufifrons",
                                                        "value": "Eulemur rufifrons",
                                                        "label": "Eulemur rufifrons",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1119,
                                                        "gmksz": "Eulemur rufus",
                                                        "value": "Eulemur rufus",
                                                        "label": "Eulemur rufus",
                                                        "parentId": 270,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 307,
                                                "gmksz": "Lemur",
                                                "value": "Lemur",
                                                "label": "Lemur",
                                                "parentId": 100,
                                                "children": [
                                                    {
                                                        "id": 755,
                                                        "gmksz": "Lemur catta",
                                                        "value": "Lemur catta",
                                                        "label": "Lemur catta",
                                                        "parentId": 307,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 209,
                                        "gmksz": "Lorisidae",
                                        "value": "Lorisidae",
                                        "label": "Lorisidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 487,
                                                "gmksz": "Nycticebus",
                                                "value": "Nycticebus",
                                                "label": "Nycticebus",
                                                "parentId": 209,
                                                "children": [
                                                    {
                                                        "id": 985,
                                                        "gmksz": "Nycticebus pygmaeus",
                                                        "value": "Nycticebus pygmaeus",
                                                        "label": "Nycticebus pygmaeus",
                                                        "parentId": 487,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 216,
                                        "gmksz": "Pitheciidae",
                                        "value": "Pitheciidae",
                                        "label": "Pitheciidae",
                                        "parentId": 20,
                                        "children": [
                                            {
                                                "id": 510,
                                                "gmksz": "Pithecia",
                                                "value": "Pithecia",
                                                "label": "Pithecia",
                                                "parentId": 216,
                                                "children": [
                                                    {
                                                        "id": 1019,
                                                        "gmksz": "Pithecia pithecia",
                                                        "value": "Pithecia pithecia",
                                                        "label": "Pithecia pithecia",
                                                        "parentId": 510,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 43,
                                "gmksz": "Proboscidea",
                                "value": "Proboscidea",
                                "label": "Proboscidea",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 116,
                                        "gmksz": "Elephantidae",
                                        "value": "Elephantidae",
                                        "label": "Elephantidae",
                                        "parentId": 43,
                                        "children": [
                                            {
                                                "id": 291,
                                                "gmksz": "Elephas",
                                                "value": "Elephas",
                                                "label": "Elephas",
                                                "parentId": 116,
                                                "children": [
                                                    {
                                                        "id": 734,
                                                        "gmksz": "Elephas maximus",
                                                        "value": "Elephas maximus",
                                                        "label": "Elephas maximus",
                                                        "parentId": 291,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 423,
                                                "gmksz": "Loxodonta",
                                                "value": "Loxodonta",
                                                "label": "Loxodonta",
                                                "parentId": 116,
                                                "children": [
                                                    {
                                                        "id": 891,
                                                        "gmksz": "Loxodonta africana",
                                                        "value": "Loxodonta africana",
                                                        "label": "Loxodonta africana",
                                                        "parentId": 423,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1225,
                                                        "gmksz": "Loxodonta cyclotis",
                                                        "value": "Loxodonta cyclotis",
                                                        "label": "Loxodonta cyclotis",
                                                        "parentId": 423,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 21,
                                "gmksz": "Rodentia",
                                "value": "Rodentia",
                                "label": "Rodentia",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 210,
                                        "gmksz": "Castoridae",
                                        "value": "Castoridae",
                                        "label": "Castoridae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 493,
                                                "gmksz": "Castor",
                                                "value": "Castor",
                                                "label": "Castor",
                                                "parentId": 210,
                                                "children": [
                                                    {
                                                        "id": 1223,
                                                        "gmksz": "Castor canadensis",
                                                        "value": "Castor canadensis",
                                                        "label": "Castor canadensis",
                                                        "parentId": 493,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1024,
                                                        "gmksz": "Castor fiber",
                                                        "value": "Castor fiber",
                                                        "label": "Castor fiber",
                                                        "parentId": 493,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 201,
                                        "gmksz": "Caviidae",
                                        "value": "Caviidae",
                                        "label": "Caviidae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 470,
                                                "gmksz": "Cavia",
                                                "value": "Cavia",
                                                "label": "Cavia",
                                                "parentId": 201,
                                                "children": [
                                                    {
                                                        "id": 960,
                                                        "gmksz": "Cavia porcellus",
                                                        "value": "Cavia porcellus",
                                                        "label": "Cavia porcellus",
                                                        "parentId": 470,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 97,
                                        "gmksz": "Cricetidae",
                                        "value": "Cricetidae",
                                        "label": "Cricetidae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 494,
                                                "gmksz": "Cricetus",
                                                "value": "Cricetus",
                                                "label": "Cricetus",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 992,
                                                        "gmksz": "Cricetus cricetus",
                                                        "value": "Cricetus cricetus",
                                                        "label": "Cricetus cricetus",
                                                        "parentId": 494,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 574,
                                                "gmksz": "Eothenomys",
                                                "value": "Eothenomys",
                                                "label": "Eothenomys",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 1113,
                                                        "gmksz": "Eothenomys melanogaster",
                                                        "value": "Eothenomys melanogaster",
                                                        "label": "Eothenomys melanogaster",
                                                        "parentId": 574,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 596,
                                                "gmksz": "Melanomys",
                                                "value": "Melanomys",
                                                "label": "Melanomys",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 1146,
                                                        "gmksz": "Melanomys caliginosus",
                                                        "value": "Melanomys caliginosus",
                                                        "label": "Melanomys caliginosus",
                                                        "parentId": 596,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 314,
                                                "gmksz": "Microtus",
                                                "value": "Microtus",
                                                "label": "Microtus",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 830,
                                                        "gmksz": "Microtus californicus",
                                                        "value": "Microtus californicus",
                                                        "label": "Microtus californicus",
                                                        "parentId": 314,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 832,
                                                        "gmksz": "Microtus kikuchii",
                                                        "value": "Microtus kikuchii",
                                                        "label": "Microtus kikuchii",
                                                        "parentId": 314,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 923,
                                                        "gmksz": "Microtus montanus",
                                                        "value": "Microtus montanus",
                                                        "label": "Microtus montanus",
                                                        "parentId": 314,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 274,
                                                "gmksz": "Myodes",
                                                "value": "Myodes",
                                                "label": "Myodes",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 715,
                                                        "gmksz": "Myodes gapperi",
                                                        "value": "Myodes gapperi",
                                                        "label": "Myodes gapperi",
                                                        "parentId": 274,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 727,
                                                        "gmksz": "Myodes glareolus",
                                                        "value": "Myodes glareolus",
                                                        "label": "Myodes glareolus",
                                                        "parentId": 274,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 349,
                                                "gmksz": "Neotoma",
                                                "value": "Neotoma",
                                                "label": "Neotoma",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 809,
                                                        "gmksz": "Neotoma albigula",
                                                        "value": "Neotoma albigula",
                                                        "label": "Neotoma albigula",
                                                        "parentId": 349,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1114,
                                                        "gmksz": "Neotoma lepida",
                                                        "value": "Neotoma lepida",
                                                        "label": "Neotoma lepida",
                                                        "parentId": 349,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 446,
                                                "gmksz": "Onychomys",
                                                "value": "Onychomys",
                                                "label": "Onychomys",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 922,
                                                        "gmksz": "Onychomys torridus",
                                                        "value": "Onychomys torridus",
                                                        "label": "Onychomys torridus",
                                                        "parentId": 446,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 294,
                                                "gmksz": "Peromyscus",
                                                "value": "Peromyscus",
                                                "label": "Peromyscus",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 921,
                                                        "gmksz": "Peromyscus leucopus",
                                                        "value": "Peromyscus leucopus",
                                                        "label": "Peromyscus leucopus",
                                                        "parentId": 294,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 742,
                                                        "gmksz": "Peromyscus maniculatus",
                                                        "value": "Peromyscus maniculatus",
                                                        "label": "Peromyscus maniculatus",
                                                        "parentId": 294,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 598,
                                                "gmksz": "Phodopus",
                                                "value": "Phodopus",
                                                "label": "Phodopus",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 1150,
                                                        "gmksz": "Phodopus sungorus",
                                                        "value": "Phodopus sungorus",
                                                        "label": "Phodopus sungorus",
                                                        "parentId": 598,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 556,
                                                "gmksz": "Reithrodontomys",
                                                "value": "Reithrodontomys",
                                                "label": "Reithrodontomys",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 1093,
                                                        "gmksz": "Reithrodontomys fulvescens",
                                                        "value": "Reithrodontomys fulvescens",
                                                        "label": "Reithrodontomys fulvescens",
                                                        "parentId": 556,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 595,
                                                "gmksz": "Rheomys",
                                                "value": "Rheomys",
                                                "label": "Rheomys",
                                                "parentId": 97,
                                                "children": [
                                                    {
                                                        "id": 1145,
                                                        "gmksz": "Rheomys raptor",
                                                        "value": "Rheomys raptor",
                                                        "label": "Rheomys raptor",
                                                        "parentId": 595,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 237,
                                        "gmksz": "Echimyidae",
                                        "value": "Echimyidae",
                                        "label": "Echimyidae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 557,
                                                "gmksz": "Proechimys",
                                                "value": "Proechimys",
                                                "label": "Proechimys",
                                                "parentId": 237,
                                                "children": [
                                                    {
                                                        "id": 1094,
                                                        "gmksz": "Proechimys semispinosus",
                                                        "value": "Proechimys semispinosus",
                                                        "label": "Proechimys semispinosus",
                                                        "parentId": 557,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 190,
                                        "gmksz": "Gliridae",
                                        "value": "Gliridae",
                                        "label": "Gliridae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 477,
                                                "gmksz": "Eliomys",
                                                "value": "Eliomys",
                                                "label": "Eliomys",
                                                "parentId": 190,
                                                "children": [
                                                    {
                                                        "id": 968,
                                                        "gmksz": "Eliomys quercinus",
                                                        "value": "Eliomys quercinus",
                                                        "label": "Eliomys quercinus",
                                                        "parentId": 477,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 495,
                                                "gmksz": "Glis",
                                                "value": "Glis",
                                                "label": "Glis",
                                                "parentId": 190,
                                                "children": [
                                                    {
                                                        "id": 994,
                                                        "gmksz": "Glis glis",
                                                        "value": "Glis glis",
                                                        "label": "Glis glis",
                                                        "parentId": 495,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 232,
                                        "gmksz": "Heteromyidae",
                                        "value": "Heteromyidae",
                                        "label": "Heteromyidae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 548,
                                                "gmksz": "Heteromys",
                                                "value": "Heteromys",
                                                "label": "Heteromys",
                                                "parentId": 232,
                                                "children": [
                                                    {
                                                        "id": 1073,
                                                        "gmksz": "Heteromys desmarestianus",
                                                        "value": "Heteromys desmarestianus",
                                                        "label": "Heteromys desmarestianus",
                                                        "parentId": 548,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 248,
                                        "gmksz": "Hydrochaeridae",
                                        "value": "Hydrochaeridae",
                                        "label": "Hydrochaeridae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 631,
                                                "gmksz": "Hydrochoerus",
                                                "value": "Hydrochoerus",
                                                "label": "Hydrochoerus",
                                                "parentId": 248,
                                                "children": [
                                                    {
                                                        "id": 1208,
                                                        "gmksz": "Hydrochoerus hydrochaeris",
                                                        "value": "Hydrochoerus hydrochaeris",
                                                        "label": "Hydrochoerus hydrochaeris",
                                                        "parentId": 631,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 91,
                                        "gmksz": "Muridae",
                                        "value": "Muridae",
                                        "label": "Muridae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 394,
                                                "gmksz": "Acomys",
                                                "value": "Acomys",
                                                "label": "Acomys",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 852,
                                                        "gmksz": "Acomys wilsoni",
                                                        "value": "Acomys wilsoni",
                                                        "label": "Acomys wilsoni",
                                                        "parentId": 394,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 272,
                                                "gmksz": "Apodemus",
                                                "value": "Apodemus",
                                                "label": "Apodemus",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 711,
                                                        "gmksz": "Apodemus agrarius",
                                                        "value": "Apodemus agrarius",
                                                        "label": "Apodemus agrarius",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 760,
                                                        "gmksz": "Apodemus flavicollis",
                                                        "value": "Apodemus flavicollis",
                                                        "label": "Apodemus flavicollis",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 946,
                                                        "gmksz": "Apodemus semotus",
                                                        "value": "Apodemus semotus",
                                                        "label": "Apodemus semotus",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 945,
                                                        "gmksz": "Apodemus speciosus",
                                                        "value": "Apodemus speciosus",
                                                        "label": "Apodemus speciosus",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 804,
                                                        "gmksz": "Apodemus sylvaticus",
                                                        "value": "Apodemus sylvaticus",
                                                        "label": "Apodemus sylvaticus",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1185,
                                                        "gmksz": "Apodemus flavicollis",
                                                        "value": "Apodemus flavicollis",
                                                        "label": "Apodemus flavicollis",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1179,
                                                        "gmksz": "Apodemus sylvaticus",
                                                        "value": "Apodemus sylvaticus",
                                                        "label": "Apodemus sylvaticus",
                                                        "parentId": 272,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 501,
                                                "gmksz": "Arvicanthis",
                                                "value": "Arvicanthis",
                                                "label": "Arvicanthis",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 1000,
                                                        "gmksz": "Arvicanthis niloticus",
                                                        "value": "Arvicanthis niloticus",
                                                        "label": "Arvicanthis niloticus",
                                                        "parentId": 501,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 353,
                                                "gmksz": "Gerbillus",
                                                "value": "Gerbillus",
                                                "label": "Gerbillus",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 802,
                                                        "gmksz": "Gerbillus andersoni",
                                                        "value": "Gerbillus andersoni",
                                                        "label": "Gerbillus andersoni",
                                                        "parentId": 353,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 467,
                                                "gmksz": "Mastomys",
                                                "value": "Mastomys",
                                                "label": "Mastomys",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 957,
                                                        "gmksz": "Mastomys angolensis",
                                                        "value": "Mastomys angolensis",
                                                        "label": "Mastomys angolensis",
                                                        "parentId": 467,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 407,
                                                "gmksz": "Micromys",
                                                "value": "Micromys",
                                                "label": "Micromys",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 864,
                                                        "gmksz": "Micromys minutus",
                                                        "value": "Micromys minutus",
                                                        "label": "Micromys minutus",
                                                        "parentId": 407,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 260,
                                                "gmksz": "Mus",
                                                "value": "Mus",
                                                "label": "Mus",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 700,
                                                        "gmksz": "Mus musculus",
                                                        "value": "Mus musculus",
                                                        "label": "Mus musculus",
                                                        "parentId": 260,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 408,
                                                "gmksz": "Mustela",
                                                "value": "Mustela",
                                                "label": "Mustela",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 1202,
                                                        "gmksz": "Mustela erminea",
                                                        "value": "Mustela erminea",
                                                        "label": "Mustela erminea",
                                                        "parentId": 408,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1003,
                                                        "gmksz": "Mustela eversmannii",
                                                        "value": "Mustela eversmannii",
                                                        "label": "Mustela eversmannii",
                                                        "parentId": 408,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1005,
                                                        "gmksz": "Mustela nivalis",
                                                        "value": "Mustela nivalis",
                                                        "label": "Mustela nivalis",
                                                        "parentId": 408,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1059,
                                                        "gmksz": "Mustela putorius",
                                                        "value": "Mustela putorius",
                                                        "label": "Mustela putorius",
                                                        "parentId": 408,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 521,
                                                "gmksz": "Psammomys",
                                                "value": "Psammomys",
                                                "label": "Psammomys",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 1035,
                                                        "gmksz": "Psammomys obesus",
                                                        "value": "Psammomys obesus",
                                                        "label": "Psammomys obesus",
                                                        "parentId": 521,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 285,
                                                "gmksz": "Rattus",
                                                "value": "Rattus",
                                                "label": "Rattus",
                                                "parentId": 91,
                                                "children": [
                                                    {
                                                        "id": 857,
                                                        "gmksz": "Rattus flavipectus",
                                                        "value": "Rattus flavipectus",
                                                        "label": "Rattus flavipectus",
                                                        "parentId": 285,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 737,
                                                        "gmksz": "Rattus norvegicus",
                                                        "value": "Rattus norvegicus",
                                                        "label": "Rattus norvegicus",
                                                        "parentId": 285,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 886,
                                                        "gmksz": "Rattus rattus",
                                                        "value": "Rattus rattus",
                                                        "label": "Rattus rattus",
                                                        "parentId": 285,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 249,
                                        "gmksz": "Myocastoridae",
                                        "value": "Myocastoridae",
                                        "label": "Myocastoridae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 632,
                                                "gmksz": "Myocastor",
                                                "value": "Myocastor",
                                                "label": "Myocastor",
                                                "parentId": 249,
                                                "children": [
                                                    {
                                                        "id": 1209,
                                                        "gmksz": "Myocastor coypus",
                                                        "value": "Myocastor coypus",
                                                        "label": "Myocastor coypus",
                                                        "parentId": 632,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 129,
                                        "gmksz": "Sciuridae",
                                        "value": "Sciuridae",
                                        "label": "Sciuridae",
                                        "parentId": 21,
                                        "children": [
                                            {
                                                "id": 348,
                                                "gmksz": "Callospermophilus",
                                                "value": "Callospermophilus",
                                                "label": "Callospermophilus",
                                                "parentId": 129,
                                                "children": [
                                                    {
                                                        "id": 796,
                                                        "gmksz": "Callospermophilus lateralis",
                                                        "value": "Callospermophilus lateralis",
                                                        "label": "Callospermophilus lateralis",
                                                        "parentId": 348,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 424,
                                                "gmksz": "Marmota",
                                                "value": "Marmota",
                                                "label": "Marmota",
                                                "parentId": 129,
                                                "children": [
                                                    {
                                                        "id": 955,
                                                        "gmksz": "Marmota marmota",
                                                        "value": "Marmota marmota",
                                                        "label": "Marmota marmota",
                                                        "parentId": 424,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1008,
                                                        "gmksz": "Marmota monax",
                                                        "value": "Marmota monax",
                                                        "label": "Marmota monax",
                                                        "parentId": 424,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 372,
                                                "gmksz": "Sciurus",
                                                "value": "Sciurus",
                                                "label": "Sciurus",
                                                "parentId": 129,
                                                "children": [
                                                    {
                                                        "id": 845,
                                                        "gmksz": "Sciurus carolinensis",
                                                        "value": "Sciurus carolinensis",
                                                        "label": "Sciurus carolinensis",
                                                        "parentId": 372,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1077,
                                                        "gmksz": "Sciurus vulgaris",
                                                        "value": "Sciurus vulgaris",
                                                        "label": "Sciurus vulgaris",
                                                        "parentId": 372,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 449,
                                                "gmksz": "Spermophilus",
                                                "value": "Spermophilus",
                                                "label": "Spermophilus",
                                                "parentId": 129,
                                                "children": [
                                                    {
                                                        "id": 928,
                                                        "gmksz": "Spermophilus citellus",
                                                        "value": "Spermophilus citellus",
                                                        "label": "Spermophilus citellus",
                                                        "parentId": 449,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 78,
                                "gmksz": "Scandentia",
                                "value": "Scandentia",
                                "label": "Scandentia",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 229,
                                        "gmksz": "Tupaiidae",
                                        "value": "Tupaiidae",
                                        "label": "Tupaiidae",
                                        "parentId": 78,
                                        "children": [
                                            {
                                                "id": 540,
                                                "gmksz": "Tupaia",
                                                "value": "Tupaia",
                                                "label": "Tupaia",
                                                "parentId": 229,
                                                "children": [
                                                    {
                                                        "id": 1060,
                                                        "gmksz": "Tupaia belangeri",
                                                        "value": "Tupaia belangeri",
                                                        "label": "Tupaia belangeri",
                                                        "parentId": 540,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 66,
                                "gmksz": "Tubulidentata",
                                "value": "Tubulidentata",
                                "label": "Tubulidentata",
                                "parentId": 1,
                                "children": [
                                    {
                                        "id": 195,
                                        "gmksz": "Orycteropodidae",
                                        "value": "Orycteropodidae",
                                        "label": "Orycteropodidae",
                                        "parentId": 66,
                                        "children": [
                                            {
                                                "id": 453,
                                                "gmksz": "Orycteropus",
                                                "value": "Orycteropus",
                                                "label": "Orycteropus",
                                                "parentId": 195,
                                                "children": [
                                                    {
                                                        "id": 935,
                                                        "gmksz": "Orycteropus afer",
                                                        "value": "Orycteropus afer",
                                                        "label": "Orycteropus afer",
                                                        "parentId": 453,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    },
                    {
                        "id": 6,
                        "gmksz": "Reptilia",
                        "value": "Reptilia",
                        "label": "Reptilia",
                        "parentId": 0,
                        "children": [
                            {
                                "id": 44,
                                "gmksz": "Crocodylia",
                                "value": "Crocodylia",
                                "label": "Crocodylia",
                                "parentId": 6,
                                "children": [
                                    {
                                        "id": 159,
                                        "gmksz": "Alligatoridae",
                                        "value": "Alligatoridae",
                                        "label": "Alligatoridae",
                                        "parentId": 44,
                                        "children": [
                                            {
                                                "id": 345,
                                                "gmksz": "Alligator",
                                                "value": "Alligator",
                                                "label": "Alligator",
                                                "parentId": 159,
                                                "children": [
                                                    {
                                                        "id": 793,
                                                        "gmksz": "Alligator mississippiensis",
                                                        "value": "Alligator mississippiensis",
                                                        "label": "Alligator mississippiensis",
                                                        "parentId": 345,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 128,
                                        "gmksz": "Crocodylidae",
                                        "value": "Crocodylidae",
                                        "label": "Crocodylidae",
                                        "parentId": 44,
                                        "children": [
                                            {
                                                "id": 301,
                                                "gmksz": "Crocodylus",
                                                "value": "Crocodylus",
                                                "label": "Crocodylus",
                                                "parentId": 128,
                                                "children": [
                                                    {
                                                        "id": 1045,
                                                        "gmksz": "Crocodylus moreletii",
                                                        "value": "Crocodylus moreletii",
                                                        "label": "Crocodylus moreletii",
                                                        "parentId": 301,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1049,
                                                        "gmksz": "Crocodylus niloticus",
                                                        "value": "Crocodylus niloticus",
                                                        "label": "Crocodylus niloticus",
                                                        "parentId": 301,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 749,
                                                        "gmksz": "Crocodylus porosus",
                                                        "value": "Crocodylus porosus",
                                                        "label": "Crocodylus porosus",
                                                        "parentId": 301,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 36,
                                "gmksz": "Squamata",
                                "value": "Squamata",
                                "label": "Squamata",
                                "parentId": 6,
                                "children": [
                                    {
                                        "id": 238,
                                        "gmksz": "Agamidae",
                                        "value": "Agamidae",
                                        "label": "Agamidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 563,
                                                "gmksz": "Pogona",
                                                "value": "Pogona",
                                                "label": "Pogona",
                                                "parentId": 238,
                                                "children": [
                                                    {
                                                        "id": 1100,
                                                        "gmksz": "Pogona vitticeps",
                                                        "value": "Pogona vitticeps",
                                                        "label": "Pogona vitticeps",
                                                        "parentId": 563,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 235,
                                        "gmksz": "Anguidae",
                                        "value": "Anguidae",
                                        "label": "Anguidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 554,
                                                "gmksz": "Anguis",
                                                "value": "Anguis",
                                                "label": "Anguis",
                                                "parentId": 235,
                                                "children": [
                                                    {
                                                        "id": 1091,
                                                        "gmksz": "Anguis fragilis",
                                                        "value": "Anguis fragilis",
                                                        "label": "Anguis fragilis",
                                                        "parentId": 554,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 199,
                                        "gmksz": "Colubridae",
                                        "value": "Colubridae",
                                        "label": "Colubridae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 534,
                                                "gmksz": "Natrix",
                                                "value": "Natrix",
                                                "label": "Natrix",
                                                "parentId": 199,
                                                "children": [
                                                    {
                                                        "id": 1053,
                                                        "gmksz": "Natrix natrix",
                                                        "value": "Natrix natrix",
                                                        "label": "Natrix natrix",
                                                        "parentId": 534,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 530,
                                                "gmksz": "Zamenis",
                                                "value": "Zamenis",
                                                "label": "Zamenis",
                                                "parentId": 199,
                                                "children": [
                                                    {
                                                        "id": 1089,
                                                        "gmksz": "Zamenis longissimus",
                                                        "value": "Zamenis longissimus",
                                                        "label": "Zamenis longissimus",
                                                        "parentId": 530,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1178,
                                                        "gmksz": "Zamenis lineata",
                                                        "value": "Zamenis lineata",
                                                        "label": "Zamenis lineata",
                                                        "parentId": 530,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 198,
                                        "gmksz": "Elapidae",
                                        "value": "Elapidae",
                                        "label": "Elapidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 466,
                                                "gmksz": "Naja",
                                                "value": "Naja",
                                                "label": "Naja",
                                                "parentId": 198,
                                                "children": [
                                                    {
                                                        "id": 956,
                                                        "gmksz": "Naja nigricollis",
                                                        "value": "Naja nigricollis",
                                                        "label": "Naja nigricollis",
                                                        "parentId": 466,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 614,
                                                "gmksz": "Oxyuranus",
                                                "value": "Oxyuranus",
                                                "label": "Oxyuranus",
                                                "parentId": 198,
                                                "children": [
                                                    {
                                                        "id": 1186,
                                                        "gmksz": "Oxyuranus scutellatus",
                                                        "value": "Oxyuranus scutellatus",
                                                        "label": "Oxyuranus scutellatus",
                                                        "parentId": 614,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 233,
                                        "gmksz": "Gekkonidae",
                                        "value": "Gekkonidae",
                                        "label": "Gekkonidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 550,
                                                "gmksz": "Hemidactylus",
                                                "value": "Hemidactylus",
                                                "label": "Hemidactylus",
                                                "parentId": 233,
                                                "children": [
                                                    {
                                                        "id": 1075,
                                                        "gmksz": "Hemidactylus frenatus",
                                                        "value": "Hemidactylus frenatus",
                                                        "label": "Hemidactylus frenatus",
                                                        "parentId": 550,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 138,
                                        "gmksz": "Iguanidae",
                                        "value": "Iguanidae",
                                        "label": "Iguanidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 306,
                                                "gmksz": "Liolaemus",
                                                "value": "Liolaemus",
                                                "label": "Liolaemus",
                                                "parentId": 138,
                                                "children": [
                                                    {
                                                        "id": 754,
                                                        "gmksz": "Liolaemus ruibali",
                                                        "value": "Liolaemus ruibali",
                                                        "label": "Liolaemus ruibali",
                                                        "parentId": 306,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 188,
                                        "gmksz": "Lacertidae",
                                        "value": "Lacertidae",
                                        "label": "Lacertidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 559,
                                                "gmksz": "Lacerta",
                                                "value": "Lacerta",
                                                "label": "Lacerta",
                                                "parentId": 188,
                                                "children": [
                                                    {
                                                        "id": 1096,
                                                        "gmksz": "Lacerta agilis",
                                                        "value": "Lacerta agilis",
                                                        "label": "Lacerta agilis",
                                                        "parentId": 559,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 578,
                                                "gmksz": "Podarcis",
                                                "value": "Podarcis",
                                                "label": "Podarcis",
                                                "parentId": 188,
                                                "children": [
                                                    {
                                                        "id": 1126,
                                                        "gmksz": "Podarcis siculus",
                                                        "value": "Podarcis siculus",
                                                        "label": "Podarcis siculus",
                                                        "parentId": 578,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 462,
                                                "gmksz": "Takydromus",
                                                "value": "Takydromus",
                                                "label": "Takydromus",
                                                "parentId": 188,
                                                "children": [
                                                    {
                                                        "id": 950,
                                                        "gmksz": "Takydromus septentrionalis",
                                                        "value": "Takydromus septentrionalis",
                                                        "label": "Takydromus septentrionalis",
                                                        "parentId": 462,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 161,
                                        "gmksz": "Shinisauridae",
                                        "value": "Shinisauridae",
                                        "label": "Shinisauridae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 354,
                                                "gmksz": "Shinisaurus",
                                                "value": "Shinisaurus",
                                                "label": "Shinisaurus",
                                                "parentId": 161,
                                                "children": [
                                                    {
                                                        "id": 805,
                                                        "gmksz": "Shinisaurus crocodilurus",
                                                        "value": "Shinisaurus crocodilurus",
                                                        "label": "Shinisaurus crocodilurus",
                                                        "parentId": 354,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 177,
                                        "gmksz": "Viperidae",
                                        "value": "Viperidae",
                                        "label": "Viperidae",
                                        "parentId": 36,
                                        "children": [
                                            {
                                                "id": 435,
                                                "gmksz": "Bitis",
                                                "value": "Bitis",
                                                "label": "Bitis",
                                                "parentId": 177,
                                                "children": [
                                                    {
                                                        "id": 898,
                                                        "gmksz": "Bitis arietans",
                                                        "value": "Bitis arietans",
                                                        "label": "Bitis arietans",
                                                        "parentId": 435,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 586,
                                                "gmksz": "Bothrops",
                                                "value": "Bothrops",
                                                "label": "Bothrops",
                                                "parentId": 177,
                                                "children": [
                                                    {
                                                        "id": 1136,
                                                        "gmksz": "Bothrops atrox",
                                                        "value": "Bothrops atrox",
                                                        "label": "Bothrops atrox",
                                                        "parentId": 586,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 587,
                                                "gmksz": "Crotalus",
                                                "value": "Crotalus",
                                                "label": "Crotalus",
                                                "parentId": 177,
                                                "children": [
                                                    {
                                                        "id": 1137,
                                                        "gmksz": "Crotalus atrox",
                                                        "value": "Crotalus atrox",
                                                        "label": "Crotalus atrox",
                                                        "parentId": 587,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 529,
                                                "gmksz": "Vipera",
                                                "value": "Vipera",
                                                "label": "Vipera",
                                                "parentId": 177,
                                                "children": [
                                                    {
                                                        "id": 1124,
                                                        "gmksz": "Vipera berus",
                                                        "value": "Vipera berus",
                                                        "label": "Vipera berus",
                                                        "parentId": 529,
                                                        "children": null,
                                                        "slots": null
                                                    },
                                                    {
                                                        "id": 1156,
                                                        "gmksz": "Vipera ursinii",
                                                        "value": "Vipera ursinii",
                                                        "label": "Vipera ursinii",
                                                        "parentId": 529,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            },
                            {
                                "id": 45,
                                "gmksz": "Testudines",
                                "value": "Testudines",
                                "label": "Testudines",
                                "parentId": 6,
                                "children": [
                                    {
                                        "id": 121,
                                        "gmksz": "Cheloniidae",
                                        "value": "Cheloniidae",
                                        "label": "Cheloniidae",
                                        "parentId": 45,
                                        "children": [
                                            {
                                                "id": 338,
                                                "gmksz": "Chelonia",
                                                "value": "Chelonia",
                                                "label": "Chelonia",
                                                "parentId": 121,
                                                "children": [
                                                    {
                                                        "id": 787,
                                                        "gmksz": "Chelonia mydas",
                                                        "value": "Chelonia mydas",
                                                        "label": "Chelonia mydas",
                                                        "parentId": 338,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 311,
                                                "gmksz": "Lepidochelys",
                                                "value": "Lepidochelys",
                                                "label": "Lepidochelys",
                                                "parentId": 121,
                                                "children": [
                                                    {
                                                        "id": 759,
                                                        "gmksz": "Lepidochelys kempii",
                                                        "value": "Lepidochelys kempii",
                                                        "label": "Lepidochelys kempii",
                                                        "parentId": 311,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 194,
                                        "gmksz": "Geoemydidae",
                                        "value": "Geoemydidae",
                                        "label": "Geoemydidae",
                                        "parentId": 45,
                                        "children": [
                                            {
                                                "id": 613,
                                                "gmksz": "Mauremys",
                                                "value": "Mauremys",
                                                "label": "Mauremys",
                                                "parentId": 194,
                                                "children": [
                                                    {
                                                        "id": 1182,
                                                        "gmksz": "Mauremys reevesii",
                                                        "value": "Mauremys reevesii",
                                                        "label": "Mauremys reevesii",
                                                        "parentId": 613,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 461,
                                                "gmksz": "Sacalia",
                                                "value": "Sacalia",
                                                "label": "Sacalia",
                                                "parentId": 194,
                                                "children": [
                                                    {
                                                        "id": 949,
                                                        "gmksz": "Sacalia bealei",
                                                        "value": "Sacalia bealei",
                                                        "label": "Sacalia bealei",
                                                        "parentId": 461,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    },
                                    {
                                        "id": 223,
                                        "gmksz": "Testudinidae",
                                        "value": "Testudinidae",
                                        "label": "Testudinidae",
                                        "parentId": 45,
                                        "children": [
                                            {
                                                "id": 610,
                                                "gmksz": "Gopherus",
                                                "value": "Gopherus",
                                                "label": "Gopherus",
                                                "parentId": 223,
                                                "children": [
                                                    {
                                                        "id": 1170,
                                                        "gmksz": "Gopherus berlandieri",
                                                        "value": "Gopherus berlandieri",
                                                        "label": "Gopherus berlandieri",
                                                        "parentId": 610,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            },
                                            {
                                                "id": 553,
                                                "gmksz": "Testudo",
                                                "value": "Testudo",
                                                "label": "Testudo",
                                                "parentId": 223,
                                                "children": [
                                                    {
                                                        "id": 1090,
                                                        "gmksz": "Testudo hermanni",
                                                        "value": "Testudo hermanni",
                                                        "label": "Testudo hermanni",
                                                        "parentId": 553,
                                                        "children": null,
                                                        "slots": null
                                                    }
                                                ],
                                                "slots": null
                                            }
                                        ],
                                        "slots": null
                                    }
                                ],
                                "slots": null
                            }
                        ],
                        "slots": null
                    }
                ],
            },
            {
                value: 'Domestic animals',
                label: 'Domestic animals',
                key: 'dome',
                children: [
                    {
                        value: 'Bovine',
                        label: 'Bovine',
                        key: 'bovine',
                    },
                    {
                        value: 'Horse',
                        label: 'Horse',
                        key: 'horse',
                    },
                    {
                        value: 'Pig',
                        label: 'Pig',
                        key: 'pig',
                    },
                    {
                        value: 'Sheep',
                        label: 'Sheep',
                        key: 'sheep',
                    }
                ]
            }
        ],
        speciesArr: [],
    },
    components: {
        VNodes: {
            functional: true,
            render: (h, ctx) => ctx.props.vnodes,
        },
    },
    created: function(){
    },
    mounted: function (){
        // console.log(this)
        // that = this;
        this.getExhibitionInfo(1, 10);
        this.getSpecies();
        // this.getSampleSite1();
        // this.getSampleSite2();
        this.getInstrument();
        this.getLibraryStrategy();
        this.getBioProjectType();
        // getExhibitionInfo(1, 10);
        // this.getALl();
    },
    methods:{
        changeTimePicker(date, dateString){
            vm.startDate = dateString[0];
            vm.endDate = dateString[1];
        },
        changeStartMonth(value){
            vm.startMonth = value;
        },
        changeEndMonth(value){
            if(value <= 0 || value < vm.startMonth){
                vm.$message.warning("The end age must be older than the start age!Otherwise we will not use this as a search criteria.");
                vm.endMonth = '';
                return;
            }
            vm.endMonth = value;
        },
        DeselectSpecies() {
            console.log(vm.species);
            vm.species = '';
        },
        DeselectSampleSite1() {
            vm.sampleSite1 = '';
        },
        // DeselectSampleSite2() {
        //     vm.sampleSite2 = '';
        // },
        DeselectInstrument() {
            vm.instrument = '';
        },
        DeselectLibraryStrategy() {
          vm.libraryStrategy = '';
        },
        DeselectStudyType() {
            vm.newStudyType = '';
        },
        DeselectSex() {
            vm.newSex = '';
        },
        DeselectDNA() {
            vm.newDna = '';
        },
        // addItem() {
        //     console.log('addItem');
        //     this.items.push(`New item ${index++}`);
        // },
        // customRow(record, index) {
        //     return {
        //         on: {
        //             click: (event) => {
        //                 console.log(record, index);
        //             },
        //         }
        //     };
        // },

        rowClassName(record, index) {
            // console.log(record, index);
            let className = 'light-row';
            if (index % 2 === 1)
                className = 'dark-row';
            return className;
        },
        rowSelection() {},
        onSelectChange(selectedRowKeys) {
            // console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
            console.log(this.selectedRowKeys);
        },
        printData() {
            if( vm.selectedRowKeys.length == 0){
                if(vm.species != '' || vm.sampleSite1 != '' || vm.instrument != ''|| vm.libraryStrategy != ''|| vm.Bioprojecttype != ''){
                    this.DownLoadAllInfo();
                }
                // this.downloadExl( vm.All);
            }else{
                vm.printResult=[]
                // for(var i=0;i<vm.selectedRowKeys.length;i++){
                //     vm.printResult.push(vm.temporaryData[i])
                // }
                for(var i=0;i<vm.selectedRowKeys.length;i++){
                    vm.printResult.push(vm.temporaryData[vm.selectedRowKeys[i]])
                }
                this.downloadExl(vm.printResult);
            }
        },
        filterOption(input, option) {
            return (
                option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
            );
        },
        // var tmpDown; //导出的二进制对象
        downloadExl(json, type) {
            // console.log(json);
            json = reorganizeObj(json);
            //根据json数据，获取excel的第一行(例如:姓名、年龄、性别)存至map
            var tmpdata = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
                keyMap.push(k);
                json[0][k] = k;
            }
            var tmpdata = [];
            json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                v: v[k],
                position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)

            }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                v: v.v
            });

            //设置区域,比如表格从A1到D10
            var outputPos = Object.keys(tmpdata);
            var tmpWB = {
                SheetNames: [], //保存的表标题
                Sheets: { }
            };

            var sheetName = 'sheet';

            tmpWB.SheetNames.push(sheetName);

            tmpWB.Sheets[sheetName] = Object.assign({},
                tmpdata, //内容
                { '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] }//设置填充区域
            );

            //创建二进制对象写入转换好的字节流
            tmpDown = new Blob([s2ab(XLSX.write(tmpWB,
                { bookType: (type == undefined ? 'xlsx' : type), bookSST: false, type: 'binary' }//这里的数据是用来定义导出的格式类型
            ))], {
                type: ""
            });
            var href = URL.createObjectURL(tmpDown); //创建对象超链接
            var aLink = document.createElement('a');
            aLink.href = href;//绑定a标签
            // var timestamp=new Date().getTime()；
            aLink.download = new Date().getTime() + '.xlsx';
            aLink.click();//模拟点击实现下载

            setTimeout(function () { //延时释放
                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
            // this.getExhibitionInfo(vm.pn, vm.pageSize);
        },
        //选择页数
        onChange(pageNumber) {
            // console.log('Page: ', pageNumber);
            vm.pn = pageNumber;
            // vm.getExhibitionInfo(vm.pn, vm.pageSize);
            // getExhibitionInfo(vm.pn, vm.pageSize);
            this.FAQ = true;
            axios.post('/Exhibition/selectChangeInfo', {
                pn: vm.pn,
                pageSize: vm.pageSize,
                species:vm.species == undefined ? '' : vm.species,
                sampleSite1:vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
                instrument:vm.instrument,
                libraryStrategy:vm.libraryStrategy,
                newStudyType:vm.newStudyType == undefined ? '' : vm.newStudyType,
                newDna: vm.newDna,
                newSex: vm.newSex,
                startDate: vm.startDate,
                endDate: vm.endDate,
                startMonth: vm.startMonth == null ? '' : vm.startMonth,
                endMonth: vm.endMonth == null ? '' : vm.endMonth,
                orderField: vm.nowOrder.orderField,
                order: vm.nowOrder.order
            }).then(function (response) {
                vm.result = response.data.list;
                vm.pageNum = response.data.pageNum;
                vm.pages = response.data.pages;
                vm.total = response.data.total;
                this.web();
                vm.FAQ = false;
            }).catch(function (error) {
                console.log(error);
            });
        },
        //搜索
        Search(){
            this.FAQ = true;
            axios.post('/Exhibition/selectInfo', {
                pn: vm.pn,
                pageSize: vm.pageSize,
                species:vm.species == undefined ? '' : vm.species,
                sampleSite1:vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
                instrument:vm.instrument,
                libraryStrategy:vm.libraryStrategy,
                newStudyType:vm.newStudyType == undefined ? '' : vm.newStudyType,
                newDna: vm.newDna,
                newSex: vm.newSex,
                startDate: vm.startDate,
                endDate: vm.endDate,
                startMonth: vm.startMonth == null ? '' : vm.startMonth,
                endMonth: vm.endMonth == null ? '' : vm.endMonth,
                orderField: vm.nowOrder.orderField,
                order: vm.nowOrder.order
            }).then(function (response) {
                vm.result = response.data.list;
                vm.pageNum = response.data.pageNum;
                vm.pages = response.data.pages;
                vm.total = response.data.total;
                this.web();
                vm.FAQ = false;
            }).catch(function (error) {
                console.log(error);
            });
        },

         // getALl() {
         //    that = this;
         //    axios.post('/Exhibition/getAllInfo',{
         //        }).then(function (response) {
         //            console.log(response);
         //            vm.AllInfo = [];
         //            vm.AllInfo = response.data;
         //            that.downloadExl(vm.AllInfo);
         //            // this.printInfo();
         //        }).catch(function (error) {
         //            console.log(error)
         //        });
         //    },

        //下载所有数据
        DownLoadAllInfo(){
            that = this;
            axios.post('/Exhibition/getAll', {
                species:vm.species == undefined ? '' : vm.species,
                sampleSite1:vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
                instrument:vm.instrument,
                libraryStrategy:vm.libraryStrategy,
                newStudyType:vm.newStudyType == undefined ? '' : vm.newStudyType,
                newDna: vm.newDna,
                newSex: vm.newSex,
                startDate: vm.startDate,
                endDate: vm.endDate,
                startMonth: vm.startMonth == null ? '' : vm.startMonth,
                endMonth: vm.endMonth == null ? '' : vm.endMonth,
            }).then(function (response) {
                console.log(response);
                vm.AllInfo = [];
                vm.AllInfo = response.data;
                that.downloadExl(vm.AllInfo);
                // vm.AllInfo = response.data.list;
                // console.log(vm.AllInfo);
            }).catch(function (error) {
                console.log(error);
            });
        },

        // printInfo() {
        //     this.downloadExl(vm.AllInfo);
        // },

        //重置
        Reset(){
            location.reload();
        },
        //拉取数据
        getExhibitionInfo(pn, pageSize) {
            this.FAQ = true;
            axios.post('/Exhibition/getExhibitionInfo',{
                pn: pn,
                pageSize: pageSize,
            }).then(function (response) {
                vm.result = response.data.list;
                console.log(vm.result);
                vm.pageNum = response.data.pageNum;
                vm.pages = response.data.pages;
                vm.total = response.data.total;
                for(var i=0;i<response.data.list.length;i++){
                    // console.log(response.data.list[i]);
                    vm.temporaryData.push(response.data.list[i]);
                }
                this.web();
                vm.FAQ = false;
                // var tmp = new Array();
                // var obj = new Object();
                // obj.pubId = "2021";
                // obj.web = "https://www.baidu.com";
                // tmp.push(obj);
                // vm.webAddress.push(tmp);
                // console.log(vm.webAddress)
                // for (webs in vm.webAddress) {
                //     for (web in webs) {
                //         console.log(web.pubId);
                //         console.log(web.web);
                //     }
                // }
            }).catch(function (error) {
                console.log(error);
            });
        },

        // selectWebById(text,record,index,result){
        //     console.log(text)
        //     console.log(record)
        //     console.log(index)
        //     console.log(result)
        //     axios.post('/Exhibition/getSkip',{
        //         id:record.projectId,
        //     }).then(function (response) {
        //         console.log(record.projectId)
        //         console.log(response)
        //         window.location.href = response.data[0].lianjie;
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // },
        getBioProjectType() {
            axios.post('/Animals/getBioProjectType', {

            })
                .then(function (response) {
                    let Obj1 = [];
                    let list = [];
                    list = response.data
                    for(let i = 0; i < list.length; i++){
                        if(list[i].parentId == 0){
                            var obj = {};
                            obj.id = list[i].id;
                            obj.value = list[i].bioProjectType;
                            obj.label = list[i].bioProjectType;
                            obj.children = [];
                            Obj1.push(obj);
                        }
                    }

                    for(let i = 0; i < list.length; i++){
                        for(let j = 0; j < Obj1.length; j++){
                            if(list[i].parentId == Obj1[j].id){
                                var obj = {};
                                obj.id = list[i].id;
                                obj.value = list[i].bioProjectType;
                                obj.label = list[i].bioProjectType;
                                obj.children = [];
                                Obj1[j].children.push(obj);
                            }
                        }
                    }

                    for(let i = 0; i < list.length; i++){
                        for(let j = 0; j < Obj1.length; j++){
                            for(let k = 0; k < Obj1[j].children.length; k++){
                                if(list[i].parentId == Obj1[j].children[k].id){
                                    var obj = {};
                                    obj.id = list[i].id;
                                    obj.value = list[i].bioProjectType;
                                    obj.label = list[i].bioProjectType;
                                    Obj1[j].children[k].children.push(obj);
                                }
                            }
                        }
                    }

                    vm.BioProjectType = Obj1
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        changeSpecies(){
            vm.species = '';
            if(vm.speciesArr.length > 1)
                vm.species = vm.speciesArr[vm.speciesArr.length - 1];
        },
        changeStudyType(){
            vm.newStudyType = vm.studyTypeArr.join('-');
        },
        changeSampleSite(){
            if(vm.sampleSite1List.length == 1){
                return;
            }
            vm.sampleSite1 = vm.sampleSite1List[1];
        },
        getSpecies() {
            axios.post('/Exhibition/getSpecies',{

            }).then(function (response) {
                vm.speciesList = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        // getSampleSite1() {
        //     axios.post('/Exhibition/getSampleSite1',{
        //
        //     }).then(function (response) {
        //         vm.sampleSite1List = response.data;
        //         // console.log(vm.sampleSite1List)
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // },
        // getSampleSite2() {
        //     axios.post('/Exhibition/getSampleSite2',{
        //
        //     }).then(function (response) {
        //         vm.sampleSite2List = response.data;
        //         // console.log(vm.sampleSite2List)
        //     }).catch(function (error) {
        //         console.log(error);
        //     });
        // },
        getInstrument() {
            axios.post('/Exhibition/getInstrument',{

            }).then(function (response) {
                vm.instrumentList = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        getLibraryStrategy() {
            axios.post('/Exhibition/getLibraryStrategy',{

            }).then(function (response) {
                vm.libraryStrategyList = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        },
        onOptionChange(value) {
            console.log(value[0]);
            if(value[0] == "Deselect All"){
                this.$refs.cascader.sValue = [];
                vm.Bioprojecttype = '';
            } else{
                vm.Bioprojecttype = '';
                vm.Bioprojecttype = value.join('-');
                console.log(vm.Bioprojecttype)
            }
        },
        changeTab (p, f, { field, order }) {
            this.nowOrder.orderField = field || '';
            this.nowOrder.order = order || '';
            this.FAQ = true;
            axios.post('/Exhibition/selectChangeInfo', {
                pn: vm.pn,
                pageSize: vm.pageSize,
                species: vm.species == undefined ? '' : vm.species,
                sampleSite1:vm.sampleSite1 == undefined ? '' : vm.sampleSite1,
                instrument:vm.instrument,
                libraryStrategy:vm.libraryStrategy,
                newStudyType:vm.newStudyType == undefined ? '' : vm.newStudyType,
                newDna: vm.newDna,
                newSex: vm.newSex,
                startDate: vm.startDate,
                endDate: vm.endDate,
                startMonth: vm.startMonth == null ? '' : vm.startMonth,
                endMonth: vm.endMonth == null ? '' : vm.endMonth,
                orderField: field || '',
                order: order || ''
            }).then(function (response) {
                vm.result = response.data.list;
                vm.pageNum = response.data.pageNum;
                vm.pages = response.data.pages;
                vm.total = response.data.total;
                this.web();
                vm.FAQ = false;
            }).catch(function (error) {
                console.log(error);
            });
        },
    }
})

function getCharCol(n) {
    let temCol = '',
        s = '',
        m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}

//字符串转字符流
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

// function getALl() {
//     axios.post('/Exhibition/getAllInfo',{
//     }).then(function (response) {
//         console.log(response);
//     }).catch(function (error) {
//         console.log(error)
//     });
// }
// function getExhibitionInfo(pn, pageSize) {
//     that.FAQ = true;
//     axios.post('/Exhibition/getExhibitionInfo',{
//         pn: pn,
//         pageSize: pageSize,
//     }).then(function (response) {
//         console.log(response);
//         console.log(response.data.list)
//         vm.result = response.data.list;
//         vm.pageNum = response.data.pageNum;
//         vm.pages = response.data.pages;
//         vm.total = response.data.total;
//         vm.FAQ = false;
//
//     }).catch(function (error) {
//         console.log(error);
//     });
// }

function reorganizeObj(jsonArr){
    for (const json of jsonArr) {
        delete json.experimentTitle;
        delete json.organismName;
        delete json.submitter;
        delete json.sampleTitle;
        delete json.totalRuns;
        delete json.librarySelection;
        delete json.sourceDatabase;
        delete json.sampleNumber;
        delete json.lianjieb;
        delete json.lianjiep;
        delete json.lianjies;
        delete json.lianjiee;
    }
    // for (let i = 0; i < jsonArr.length; i++) {
    //     delete jsonArr[i].age;
    //     delete jsonArr[i].breed;
    // }
    return jsonArr;
}

function web(){

    //此方法较为复杂；用splict方法即可
    var idChar="/"//定义判断分割符号的关键字
    var webChar=" "//定义判断分割符号的关键字

    var fatherwebindexArray = new Array();//临时存放的Id索引的父数组
    var fatheradressindexArray = new Array();//临时存放链接地址的父数组

    let allWebArray = new Array();//总Id的数组
    let allsWebArray = new Array();//总地址的数组

    for(var i=0;i<vm.result.length;i++){
        var idfindIndex = vm.result[i].pubmedId.indexOf(idChar);// 首位关键字出现的索引
        var chaObj = new Object();
        var iDtempObj = new Object();
        iDtempObj.puid = vm.result[i].pubmedId
        if(idfindIndex==-1){
            var oneTpyArray = new Array()
            chaObj.pubId = vm.result[i].pubmedId
            chaObj.web = vm.result[i].lianjiep
            oneTpyArray.push({
                pubId:vm.result[i].pubmedId,
                web:vm.result[i].lianjiep
            })
            allWebArray.push(oneTpyArray);
        }

        if(idfindIndex!=-1){
            var webfindIndex = vm.result[i].lianjiep.indexOf(webChar);// 首位关键字出现的索引
            var idindexArry = new Array();//每次循环一次需要清空（Id索引数组）
            var webindexArry = new Array();//每次循环一次需要清空（Web索引数组）
            var idlastIndex = vm.result[i].pubmedId.length;// 定义最后一位字符的索引
            var weblastIndex = vm.result[i].lianjiep.length;// 定义最后一位字符的索引

            idindexArry.push(0)//0开头的默认索引加入
            webindexArry.push(0)//0开头的默认索引加入
            idindexArry.push(idfindIndex)
            webindexArry.push(webfindIndex)
            for(var j=0;j<vm.result[i].pubmedId.length;j++){
                idfindIndex = vm.result[i].pubmedId.indexOf(idChar,idfindIndex+1);
                if(idfindIndex==-1){// 没找到相关索引返回-1；判断是否达到了末尾
                    idindexArry.push(idlastIndex)
                    break;
                }
                idindexArry.push(idfindIndex)
            }
            fatherwebindexArray.push(idindexArry)

            for(var k=0;k<vm.result[i].lianjiep.length;k++){
                webfindIndex = vm.result[i].lianjiep.indexOf(webChar,webfindIndex+1);

                if(webfindIndex==-1){// 没找到相关索引返回-1；判断是否达到了末尾
                    webindexArry.push(weblastIndex)
                    break;
                }
                webindexArry.push(webfindIndex)
            }
            fatheradressindexArray.push(webindexArry)

            //切割pubmeID-------------------------------------------------
            var web = vm.result[i].lianjiep
            for(var x=i;x<fatherwebindexArray.length;x++){
                var sonWebArray = new Array()
                var chaObj = new Object()
                for(var y=0;y<fatherwebindexArray[x].length;y++){
                    var previousIndex = fatherwebindexArray[x][y]//关键字符串的开头
                    var nextIndex = fatherwebindexArray[x][y+1]//关键字符串的末端
                    var differenceIndex = nextIndex-previousIndex//关键字符串的长度
                    if(y==fatherwebindexArray[x].length-1){
                        break;
                    }
                    chaObj.pubId = iDtempObj.puid.substr(previousIndex,differenceIndex)
                    sonWebArray.push({
                        pubId:chaObj.pubId,
                    })
                }
                allWebArray.push(sonWebArray)
            }

            for(var m=i;m<fatheradressindexArray.length;m++){
                var sonWebArray = new Array()
                var chaObjs = new Object()
                for(var n=0;n<fatheradressindexArray[m].length;n++){
                    var previousIndexs = fatheradressindexArray[m][n]//关键字符串的开头
                    var nextIndexs = fatheradressindexArray[m][n+1]//关键字符串的末端
                    var differenceIndexs = nextIndexs-previousIndexs//关键字符串的长度
                    if(n==fatheradressindexArray[m].length-1){
                        break;
                    }
                    chaObjs.web = web.substr(previousIndexs,differenceIndexs)
                    sonWebArray.push({
                        web:chaObjs.web,
                    })
                }
                allsWebArray.push(sonWebArray)
                vm.anclick='true'
            }
        }
    }
    if(vm.anclick=='true'){
        for(var l=0;l<allWebArray.length;l++){
            for(var h=0;h<allWebArray[l].length;h++){
                for(var q=0;q<allWebArray[l].length;q++)
                    allWebArray[l][q].web = allsWebArray[l][q].web
            }
        }
    }
    vm.webAddress = [];
    vm.webAddress = allWebArray;
    console.log(vm.webAddress);
}